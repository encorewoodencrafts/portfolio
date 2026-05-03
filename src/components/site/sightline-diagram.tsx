export function SightlineDiagram({
  sightline,
  code,
  hue = "#a87c4f",
}: {
  sightline: string;
  code: string;
  hue?: string;
}) {
  const sightlineNumber = parseInt(sightline.replace(/\D/g, ""), 10) || 32;
  const frameWidth = Math.max(8, Math.min(24, sightlineNumber / 3));
  return (
    <div className="relative">
      <svg
        viewBox="0 0 400 280"
        className="w-full h-auto"
        role="img"
        aria-label={`vertical sightline diagram for encore ${code}`}
      >
        <defs>
          <pattern
            id={`grain-section-${code}`}
            patternUnits="userSpaceOnUse"
            width="40"
            height="280"
          >
            <rect width="40" height="280" fill={hue} />
            {Array.from({ length: 28 }).map((_, i) => (
              <path
                key={i}
                d={`M0 ${i * 10 + 1} L 40 ${i * 10 + 1.6}`}
                stroke="rgba(0,0,0,0.25)"
                strokeWidth={i % 3 === 0 ? 0.8 : 0.4}
              />
            ))}
          </pattern>
        </defs>

        <rect
          x="60"
          y="40"
          width="280"
          height="200"
          fill="rgba(168,180,192,0.18)"
          stroke="var(--ink)"
          strokeWidth="0.6"
          strokeOpacity="0.3"
        />
        <rect
          x="60"
          y="40"
          width={frameWidth}
          height="200"
          fill={`url(#grain-section-${code})`}
        />
        <rect
          x={340 - frameWidth}
          y="40"
          width={frameWidth}
          height="200"
          fill={`url(#grain-section-${code})`}
        />

        <line
          x1="60"
          y1="260"
          x2={60 + frameWidth}
          y2="260"
          stroke="var(--walnut)"
          strokeWidth="1"
        />
        <line
          x1="60"
          y1="256"
          x2="60"
          y2="264"
          stroke="var(--walnut)"
          strokeWidth="1"
        />
        <line
          x1={60 + frameWidth}
          y1="256"
          x2={60 + frameWidth}
          y2="264"
          stroke="var(--walnut)"
          strokeWidth="1"
        />
        <text
          x={60 + frameWidth + 6}
          y="263"
          fontSize="10"
          fontFamily="var(--font-mono)"
          fill="var(--walnut)"
          style={{ letterSpacing: "0.06em" }}
        >
          {sightline}
        </text>

        <text
          x="200"
          y="32"
          textAnchor="middle"
          fontSize="9"
          fontFamily="var(--font-mono)"
          fill="var(--ink-2)"
          style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}
        >
          horizontal section · encore {code}
        </text>
        <text
          x="200"
          y="160"
          textAnchor="middle"
          fontSize="9"
          fontFamily="var(--font-mono)"
          fill="var(--ink-2)"
          opacity="0.5"
          style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}
        >
          structural laminated glass
        </text>
      </svg>
    </div>
  );
}
