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
    const imagePath = downPath;
    const resolveDone = async (imagePath) => {
      await transImageToWebp(imagePath);
      return resolve(
        `${imageName.substring(0, imageName.lastIndexOf("."))}.webp`
      );
    };
    writer.on("finish", async () => await resolveDone(imagePath));
    writer.on("error", reject);
  });
}

async function transImageToWebp(imagePath) {
  const ext = imagePath.split(".")[imagePath.split(".").length - 1];
  let buffer;
  if (ext.toUpperCase() === "BMP") {
    const transFileName = `${imagePath.substring(
      0,
      imagePath.lastIndexOf(".")
    )}.jpg`;
    const bmpFile = await Jimp.read(imagePath);
    await bmpFile.writeAsync(transFileName);
    buffer = await sharp(transFileName).withMetadata().webp().toBuffer();
    unlinkSync(transFileName);
  } else {
    buffer = await sharp(imagePath).withMetadata().webp().toBuffer();
  }
  createFile(
    `${imagePath.substring(0, imagePath.lastIndexOf("."))}.webp`,
    buffer
  );
  unlinkSync(imagePath);
}
exports.downloadImage = downloadImage;
exports.transImageToWebp = transImageToWebp;
