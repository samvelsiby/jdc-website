"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CAPTAIN, EXECS, HEADCOUNT, initials as nameInitials, Exec } from "@/data/execs";
import { APPLY_FORM_URL } from "@/data/links";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type CardData = Exec & { cta?: boolean };

// Roster is the Captain + every exec, plus one recruiting card at the end —
// an empty slot with the visitor's name on it. Trios cycle through in
// groups of 3; the last group just has whatever's left over.
const ROSTER: CardData[] = [
  CAPTAIN,
  ...EXECS,
  {
    names: ["You?"],
    role: "Future delegate",
    degree: "any UWinnipeg student",
    quote: "this spot’s empty. fix that.",
    cta: true,
  },
];

const SLOTS = 3;
const GROUPS = Math.ceil(ROSTER.length / SLOTS);

const bigInitial = (e: CardData) => (e.cta ? "?" : e.names.map((n) => n[0]).join("+"));
const photoVariant = (i: number) =>
  i % 3 === 1 ? "polaroid-img--sunset" : i % 3 === 2 ? "polaroid-img--paper" : "";

/**
 * Pinned scrub showcase, reference-style: three dashed "paste here" slots
 * side by side. Execs arrive three at a time — cards slide in from
 * off-right (rotated, staggered per slot, straighten, settle to scale) —
 * hold, then the trio slides off-left as the next trio arrives. Giant
 * stroked initials swap in each slot per group. Fully scrubbed.
 *
 * Mobile: no pin (there's no room for it) — instead each card gets its own
 * scroll-triggered paste-in as it enters the viewport: the whole card drops
 * in with a settling rotation, then its pill, photo, and quote stamp on in
 * a quick sequence. Plays once per card. Reduced-motion (any width) skips
 * all of it and the cards render in their resting position.
 */
export default function ExecShowcase() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1000px) and (prefers-reduced-motion: no-preference)", () => {
        const sec = scope.current;
        if (!sec) return;
        const members = gsap.utils.toArray<HTMLElement>(".show-member", sec);
        const off = () => window.innerWidth;

        const cardsOf = (g: number) =>
          gsap.utils
            .toArray<HTMLElement>(`.show-pcard[data-group="${g}"]`, sec)
            .sort((a, b) => Number(a.dataset.slot) - Number(b.dataset.slot));
        const lettersOf = (g: number) =>
          gsap.utils
            .toArray<HTMLElement>(`.show-initial[data-group="${g}"]`, sec)
            .sort((a, b) => Number(a.dataset.slot) - Number(b.dataset.slot));

        gsap.set(members, { yPercent: 125 });
        gsap.set(gsap.utils.toArray(".show-initial", sec), { scale: 0 });
        gsap.set(gsap.utils.toArray(".show-pcard", sec), { x: off(), rotation: 20, scale: 0.75 });

        // Phase 1 — slots rise in staggered, first group's initials stamp up.
        const enter = gsap.timeline({
          scrollTrigger: { trigger: sec, start: "top bottom", end: "top top", scrub: 1 },
        });
        members.forEach((m, s) => enter.to(m, { yPercent: 0, duration: 0.7, ease: "none" }, s * 0.15));
        lettersOf(0).forEach((el, s) => enter.to(el, { scale: 1, duration: 0.42, ease: "none" }, 0.28 + s * 0.15));

        // Phase 2 — pin; trios cycle through.
        const pin = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            start: "top top",
            end: `+=${GROUPS * 100}%`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        for (let g = 0; g < GROUPS; g++) {
          const cards = cardsOf(g);
          const letters = lettersOf(g);
          const t = g;
          const last = g === GROUPS - 1;

          cards.forEach((card, s) => {
            pin.to(card, { x: 0, rotation: 0, duration: 0.4, ease: "none" }, t + s * 0.075);
            pin.to(card, { scale: 1, duration: 0.3, ease: "none" }, t + 0.4 + s * 0.08);
            if (!last) {
              pin.to(card, { x: () => -off(), rotation: -16, duration: 0.4, ease: "none" }, t + 1 + s * 0.06);
            }
          });
          letters.forEach((el, s) => {
            if (g > 0) pin.to(el, { scale: 1, duration: 0.3, ease: "none" }, t + 0.05 + s * 0.05);
            if (!last) pin.to(el, { scale: 0, duration: 0.25, ease: "none" }, t + 1 + s * 0.05);
          });
        }
      });

      // Mobile paste-in — each card triggers independently as it scrolls
      // into view, so order across the three underlying slot-columns
      // doesn't matter here (unlike the pin above).
      mm.add("(max-width: 999px) and (prefers-reduced-motion: no-preference)", () => {
        const sec = scope.current;
        if (!sec) return;

        gsap.utils.toArray<HTMLElement>(".show-pcard", sec).forEach((card) => {
          const dir = Number(card.dataset.index) % 2 === 0 ? -1 : 1;
          const tl = gsap.timeline({
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
            defaults: { ease: "back.out(1.5)" },
          });
          tl.from(card, { y: 70, opacity: 0, rotation: dir * 7, scale: 0.92, duration: 0.65 })
            .from(card.querySelector(".pill"), { scale: 0, rotation: -10, ease: "back.out(2)", duration: 0.4 }, "-=.35")
            .from(card.querySelector(".show-photo"), { y: 36, opacity: 0, rotation: dir * -6, duration: 0.5 }, "-=.3")
            .from(card.querySelector(".show-quote"), { scale: 0.7, opacity: 0, duration: 0.4 }, "-=.2");
        });
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="exec-show" aria-label="The exec team">
      {Array.from({ length: SLOTS }).map((_, s) => (
        <div key={s} className="show-member" style={{ zIndex: SLOTS - s }}>
          <span className="show-note hand" aria-hidden="true">
            paste here…
          </span>

          {ROSTER.map((e, i) =>
            i % SLOTS === s ? (
              <p
                key={e.names.join()}
                className="show-initial display-name"
                data-group={Math.floor(i / SLOTS)}
                data-slot={s}
                aria-hidden="true"
              >
                {bigInitial(e)}
              </p>
            ) : null
          )}

          {ROSTER.map((e, i) =>
            i % SLOTS === s ? (
              <article
                key={e.names.join()}
                className="show-pcard"
                data-group={Math.floor(i / SLOTS)}
                data-slot={s}
                data-index={i}
                style={{ zIndex: Math.floor(i / SLOTS) + 1, order: i }}
              >
                <span className="pill">
                  {e.role}
                  {e.roleNote ? <span style={{ fontWeight: 500 }}> — {e.roleNote}</span> : null}
                </span>

                <h3 className="display-name show-name">
                  {e.names.map((n) => (
                    <span key={n} className="block">
                      {n}
                    </span>
                  ))}
                </h3>

                <p className="hand text-lg -mt-1" style={{ color: "var(--purple-deep)" }}>
                  ({e.degree})
                </p>

                <div className={`show-photo polaroid-img ${photoVariant(i)} ${e.photos?.length ? "show-photo--filled" : ""}`}>
                  <span className="tape tape--top" />
                  {e.photos?.length ? (
                    <div className={`show-photo-grid ${e.photos.length > 1 ? "show-photo-grid--split" : ""}`}>
                      {e.photos.map((src, p) => (
                        <div key={src} className="show-photo-cell">
                          <Image
                            src={src}
                            alt={e.names[p] ?? e.names[0]}
                            fill
                            sizes="(min-width: 1000px) 20vw, 78vw"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="polaroid-initials">
                      {e.cta ? "?" : e.names.map(nameInitials).join(" + ")}
                    </span>
                  )}
                </div>

                <blockquote className="sticker show-quote">
                  <p className="hand">“{e.quote}”</p>
                </blockquote>

                {e.cta && (
                  <a className="btn btn--gold mt-1" href={APPLY_FORM_URL} target="_blank" rel="noopener">
                    Apply now
                  </a>
                )}
              </article>
            ) : null
          )}
        </div>
      ))}

      <p className="show-scroll-note hand" aria-hidden="true">
        keep scrolling — there’s {HEADCOUNT} of us ↓
      </p>
    </section>
  );
}
