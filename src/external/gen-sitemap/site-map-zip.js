const { createReadStream, createWriteStream, readdirSync } = require("node:fs");
const { createGzip } = require("node:zlib");
const { pipeline } = require("node:stream");
const path = require("node:path");
const globby = require("globby");
const prettier = require("prettier");
const fileUtils = require("../file");
require("dotenv").config();
const getDate = new Date().toISOString();

const DOMAIN = process.env.NEXT_PUBLIC_HOME_URL;
const SITE_MAP_DIR = process.env.NEXT_SITE_MAP_DIR;

function createZip() {
  readdirSync(path.join(process.cwd(), SITE_MAP_DIR)).forEach((file) => {
    if (file.endsWith(".xml") && file !== "sitemap.xml") {
      const fileContents = createReadStream(path.join(process.cwd(), `${SITE_MAP_DIR}/${file}`));
      const writeStream = createWriteStream(path.join(process.cwd(), `${SITE_MAP_DIR}/${file}.gz`));
      const gzip = createGzip();

      pipeline(fileContents, gzip, writeStream, (err) => {
        if (err) {
          console.error("An error occurred:", err);
          process.exitCode = 1;
        }
        createSiteMap();
      });
    }
  });
}

// public/sitemap 내부의 모든 .gz 파일을 불러와 참조하도록 합니다.
function createSiteMap() {
  const pages = globby.sync([`${SITE_MAP_DIR}/*.gz`]);
  const sitemapIndex = `
      ${pages
        .map((page) => {
          const path = page.replace("./public/", "");
          return `
            <sitemap>
              <loc>${`${DOMAIN}/${path}`}</loc>
              <lastmod>${getDate}</lastmod>
            </sitemap>`;
        })
        .join("")}
    `;

  const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapIndex}
      </sitemapindex>
    `;

  const formattedSitemap = (sitemap) => prettier.format(sitemap, { parser: "html" });
  fileUtils.createFile("./public/sitemap.xml", formattedSitemap(sitemap));
}

exports.siteMapZip = createZip;
