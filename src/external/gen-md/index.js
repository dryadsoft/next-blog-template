const readline = require("node:readline");
const { join } = require("node:path");
const util = require("node:util");
const {
  getDirectorys,
  makeDir,
  isFile,
  createFile,
  getBlogPageId,
} = require("../file");
require("dotenv").config();

const POST_ROOT_PATH = `${process.env.NEXT_POST_ROOT_PATH}`;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const question = util.promisify(rl.question).bind(rl);

(async () => {
  console.clear();
  try {
    const answers = [...getPostMenus(), "새로운 메뉴생성"];
    const answer = await question(
      `${answers
        .map((folder, idx) => `${idx + 1}: ${folder}`)
        .join("\n")}\n포스트를 생성할 위치를 선택하십시오 (${answers
        .map((_, idx) => idx + 1)
        .join("/")}): `
    );
    const selectedNumber = parseInt(answer, 10);
    if (isNaN(selectedNumber)) {
      console.log("숫자만 입력하십시오.");
      rl.close();
    } else if (selectedNumber > answers.length || selectedNumber < 1) {
      console.log("보기에 해당하는 번호만 입력가능합니다.");
      rl.close();
    } else {
      if (selectedNumber !== answers.length) {
        const folderName = answers[selectedNumber - 1];
        await createPost(folderName);
      } else {
        const newFolderName = await createMenu();
        await createPost(newFolderName);
      }
    }
    rl.close();
  } catch (err) {
    rl.close();
  }
})();

async function createPost(folderName) {
  console.log(`[${folderName}]에 신규 포스트를 생성하겠습니다.`);
  const postName = await question(
    "포스트 파일명을 입력하십시오(포스트url 주소로 사용됩니다.): "
  );
  const newPostFileName = join(POST_ROOT_PATH, folderName, `${postName}.md`);
  const isAlreadyFile = isFile(newPostFileName);
  if (!isAlreadyFile) {
    createFile(newPostFileName, createMetaData());
  } else {
    console.log(`파일명이 이미 존재합니다. 다른이름으로 등록하십시오.`);
  }
}

async function createMenu() {
  console.log("새로운 메뉴를 생성하겠습니다.");
  const menuName = await question(
    "신규 생성할 메뉴명을 입력하십시오(영어로): "
  );
  const newDirectory = join(POST_ROOT_PATH, menuName);
  makeDir(newDirectory);
  return menuName;
}

function getPostMenus() {
  const pathNames = getDirectorys({ path: POST_ROOT_PATH, type: "d" }).map(
    (dir) => dir.name
  );
  return pathNames;
}

function createMetaData() {
  const today = new Date();
  return `---
id: ${getBlogPageId()}
title: 
description: 
regDate: "${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(today.getDate()).padStart(2, "0")}"
author: 
tag: []
---

`;
}
