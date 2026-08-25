/** Soft organic background: radial washes, blobs, fine lines, tiny particles. */
export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* radial washes */}
      <div
        className="absolute -left-[18%] top-[-22%] h-[70vw] max-h-[820px] w-[70vw] max-w-[820px] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-soft) 34%, transparent), transparent 68%)",
        }}
      />
      <div
        className="absolute -right-[14%] bottom-[-26%] h-[62vw] max-h-[760px] w-[62vw] max-w-[760px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand) 26%, transparent), transparent 70%)",
        }}
      />

      {/* organic blobs + fine decorative lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="blob-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand-soft)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--brand)" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path
          fill="url(#blob-a)"
          d="M1180 118c92 54 160 168 148 274-12 106-104 205-206 258-102 53-214 60-296 12-82-48-134-151-124-254 10-103 82-205 176-260 94-55 210-84 302-30Z"
        />
        <g stroke="var(--brand)" strokeOpacity="0.07" fill="none" strokeWidth="1">
          <path d="M-40 700C240 640 420 520 700 540s420 160 800 90" />
          <path d="M-40 760C260 706 430 596 720 612s430 150 800 84" />
          <path d="M-40 820C280 772 440 672 740 684s440 140 800 78" />
        </g>
      </svg>

      {/* tiny floating particles */}
      {[
        { l: "12%", t: "24%", d: "0s", s: 5 },
        { l: "26%", t: "68%", d: "-2.5s", s: 3 },
        { l: "44%", t: "16%", d: "-4s", s: 4 },
        { l: "68%", t: "78%", d: "-1.4s", s: 3 },
        { l: "84%", t: "30%", d: "-3.2s", s: 5 },
        { l: "92%", t: "62%", d: "-5s", s: 3 },
      ].map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-brand-soft/35 animate-drift motion-reduce:animate-none"
          style={{
            left: p.l,
            top: p.t,
            width: p.s,
            height: p.s,
            animationDelay: p.d,
            animationDuration: `${8 + i}s`,
          }}
        />
      ))}
    </div>
  );
}
