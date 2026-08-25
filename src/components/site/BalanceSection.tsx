import { Activity, FlaskConical, ShieldCheck, Stethoscope, HeartPulse } from "lucide-react";
import { BalanceVisual } from "./BalanceVisual";
import { Reveal, RevealGroup, RevealItem } from "./motion-primitives";

const features = [
  {
    number: "01",
    icon: FlaskConical,
    title: "Comprehensive Lab Testing",
    text: "Understand your individual health profile through comprehensive testing.",
  },
  {
    number: "02",
    icon: Activity,
    title: "Ongoing Monitoring",
    text: "Your progress is monitored throughout your treatment journey.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Medical-Grade Hormone Therapy",
    text: "Receive medically guided hormone therapy designed around your individual needs.",
  },
  {
    number: "04",
    icon: Stethoscope,
    title: "Guidance from Professionals",
    text: "Get professional guidance throughout your personalized health journey.",
  },
];

export function BalanceSection() {
  return (
    <section
      aria-labelledby="balance-heading"
      className="relative overflow-hidden bg-surface py-[120px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage: "radial-gradient(80% 60% at 50% 40%, black, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-[46%_54%_38%_62%/58%_42%_58%_42%] blur-3xl animate-drift"
        style={{ background: "var(--gradient-halo)", opacity: 0.5 }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal delay={0.1} className="order-2 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center">
          <BalanceVisual />
        </Reveal>

        <div className="order-1 lg:col-start-2 lg:row-start-1">
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand tracking-wide mb-5">
              <HeartPulse className="w-4 h-4" /> Customized Care
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2
              id="balance-heading"
              className="mt-5 font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl"
            >
              Optimal Health Starts With{" "}
              <span className="text-brand relative inline-block">
                Balance
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-brand/30"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 Q50,20 100,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our hormone therapy programs are customized to your unique needs, ensuring you feel your
              best today and for years to come. We don&rsquo;t believe in one-size-fits-all treatments.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="order-3 lg:col-start-2 lg:row-start-2 lg:-mt-4">
          <ul className="flex flex-col">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <RevealItem
                  key={feature.number}
                  className="group border-b border-border/70 last:border-b-0"
                >
                  <div className="relative flex gap-5 py-6 transition-transform duration-500 ease-out group-hover:translate-x-2 group-focus-within:translate-x-2">
                    <span className="mt-0.5 font-display text-2xl tabular-nums text-muted-foreground/60 transition-colors duration-500 group-hover:text-brand group-focus-within:text-brand">
                      {feature.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <Icon
                          aria-hidden="true"
                          strokeWidth={1.5}
                          className="size-[18px] text-brand transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:scale-110"
                        />
                        <h3 className="text-base font-semibold tracking-tight text-foreground">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                        {feature.text}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-px w-0 bg-brand transition-all duration-700 ease-out group-hover:w-full group-focus-within:w-full"
                    />
                  </div>
                </RevealItem>
              );
            })}
          </ul>
          <Reveal delay={0.4} className="mt-8 text-sm italic text-muted-foreground">
            *Your health journey is personal. We're with you every step of the way.*
          </Reveal>
        </RevealGroup>
      </div>
    </section>
  );
}
