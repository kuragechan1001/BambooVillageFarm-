"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function ContactContent() {
  const contactRef = useRef<HTMLDivElement>(null);
  const accessRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [accessVisible, setAccessVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("contact-info-block")) setContactVisible(true);
            if (entry.target.classList.contains("contact-access")) setAccessVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (contactRef.current) observer.observe(contactRef.current);
    if (accessRef.current) observer.observe(accessRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white pt-0 pb-5">
      <div
        className="contact-hero position-relative w-100 d-flex align-items-center justify-content-center overflow-hidden"
        style={{ height: 280 }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/image/contact.png`}
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />
        <h1
          className={`position-relative fw-bold text-white m-0 contact-hero-title ${heroVisible ? "contact-hero-title--visible" : ""}`}
          style={{ zIndex: 2, textShadow: "0 2px 8px rgba(0,0,0,0.5)", fontSize: 48 }}
        >
          お問い合わせ
        </h1>
      </div>

      <div className="container bg-white pt-4 pb-4 mt-0">
        <div className="mx-auto" style={{ maxWidth: 720 }}>
          <div
            ref={contactRef}
            className={`mb-4 contact-info-block ${contactVisible ? "contact-block--visible" : ""}`}
          >
          <h2 className="fs-3 fw-bold text-dark mb-3">お問い合わせ</h2>
          <dl className="contact-dl m-0 p-0">
            <dt className="small text-secondary mb-1">電話番号</dt>
            <dd className="m-0 text-dark">080-9999-0000</dd>
            <dt className="small text-secondary mt-3 mb-1">ラインID</dt>
            <dd className="m-0 text-dark">aaaaaa</dd>
            <dt className="small text-secondary mt-3 mb-1">メールアドレス</dt>
            <dd className="m-0 text-dark">sample@com</dd>
          </dl>
          <p className="small text-secondary m-0">※日中の連絡はラインが一番繋がりやすくなっております</p>
        </div>

        <div
          ref={accessRef}
          className={`row g-4 align-items-start contact-access ${accessVisible ? "contact-block--visible" : ""}`}
        >
          <div className="col-12 col-md-6">
            <div className="w-100 ratio ratio-4x3 position-relative overflow-hidden rounded">
              <iframe
                title="バンブーファームの場所"
                src={`https://www.google.com/maps?q=${encodeURIComponent("東京都町田市下小山田町2494")}&output=embed`}
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h2 className="fs-3 fw-bold text-dark mb-3">アクセス</h2>
            <p className="mb-0 text-dark" style={{ fontSize: 16, lineHeight: 1.8 }}>
              住所: 東京都町田市下小山田町2494
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
