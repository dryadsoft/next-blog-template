const zlib = require("zlib");
const fs = require("fs");
const globby = require("globby");
const prettier = require("prettier");
require("dotenv").config();
const getDate = new Date().toISOString();

const DOMAIN = process.env.NEXT_PUBLIC_HOME_URL;
const SITE_MAP_DIR = process.env.NEXT_SITE_MAP_DIR;

function createZip() {
  fs.readdirSync(SITE_MAP_DIR).forEach((file) => {
    if (file.endsWith(".xml") && file !== "sitemap.xml") {
      const fileContents = fs.createReadStream(`${SITE_MAP_DIR}/${file}`);
      const writeStream = fs.createWriteStream(`${SITE_MAP_DIR}/${file}.gz`);
      const zip = zlib.createGzip();

      fileContents
        .pipe(zip)
        .on("error", (err) => console.error(err))
        .pipe(writeStream)
        .on("error", (err) => console.err(err))
        .end(() => createSiteMap());
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

  const formattedSitemap = (sitemap) =>
    prettier.format(sitemap, { parser: "html" });
  fs.writeFileSync("./public/sitemap.xml", formattedSitemap(sitemap), "utf8");
}

exports.siteMapZip = createZip;
