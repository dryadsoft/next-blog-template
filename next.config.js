/** @type {import('next').NextConfig} */

const env = {
  siteName: "next-blog-templage",
  author: "dryadsoft",
  homeUrl: "https://dryadsoft.github.io/next-blog-template/",
  rssUrl: "https://reddb.tistory.com/rss",
};
const nestConfig = () =>
  process.env.NODE_ENV === "production"
    ? {
        reactStrictMode: true,
        basePath: "/next-blog-template",
        assetPrefix: "/next-blog-template/",
        images: {
          loader: "imgix",
          path: "https://dryadsoft.github.io/next-blog-template/",
        },
        trailingSlash: true,
        env: { ...env },
      }
    : {
        reactStrictMode: true,
        trailingSlash: true,
        env: { ...env },
      };

module.exports = nestConfig();
