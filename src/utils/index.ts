import fs from "fs";
import path from "path";

export const getAllImgUrls = (content: string) => content.match(/\!\[([^\]]+)\]\(([^\)]+)\)/g);

export const getImgUrl = (imgUrl: string) => imgUrl.match(/\]\(.+?\)/g);

export const getAllPostFiles = () => {
  const absolutePostRootPath = path.join(process.cwd(), `${process.env.postRootPath}`);
  const rootDirectoryFilesAndPostDirectorys = fs.readdirSync(absolutePostRootPath, {
    encoding: "utf-8",
    withFileTypes: true,
  });
  const filteredRootPostDirectorys = rootDirectoryFilesAndPostDirectorys
    .filter((obj: any) => obj[Object.getOwnPropertySymbols(obj)[0]] === 2)
    .map((directory) => directory.name);
  const filteredRootPostFiles = rootDirectoryFilesAndPostDirectorys.filter(
    (obj: any) => obj[Object.getOwnPropertySymbols(obj)[0]] === 1
  );
  let postFiles = filteredRootPostFiles.map((file) => file.name);

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
        postFiles = postFiles.concat(filteredFiles.map((file) => `${directoryName}/${file.name}`));
      }
      postDirectory = postDirectory.concat(
        filteredDirectorys.map((directory) => `${directoryName}/${directory.name}`)
      );
      recursiveCall(postDirectory.slice(1));
    }
  };
  recursiveCall(filteredRootPostDirectorys);
  return postFiles;
};
