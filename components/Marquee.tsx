"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const LINE = "#WINNIYOUSOFINE · JDC WEST 26/27 · TEAM WINNIE · UNIVERSITY OF WINNIPEG · ";

export default function Marquee() {
  const rowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!rowRef.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const tween = gsap.to(rowRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 22,
      ease: "none",
    });

    // Scroll-velocity-reactive speed: scrolling fast whips the ticker along.
    const decay = gsap.to(tween, { timeScale: 1, duration: 1.4, ease: "power2.out", paused: true });
    const st = ScrollTrigger.create({
      onUpdate(self) {
        tween.timeScale(gsap.utils.clamp(1, 4, 1 + Math.abs(self.getVelocity()) / 600));
        decay.invalidate().restart();
      },
    });

    return () => {
      st.kill();
      decay.kill();
      tween.kill();
    };
  });

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-row" ref={rowRef}>
        <span>{LINE.repeat(3)}</span>
        <span>{LINE.repeat(3)}</span>
      </div>
    </div>
  );
}
