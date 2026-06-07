"use client";

import { useState } from "react";

// Ramă tip polaroid. Dacă poza lipsește, arată un loc gol elegant
// care îți spune exact unde s-o pui.
export default function PhotoFrame({ src, text, rotate = 0 }) {
  const [missing, setMissing] = useState(false);
  const fileName = src.split("/").pop();

  return (
    <figure
      className="group relative mx-auto w-full max-w-[20rem] rounded-[2px] bg-white p-3 pb-5 shadow-[0_18px_40px_-12px_rgba(122,31,61,0.35)] ring-1 ring-black/5 transition-transform duration-500 hover:!rotate-0 hover:scale-[1.03]"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-blush">
        {!missing ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={text || "Amintire"}
            onError={() => setMissing(true)}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-4 text-center">
            <span className="text-4xl opacity-70">📷</span>
            <p className="font-serif text-sm italic leading-snug text-wine/70">
              Pune poza aici
            </p>
            <code className="rounded bg-wine/10 px-2 py-1 text-[11px] not-italic text-wine/80">
              public/poze/{fileName}
            </code>
          </div>
        )}
      </div>
      {text ? (
        <figcaption className="pt-3 text-center font-script text-2xl leading-none text-rose-deep">
          {text}
        </figcaption>
      ) : null}
    </figure>
  );
}
