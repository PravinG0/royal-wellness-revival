import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-patients.jpg";
import { WellnessOrbit } from "./WellnessOrbit";
import { HeroBackdrop } from "./HeroBackdrop";

const BENEFITS = [
  { label: "More Energy", angle: -90 },
  { label: "Radiant Skin", angle: -30 },
  { label: "Restful Sleep", angle: 30 },
  { label: "Sexual Wellness", angle: 90 },
  { label: "Balanced Mind", angle: 150 },
  { label: "Thicker Hair", angle: 210 },
];

function usePointerParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset({ x, y }));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return { ref, offset };
}

export function Hero() {
  const { ref, offset } = usePointerParallax();
  const shift = (depth: number) => ({
    transform: `translate3d(${offset.x * depth}px, ${offset.y * depth}px, 0)`,
  });

  return (
    <section
      ref={ref}
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[88svh] items-center overflow-hidden bg-background pt-24 pb-16 sm:pt-32 sm:pb-24 lg:min-h-[92svh] lg:py-0 lg:pt-20"
    >
      <HeroBackdrop />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[45fr_55fr] lg:gap-10 lg:px-10">
        {/* ---------------- LEFT: content ---------------- */}
        <div className="max-w-xl animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            Personalized to you
          </p>

          <h1
            id="hero-heading"
            className="mt-7 font-display text-[clamp(2.6rem,6.4vw,4.6rem)] font-light leading-[1.03] tracking-[-0.025em] text-foreground"
          >
            Royal Medical Center
          </h1>

          <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Competitive pricing for Testosterone Therapy, Hormone Therapy, Weight Management, and Peptide programs — personalized and designed around your individual health needs.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://royalmedicalcenters.com/contact/#form"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold tracking-wide text-brand-foreground shadow-[var(--shadow-cta)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-soft hover:shadow-[var(--shadow-cta-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Get Started
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://royalmedicalcenters.com/all-programs/"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/60 px-8 py-4 text-sm font-semibold tracking-wide text-secondary-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Explore Programs
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-border/70 pt-6 lg:hidden">
            <span className="h-9 w-px bg-gradient-to-b from-transparent via-brand to-transparent" />
            <p className="text-sm text-muted-foreground">
              <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-brand">
                Personalized Programs
              </span>
              Starting at{" "}
              <span className="font-display text-lg font-medium text-foreground">$67/mo</span>
              <span aria-hidden="true">*</span>
            </p>
          </div>
        </div>

        {/* ---------------- RIGHT: wellness visual ---------------- */}
        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[560px]">
          <div className="relative aspect-square w-full" style={shift(10)}>
            {/* halo */}
            <div
              className="absolute inset-[6%] rounded-full blur-2xl"
              style={{ background: "var(--gradient-halo)" }}
              aria-hidden="true"
            />

            {/* orbit */}
            <WellnessOrbit className="absolute inset-0 h-full w-full" />

            {/* portrait */}
            <div className="absolute inset-[16%] animate-breathe motion-reduce:animate-none">
              <div className="h-full w-full overflow-hidden rounded-full border border-glass-border shadow-[var(--shadow-float)]">
                <img
                  src={heroImage}
                  width={1024}
                  height={1280}
                  alt="A healthy, confident adult smiling in natural daylight"
                  className="h-full w-full object-cover object-top"
                  fetchPriority="high"
                />
              </div>
            </div>

            {/* floating wellness cards (desktop / tablet) */}
            <div className="absolute inset-0 hidden sm:block" style={shift(-16)}>
              {BENEFITS.map((b, i) => {
                const rad = (b.angle * Math.PI) / 180;
                const radius = 43; // Match the orbit SVG radius more closely
                return (
                  <div
                    key={b.label}
                    className="absolute animate-drift motion-reduce:animate-none"
                    style={{
                      left: `${50 + Math.cos(rad) * radius}%`,
                      top: `${50 + Math.sin(rad) * radius}%`,
                      transform: "translate(-50%, -50%)",
                      animationDelay: `${i * -1.35}s`,
                      animationDuration: `${8.5 + i * 0.7}s`,
                    }}
                  >
                    <span className="glass-panel flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2 text-[0.7rem] font-semibold tracking-wide text-secondary-foreground lg:text-xs">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                        aria-hidden="true"
                      />
                      {b.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* floating pricing card */}
            <div
              className="glass-panel absolute -bottom-8 left-1/2 hidden w-[13.5rem] -translate-x-1/2 rounded-2xl px-5 py-4 text-center sm:bottom-[-2%] sm:left-[-2%] sm:block sm:translate-x-0 sm:text-left lg:bottom-4 lg:left-0"
              style={shift(18)}
            >
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-brand">
                Personalized Programs
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Starting at</p>
              <p className="font-display text-2xl font-medium leading-tight text-foreground">
                $67/mo<span aria-hidden="true">*</span>
              </p>
            </div>
          </div>

          {/* mobile: simplified benefit chips */}
          <ul className="mt-20 flex flex-wrap justify-center gap-2 sm:hidden">
            {BENEFITS.map((b) => (
              <li
                key={b.label}
                className="glass-panel rounded-full px-3 py-1.5 text-[0.7rem] font-semibold text-secondary-foreground"
              >
                {b.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
