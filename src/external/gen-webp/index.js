const { readdirSync } = require("node:fs");
const path = require("node:path");
const { transImageToWebp } = require("../image-util");
const { join } = require("node:path");
const AssetRootPath = path.join(process.cwd(), `public/assets`);

const getAllImageFiles = () => {
  const rootAssetsFiles = readdirSync(AssetRootPath, {
    encoding: "utf-8",
    withFileTypes: true,
  });
  const rootAssetsPostDirs = rootAssetsFiles
    .filter((obj) => obj[Object.getOwnPropertySymbols(obj)[0]] === 2)
    .map((directory) => `${directory.name}`);

  let postFiles = rootAssetsFiles
    .filter(
      (obj) =>
        obj[Object.getOwnPropertySymbols(obj)[0]] === 1 &&
        obj.name !== ".DS_Store" &&
        "webp" !== obj.name.split(".")[obj.name.split(".").length - 1]
    )
    .map((file) => file.name);

  const recursiveCall = (postDirectory) => {
    if (postDirectory.length > 0) {
      const directoryName = postDirectory[0];
      const filesAndAssetDirectoryByDirectoryName = readdirSync(
        path.join(AssetRootPath, directoryName),
        {
          encoding: "utf-8",
          withFileTypes: true,
        }
      );
      const filteredDirectorys = filesAndAssetDirectoryByDirectoryName.filter(
        (obj) => obj[Object.getOwnPropertySymbols(obj)[0]] === 2
      );
      const filteredFiles = filesAndAssetDirectoryByDirectoryName.filter(
        (obj) =>
          obj[Object.getOwnPropertySymbols(obj)[0]] === 1 &&
          obj.name !== ".DS_Store" &&
          "webp" !== obj.name.split(".")[obj.name.split(".").length - 1]
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
  recursiveCall(rootAssetsPostDirs);
  return postFiles;
};

(async () => {
  try {
    const assetFiles = getAllImageFiles();
    await Promise.all(
      assetFiles.map((asset) => transImageToWebp(join(AssetRootPath, asset)))
    );
  } catch (err) {
    console.log(err);
  }
})();
