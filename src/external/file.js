const { readdirSync, writeFileSync } = require("node:fs");

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
  return writeFileSync(path, content, "utf8");
};

exports.getDirectorys = getDirectorys;
exports.getFileName = getFileName;
exports.createFile = createFile;
