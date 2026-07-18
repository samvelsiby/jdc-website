import type { Metadata } from "next";
import Fx from "@/components/Fx";
import ExecShowcase from "@/components/ExecShowcase";
import { HeartDoodle, ArrowDoodle, StarDoodle } from "@/components/Doodles";

export const metadata: Metadata = {
  title: "Meet the Execs — Team Winnie",
  description: "The 12 people building UWinnipeg's 26/27 JDC West delegation, led by Captain Thiksha Sathish Kumar.",
};

export default function ExecsPage() {
  return (
    <>
      <Fx />

      {/* Intro — gives the showcase entrance room to play */}
      <section className="relative grid place-items-center min-h-[62svh] text-center px-6">
        <div>
          <StarDoodle className="-top-2 left-[14%]" size={50} data-doodle="" />
          <p className="eyebrow" data-paste="">
            Meet the execs
          </p>
          <h1 className="hand-headline mt-4 max-w-[16ch] mx-auto" style={{ color: "var(--purple-ink)" }} data-paste="">
            the faces behind the polaroids
          </h1>
          <p className="hand text-2xl mt-6" style={{ color: "var(--purple-deep)" }} data-paste="">
            all 12 of us, one at a time — keep scrolling ↓
          </p>
        </div>
      </section>

      {/* Pinned scrub carousel — the whole roster */}
      <ExecShowcase />

      <section className="section" aria-label="Join us">
        <div className="wrap text-center relative">
          <HeartDoodle className="top-0 left-[16%]" size={48} data-doodle="" />
          <ArrowDoodle className="top-10 right-[14%] -scale-x-100" data-doodle="" />
          <p className="hand-headline" style={{ color: "var(--purple-ink)" }} data-paste="">
            want your polaroid on this wall?
          </p>
          <div className="mt-6" data-paste="">
            <a className="btn btn--gold" href="/">
              Apply as a delegate
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
