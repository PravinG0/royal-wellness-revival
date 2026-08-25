import { useEffect, useRef, useState } from "react";

import trtImage from "@/assets/program-trt.jpg";
import hrtImage from "@/assets/program-hrt.jpg";
import weightImage from "@/assets/program-weight.jpg";
import peptideImage from "@/assets/program-peptides.jpg";

type Program = {
  id: string;
  nav: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
};

const programs: Program[] = [
  {
    id: "trt",
    nav: "TRT for Men",
    number: "01",
    eyebrow: "TRT for Men",
    title: "Testosterone Replacement Therapy",
    description:
      "Support energy, mental clarity, confidence, and overall well-being through personalized testosterone therapy.",
    cta: "Explore TRT",
    href: "https://royalmedicalcenters.com/testosterone-replacement-therapy/",
    image: trtImage,
    alt: "Man in soft natural light looking calm and confident",
  },
  {
    id: "hrt",
    nav: "HRT for Women",
    number: "02",
    eyebrow: "HRT for Women",
    title: "Women's Hormone Therapy",
    description:
      "Personalized hormone programs designed around individual needs and hormonal balance.",
    cta: "Explore HRT",
    href: "https://royalmedicalcenters.com/hormone-testosterone-therapy-for-women/",
    image: hrtImage,
    alt: "Woman standing in warm morning light in a calm minimal interior",
  },
  {
    id: "weight-loss",
    nav: "Weight Loss",
    number: "03",
    eyebrow: "Weight Loss",
    title: "Medical Weight Management",
    description:
      "Personalized medical programs designed to help men and women achieve lasting weight-management goals.",
    cta: "Explore Weight Loss",
    href: "https://royalmedicalcenters.com/weight-loss/",
    image: weightImage,
    alt: "Couple walking outdoors at golden hour",
  },
  {
    id: "peptides",
    nav: "Peptides",
    number: "04",
    eyebrow: "Peptide Therapy",
    title: "Peptide Therapy",
    description:
      "Explore medically guided peptide treatments designed around your individual wellness goals.",
    cta: "Explore Peptides",
    href: "https://royalmedicalcenters.com/all-programs/",
    image: peptideImage,
    alt: "Person stretching calmly in a bright minimal room",
  },
];

function OrbitDecor({ index }: { index: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      className="pointer-events-none absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)] opacity-70"
    >
      <defs>
        <linearGradient id="rmc-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-soft)" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <g
        className="rmc-orbit"
        style={{ transformOrigin: "200px 200px", animationDelay: `${index * -3}s` }}
      >
        <circle
          cx="200"
          cy="200"
          r={130 + index * 8}
          fill="none"
          stroke="url(#rmc-ring)"
          strokeWidth="1"
        />
        <circle cx="200" cy={70 - index * 8} r="4" fill="var(--brand)" opacity="0.5" />
      </g>
      <g
        className="rmc-orbit-reverse"
        style={{ transformOrigin: "200px 200px", animationDelay: `${index * -2}s` }}
      >
        <ellipse
          cx="200"
          cy="200"
          rx={170 - index * 6}
          ry={110 + index * 10}
          fill="none"
          stroke="var(--brand-soft)"
          strokeWidth="1"
          strokeDasharray="3 9"
        />
      </g>
      <path
        className="rmc-draw"
        d={`M20 ${300 - index * 20} C 120 ${200 + index * 18}, 280 ${340 - index * 24}, 380 ${180 + index * 12}`}
        fill="none"
        stroke="var(--accent-soft)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ProgramShowcase() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const program = programs[active]!;

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="programs-heading"
      data-visible={visible}
      className="rmc-reveal relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[38rem] w-[38rem] rounded-full opacity-60 blur-3xl"
        style={{ background: "var(--gradient-halo)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <header className="max-w-2xl">
          <p className="rmc-item text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-brand">
            Personalized Programs
          </p>
          <h2
            id="programs-heading"
            className="rmc-item mt-5 text-balance text-4xl font-light leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            A Personalized Path to <span className="italic text-brand">Better Health</span>
          </h2>
          <p className="rmc-item mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore personalized programs designed to support your individual health goals, from
            hormone balance and weight management to peptide therapy.
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Treatment programs"
          className="rmc-item mt-14 -mx-6 flex gap-2 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:gap-6 md:mx-0 md:justify-between md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {programs.map((item, index) => {
            const isActive = index === active;
            return (
              <button
                key={item.id}
                role="tab"
                id={`program-tab-${item.id}`}
                aria-selected={isActive}
                aria-controls="program-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                    event.preventDefault();
                    const next =
                      (active + (event.key === "ArrowRight" ? 1 : -1) + programs.length) %
                      programs.length;
                    setActive(next);
                    document.getElementById(`program-tab-${programs[next]!.id}`)?.focus();
                  }
                }}
                className="group relative shrink-0 whitespace-nowrap rounded-full px-1 py-3 text-sm font-medium tracking-wide outline-none transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background md:text-base"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span
                  className={
                    isActive
                      ? "text-foreground transition-colors duration-500"
                      : "text-muted-foreground transition-colors duration-500 group-hover:text-foreground"
                  }
                >
                  <span className="mr-2 text-xs tabular-nums text-brand/70">
                    {item.number}
                  </span>
                  {item.nav}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-px h-px origin-left bg-brand transition-transform duration-500 ease-out"
                  style={{ transform: `scaleX(${isActive ? 1 : 0})` }}
                />
              </button>
            );
          })}
        </div>
        <div className="h-px w-full bg-border" />

        <div
          id="program-panel"
          role="tabpanel"
          aria-labelledby={`program-tab-${program.id}`}
          className="rmc-item mt-12 grid items-center gap-10 rounded-[2rem] border border-border/70 bg-card/60 p-6 shadow-[0_30px_80px_-60px_rgba(20,40,45,0.6)] backdrop-blur-sm sm:p-10 lg:grid-cols-[45fr_55fr] lg:gap-16 lg:p-14"
        >
          <div key={`copy-${program.id}`} className="rmc-swap order-2 lg:order-1">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              <span className="text-brand">{program.number}</span> — {program.eyebrow}
            </p>
            <h3 className="mt-5 text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
              {program.title}
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              {program.description}
            </p>
            <a
              href={program.href}
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-brand/30 px-6 py-3 text-sm font-medium text-foreground transition-all duration-500 hover:border-brand hover:bg-brand/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {program.cta}
              <span
                aria-hidden="true"
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          <div className="relative order-1 lg:order-2">
            <OrbitDecor index={active} />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/60">
              <img
                key={program.id}
                src={program.image}
                alt={program.alt}
                loading="lazy"
                width={1104}
                height={1312}
                className="rmc-swap-image aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{ background: "var(--gradient-image-veil)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
