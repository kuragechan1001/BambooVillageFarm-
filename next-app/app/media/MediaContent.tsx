"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "./page.css";

const archiveItems = [
  {
    source: "相模原町田経済新聞",
    date: "2019.10.8",
    title: "まちさがのうか #1 竹村庄平さんの唐辛子",
    link: "https://machida.keizai.biz/column/164/?fbclid=IwAR3O-3y1qNV-lpwD3SmjqNGXAEYUw73BWZyU6Szvec884ZxJbfQM5l8331o",
  },
  {
    source: "らぶ♡ふぁみ vol.4",
    date: "2019.3",
    title: "農業体験をしよう！",
  },
  {
    source: "里山コネクト",
    date: "多摩エリア",
    title: "Bomboo Village Farm",
  },
  {
    source: "桜美林大学",
    date: "2019.5.8",
    title: "桜美林大学農業ゼミさとやまイベント開催",
  },
  {
    source: "チョクバイ！",
    date: "2018.12.25",
    title:
      "都市農業の新しいカタチを作りたい。食育・農育がシェアされる町田の畑。",
  },
  {
    source: "東京新聞",
    date: "2018.10.20",
    title: "わたしの一票 子どもが夢抱ける仕事に",
  },
  {
    source: "東京新聞",
    date: "2018.10.5",
    title: "町田でこだわりの米作り 多摩の田園地帯で挑む新旧農家",
  },
  {
    source: "町田本 最新版",
    date: "2017.5.29",
    title: "",
  },
  {
    source: "るるぶ",
    date: "2017.3.31",
    title: "いっぱ東京の農業林業水産業 やる気いっぱいの新規就農者たち",
    link: "https://www.amazon.co.jp/%E3%82%8B%E3%82%8B%E3%81%B6%E6%9D%B1%E4%BA%AC%E3%81%AE%E8%BE%B2%E6%A5%AD-%E6%9E%97%E6%A5%AD-%E6%B0%B4%E7%94%A3%E6%A5%AD-%E3%82%8B%E3%82%8B%E3%81%B6%E6%83%85%E5%A0%B1%E7%89%88%E7%9B%AE%E7%9A%84/dp/4533116469",
  },
  {
    source: "よこはま里山研究所NORA",
    date: "2017.2.18",
    title: "まちの近くで「里山とかかわる仕事と暮らし」",
    link: "https://nora-yokohama.org/join/?p=6323",
  },
  {
    source: "MOA",
    date: "2016.3",
    title: "特集 都会の地産地消",
  },
  {
    source: "NEWS SOCRA",
    date: "2015.12.2",
    title: "東京の農業起業家、３つの秘策",
  },
  {
    source: "読売新聞",
    date: "2015.5.21",
    title: "有機野菜 良い土から",
    link: "https://ameblo.jp/keke0323/entry-12029392646.html?frm=theme",
  },
  {
    source: "町田市",
    date: "2015.5",
    title: "町田市農業委員会だより",
    link: "https://ameblo.jp/keke0323/entry-12029392646.html?frm=theme",
  },
  {
    source: "日経新聞",
    date: "2015.4.27",
    title: "東京でも農地を貸借",
    link: "https://ameblo.jp/keke0323/entry-11993407775.html?frm=theme",
  },
  {
    source: "全国農業新聞",
    date: "2014.12.12",
    title: "地元で新規就農、夢かなう",
    link: "https://ameblo.jp/keke0323/image-11963918345-13157127631.html",
  },
  {
    source: "タウンニュース",
    date: "2014.9.11",
    title: "地元町田で独立して「農家」として走り始めた",
    link: "https://www.townnews.co.jp/0304/2014/09/11/250629.html",
  },
];

export default function MediaContent() {
  return (
    <motion.section
      className="media"
      style={{ backgroundColor: "#F5F7FA", color: "#2F3E34" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="container"
        style={{ maxWidth: 960, margin: "0 auto", padding: "40px 16px 80px" }}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* 1件目：BS朝日「工藤阿須加が行く 農業始めちゃいました」 */}
        <motion.article
          className="mb-5"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {/* サムネイル画像（上部の大きな画像） */}
          <div
            style={{
              width: "100%",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <Image
              src="/image/medea2.png"
              alt="工藤阿須加が行く 農業始めちゃいました に出演した様子"
              width={900}
              height={260}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>

          {/* タグ + タイトル + 説明 */}
          <div style={{ marginTop: 16 }}>
            <span
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: 999,
                fontSize: 11,
                backgroundColor: "#E5E7EB",
                color: "#4B5563",
                marginBottom: 8,
              }}
            >
              TV出演
            </span>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 600,
                marginBottom: 8,
              }}
            >
              工藤阿須加が行く 農業始めちゃいました に出演しました
            </h2>
            <p
              style={{
                fontSize: 13,
                color: "#6B7280",
                marginBottom: 4,
              }}
            >
              BS朝日の番組「工藤阿須加が行く 農業始めちゃいました」で、当農園の様子が紹介されました。
            </p>
          </div>
        </motion.article>

        {/* 2件目：月曜から夜ふかし */}
        <motion.article
          className="mb-5"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div
            style={{
              width: "100%",
              borderRadius: 16,
              overflow: "hidden",
              marginBottom: 16,
            }}
          >
            <Image
              src="/image/medea1.png"
              alt="月曜から夜ふかしに出演した様子"
              width={900}
              height={260}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>

          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: 999,
              fontSize: 11,
              backgroundColor: "#E5E7EB",
              color: "#4B5563",
              marginBottom: 8,
            }}
          >
            TV出演
          </span>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            月曜から夜ふかしに出ました
          </h2>
        </motion.article>

        {/* 掲載実績一覧 */}
        <motion.div
          className="mt-4"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <h3
            style={{
              fontSize: 18,
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            掲載実績
          </h3>
          <div className="row g-3">
            {archiveItems.map((item, index) => (
              <div key={index} className="col-12 col-md-6">
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 12,
                    padding: 12,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      color: "#6B7280",
                      marginBottom: 4,
                    }}
                  >
                    {item.date}・{item.source}
                  </p>
                  {item.title && (
                    item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: 13,
                          color: "#2563EB",
                          textDecoration: "underline",
                        }}
                      >
                        {item.title}
                      </a>
                    ) : (
                      <p
                        style={{
                          fontSize: 13,
                          color: "#111827",
                          marginBottom: 0,
                        }}
                      >
                        {item.title}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 一覧に戻るボタン */}
        <motion.div
          className="text-center"
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

