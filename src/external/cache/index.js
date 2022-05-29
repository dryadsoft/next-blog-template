const { readdirSync, readFileSync } = require("node:fs");
const path = require("node:path");
const matter = require("gray-matter");
const fileUtils = require("../file");

require("dotenv").config();
const POST_ROOT_PATH = process.env.NEXT_POST_ROOT_PATH;
const CACHE_DATA_PATH = path.join(
  process.cwd(),
  "src/external/cache/blog.json"
);

const getAllImgUrls = (content) => content.match(/\!\[([^\]]+)\]\(([^\)]+)\)/g);
const getImgUrl = (imgUrl) => imgUrl.match(/\]\(.+?\)/g);

const getAllPostFiles = (nav = "") => {
  const absolutePostRootPath = path.join(
    process.cwd(),
    `${POST_ROOT_PATH}`,
    nav
  );
  const rootDirectoryFilesAndPostDirectorys = readdirSync(
    absolutePostRootPath,
    {
      encoding: "utf-8",
      withFileTypes: true,
    }
  );
  const filteredRootPostDirectorys = rootDirectoryFilesAndPostDirectorys
    .filter((obj) => obj[Object.getOwnPropertySymbols(obj)[0]] === 2)
    .map((directory) => `${directory.name}`);
  const filteredRootPostFiles = rootDirectoryFilesAndPostDirectorys.filter(
    (obj) => obj[Object.getOwnPropertySymbols(obj)[0]] === 1
  );
  let postFiles = filteredRootPostFiles.map(
    (file) => `${nav === "" ? "" : `${nav}/`}${file.name}`
  );

  const recursiveCall = (postDirectory) => {
    if (postDirectory.length > 0) {
      const directoryName = postDirectory[0];
      const filesAndPostDirectoryByDirectoryName = readdirSync(
        path.join(absolutePostRootPath, directoryName),
        {
          encoding: "utf-8",
          withFileTypes: true,
        }
      );
      const filteredDirectorys = filesAndPostDirectoryByDirectoryName.filter(
        (obj) => obj[Object.getOwnPropertySymbols(obj)[0]] === 2
      );
      const filteredFiles = filesAndPostDirectoryByDirectoryName.filter(
        (obj) => obj[Object.getOwnPropertySymbols(obj)[0]] === 1
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
  recursiveCall(filteredRootPostDirectorys);
  return postFiles;
};

const getListData = (nav = "") => {
  const postFiles = getAllPostFiles(nav);
  const data = postFiles.reduce((acc, cur) => {
    if (cur.endsWith(".md")) {
      const file = path.join(process.cwd(), `${POST_ROOT_PATH}/${cur}`);
      const source = readFileSync(file, "utf8");
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

  return data;
};

try {
  const cachedData = getListData();
  fileUtils.createFile(
    CACHE_DATA_PATH,
    JSON.stringify({ CachedData: cachedData })
  );
} catch (err) {
  console.log(err);
}
