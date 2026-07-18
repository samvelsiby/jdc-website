import { FAQS } from "@/data/faqs";

/**
 * The "growing pile of paper" — CSS sticky stacking, so it works everywhere
 * (including mobile and reduced-motion) without a GSAP pin.
 */
export default function FaqStack() {
  return (
    <ul className="grid gap-6 list-none p-0 m-0">
      {FAQS.map((f, i) => (
        <li
          key={f.q}
          className="faq-card"
          style={{
            top: `calc(96px + ${i * 18}px)`,
            rotate: `${i % 2 ? 0.6 : -0.8}deg`,
          }}
        >
          <h3 className="sans-heading">{f.q}</h3>
          <p className="mt-2">{f.a}</p>
        </li>
      ))}
    </ul>
  );
}
