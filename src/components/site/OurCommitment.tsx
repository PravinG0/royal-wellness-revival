import { useState } from "react";
import { motion } from "motion/react";
import { Reveal, RevealItem } from "./motion-primitives";
import commitmentCare from "@/assets/commitment-care.jpg";

const points = [
  {
    num: "01",
    title: "Monitor Patient's Progress",
    body: "We closely monitor each patient's progress—whether in hormone therapy or weight loss programs—to ensure results are effective and levels reach their optimal range.",
  },
  {
    num: "02",
    title: "No Fine Print",
    body: "We tell patients upfront what our programs cost. Unlike other clinics, there are no hidden costs or additional fees.",
  },
];

export function OurCommitment() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="commitment-heading"
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Background glow similar to commitment-glow */}
      <div 
        className="absolute inset-y-0 left-0 w-1/2 aspect-square rounded-full bg-brand/5 blur-[80px] -translate-x-1/2 pointer-events-none" 
        aria-hidden="true" 
      />
      
      {/* Top Border Rule */}
      <div 
        className="absolute top-0 left-1/2 w-full max-w-5xl h-[1px] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/30 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[45fr_55fr] lg:gap-20">
        
        {/* Visual / Left Column */}
        <div className="order-2 flex justify-center lg:order-1">
          <svg
            viewBox="0 0 420 460"
            className="w-full max-w-[340px] sm:max-w-[420px] text-brand"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <clipPath id="core-clip">
                <circle cx="210" cy="150" r="104" />
              </clipPath>
              <linearGradient id="rmc-line" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
                <stop offset="35%" stopColor="currentColor" stopOpacity="0.75" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Pulse Ring */}
            <motion.circle 
              cx="210" cy="150" r="126" 
              className="fill-none stroke-brand/30" 
              animate={{ scale: [1, 1.045, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              style={{ originX: "210px", originY: "150px" }}
            />
            
            {/* Core Image */}
            <motion.g 
              clipPath="url(#core-clip)"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              style={{ originX: "210px", originY: "150px" }}
            >
              <image 
                href={commitmentCare} 
                x="106" y="46" width="208" height="208" 
                preserveAspectRatio="xMidYMid slice" 
                className="opacity-80"
              />
              {/* Optional colored overlay */}
              <circle cx="210" cy="150" r="104" className="fill-brand/20 mix-blend-overlay" />
            </motion.g>

            {/* Floating Particles */}
            {[
              { x: 120, y: 50, r: 2, delay: 0 },
              { x: 300, y: 80, r: 1.5, delay: 1.5 },
              { x: 90, y: 220, r: 3, delay: 3 },
              { x: 330, y: 250, r: 2, delay: 0.8 },
            ].map((p, i) => (
              <motion.circle
                key={i}
                cx={p.x}
                cy={p.y}
                r={p.r}
                className="fill-brand/60"
                animate={{ y: [p.y, p.y - 15, p.y], opacity: [0, 1, 0] }}
                transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
              />
            ))}
            <circle cx="210" cy="150" r="104" className="fill-none stroke-brand/40" strokeWidth="1" />
            
            {/* Rotating dashed ring */}
            <motion.circle 
              cx="210" cy="150" r="66" 
              className="fill-none stroke-brand/50" 
              strokeDasharray="2 7" 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ originX: "210px", originY: "150px" }}
            />

            {/* Wavy Line connecting the core to the milestones */}
            <motion.path
              d="M210 150 C 210 250, 186 280, 210 340 S 210 400, 210 438"
              fill="none"
              stroke="url(#rmc-line)"
              strokeWidth="2.5"
              initial={{ strokeDasharray: 340, strokeDashoffset: 340 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Milestone 1 */}
            <motion.g 
              animate={active === 0 ? { scale: 1.18 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ originX: "203px", originY: "300px" }}
            >
              <circle cx="203" cy="300" r="18" className="fill-none stroke-brand/40" />
              <motion.circle 
                cx="203" cy="300" r="5" 
                className="fill-brand" 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.8 }}
              />
            </motion.g>

            {/* Milestone 2 */}
            <motion.g 
              animate={active === 1 ? { scale: 1.18 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ originX: "210px", originY: "408px" }}
            >
              <circle cx="210" cy="408" r="18" className="fill-none stroke-brand/40" />
              <motion.circle 
                cx="210" cy="408" r="5" 
                className="fill-brand" 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 1 }}
              />
            </motion.g>

            <line x1="118" y1="150" x2="70" y2="150" className="stroke-brand/30" strokeWidth="1.5" />
            <line x1="302" y1="150" x2="350" y2="150" className="stroke-brand/30" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Content / Right Column */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.32em] text-brand">
              Our Commitment
            </p>
            <h2
              id="commitment-heading"
              className="mt-6 font-display text-4xl leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Your Health Journey Deserves Ongoing Care.
            </h2>
          </Reveal>
          
          <RevealItem y={20} delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We encourage prospective patients to research their options and make informed
              healthcare decisions. Royal Medical Center provides personalized Hormone
              Replacement Therapy Programs with transparent competitive pricing and licensed
              medical supervision.
            </p>
          </RevealItem>

          <div className="relative mt-12 space-y-10 pl-10 border-l border-brand/20">
            {/* Animated vertical timeline line overlay */}
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand/50 origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />

            {points.map((p, i) => (
              <RevealItem key={p.num} y={30} delay={0.4 + (i * 0.2)}>
                <div
                  tabIndex={0}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className="relative outline-none group cursor-default"
                >
                  {/* Timeline node */}
                  <div className={`absolute -left-[46px] top-1 h-3 w-3 rounded-full border-2 bg-background transition-all duration-300 ${active === i ? 'border-brand scale-150 shadow-[0_0_10px_rgba(var(--brand-rgb),0.5)]' : 'border-brand/40'}`} />
                  
                  <span className="font-display text-2xl font-light tracking-[0.08em] text-brand/70">
                    {p.num}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-foreground transition-colors group-hover:text-brand">{p.title}</h3>
                  <p className="mt-2 max-w-lg text-base leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
