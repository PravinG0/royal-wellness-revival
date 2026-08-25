import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { GlowOrb, PulsingGrid, Reveal, RevealItem, RevealGroup } from "./motion-primitives";
import consultRoom from "@/assets/consult-room.jpg";

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
                <div className="relative h-56 w-56 md:h-64 md:w-64">
                  <motion.svg 
                    viewBox="0 0 200 200" 
                    className="h-full w-full drop-shadow-xl"
                  >
                    <defs>
                      <path
                        id="ring-text-path"
                        d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                        fill="none"
                      />
                    </defs>
                    <circle
                      cx="100"
                      cy="100"
                      r="88"
                      className="fill-none stroke-brand/10"
                      strokeWidth="1"
                    />
                    
                    {/* Rotating outer text */}
                    <motion.g 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      style={{ originX: "100px", originY: "100px" }}
                    >
                      <text className="fill-brand/60 text-[8.5px] font-semibold uppercase tracking-[0.4em]">
                        <textPath href="#ring-text-path" startOffset="0%">
                          Price Guarantee • Price Guarantee • Price Guarantee •
                        </textPath>
                      </text>
                    </motion.g>

                    {/* Interactive animated drawing ring */}
                    <motion.g 
                      whileHover={{ rotate: 90 }} 
                      transition={{ type: "spring", stiffness: 60 }}
                      style={{ originX: "100px", originY: "100px" }}
                    >
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="66"
                        className="fill-none stroke-brand/70"
                        strokeWidth="2"
                        strokeLinecap="round"
                        transform="rotate(-90 100 100)"
                        initial={{ strokeDasharray: 415, strokeDashoffset: 415 }}
                        whileInView={{ strokeDashoffset: 104 }} // 75% filled
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                      />
                    </motion.g>
                  </motion.svg>
                  <span className="absolute inset-0 flex items-center justify-center font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl drop-shadow-md">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", delay: 1 }}
                      viewport={{ once: true }}
                    >
                      25%
                    </motion.div>
                  </span>
                </div>
              </RevealItem>
            </div>
          </article>

          <div className="h-[1px] w-full bg-border" />

          {/* 02 — No Hidden Fees */}
          <article className="group grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <div className="order-2 flex justify-center md:order-1 md:justify-start">
              <RevealItem x={-40} delay={0.2}>
                <div className="relative h-48 w-64 md:h-56 md:w-72">
                  <motion.svg viewBox="0 0 240 200" className="h-full w-full overflow-visible">
                    <g className="lens-grid">
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <line
                          key={`h${i}`}
                          x1="20"
                          x2="220"
                          y1={30 + i * 28}
                          y2={30 + i * 28}
                          className="stroke-brand/10"
                          strokeWidth="1.5"
                        />
                      ))}
                    </g>
                    
                    {/* Floating lenses */}
                    <motion.circle
                      cx="98"
                      cy="100"
                      r="58"
                      className="fill-brand/5 stroke-brand/40 backdrop-blur-sm"
                      strokeWidth="1.5"
                      animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.circle
                      cx="146"
                      cy="100"
                      r="58"
                      className="fill-brand/5 stroke-brand/40 backdrop-blur-sm"
                      strokeWidth="1.5"
                      animate={{ x: [5, -5, 5], y: [5, -5, 5] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                  </motion.svg>
                  
                  {/* Decorative image behind lenses */}
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 rounded-xl overflow-hidden opacity-50 blur-[2px]">
                    <img src={consultRoom} alt="Consultation" className="w-full h-full object-cover" />
                  </div>
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
