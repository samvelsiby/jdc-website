"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ButterflyDoodle, StarDoodle, HeartDoodle, SquiggleDoodle } from "@/components/Doodles";
import { APPLY_FORM_URL, APPLICATION_DEADLINE } from "@/data/links";
import { COMPETITION_PHOTOS } from "@/data/gallery";

gsap.registerPlugin(useGSAP);

/**
 * Scrapbook-editorial hero: headline column on graph paper, collage on the
 * right — photo cutout with butterfly wings spread behind it, a taped ruled
 * note, and a postage stamp. The apply CTA is NOT in the timeline: clickable
 * at frame one while the collage assembles around it (DESIGN.md §9).
 */
export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.7 } });
        tl.from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.45 })
          .from(".hero-headline", { y: 34, opacity: 0, duration: 0.6 }, "-=.2")
          .from(".hero-accent", { scale: 0, rotation: -8, ease: "back.out(2)", stagger: 0.12, duration: 0.5 }, "-=.25")
          .from(".hero-sub", { y: 20, opacity: 0, duration: 0.45 }, "-=.25")
          .from(".hero-wings", { scale: 0.5, opacity: 0, rotation: -8, ease: "back.out(1.6)", duration: 0.8 }, "-=.3")
          .from(".hero-photo", { y: 90, opacity: 0, rotation: 8, ease: "back.out(1.4)", duration: 0.7 }, "-=.5")
          .from(".hero-note", { scale: 0, rotation: -14, ease: "back.out(1.8)", duration: 0.55 }, "-=.35")
          .from(".hero-stamp", { scale: 0, rotation: 20, ease: "back.out(2)", duration: 0.5 }, "-=.4")
          .from(".hero-doodle", { scale: 0, opacity: 0, ease: "elastic.out(1, .5)", stagger: 0.08, duration: 0.8 }, "-=.3");

        // Ambient flutter — the butterfly breathes, slowly, forever.
        gsap.to(".hero-wings", { rotation: 2.5, yoyo: true, repeat: -1, duration: 2.8, ease: "sine.inOut" });
        gsap.to(".hero-fly", { rotation: 6, y: -4, yoyo: true, repeat: -1, duration: 2.2, ease: "sine.inOut" });
      });

      // Cursor drift — desktop pointers only.
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference) and (hover: hover)", () => {
        const els = gsap.utils.toArray<HTMLElement>("[data-drift]", scope.current ?? undefined);
        const movers = els.map((el) => ({
          x: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
          y: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" }),
          depth: parseFloat(el.dataset.drift ?? "12"),
        }));
        const onMove = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          movers.forEach((m) => {
            m.x(nx * m.depth);
            m.y(ny * m.depth);
          });
        };
        window.addEventListener("pointermove", onMove);
        return () => window.removeEventListener("pointermove", onMove);
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="hero-ed tx-grid" aria-label="Team Winnie — apply to JDC West">
      <div className="wrap grid gap-5 md:gap-12 md:grid-cols-[1.05fr_.95fr] items-center w-full">
        {/* Left: editorial ask */}
        <div className="relative">
          <ButterflyDoodle className="hero-fly !relative mb-3" size={54} scheme="ink" />
          <p className="hero-eyebrow eyebrow">University of Winnipeg · JDC West 26/27</p>

          <h1 className="ed-headline mt-4">
            Join us as we{" "}
            <span className="hero-accent marker-accent">compete</span>, fundraise, and
            road-trip our way to{" "}
            <span className="hero-accent hl-gold">JDC West 26/27</span>
          </h1>

          <p className="hero-sub mt-5 max-w-[44ch]">
            Western Canada’s biggest business school competition, and the UWinnipeg
            delegation that’s going to it. Forty-six delegates, one team, three January
            days you’ll never forget.
          </p>

          {/* CTA — outside the timeline, clickable at frame one */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a className="btn btn--gold" href={APPLY_FORM_URL} target="_blank" rel="noopener">
              Apply to JDC West
            </a>
            <a className="btn btn--ghost" href="/execs">
              Meet the team
            </a>
          </div>
          <p className="hero-sub hand text-xl mt-4" style={{ color: "var(--purple-deep)" }}>
            {APPLICATION_DEADLINE
              ? `applications close ${APPLICATION_DEADLINE} — don’t sleep on it`
              : "applications opening soon — watch our Instagram"}
          </p>
        </div>

        {/* Right: the collage */}
        <div className="hero-collage" aria-hidden="true">
          <ButterflyDoodle className="hero-wings" size={Math.min(460, 460)} data-drift="14" />

          <div className="cutout hero-photo" data-drift="8">
            <Image
              src={COMPETITION_PHOTOS[2].src}
              alt="Team Winnie at JDC West"
              fill
              sizes="(min-width: 768px) 30vw, 60vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="note-card hero-note left-0 bottom-2" data-drift="24">
            practice tuesdays,
            <br />
            fundraiser fridays,
            <br />
            january: everything ♥
          </div>

          <div className="stamp hero-stamp right-2 top-4" data-drift="30">
            <div className="stamp-inner">26/27</div>
          </div>

          <StarDoodle className="hero-doodle top-[6%] left-[10%]" size={44} data-drift="36" />
          <HeartDoodle className="hero-doodle bottom-[14%] right-[8%]" size={42} data-drift="32" />
        </div>
      </div>

      <div className="hidden md:block absolute bottom-3 left-0 right-0 pointer-events-none" aria-hidden="true">
        <div className="wrap">
          <SquiggleDoodle className="hero-doodle !relative" width={170} />
        </div>
      </div>
    </section>
  );
}
