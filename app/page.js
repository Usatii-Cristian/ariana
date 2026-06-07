"use client";

import { useEffect, useState } from "react";
import {
  config,
  poze,
  pozaPrincipala,
  motive,
  momente,
  scrisoare,
  final,
} from "./felicitare/data";
import FloatingHearts from "./components/FloatingHearts";
import Reveal from "./components/Reveal";
import PhotoFrame from "./components/PhotoFrame";
import MusicBox from "./components/MusicBox";

// Câte zile sunteți împreună
function zileImpreuna(dataInceput) {
  const start = new Date(dataInceput);
  if (isNaN(start)) return null;
  const diff = Date.now() - start.getTime();
  return Math.max(0, Math.floor(diff / 86400000));
}

export default function Home() {
  const [deschis, setDeschis] = useState(false);
  const [zile, setZile] = useState(null);

  useEffect(() => {
    setZile(zileImpreuna(config.dataInceput));
  }, []);

  const rotatii = [-4, 3, -2, 4, -3, 2, -4, 3];

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-cream via-blush/40 to-cream">
      <FloatingHearts count={30} />
      <MusicBox start={deschis} />

      {/* ─── Intro: poza voastră + plic ─── */}
      {!deschis && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-6 text-center">
          {/* fundal: poza principală, blurată */}
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center blur-md brightness-50"
            style={{ backgroundImage: `url('${pozaPrincipala}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-wine/80 via-rose-deep/70 to-rose/80" />
          <div className="fade-up relative z-10">
            <p className="mb-4 font-script text-3xl text-white/90 sm:text-4xl">
              pentru tine,
            </p>
            <h1 className="mb-3 font-serif text-6xl font-semibold text-white drop-shadow-lg sm:text-7xl">
              {config.numeIubita}
            </h1>
            <p className="mb-10 font-serif text-lg italic text-white/85">
              o mică surpriză te așteaptă... 💌
            </p>
            <button
              onClick={() => setDeschis(true)}
              className="group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-serif text-lg font-medium text-rose-deep shadow-2xl transition hover:scale-105"
            >
              <span className="text-2xl">💌</span>
              Deschide felicitarea
            </button>
            <p className="mt-6 font-serif text-sm text-white/70">
              🎵 cu sonor — dă-i drumul tare
            </p>
          </div>
        </div>
      )}

      {/* ─── HERO ─── */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <Reveal>
          <p className="mb-6 font-script text-4xl text-rose-deep sm:text-5xl">
            La mulți ani de aniversare,
          </p>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="font-serif text-7xl font-bold leading-none tracking-tight sm:text-8xl md:text-[10rem]">
            <span className="shimmer">{config.luni} luni</span>
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-6 max-w-xl font-serif text-xl italic text-wine/80 sm:text-2xl">
            {config.subtitlu}
          </p>
        </Reveal>

        {/* poza principală, mare, în ramă */}
        <Reveal delay={420}>
          <div className="relative mt-12">
            <span className="beat absolute -top-5 left-1/2 z-20 -translate-x-1/2 text-4xl drop-shadow">
              ❤️
            </span>
            <div className="rotate-[-2deg] rounded-[3px] bg-white p-4 pb-6 shadow-[0_30px_60px_-15px_rgba(122,31,61,0.5)] ring-1 ring-black/5 transition-transform duration-500 hover:rotate-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pozaPrincipala}
                alt="Noi doi"
                className="h-auto w-[16rem] rounded-[2px] object-cover sm:w-[20rem]"
              />
              <p className="pt-3 font-script text-3xl text-rose-deep">
                noi doi 🖤
              </p>
            </div>
          </div>
        </Reveal>

        {zile != null && (
          <Reveal delay={560}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              {[
                { n: config.luni, l: "luni" },
                { n: zile, l: "zile" },
                { n: "∞", l: "iubire" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/60 px-6 py-4 shadow-sm ring-1 ring-rose/20 backdrop-blur"
                >
                  <div className="font-serif text-4xl font-bold text-rose-deep">
                    {s.n}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-wine/60">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        <Reveal delay={700}>
          <div className="mt-14 animate-bounce text-2xl text-rose-deep/60">↓</div>
        </Reveal>
      </section>

      {/* ─── CITAT ROMANTIC ─── */}
      <section className="relative z-10 px-6 py-16">
        <Reveal>
          <blockquote className="mx-auto max-w-2xl text-center">
            <p className="font-script text-4xl leading-snug text-rose-deep sm:text-5xl">
              „În fiecare zi te aleg pe tine — și aș face-o de un milion de ori."
            </p>
            <p className="mt-4 font-serif text-lg italic text-wine/60">
              💞 din toată inima mea 💞
            </p>
          </blockquote>
        </Reveal>
      </section>

      {/* ─── GALERIA DE POZE ─── */}
      <section className="relative z-10 px-6 py-20">
        <Reveal>
          <h2 className="mb-3 text-center font-serif text-4xl font-semibold text-wine sm:text-5xl">
            Amintirile noastre
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mb-14 text-center font-serif text-lg italic text-wine/60">
            opt luni adunate într-o mână de clipe 📸
          </p>
        </Reveal>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {poze.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 120}>
              <PhotoFrame src={p.src} text={p.text} rotate={rotatii[i % rotatii.length]} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── MOTIVE ─── */}
      <section className="relative z-10 px-6 py-20">
        <Reveal>
          <h2 className="mb-14 text-center font-serif text-4xl font-semibold text-wine sm:text-5xl">
            De ce te iubesc
          </h2>
        </Reveal>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {motive.map((m, i) => (
            <Reveal key={i} delay={(i % 2) * 120}>
              <div className="h-full rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-rose/15 backdrop-blur transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 text-4xl">{m.emoji}</div>
                <h3 className="mb-2 font-serif text-2xl font-semibold text-rose-deep">
                  {m.titlu}
                </h3>
                <p className="font-serif text-lg leading-relaxed text-wine/80">
                  {m.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── CRONOLOGIE ─── */}
      <section className="relative z-10 px-6 py-20">
        <Reveal>
          <h2 className="mb-16 text-center font-serif text-4xl font-semibold text-wine sm:text-5xl">
            Drumul nostru
          </h2>
        </Reveal>
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-rose via-rose-deep to-rose sm:left-1/2" />
          {momente.map((m, i) => (
            <Reveal key={i} delay={80}>
              <div
                className={`relative mb-12 pl-12 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"
                }`}
              >
                <span
                  className={`absolute left-[9px] top-2 h-3.5 w-3.5 rounded-full bg-rose-deep ring-4 ring-blush sm:left-auto ${
                    i % 2 === 0 ? "sm:-right-[7px]" : "sm:-left-[7px]"
                  }`}
                />
                <span className="mb-1 inline-block font-script text-3xl text-rose-deep">
                  {m.eticheta}
                </span>
                <p className="font-serif text-lg leading-relaxed text-wine/80">
                  {m.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── SCRISOAREA ─── */}
      <section className="relative z-10 px-6 py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-[2rem] bg-white/80 p-8 shadow-xl ring-1 ring-rose/20 backdrop-blur sm:p-14">
            <p className="mb-6 font-script text-4xl text-rose-deep">{scrisoare.salut}</p>
            <div className="space-y-5">
              {scrisoare.paragrafe.map((par, i) => (
                <p
                  key={i}
                  className="font-serif text-lg leading-relaxed text-wine/85 sm:text-xl"
                >
                  {par}
                </p>
              ))}
            </div>
            <p className="mt-8 text-right font-script text-3xl text-rose-deep">
              {scrisoare.semnatura}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ─── FINAL ─── */}
      <section className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center">
        <Reveal>
          <div className="beat mb-8 text-7xl sm:text-8xl">❤️</div>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="font-script text-6xl text-rose-deep sm:text-8xl">{final}</h2>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-6 font-serif text-xl italic text-wine/70">
            astăzi, mâine și în fiecare zi care urmează 💕
          </p>
        </Reveal>
        <Reveal delay={420}>
          <p className="mt-4 font-serif text-2xl text-rose-deep">
            ❤️ 🤍 ❤️ 🤍 ❤️
          </p>
        </Reveal>
        <Reveal delay={560}>
          <p className="mt-16 font-serif text-sm uppercase tracking-[0.3em] text-wine/40">
            {config.numeIubita} &nbsp;•&nbsp; {config.luni} luni &nbsp;•&nbsp; ∞
          </p>
        </Reveal>
      </section>
    </main>
  );
}
