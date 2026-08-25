import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import heroImage from "@/assets/hero-patients.jpg";
import { WellnessOrbit } from "./WellnessOrbit";
import { HeroBackdrop } from "./HeroBackdrop";

function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const words = [
    { text: "More Energy", color: "#186C96" },
    { text: "Radiant Skin", color: "#2E6351" },
    { text: "Restful Sleep", color: "#3E829C" },
    { text: "Sexual Wellness", color: "#74A019" },
    { text: "Balanced Mind", color: "#2E6351" },
    { text: "Thicker Hair", color: "#2E6351" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <h1
      id="hero-heading"
      className="mt-4 font-display text-[clamp(2.6rem,6.4vw,4.6rem)] font-light leading-[1.1] tracking-[-0.025em] text-foreground flex flex-col items-start h-[160px] md:h-[180px] lg:h-[190px]"
    >
      <div className="relative w-full h-[1em] mb-2 overflow-visible">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute left-0 font-medium whitespace-nowrap drop-shadow-sm"
            style={{ color: words[index].color }}
          >
            {words[index].text}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="font-bold text-foreground">Personalized to you</span>
    </h1>
  );
}

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
            Royal Medical Center
          </p>

          <RotatingHeadline />

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

      {/* 3 Pricing Cards matching attached image style */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 mt-2 lg:mt-8 pb-12 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          <div className="rounded-xl p-6 md:p-8 flex flex-col justify-center shadow-lg transition-transform hover:-translate-y-1" style={{ backgroundColor: '#6A7D64' }}>
            <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight">TRT/HRT</h3>
            <p className="text-white/90 text-lg md:text-xl font-medium mt-1">
              Programs starting<br />at <span className="text-[#C4E193] font-bold">$89/mo</span>
            </p>
          </div>
          
          <div className="rounded-xl p-6 md:p-8 flex flex-col justify-center shadow-lg transition-transform hover:-translate-y-1" style={{ backgroundColor: '#408182' }}>
            <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight">Peptide Therapy</h3>
            <p className="text-white/90 text-lg md:text-xl font-medium mt-1">
              starting at<br /><span className="text-[#B9E198] font-bold">$139/mo</span>
            </p>
          </div>
          
          <div className="rounded-xl p-6 md:p-8 flex flex-col justify-center shadow-lg transition-transform hover:-translate-y-1" style={{ backgroundColor: '#6A7D64' }}>
            <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight">Weight Loss (glp-1)</h3>
            <p className="text-white/90 text-lg md:text-xl font-medium mt-1">
              programs starting<br />at <span className="text-[#C4E193] font-bold">$67/mo</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
