/** @type {import('next').NextConfig} */

const LOCALHOST = "http://localhost:3000";
const SUB_DOMAIN = "/next-blog-template"; // 서브도메인이 아니면 "" 으로 할것
const env = {
  siteName: "Nextjs Blog Template",
  author: "dryadsoft",
  description: "Next.js를 이용한 정적블로그를 만드는 템플릿 블로그입니다.",
  postRootPath: process.env.NEXT_POST_ROOT_PATH,
  homeUrl: `${
    process.env.NODE_ENV === "development"
      ? LOCALHOST
      : process.env.NEXT_PUBLIC_HOME_URL
  }`,
  GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  GOOGLE_ADS: process.env.NEXT_PUBLIC_GOOGLE_ADS,
  GITHUB_REPO: process.env.NEXT_GITHUB_REPO,
  ASSET_PREFIX: `${process.env.NODE_ENV === "development" ? "" : SUB_DOMAIN}`,
};
const nestConfig = () =>
  process.env.NODE_ENV === "production"
    ? {
        reactStrictMode: true,
        basePath: `${env.ASSET_PREFIX}`,
        assetPrefix: `${env.ASSET_PREFIX}/`,
        images: {
          loader: "imgix",
          path: `${process.env.NEXT_PUBLIC_HOME_URL}/assets/`,
        },
        // trailingSlash: true,
        env: { ...env },
      }
    : {
        reactStrictMode: true,
        images: {
          loader: "imgix",
          path: `${LOCALHOST}/assets/`,
        },
        // trailingSlash: true,
        env: { ...env },
      };

module.exports = nestConfig();
