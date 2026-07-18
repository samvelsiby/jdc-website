# Team Winnie — Website Design System
### UWinnipeg JDC West · 26/27 · Scrapbook-Collage Brand

The whole system in one sentence: **a cream-paper scrapbook where purple torn labels, yellow outlined names, polaroids, tape, doodles, and film scratches get "pasted in" as you scroll.**

This is the authoritative visual system for the site. It supersedes any earlier direction. See [README.md](README.md) for site structure and audience; see [§9](#9-applying-this-to-the-site) below for where the two documents meet.

---

## 1. Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `--paper` | `#F0E9D8` | Base page background (cream paper) |
| `--paper-warm` | `#EFE3C9` | Alternate section background |
| `--purple` | `#8B6FC0` | Brand purple — torn labels, pills, primary buttons |
| `--purple-deep` | `#6C589E` | Deep grape — FAQ/info slide backgrounds |
| `--purple-ink` | `#4A3B78` | Darkest purple — gradient ends, halftone dots, shadows |
| `--yellow` | `#F7C443` | Gold — display names, starbursts, sun doodle |
| `--yellow-deep` | `#F0B429` | Doodle strokes, hover states on gold |
| `--ink` | `#191919` | Near-black — outlines, body text, strokes |
| `--white` | `#FFFEF9` | Warm white — stickers, polaroids, FAQ cards |

**Distribution rule:** ~60% paper · ~25% purples · ~10% white cards · ~5% gold. Gold is an accent, never a background for long text. Never use pure `#000` or `#FFF` — everything is slightly warm.

**Gradients**

```css
--grad-purple: linear-gradient(160deg, #9A7ED1 0%, #8B6FC0 35%, #6C589E 75%, #4A3B78 100%);  /* hero / posters */
--grad-sunset: linear-gradient(135deg, #F7C443 0%, #EFA93F 45%, #8B6FC0 100%);               /* special events */
--grad-paper:  linear-gradient(180deg, #F0E9D8 0%, #EFE3C9 100%);                            /* page base */
```

---

## 2. Typography

All free on Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Titan+One&family=Permanent+Marker&family=Caveat:wght@500;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

> **Next.js note:** load these through `next/font/google` rather than a `<link>`. It self-hosts and subsets automatically, which removes a third-party round trip — this matters because the audience arrives on cell data through Instagram's in-app browser. See [§9](#9-applying-this-to-the-site).

| Role | Font | Treatment | Where |
|---|---|---|---|
| **Display** | Titan One | Yellow fill + 3px black stroke, uppercase, `clamp(2.6rem, 8vw, 5.5rem)` | Names ("RISHI KORIYA"), hero headlines |
| **Marker** | Permanent Marker | White, uppercase, on torn purple blocks | Section labels ("EXTERNAL TEAM") |
| **Handwritten** | Caveat 500/700 | Ink color, natural case | Quotes, "Meet the…" intros, polaroid captions, degree subtitles "(BBA Economics & Finance)" |
| **Sans heading** | Poppins 800 | Uppercase, tight leading (1.15) | FAQ headings, event details |
| **Body** | Poppins 400–500 | 1.45–1.6 line height, `1rem`–`1.05rem` | Paragraphs, UI |

The outlined-name trick:

```css
.display-name {
  font-family: 'Titan One';
  color: var(--yellow);
  -webkit-text-stroke: 3px var(--ink);
  paint-order: stroke fill;                 /* stroke goes behind fill */
  text-shadow: 4px 4px 0 rgba(25,25,25,.15);
}
```

**Type scale**

| Level | Size | Font |
|---|---|---|
| Hero display | `clamp(2.6rem, 8vw, 5.5rem)` | Titan One |
| Section name | `clamp(2rem, 5vw, 3.4rem)` | Titan One |
| Torn label | `clamp(1.6rem, 4.5vw, 3.4rem)` | Permanent Marker |
| Hand headline | `clamp(2.4rem, 7vw, 4.6rem)` | Caveat 700 |
| FAQ heading | `clamp(1.15rem, 2.6vw, 1.6rem)` | Poppins 800 |
| Body | `1rem`–`1.05rem` | Poppins 400/500 |
| Caption/eyebrow | `.78rem`, letter-spacing `.22em`, uppercase | Poppins 800 |

---

## 3. Textures & Effects (all CSS/SVG — no image assets)

### Paper grain — every page, always on
SVG `feTurbulence` noise overlaid at ~35% opacity, `mix-blend-mode: multiply`, fixed position so it doesn't scroll.

```css
.tx-paper::before {
  content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 0;
  opacity: .35; mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E");
}
```

### Torn paper edges — the signature
One reusable `clip-path` polygon, applied to any solid block (labels, section dividers, image masks):

```css
--torn-clip: polygon(0% 8%, 3% 0%, 9% 6%, 15% 1%, 22% 7%, 30% 0%, 37% 5%,
  45% 1%, 53% 8%, 61% 2%, 69% 7%, 76% 0%, 84% 6%, 91% 1%, 97% 7%, 100% 3%,
  100% 92%, 96% 100%, 89% 94%, 82% 99%, 74% 93%, 66% 100%, 58% 94%,
  50% 99%, 42% 93%, 34% 100%, 26% 95%, 18% 100%, 11% 94%, 5% 99%, 0% 95%);
```

### Film scratches — purple slides only
Thin white SVG hairlines (mostly vertical, 15–55% opacity) tiled over `--purple-deep` sections at ~35% overall opacity. Layer order on purple slides: **gradient → halftone (optional) → scratches → content**.

### Halftone dots — comic-print poster feel
```css
.tx-halftone       { background-image: radial-gradient(circle, rgba(74,59,120,.55) 1.6px, transparent 1.7px); background-size: 11px 11px; }
.tx-halftone--light{ background-image: radial-gradient(circle, rgba(255,255,255,.5)  1.4px, transparent 1.5px); background-size: 10px 10px; }
```
Fade halftone out with a `mask-image: radial-gradient(...)` so it clusters near edges/corners like the Live Case poster.

### Washi tape
Semi-transparent beige strips (`rgba(233,222,190,.85)`), ~110×32px, rotated ±40°, soft shadow, pinned to polaroid corners.

### Rotation system
Nothing sits perfectly straight. Use three tokens and alternate them: `--rotate-a: -2.5deg`, `--rotate-b: 1.75deg`, `--rotate-c: -1deg`. Polaroids straighten to 0° on hover.

---

## 4. Doodle Set (inline SVG)

Sun (gold), one-line smiley (purple), heart (purple), star scribble (gold), directional arrow cluster (ink, like `→ 26/27 ←`), underline squiggle (purple).

**Rules:** 6–7px stroke · round caps · slightly wobbly paths · exactly one color per doodle (purple, gold, or ink) · scatter at 60–90px · rotated ±15° · absolutely positioned · never overlapping text · 2–4 per viewport max.

---

## 5. Components

### Torn label (section header)
Purple block, `--torn-clip`, Permanent Marker white text, rotated `--rotate-c`. This is how every section announces itself.

### Role pill
Purple rounded-full pill, Caveat 700 white text, rotated -1.5° — the "VP Finance:" treatment. Always sits directly above a display name.

### Profile card
Pill → display name → Caveat subtitle "(degree)" → polaroid photo (with tape) → sticker quote. This is the team page's repeating unit.

### Sticker quote
Warm white card, 3.5px solid ink border, `border-radius: 16px`, hard offset shadow `4px 5px 0 rgba(25,25,25,.9)`, plus a second slightly-rotated 2px border via `::after` for the hand-drawn double-line look. Caveat 700 text.

### Polaroid
White frame, `padding: 14px 14px 58px` (fat bottom), `box-shadow: 0 10px 24px rgba(25,25,25,.22)`, rotated, Caveat caption in the bottom margin. Hover: straighten + scale 1.02.

### FAQ / info slide
`--purple-deep` → `--purple-ink` gradient background + scratches, containing stacked warm-white cards (`border-radius: 22px`, `padding: 1.7rem 1.9rem`) with Poppins 800 uppercase headings.

### Starburst badge
Gold, jagged 28-point `clip-path` polygon, Permanent Marker ink text, rotated -8° — "Lunch provided!" energy. Use for one-off callouts only.

### Buttons
Pill shape, 3px ink border, Poppins 800 uppercase, hard `4px 4px 0` ink shadow.
- **Primary:** purple bg / white text
- **Gold:** yellow bg / ink text
- **Ghost:** transparent, fills ink on hover
- Hover: translate `(2px, 2px)` + shadow shrinks to `2px 2px` (pressed-down feel)

---

## 6. Motion System (GSAP)

**Stack:** `gsap` + `ScrollTrigger`. Optional but very on-brand: `ScrollSmoother` for a subtle 1.2 smoothing.

> **Licensing note:** GSAP's full toolset — including ScrollSmoother, SplitText, and DrawSVG — became free for all uses under Webflow's stewardship (GSAP 3.13, 2025). The former Club GreenSock plugins referenced below no longer need a paid membership. Verify current terms before shipping, but plan on having them.

**Motion personality:** things get *pasted, stamped, and slapped* onto the page — not faded politely. Ease vocabulary: `back.out(1.7)` for pops, `power3.out` for slides, `elastic.out(1, 0.5)` sparingly for doodles.

**Global defaults**

```js
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "power3.out", duration: 0.8 });
```

### 6.1 Hero load sequence (one orchestrated timeline, ~1.6s total)

Order matters — it should feel like someone assembling a scrapbook page:

```js
const tl = gsap.timeline();
tl.from(".hand-headline",  { y: 40, opacity: 0, duration: .6 })                                      // "Meet the" writes in
  .from(".torn-label",     { scale: 0, rotation: -12, ease: "back.out(2)" }, "-=.2")                  // label SLAPS in
  .from(".display-name",   { y: 80, opacity: 0, skewY: 4, duration: .7 }, "-=.3")                     // name rises
  .from(".hero .polaroid", { y: 120, opacity: 0, rotation: 12, stagger: .12, ease: "back.out(1.4)" }, "-=.4")
  .from(".hero .doodle",   { scale: 0, opacity: 0, stagger: .08, ease: "elastic.out(1, .5)" }, "-=.3");
```

> **Conflict — read before implementing.** The hero's one job is driving delegate applications (README, Landing Page §1). A 1.6s assembly sequence that animates the apply CTA in at the end delays the only thing the hero exists to do, for a visitor who arrived via one tap from Instagram and may leave in three seconds. **The apply CTA should be present and clickable at frame one** — let the scrapbook assemble around it, not on top of it. Everything else in this timeline can stay.

### 6.2 Scroll reveals (the core pattern)

Every section uses the **paste-in reveal** — elements enter with slight rotation that settles to their resting tilt:

```js
gsap.utils.toArray("[data-paste]").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: "top 82%" },
    y: 60,
    opacity: 0,
    rotation: () => gsap.utils.random(-6, 6),
    ease: "back.out(1.4)",
    duration: .7,
  });
});
```

Per-component variants:

| Element | Reveal |
|---|---|
| Torn label | `scale: 0 → 1`, `rotation: -12 → resting`, `back.out(2)` — a stamp |
| Display name | `y: 80`, `skewY: 4 → 0`, letters can stagger via SplitText or per-`<span>` at `.03s` |
| Polaroid | `y: 120`, over-rotated by +12° settling to resting tilt, `back.out(1.4)` |
| Sticker quote | `scale: .6 → 1` + shadow grows from `0 0 0` to full offset — feels pressed on |
| Tape | scales in from center `scaleX: 0 → 1` *after* its polaroid lands (`.15s` delay) |
| FAQ cards | stagger `.12s`, `y: 50`, on a slide that pins (see 6.4) |
| Doodles | `drawSVG` if available, otherwise `scale: 0` + `elastic.out(1, .5)`, triggered late (`top 70%`) |
| Starburst | `rotation: -180 → -8`, `scale: 0 → 1`, `back.out(1.7)` |

### 6.3 Scroll-scrubbed effects (tied to scrollbar, `scrub: true`)

- **Parallax collage:** in hero/collage sections, layers drift at different speeds — background flowers/beach clippings `yPercent: -15`, midground polaroids `yPercent: -8`, doodles `yPercent: -25` + slow `rotation: 10`. `scrub: 1`.
- **Torn divider wipe:** section transitions use a full-width torn-edge purple strip that slides across as you scroll between sections (`xPercent: -100 → 0`, scrubbed).
- **Halftone drift:** animate `background-position` of `.tx-halftone` slowly on scroll for a subtle print-press shimmer.
- **Marquee:** a Permanent Marker ticker ("#WINNIYOUSOFINE · JDC WEST 26/27 ·") whose speed is scroll-velocity-reactive (nudge `timeScale` from `ScrollTrigger`'s `getVelocity()`).

### 6.4 Pinned sequences (the "cool things")

- **Team carousel:** pin the team section for `+=300%`; each profile card assembles (pill → name → polaroid → quote) then exits with a slight crumple (`scale: .95`, `rotation: 3`, fade) as the next builds. Scrubbed, so the user controls it.
- **FAQ slide:** pin the purple slide; FAQ cards stack in one at a time as you scroll, previous cards squishing up slightly (like a growing pile of paper).
- **Number counters:** for stats ("10 slots", "3 members", "90 minutes"), pin briefly and count up with `snap: { innerText: 1 }` + a gold highlight sweep behind the number.

### 6.5 Micro-interactions (non-scroll)

- Polaroid hover: straighten to 0° + `scale: 1.02` (already in CSS, `0.25s`).
- Button hover: pressed-down translate (CSS).
- Sticker hover: tiny `rotation: ±1.5°` wiggle, `0.3s`, once.
- Cursor (desktop only, optional): small purple scribble circle that scales up over links — skip if it fights the content.

### 6.6 Rules & performance

- Animate only `transform` and `opacity`. Never animate `clip-path` polygons or filters on scroll.
- `will-change: transform` on pinned/parallax layers only; remove after.
- Reveals play **once** (`once: true`) — scrapbooks don't un-paste. Scrubbed effects are the exception.
- Max one pinned section per viewport of scroll distance; the page should still read fine if you scroll fast.
- Respect `prefers-reduced-motion`: wrap everything in `gsap.matchMedia()`, and in the reduced context replace all of the above with simple `opacity` fades (`0.3s`) and disable pinning/parallax entirely.
- Mobile: kill parallax and pinned carousels below 768px (`gsap.matchMedia`), keep paste-in reveals with smaller distances (`y: 30`).

---

## 7. Layout & Spacing

- Max content width: **1060px**, side padding `1.5rem`.
- Section rhythm: `5.5rem` vertical gap between sections (mobile: `3.5rem`).
- Every section opens with: eyebrow (Poppins 800 caption, purple) → torn label → content.
- Collage sections break the grid deliberately — overlapping polaroids, doodles bleeding off-edge, elements crossing section boundaries by 20–40px.
- Border radii: cards `14–22px`, pills `999px`, nothing sharp except torn edges.
- Ink borders are always **3–3.5px solid** — thin borders read as a different (cleaner) brand.

## 8. Do / Don't

**Do:** rotate everything slightly · layer paper grain on every page · use hard offset shadows (ink-colored, no blur) on stickers/buttons · let gold stay rare · keep doodles wobbly.

**Don't:** use soft/blurry drop shadows on flat elements (polaroids are the only soft-shadow exception) · use pure black/white · set body copy in display fonts · exceed 4 doodles per viewport · animate on scroll-up (reveals are one-way) · use default eases (`power1.inOut` everywhere = generic).

---

## 9. Applying this to the site

Where this system meets the constraints in [README.md](README.md). Nothing here changes the system — it's the seam between the brand and the build.

### The apply CTA should be gold

The distribution rule says gold is ~5% and never a background for long text. That scarcity is exactly what makes it useful: **make the delegate application the one gold button on the page.** Purple is the workhorse — torn labels, pills, primary buttons, FAQ slides — so a purple apply button is camouflaged among its own brand. A gold button appears nowhere else, which makes it the single loudest thing on a cream page.

This costs nothing and it directly serves the hero's only job.

### "Light and clear" vs. the scrapbook

The original whiteboard asked for a theme that is "light" and "clear for the user." This system is light — cream paper, warm and open — but it is deliberately maximalist, not minimal. Those aren't the same thing, and the system wins: it's specific, complete, and it's the brand.

But hold "clear for the user" as a live constraint anyway. It's the tiebreaker whenever collage energy and legibility disagree: doodles never overlap text (already §4), body copy stays Poppins (already §8), and the apply path stays findable. The scrapbook is the personality; it isn't allowed to hide the application.

### Mobile is the real target

Traffic arrives from the Instagram link in bio, so most visitors are on a phone in Instagram's in-app browser on cell data. The system already handles the big risks — §6.6 kills parallax and pinning below 768px and routes everything through `gsap.matchMedia()`. Two things to watch beyond that:

- **The paper grain is the cheapest thing to get wrong.** A `position: fixed`, full-viewport `mix-blend-mode: multiply` layer composites on every scroll frame. On a low-end Android in a webview it's a plausible jank source. If the scroll feels heavy, test by disabling `.tx-paper` first — before blaming GSAP.
- **Four families is a real payload.** Titan One, Permanent Marker, Caveat (2 weights), Poppins (5 weights) — load via `next/font/google` and cut Poppins to the weights actually used. Every weight is a separate download on a cell connection.

### The profile card is the exec roster

§5's profile card (pill → name → degree → polaroid → quote) is the repeating unit for the 12 execs on `/execs`. Notes:

- **Thiksha Sathish Kumar (Captain) is the feature**, not card one. She gets scale the others don't.
- **Co-VP Marketing is two people, one role.** Arun Muthu and Raezel Florence Balino share the pill. Render as one entry with two names so it reads as intentional.
- **The pinned team carousel (§6.4) is desktop-only** per §6.6, so mobile gets 12 stacked cards. That's a long scroll — worth checking that it still reads.
- Each card needs a photo, a degree, and a quote from 12 people. That's a **content dependency**, not a design one.

### Sponsor logos are the open problem

Sponsor placement is contractual (README) and this system has no component for it. Third-party logos in fixed brand colours are the natural enemy of a cream scrapbook — they'll fight the palette and they can't be recoloured.

The likely answer is to lean in rather than hide it: logos on warm-white cards, taped down like clippings, on `--paper`. That's a decision to make deliberately with VP Corporate Relations (Dev Jani), not one to discover during the build.
