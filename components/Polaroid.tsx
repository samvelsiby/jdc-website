import Image from "next/image";
import { ReactNode } from "react";

type PolaroidProps = {
  caption: string;
  rotate?: "a" | "b" | "c";
  tape?: "top" | "corners";
  variant?: "purple" | "sunset" | "paper";
  className?: string;
  src?: string; // real photo — takes over from the gradient placeholder
  alt?: string; // required alt text when `src` is set
  priority?: boolean; // pass through for above-the-fold photos
  children?: ReactNode; // placeholder art (initials on a gradient) when no `src`
  "data-polaroid"?: string;
  "data-speed"?: string;
};

export default function Polaroid({
  caption,
  rotate = "a",
  tape = "top",
  variant = "purple",
  className = "",
  src,
  alt = "",
  priority = false,
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
      <div className={imgClass}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 33vw, 90vw"
            style={{ objectFit: "cover" }}
            priority={priority}
          />
        ) : (
          children
        )}
      </div>
      <figcaption className="polaroid-caption">{caption}</figcaption>
    </figure>
  );
}
