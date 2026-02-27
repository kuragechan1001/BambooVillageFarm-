import "../page.css";
import Image from "next/image";
import SectionDividerLine from "@/components/SectionDividerLine";

export const metadata = { title: "みそ作り体験｜バンブーファーム" };

export default function EventsMisoPage() {
  return (
    <section
      className="events"
      style={{ backgroundColor: "#FFFFFF", color: "#2F3E34" }}
    >
      <div
        className="container"
        style={{ maxWidth: 960, margin: "0 auto", padding: "40px 16px 80px" }}
      >
        {/* タイトル */}
        <h1
          className="text-center mb-4"
          style={{ fontSize: 32, fontWeight: 700 }}
        >
          みそ作り体験
        </h1>

        {/* メイン画像 */}
        <div className="mb-4 d-flex justify-content-center">
          <div style={{ maxWidth: 900, width: "100%" }}>
            <Image
              src="/image/make_miso.png"
              alt="みそ作り体験の様子"
              width={900}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 8,
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* 説明文 */}
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto 24px",
            fontSize: 14,
            lineHeight: 1.9,
          }}
        >
          <p style={{ marginBottom: 16 }}>
            山の恵みと、手のぬくもりを味わうひととき。<br />
            古民家で、昔ながらの味噌作りを体験してみませんか？<br />
            大豆を炊き、麹のやさしい手触り、そして静かな山の空気。<br />
            自然に向き合いながら、自分の手で仕込む味噌は、どこか懐かしくて、特別な味になります。<br />
            家族や友人と一緒に、心あたたまる時間を過ごしましょう。
          </p>
        </div>

        {/* 基本情報＋作成日・更新日 */}
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ marginBottom: 4, fontSize: 14 }}>
            参加費：5000円
          </p>
          <p style={{ marginBottom: 4, fontSize: 14 }}>
            場所：古民家（住所等）
          </p>
          <div
            className="d-flex justify-content-end"
            style={{ marginTop: 8, fontSize: 12, color: "#666666" }}
          >
            <span>作成日：2024.12.23　更新日：2024.12.27</span>
          </div>
        </div>

        {/* セクション間の区切り線（スクロールで表示されたときに中央から伸びる） */}
        <SectionDividerLine />

        {/* 関連情報 */}
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div
            style={{
              borderLeft: "4px solid #2F3E34",
              paddingLeft: 12,
              marginBottom: 24,
            }}
          >
            <h2
              className="mb-0"
              style={{ fontSize: 20, fontWeight: 600, margin: 0 }}
            >
              関連情報
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div
                style={{
                  backgroundColor: "#F2F2F2",
                  borderRadius: 4,
                  height: 160,
                  marginBottom: 8,
                }}
              />
              <p
                className="mb-1"
                style={{ fontSize: 13, color: "#2F3E34" }}
              >
                他のイベント情報
              </p>
              <p
                className="mb-0"
                style={{ fontSize: 12, color: "#777777" }}
              >
                作成日：2025.12.23
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div
                style={{
                  backgroundColor: "#F2F2F2",
                  borderRadius: 4,
                  height: 160,
                  marginBottom: 8,
                }}
              />
              <p
                className="mb-1"
                style={{ fontSize: 13, color: "#2F3E34" }}
              >
                他のイベント情報
              </p>
              <p
                className="mb-0"
                style={{ fontSize: 12, color: "#777777" }}
              >
                作成日：2025.12.23
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div
                style={{
                  backgroundColor: "#F2F2F2",
                  borderRadius: 4,
                  height: 160,
                  marginBottom: 8,
                }}
              />
              <p
                className="mb-1"
                style={{ fontSize: 13, color: "#2F3E34" }}
              >
                他のイベント情報
              </p>
              <p
                className="mb-0"
                style={{ fontSize: 12, color: "#777777" }}
              >
                作成日：2025.12.23
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div
                style={{
                  backgroundColor: "#F2F2F2",
                  borderRadius: 4,
                  height: 160,
                  marginBottom: 8,
                }}
              />
              <p
                className="mb-1"
                style={{ fontSize: 13, color: "#2F3E34" }}
              >
                他のイベント情報
              </p>
              <p
                className="mb-0"
                style={{ fontSize: 12, color: "#777777" }}
              >
                作成日：2025.12.23
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

