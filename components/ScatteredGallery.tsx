"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Polaroid from "@/components/Polaroid";
import { GALLERY_PHOTOS } from "@/data/gallery";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ROTATE = ["a", "b", "c"] as const;
const VARIANT = ["purple", "sunset", "paper"] as const;
// Small per-card vertical nudge, cycling — breaks the column grid into
// something looser without abandoning it (DESIGN.md: legibility over chaos).
const DRIFT = [0, 34, 14, 46, 6, 28];

/**
 * The photo wall as a loose, pasted-in collage rather than a fixed 6-photo
 * grid: up to 20 curated shots, tossed into a masonry layout so heights
 * vary card to card, each one pasting itself in only once it's scrolled
 * into view — so the wall visibly fills in as you scroll, not all at once.
 */
export default function ScatteredGallery() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".gallery-card", scope.current ?? undefined);
        cards.forEach((card, i) => {
          const dir = i % 2 ? 1 : -1;
          gsap.from(card, {
            scrollTrigger: { trigger: card, start: "top 90%", once: true },
            y: 70,
            opacity: 0,
            scale: 0.85,
            rotation: `+=${dir * 9}`,
            duration: 0.65,
            ease: "back.out(1.5)",
          });
        });
      });
    },
    { scope }
  );

  return (
    <div ref={scope} className="columns-2 sm:columns-3 lg:columns-4 gap-5">
      {GALLERY_PHOTOS.map((p, i) => (
        <div
          key={p.src}
          className="gallery-card break-inside-avoid mb-5"
          style={{ marginTop: i < 4 ? 0 : DRIFT[i % DRIFT.length] }}
        >
          <Polaroid
            caption={p.caption}
            rotate={ROTATE[i % ROTATE.length]}
            tape={i % 2 ? "corners" : "top"}
            variant={VARIANT[i % VARIANT.length]}
            className="w-full"
            src={p.src}
            alt={p.caption}
            data-polaroid=""
          />
        </div>
      ))}
    </div>
  );
}
