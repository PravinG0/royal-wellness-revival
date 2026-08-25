import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
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
import { Footer } from "@/components/site/Footer";
import {
  AnimatedCheck,
  Counter,
  Heartbeat,
  Reveal,
  RevealGroup,
  RevealItem,
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
      "Personalized medical weight loss programs",
      "For men and women seeking lasting results",
      "Restore energy, health, and confidence",
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

const DISCLAIMERS = [
  "The FDA does not verify the safety, effectiveness, or quality of compounded drugs offered at our clinic.",
  "As an alternative to FDA-approved branded products, where appropriate, a provider may prescribe a compounded drug, which is prepared by a state-licensed sterile compounding pharmacy partner. Although compounded drugs are permitted to be prescribed under federal law, they are not FDA-approved and do not undergo safety, effectiveness, or manufacturing review.",
  "Claims of personalization and potential reduction in side effects are based on the ability of compounding to customize treatment for individual needs. These benefits are not guaranteed. Side effects may still occur and vary by patient.",
  "Compounded medications offered through this service are prescribed on an individual basis by a licensed healthcare provider. While some patients may experience weight loss or other benefits, results are not guaranteed. Outcomes depend on a variety of factors including, but not limited to, patient health status, genetics, lifestyle, diet, and exercise. Neither the prescribing provider nor the pharmacy makes any promise or warranty of specific results.",
];

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* ---------------- Hero ---------------- */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-32 h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="container-rmc grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium tracking-wide">
                  <span className="relative flex h-2 w-2">
                    <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                  </span>
                  Licensed physicians · Nationwide telehealth
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="mt-6 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
                  Royal Medical Center
                  <span className="mt-3 block text-gradient-brand">Personalized to you</span>
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
                  Competitive pricing for Testosterone Therapy, Hormone Therapy, Weight Management,
                  and Peptide programs — personalized and designed around your individual health
                  needs.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {BENEFITS.map((b) => (
                    <li
                      key={b}
                      className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <CtaLink href="https://royalmedicalcenters.com/contact/#form">Get Started</CtaLink>
                  <CtaLink href="#programs" variant="outline">
                    View Programs & Pricing
                  </CtaLink>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                  {[
                    { label: "Programs from", value: <Counter to={67} prefix="$" suffix="/mo" /> },
                    { label: "Price beat guarantee", value: <Counter to={25} suffix="%" /> },
                    { label: "Hidden fees", value: <Counter to={0} /> },
                  ].map((s, i) => (
                    <div key={i}>
                      <dt className="order-2 text-xs text-muted-foreground">{s.label}</dt>
                      <dd className="font-display text-2xl font-bold sm:text-3xl">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal delay={0.15} scale={0.96} className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-lift)]">
                <img
                  src={heroPatients}
                  alt="Healthy, energized man and woman after hormone therapy at Royal Medical Center"
                  width={1280}
                  height={1280}
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border bg-card/90 p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-brand" aria-hidden="true" />
                    <p className="text-sm font-medium">
                      All-inclusive care: labs, medications, physicals & doctor consults.
                    </p>
                  </div>
                  <Heartbeat className="mt-3 h-6 w-full text-brand" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- Programs & pricing ---------------- */}
        <section id="programs" className="scroll-mt-24 border-y border-border bg-surface py-20 md:py-28">
          <div className="container-rmc">
            <Reveal className="max-w-2xl">
              <h2 className="text-3xl font-bold sm:text-4xl">Programs & Pricing</h2>
              <p className="mt-3 text-muted-foreground">
                Transparent, all-inclusive monthly pricing. Everything you need is covered — no
                surprises, ever.
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
              {PRICING.map((p) => (
                <RevealItem key={p.name}>
                  <article
                    className={
                      "surface-card group h-full p-7 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)] " +
                      (p.featured ? "ring-2 ring-brand" : "")
                    }
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="grid h-12 w-12 place-items-center rounded-2xl"
                        style={{ background: "var(--brand-soft)" }}
                      >
                        <p.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      {p.featured && (
                        <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-accent-foreground">
                          Most popular
                        </span>
                      )}
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
                    <p className="mt-6 font-display text-4xl font-bold">
                      <Counter to={p.price} prefix="$" />
                      <span className="text-base font-medium text-muted-foreground">/mo</span>
                    </p>
                    <p className="text-xs text-muted-foreground">Starting price</p>
                    <a
                      href={p.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 transition-all hover:gap-3 hover:underline"
                    >
                      Explore program
                      <span aria-hidden="true">→</span>
                    </a>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.1} className="mt-8">
              <div
                className="flex flex-col items-start gap-4 rounded-3xl p-7 sm:flex-row sm:items-center sm:justify-between"
                style={{ background: "var(--gradient-brand)" }}
              >
                <div className="flex items-start gap-3 text-accent-foreground">
                  <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0" aria-hidden="true" />
                  <p className="max-w-2xl text-sm font-medium sm:text-base">
                    <strong>Low Price Guarantee:</strong> If you find another clinic that is equal
                    to ours for a better price, we will beat their price by 25%.
                  </p>
                </div>
                <CtaLink href="https://royalmedicalcenters.com/contact/#form" variant="outline">
                  Claim your price
                </CtaLink>
              </div>
            </Reveal>

            <RevealGroup className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {CATEGORIES.map(([label, href]) => (
                <RevealItem key={label}>
                  <a
                    href={href}
                    className="surface-card flex items-center justify-between px-5 py-4 text-sm font-semibold tracking-wide hover:-translate-y-1 hover:border-brand"
                  >
                    {label}
                    <span aria-hidden="true">→</span>
                  </a>
                </RevealItem>
              ))}
            </RevealGroup>

            <p className="mt-8 text-xs text-muted-foreground italic">
              Results may vary for each individual and must be medically necessary. Consult your
              prescriber to discuss the best treatment options for you.
            </p>
          </div>
        </section>

        {/* ---------------- Why choose us ---------------- */}
        <section id="why-us" className="scroll-mt-24 py-20 md:py-28">
          <div className="container-rmc grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <h2 className="text-3xl font-bold sm:text-4xl">Why Royal Medical Center?</h2>
              </Reveal>
              <div className="mt-8 space-y-5">
                <Reveal delay={0.05}>
                  <div className="surface-card p-6">
                    <h3 className="text-lg font-semibold">Low Price Guarantee</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We'll beat any competitor's price by 25%.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="surface-card p-6">
                    <h3 className="text-lg font-semibold">No Hidden Fees</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Our pricing is all-inclusive, covering everything you need, including lab
                      testing, medications, physicals and Dr. consultations — no surprises, ever.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={0.1} x={30} y={0}>
              <div className="relative overflow-hidden rounded-[2rem] border border-border">
                <img
                  src={consultRoom}
                  alt="Bright, modern Royal Medical Center consultation room"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- Optimal health / balance ---------------- */}
        <section className="border-y border-border bg-surface py-20 md:py-28">
          <div className="container-rmc grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="text-3xl font-bold sm:text-4xl">Optimal Health Starts With Balance</h2>
              <p className="mt-4 text-muted-foreground">
                Our hormone therapy programs are customized to your unique needs, ensuring you feel
                your best today and for years to come. We don't believe in one-size-fits-all
                treatments.
              </p>
              <p className="mt-4 text-sm text-muted-foreground italic">
                Your health journey is personal. We're with you every step of the way.
              </p>
            </Reveal>

            <RevealGroup className="grid gap-4 sm:grid-cols-2">
              {[
                "Comprehensive Lab Testing",
                "Ongoing Monitoring",
                "Medical-Grade Hormone Therapy",
                "Guidance from Professionals",
              ].map((item) => (
                <RevealItem key={item}>
                  <div className="surface-card flex items-center gap-3 p-5 hover:-translate-y-1">
                    <AnimatedCheck className="h-7 w-7 shrink-0" />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ---------------- Services ---------------- */}
        <section id="services" className="scroll-mt-24 py-20 md:py-28">
          <div className="container-rmc">
            <Reveal className="max-w-2xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Hormone & Weight Management Services
              </h2>
              <p className="mt-3 text-muted-foreground">
                Physician-designed programs for men and women, backed by comprehensive labs and
                ongoing monitoring.
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
              {SERVICES.map((s) => (
                <RevealItem key={s.title}>
                  <article className="surface-card h-full p-7 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                    <span
                      className="grid h-12 w-12 place-items-center rounded-2xl"
                      style={{ background: "var(--brand-soft)" }}
                    >
                      <s.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                    <ul className="mt-4 space-y-3">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                          <AnimatedCheck className="h-5 w-5 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ---------------- How it works ---------------- */}
        <section
          id="how-it-works"
          className="scroll-mt-24 border-y border-border bg-surface py-20 md:py-28"
        >
          <div className="container-rmc">
            <Reveal className="max-w-2xl">
              <h2 className="text-3xl font-bold sm:text-4xl">How Our Programs Work</h2>
              <Heartbeat className="mt-4 h-8 w-56 text-brand" />
            </Reveal>

            <div className="mt-14 space-y-16">
              {STEPS.map((step, i) => (
                <Reveal key={step.n} delay={0.05}>
                  <div
                    className={
                      "grid items-center gap-10 lg:grid-cols-2 " +
                      (i % 2 === 1 ? "lg:[&>figure]:order-first" : "")
                    }
                  >
                    <div>
                      <span className="font-display text-sm font-bold tracking-[0.3em] text-muted-foreground">
                        STEP {step.n}
                      </span>
                      <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{step.title}</h3>
                      <p className="mt-4 text-muted-foreground">{step.body}</p>
                    </div>
                    <figure className="relative overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-soft)]">
                      <img
                        src={step.image}
                        alt={step.alt}
                        loading="lazy"
                        width={1280}
                        height={960}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </figure>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14 text-center">
              <CtaLink href="https://royalmedicalcenters.com/peptide-inquiry/">I'M READY!</CtaLink>
            </Reveal>
          </div>
        </section>

        {/* ---------------- About Dr. Rodriguez ---------------- */}
        <section id="about" className="scroll-mt-24 py-20 md:py-28">
          <div className="container-rmc grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="relative grid aspect-square place-items-center overflow-hidden rounded-[2rem] border border-border bg-surface">
                <svg viewBox="0 0 200 200" className="spin-slow h-64 w-64 text-brand" aria-hidden="true">
                  <circle
                    cx="100"
                    cy="100"
                    r="86"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="6 12"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute grid place-items-center text-center">
                  <Users className="h-10 w-10 text-brand" aria-hidden="true" />
                  <p className="mt-3 font-display text-4xl font-bold">
                    <Counter to={20} suffix="+" />
                  </p>
                  <p className="text-sm text-muted-foreground">Years pioneering HRT</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl font-bold uppercase sm:text-4xl">
                Dr. Rodriguez pioneered the hormone replacement therapy industry.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Dr. Rodriguez helped create an easy-to-understand payment plan, an all-inclusive
                program that has been very successful for our patients. He has also helped develop
                medications in collaboration with pharmacies nationwide, enabling men and women to
                lead better lives.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------------- Our commitment ---------------- */}
        <section className="border-y border-border bg-surface py-20 md:py-28">
          <div className="container-rmc">
            <Reveal className="max-w-3xl">
              <h2 className="text-3xl font-bold sm:text-4xl">Our Commitment</h2>
              <p className="mt-4 text-muted-foreground">
                We encourage prospective patients to research their options and make informed
                healthcare decisions. Royal Medical Center provides personalized Hormone Replacement
                Therapy Programs with transparent competitive pricing and licensed medical
                supervision.
              </p>
            </Reveal>

            <RevealGroup className="mt-10 grid gap-6 md:grid-cols-2">
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
                  <article className="surface-card h-full p-7 hover:-translate-y-1.5">
                    <span
                      className="grid h-12 w-12 place-items-center rounded-2xl"
                      style={{ background: "var(--brand-soft)" }}
                    >
                      <c.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ---------------- Final CTA ---------------- */}
        <section className="py-20 md:py-28">
          <div className="container-rmc">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-10 text-center shadow-[var(--shadow-lift)] md:p-16">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
                  style={{ background: "var(--gradient-brand)" }}
                />
                <h2 className="relative text-3xl font-bold sm:text-4xl">
                  Ready to feel like yourself again?
                </h2>
                <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
                  Start with a comprehensive lab panel and a physician consultation. Transparent
                  pricing from $67/mo, with your medication shipped discreetly to your door.
                </p>
                <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                  <CtaLink href="https://royalmedicalcenters.com/contact/#form">Get Started</CtaLink>
                  <CtaLink href="tel:18006253837" variant="outline">
                    Call 1-800-625-3837
                  </CtaLink>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- Disclaimers ---------------- */}
        <section aria-labelledby="disclaimers" className="border-t border-border bg-surface py-14">
          <div className="container-rmc">
            <h2 id="disclaimers" className="text-lg font-semibold">
              FDA & Compounding Disclaimers
            </h2>
            <ol className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
              {DISCLAIMERS.map((d, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-semibold text-foreground">{i + 1}.</span>
                  <span>{d}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
