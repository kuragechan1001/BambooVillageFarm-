"use client";

import Link from "next/link";
import Image from "next/image";
import VegetableCarousel from "@/components/VegetableCarousel";
import SectionDividerLine from "@/components/SectionDividerLine";

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section
        className="hero"
        style={{
          background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ""}/image/home.png) center center / cover no-repeat`,
        }}
      >
        <div className="hero-overlay" aria-hidden />
        <div className="container position-relative py-5">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1 className="fw-bold text-start">
                地産
                <br />
                　地消
              </h1>
            </div>
            <div className="col-12">
              <p className="hero-description text-center mb-4">
                町田の野菜をあなたの食卓へ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 農園について */}
      <section className="py-5" style={{ color: "#2F3E34" }}>
        <div className="container">
          <h3 className="text-center mb-5">農園について</h3>
          {/* 町田で野菜を育てて12年 */}
          <div className="row align-items-center g-4 mb-5">
            <div className="col-12 col-lg-6">
              <h2 className="h3 mb-3">町田で野菜を育てて12年</h2>
              <p className="mb-0">
                顔の見える関係を大切に、地域に根ざした農業を続けています。<br />
                バンブーファームは、自然豊かな町田の地で、化学肥料や農薬に頼らない栽培方法を実践しています。
                太陽の光をたっぷり浴び、土の力で育った野菜たちは、本来の味と栄養をたっぷりと蓄えています。
                私たちは、単に野菜を育てるだけでなく、お客様との絆を大切にし、農業体験や援農受け入れなど、地域とのつながりを深める活動も積極的に行っています。
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="ratio ratio-16x9 bg-light rounded d-flex align-items-center justify-content-center">
                <span className="text-muted">写真をここに入れる</span>
              </div>
            </div>
          </div>

          {/* 私たちの想い */}
          <div className="row align-items-center g-4 mb-5">
            <div className="col-12 col-lg-6">
              <h2 className="h3 mb-3">私たちの想い</h2>
              <p className="mb-0">
                農業を通じて、人と自然、人と人とのつながりを大切にしたい。<br />
                それが私たちの想いです。<br />
                毎日食べる野菜だからこそ、安心・安全なものをお届けしたい。<br />
                そして、その野菜がどのように育ったのか、誰が育てたのかを知っていただきたい。<br />
                それが「顔の見える関係」の第一歩だと考えています。
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="ratio ratio-16x9 bg-light rounded d-flex align-items-center justify-content-center">
                <span className="text-muted">写真をここに入れる</span>
              </div>
            </div>
          </div>

          {/* 栽培方法 */}
          <div className="row align-items-center g-4 mb-5">
            <div className="col-12 col-lg-6">
              <h2 className="h3 mb-3">栽培方法</h2>
              <p className="mb-0">
              自然栽培と言って、種は固定種or固定種からの自家採取。<br />
              肥料は、米ぬかor無施肥。<br />
              緑肥と言って、草を生やして微生物の餌として。時間をかけて土づくりにも取り組んでいます
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="ratio ratio-16x9 bg-light rounded d-flex align-items-center justify-content-center">
                <span className="text-muted">写真をここに入れる</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション間の区切り線（スクロールで表示されたときに中央から伸びる） */}
      <SectionDividerLine />

      <section className="section-vegetable py-5" style={{ color: "#2F3E34" }}>
       <div className="container">
        <h3 className="text-center mb-5">今月の販売野菜</h3>
        <VegetableCarousel />
       </div>
       <div className="section-vegetable-btn text-center py-5">
        <Link
          href="/products"
          className="button text-center py-2 px-5 fw-bold fs-5 rounded-3 text-decoration-none d-inline-block"
          style={{ backgroundColor: "#A44A3F", color: "#fff" }}
        >
          もっと見る
        </Link>
       </div>
      </section>

      {/* セクション間の区切り線（スクロールで表示されたときに中央から伸びる） */}
      <SectionDividerLine />

      {/* イベント*/}
      <section className="py-5" >
        <h3 className="text-center mb-5" style={{ color: "#2F3E34"}}>イベント</h3>

        {/* カード1*/}
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div
                className="rounded p-4 d-flex flex-column justify-content-between overflow-hidden"
                style={{
                  border: "1px solid #C9A86A",
                  color: "#C9A86A",
                  backgroundColor: "#FFF2DA",
                }}
              >
                <div>
                  <h4 className="text-center h5 mb-3">味噌作り体験</h4>
                  <p className="text-center mb-0 small">味噌作り体験を行っています。</p>
                </div>
                <div className="mt-3 w-100 d-flex justify-content-end">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/image/been.png`}
                    alt="味噌作り体験のイメージ"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="text-center mt-4 mb-2">
                <Link
                  href="/events/make-miso"
                  className="button text-center py-2  fw-bold fs-5 rounded-3 text-decoration-none d-inline-block"
                  style={{ backgroundColor: "#C9A86A", color: "black", padding: "100px" }}
                >
                  詳細　→
                </Link>
              </div>
            </div>

            {/* カード2 */}
            <div className="col-12 col-md-6">
              <div
                className="rounded p-4 d-flex flex-column justify-content-between overflow-hidden"
                style={{
                  border: "1px solid #C9A86A",
                  color: "#C9A86A",
                  backgroundColor: "#FFF2DA",
                }}
              >
                <div>
                  <h4 className="text-center h5 mb-3">カード2</h4>
                  <p className="text-center mb-0 small">ここにテキストを入れます。</p>
                </div>
                <div className="mt-3 w-100 d-flex justify-content-end">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/image/veg2.png`}
                    alt="野菜2のイメージ"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="text-center mt-4 mb-2">
                <Link
                  href="/events"
                  className="button text-center py-2  fw-bold fs-5 rounded-3 text-decoration-none d-inline-block"
                  style={{ backgroundColor: "#C9A86A", color: "black", padding: "100px" }}
                >
                  詳細　→
                </Link>
              </div>
            </div>

            {/* カード3 */}
            <div className="col-12 col-md-6">
              <div
                className="rounded p-4 d-flex flex-column justify-content-between overflow-hidden"
                style={{
                  border: "1px solid #C9A86A",
                  color: "#C9A86A",
                  backgroundColor: "#FFF2DA",
                }}
              >
                <div>
                  <h4 className="text-center h5 mb-3">カード3</h4>
                  <p className="text-center mb-0 small">ここにテキストを入れます。</p>
                </div>
                <div className="mt-3 w-100 d-flex justify-content-end">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/image/veg1.png`}
                    alt="野菜1のイメージ"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="text-center mt-4 mb-2">
                <Link
                  href="/events"
                  className="button text-center py-2  fw-bold fs-5 rounded-3 text-decoration-none d-inline-block"
                  style={{ backgroundColor: "#C9A86A", color: "black", padding: "100px" }}
                >
                  詳細　→
                </Link>
              </div>
            </div>

            {/* カード4 */}
            <div className="col-12 col-md-6">
              <div
                className="rounded p-4 d-flex flex-column justify-content-between overflow-hidden"
                style={{
                  border: "1px solid #C9A86A",
                  color: "#C9A86A",
                  backgroundColor: "#FFF2DA",
                }}
              >
                <div>
                  <h4 className="text-center h5 mb-3">カード4</h4>
                  <p className="text-center mb-0 small">ここにテキストを入れます。</p>
                </div>
                <div className="mt-3 w-100 d-flex justify-content-end">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/image/veg2.png`}
                    alt="野菜2のイメージ"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="text-center mt-4 mb-2">
                <Link
                  href="/events"
                  className="button text-center py-2  fw-bold fs-5 rounded-3 text-decoration-none d-inline-block"
                  style={{ backgroundColor: "#C9A86A", color: "black", padding: "100px" }}
                >
                  詳細　→
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
