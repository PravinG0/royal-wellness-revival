import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  FlaskConical,
  HeartPulse,
  Package,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";
import { Header, CtaLink } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ProgramShowcase } from "@/components/site/ProgramShowcase";
import { BalanceSection } from "@/components/site/BalanceSection";
import { Footer } from "@/components/site/Footer";
import { WhyChooseSection } from "@/components/site/WhyChooseSection";
import { OurCommitment } from "@/components/site/OurCommitment";
import { DisclosureSection } from "@/components/site/DisclosureSection";
import {
  AnimatedCheck,
  BlurReveal,
  Counter,
  DnaStrand,
  FloatingElement,
  Heartbeat,
  ImageReveal,
  MouseParallax,
  OrbitRing,
  ParallaxElement,
  Reveal,
  RevealGroup,
  RevealItem,
  WellnessWave,
  ScrollProgress,
  SvgMorphPath,
  TextSplitReveal,
  ScrollLinkedScale,
  MedicalHeroAnimation,
  ScrollWipe,
  NumberTicker,
  GlowOrb,
  StickySection,
  PulsingGrid,
} from "@/components/site/motion-primitives";
import heroPatients from "@/assets/hero-patients.jpg";
import consultRoom from "@/assets/consult-room.jpg";
import labTesting from "@/assets/lab-testing.jpg";
import deliveryKit from "@/assets/delivery-kit.jpg";

const TITLE = "Royal Medical Center | TRT, HRT, Peptides & Medical Weight Loss";
const DESCRIPTION =
  "Personalized testosterone, hormone, peptide and GLP-1 weight loss programs from $67/mo. All-inclusive pricing with labs, medications and physician consults — no hidden fees.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Royal Medical Center",
          telephone: "1-800-625-3837",
          email: "info@rmmcenter.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1000 E Hillsboro Blvd, Suite 102",
            addressLocality: "Deerfield Beach",
            addressRegion: "FL",
            postalCode: "33441",
            addressCountry: "US",
          },
          sameAs: [
            "https://www.facebook.com/royalmedicalcenters/",
            "https://twitter.com/rmmcenter",
            "https://www.instagram.com/royalmedicalcenters",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const BENEFITS = [
  "More Energy",
  "Radiant Skin",
  "Restful Sleep",
  "Sexual Wellness",
  "Balanced Mind",
  "Thicker Hair",
];

const PRICING = [
  {
    name: "TRT / HRT Programs",
    price: 89,
    icon: HeartPulse,
    blurb: "Medical-grade hormone therapy for men and women, monitored end to end.",
    href: "https://royalmedicalcenters.com/testosterone-replacement-therapy/",
    featured: false,
  },
  {
    name: "Weight Loss (GLP-1)",
    price: 67,
    icon: Activity,
    blurb: "Physician-guided GLP-1 programs built around lasting, healthy results.",
    href: "https://royalmedicalcenters.com/weight-loss/",
    featured: true,
  },
  {
    name: "Peptide Therapy",
    price: 139,
    icon: FlaskConical,
    blurb: "Medically guided peptides that support recovery, sleep and cognition.",
    href: "https://royalmedicalcenters.com/all-programs/",
    featured: false,
  },
];

const CATEGORIES = [
  ["TRT — MEN", "https://royalmedicalcenters.com/testosterone-replacement-therapy/"],
  ["HRT — WOMEN", "https://royalmedicalcenters.com/hormone-testosterone-therapy-for-women/"],
  ["WEIGHT LOSS", "https://royalmedicalcenters.com/weight-loss/"],
  ["PEPTIDES", "https://royalmedicalcenters.com/all-programs/"],
] as const;

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Men's Testosterone Therapy",
    points: [
      "Restore testosterone levels naturally",
      "Boost energy, mental clarity, and confidence",
      "Improve mental clarity and emotional well-being",
    ],
  },
  {
    icon: Sparkles,
    title: "Women's Hormone Therapy",
    points: [
      "Alleviate symptoms of hormonal imbalance",
      "Improve sleep, mood, and overall vitality",
      "Customized estrogen and hormone balancing programs",
    ],
  },
  {
    icon: Activity,
    title: "Weight Loss",
    points: [
      "At Royal Medical Center, we specialize in helping men and women achieve lasting weight loss through personalized medical programs that restore energy, health, and confidence.",
    ],
  },
  {
    icon: Syringe,
    title: "Peptide Therapy",
    points: [
      "Support natural hormone function",
      "Improve sleep and cognition",
      "Explore medically guided peptide treatments",
    ],
  },
];

const STEPS = [
  {
    n: "01",
    title: "Initial Consultation",
    body: "Complete comprehensive panel of labs. Complete review of medical history. Complete physical examination. Physician's consultation.",
    image: labTesting,
    alt: "Hormone lab test vials and results on a clinic desk",
  },
  {
    n: "02",
    title: "Personalized Treatment Plan",
    body: "Our physicians will build a personalized program just for you, designed to target your specific goals, enhance your well-being, and deliver ongoing results through one-on-one care and expert monitoring.",
    image: consultRoom,
    alt: "Bright modern medical consultation room",
  },
  {
    n: "03",
    title: "Delivered To You",
    body: "Once the doctor has designed your customized program, and prescribed you the medication, the medication will be discreetly shipped from the pharmacy to your home or office.",
    image: deliveryKit,
    alt: "Discreet medication shipment box with vials and syringe",
  },
];

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* ---------------- Hero ---------------- */}
        <Hero />

        {/* ---------------- Programs & pricing ---------------- */}
        <ProgramShowcase />

        {/* ---------------- Why choose us ---------------- */}
        <WhyChooseSection />

        {/* ---------------- Optimal health / balance ---------------- */}
        <BalanceSection />

        {/* ---------------- Services ---------------- */}
        <ServicesSection />

        {/* ---------------- How it works ---------------- */}
        <HowItWorksSection />

        {/* ---------------- About Dr. Rodriguez ---------------- */}
        <AboutDoctorSection />

        {/* ---------------- Our commitment ---------------- */}
        <OurCommitment />

        {/* ---------------- Final CTA ---------------- */}
        <section><FinalCtaSection /></section>

        {/* ---------------- Disclaimers ---------------- */}
        <DisclosureSection />
      </main>
      <Footer />
    </div>
  );
}

function WhyUsSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="why-us" className="scroll-mt-24 relative bg-background" ref={targetRef}>
      {/* Background SvgMorphPath (using simple GlowOrb for this demo to simulate the organic shapes) */}
      <GlowOrb className="absolute top-1/2 left-1/4 w-[40rem] h-[40rem] -translate-y-1/2 opacity-20" />
      
      <div className="container-rmc py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start relative">
          
          {/* Sticky left side */}
          <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-16rem)] flex flex-col justify-center">
            <Reveal>
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight">
                Why Royal Medical Center?
              </h2>
              <p className="mt-6 text-muted-foreground text-lg max-w-md">
                We're committed to making your hormone therapy and weight management journey seamless, transparent, and affordable.
              </p>
            </Reveal>
            
            <div className="mt-12">
              <ScrollWipe direction="right">
                <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-lift)] max-w-md aspect-4/3">
                  <img
                    src={consultRoom}
                    alt="Bright, modern Royal Medical Center consultation room"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </ScrollWipe>
            </div>
          </div>

          {/* Scrolling right side (Benefits) */}
          <div className="space-y-12 lg:space-y-32 py-10 lg:py-[20vh]">
            
            <RevealItem y={40}>
              <div className="surface-card p-8 lg:p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-bl-full transition-transform duration-500 group-hover:scale-110" />
                <div className="flex items-center gap-4 mb-6">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand/10 text-brand relative">
                    <ShieldCheck className="h-7 w-7 relative z-10" />
                  </span>
                  <h3 className="text-2xl font-semibold">Low Price Guarantee</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We're confident in our competitive pricing. If you find another clinic that is equal to ours for a better price, 
                  <strong className="text-foreground"> we will beat their price by 25%</strong>. No questions asked.
                </p>
              </div>
            </RevealItem>

            <RevealItem y={40}>
              <div className="surface-card p-8 lg:p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-bl-full transition-transform duration-500 group-hover:scale-110" />
                <div className="flex items-center gap-4 mb-6">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand/10 text-brand relative">
                    <AnimatedCheck className="h-7 w-7 relative z-10" />
                  </span>
                  <h3 className="text-2xl font-semibold">No Hidden Fees</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our pricing is all-inclusive, covering everything you need. 
                  This includes your <strong className="text-foreground">lab testing, medications, physicals, and doctor consultations</strong>. 
                  No surprises, ever.
                </p>
              </div>
            </RevealItem>

            <RevealItem y={40}>
              <div className="surface-card p-8 lg:p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-bl-full transition-transform duration-500 group-hover:scale-110" />
                <div className="flex items-center gap-4 mb-6">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand/10 text-brand relative">
                    <Stethoscope className="h-7 w-7 relative z-10" />
                  </span>
                  <h3 className="text-2xl font-semibold">Licensed Physicians</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Your health is our top priority. All our programs are prescribed and monitored by 
                  <strong className="text-foreground"> licensed medical professionals</strong> who specialize in hormone and peptide therapies.
                </p>
              </div>
            </RevealItem>

          </div>

        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-28 relative">
      <div className="container-rmc">
        <Reveal className="max-w-2xl mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Hormone & Weight Management Services
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Physician-designed programs for men and women, backed by comprehensive labs and
            ongoing monitoring.
          </p>
          <WellnessWave className="mt-6 h-8 w-full max-w-md text-brand" />
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
          
          {/* Tabs */}
          <div className="flex flex-col gap-4">
            {SERVICES.map((s, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={s.title}
                  onClick={() => setActiveIdx(idx)}
                  className={`text-left p-6 rounded-[2rem] border transition-all duration-300 relative overflow-hidden group
                    ${isActive ? "border-brand bg-card shadow-[var(--shadow-brand)]" : "border-border bg-surface hover:border-brand/50 hover:bg-card opacity-70 grayscale-[0.5]"}
                  `}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-2xl transition-colors duration-300 ${isActive ? "bg-brand text-accent-foreground" : "bg-muted text-muted-foreground group-hover:text-brand"}`}
                    >
                      <motion.div animate={isActive ? { rotate: [0, 10, -10, 0] } : {}} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
                        <s.icon className="h-6 w-6" aria-hidden="true" />
                      </motion.div>
                    </span>
                    <h3 className={`text-xl font-semibold transition-colors ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                      {s.title}
                    </h3>
                  </div>
                  
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator" 
                      className="absolute inset-0 border-2 border-brand rounded-[2rem]" 
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Content Panel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="surface-card p-8 lg:p-12 h-full flex flex-col justify-center relative overflow-hidden"
              >
                {/* Decorative large icon background */}
                <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none">
                  {(() => {
                    const Icon = SERVICES[activeIdx].icon;
                    return <Icon className="w-96 h-96" />;
                  })()}
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold mb-8">
                  {SERVICES[activeIdx].title}
                </h3>
                
                <ul className="space-y-6">
                  {SERVICES[activeIdx].points.map((p, i) => (
                    <motion.li 
                      key={p} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex gap-4 items-start text-lg text-muted-foreground"
                    >
                      <AnimatedCheck className="h-7 w-7 shrink-0 text-brand mt-0.5" />
                      <span>{p}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-12">
                  <CtaLink href="https://royalmedicalcenters.com/contact/#form">Learn more</CtaLink>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-y border-border py-20 md:py-28 relative overflow-hidden"
      style={{ background: "var(--gradient-brand-subtle)" }}
    >
      {/* Subtle grid background */}
      <PulsingGrid className="absolute inset-0 opacity-10" />

      <div className="container-rmc relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">How Our Programs Work</h2>
          <p className="mt-3 text-muted-foreground">
            Your journey to optimal health is simple, transparent, and fully supported by our
            medical team.
          </p>
        </Reveal>

        <div className="mt-20 relative max-w-5xl mx-auto" ref={containerRef}>
          {/* Vertical scroll-linked line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-brand/10">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-brand origin-top"
              style={{ scaleY: scrollYProgress, height: "100%" }}
            />
          </div>

          <div className="space-y-24 lg:space-y-32">
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={step.title} className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                  {/* Center Node (Desktop) */}
                  <div className="hidden lg:grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 place-items-center rounded-full bg-card border-4 border-brand shadow-lg">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
                      className="text-xl font-bold text-brand"
                    >
                      {idx + 1}
                    </motion.div>
                  </div>

                  {/* Left content or Right content depending on odd/even */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:order-2 lg:pl-12'}`}>
                    <RevealItem x={isEven ? -40 : 40} y={0}>
                      <span className="font-display text-sm font-bold tracking-[0.3em] text-brand">
                        STEP {idx + 1}
                      </span>
                      <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{step.title}</h3>
                      <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{step.body}</p>
                    </RevealItem>
                  </div>

                  {/* Image side */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-2 lg:pl-12' : 'lg:text-right lg:pr-12'}`}>
                    <RevealItem x={isEven ? 40 : -40} y={0} delay={0.1}>
                      <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-[var(--shadow-soft)] aspect-4/3 group">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          src={step.image}
                          alt={step.alt}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </RevealItem>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.3} className="mt-20 text-center relative z-10">
          <CtaLink href="https://royalmedicalcenters.com/contact/#form" className="group">
            <span className="flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48 text-center border-t border-border">
      <PulsingGrid className="absolute inset-0 opacity-20" />
      <GlowOrb className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] opacity-30" />
      
      <div className="container-rmc relative z-10 flex flex-col items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand tracking-wide mb-8">
            <Sparkles className="w-4 h-4" /> Nationwide Telehealth
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl max-w-3xl leading-tight">
            Ready to feel like <span className="text-brand">yourself</span> again?
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Start with a comprehensive lab panel and a physician consultation. Transparent
            pricing from $67/mo, with your medication shipped discreetly to your door.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <CtaLink href="https://royalmedicalcenters.com/contact/#form">
            Start Your Transformation
          </CtaLink>
          <CtaLink href="tel:18006253837" variant="outline">
            Call 1-800-625-3837
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}


function AboutDoctorSection() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-36 relative overflow-hidden">
      <div className="container-rmc relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          
          <div className="relative h-full min-h-[400px] rounded-[2.5rem] bg-surface border border-border overflow-hidden">
            <SvgMorphPath className="absolute inset-0 text-brand opacity-10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <FloatingElement amplitude={15} duration={6}>
                <div className="relative grid place-items-center">
                  <div className="absolute inset-0 bg-brand/20 blur-2xl rounded-full" />
                  <div className="relative h-32 w-32 rounded-full border border-brand/30 bg-card shadow-[0_8px_30px_rgba(var(--brand-rgb),0.15)] grid place-items-center mb-6">
                    <span className="font-display text-4xl font-bold text-foreground">
                      <Counter to={20} suffix="+" />
                    </span>
                  </div>
                </div>
              </FloatingElement>
              <Reveal delay={0.2}>
                <h3 className="text-xl font-bold tracking-tight">Years of Excellence</h3>
                <p className="mt-2 text-sm text-muted-foreground uppercase tracking-widest font-medium">
                  Pioneering HRT
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:pl-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold tracking-wide mb-8">
                <BadgeCheck className="w-4 h-4 text-brand" /> Trusted Authority
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight">
                DR. RODRIGUEZ PIONEERED THE HORMONE REPLACEMENT THERAPY INDUSTRY.
              </h2>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Dr. Rodriguez helped create an easy-to-understand payment plan, an all-inclusive program that has been very successful for our patients. He has also helped develop medications in collaboration with pharmacies nationwide, enabling men and women to lead better lives.
              </p>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function CommitmentSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 bg-foreground text-background">
      <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
        <GlowOrb className="absolute -top-40 -right-40 w-[50rem] h-[50rem] opacity-50" />
        <GlowOrb className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] opacity-30 text-blue-500" />
      </div>

      <div className="container-rmc relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-2 text-sm font-semibold text-brand-foreground tracking-wide mb-6 backdrop-blur">
              <ShieldCheck className="w-4 h-4" /> The Royal Promise
            </div>
            <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-background">Our Commitment</h2>
            <p className="mt-6 text-lg text-background/70 md:text-xl">
              We encourage prospective patients to research their options and make informed
              healthcare decisions. Royal Medical Center provides personalized Hormone Replacement
              Therapy Programs with transparent competitive pricing and licensed medical
              supervision.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {[
            {
              icon: Activity,
              title: "Monitor Patient's Progress",
              body: "We closely monitor each patient's progress—whether in hormone therapy or weight loss programs—to ensure results are effective and levels reach their optimal range.",
            },
            {
              icon: Package,
              title: "No Fine Print",
              body: "We tell patients upfront what our programs cost. Unlike other clinics, there are no hidden costs or additional fees.",
            },
          ].map((c) => (
            <RevealItem key={c.title}>
              <MouseParallax strength={0.03} className="h-full">
                <article className="relative h-full overflow-hidden rounded-[2.5rem] border border-background/10 bg-background/5 p-10 backdrop-blur-xl transition-all duration-300 hover:bg-background/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="inline-grid h-16 w-16 place-items-center rounded-2xl bg-brand/20 shadow-[0_0_20px_rgba(var(--brand-rgb),0.3)]">
                      <c.icon className="h-8 w-8 text-brand-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="mt-8 text-2xl font-bold text-background">{c.title}</h3>
                    <p className="mt-4 text-background/70 leading-relaxed text-lg">{c.body}</p>
                  </div>
                </article>
              </MouseParallax>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
  );
}
