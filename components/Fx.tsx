"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Page-level scroll effects. Drop one <Fx /> into each page.
 *
 * data-paste     — generic paste-in reveal (settles from a random tilt)
 * data-stamp     — torn labels: scale 0 → 1, slapped on
 * data-polaroid  — rises from below, over-rotated, settles
 * data-sticker   — presses on: scale .6 → 1
 * data-doodle    — elastic pop, triggered late
 * data-count     — counts up to the number in the attribute
 * data-speed     — parallax drift (desktop only), e.g. data-speed="-18"
 * data-draw      — SVG paths inside draw themselves in (stroke-dashoffset)
 */
export default function Fx() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        motionOk: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 768px)",
      },
      (ctx) => {
        const { motionOk, desktop } = ctx.conditions as {
          motionOk: boolean;
          desktop: boolean;
        };

        const all = gsap.utils.toArray<HTMLElement>(
          "[data-paste],[data-stamp],[data-polaroid],[data-sticker],[data-doodle]"
        );

        // Reduced motion: plain 0.3s fades, nothing else.
        if (!motionOk) {
          all.forEach((el) => {
            gsap.from(el, {
              opacity: 0,
              duration: 0.3,
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            });
          });
          return;
        }

        const dist = desktop ? 60 : 30;

        gsap.utils.toArray<HTMLElement>("[data-paste]").forEach((el) => {
          gsap.from(el, {
            y: dist,
            opacity: 0,
            rotation: () => gsap.utils.random(-6, 6),
            ease: "back.out(1.4)",
            duration: 0.7,
            scrollTrigger: { trigger: el, start: "top 82%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-stamp]").forEach((el) => {
          gsap.from(el, {
            scale: 0,
            rotation: -12,
            ease: "back.out(2)",
            duration: 0.65,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-polaroid]").forEach((el, i) => {
          gsap.from(el, {
            y: desktop ? 120 : 60,
            opacity: 0,
            rotation: 12,
            ease: "back.out(1.4)",
            duration: 0.8,
            delay: (i % 3) * 0.08,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-sticker]").forEach((el) => {
          gsap.from(el, {
            scale: 0.6,
            opacity: 0,
            ease: "back.out(1.7)",
            duration: 0.6,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-doodle]").forEach((el) => {
          gsap.from(el, {
            scale: 0,
            opacity: 0,
            ease: "elastic.out(1, 0.5)",
            duration: 1,
            scrollTrigger: { trigger: el, start: "top 70%", once: true },
          });
        });

        // Hand-drawn lines draw themselves on as they scroll into view.
        gsap.utils.toArray<HTMLElement>("[data-draw]").forEach((el) => {
          const paths = Array.from(el.querySelectorAll<SVGPathElement>("path"));
          paths.forEach((p) => {
            const len = p.getTotalLength();
            gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
          });
          gsap.to(paths, {
            strokeDashoffset: 0,
            duration: 1.1,
            ease: "power2.inOut",
            stagger: 0.18,
            scrollTrigger: { trigger: el, start: "top 80%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const end = Number(el.dataset.count ?? 0);
          const state = { n: 0 };
          gsap.to(state, {
            n: end,
            duration: 1.4,
            ease: "power1.out",
            snap: { n: 1 },
            onUpdate: () => {
              el.textContent = String(Math.round(state.n));
            },
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });

        // Parallax drift — desktop only (killed on mobile per DESIGN.md §6.6).
        if (desktop) {
          gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
            const speed = parseFloat(el.dataset.speed ?? "0");
            gsap.to(el, {
              yPercent: speed,
              ease: "none",
              scrollTrigger: {
                trigger: el.closest("section") ?? el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
          });
        }
      }
    );
  });

  return null;
}
