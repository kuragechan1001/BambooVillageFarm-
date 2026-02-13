# Bamboo Village Farm（Next.js + TypeScript）

**※ 本番用のサイトは全部この next-app に入っています。**  
直下の index.html などは静的版の名残です。開発・公開はこの next-app で行ってください。

このフォルダは **Next.js 14** と **TypeScript** で作ったサイトです。  
ヘッダー・フッターはコンポーネントになっているので、1か所変えると全ページに反映されます。

## 必要なもの

- **Node.js**（v18 以上）  
  - 未導入の場合は [nodejs.org](https://nodejs.org/) から LTS をインストール

## セットアップ手順

### 1. ターミナルでこのフォルダへ移動

```bash
cd next-app
```

### 2. パッケージをインストール

```bash
npm install
```

### 3. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで **http://localhost:3000** を開くとトップページが表示されます。

## フォルダ構成

```
next-app/
├── app/                    # ページとレイアウト（App Router）
│   ├── layout.tsx          # 全ページ共通（ヘッダー・フッター）
│   ├── page.tsx            # トップページ (/)
│   ├── globals.css         # 共通スタイル
│   ├── about/page.tsx      # 私たちについて (/about)
│   ├── contact/page.tsx    # お問い合わせ (/contact)
│   ├── products/page.tsx   # 商品 (/products)
│   ├── philosophy/         # 私たちの想い
│   ├── cultivation/        # 栽培方法
│   ├── events/             # イベント
│   ├── shops/              # 取扱店舗
│   ├── media/              # メディア掲載
│   ├── recruit/            # 採用情報
│   └── sales/              # 野菜販売
├── components/             # 共通コンポーネント
│   ├── Header.tsx          # ヘッダー（ナビ・ハンバーガーメニュー）
│   └── Footer.tsx          # フッター（SNS・リンク）
├── public/                 # 静的ファイル（そのまま配信）
│   └── image/              # 画像（logo.jpg, hero-visual.jpg など）
├── package.json
├── next.config.js
└── tsconfig.json
```

## よく使うコマンド

| コマンド | 説明 |
|----------|------|
| `npm run dev` | 開発サーバー起動（http://localhost:3000） |
| `npm run build` | 静的サイトとしてビルド（**out/** に index.html などが出力） |
| `npm run start` | 通常の Next サーバー起動（静的 export 時は不要） |

**GitHub Pages** 用に `output: 'export'` しているため、`npm run build` で **out/** に静的ファイルができます。リポジトリ直下の index はこの **out/** の内容をデプロイすれば表示されます。

## コンポーネントの編集

- **ヘッダー（メニュー）を変えたい** → `components/Header.tsx`
- **フッター（SNSリンクなど）を変えたい** → `components/Footer.tsx`

編集して保存すると、開発サーバーで自動的にブラウザに反映されます。

## 新しいページの追加

`app/〇〇/page.tsx` を追加すると、自動で `/〇〇` のページになります。

例：`app/philosophy/page.tsx` を作ると「私たちの想い」が `/philosophy` で表示されます。

## 画像について

`public/image/` に画像を置くと、パス `/image/ファイル名` で参照できます。  
元の静的サイトの `image/` フォルダの中身を、そのまま `next-app/public/image/` にコピーして使ってください。
