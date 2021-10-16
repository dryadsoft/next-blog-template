/** @type {import('next').NextConfig} */

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
      }
    : { reactStrictMode: true };

module.exports = nestConfig();
