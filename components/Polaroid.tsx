import { ReactNode } from "react";

type PolaroidProps = {
  caption: string;
  rotate?: "a" | "b" | "c";
  tape?: "top" | "corners";
  variant?: "purple" | "sunset" | "paper";
  className?: string;
  children?: ReactNode; // placeholder art until real photos land
  "data-polaroid"?: string;
  "data-speed"?: string;
};

export default function Polaroid({
  caption,
  rotate = "a",
  tape = "top",
  variant = "purple",
  className = "",
  children,
  ...rest
}: PolaroidProps) {
  const imgClass =
    variant === "sunset"
      ? "polaroid-img polaroid-img--sunset"
      : variant === "paper"
        ? "polaroid-img polaroid-img--paper"
        : "polaroid-img";

  return (
    <figure className={`polaroid rot-${rotate} ${className}`} {...rest}>
      {tape === "top" ? (
        <span className="tape tape--top" />
      ) : (
        <>
          <span className="tape tape--tl" />
          <span className="tape tape--tr" />
        </>
      )}
      <div className={imgClass}>{children}</div>
      <figcaption className="polaroid-caption">{caption}</figcaption>
    </figure>
  );
}
