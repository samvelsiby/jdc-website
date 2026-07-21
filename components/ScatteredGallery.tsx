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
 * vary card to card. Each one is physically stuck to the board as it
 * scrolls into view: it drops in at an angle, presses flat with a little
 * squash, then the tape snaps down over it — not just a generic fade/slide.
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
          const tape = card.querySelectorAll(".tape");
          gsap.set(tape, { scale: 0, opacity: 0 });

          const tl = gsap.timeline({
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
          });

          tl.from(card, {
            y: -60,
            opacity: 0,
            rotation: dir * 16,
            scale: 1.1,
            duration: 0.4,
            ease: "power2.in",
          })
            // the press — flattens onto the board
            .to(card, { scaleY: 0.92, scaleX: 1.05, duration: 0.09, ease: "power1.in" })
            .to(card, { scaleY: 1, scaleX: 1, duration: 0.3, ease: "back.out(3)" })
            // tape snaps down over it, right as it settles
            .to(tape, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(2.5)", stagger: 0.06 }, "-=0.2");
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
          />
        </div>
      ))}
    </div>
  );
}
