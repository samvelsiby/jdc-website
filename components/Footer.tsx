import Link from "next/link";
import { CORPORATE_EMAIL, INSTAGRAM_URL } from "@/data/links";

export default function Footer() {
  return (
    <footer className="slide-purple mt-20">
      <div className="wrap py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p style={{ fontFamily: "var(--font-marker)", fontSize: "1.6rem" }}>TEAM WINNIE</p>
          <p className="mt-2 opacity-90 text-sm max-w-[28ch]">
            The University of Winnipeg delegation to JDC West, 26/27.
          </p>
        </div>

        <nav aria-label="Footer" className="grid gap-2 content-start">
          <p className="eyebrow !text-[var(--yellow)]">Pages</p>
          <Link href="/teams" className="hover:underline">Teams</Link>
          <Link href="/execs" className="hover:underline">Meet the execs</Link>
          <Link href="/charity" className="hover:underline">Charity</Link>
          <Link href="/sponsors" className="hover:underline">Sponsors</Link>
        </nav>

        <div className="grid gap-2 content-start">
          <p className="eyebrow !text-[var(--yellow)]">Say hi</p>
          <a href={INSTAGRAM_URL} className="hover:underline">Instagram (handle coming soon)</a>
          <a href={`mailto:${CORPORATE_EMAIL}`} className="hover:underline">{CORPORATE_EMAIL}</a>
        </div>
      </div>

      <div className="wrap pb-8 flex items-end justify-between gap-4 flex-wrap">
        <p className="hand text-xl opacity-90">made with ♥ (and tape) in Winnipeg</p>
        <p className="text-xs opacity-70">© 26/27 Team Winnie · University of Winnipeg</p>
      </div>
    </footer>
  );
}
