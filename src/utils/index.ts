import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getAllImgUrls = (content: string) =>
  content.match(/\!\[([^\]]+)\]\(([^\)]+)\)/g);

export const getImgUrl = (imgUrl: string) => imgUrl.match(/\]\(.+?\)/g);

export const getAllPostFiles = (nav = "") => {
  const absolutePostRootPath = path.join(
    process.cwd(),
    `${process.env.postRootPath}`,
    nav
  );
  const rootDirectoryFilesAndPostDirectorys = fs.readdirSync(
    absolutePostRootPath,
    {
      encoding: "utf-8",
      withFileTypes: true,
    }
  );
  const filteredRootPostDirectorys = rootDirectoryFilesAndPostDirectorys
    .filter((obj: any) => obj[Object.getOwnPropertySymbols(obj)[0]] === 2)
    .map((directory) => `${directory.name}`);
  const filteredRootPostFiles = rootDirectoryFilesAndPostDirectorys.filter(
    (obj: any) => obj[Object.getOwnPropertySymbols(obj)[0]] === 1
  );
  let postFiles = filteredRootPostFiles.map(
    (file) => `${nav === "" ? "" : `${nav}/`}${file.name}`
  );

  const recursiveCall = (postDirectory: string[]) => {
    if (postDirectory.length > 0) {
      const directoryName = postDirectory[0];
      const filesAndPostDirectoryByDirectoryName = fs.readdirSync(
        path.join(absolutePostRootPath, directoryName),
        {
          encoding: "utf-8",
          withFileTypes: true,
        }
      );
      const filteredDirectorys = filesAndPostDirectoryByDirectoryName.filter(
        (obj: any) => obj[Object.getOwnPropertySymbols(obj)[0]] === 2
      );
      const filteredFiles = filesAndPostDirectoryByDirectoryName.filter(
        (obj: any) => obj[Object.getOwnPropertySymbols(obj)[0]] === 1
      );
      if (filteredFiles.length > 0) {
        postFiles = postFiles.concat(
          filteredFiles.map((file) => `${directoryName}/${file.name}`)
        );
      }
      postDirectory = postDirectory.concat(
        filteredDirectorys.map(
          (directory) => `${directoryName}/${directory.name}`
        )
      );
      recursiveCall(postDirectory.slice(1));
    }
  };
  // posts에 폴더가 1개이하일때만 첫번째 메뉴에 게시물 전체조회를 한다.
  // filteredRootPostDirectorys.length < 2 &&
  recursiveCall(filteredRootPostDirectorys);
  return postFiles;
};

export const getAllPostFolders = (nav = "") => {
  const absolutePostRootPath = path.join(
    process.cwd(),
    `${process.env.postRootPath}`,
    nav
  );
  const rootDirectoryFilesAndPostDirectorys = fs.readdirSync(
    absolutePostRootPath,
    {
      encoding: "utf-8",
      withFileTypes: true,
    }
  );
  let filteredRootPostDirectorys = rootDirectoryFilesAndPostDirectorys
    .filter((obj: any) => obj[Object.getOwnPropertySymbols(obj)[0]] === 2)
    .map((directory) => `${nav === "" ? "" : `${nav}/`}${directory.name}`);

  const recursiveCall = (postDirectory: string[]) => {
    if (postDirectory.length > 0) {
      const directoryName = postDirectory[0];
      const filesAndPostDirectoryByDirectoryName = fs.readdirSync(
        path.join(absolutePostRootPath, directoryName),
        {
          encoding: "utf-8",
          withFileTypes: true,
        }
      );
      const filteredDirectorys = filesAndPostDirectoryByDirectoryName.filter(
        (obj: any) => obj[Object.getOwnPropertySymbols(obj)[0]] === 2
      );
      if (filteredDirectorys.length > 0) {
        filteredRootPostDirectorys = filteredRootPostDirectorys.concat(
          filteredDirectorys.map((dir) => `${directoryName}/${dir.name}`)
        );
      }
      postDirectory = postDirectory.concat(
        filteredDirectorys.map(
          (directory) => `${directoryName}/${directory.name}`
        )
      );
      recursiveCall(postDirectory.slice(1));
    }
  };
  recursiveCall(filteredRootPostDirectorys);
  return filteredRootPostDirectorys;
};

export const getListData = (nav = "") => {
  const postFiles = getAllPostFiles(nav);
  const navList = getAllPostFolders();
  const data = postFiles?.reduce((acc: { [key: string]: any }[], cur) => {
    if (cur.endsWith(".md")) {
      const file = path.join(
        process.cwd(),
        `${process.env.postRootPath}/${cur}`
      );
      const source = fs.readFileSync(file, "utf8");
      const { data, content } = matter(source);
      const allImgUrls = getAllImgUrls(content);
      const firstImgUrl = allImgUrls && getImgUrl(allImgUrls[0]);
      data.imgUrl =
        (firstImgUrl && firstImgUrl[0].replace("](", "").replace(")", "")) ||
        "";
      data.blogPath = cur.replace(".md", "");
      acc.push(data);
    }
    return acc;
  }, []);
  data.sort((a, b) => b.id - a.id);
  const metaData = {
    pageUrl: `${process.env.homeUrl}${nav === "" ? "" : `/${nav}`}`,
    nav,
  };
  return {
    props: { list: data, metaData, navList },
  };
};
