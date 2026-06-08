// ════════════════════════════════════════════════════════════════
//  💛  CONFIGURAREA FELICITĂRII  —  editează totul de aici
// ════════════════════════════════════════════════════════════════
//
//  POZELE:
//  Pune-ți pozele în folderul  public/poze/
//  cu numele:  foto1.jpg, foto2.jpg, foto3.jpg ...  (sau .png)
//  Dacă o poză lipsește încă, se afișează un loc gol elegant
//  în care scrie unde s-o pui — nimic nu se strică.
//
// ════════════════════════════════════════════════════════════════

export const config = {
  // Numele ei (apare în titlu și pe parcurs)
  numeIubita: "Ariana",

  // De câte luni sunteți împreună
  luni: 8,

  // Subtitlul de sub titlul mare
  subtitlu: "8 luni cu tine — și parcă ne-am cunoscut de-o viață",

  // Data de când sunteți împreună (format: AAAA-LL-ZZ) — pentru contor
  dataInceput: "2025-10-08",
};

// ── Poza principală (apare mare la deschidere) ──────────────────
export const pozaPrincipala = "/poze/photo_2026-06-07_22-23-06.jpg";

// ── Pozele din galerie ──────────────────────────────────────────
// src = numele fișierului din public/poze/
// text = ce scrie sub poză (poți schimba sau lăsa gol "")
export const poze = [
  { src: "/poze/photo_2026-06-07_22-23-06.jpg", text: "Tu și cu mine 🖤" },
  { src: "/poze/photo_2026-06-07_22-19-23.jpg", text: "Eleganți, împreună" },
  { src: "/poze/photo_2026-06-07_22-19-47.jpg", text: "Zâmbetul care mă topește" },
  { src: "/poze/photo_2026-06-07_22-20-15.jpg", text: "Noi doi, restul lumii pe pauză" },
  { src: "/poze/photo_2026-06-07_22-20-25.jpg", text: "Momentele noastre" },
  { src: "/poze/photo_2026-06-07_22-20-40.jpg", text: "Râsul tău, melodia mea" },
  { src: "/poze/photo_2026-06-07_22-20-52.jpg", text: "O zi de neuitat" },
  { src: "/poze/photo_2026-06-07_22-22-56.jpg", text: "Începutul a tot ce e frumos" },
];

// ── Motivele „de ce te iubesc" ──────────────────────────────────
export const motive = [
  {
    emoji: "🌅",
    titlu: "Pentru diminețile",
    text: "Cu tine, până și o zi obișnuită pare un răsărit. Primul meu gând dimineața ești tu, iar ultimul, înainte să adorm, tot tu. Mă faci să iubesc viața așa simplă cum e — atâta timp cât ești în ea.",
  },
  {
    emoji: "😍",
    titlu: "Pentru zâmbetul tău",
    text: "Ai un zâmbet care îmi liniștește toată ziua grea. Când îți luminează ochii, uit de orice grijă. Aș face orice, oricând, doar ca să-l văd din nou și din nou.",
  },
  {
    emoji: "😂",
    titlu: "Pentru râsul tău",
    text: "Râsul tău e sunetul meu preferat din toată lumea asta. Cu tine glumele proaste devin amintiri și momentele banale se transformă în cele mai frumoase povești pe care le am.",
  },
  {
    emoji: "🤗",
    titlu: "Pentru îmbrățișări",
    text: "În brațele tale am găsit locul în care mă simt cel mai în siguranță. Oricât de departe aș fi fost, o îmbrățișare de la tine înseamnă «ai ajuns acasă». Acolo vreau să rămân.",
  },
  {
    emoji: "🤝",
    titlu: "Pentru sprijin",
    text: "Lângă tine simt că pot duce orice la capăt. Mă crezi când eu nu mai cred în mine, mă ții de mână la greu și te bucuri sincer de fiecare reușită a mea. Ești cel mai bun coechipier.",
  },
  {
    emoji: "🫶",
    titlu: "Pentru felul tău",
    text: "Pentru cum mă faci să mă simt acasă, oriunde am fi. Pentru răbdarea ta, pentru grija din lucrurile mici, pentru felul unic în care iubești. Te iubesc exact așa cum ești — și nu mi-aș dori altfel.",
  },
];

// ── Mini cronologie (momente importante) ────────────────────────
export const momente = [
  { eticheta: "Luna 1", text: "Totul a început. Fluturi, emoții și primele mesaje de noapte bună." },
  { eticheta: "Luna 3", text: "Am știut că nu ești doar o etapă — ești destinația." },
  { eticheta: "Luna 5", text: "Ne-am construit micile noastre obiceiuri, glumele doar ale noastre." },
  { eticheta: "Luna 8", text: "Și azi te aleg din nou. Și mâine. Și în fiecare zi." },
];

// ── Mesaje scurte de dragoste (apar ca un colaj romantic) ───────
export const mesaje = [
  "Ești cel mai frumos lucru care mi s-a întâmplat.",
  "Cu tine, «acasă» nu e un loc — ești tu.",
  "Te-aș alege în fiecare viață, de fiecare dată.",
  "Inima mea bate pe numele tău.",
  "Lângă tine, timpul se oprește și totul are sens.",
  "Tu ești visul din care nu vreau să mă trezesc.",
  "Orice zi e mai frumoasă pentru că exiști tu în ea.",
  "Te iubesc azi mai mult ca ieri și mai puțin ca mâine.",
];

// ── Scrisoarea ──────────────────────────────────────────────────
export const scrisoare = {
  salut: "Draga mea,",
  paragrafe: [
    "Au trecut opt luni de când ai intrat în viața mea și de atunci totul are mai multă culoare. Nu credeam că cineva mă poate face să zâmbesc fără motiv, în mijlocul zilei, doar gândindu-mă la el.",
    "Mulțumesc pentru fiecare îmbrățișare, pentru fiecare «noapte bună», pentru răbdarea ta și pentru felul în care mă faci să mă simt iubit cu adevărat. Cu tine, timpul trece prea repede și niciodată nu e de ajuns.",
    "Opt luni sunt doar începutul. Abia aștept toate aniversările care urmează, toate aventurile, toate momentele mici care, alături de tine, devin uriașe.",
  ],
  semnatura: "Al tău, pentru totdeauna ❤️",
};

// Mesajul mare de final
export const final = "Te iubesc";
