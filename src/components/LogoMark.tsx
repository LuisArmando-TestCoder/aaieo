/**
 * LogoMark — the aaieo 'Aï' monogram.
 *
 * Server component; no hooks. Color defaults to black (#000000) for light
 * backgrounds and should be set to white (#ffffff) on dark backgrounds.
 *
 * The white background <rect> from the original favicon SVG is intentionally
 * omitted here so the mark renders transparently on any surface.
 */
export function LogoMark({
  color = "#000000",
  width = 32,
  height = 32,
  className,
}: {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ flexShrink: 0, display: "block" }}
    >
      {/* Institutional 'A' letterform */}
      <g transform="translate(-4, 5) scale(0.92)">
        <path
          fill={color}
          fillRule="evenodd"
          d="
            M 38 10
            L 22 10
            L 22 13
            L 28 13
            L 15 48
            L 6 48
            L 6 52
            L 26 52
            L 26 48
            L 20 48
            L 25 35
            L 39 35
            L 44 48
            L 36 48
            L 36 52
            L 60 52
            L 60 48
            L 54 48
            Z
            M 27 31
            L 37 31
            L 32 16
            Z
          "
        />
      </g>
      {/* The 'i' tittle */}
      <circle cx="56" cy="18" r="4.5" fill={color} />
    </svg>
  );
}
