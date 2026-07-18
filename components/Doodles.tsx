type DoodleProps = {
  className?: string;
  size?: number;
  "data-doodle"?: string;
  "data-speed"?: string;
};

const stroke = {
  fill: "none",
  strokeWidth: 6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SunDoodle({ className = "", size = 80, ...rest }: DoodleProps) {
  const rays = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4 + 0.1;
    return {
      x1: 40 + Math.cos(a) * 21,
      y1: 40 + Math.sin(a) * 21,
      x2: 40 + Math.cos(a) * 32,
      y2: 40 + Math.sin(a) * 32,
    };
  });
  return (
    <svg viewBox="0 0 80 80" width={size} height={size} className={`doodle ${className}`} aria-hidden="true" {...rest}>
      <g {...stroke} stroke="var(--yellow-deep)">
        <path d="M40 26c8-1 14 5 14 13 0 9-7 15-15 14-8-1-13-7-13-14 0-8 6-12 14-13z" />
        {rays.map((r, i) => (
          <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} />
        ))}
      </g>
    </svg>
  );
}

export function SmileyDoodle({ className = "", size = 70, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 70 70" width={size} height={size} className={`doodle ${className}`} aria-hidden="true" {...rest}>
      <g {...stroke} stroke="var(--purple)">
        <path d="M35 7c16-1 27 11 26 27-1 15-12 25-26 25S8 49 8 34C8 19 20 8 35 7z" />
        <path d="M25 28c0 2 .5 4 .5 4" />
        <path d="M44 27c0 2 .5 4 .5 4" />
        <path d="M22 42c8 9 19 9 26-1" />
      </g>
    </svg>
  );
}

export function HeartDoodle({ className = "", size = 64, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className={`doodle ${className}`} aria-hidden="true" {...rest}>
      <path
        {...stroke}
        stroke="var(--purple)"
        d="M32 54C15 42 8 32 12 22c3-7 13-8 19 0 5-8 16-8 20-1 5 10-3 21-19 33z"
      />
    </svg>
  );
}

export function StarDoodle({ className = "", size = 70, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 70 70" width={size} height={size} className={`doodle ${className}`} aria-hidden="true" {...rest}>
      <path
        {...stroke}
        stroke="var(--yellow-deep)"
        d="M35 6l8 19 21 2-15 14 4 21-18-10-18 11 4-22L6 27l20-2z"
      />
    </svg>
  );
}

export function ArrowDoodle({ className = "", size = 90, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 90 46" width={size} height={size * 0.5} className={`doodle ${className}`} aria-hidden="true" {...rest}>
      <g {...stroke} stroke="var(--ink)">
        <path d="M6 24c24-6 50-6 72-1" />
        <path d="M64 12c6 4 11 8 14 11-5 2-11 6-15 10" />
      </g>
    </svg>
  );
}

export function CurlyArrowDoodle({
  className = "",
  size = 140,
  flip = false,
  ...rest
}: DoodleProps & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 150 190"
      width={size}
      height={size * 1.27}
      className={`doodle ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
      {...rest}
    >
      <g stroke="var(--ink)" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M132 10 C 84 26, 40 54, 34 92 C 30 122, 58 132, 66 113 C 73 96, 52 85, 38 97 C 20 112, 24 146, 66 164" />
        <path d="M66 164 L 45 159" />
        <path d="M66 164 L 57 146" />
      </g>
    </svg>
  );
}

export function ButterflyDoodle({
  className = "",
  size = 320,
  scheme = "purple",
  ...rest
}: DoodleProps & { scheme?: "purple" | "ink" }) {
  const upper = scheme === "purple" ? "var(--purple)" : "var(--ink)";
  const lower = scheme === "purple" ? "#9a7ed1" : "var(--ink)";
  const spot = scheme === "purple" ? "var(--yellow)" : "var(--white)";
  return (
    <svg viewBox="0 0 220 170" width={size} height={size * 0.77} className={`doodle ${className}`} aria-hidden="true" {...rest}>
      <g stroke="var(--ink)" strokeWidth="4" strokeLinejoin="round">
        <path d="M104 82 C 78 40, 40 14, 20 26 C 2 38, 10 70, 44 84 C 62 91, 86 90, 104 86 Z" fill={upper} />
        <path d="M116 82 C 142 40, 180 14, 200 26 C 218 38, 210 70, 176 84 C 158 91, 134 90, 116 86 Z" fill={upper} />
        <path d="M103 90 C 80 96, 52 104, 44 124 C 38 141, 58 152, 76 140 C 90 130, 100 110, 105 94 Z" fill={lower} />
        <path d="M117 90 C 140 96, 168 104, 176 124 C 182 141, 162 152, 144 140 C 130 130, 120 110, 115 94 Z" fill={lower} />
      </g>
      <circle cx="40" cy="46" r="6" fill={spot} />
      <circle cx="62" cy="62" r="4.5" fill={spot} />
      <circle cx="180" cy="46" r="6" fill={spot} />
      <circle cx="158" cy="62" r="4.5" fill={spot} />
      <circle cx="66" cy="122" r="4" fill={spot} />
      <circle cx="154" cy="122" r="4" fill={spot} />
      <ellipse cx="110" cy="88" rx="7" ry="28" fill="var(--ink)" />
      <g stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M104 62 C 98 48, 90 40, 82 34" />
        <path d="M116 62 C 122 48, 130 40, 138 34" />
      </g>
    </svg>
  );
}

export function SquiggleDoodle({ className = "", width = 140, ...rest }: DoodleProps & { width?: number }) {
  return (
    <svg viewBox="0 0 140 20" width={width} height={20} className={`doodle ${className}`} aria-hidden="true" {...rest}>
      <path
        {...stroke}
        stroke="var(--purple)"
        d="M4 12c10-10 20 8 30-2s20 8 30-2 20 8 30-2 20 8 42-2"
      />
    </svg>
  );
}
