const prettier = require("prettier");
const fileUtils = require("../file");
require("dotenv").config();

// env.NEXT_PUBLIC_HOME_URL
const DOMAIN = process.env.NEXT_PUBLIC_HOME_URL;
const SITE_MAP_DIR = process.env.NEXT_SITE_MAP_DIR;
const POST_ROOT_PATH = process.env.NEXT_POST_ROOT_PATH;
const getToday = new Date().toISOString();

const makeUrl = (dir, arrPages) => {
  return arrPages
    .map(
      (page) => `<url>
  <loc>${DOMAIN}${dir}${fileUtils.getFileName(page.name)}</loc>
  <lastmod>${getToday}</lastmod>
</url>`
    )
    .join("");
};

const genSiteMap = (urls) => {
  const generateSitemapText = `
    <?xml version="1.0" encoding="UTF-8"?>
      <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${urls}
      </urlset>`;
  const formattedSitemap = prettier.format(generateSitemapText, {
    parser: "html",
  });
  return formattedSitemap;
};

const createDirectorySitemapFile = (commonUrls = [], dirName = "") => {
  const dirs = fileUtils.getDirectorys({
    path: `${POST_ROOT_PATH}/${dirName}`,
    type: "d",
  });
  if (dirs.length > 0) {
    commonUrls.push(...dirs.flat());
    dirs.forEach((dir) => {
      createDirectorySitemapFile(commonUrls, dirName === "" ? dir.name : `${dirName}/${dir.name}`);
    });
  } else {
    if (commonUrls.length > 0) {
      const urls = makeUrl("/", commonUrls);
      const siteMapFile = genSiteMap(urls);
      fileUtils.createFile(`${SITE_MAP_DIR}/sitemap_directory.xml`, siteMapFile);
    }
  }
};

const createSiteMapFile = (path = "") => {
  const dirs = fileUtils.getDirectorys({
    path: `${POST_ROOT_PATH}/${path}`,
    type: "d",
  });
  const files = fileUtils.getDirectorys({
    path: `${POST_ROOT_PATH}/${path}`,
    type: "f",
  });
  if (files.length > 0) {
    const urls = makeUrl(`${path === "" ? "/" : `/${path}/`}`, files);
    const siteMapText = genSiteMap(urls);
    fileUtils.createFile(
      `${SITE_MAP_DIR}/sitemap${path === "" ? "_root" : `_${path.replaceAll("/", "_")}`}.xml`,
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
