import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, animate, useMotionValue } from "motion/react";
import { ArrowRight } from "lucide-react";
import { GlowOrb, PulsingGrid, Reveal, RevealItem } from "./motion-primitives";
import consultRoom from "@/assets/consult-room.jpg";

function AnimatedCounter({ value, direction = "up" }: { value: number, direction?: "up" | "down" }) {
  const count = useMotionValue(direction === "up" ? 0 : value + 20);
  const [display, setDisplay] = useState(direction === "up" ? 0 : value + 20);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      delay: 0.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [value, count, direction]);

  return <>{display}%</>;
}

export function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  
  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <PulsingGrid className="absolute inset-0 opacity-[0.03]" />
        <GlowOrb className="absolute top-0 right-0 w-[40rem] h-[40rem] opacity-20 -translate-y-1/2 translate-x-1/4" />
        <GlowOrb className="absolute bottom-0 left-0 w-[40rem] h-[40rem] opacity-20 translate-y-1/3 -translate-x-1/4 text-brand-soft" />
      </div>

      <div className="container-rmc relative z-10">
        <header className="mx-auto max-w-2xl text-center mb-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
              Why Royal Medical Center
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Trust & Transparency
            </h2>
          </Reveal>
        </header>

        <div className="mx-auto max-w-5xl">
          <div className="h-[1px] w-full bg-border origin-left" />

          {/* 01 — Low Price Guarantee */}
          <article className="group grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
            <div>
              <RevealItem y={30} delay={0.1}>
                <span className="block font-display text-5xl font-light leading-none text-brand/30 md:text-6xl">
                  01
                </span>
                <h3 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
                  Low Price Guarantee
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-md">
                  We’ll beat any competitor’s price by 25%.
                </p>
                <a
                  href="#programs"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-all hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/20 group/btn"
                >
                  Check Our Programs
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </RevealItem>
            </div>

            <div className="flex justify-center md:justify-end">
              <RevealItem x={40} delay={0.3}>
                <div className="relative h-64 w-64 md:h-80 md:w-80 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <svg viewBox="0 0 200 200" className="h-full w-full opacity-60">
                      <defs>
                        <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                      </defs>
                      <text className="fill-brand text-[9.5px] font-bold uppercase tracking-[0.25em]">
                        <textPath href="#circlePath" startOffset="0%">
                          PRICE GUARANTEE • PRICE GUARANTEE • PRICE GUARANTEE • PRICE GUARANTEE •
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>
                  
                  {/* Outer animated ring */}
                  <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full -rotate-90">
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="60"
                      className="fill-none stroke-brand/20"
                      strokeWidth="2"
                    />
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="60"
                      className="fill-none stroke-brand drop-shadow-[0_0_8px_rgba(var(--brand-rgb),0.5)]"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: 377, strokeDashoffset: 377 }}
                      whileInView={{ strokeDashoffset: 94.25 }} // 75% filled
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center font-display drop-shadow-md">
                    <motion.span 
                      className="text-6xl font-bold tracking-tight text-foreground md:text-7xl"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", delay: 0.5, bounce: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <AnimatedCounter value={25} direction="up" />
                    </motion.span>
                    <motion.span 
                      className="text-sm font-semibold text-brand tracking-widest uppercase mt-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Off
                    </motion.span>
                  </div>
                </div>
              </RevealItem>
            </div>
          </article>

          <div className="h-[1px] w-full bg-border" />

          {/* 02 — No Hidden Fees */}
          <article className="group grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <div className="order-2 flex justify-center md:order-1 md:justify-start">
              <RevealItem x={-40} delay={0.2}>
                <div className="relative h-64 w-64 md:h-80 md:w-80">
                  {/* Decorative background shape */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-brand/5 border border-brand/20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Image container */}
                  <div className="absolute inset-4 overflow-hidden rounded-full border border-border shadow-2xl">
                    <motion.img 
                      src={consultRoom} 
                      alt="Consultation Room" 
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent mix-blend-overlay" />
                  </div>

                  {/* Floating badge */}
                  <motion.div 
                    className="absolute -bottom-4 -right-4 md:-bottom-2 md:-right-2 bg-background border border-brand/20 shadow-xl rounded-2xl p-4 flex items-center gap-4 backdrop-blur-md"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -8, 0] }}
                    // @ts-ignore
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Guarantee</p>
                      <p className="text-lg font-bold text-foreground">0 Hidden Fees</p>
                    </div>
                  </motion.div>
                </div>
              </RevealItem>
            </div>

            <div className="order-1 md:order-2 md:text-right">
              <RevealItem y={30} delay={0.1}>
                <span className="block font-display text-5xl font-light leading-none text-brand/30 md:text-6xl">
                  02
                </span>
                <h3 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
                  No Hidden Fees
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-lg md:ml-auto">
                  Our pricing is all-inclusive, covering everything you need, including lab
                  testing, medications, physicals and Dr. consultations — no surprises, ever.
                </p>
                <a
                  href="https://royalmedicalcenters.com/contact/#form"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-brand/40 bg-card px-6 py-3 text-sm font-semibold text-brand transition-all hover:border-brand hover:bg-brand/5 hover:shadow-lg hover:shadow-brand/10 group/btn"
                >
                  Start now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </RevealItem>
            </div>
          </article>
          
          <div className="h-[1px] w-full bg-border" />
        </div>
      </div>
    </section>
  );
}
