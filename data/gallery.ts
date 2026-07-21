// Real photos, optimized into public/images/gallery/ — see README.

export const CHARITY_PHOTOS = Array.from({ length: 19 }, (_, i) => ({
  src: `/images/gallery/charity/charity-${String(i + 1).padStart(2, "0")}.jpg`,
  caption: "charity cricket tournament",
}));

// The curated 26/27 gallery — up to 20 photos, hand-picked for variety
// (categories, athletics, road trip, banquet) rather than everything on
// the camera roll. This is what the homepage scattered-collage gallery reads from.
export const GALLERY_PHOTOS = [
  { src: "/images/gallery/comp2026/gallery-01.jpg", caption: "delegate badges, ready to go" },
  { src: "/images/gallery/comp2026/gallery-02.jpg", caption: "human resources, suited up" },
  { src: "/images/gallery/comp2026/gallery-03.jpg", caption: "entrepreneurship squad" },
  { src: "/images/gallery/comp2026/gallery-04.jpg", caption: "not-for-profit, ready to present" },
  { src: "/images/gallery/comp2026/gallery-05.jpg", caption: "international business trio" },
  { src: "/images/gallery/comp2026/gallery-06.jpg", caption: "athletics, gym floor energy" },
  { src: "/images/gallery/comp2026/gallery-07.jpg", caption: "banquet night, all in" },
  { src: "/images/gallery/comp2026/gallery-08.jpg", caption: "practice day, ball in hand" },
  { src: "/images/gallery/comp2026/gallery-09.jpg", caption: "case prep, mid-laugh" },
  { src: "/images/gallery/comp2026/gallery-10.jpg", caption: "team hangout, holiday edition" },
  { src: "/images/gallery/comp2026/gallery-11.jpg", caption: "the road trip to JDC West" },
  { src: "/images/gallery/comp2026/gallery-12.jpg", caption: "the whole delegation, lit up" },
  { src: "/images/gallery/comp2026/gallery-13.jpg", caption: "business technology, banner-ready" },
  { src: "/images/gallery/comp2026/gallery-14.jpg", caption: "marketing, making it look easy" },
  { src: "/images/gallery/comp2026/gallery-15.jpg", caption: "business strategy trio" },
  { src: "/images/gallery/comp2026/gallery-16.jpg", caption: "food court between rounds" },
  { src: "/images/gallery/comp2026/gallery-17.jpg", caption: "hallway antics, still in character" },
  { src: "/images/gallery/comp2026/gallery-18.jpg", caption: "executive of the year" },
  { src: "/images/gallery/comp2026/gallery-19.jpg", caption: "the after-party pose" },
  { src: "/images/gallery/comp2026/gallery-20.jpg", caption: "banquet night, dressed up" },
];

// The hero's group photo — the whole delegation, one frame, landscape.
export const HERO_TEAM_PHOTO = {
  src: "/images/gallery/comp2026/hero-team.jpg",
  alt: "Team Winnie, the full delegation, at JDC West",
};
