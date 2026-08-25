import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-md" : "",
      )}
      style={{
        backgroundColor: scrolled ? "color-mix(in oklab, var(--background) 82%, transparent)" : "transparent",
        boxShadow: scrolled ? "var(--shadow-soft)" : "none",
      }}
    >
      <div className="hidden border-b border-border/70 bg-secondary/60 py-1.5 text-xs text-muted-foreground md:block">
        <div className="container-rmc flex items-center justify-between">
          <p>Licensed medical supervision · Nationwide telehealth</p>
          <div className="flex items-center gap-5">
            <a className="transition-colors hover:text-foreground" href="tel:18006253837">
              1-800-625-3837
            </a>
            <a className="transition-colors hover:text-foreground" href="mailto:info@rmmcenter.com">
              info@rmmcenter.com
            </a>
          </div>
        </div>
      </div>

      <nav className="container-rmc flex h-18 items-center justify-between py-3" aria-label="Main">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl" style={{ background: "var(--gradient-brand)" }}>
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent-foreground" aria-hidden="true">
              <path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z" fill="currentColor" />
            </svg>
          </span>
          <span className="text-[15px] leading-tight font-semibold tracking-tight">
            Royal Medical<span className="block text-[11px] font-medium tracking-[0.22em] text-muted-foreground uppercase">Center</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:18006253837"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> Call
          </a>
          <CtaLink href="https://royalmedicalcenters.com/contact/#form">Get Started</CtaLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-xl border border-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <ul className="container-rmc space-y-1 py-4">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <CtaLink href="https://royalmedicalcenters.com/contact/#form" full>
                  Get Started
                </CtaLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function CtaLink({
  href,
  children,
  full,
  variant = "brand",
}: {
  href: string;
  children: React.ReactNode;
  full?: boolean;
  variant?: "brand" | "outline";
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        full && "w-full",
        variant === "brand"
          ? "text-accent-foreground"
          : "border border-border bg-card text-foreground hover:bg-secondary",
      )}
      style={variant === "brand" ? { background: "var(--gradient-brand)", boxShadow: "var(--shadow-brand)" } : undefined}
    >
      <span className="relative z-10">{children}</span>
      {variant === "brand" && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -translate-x-full bg-white/35 transition-transform duration-500 group-hover:translate-x-full"
        />
      )}
    </motion.a>
  );
}
