"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function ShopsContent() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.classList.contains("shops-content-block")) {
            setContentVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white pt-0 pb-5">
      <div
        className="shops-hero position-relative w-100 d-flex flex-column align-items-center justify-content-center overflow-hidden"
        style={{ height: 280 }}
      >
        <h1
          className={`position-relative fw-bold m-0 shops-hero-title ${heroVisible ? "shops-hero-title--visible" : ""}`}
          style={{ zIndex: 2, textShadow: "0 2px 8px rgba(0,0,0,0.5)", fontSize: 48 }}
        >
          取扱店舗
        </h1>
        <p
          className={`position-relative text-center m-0 mt-2 shops-hero-desc ${heroVisible ? "shops-hero-desc--visible" : ""}`}
          style={{ zIndex: 2, textShadow: "0 1px 4px rgba(0,0,0,0.5)", fontSize: "1rem" }}
        >
          〜当農園自慢の野菜が食べれる店舗をご紹介〜
        </p>
      </div>

      <div className="container pt-4 pb-4">
        <div
          ref={contentRef}
          className={`shops-content-block ${contentVisible ? "shops-block--visible" : ""}`}
        >
                    {/* 1件目：soup-ya SEKAI. */}
          <div className="row align-items-center g-4 mb-5">
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
              <div className="ratio ratio-16x9 bg-light rounded d-flex align-items-center justify-content-center">
                <span className="text-muted">画像を入れる</span>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <h2 className="h3 mb-3" style={{ color: "#2F3E34" }}>soup-ya SEKAI. (スープヤ セカイ)</h2>
              <p className="mb-1 small" style={{ color: "#2F3E34" }}><strong>住所</strong><br />東京都町田市小山町1149-17</p>
              <p className="mb-1 small" style={{ color: "#2F3E34" }}><strong>アクセス</strong><br />多摩境駅 徒歩15分</p>
              <p className="mb-1 small" style={{ color: "#2F3E34" }}><strong>営業時間</strong><br />火～木曜日 11:30～18:00<br />金～土曜日 11:30～20:00</p>
              <p className="mb-1 small" style={{ color: "#2F3E34" }}><strong>定休日</strong><br />日・月曜日</p>
              <p className="mb-1 small" style={{ color: "#2F3E34" }}><strong>電話</strong><br />050-8884-2030</p>
              <p className="mb-1 small" style={{ color: "#2F3E34" }}><strong>Twitter</strong><br />@soupyaSEKAI</p>
              <p className="mb-0 small" style={{ color: "#2F3E34" }}><strong>Instagram</strong><br />@soupyasekai</p>
            </div>
          </div>

          {/* 2件目：同じレイアウト */}
          <div className="row align-items-center g-4 mb-5">
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
              <div className="ratio ratio-16x9 bg-light rounded d-flex align-items-center justify-content-center">
                <span className="text-muted">画像を入れる</span>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <h2 className="h3 mb-3" style={{ color: "#2F3E34" }}>○○小学校</h2>
              <p className="mb-2" style={{ color: "#2F3E34", lineHeight: 1.8 }}>
                ○○小学校にてうちの農園の野菜を使っていただいております。美味しい野菜が食べたい方はぜひ
              </p>
              <p className="mb-1 small" style={{ color: "#2F3E34" }}>場所 : 町田市 町田駅徒歩5分</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
