import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, StaggerContainer, StaggerItem, WellnessWave } from "@/components/site/motion-primitives";

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
    <footer className="border-t border-border bg-secondary/50">
      <WellnessWave className="container-rmc h-10 w-full text-brand/40" />
      <div className="container-rmc grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <Reveal>
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <address className="mt-4 space-y-3 text-sm text-muted-foreground not-italic">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
              1000 E Hillsboro Blvd, Suite 102
              <br />
              Deerfield Beach, FL 33441
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-foreground" aria-hidden="true" />
              <a className="hover:text-foreground" href="tel:18006253837">1-800-625-3837</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-foreground" aria-hidden="true" />
              <a className="hover:text-foreground" href="mailto:info@rmmcenter.com">info@rmmcenter.com</a>
            </p>
            <p className="pl-6">
              <a className="hover:text-foreground" href="mailto:jianna@rmmcenter.com">jianna@rmmcenter.com</a>
            </p>
          </address>

          <div className="mt-5 flex gap-2">
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
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 380, damping: 20 }}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card hover:border-brand"
                >
                  <I className="h-4 w-4" aria-hidden="true" />
                </motion.a>
              );
            })}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Dispensing Pharmacy:{" "}
            <a
              className="font-medium text-foreground underline underline-offset-4"
              href="https://www.belmarpharmasolutions.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Belmar Pharma Solutions
            </a>
          </p>
        </Reveal>

        <nav aria-label="Important links">
          <h2 className="text-lg font-semibold">Important Links</h2>
          <StaggerContainer className="mt-4 space-y-2.5 text-sm text-muted-foreground" stagger={0.04}>
            {IMPORTANT.map(([label, href]) => (
              <StaggerItem key={label} y={10} scale={1}>
                <a className="transition-colors hover:text-foreground" href={href}>
                  {label}
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </nav>

        <nav aria-label="Program links" className="lg:col-span-2">
          <h2 className="text-lg font-semibold">Programs</h2>
          <StaggerContainer className="mt-4 grid gap-2.5 text-sm text-muted-foreground sm:grid-cols-2" stagger={0.03}>
            {PROGRAMS.map(([label, href]) => (
              <StaggerItem key={label} y={10} scale={1}>
                <a className="transition-colors hover:text-foreground" href={href}>
                  {label}
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </nav>
      </div>

      <div className="border-t border-border py-6">
        <p className="container-rmc text-center text-xs text-muted-foreground">
          Copyright © 2026 Royal Medical Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
