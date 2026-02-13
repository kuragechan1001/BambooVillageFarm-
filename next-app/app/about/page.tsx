import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "私たちについて｜バンブーファーム",
};

export default function AboutPage() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">私たちについて</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              町田で野菜を育てて12年。
              <br />
              顔の見える関係を大切に、地域に根ざした農業を続けています。
            </p>
            <p>
              バンブーファームは、自然豊かな町田の地で、化学肥料や農薬に頼らない栽培方法を実践しています。
              太陽の光をたっぷり浴び、土の力で育った野菜たちは、本来の味と栄養をたっぷりと蓄えています。
            </p>
            <p>
              私たちは、単に野菜を育てるだけでなく、お客様との絆を大切にし、農業体験や援農受け入れなど、
              地域とのつながりを深める活動も積極的に行っています。
            </p>
            <h3 id="philosophy" style={{ marginTop: "2rem", marginBottom: "1rem", color: "#2e7d32" }}>
              私たちの想い
            </h3>
            <p>
              農業を通じて、人と自然、人と人とのつながりを大切にしたい。それが私たちの想いです。
              毎日食べる野菜だからこそ、安心・安全なものをお届けしたい。そして、その野菜がどのように育ったのか、
              誰が育てたのかを知っていただきたい。それが「顔の見える関係」の第一歩だと考えています。
            </p>
            <h3 id="cultivation" style={{ marginTop: "2rem", marginBottom: "1rem", color: "#2e7d32" }}>
              栽培方法
            </h3>
            <p>
              化学肥料や農薬に頼らず、自然の力を最大限に活かした栽培を心がけています。
              有機肥料を使用し、土づくりからこだわり、健康な土壌で育つ野菜は、本来の力を発揮します。
              無農薬・減農薬栽培により、環境にも体にも優しい野菜をお届けしています。
            </p>
          </div>
          <div className="about-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/image/img.png" alt="農場の風景" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/image/imge2.png" alt="畑の様子" />
          </div>
        </div>
      </div>
    </section>
  );
}
