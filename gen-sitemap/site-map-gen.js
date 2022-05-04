const fs = require("fs/promises");
const prettier = require("prettier");
require("dotenv").config();

// env.NEXT_PUBLIC_HOME_URL
const DOMAIN = process.env.NEXT_PUBLIC_HOME_URL;
const SITE_MAP_DIR = process.env.NEXT_SITE_MAP_DIR;
const POST_ROOT_PATH = process.env.NEXT_POST_ROOT_PATH;
const getToday = new Date().toISOString();

/**
 * @param type d: 디렉토리, f: file
 */
const getDirectorys = async ({ path, type }) => {
  const types = { f: 1, d: 2 };
  const dirs = await fs.readdir(path, {
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

const makeUrl = (dir, arrPages) => {
  return arrPages
    .map(
      (page) => `<url>
  <loc>${DOMAIN}${dir}${getFileName(page.name)}</loc>
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

const createNewXmlFile = async (path, content) => {
  return await fs.writeFile(path, content, "utf8");
};

const createDirectorySitemapFile = async (commonUrls = [], dirName = "") => {
  const dirs = await getDirectorys({
    path: `${POST_ROOT_PATH}/${dirName}`,
    type: "d",
  });
  if (dirs.length > 0) {
    commonUrls.push(...dirs.flat());
    dirs.forEach(async (dir) => {
      await createDirectorySitemapFile(
        commonUrls,
        dirName === "" ? dir.name : `${dirName}/${dir.name}`
      );
    });
  } else {
    if (commonUrls.length > 0) {
      const urls = makeUrl("/", commonUrls);
      const siteMapFile = genSiteMap(urls);
      await createNewXmlFile(
        `${SITE_MAP_DIR}/sitemap_directory.xml`,
        siteMapFile
      );
    }
  }
};

const createSiteMapFile = async (path = "") => {
  const dirs = await getDirectorys({
    path: `${POST_ROOT_PATH}/${path}`,
    type: "d",
  });
  const files = await getDirectorys({
    path: `${POST_ROOT_PATH}/${path}`,
    type: "f",
  });
  if (files.length > 0) {
    const urls = makeUrl(`${path === "" ? "/" : `/${path}/`}`, files);
    const siteMapText = genSiteMap(urls);
    await createNewXmlFile(
      `${SITE_MAP_DIR}/sitemap${
        path === "" ? "_root" : `_${path.replaceAll("/", "_")}`
      }.xml`,
      siteMapText
    );
  }
  for (var dir of dirs) {
    await createSiteMapFile(`${path === "" ? "" : `${path}/`}${dir.name}`);
  }
};

const main = async () => {
  await createDirectorySitemapFile();
  await createSiteMapFile();
};

exports.sitemapGen = main;
