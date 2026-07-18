function starPoints(points = 28, outer = 50, inner = 41) {
  const pts: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (i * Math.PI) / points - Math.PI / 2;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
}

const POINTS = starPoints();

export default function Starburst({
  children,
  className = "",
  size = 150,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  size?: number;
  "data-sticker"?: string;
}) {
  return (
    <div
      className={`relative grid place-items-center ${className}`}
      style={{ width: size, height: size, rotate: "-8deg" }}
      {...rest}
    >
      <svg viewBox="0 0 100 100" width={size} height={size} className="absolute inset-0" aria-hidden="true">
        <polygon points={POINTS} fill="var(--yellow)" stroke="var(--yellow-deep)" strokeWidth="1" />
      </svg>
      <span
        className="relative z-10 text-center px-4"
        style={{ fontFamily: "var(--font-marker)", color: "var(--ink)", fontSize: size / 10, lineHeight: 1.15 }}
      >
        {children}
      </span>
    </div>
  );
}
