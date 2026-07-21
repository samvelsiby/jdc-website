// The annual edit: when the exec team turns over, this file is the change.
// Photos live in public/images/execs/ — see README for the naming convention.
// Degrees are still placeholders pending the real copy.

export type Exec = {
  names: string[]; // co-VP roles share one entry (two names, one role)
  role: string;
  roleNote?: string; // gloss for titles an outside visitor won't know
  degree: string;
  blurb: string; // short description of what the role actually does
  featured?: boolean;
  photos?: string[]; // paths into public/, aligned index-for-index with `names`; omit an entry (or the whole field) to fall back to initials
};

export const CAPTAIN: Exec = {
  names: ["Thiksha Sathish Kumar"],
  role: "Captain",
  degree: "Degree TBD", // TODO
  blurb: "Leads the delegation from tryouts through the competition floor — the person the whole team answers to.",
  featured: true,
  photos: ["/images/execs/thiksha-sathish-kumar.jpg"],
};

export const EXECS: Exec[] = [
  {
    names: ["Joshua Adeleke"],
    role: "Godparent",
    roleNote: "our returning-alumni mentor", // TODO: confirm what Godparent means publicly
    degree: "Degree TBD",
    blurb: "A past delegate who stays close to the team, offering guidance from someone who's already been through it.",
    photos: ["/images/execs/joshua-adeleke.jpg"],
  },
  {
    names: ["Shreya Sharma"],
    role: "VP Internal",
    degree: "Degree TBD",
    blurb: "Keeps the team running day to day — practices, schedules, and making sure everyone's in the loop.",
    photos: ["/images/execs/shreya-sharma.jpg"],
  },
  {
    names: ["Dev Jani"],
    role: "VP Corporate Relations",
    degree: "Degree TBD",
    blurb: "Builds and manages the sponsor relationships that fund the delegation.",
    photos: ["/images/execs/dev-jani.jpg"],
  },
  {
    names: ["Rishi J Koriya"],
    role: "VP Finance",
    degree: "Degree TBD",
    blurb: "Manages the team's budget, delegate fees, and fundraising accounts.",
    photos: ["/images/execs/rishi-j-koriya.jpg"],
  },
  {
    names: ["Arun Muthu"],
    role: "Co-VP Marketing",
    degree: "Degree TBD",
    blurb: "Runs the team's branding, content, and social media presence.",
    photos: ["/images/execs/arun-muthu.jpg"],
  },
  {
    names: ["Raezel Florence Balino"],
    role: "Co-VP Marketing",
    degree: "Degree TBD",
    blurb: "Runs the team's branding, content, and social media presence.",
    photos: ["/images/execs/raezel-florence-balino.jpg"],
  },
  {
    names: ["Ronal Daison"],
    role: "VP Events & Logistics",
    degree: "Degree TBD",
    blurb: "Plans practices, travel, and every logistical detail on the road to competition.",
    photos: ["/images/execs/ronal-daison.jpg"],
  },
  {
    names: ["Vikramsinh Parmar"],
    role: "VP Charity",
    degree: "Degree TBD",
    blurb: "Leads the team's charity partnerships and fundraising events.",
    photos: ["/images/execs/vikramsinh-parmar.jpg"],
  },
  {
    names: ["Richel Saldanha"],
    role: "VP Academics, Internal",
    degree: "Degree TBD",
    blurb: "Coaches the academic case teams and runs internal practice sessions.",
    photos: ["/images/execs/richel-saldanha.jpg"],
  },
  {
    names: ["Chetan Veer Singh"],
    role: "VP Academics, External",
    degree: "Degree TBD",
    blurb: "Sources case coaches and connects the team with outside academic support.",
    photos: ["/images/execs/chetan-veer-singh.jpg"],
  },
  {
    names: ["Harleen Deol"],
    role: "VP Athletics and Challenge",
    degree: "Degree TBD",
    blurb: "Trains the athletics and challenge teams for competition day.",
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
