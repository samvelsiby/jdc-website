// Real photos, optimized into public/images/gallery/ — see README.
// Captions are placeholders; swap in real ones as events get names/dates.

export const CHARITY_PHOTOS = Array.from({ length: 19 }, (_, i) => ({
  src: `/images/gallery/charity/charity-${String(i + 1).padStart(2, "0")}.jpg`,
  caption: "charity cricket tournament",
}));

export const COMPETITION_PHOTOS = Array.from({ length: 7 }, (_, i) => ({
  src: `/images/gallery/competition/comp-${String(i + 1).padStart(2, "0")}.jpg`,
  caption: "JDC West on the floor",
}));
