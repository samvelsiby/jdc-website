"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HeartDoodle, StarDoodle, SunDoodle } from "@/components/Doodles";
import { APPLY_FORM_URL } from "@/data/links";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/teams", label: "Teams" },
  { href: "/execs", label: "Execs" },
  { href: "/charity", label: "Charity" },
  { href: "/sponsors", label: "Sponsors" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Lock body scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The nav is permanent: fixed on every page, never hides on scroll.
  return (
    <>
      <div className="nav-wrap" ref={wrapRef}>
        <nav className="nav-capsule" aria-label="Main">
          <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
            TEAM WINNIE
          </Link>

          <div className="hidden md:flex items-center">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${pathname === l.href ? "nav-link--active" : ""}`}
                aria-current={pathname === l.href ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a className="btn btn--gold !py-2 !px-4 !text-[0.8rem] !shadow-[3px_3px_0_var(--ink)]" href={APPLY_FORM_URL} target="_blank" rel="noopener">
              Apply
            </a>
            <button
              className="md:hidden grid place-items-center w-11 h-11 rounded-full border-[3px] border-[var(--ink)] bg-[var(--yellow)] shadow-[3px_3px_0_var(--ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_var(--ink)] transition-[translate,box-shadow,rotate] duration-150"
              style={{ rotate: open ? "90deg" : "0deg" }}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                {open ? (
                  <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none">
                    <path d="M4.5 4c4.5 4.8 9 9.4 13 14" />
                    <path d="M18 4.5C13.5 9 9 13.6 4.5 18" />
                  </g>
                ) : (
                  <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none">
                    <path d="M3 6.5c5.5-1 11-1 16-.5" />
                    <path d="M3.5 11.5c5-.6 10.5-.4 15.5 0" />
                    <path d="M3 16.5c5.5.8 11 .8 16 .3" />
                  </g>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="mobile-menu md:hidden" role="dialog" aria-label="Menu">
          <StarDoodle className="top-[11%] left-[10%]" size={54} />
          <SunDoodle className="top-[18%] right-[8%]" size={64} />
          <HeartDoodle className="bottom-[16%] left-[12%]" size={48} />

          <p className="hand text-3xl mb-2" style={{ color: "var(--purple-ink)", animation: "menu-link-in .4s backwards" }}>
            where to?
          </p>

          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`menu-link ${pathname === l.href ? "menu-link--active" : ""}`}
              aria-current={pathname === l.href ? "page" : undefined}
              onClick={() => setOpen(false)}
              style={{ rotate: i % 2 ? "0.8deg" : "-0.8deg", animationDelay: `${0.08 + i * 0.06}s` }}
            >
              <span>{l.label}</span>
              <svg width="28" height="15" viewBox="0 0 32 16" aria-hidden="true">
                <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <path d="M2 9c9-2 18-2 26-1" />
                  <path d="M21 3c3 2 5 4 7 5-2 1-5 3-7 6" />
                </g>
              </svg>
            </Link>
          ))}

          <a
            className="btn btn--gold mt-5"
            style={{ animation: "menu-link-in .45s backwards", animationDelay: "0.45s" }}
            href={APPLY_FORM_URL}
            target="_blank"
            rel="noopener"
          >
            Apply to JDC West
          </a>
          <p className="menu-note mt-1" style={{ animationDelay: "0.55s" }}>
            see you at practice ♥
          </p>
        </div>
      )}
    </>
  );
}
