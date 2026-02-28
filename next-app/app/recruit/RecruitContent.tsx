"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function RecruitContent() {
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
          if (entry.isIntersecting && entry.target.classList.contains("recruit-content-block")) {
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
        className="recruit-hero position-relative w-100 d-flex align-items-center justify-content-center overflow-hidden"
        style={{ height: 280 }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/image/recrute.png`}
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center center" }}
          priority
        />
        <h1
          className={`position-relative fw-bold m-0 recruit-hero-title ${heroVisible ? "recruit-hero-title--visible" : ""}`}
          style={{ zIndex: 2, textShadow: "0 2px 8px rgba(0,0,0,0.5)", fontSize: 48 }}
        >
          採用情報
        </h1>
      </div>

      <div className="container bg-white pt-4 pb-4 mt-0">
        <div
          ref={contentRef}
          className={`recruit-content-block mx-auto ${contentVisible ? "recruit-block--visible" : ""}`}
          style={{ maxWidth: 720 }}
        >
          <h2 className="fs-3 fw-bold text-dark pb-3 pt-4">
            〇 とうきょう援農ボランティア
          </h2>
          <p
            className="mb-3 text-dark"
            style={{ fontSize: 16, lineHeight: 1.8 }}
          >
            農作業をしてくれるボランティアを募集しています。<br />
            収穫体験だけしたい、食育等をしたい方はぜひご参加ください！<br />
            詳細は以下のリンクからご確認ください。
          </p>
          <a href="https://www.agrivolunteer-tokyo.jp/volunteer/recruitment/detail/4792">https://www.agrivolunteer-tokyo.jp/volunteer/recruitment/detail/4792</a>

          <h2 className="fs-3 fw-bold text-dark pb-3 pt-5">
            〇 自然栽培実践スクール生募集中
          </h2>
          <p
            className="mb-3 text-dark"
            style={{ fontSize: 16, lineHeight: 1.8 }}
          >
            A　野菜コース<br />
            B　米大豆コース<br />
            C　両方欲張りコース<br />
            いずれのコースも、野菜を育てていく過程で、自然栽培の考え方を学ぶことができます。<br />
            詳細はお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  );
}
