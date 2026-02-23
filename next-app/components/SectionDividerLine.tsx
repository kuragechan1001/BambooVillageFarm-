"use client";

import { useRef, useEffect, useState } from "react";

/**
 * セクション間の区切り線。
 * スクロールで画面に入ったタイミングで、中央から左右に線が伸びるアニメーションを行う。
 * 他ページでも再利用可能。
 */
export default function SectionDividerLine() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineAnimated, setLineAnimated] = useState(false);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setLineAnimated(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-3">
      <div
        ref={lineRef}
        className={`section-divider-line ${lineAnimated ? "is-animated" : ""}`}
      />
    </div>
  );
}
