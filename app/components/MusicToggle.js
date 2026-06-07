"use client";

import { useEffect, useRef, useState } from "react";

// Buton plutitor de muzică.
// Pune un fișier  public/muzica.mp3  și va porni la prima atingere.
export default function MusicToggle({ start }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    if (start && audioRef.current && available) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  }, [start, available]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  };

  if (!available) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src="/muzica.mp3"
        loop
        preload="auto"
        onError={() => setAvailable(false)}
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Oprește muzica" : "Pornește muzica"}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-xl shadow-lg ring-1 ring-rose/30 backdrop-blur transition hover:scale-110 hover:bg-white"
      >
        <span className={playing ? "beat" : ""}>{playing ? "🎵" : "🔇"}</span>
      </button>
    </>
  );
}
