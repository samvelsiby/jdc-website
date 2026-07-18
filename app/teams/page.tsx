import type { Metadata } from "next";
import Fx from "@/components/Fx";
import Starburst from "@/components/Starburst";
import { StarDoodle, ArrowDoodle, SquiggleDoodle } from "@/components/Doodles";
import { MAIN_FOUR, ACADEMICS } from "@/data/categories";
import { APPLY_FORM_URL } from "@/data/links";

export const metadata: Metadata = {
  title: "Teams & Categories — Team Winnie",
  description: "The 14 JDC West competition categories Team Winnie competes in: the main 4 plus 10 academic cases.",
};

export default function TeamsPage() {
  return (
    <>
      <Fx />

      <section className="section">
        <div className="wrap">
          <p className="eyebrow" data-paste="">
            What we compete in
          </p>
          <h1 className="torn mt-3" data-stamp="">
            The categories
          </h1>
          <p className="mt-6 max-w-[54ch]" data-paste="">
            JDC West is 14 competitions in one weekend. Four of them get loud —
            debate podiums, gym floors, dance floors. Ten of them happen in case
            rooms with a timer running. Every single one counts toward School of
            the Year.
          </p>
          <p className="hand text-xl mt-3" style={{ color: "var(--purple-deep)" }} data-paste="">
            (category lineup shown is last year’s — the 26/27 list is confirmed closer to competition)
          </p>
        </div>
      </section>

      <section className="section !pt-0" aria-labelledby="main4">
        <div className="wrap">
          <h2 id="main4" className="torn mt-3" data-stamp="">
            The main 4
          </h2>
          <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2">
            {MAIN_FOUR.map((c, i) => (
              <article key={c.name} className={`sticker rot-${(["a", "b", "c"] as const)[i % 3]}`} data-sticker="">
                <h3 className="display-name display-section">{c.name}</h3>
                <p className="mt-3">{c.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="slide-purple section" aria-labelledby="academics">
        <div className="wrap">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <h2 id="academics" style={{ fontFamily: "var(--font-marker)" }} className="text-4xl md:text-5xl uppercase" data-paste="">
              10 academic cases
            </h2>
            <div data-sticker="">
              <Starburst size={120}>3 per team!</Starburst>
            </div>
          </div>
          <p className="mt-4 max-w-[52ch] opacity-95" data-paste="">
            Each academic team gets a business case and 90 minutes to crack it, then
            presents to a panel of judges from industry. No internet, no notes coming
            in — just your team and a whiteboard.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {ACADEMICS.map((c, i) => (
              <div key={c} className={`faq-card !static rot-${(["a", "b", "c"] as const)[i % 3]}`} data-paste="">
                <h3 className="sans-heading !text-base">{c}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Apply">
        <div className="wrap text-center relative">
          <StarDoodle className="top-0 left-[12%]" size={48} data-doodle="" />
          <ArrowDoodle className="top-8 right-[14%]" data-doodle="" />
          <p className="hand-headline" style={{ color: "var(--purple-ink)" }} data-paste="">
            see yourself in one of these?
          </p>
          <div className="mt-6" data-paste="">
            <a className="btn btn--gold" href={APPLY_FORM_URL} target="_blank" rel="noopener">
              Apply to JDC West
            </a>
          </div>
          <div className="mt-4 flex justify-center">
            <SquiggleDoodle className="!relative" data-doodle="" />
          </div>
        </div>
      </section>
    </>
  );
}
