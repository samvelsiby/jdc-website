import Link from "next/link";
import Fx from "@/components/Fx";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Polaroid from "@/components/Polaroid";
import Starburst from "@/components/Starburst";
import FaqStack from "@/components/FaqStack";
import { SunDoodle, HeartDoodle, StarDoodle, SmileyDoodle, ArrowDoodle, CurlyArrowDoodle } from "@/components/Doodles";
import { MAIN_FOUR, ACADEMICS } from "@/data/categories";
import { CHARITIES } from "@/data/charities";
import { CAPTAIN } from "@/data/execs";
import { APPLY_FORM_URL, APPLICATION_DEADLINE, CORPORATE_EMAIL, INSTAGRAM_URL } from "@/data/links";

export default function Home() {
  return (
    <>
      <Fx />
      <Hero />
      <Marquee />

      {/* ---------- About ---------- */}
      <section className="section" aria-labelledby="about">
        <div className="wrap">
          <p className="eyebrow" data-paste="">
            Who we are
          </p>
          <h2 id="about" className="torn mt-3" data-stamp="">
            About us
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_.9fr] items-start">
            <div className="grid gap-4 max-w-[58ch]">
              <p>
                Team Winnie is the University of Winnipeg’s delegation to JDC West — a
                team of students who spend a semester training together, fundraising
                together, and then spend one January weekend competing against business
                schools from across Western Canada.
              </p>
              <p>
                People don’t join for the resume line (though it doesn’t hurt). They
                join for the people: the practices, the road trip, the inside jokes
                that only make sense by February.
              </p>
              <div className="relative">
                <SmileyDoodle className="!relative" size={60} data-doodle="" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 content-start">
              {[
                { n: 14, label: "categories" },
                { n: 12, label: "execs" },
                { n: 6, label: "charity partners" },
              ].map((s) => (
                <div key={s.label} className="sticker text-center !px-2" data-sticker="">
                  <p className="display-name display-section">
                    <span data-count={s.n}>0</span>
                  </p>
                  <p className="hand text-lg mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Figure it out together ---------- */}
      <section className="section" aria-labelledby="together">
        <div className="wrap grid justify-items-center text-center">
          <h2 id="together" className="statement" data-paste="">
            We’re case-crackers, debaters, athletes{" "}
            <StarDoodle size={30} data-doodle="" /> fundraisers{" "}
            <HeartDoodle size={28} data-doodle="" /> &amp; the loudest thing to
            ever leave Winnipeg in January <SmileyDoodle size={30} data-doodle="" />
          </h2>

          <div className="relative mt-12 w-full flex justify-center">
            <CurlyArrowDoodle className="hidden md:block left-[8%] -top-10" size={130} data-draw="" />
            <div className="quiz-box" data-sticker="">
              <span className="quiz-label">before you scroll any further</span>
              <p className="sans-heading mt-4">
                not sure if JDC West is your thing?!
              </p>
              <a className="btn btn--gold mt-5 !py-2 !text-[0.8rem]" href="#apply">
                Read the FAQ
              </a>
            </div>
            <CurlyArrowDoodle className="hidden md:block right-[8%] -top-10" size={130} flip data-draw="" />
          </div>

          <p className="eyebrow mt-16" data-paste="">
            Let’s figure this JDC thing out together
          </p>
        </div>

        <div className="wrap mt-8">
          <div className="butter-panel" data-paste="">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="path-card" data-paste="">
                <span className="icon-blob">
                  <StarDoodle size={40} />
                </span>
                <p className="eyebrow">The competition</p>
                <h3 className="sans-heading !text-[1.35rem]">14 ways to win</h3>
                <p className="text-sm">
                  Four headline events and ten academic cases — find the one
                  with your name on it.
                </p>
                <Link className="btn btn--purple !py-2 !text-[0.8rem] mt-auto" href="/teams">
                  See the categories
                </Link>
              </div>

              <div className="path-card" data-paste="">
                <span className="icon-blob icon-blob--purple">
                  <SmileyDoodle size={42} />
                </span>
                <p className="eyebrow">The people</p>
                <h3 className="sans-heading !text-[1.35rem]">Meet the execs</h3>
                <p className="text-sm">
                  Twelve students building the delegation — captained by
                  Thiksha, fuelled by group-chat chaos.
                </p>
                <Link className="btn btn--ghost !py-2 !text-[0.8rem] mt-auto" href="/execs">
                  Say hi
                </Link>
              </div>

              <div className="path-card" data-paste="">
                <span className="icon-blob">
                  <HeartDoodle size={40} />
                </span>
                <p className="eyebrow">The good deeds</p>
                <h3 className="sans-heading !text-[1.35rem]">Charity partners</h3>
                <p className="text-sm">
                  Six Winnipeg organizations, one scored competition category,
                  endless warm fuzzies.
                </p>
                <Link className="btn btn--purple !py-2 !text-[0.8rem] mt-auto" href="/charity">
                  Meet the partners
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Categories ---------- */}
      <section className="section" aria-labelledby="categories">
        <div className="wrap">
          <p className="eyebrow" data-paste="">
            What we compete in
          </p>
          <h2 id="categories" className="torn mt-3" data-stamp="">
            14 ways to win
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="sticker" data-sticker="">
              <h3 className="sans-heading">The main 4</h3>
              <ul className="mt-3 grid gap-2 list-none p-0">
                {MAIN_FOUR.map((c) => (
                  <li key={c.name}>
                    <span className="font-extrabold">{c.name}</span>{" "}
                    <span className="hand text-lg" style={{ color: "var(--purple-deep)" }}>
                      — {c.blurb}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <StarDoodle className="-top-8 right-0" size={54} data-doodle="" />
              <h3 className="sans-heading" data-paste="">
                10 academic cases
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {ACADEMICS.map((c) => (
                  <span key={c} className="chip" data-paste="">
                    {c}
                  </span>
                ))}
              </div>
              <p className="hand text-lg mt-4" style={{ color: "var(--purple-deep)" }}>
                (final 26/27 lineup confirmed closer to competition)
              </p>
              <Link href="/teams" className="btn btn--purple mt-5">
                See all categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Apply + FAQ (purple slide) ---------- */}
      <section className="slide-purple tx-halftone tx-halftone--light section" aria-labelledby="apply">
        <div className="wrap">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] items-center">
            <div>
              <h2 id="apply" style={{ fontFamily: "var(--font-marker)" }} className="text-4xl md:text-5xl uppercase" data-paste="">
                Delegate applications
              </h2>
              <p className="mt-4 max-w-[52ch] opacity-95" data-paste="">
                One application. Eight months of training, fundraisers, and practices.
                One weekend you’ll still be talking about at graduation. Any UWinnipeg
                student can apply — no case experience needed.
              </p>
              <a className="btn btn--gold mt-6" href={APPLY_FORM_URL} target="_blank" rel="noopener" data-paste="">
                Apply to JDC West
              </a>
              <p className="hand text-xl mt-4 !text-[var(--yellow)]" data-paste="">
                applications close {APPLICATION_DEADLINE} — don’t sleep on it
              </p>
            </div>
            <div className="justify-self-center" data-sticker="">
              <Starburst size={160}>Due {APPLICATION_DEADLINE}!</Starburst>
            </div>
          </div>

          <div className="mt-16">
            <p className="eyebrow !text-[var(--yellow)]" data-paste="">
              Questions, answered
            </p>
            <div className="mt-6 max-w-[720px]">
              <FaqStack />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Charity ---------- */}
      <section className="section" aria-labelledby="charity">
        <div className="wrap">
          <p className="eyebrow" data-paste="">
            Giving back, competitively
          </p>
          <h2 id="charity" className="torn mt-3" data-stamp="">
            Charity partners
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1fr] items-start">
            <div className="relative">
              <HeartDoodle className="-top-6 right-8" size={52} data-doodle="" />
              <p className="max-w-[50ch]">
                Charity is a scored part of JDC West — and the part we’re proudest of.
                This year Team Winnie is partnering with six local organizations,
                starting with <strong>Manitoba Harvest</strong>.
              </p>
              <Link href="/charity" className="btn btn--purple mt-6">
                Meet our partners
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {CHARITIES.map((c, i) => (
                <div key={c.name} className={`sticker !p-3 text-center grid place-items-center min-h-[84px] rot-${(["a", "b", "c"] as const)[i % 3]}`} data-sticker="">
                  {c.announced ? (
                    <span className="font-extrabold text-sm leading-tight">{c.name}</span>
                  ) : (
                    <span className="hand text-lg" style={{ color: "var(--purple-deep)" }}>
                      announcing soon…
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Meet the Cap ---------- */}
      <section className="section" aria-labelledby="cap">
        <div className="wrap grid gap-10 md:grid-cols-[auto_1fr] items-center">
          <Polaroid caption="Thiksha — photo soon!" rotate="b" tape="corners" variant="sunset" className="w-[260px]" data-polaroid="">
            <span className="polaroid-initials">TS</span>
          </Polaroid>
          <div className="relative">
            <ArrowDoodle className="-top-8 left-4 -scale-x-100" data-doodle="" />
            <span className="pill" data-paste="">
              {CAPTAIN.role}
            </span>
            <h2 id="cap" className="display-name display-section mt-3" data-paste="">
              {CAPTAIN.names[0]}
            </h2>
            <p className="mt-4 max-w-[48ch]">
              Leading the 26/27 delegation — and the 11 execs building it with her.
              Come meet the whole crew.
            </p>
            <Link href="/execs" className="btn btn--purple mt-5">
              Meet the execs
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Gallery ---------- */}
      <section className="section" aria-labelledby="gallery">
        <div className="wrap">
          <p className="eyebrow" data-paste="">
            Proof it’s as fun as we say
          </p>
          <h2 id="gallery" className="torn mt-3" data-stamp="">
            Photo gallery
          </h2>
          <p className="hand text-2xl mt-4" style={{ color: "var(--purple-deep)" }} data-paste="">
            the scrapbook fills up as the year happens — check back after our first event!
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {[
              { c: "first practice", v: "purple" },
              { c: "fundraiser night", v: "sunset" },
              { c: "case grind o’clock", v: "paper" },
              { c: "team socials", v: "sunset" },
              { c: "the road to January", v: "purple" },
              { c: "your face here?", v: "paper" },
            ].map((p, i) => (
              <Polaroid
                key={p.c}
                caption={p.c}
                rotate={(["a", "b", "c"] as const)[i % 3]}
                tape={i % 2 ? "corners" : "top"}
                variant={p.v as "purple" | "sunset" | "paper"}
                data-polaroid=""
              >
                <span className="polaroid-initials">📸</span>
              </Polaroid>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Sponsor strip (contractual — see README) ---------- */}
      <section className="section !py-14" aria-labelledby="sponsors">
        <div className="wrap">
          <p className="eyebrow text-center" data-paste="">
            Made possible by
          </p>
          <h2 id="sponsors" className="sr-only">
            Sponsors
          </h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {["a", "b", "c", "a"].map((r, i) => (
              <div key={i} className={`sticker relative grid place-items-center min-h-[96px] rot-${r}`} data-sticker="">
                <span className="tape tape--top" />
                <span className="hand text-xl" style={{ color: "var(--purple-deep)" }}>
                  your logo here
                </span>
              </div>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link href="/sponsors" className="btn btn--ghost">
              Become a sponsor
            </Link>
          </p>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="section" aria-labelledby="contact">
        <div className="wrap">
          <p className="eyebrow" data-paste="">
            Say hi
          </p>
          <h2 id="contact" className="torn mt-3" data-stamp="">
            Contact us
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 max-w-[820px]">
            <div className="sticker" data-sticker="">
              <h3 className="sans-heading">Students</h3>
              <p className="mt-2">
                Thinking about applying? Questions about the team? DM us — we
                actually answer.
              </p>
              <a className="btn btn--purple mt-4" href={INSTAGRAM_URL}>
                DM us on Instagram
              </a>
            </div>
            <div className="sticker relative" data-sticker="">
              <SunDoodle className="-top-9 -right-6" size={56} data-doodle="" />
              <h3 className="sans-heading">Sponsors, coaches & partners</h3>
              <p className="mt-2">
                Want to sponsor the delegation, coach a team, or partner on charity
                work? Corporate relations reads every email.
              </p>
              <a className="btn btn--gold mt-4" href={`mailto:${CORPORATE_EMAIL}`}>
                Email corporate relations
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
