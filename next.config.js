/** @type {import('next').NextConfig} */

const LOCALHOST = "http://localhost:3000";
const env = {
  siteName: "next-blog-template",
  author: "dryad",
  description: "Next.js를 이용한 정적블로그를 만드는 템플릿입니다.",
  postRootPath: process.env.NEXT_POST_ROOT_PATH,
  homeUrl: `${
    process.env.NODE_ENV === "development"
      ? LOCALHOST
      : process.env.NEXT_PUBLIC_HOME_URL
  }`,
  GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  GOOGLE_ADS: process.env.NEXT_PUBLIC_GOOGLE_ADS,
  GITHUB_REPO: process.env.NEXT_GITHUB_REPO,
};
const nestConfig = () =>
  process.env.NODE_ENV === "production"
    ? {
        reactStrictMode: true,
        basePath: "/next-blog-template", // 서브도메인이 아니면 "" 으로 할것
        assetPrefix: "/next-blog-template/", // 서브도메인이 아니면  "/" 으로 할것
        images: {
          loader: "imgix",
          path: `${process.env.NEXT_PUBLIC_HOME_URL}/`,
        },
        // trailingSlash: true,
        env: { ...env },
      }
    : {
        reactStrictMode: true,
        images: {
          loader: "imgix",
          path: `${LOCALHOST}/`,
        },
        // trailingSlash: true,
        env: { ...env },
      };

module.exports = nestConfig();
