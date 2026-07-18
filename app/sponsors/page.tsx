import type { Metadata } from "next";
import Fx from "@/components/Fx";
import Starburst from "@/components/Starburst";
import { StarDoodle, SquiggleDoodle } from "@/components/Doodles";
import { CORPORATE_EMAIL } from "@/data/links";

export const metadata: Metadata = {
  title: "Sponsors — Team Winnie",
  description: "The organizations backing UWinnipeg's 26/27 JDC West delegation — and how to become one of them.",
};

// TODO: real tier names, benefits, and signed sponsors from VP Corporate Relations.
const TIERS = [
  { name: "Headliner", note: "top billing on everything we print, wear, and ship", slots: 2 },
  { name: "Feature", note: "logo on the site, the banner, and event materials", slots: 4 },
  { name: "Clipping", note: "a taped-in spot on our sponsor wall and our thanks, loudly", slots: 8 },
];

export default function SponsorsPage() {
  return (
    <>
      <Fx />

      <section className="section" aria-labelledby="sponsors-h">
        <div className="wrap">
          <p className="eyebrow" data-paste="">
            The people who make it possible
          </p>
          <h1 id="sponsors-h" className="torn mt-3" data-stamp="">
            Our sponsors
          </h1>
          <p className="mt-6 max-w-[54ch]" data-paste="">
            Sending a delegation to JDC West takes real money — travel, training,
            registration, and a semester of events. Our sponsors make that possible,
            and we make sure everyone knows it.
          </p>
        </div>
      </section>

      {/* Sponsor wall — logos taped in like clippings (DESIGN.md §9) */}
      <section className="section !pt-0" aria-labelledby="wall">
        <div className="wrap">
          <h2 id="wall" className="sans-heading" data-paste="">
            The 26/27 sponsor wall
          </h2>
          <div className="mt-6 grid gap-5 grid-cols-2 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`sticker relative grid place-items-center min-h-[110px] rot-${(["a", "b", "c"] as const)[i % 3]}`}
                data-sticker=""
              >
                <span className="tape tape--top" />
                <span className="hand text-xl text-center" style={{ color: "var(--purple-deep)" }}>
                  your logo here
                </span>
              </div>
            ))}
          </div>
          <p className="hand text-xl mt-6" style={{ color: "var(--purple-deep)" }} data-paste="">
            (signed sponsors get taped in here as agreements are finalized)
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="slide-purple section" aria-labelledby="tiers">
        <div className="wrap">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <h2 id="tiers" style={{ fontFamily: "var(--font-marker)" }} className="text-4xl md:text-5xl uppercase" data-paste="">
              Sponsorship tiers
            </h2>
            <div data-sticker="">
              <Starburst size={130}>Limited spots!</Starburst>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {TIERS.map((t, i) => (
              <div key={t.name} className={`faq-card !static rot-${(["a", "b", "c"] as const)[i % 3]}`} data-paste="">
                <h3 className="display-name display-section !text-[1.7rem]">{t.name}</h3>
                <p className="mt-2">{t.note}</p>
                <p className="hand text-lg mt-3" style={{ color: "var(--purple-deep)" }}>
                  {t.slots} spots
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm opacity-80" data-paste="">
            Tier details are being finalized with our corporate relations team — email
            for the current package.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Contact">
        <div className="wrap text-center relative">
          <StarDoodle className="top-0 left-[14%]" size={50} data-doodle="" />
          <p className="hand-headline" style={{ color: "var(--purple-ink)" }} data-paste="">
            put your logo in the scrapbook
          </p>
          <div className="mt-6" data-paste="">
            <a className="btn btn--gold" href={`mailto:${CORPORATE_EMAIL}`}>
              Email corporate relations
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
