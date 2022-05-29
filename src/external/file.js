const { readdirSync, writeFileSync, readFileSync } = require("node:fs");
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

exports.getDirectorys = getDirectorys;
exports.getFileName = getFileName;
exports.createFile = createFile;
exports.getFileContent = getFileContent;
exports.formattedSitemap = formattedSitemap;
