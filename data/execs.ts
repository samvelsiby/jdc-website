// The annual edit: when the exec team turns over, this file is the change.
// Each entry needs a real photo, degree, and quote — placeholders ship until then.

export type Exec = {
  names: string[]; // co-VP roles share one entry (two names, one role)
  role: string;
  roleNote?: string; // gloss for titles an outside visitor won't know
  degree: string;
  quote: string;
  featured?: boolean;
};

export const CAPTAIN: Exec = {
  names: ["Thiksha Sathish Kumar"],
  role: "Captain",
  degree: "Degree TBD", // TODO
  quote: "Quote pending — it’s still in the group chat.", // TODO
  featured: true,
};

export const EXECS: Exec[] = [
  {
    names: ["Joshua Adeleke"],
    role: "Godparent",
    roleNote: "our returning-alumni mentor", // TODO: confirm what Godparent means publicly
    degree: "Degree TBD",
    quote: "Quote pending — check back soon.",
  },
  {
    names: ["Shreya Sharma"],
    role: "VP Internal",
    degree: "Degree TBD",
    quote: "Quote pending — it’s still in the group chat.",
  },
  {
    names: ["Dev Jani"],
    role: "VP Corporate Relations",
    degree: "Degree TBD",
    quote: "Quote pending — currently in a meeting about it.",
  },
  {
    names: ["Rishi J Koriya"],
    role: "VP Finance",
    degree: "Degree TBD",
    quote: "Quote pending — auditing the options.",
  },
  {
    names: ["Arun Muthu", "Raezel Florence Balino"],
    role: "Co-VP Marketing",
    degree: "Degrees TBD",
    quote: "Two people, one pill. Quotes pending.",
  },
  {
    names: ["Ronal Daison"],
    role: "VP Events & Logistics",
    degree: "Degree TBD",
    quote: "Quote pending — it’s on the run sheet.",
  },
  {
    names: ["Vikramsinh Parmar"],
    role: "VP Charity",
    degree: "Degree TBD",
    quote: "Quote pending — for a good cause.",
  },
  {
    names: ["Richel Saldanha"],
    role: "VP Academics, Internal",
    degree: "Degree TBD",
    quote: "Quote pending — cite your sources.",
  },
  {
    names: ["Chetan Veer Singh"],
    role: "VP Academics, External",
    degree: "Degree TBD",
    quote: "Quote pending — under peer review.",
  },
  {
    names: ["Harleen Deol"],
    role: "VP Athletics and Challenge",
    degree: "Degree TBD",
    quote: "Quote pending — out for a warm-up lap.",
  },
];

export function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}
