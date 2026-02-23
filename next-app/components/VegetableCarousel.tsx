"use client";

import { useState } from "react";

const SLIDES = [
  { src: "/image/veg.png", alt: "にんじん", caption: "にんじん" },
  { src: "/image/veg.png", alt: "とうもろこし", caption: "とうもろこし" },
  { src: "/image/veg.png", alt: "レタス", caption: "レタス" },
  { src: "/image/veg.png", alt: "ほうれんそう", caption: "ほうれんそう" },
  { src: "/image/veg.png", alt: "ピーマン", caption: "ピーマン" },
  { src: "/image/veg.png", alt: "キャベツ", caption: "キャベツ" },
];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function VegetableCarousel() {
  const [centerIndex, setCenterIndex] = useState(0);
  const n = SLIDES.length;

  const left = SLIDES[(centerIndex - 1 + n) % n];
  const center = SLIDES[centerIndex];
  const right = SLIDES[(centerIndex + 1) % n];

  const goPrev = () => setCenterIndex((i) => (i - 1 + n) % n);
  const goNext = () => setCenterIndex((i) => (i + 1) % n);

  const centerSize = { width: 390, height: 430 };
  const sideSize = { width: 220, height: 242 };
  const imgStyleBase = { objectFit: "cover" as const, borderRadius: 8 };

  return (
    <div className="vegetable-carousel d-flex align-items-center justify-content-center flex-wrap" style={{ gap: "1.5rem" }}>
      <div className="vegetable-carousel-side text-center" style={{ width: sideSize.width }}>
        <img
          src={BASE + left.src}
          alt={left.alt}
          className="w-100 rounded"
          style={{ ...imgStyleBase, ...sideSize }}
        />
        <p className="mt-2 mb-0 small">{left.caption}</p>
      </div>

      <button
        type="button"
        onClick={goPrev}
        className="flex-shrink-0 border-0 rounded-circle bg-secondary bg-opacity-75 text-white d-flex align-items-center justify-content-center fs-2"
        style={{ width: 44, height: 44, cursor: "pointer" }}
        aria-label="前へ"
      >
        ‹
      </button>

      <div
        className="vegetable-carousel-center text-center position-relative"
        style={{ width: centerSize.width, zIndex: 2, transform: "scale(1.08)" }}
      >
        <img
          src={BASE + center.src}
          alt={center.alt}
          className="w-100 rounded shadow"
          style={{ ...imgStyleBase, ...centerSize }}
        />
        <p className="mt-2 mb-0 fw-semibold">{center.caption}</p>
      </div>

      <button
        type="button"
        onClick={goNext}
        className="flex-shrink-0 border-0 rounded-circle bg-secondary bg-opacity-75 text-white d-flex align-items-center justify-content-center fs-2"
        style={{ width: 44, height: 44, cursor: "pointer" }}
        aria-label="次へ"
      >
        ›
      </button>

      <div className="vegetable-carousel-side text-center" style={{ width: sideSize.width }}>
        <img
          src={BASE + right.src}
          alt={right.alt}
          className="w-100 rounded"
          style={{ ...imgStyleBase, ...sideSize }}
        />
        <p className="mt-2 mb-0 small">{right.caption}</p>
      </div>
    </div>
  );
}
