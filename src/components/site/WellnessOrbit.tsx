const RING = { cx: 250, cy: 250, r: 196 };

/**
 * Decorative rotating orbit ring with glowing particles travelling the path.
 * Purely decorative — hidden from assistive technology.
 */
export function WellnessOrbit({ className = "" }: { className?: string }) {
  const circumference = 2 * Math.PI * RING.r;

  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      <defs>
        <linearGradient id="orbit-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-soft)" stopOpacity="0.15" />
          <stop offset="45%" stopColor="var(--brand-soft)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id="orbit-particle">
          <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orbit-particle-2">
          <stop offset="0%" stopColor="var(--brand-soft)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--brand-soft)" stopOpacity="0" />
        </radialGradient>
        <path
          id="orbit-path"
          d={`M ${RING.cx} ${RING.cy - RING.r} a ${RING.r} ${RING.r} 0 1 1 -0.01 0`}
        />
      </defs>

      {/* slow rotating ring system */}
      <g
        className="origin-center animate-orbit motion-reduce:animate-none"
        style={{ transformBox: "view-box" }}
      >
        <circle
          cx={RING.cx}
          cy={RING.cy}
          r={RING.r}
          fill="none"
          stroke="url(#orbit-stroke)"
          strokeWidth="1.25"
        />
        <circle
          cx={RING.cx}
          cy={RING.cy}
          r={RING.r - 26}
          fill="none"
          stroke="var(--brand-soft)"
          strokeOpacity="0.22"
          strokeWidth="1"
          strokeDasharray="2 12"
          strokeLinecap="round"
        />
        <circle
          cx={RING.cx}
          cy={RING.cy}
          r={RING.r + 30}
          fill="none"
          stroke="var(--brand)"
          strokeOpacity="0.16"
          strokeWidth="1"
          strokeDasharray={`${circumference * 0.14} ${circumference * 0.86}`}
          strokeLinecap="round"
        />
      </g>

      {/* counter-rotating fine ring for depth */}
      <g
        className="origin-center animate-orbit-reverse motion-reduce:animate-none"
        style={{ transformBox: "view-box", animationDuration: "95s" }}
      >
        <circle
          cx={RING.cx}
          cy={RING.cy}
          r={RING.r - 58}
          fill="none"
          stroke="var(--brand)"
          strokeOpacity="0.1"
          strokeWidth="1"
          strokeDasharray="1 10"
          strokeLinecap="round"
        />
      </g>

      {/* glowing particles gliding along the orbit path */}
      {[
        { dur: "26s", begin: "0s", r: 9, fill: "url(#orbit-particle)" },
        { dur: "34s", begin: "-9s", r: 7, fill: "url(#orbit-particle-2)" },
        { dur: "44s", begin: "-21s", r: 11, fill: "url(#orbit-particle)" },
      ].map((p, i) => (
        <circle key={i} r={p.r} fill={p.fill}>
          <animateMotion dur={p.dur} begin={p.begin} repeatCount="indefinite" rotate="auto">
            <mpath href="#orbit-path" />
          </animateMotion>
        </circle>
      ))}

      {/* node markers on the ring */}
      <g className="origin-center animate-orbit motion-reduce:animate-none" style={{ transformBox: "view-box" }}>
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (Math.PI * 2 * i) / 6 - Math.PI / 2;
          return (
            <circle
              key={i}
              cx={RING.cx + Math.cos(a) * RING.r}
              cy={RING.cy + Math.sin(a) * RING.r}
              r="3"
              fill="var(--brand-soft)"
              fillOpacity="0.55"
            />
          );
        })}
      </g>
    </svg>
  );
}
