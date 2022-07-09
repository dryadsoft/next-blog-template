const {
  readdirSync,
  writeFileSync,
  readFileSync,
  mkdirSync,
} = require("node:fs");
const { dirname } = require("node:path");
const prettier = require("prettier");

const getFileContent = (path) => {
  return readFileSync(path, { encoding: "utf-8" });
};

/**
 * @param type d: 디렉토리, f: file
 */
const getDirectorys = ({ path, type }) => {
  const types = { f: 1, d: 2 };
  const dirs = readdirSync(path, {
    encoding: "utf-8",
    withFileTypes: true,
  });

  const filteredDirectorys = dirs.filter(
    (obj) => obj[Object.getOwnPropertySymbols(obj)[0]] === types[type]
  );
  return filteredDirectorys;
};

const getFileName = (strFile) => {
  strFile = strFile || "";
  const isExists = strFile.lastIndexOf(".");
  if (isExists !== -1) {
    return strFile.substring(0, strFile.lastIndexOf("."));
  }
  return strFile;
};

const createFile = (path, content) => {
  writeFileSync(path, content, "utf-8");
};

const formattedSitemap = (sitemap) =>
  prettier.format(sitemap, { parser: "html", endOfLine: "lf" });

/**
 * 디렉토리 존재여부
 * @param dirPath: string
 * @return result: boolean
 */
function isDierctory(dirPath) {
  let result = false;
  try {
    readdirSync(dirPath);
    result = true;
  } catch (e) {
    result = false;
  }
  return result;
}

/**
 * 파일 존재여부
 * @param filePath: string
 * @return result: boolean
 */
function isFile(filePath) {
  let result = false;
  try {
    readFileSync(filePath);
    result = true;
  } catch (e) {
    result = false;
  }
  return result;
}

/**
 * 디렉토리 생성
 * @param dirName
 * @return Promise<void>
 */
function makeDir(dirPath) {
  try {
    const isExistsDir = isDierctory(dirPath);
    if (!isExistsDir) {
      mkdirSync(dirPath);
    }
  } catch (err) {
    const prePath = dirname(dirPath);
    makeDir(prePath, [dirPath]);
  }
}

function createMarkdownFile(path, content) {
  makeDir(path.substring(0, path.lastIndexOf("/")));
  createFile(path, content);
}

function getToday() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(today.getDate()).padStart(2, "0")}`;
}

function getBlogPageId() {
  return `${getToday()}-${Date.now()}`;
}

exports.getDirectorys = getDirectorys;
exports.getFileName = getFileName;
exports.createFile = createFile;
exports.getFileContent = getFileContent;
exports.formattedSitemap = formattedSitemap;
exports.getBlogPageId = getBlogPageId;
exports.createMarkdownFile = createMarkdownFile;
exports.getToday = getToday;
exports.makeDir = makeDir;
exports.isFile = isFile;
