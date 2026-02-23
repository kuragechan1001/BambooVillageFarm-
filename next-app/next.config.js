/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === "production" ? "/BambooVillageFarm-" : "";
const nextConfig = {
  output: "export",
  // 静的エクスポート時は画像最適化APIが使えないため無効化
  images: { unoptimized: true },
  // GitHub Pages のプロジェクトページ用（https://username.github.io/BambooVillageFarm-/）
  basePath,
  assetPrefix: basePath,
  // クライアント側で画像・リンクのプレフィックスに使う（カルーセル等）
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

module.exports = nextConfig;
