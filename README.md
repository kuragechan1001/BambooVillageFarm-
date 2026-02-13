# Bamboo Village Farm

町田の農家「バンブーファーム」のウェブサイトです。  
**Next.js 14 + TypeScript** で構築しています。

## 開発の始め方

サイトは **`next-app`** にすべて入っています。ここで開発・ビルドを行ってください。

```bash
cd next-app
npm install
npm run dev
```

ブラウザで **http://localhost:3000** を開いて確認できます。

## プロジェクト構成

```
BambooVillageFarm-/
├── README.md          ← いま読んでいるファイル
└── next-app/          ← 本番サイト（ここで作業する）
    ├── app/           # ページとレイアウト
    │   ├── layout.tsx # 共通レイアウト（ヘッダー・フッター）
    │   ├── page.tsx   # トップページ
    │   ├── globals.css
    │   ├── about/
    │   ├── contact/
    │   └── …
    ├── components/    # 共通コンポーネント
    │   ├── Header.tsx
    │   └── Footer.tsx
    ├── public/        # 静的ファイル
    │   └── image/     # 画像（logo.jpg, hero-visual.jpg など）
    ├── package.json
    └── README.md      # next-app 内の詳しい説明
```

## コマンド（next-app 内で実行）

| コマンド | 説明 |
|----------|------|
| `npm run dev` | 開発サーバー起動（http://localhost:3000） |
| `npm run build` | 本番用ビルド |
| `npm run start` | ビルド後の本番モードで起動 |

## 画像の追加

新しい画像は **next-app/public/image/** に置いてください。  
参照するときのパスは `/image/ファイル名` です（例：`/image/logo.jpg`）。

---

## GitHub Pages で公開する

- ビルドすると **静的ファイル**（`index.html` が直下）が **next-app/out/** に出力されます。
- **main** ブランチに push すると、GitHub Actions が自動でビルドし、GitHub Pages にデプロイします。

### 初回だけ

1. リポジトリの **Settings** → **Pages**
2. **Source** で **GitHub Actions** を選んで保存

### リポジトリ名を変えた場合

`next-app/next.config.js` の **basePath** と **assetPrefix** を、  
`/あなたのリポジトリ名` に合わせて書き換えてください。
