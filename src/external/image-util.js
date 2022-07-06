const { createWriteStream, unlinkSync } = require("node:fs");
const { resolve } = require("node:path");
const axios = require("axios");
const sharp = require("sharp");
const Jimp = require("jimp");

const { makeDir, createFile } = require("./file");

/**
 * 단건 이미지파일 다운로드
 * @param imgUrl: string
 * @param downloadPath: string | undefined
 */
async function downloadImage(imgUrl, downloadPath = "") {
  const imageName = imgUrl.substring(imgUrl.lastIndexOf("/") + 1);
  makeDir(downloadPath); // 디렉토리가 존해하지않으면 생성
  const downPath = resolve(downloadPath, `${imageName}`);
  const writer = createWriteStream(downPath);
  const response = await axios({
    url: imgUrl,
    method: "GET",
    responseType: "stream",
  });
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    const resolveDone = async () => {
      const ext = downPath.split(".")[downPath.split(".").length - 1];
      let buffer;
      if (ext.toUpperCase() === "BMP") {
        const transFileName = `${downPath.substring(
          0,
          downPath.lastIndexOf(".")
        )}.jpg`;
        const bmpFile = await Jimp.read(downPath);
        await bmpFile.writeAsync(transFileName);
        buffer = await sharp(transFileName).withMetadata().webp().toBuffer();
        unlinkSync(transFileName);
      } else {
        buffer = await sharp(downPath).withMetadata().webp().toBuffer();
      }
      createFile(
        `${downPath.substring(0, downPath.lastIndexOf("."))}.webp`,
        buffer
      );
      unlinkSync(downPath);
      return resolve(
        `${imageName.substring(0, imageName.lastIndexOf("."))}.webp`
      );
    };
    writer.on("finish", resolveDone);
    writer.on("error", reject);
  });
}

exports.downloadImage = downloadImage;
