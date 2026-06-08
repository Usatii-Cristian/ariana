"use client";

import { useEffect, useRef, useState } from "react";

// Melodie romantică generată în browser (Web Audio API).
// Progresie în stil Canon (Pachelbel) — caldă, cutie muzicală + pad + reverb.
// Cântă în buclă, blând. Pornește când se deschide felicitarea.

const F = {
  E2: 82.41, F2: 87.31, G2: 98.0, A2: 110.0, B2: 123.47,
  C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.0, A3: 220.0, B3: 246.94,
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.0, A4: 440.0, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99,
};

// Canon în Do: C – G – Am – Em – F – C – F – G
// fiecare bar: bas (o notă), pad (acord ținut), arpegiu de cutie muzicală
const BARS = [
  { bass: "C3", pad: ["C3", "E3", "G3"], arp: ["C4", "E4", "G4", "C5"] },
  { bass: "G2", pad: ["G3", "B3", "D4"], arp: ["G4", "B4", "D5", "B4"] },
  { bass: "A2", pad: ["A3", "C4", "E4"], arp: ["A4", "C5", "E5", "C5"] },
  { bass: "E2", pad: ["E3", "G3", "B3"], arp: ["E4", "G4", "B4", "E5"] },
  { bass: "F2", pad: ["F3", "A3", "C4"], arp: ["F4", "A4", "C5", "A4"] },
  { bass: "C3", pad: ["C3", "E3", "G3"], arp: ["C4", "E4", "G4", "E5"] },
  { bass: "F2", pad: ["F3", "A3", "C4"], arp: ["F4", "A4", "C5", "F5"] },
  { bass: "G2", pad: ["G3", "B3", "D4"], arp: ["G4", "B4", "D5", "G5"] },
];

const BAR_TIME = 2.7; // lent, romantic
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
    master.gain.value = 0.0001;

    // reverb amplu prin delay cu feedback (senzație de „spațiu" cald)
    const delay = ctx.createDelay();
    delay.delayTime.value = 0.33;
    const fb = ctx.createGain();
    fb.gain.value = 0.32;
    const wet = ctx.createGain();
    wet.gain.value = 0.42;
    // filtru blând ca să taie ascuțișul (mai cald)
    const tone = ctx.createBiquadFilter();
    tone.type = "lowpass";
    tone.frequency.value = 2600;

    master.connect(tone);
    tone.connect(ctx.destination);
    tone.connect(delay);
    delay.connect(fb);
    fb.connect(delay);
    delay.connect(wet);
    wet.connect(ctx.destination);

    ctxRef.current = ctx;
    masterRef.current = master;
    return ctx;
  };

  // o notă cu envelope (atac/stingere) și opțional 2 oscilatoare ușor dezacordate
  const note = (ctx, freq, t, dur, peak, type, attack = 0.04, warm = false) => {
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    g.connect(masterRef.current);

    const make = (detune) => {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = freq;
      osc.detune.value = detune;
      osc.connect(g);
      osc.start(t);
      osc.stop(t + dur + 0.05);
    };
    make(0);
    if (warm) make(6); // a doua voce, ușor dezacordată → căldură (chorus)
  };

  const scheduleBar = (ctx, bar, time) => {
    const b = BARS[bar % BARS.length];
    // bas blând, ținut
    note(ctx, F[b.bass], time, BAR_TIME * 0.98, 0.05, "sine", 0.18);
    // pad cald, ținut (acord)
    b.pad.forEach((n) =>
      note(ctx, F[n], time, BAR_TIME * 0.97, 0.035, "sine", 0.35)
    );
    // arpegiu de cutie muzicală (melodia), cald
    b.arp.forEach((n, i) =>
      note(ctx, F[n], time + i * BEAT, BEAT * 1.9, 0.12, "triangle", 0.02, true)
    );
  };

  const startMusic = () => {
    const ctx = ensureContext();
    if (ctx.state === "suspended") ctx.resume();
    masterRef.current.gain.cancelScheduledValues(ctx.currentTime);
    masterRef.current.gain.setValueAtTime(0.0001, ctx.currentTime);
    masterRef.current.gain.exponentialRampToValueAtTime(0.5, ctx.currentTime + 1.6);
    nextTimeRef.current = ctx.currentTime + 0.15;

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const c = ctxRef.current;
      if (!c) return;
      while (nextTimeRef.current < c.currentTime + 0.4) {
        scheduleBar(c, barRef.current, nextTimeRef.current);
        nextTimeRef.current += BAR_TIME;
        barRef.current += 1;
      }
    }, 70);
    setOn(true);
  };

  const stopMusic = () => {
    const ctx = ctxRef.current;
    if (ctx && masterRef.current) {
      masterRef.current.gain.cancelScheduledValues(ctx.currentTime);
      masterRef.current.gain.setValueAtTime(masterRef.current.gain.value, ctx.currentTime);
      masterRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
    }
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
    setOn(false);
  };

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
