import type { Metadata } from "next";
import Fx from "@/components/Fx";
import Starburst from "@/components/Starburst";
import Polaroid from "@/components/Polaroid";
import { HeartDoodle, SunDoodle } from "@/components/Doodles";
import { CHARITIES } from "@/data/charities";
import { CHARITY_PHOTOS } from "@/data/gallery";
import { CHARITY_FORM_URL, CORPORATE_EMAIL } from "@/data/links";

export const metadata: Metadata = {
  title: "Charity Partners — Team Winnie",
  description:
    "Team Winnie partners with six Winnipeg charities as part of JDC West's charity challenge: Agape Table, Darcy's ARC, The Salvation Army, Children's Hospital Foundation, Maddox Warriors, and the Winnipeg Goldeyes.",
};

export default function CharityPage() {
  return (
    <>
      <Fx />

      {/* Charities-first: partnership pitch leads (README: /charity) */}
      <section className="section" aria-labelledby="charity-h">
        <div className="wrap">
          <p className="eyebrow" data-paste="">
            For our community partners
          </p>
          <h1 id="charity-h" className="torn mt-3" data-stamp="">
            Charity partners
          </h1>
          <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_.9fr] items-start">
            <div className="grid gap-4 max-w-[56ch]">
              <p>
                Charity work is a scored, year-long part of JDC West — which means
                Team Winnie doesn’t treat community partnerships as a side project.
                Our delegates fundraise, volunteer, and run events with our partner
                organizations from September through January.
              </p>
              <p>
                This year we’re working with <strong>six Winnipeg organizations</strong>,
                led by our VP Charity, Vikramsinh Parmar. If your organization wants
                student energy behind a fundraiser or a volunteer push, we’d love to
                talk.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <a className="btn btn--gold" href={CHARITY_FORM_URL} target="_blank" rel="noopener">
                  Partner with us
                </a>
                <a className="btn btn--ghost" href={`mailto:${CORPORATE_EMAIL}`}>
                  Email the team
                </a>
              </div>
            </div>
            <div className="relative justify-self-center">
              <HeartDoodle className="-top-8 -left-6" data-doodle="" />
              <div data-sticker="">
                <Starburst size={170}>6 partners for 26/27!</Starburst>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner wall */}
      <section className="section !pt-0" aria-labelledby="partners">
        <div className="wrap">
          <h2 id="partners" className="sans-heading" data-paste="">
            The 26/27 partners
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {CHARITIES.map((c, i) => (
              <div
                key={c.name}
                className={`sticker relative grid place-items-center min-h-[130px] text-center rot-${(["a", "b", "c"] as const)[i % 3]}`}
                data-sticker=""
              >
                <span className="tape tape--top" />
                {c.announced ? (
                  <span className="display-name display-section !text-[1.6rem]">{c.name}</span>
                ) : (
                  <span className="hand text-2xl" style={{ color: "var(--purple-deep)" }}>
                    announcing soon…
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="slide-purple tx-halftone tx-halftone--light section" aria-labelledby="events">
        <div className="wrap grid gap-10 md:grid-cols-[1fr_.85fr] items-start">
          <div>
            <h2 id="events" style={{ fontFamily: "var(--font-marker)" }} className="text-4xl md:text-5xl uppercase" data-paste="">
              Charity events
            </h2>
            <p className="mt-4 max-w-[52ch] opacity-95" data-paste="">
              Our charity cricket tournament kicked off the year — fundraisers,
              volunteer days, and one big signature event follow through the fall.
              Details land here (and on our Instagram) as soon as dates are locked.
            </p>
            <div className="mt-8 max-w-[560px]">
              <div className="faq-card !static" data-paste="">
                <h3 className="sans-heading">Want first dibs?</h3>
                <p className="mt-2">
                  Charities on our partner list get events co-planned with them, not
                  announced to them. Sign up and our VP Charity will reach out.
                </p>
                <a className="btn btn--gold mt-4" href={CHARITY_FORM_URL} target="_blank" rel="noopener">
                  Charity sign-up form
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[280px] hidden sm:block" aria-hidden="true">
            <Polaroid
              caption="charity cricket tournament"
              rotate="a"
              tape="corners"
              className="absolute top-0 left-2 w-[190px]"
              src={CHARITY_PHOTOS[3].src}
              alt="Delegates at the charity cricket tournament"
              data-polaroid=""
            />
            <Polaroid
              caption="game on"
              rotate="c"
              className="absolute top-16 right-0 w-[170px]"
              src={CHARITY_PHOTOS[8].src}
              alt="Charity cricket tournament in play"
              data-polaroid=""
            />
            <Polaroid
              caption="for the cause"
              rotate="b"
              tape="corners"
              className="absolute bottom-0 left-16 w-[180px]"
              src={CHARITY_PHOTOS[14].src}
              alt="Team Winnie delegates at the charity event"
              data-polaroid=""
            />
          </div>
        </div>
      </section>

      <section className="section" aria-label="Students">
        <div className="wrap text-center relative">
          <SunDoodle className="top-0 right-[18%]" size={56} data-doodle="" />
          <p className="hand-headline" style={{ color: "var(--purple-ink)" }} data-paste="">
            students: this counts as team spirit AND a good deed
          </p>
        </div>
      </section>
    </>
  );
}
