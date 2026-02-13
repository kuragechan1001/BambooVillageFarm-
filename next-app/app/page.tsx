import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>町田で、まっすぐ育てる野菜。</h1>
        <p className="hero-subtitle">バンブーファーム</p>
        <p className="hero-description">
          自然の力を活かした無農薬・減農薬野菜を、あなたの食卓へ
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/products" className="btn btn-primary">
            商品を見る
          </Link>
          <Link
            href="/about"
            className="btn"
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              border: "2px solid white",
            }}
          >
            私たちについて
          </Link>
        </div>
      </div>
    </section>
  );
}
