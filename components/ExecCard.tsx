import Polaroid from "@/components/Polaroid";
import { Exec, initials } from "@/data/execs";

/**
 * Profile card per DESIGN.md §5: pill → display name → degree → polaroid → sticker blurb.
 * Co-VP roles render both names in one card so the shared role reads as intentional.
 */
export default function ExecCard({ exec, index = 0 }: { exec: Exec; index?: number }) {
  const rotate = (["a", "b", "c"] as const)[index % 3];

  return (
    <article className="grid gap-4 justify-items-start content-start">
      <span className="pill" data-paste="">
        {exec.role}
        {exec.roleNote ? <span style={{ fontWeight: 500 }}> — {exec.roleNote}</span> : null}
      </span>

      <h3 className="display-name display-section" data-paste="">
        {exec.names.map((n) => (
          <span key={n} className="block">
            {n}
          </span>
        ))}
      </h3>

      <p className="hand text-xl -mt-2" style={{ color: "var(--purple-deep)" }}>
        ({exec.degree})
      </p>

      <Polaroid
        caption={exec.names.map((n) => n.split(" ")[0]).join(" & ")}
        rotate={rotate}
        tape={index % 2 ? "corners" : "top"}
        variant={index % 3 === 1 ? "sunset" : index % 3 === 2 ? "paper" : "purple"}
        className="w-full max-w-[300px]"
        src={exec.photos?.[0]}
        alt={exec.names[0]}
        data-polaroid=""
      >
        <span className="polaroid-initials">{exec.names.map(initials).join(" + ")}</span>
      </Polaroid>

      <blockquote className="sticker max-w-[300px]" data-sticker="">
        <p className="hand">{exec.blurb}</p>
      </blockquote>
    </article>
  );
}
