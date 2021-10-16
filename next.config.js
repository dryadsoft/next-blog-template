/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "production" ? "/next-blog-template" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/next-blog-template/" : "",
  images: {
    loader: "imgix",
    path: "https://dryadsoft.github.io/next-blog-template/",
  },
};
