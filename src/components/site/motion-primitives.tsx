import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";

/**
 * Reveal
 * Scroll-triggered entrance wrapper. Uses Motion's `whileInView` (backed by
 * IntersectionObserver) so nothing runs on the main thread until a section is
 * about to be seen. Transform + opacity only, to stay on the compositor.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  x = 0,
  scale = 1,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}

/** Staggered container for lists of cards. */
export function RevealGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Counter
 * Animated number that starts counting only when scrolled into view.
 * A spring drives a MotionValue; we subscribe once and write to state at a
 * rounded granularity so React re-renders stay cheap.
 */
export function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useMotionValue(0);
  const spring = useSpring(value, { stiffness: 70, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) value.set(to);
  }, [inView, to, value]);

  useEffect(() => spring.on("change", (v) => setDisplay(v)), [spring]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/** Self-drawing checkmark in a circle. */
export function AnimatedCheck({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        className="fill-brand-soft stroke-brand"
        strokeWidth="1.5"
        variants={{ hidden: { scale: 0.6, opacity: 0 }, show: { scale: 1, opacity: 1 } }}
        transition={{ duration: 0.4, ease: "backOut" }}
        style={{ transformOrigin: "center" }}
      />
      <motion.path
        d="M7.5 12.4l3 3 6-6.4"
        className="stroke-foreground"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1 } }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

/** Animated ECG heartbeat line — decorative medical motif. */
export function Heartbeat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 40" className={className} fill="none" aria-hidden="true">
      <motion.path
        d="M0 20h60l8-14 10 28 9-20 8 6h145"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0.2 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
    </svg>
  );
}
