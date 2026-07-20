// The annual edit: when the exec team turns over, this file is the change.
// Photos live in public/images/execs/ — see README for the naming convention.
// Degrees and quotes are still placeholders pending the real copy.

export type Exec = {
  names: string[]; // co-VP roles share one entry (two names, one role)
  role: string;
  roleNote?: string; // gloss for titles an outside visitor won't know
  degree: string;
  quote: string;
  featured?: boolean;
  photos?: string[]; // paths into public/, aligned index-for-index with `names`; omit an entry (or the whole field) to fall back to initials
};

export const CAPTAIN: Exec = {
  names: ["Thiksha Sathish Kumar"],
  role: "Captain",
  degree: "Degree TBD", // TODO
  quote: "Quote pending — it’s still in the group chat.", // TODO
  featured: true,
  photos: ["/images/execs/thiksha-sathish-kumar.jpg"],
};

export const EXECS: Exec[] = [
  {
    names: ["Joshua Adeleke"],
    role: "Godparent",
    roleNote: "our returning-alumni mentor", // TODO: confirm what Godparent means publicly
    degree: "Degree TBD",
    quote: "Quote pending — check back soon.",
    photos: ["/images/execs/joshua-adeleke.jpg"],
  },
  {
    names: ["Shreya Sharma"],
    role: "VP Internal",
    degree: "Degree TBD",
    quote: "Quote pending — it’s still in the group chat.",
    photos: ["/images/execs/shreya-sharma.jpg"],
  },
  {
    names: ["Dev Jani"],
    role: "VP Corporate Relations",
    degree: "Degree TBD",
    quote: "Quote pending — currently in a meeting about it.",
    photos: ["/images/execs/dev-jani.jpg"],
  },
  {
    names: ["Rishi J Koriya"],
    role: "VP Finance",
    degree: "Degree TBD",
    quote: "Quote pending — auditing the options.",
    photos: ["/images/execs/rishi-j-koriya.jpg"],
  },
  {
    names: ["Arun Muthu"],
    role: "Co-VP Marketing",
    degree: "Degree TBD",
    quote: "Quote pending — brainstorming the tagline.",
    photos: ["/images/execs/arun-muthu.jpg"],
  },
  {
    names: ["Raezel Florence Balino"],
    role: "Co-VP Marketing",
    degree: "Degree TBD",
    quote: "Quote pending — check back soon.",
    photos: ["/images/execs/raezel-florence-balino.jpg"],
  },
  {
    names: ["Ronal Daison"],
    role: "VP Events & Logistics",
    degree: "Degree TBD",
    quote: "Quote pending — it’s on the run sheet.",
    photos: ["/images/execs/ronal-daison.jpg"],
  },
  {
    names: ["Vikramsinh Parmar"],
    role: "VP Charity",
    degree: "Degree TBD",
    quote: "Quote pending — for a good cause.",
    photos: ["/images/execs/vikramsinh-parmar.jpg"],
  },
  {
    names: ["Richel Saldanha"],
    role: "VP Academics, Internal",
    degree: "Degree TBD",
    quote: "Quote pending — cite your sources.",
    photos: ["/images/execs/richel-saldanha.jpg"],
  },
  {
    names: ["Chetan Veer Singh"],
    role: "VP Academics, External",
    degree: "Degree TBD",
    quote: "Quote pending — under peer review.",
    photos: ["/images/execs/chetan-veer-singh.jpg"],
  },
  {
    names: ["Harleen Deol"],
    role: "VP Athletics and Challenge",
    degree: "Degree TBD",
    quote: "Quote pending — out for a warm-up lap.",
    // No photo yet — falls back to initials on a gradient.
  },
];

// Real headcount: Captain + every exec, each with their own card —
// including Arun and Raezel, who used to share one Co-VP card.
export const HEADCOUNT = 1 + EXECS.length;

export function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}
