/** @type {import('next').NextConfig} */

const env = {
  siteName: "next-blog-template",
  author: "dryad",
  postRootPath: process.env.NEXT_POST_ROOT_PATH,
  homeUrl: `${process.env.NEXT_PUBLIC_HOME_URL}/`,
  rssUrl: `${process.env.NEXT_PUBLIC_HOME_URL}/rss`,
  GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  GITHUB_REPO: process.env.NEXT_GITHUB_REPO,
};
const nestConfig = () =>
  process.env.NODE_ENV === "production"
    ? {
        reactStrictMode: true,
        basePath: "/next-blog-template",
        assetPrefix: "/next-blog-template/",
        images: {
          loader: "imgix",
          path: `${process.env.NEXT_PUBLIC_HOME_URL}/`,
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
