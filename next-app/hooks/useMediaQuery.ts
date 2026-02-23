"use client";

import { useState, useEffect } from "react";

export function useMediaQuery(maxWidthPx: number): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const m = window.matchMedia(`(max-width: ${maxWidthPx}px)`);
    setMatches(m.matches);
    const fn = () => setMatches(m.matches);
    m.addEventListener("change", fn);
    return () => m.removeEventListener("change", fn);
  }, [maxWidthPx]);

  return matches;
}
