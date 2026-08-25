import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Transition,
} from "motion/react";

/** Shared premium easing curve + timings. */
export const EASE = [0.22, 1, 0.36, 1] as const;
export const DUR = 0.75;

const viewportOnce = { once: true, margin: "-80px" } as const;

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
  blur = 0,
  duration = 0.7,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const reduced = useReducedMotion();
  const Comp = motion[as];
  if (reduced) {
    return (
      <Comp className={className} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportOnce} transition={{ duration: 0.3 }}>
        {children}
      </Comp>
    );
  }
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, x, scale, ...(blur ? { filter: `blur(${blur}px)` } : {}) }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, ...(blur ? { filter: "blur(0px)" } : {}) }}
      viewport={viewportOnce}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

/** Smooth opacity + vertical reveal. */
export function FadeReveal(props: Omit<Parameters<typeof Reveal>[0], "blur" | "scale">) {
  return <Reveal {...props} />;
}

/** blur(8px) -> blur(0) with opacity + small lift. */
export function BlurReveal(props: Omit<Parameters<typeof Reveal>[0], "blur">) {
  return <Reveal blur={8} y={props.y ?? 16} {...props} />;
}

/** Very subtle scale(0.96) -> scale(1). */
export function ScaleReveal(props: Parameters<typeof Reveal>[0]) {
  return <Reveal scale={0.96} y={props.y ?? 16} {...props} />;
}

/** Staggered container for lists of cards. */
export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ show: { transition: { staggerChildren: stagger, delayChildren } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 28,
  scale = 0.98,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  scale?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={
        reduced
          ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.3 } } }
          : {
              hidden: { opacity: 0, y, scale },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: EASE } },
            }
      }
    >
      {children}
    </motion.div>
  );
}

/** Back-compat aliases used across the site. */
export const RevealGroup = StaggerContainer;
export const RevealItem = StaggerItem;

/**
 * ImageReveal
 * Premium media reveal: clip-path wipe + gentle scale settle.
 * `from` picks the wipe direction so images across the page don't all
 * animate identically.
 */
export function ImageReveal({
  children,
  className,
  from = "bottom",
  delay = 0,
  zoom = true,
}: {
  children: ReactNode;
  className?: string;
  from?: "bottom" | "left" | "none";
  delay?: number;
  zoom?: boolean;
}) {
  const reduced = useReducedMotion();
  const clipFrom =
    from === "bottom"
      ? "inset(18% 0% 0% 0% round var(--radius-4xl))"
      : from === "left"
        ? "inset(0% 22% 0% 0% round var(--radius-4xl))"
        : "inset(0% 0% 0% 0%)";

  if (reduced) {
    return (
      <motion.div className={className} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportOnce} transition={{ duration: 0.3 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, clipPath: clipFrom, scale: zoom ? 1.06 : 1 }}
      whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round var(--radius-4xl))", scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 1.05, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Very subtle continuous organic floating motion. Disabled for reduced motion. */
export function FloatingElement({
  children,
  className,
  amplitude = 8,
  duration = 5,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Reusable SVG path drawing animation (pathLength based, GPU friendly). */
export function DrawSVG({
  d,
  className = "",
  viewBox = "0 0 200 100",
  duration = 1.6,
  delay = 0,
  strokeWidth = 2,
  dashed = false,
  ...rest
}: {
  d: string;
  className?: string;
  viewBox?: string;
  duration?: number;
  delay?: number;
  strokeWidth?: number;
  dashed?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <svg viewBox={viewBox} className={className} fill="none" aria-hidden="true" {...rest}>
      <motion.path
        d={d}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={dashed ? "6 10" : undefined}
        initial={reduced ? { opacity: 1 } : { pathLength: 0, opacity: 0.15 }}
        whileInView={reduced ? { opacity: 1 } : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration, delay, ease: "easeInOut" }}
      />
    </svg>
  );
}

/** Scroll-linked parallax for selected desktop decorations. */
export function ParallaxElement({
  children,
  className,
  distance = 40,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const y = useSpring(raw, { stiffness: 60, damping: 20, mass: 0.4 });

  return (
    <div ref={ref} className={className}>
      {reduced ? <div>{children}</div> : <motion.div style={{ y }}>{children}</motion.div>}
    </div>
  );
}

/**
 * MouseParallax
 * Subtle pointer-driven depth for the hero. Desktop only (pointer: fine),
 * disabled under reduced motion. Values stay within a few pixels.
 */
export function MouseParallax({
  children,
  className,
  strength = 10,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring: Transition = { stiffness: 90, damping: 18, mass: 0.5 };
  const x = useSpring(mx, spring);
  const y = useSpring(my, spring);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const mq = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    const apply = () => setEnabled(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) {
      mx.set(0);
      my.set(0);
      return;
    }
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / r.width;
      const py = (e.clientY - (r.top + r.height / 2)) / r.height;
      mx.set(Math.max(-1, Math.min(1, px)) * strength);
      my.set(Math.max(-1, Math.min(1, py)) * strength);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, mx, my, strength]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ x, y }}>{children}</motion.div>
    </div>
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
  const reduced = useReducedMotion();
  const value = useMotionValue(0);
  const spring = useSpring(value, { stiffness: 70, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(to);
      return;
    }
    value.set(to);
  }, [inView, to, value, reduced]);

  useEffect(() => {
    if (reduced) return;
    return spring.on("change", (v) => setDisplay(v));
  }, [spring, reduced]);

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

/** Animated ECG heartbeat line — decorative medical motif, with travelling pulse. */
export function Heartbeat({ className = "", pulse = true }: { className?: string; pulse?: boolean }) {
  const reduced = useReducedMotion();
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
      {pulse && !reduced && (
        <motion.circle
          r="3"
          fill="currentColor"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1, 1, 0], cx: [0, 78, 160, 240], cy: [20, 6, 20, 20] }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, delay: 1.4, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
        />
      )}
    </svg>
  );
}

/** Slowly rotating dashed ring — calm, organic decoration. */
export function OrbitRing({ className = "", duration = 40 }: { className?: string; duration?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      aria-hidden="true"
      {...(reduced ? {} : { animate: { rotate: 360 }, transition: { duration, repeat: Infinity, ease: "linear" as const } })}
    >
      <circle cx="100" cy="100" r="86" stroke="currentColor" strokeWidth="2" strokeDasharray="6 12" strokeLinecap="round" />
    </motion.svg>
  );
}

/** Soft organic wellness wave used as a section divider. */
export function WellnessWave({ className = "" }: { className?: string }) {
  return (
    <DrawSVG
      className={className}
      viewBox="0 0 600 60"
      d="M0 40C80 40 90 12 160 12s85 34 160 34 90-34 160-34 100 28 120 28"
      duration={2}
      strokeWidth={1.75}
    />
  );
}

/** Decorative DNA-inspired double strand. */
export function DnaStrand({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 200" className={className} fill="none" aria-hidden="true">
      {[0, 1].map((i) => (
        <motion.path
          key={i}
          d={
            i === 0
              ? "M12 0c36 25 36 50 0 75s-36 50 0 75 36 50 0 50"
              : "M48 0C12 25 12 50 48 75s36 50 0 75-36 50 0 50"
          }
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.1 }}
          whileInView={{ pathLength: 1, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}
