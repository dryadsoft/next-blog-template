const { XMLParser } = require("fast-xml-parser");
const path = require("node:path");
const { readdirSync } = require("node:fs");
const {
  getFileContent,
  getDirectorys,
  getFileName,
  createFile,
  formattedSitemap,
} = require("../file");
require("dotenv").config();
// env.NEXT_PUBLIC_HOME_URL
const DOMAIN = process.env.NEXT_PUBLIC_HOME_URL;
const SITE_MAP_DIR = process.env.NEXT_SITE_MAP_DIR;
const POST_ROOT_PATH = process.env.NEXT_POST_ROOT_PATH;
const getToday = new Date().toISOString();

function getExistSitemapUrls() {
  const rootPath = path.join(process.cwd(), SITE_MAP_DIR);
  let urls = [];
  readdirSync(rootPath).forEach((file) => {
    if (file.endsWith(".xml") && file !== "sitemap.xml") {
      const parser = new XMLParser();
      const fileContent = getFileContent(path.join(rootPath, file));
      const json = parser.parse(fileContent);
      if (Array.isArray(json.urlset.url)) {
        urls = [...urls, ...json.urlset.url];
      } else {
        urls.push(json.urlset.url);
      }
    }
  });
  return urls;
}

const makeUrl = (dir, arrFiles) => {
  const existUrls = getExistSitemapUrls();
  return arrFiles
    .map((file) => {
      // const loc = `${DOMAIN}${dir}${getFileName(file.name)}`;
      const loc = encodeURI(`${DOMAIN}${dir}${getFileName(file.name)}`);
      const foundUrl = existUrls.find((url) => url.loc === loc);
      if (!foundUrl) {
        return `
        <url>
    <loc>${loc}</loc>
    <lastmod>${getToday}</lastmod>
  </url>`;
      }
      return `
      <url>
      <loc>${loc}</loc>
      <lastmod>${foundUrl.lastmod}</lastmod>
    </url>`;
    })
    .join("");
};

const genSiteMap = (urls) => {
  const generateSitemapText =
    formattedSitemap(`<?xml version="1.0" encoding="UTF-8"?>
      <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
        ${urls}
      </urlset>`);
  return generateSitemapText;
};

const createDirectorySitemapFile = (commonUrls = [], dirName = "") => {
  const dirs = getDirectorys({
    path: `${POST_ROOT_PATH}/${dirName}`,
    type: "d",
  });
  if (dirs.length > 0) {
    commonUrls.push(...dirs.flat());
    dirs.forEach((dir) => {
      createDirectorySitemapFile(
        commonUrls,
        dirName === "" ? dir.name : `${dirName}/${dir.name}`
      );
    });
  } else {
    if (commonUrls.length > 0) {
      const urls = makeUrl("/", commonUrls);
      const siteMapFile = genSiteMap(urls);
      createFile(`${SITE_MAP_DIR}/sitemap_directory.xml`, siteMapFile);
    }
  }
};

const createSiteMapFile = (path = "") => {
  const dirs = getDirectorys({
    path: `${POST_ROOT_PATH}/${path}`,
    type: "d",
  });
  const files = getDirectorys({
    path: `${POST_ROOT_PATH}/${path}`,
    type: "f",
  });
  if (files.length > 0) {
    const urls = makeUrl(`${path === "" ? "/" : `/${path}/`}`, files);
    const siteMapText = genSiteMap(urls);
    createFile(
      `${SITE_MAP_DIR}/sitemap${
        path === "" ? "_root" : `_${path.replaceAll("/", "_")}`
      }.xml`,
      siteMapText
    );
  }
  for (var dir of dirs) {
    createSiteMapFile(`${path === "" ? "" : `${path}/`}${dir.name}`);
  }
};

const main = () => {
  createDirectorySitemapFile();
  createSiteMapFile();
};

exports.sitemapGen = main;
