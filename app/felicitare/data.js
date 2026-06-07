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
  dataInceput: "2025-10-07",
};

// ── Pozele din galerie ──────────────────────────────────────────
// src = numele fișierului din public/poze/
// text = ce scrie sub poză (poți schimba sau lăsa gol "")
export const poze = [
  { src: "/poze/foto1.jpg", text: "Prima noastră poză împreună" },
  { src: "/poze/foto2.jpg", text: "Zâmbetul care mă topește" },
  { src: "/poze/foto3.jpg", text: "Noi doi, restul lumii pe pauză" },
  { src: "/poze/foto4.jpg", text: "Locul nostru preferat" },
  { src: "/poze/foto5.jpg", text: "Râsul tău, melodia mea" },
  { src: "/poze/foto6.jpg", text: "O zi pe care n-o uit niciodată" },
  { src: "/poze/foto7.jpg", text: "Tu și cu mine, mereu" },
  { src: "/poze/foto8.jpg", text: "Începutul a tot ce e frumos" },
];

// ── Motivele „de ce te iubesc" ──────────────────────────────────
export const motive = [
  { emoji: "🌅", titlu: "Pentru diminețile", text: "Cu tine, până și o zi obișnuită pare un răsărit." },
  { emoji: "😂", titlu: "Pentru râsul tău", text: "E sunetul meu preferat din toată lumea asta." },
  { emoji: "🤝", titlu: "Pentru sprijin", text: "Lângă tine simt că pot duce orice la capăt." },
  { emoji: "🫶", titlu: "Pentru felul tău", text: "Pentru cum mă faci să mă simt acasă, oriunde am fi." },
];

// ── Mini cronologie (momente importante) ────────────────────────
export const momente = [
  { eticheta: "Luna 1", text: "Totul a început. Fluturi, emoții și primele mesaje de noapte bună." },
  { eticheta: "Luna 3", text: "Am știut că nu ești doar o etapă — ești destinația." },
  { eticheta: "Luna 5", text: "Ne-am construit micile noastre obiceiuri, glumele doar ale noastre." },
  { eticheta: "Luna 8", text: "Și azi te aleg din nou. Și mâine. Și în fiecare zi." },
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
