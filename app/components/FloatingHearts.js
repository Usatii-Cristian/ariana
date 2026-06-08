"use client";

import { useEffect, useMemo, useState } from "react";

// Inimi care plutesc lin în fundal (mai puține pe telefon, pentru fluiditate)
export default function FloatingHearts({ count = 18 }) {
  const [n, setN] = useState(count);

  useEffect(() => {
    const apply = () =>
      setN(window.innerWidth < 640 ? Math.ceil(count / 2) : count);
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, [count]);

  const hearts = useMemo(
    () =>
      Array.from({ length: n }, (_, i) => {
        const left = Math.random() * 100;
        const size = 12 + Math.random() * 26;
        const duration = 9 + Math.random() * 12;
        const delay = -Math.random() * 20;
        const opacity = 0.25 + Math.random() * 0.5;
        const symbols = ["❤", "💕", "🤍", "💗", "❤", "🌸"];
        const symbol = symbols[i % symbols.length];
        return { left, size, duration, delay, opacity, symbol, id: i };
      }),
    [n]
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            "--o": h.opacity,
            "--s": 1,
          }}
        >
          {h.symbol}
        </span>
      ))}
    </div>
  );
}
