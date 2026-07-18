# JDC Website

Marketing and information site for **Team Winnie** — the University of Winnipeg JDC West delegation, 26/27. Built with Next.js.

JDC West is the Western Canadian business school competition — English-only, no bilingual requirement. (Not to be confused with the original Quebec Jeux du Commerce, which would need French.)

## Audience

Two visitors, in priority order:

1. **Students** — deciding whether to apply as a delegate. This is the main funnel; the application CTA should never be more than a scroll away.
2. **Sponsors and charities** — evaluating whether to partner with the delegation. They need a clear, short path to the right inbox.

## The Pitch

**Students apply for the experience — the trip and the people.** Not the resume line, not the competition. This is the single most load-bearing fact in this document, and it should decide arguments about copy and layout.

What follows from it:

- **Photos do the persuading, not copy.** The gallery is not decoration; it's the argument. A visitor who sees the delegation together understands the pitch faster than any paragraph.
- **About Us should read like people, not an org chart.** Warmth over achievement.
- **The exec roster is recruiting material.** Faces of people a prospective delegate would want to spend a trip with — which is a reason to get headshots for the table, not just the Captain.

This sits in tension with the charity page leading on credibility. That's fine — different reader, different job. But the homepage belongs to the student.

## Design Direction

**The visual system is [DESIGN.md](DESIGN.md) — the Team Winnie scrapbook-collage brand.** Cream paper, purple torn labels, gold outlined names, polaroids, tape, doodles, and film scratches pasted in as you scroll. That document is authoritative for palette, type, components, and motion.

The whiteboard's original ask was a theme that's "light" and "clear for the user." The system is light — cream paper, warm and open — but it's deliberately maximalist rather than minimal, and it wins: it's specific, complete, and it's the brand.

"Clear for the user" survives as a **tiebreaker**, not a style. Whenever collage energy and legibility disagree, legibility wins: doodles never overlap text, body copy stays Poppins, and the apply path stays findable. The scrapbook is the personality; it doesn't get to hide the application.

**Mobile-first, not mobile-friendly.** Traffic arrives from the **Instagram link in bio**, so the overwhelming majority of visitors are on a phone, arriving in one tap from a post. Design the phone layout first and let desktop be the adaptation — not the other way around. Concretely:

- The hero's apply CTA must be reachable without a pinch or a horizontal scroll, above the fold on a phone.
- The exec table is 12 rows of name + role. Tables are the classic thing that breaks on a 390px screen — it likely wants to be cards on mobile.
- Gallery images are the heaviest thing on the site and they're arriving over cell data. `next/image` with proper sizing is not optional.
- Instagram's in-app browser is the real target, and it is not Safari. Test there.

## Navigation

**Persistent nav bar on every page.** Without it, subpages are dead ends — someone landing on `/charity` from a search result or a shared link has no path back into the site.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Motion:** GSAP + ScrollTrigger — see [DESIGN.md §6](DESIGN.md#6-motion-system-gsap). Motion is central to the brand here, not decoration. Lenis provides smooth scrolling on desktop only (phones keep native scroll).
- **Fonts:** Titan One, Permanent Marker, Caveat, Poppins — via `next/font/google`
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics — privacy-friendly, no cookie banner, no consent burden. The one number that matters is apply-CTA clicks: it tells you whether the hero is doing its job.

## Maintenance and Handoff

**You build it, then hand it off at turnover and leave.** Whoever inherits this will not have been in any of the conversations that produced it. That single fact should shape more decisions than any technical preference in this document:

- **Every clever thing is a liability.** The next maintainer may be less experienced, will be busier, and cannot ask you. Boring, obvious code beats elegant code here.
- **This README is the handoff.** It's why the reasoning is written down and not just the conclusions — the "why" is what doesn't survive a turnover.
- **The annual edit should be one obvious file.** When the exec roster changes, the next person should find it in under a minute without reading the codebase.

Infrastructure is on a **shared org account** that passes between execs — domain and Vercel both. This avoids the classic student-org failure where the site dies because it was on a graduate's personal account. Keep it that way; do not let anything critical land on a personal login.

## Content Model

All roster, bio, and partner content is **hardcoded as data files in the repo**. There is no CMS. Content changes roughly once a year at exec turnover, and a developer makes the edit.

This is a deliberate trade: it costs an exec a pull request instead of a login, but it means no CMS account to inherit, pay for, or lose access to between exec generations. It also assumes the next exec team has *someone* who can run a build — if that stops being true, this decision is the first one to revisit.

Every form is an **external Google Form** — delegate applications and the charity sign-up both link out. The site has no backend and no form handling of its own.

## Routes

Routes sit at the domain root.

| Route | Purpose |
| --- | --- |
| `/` | Landing page — the full narrative flow (see below) |
| `/teams` | Competition categories |
| `/execs` | Executive team — Captain feature + roster |
| `/charity` | Charity partners and involvement |
| `/sponsors` | Sponsor logos and tiers — contractual, see below |
| External | Delegate application → Google Form URL |

> **`/meet-teams` was renamed to `/execs`.** The board called it `meet-teams`, but the page is about the executive team, not the competition teams — and `/teams` vs `/meet-teams` sitting next to each other in a mobile nav is a coin flip for the visitor. The page says what it is now. Internally it may still get called "meet the teams"; that's fine.

> **Collab is cut.** Neither the page nor the homepage section is shipping. Coach, mentor, and sponsor inquiries route through Contact Us instead.

## Landing Page (`/`)

The homepage is a single continuous flow, read top to bottom as one story:

1. **Hero** — **its one job is driving delegate applications.** Prominent CTA to the Google Form, deadline visible. Everything else in the hero is secondary to that. Note the tension: a visitor who doesn't know what Jeux du Commerce is gets asked to apply before being told what they're applying to, so the About Us section below has to carry that explanation hard — or the hero needs one line of context above the CTA.
2. **Banner** — a second, distinct strip promoting Teams. ⚠️ **Open concern:** this stacks a Teams CTA directly under the application CTA, giving a phone visitor two competing asks in the first screen and a half. Given that the hero's one job is applications, this banner is the most likely thing to dilute it. Worth deciding whether Teams needs a banner at all, or whether the nav bar already covers it.
3. **About Us**
4. **Competition Categories** — links to `/teams`
5. **Delegate Applications** — external Google Form
6. **Charity Partners** — links to `/charity`
7. **Meet the Cap** — links to `/execs`
8. **Photo Gallery** — carries the pitch (see above), so it earns real space rather than a strip at the bottom. Images are committed to the repo and optimized through `next/image`.
9. **Sponsor strip** — logos above the footer. Not on the original board; added because the placement is contractual. See Sponsor Logos below.
10. **Contact Us** — **socials + email.** Students DM on Instagram; sponsors and coaches email. Since collab was cut, this is the *only* intake for partner inquiries, so the sponsor path has to be obvious here and not buried under the social links.
11. **Footer**

## Page Details

### `/teams`
14 competition categories in two groups:

- **Main 4** — the non-academic competitions
- **10 academics** — the academic case categories

**Categories only — no delegate names.** The page explains what each competition *is*. This is a deliberate choice: it means the page doesn't go stale when delegates change, and it can ship before selection is finished. If names get added later, the category structure is already the right container for them.

The two VP Academics roles (Internal and External) suggest the academic side has structure worth reflecting here — worth asking whether that split means anything to a visitor.

### `/execs`
Executive team page. The **Captain is the main feature** — picture and bio at the top, given real space. The remaining execs follow in a table below.

| Name | Role |
| --- | --- |
| Thiksha Sathish Kumar | **Captain** — featured, picture + bio |
| Joshua Adeleke | Godparent |
| Shreya Sharma | VP Internal |
| Dev Jani | VP Corporate Relations |
| Rishi J Koriya | VP Finance |
| Arun Muthu | Co-VP Marketing |
| Raezel Florence Balino | Co-VP Marketing |
| Ronal Daison | VP Events & Logistics |
| Vikramsinh Parmar | VP Charity |
| Richel Saldanha | VP Academics, Internal |
| Chetan Veer Singh | VP Academics, External |
| Harleen Deol | VP Athletics and Challenge |

12 people total: 1 Captain (featured) + 11 in the table. Marketing is a co-VP pair, so the table needs to handle two people sharing a role without looking like a mistake.

This roster is the site's primary data file — see Content Model above. When the exec team turns over, this is the edit.

### Sponsor Logos — ⚠️ not on the original board

**Sponsor logo placement is a contractual obligation.** It appears nowhere in the whiteboard's homepage flow, and it was only surfaced by asking. This is the biggest gap between the board and what the site actually has to do.

Why it matters more than it looks:

- **It's a promise with a deadline, not a feature.** Everything else on this list can slip. This can't — someone signed for it.
- **It has no home in the current flow.** The 11-section homepage has no sponsor section, and the collab page that might have hosted it was cut. It needs a decided location: most likely above the footer, and plausibly on `/charity` too since that's the credibility page partners read.
- **It's an asset dependency.** Logos come in inconsistent formats, and light-theme placement means transparent PNG or SVG. Someone has to collect them.

**Placement — two surfaces:**

1. **Homepage strip above the footer.** This is what actually satisfies the contracts. Every visitor scrolls past it, so it's the one that delivers impressions.
2. **A dedicated `/sponsors` page.** Room for tiers and prominent treatment of top sponsors. Be honest about it: nobody visits a sponsors page unprompted, so it's for showing a sponsor their placement and for the pitch deck — not for traffic. It's the page you link when corporate relations asks "where's our logo?"

The homepage strip is the obligation; `/sponsors` is the showcase. If time is short, the strip ships first.

Needs from VP Corporate Relations (Dev Jani): the sponsor list, the tier structure if there is one, what each contract actually promises (placement, size, prominence), and the logo files.

### `/charity`
Serves two readers, **charities first**: lead with the partnership pitch and credibility, let the impact story support it. A charity evaluating the delegation should find what you run and who you've worked with before it finds anything else.

- Charity partner overview
- **All 6 charity partners are signed** — this is a fact, not a target. Only Manitoba Harvest is named so far; the other 5 names are still needed.
- Event information
- Charity sign-up — external Google Form
- VP Charity: Vikramsinh Parmar

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Timeline

The competition is in **January**, so the site should be live well before then. No immediate crunch.

The real deadline is not the competition — it's the **delegate application deadline**, which lands months earlier. Since the hero exists to drive applications, the apply path (hero → CTA → Google Form) is what has to be right first. The photo gallery and exec bios can follow.

## Open Questions

- **Sponsor list, tiers, contract terms, and logo files** — contractual, and the scrapbook system has no component for third-party logos. See the Sponsor Logos section and [DESIGN.md §9](DESIGN.md#9-applying-this-to-the-site).
- **Profile card content for 12 execs** — the design's repeating unit needs a photo, a degree, and a quote from each person. Twelve quotes is a real collection job.
- **The 14 category names** — the Main 4 and the 10 academic categories are still unnamed here. Blocks building `/teams`.
- ~~Application deadline date~~ — **August 1st**, now shown in the hero and apply section
- Competition year and host school
- Final Google Form URLs — delegate application and charity sign-up
- **Names of the other 5 charity partners** — all 6 are signed, only Manitoba Harvest is named here
- **Gallery photos** — the pitch depends on these, so they're a real dependency, not a nice-to-have. Committed to the repo, so someone has to gather and hand them over.
- What "Godparent" means to an outside visitor
- Contact email destination — corporate relations (Dev Jani's portfolio) was mentioned as the inbox for sponsor/coach inquiries
- Instagram handle and any other socials (the site's main traffic source, so the link back matters)
- Whether the #2 Teams banner survives — see the concern in the homepage flow above
- Headshots and bio copy for the exec roster — only the Captain strictly needs a bio, but the table likely wants photos
- Whether execs have public-facing contact info (LinkedIn, email) in the table, or whether all contact funnels through one inbox
