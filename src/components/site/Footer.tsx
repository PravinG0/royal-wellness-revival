import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, ArrowRight, Activity } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, StaggerContainer, StaggerItem, GlowOrb } from "@/components/site/motion-primitives";

const IMPORTANT = [
  ["Home", "https://royalmedicalcenters.com/"],
  ["About", "https://royalmedicalcenters.com/about/"],
  ["Contact Us", "https://royalmedicalcenters.com/contact/"],
  ["Men FAQ", "https://royalmedicalcenters.com/mens-faqs/"],
  ["Women FAQ", "https://royalmedicalcenters.com/women-faqs/"],
  ["Before/After", "https://royalmedicalcenters.com/before-after/"],
  ["Blog", "https://royalmedicalcenters.com/blog/"],
  ["Privacy Policy", "https://royalmedicalcenters.com/privacy-policy/"],
  ["HIPAA Privacy Policy", "https://royalmedicalcenters.com/hipaa-privacy-policy-statement/"],
  ["Compounding Disclaimer", "https://royalmedicalcenters.com/compounding-disclaimers/"],
] as const;

const PROGRAMS = [
  ["TRT for Men", "https://royalmedicalcenters.com/testosterone-replacement-therapy/"],
  ["HRT for Women", "https://royalmedicalcenters.com/hormone-testosterone-therapy-for-women/"],
  ["Sexual Health", "https://royalmedicalcenters.com/erectile-dysfunction/"],
  ["Weight Loss", "https://royalmedicalcenters.com/weight-loss/"],
  ["Peptides", "https://royalmedicalcenters.com/shop/"],
  ["Manopause & Andropause", "https://royalmedicalcenters.com/manopause-andropause/"],
  ["Non-Menopausal Therapy for Women", "https://royalmedicalcenters.com/non-menopausal-therapy-for-women/"],
  ["Menopausal Therapy for Women", "https://royalmedicalcenters.com/menopausal-therapy-for-women/"],
  ["Estrogen Therapy", "https://royalmedicalcenters.com/estrogen-therapy/"],
  ["Pregnenolone", "https://royalmedicalcenters.com/pregnenolone/"],
  ["Progesterone", "https://royalmedicalcenters.com/progesterone/"],
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/10 bg-foreground text-background pt-24 pb-12">
      <div className="absolute inset-0 opacity-30 mix-blend-screen pointer-events-none">
        <GlowOrb className="absolute -top-40 -left-40 w-[40rem] h-[40rem] opacity-40 text-brand" />
        <GlowOrb className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] opacity-20 text-blue-500" />
      </div>

      <div className="container-rmc relative z-10 grid gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
             <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/20 shadow-[0_0_20px_rgba(var(--brand-rgb),0.3)]">
                <Activity className="h-6 w-6 text-brand-foreground" aria-hidden="true" />
             </div>
             <span className="text-xl font-bold tracking-tight">Royal Medical<br/><span className="text-xs tracking-[0.3em] uppercase text-background/60">Center</span></span>
          </div>
          
          <address className="space-y-4 text-sm text-background/70 not-italic leading-relaxed">
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-foreground" aria-hidden="true" />
              <span>
                1000 E Hillsboro Blvd, Suite 102<br />
                Deerfield Beach, FL 33441
              </span>
            </p>
            <p className="flex items-center gap-3 group">
              <Phone className="h-4 w-4 text-brand-foreground transition-transform group-hover:scale-110" aria-hidden="true" />
              <a className="transition-colors hover:text-white" href="tel:18006253837">1-800-625-3837</a>
            </p>
            <p className="flex items-center gap-3 group">
              <Mail className="h-4 w-4 text-brand-foreground transition-transform group-hover:scale-110" aria-hidden="true" />
              <span>
                <a className="transition-colors hover:text-white" href="mailto:info@rmmcenter.com">info@rmmcenter.com</a>
                {" "} (or <a className="transition-colors hover:text-white" href="mailto:jianna@rmmcenter.com">jianna@rmmcenter.com</a>)
              </span>
            </p>
          </address>

          <div className="mt-8 flex gap-3">
            {[
              [Facebook, "Facebook", "https://www.facebook.com/royalmedicalcenters/"],
              [Twitter, "X (Twitter)", "https://twitter.com/rmmcenter"],
              [Instagram, "Instagram", "https://www.instagram.com/royalmedicalcenters"],
            ].map(([Icon, label, href]) => {
              const I = Icon as typeof Facebook;
              return (
                <motion.a
                  key={label as string}
                  href={href as string}
                  aria-label={label as string}
                  target="_blank"
                  rel="noreferrer noopener"
                  whileHover={{ y: -4, scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="grid h-12 w-12 place-items-center rounded-full border border-background/20 bg-background/5 text-background/80 hover:text-white hover:border-background/40 backdrop-blur"
                >
                  <I className="h-5 w-5" aria-hidden="true" />
                </motion.a>
              );
            })}
          </div>
        </Reveal>

        <nav aria-label="Important links" className="lg:pl-8">
          <Reveal>
            <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-foreground" />
              Important Links
            </h2>
          </Reveal>
          <StaggerContainer className="space-y-3 text-sm" stagger={0.05}>
            {IMPORTANT.map(([label, href]) => (
              <StaggerItem key={href}>
                <a
                  href={href}
                  className="group flex items-center gap-2 text-background/60 transition-colors hover:text-white"
                >
                  <ArrowRight className="h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-brand-foreground" aria-hidden="true" />
                  <span className="-translate-x-5 transition-transform duration-300 group-hover:translate-x-0">{label}</span>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </nav>

        <nav aria-label="Programs & Services" className="lg:col-span-2 lg:pl-12">
          <Reveal>
            <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-foreground" />
              Programs & Services
            </h2>
          </Reveal>
          <StaggerContainer
            className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2"
            stagger={0.03}
          >
            {PROGRAMS.map(([label, href]) => (
              <StaggerItem key={href}>
                <a
                  href={href}
                  className="group flex items-center gap-2 text-background/60 transition-colors hover:text-white"
                >
                  <ArrowRight className="h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-brand-foreground" aria-hidden="true" />
                  <span className="-translate-x-5 transition-transform duration-300 group-hover:translate-x-0">{label}</span>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </nav>
      </div>

      <Reveal delay={0.4}>
        <div className="container-rmc mt-24 border-t border-background/10 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-background/50 relative z-10">
          <p>© {new Date().getFullYear()} Royal Medical Center. All rights reserved.</p>
          <p>
            Dispensing Pharmacy:{" "}
            <a
              className="text-white hover:underline hover:text-brand-foreground transition-colors"
              href="https://www.belmarpharmasolutions.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Belmar Pharma Solutions
            </a>
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
