/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // GitHub Pages のプロジェクトページ用（https://username.github.io/BambooVillageFarm-/）
  basePath: process.env.NODE_ENV === "production" ? "/BambooVillageFarm-" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/BambooVillageFarm-" : "",
};

module.exports = nextConfig;
