"use client";

import { useEffect, useRef, useState } from "react";

// Mică melodie romantică generată în browser (Web Audio API).
// Cântă în buclă, blând, ca un pian de cutie muzicală.
// Pornește la prima interacțiune (când se deschide felicitarea).

const FREQ = {
  G2: 98.0, A2: 110.0, B2: 123.47,
  C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.0, A3: 220.0, B3: 246.94,
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.0, A4: 440.0, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25,
};

// Progresie romantică I–V–vi–IV (Do–Sol–lam–Fa)
const BARS = [
  { chord: ["C3", "E3", "G3"], melody: ["E4", "G4", "C5", "G4"] },
  { chord: ["G2", "B2", "D3"], melody: ["D4", "G4", "B4", "G4"] },
  { chord: ["A2", "C3", "E3"], melody: ["C5", "A4", "E4", "A4"] },
  { chord: ["F3", "A3", "C4"], melody: ["A4", "C5", "F4", "C5"] },
];

const BAR_TIME = 2.4; // secunde per acord (lent, romantic)
const BEAT = BAR_TIME / 4;

export default function MusicBox({ start }) {
  const [on, setOn] = useState(false);
  const ctxRef = useRef(null);
  const masterRef = useRef(null);
  const nextTimeRef = useRef(0);
  const barRef = useRef(0);
  const timerRef = useRef(null);

  const ensureContext = () => {
    if (ctxRef.current) return ctxRef.current;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    const ctx = new Ctx();

    const master = ctx.createGain();
    master.gain.value = 0.0;

    // reverb simplu prin delay cu feedback (efect de „spațiu")
    const delay = ctx.createDelay();
    delay.delayTime.value = 0.28;
    const fb = ctx.createGain();
    fb.gain.value = 0.25;
    const wet = ctx.createGain();
    wet.gain.value = 0.35;
    delay.connect(fb);
    fb.connect(delay);
    master.connect(delay);
    delay.connect(wet);
    wet.connect(ctx.destination);
    master.connect(ctx.destination);

    ctxRef.current = ctx;
    masterRef.current = master;
    return ctx;
  };

  const note = (ctx, freq, t, dur, peak, type) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    // envelope blând (atac scurt, stingere lungă) — sunet de cutie muzicală
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g);
    g.connect(masterRef.current);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  };

  const scheduleBar = (ctx, bar, time) => {
    const b = BARS[bar % BARS.length];
    // acord (note ținute, blânde, octavă joasă)
    b.chord.forEach((n) =>
      note(ctx, FREQ[n], time, BAR_TIME * 0.95, 0.06, "sine")
    );
    // melodie (note dulci pe pătrimi)
    b.melody.forEach((n, i) =>
      note(ctx, FREQ[n], time + i * BEAT, BEAT * 1.6, 0.13, "triangle")
    );
  };

  const startMusic = () => {
    const ctx = ensureContext();
    if (ctx.state === "suspended") ctx.resume();
    masterRef.current.gain.cancelScheduledValues(ctx.currentTime);
    masterRef.current.gain.setValueAtTime(0.0001, ctx.currentTime);
    masterRef.current.gain.exponentialRampToValueAtTime(0.5, ctx.currentTime + 1.2);
    nextTimeRef.current = ctx.currentTime + 0.1;

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const c = ctxRef.current;
      if (!c) return;
      while (nextTimeRef.current < c.currentTime + 0.3) {
        scheduleBar(c, barRef.current, nextTimeRef.current);
        nextTimeRef.current += BAR_TIME;
        barRef.current += 1;
      }
    }, 60);
    setOn(true);
  };

  const stopMusic = () => {
    const ctx = ctxRef.current;
    if (ctx && masterRef.current) {
      masterRef.current.gain.cancelScheduledValues(ctx.currentTime);
      masterRef.current.gain.setValueAtTime(masterRef.current.gain.value, ctx.currentTime);
      masterRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
    }
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
    setOn(false);
  };

  // pornește automat când se deschide felicitarea
  useEffect(() => {
    if (start && !on) startMusic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  useEffect(() => () => timerRef.current && clearInterval(timerRef.current), []);

  return (
    <button
      onClick={() => (on ? stopMusic() : startMusic())}
      aria-label={on ? "Oprește muzica" : "Pornește muzica"}
      className="fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-xl shadow-lg ring-1 ring-rose/30 backdrop-blur transition hover:scale-110 hover:bg-white"
    >
      <span className={on ? "beat" : ""}>{on ? "🎵" : "🔇"}</span>
    </button>
  );
}
