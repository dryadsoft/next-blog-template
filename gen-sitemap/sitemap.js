const gen = require("./site-map-gen");
const zip = require("./site-map-zip");

gen
  .sitemapGen()
  .then(() => zip.siteMapZip())
  .catch(console.log);
