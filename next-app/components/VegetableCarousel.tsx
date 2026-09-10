"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  { src: "/image/veg.png", alt: "にんじん", caption: "にんじん" },
  { src: "/image/veg.png", alt: "とうもろこし", caption: "とうもろこし" },
  { src: "/image/veg.png", alt: "レタス", caption: "レタス" },
  { src: "/image/veg.png", alt: "ほうれんそう", caption: "ほうれんそう" },
  { src: "/image/veg.png", alt: "ピーマン", caption: "ピーマン" },
  { src: "/image/veg.png", alt: "キャベツ", caption: "キャベツ" },
];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** 進む方向に合わせて、左右からスライドイン／アウトする */
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 72 : -72,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -72 : 72,
    opacity: 0,
    scale: 0.96,
  }),
};

const sideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 36 : -36,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -36 : 36,
    opacity: 0,
  }),
};

export default function VegetableCarousel() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const n = SLIDES.length;

  const left = SLIDES[(centerIndex - 1 + n) % n];
  const center = SLIDES[centerIndex];
  const right = SLIDES[(centerIndex + 1) % n];

  const goPrev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setCenterIndex((i) => (i - 1 + n) % n);
  };

  const goNext = () => {
    if (isAnimating) return;
    setDirection(1);
    setCenterIndex((i) => (i + 1) % n);
  };

  return (
    <div className="vegetable-carousel">
      {/* 左の小さい画像 */}
      <div className="vegetable-carousel-side text-center">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={`left-${centerIndex}`}
            className="vegetable-carousel-slide"
            custom={direction}
            variants={sideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={BASE + left.src} alt={left.alt} />
            <p className="mt-2 mb-0 small">{left.caption}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={goPrev}
        className="vegetable-carousel-btn"
        aria-label="前へ"
        disabled={isAnimating}
      >
        ◀︎
      </button>

      {/* 中央の大きい画像 */}
      <div className="vegetable-carousel-center text-center">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={`center-${centerIndex}`}
            className="vegetable-carousel-slide"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={BASE + center.src} alt={center.alt} />
            <p className="mt-2 mb-0 fw-semibold">{center.caption}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={goNext}
        className="vegetable-carousel-btn"
        aria-label="次へ"
        disabled={isAnimating}
      >
        ▶︎
      </button>

      {/* 右の小さい画像 */}
      <div className="vegetable-carousel-side text-center">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={`right-${centerIndex}`}
            className="vegetable-carousel-slide"
            custom={direction}
            variants={sideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={BASE + right.src} alt={right.alt} />
            <p className="mt-2 mb-0 small">{right.caption}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
