"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "ראשי", href: "#hero" },
  { label: "למה אני", href: "#value" },
  { label: "שירותים", href: "#services" },
  { label: "צור קשר", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;

      const headerOffset = 80;
      const elementPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setMobileOpen(false);
    },
    []
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.04] bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="group flex items-center gap-1.5"
        >
          <span className="font-mono text-xs text-neon-purple/60 transition-colors group-hover:text-neon-purple">
            {"<"}
          </span>
          <span className="text-base font-bold tracking-tight text-foreground">
            איתי זרם
          </span>
          <span className="font-mono text-xs text-neon-purple/60 transition-colors group-hover:text-neon-purple">
            {"/>"}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`relative rounded-md px-4 py-2 text-sm transition-all duration-300 ${
                activeSection === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-x-1 -bottom-[17px] h-[2px] bg-gradient-to-r from-neon-pink to-neon-purple"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:border-neon-pink/30 md:hidden"
          aria-label={mobileOpen ? "סגור תפריט" : "פתח תפריט"}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            className="overflow-hidden border-t border-white/[0.04] bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`rounded-lg px-4 py-3 text-base transition-colors ${
                    activeSection === link.href
                      ? "bg-surface-elevated text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
