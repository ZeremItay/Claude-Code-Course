"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const codeLines = [
  "const website = buildFor(yourBusiness);",
  "await deploy({ speed: 'blazing' });",
  "return { leads: Infinity, clients: '✓' };",
  "// performance.now() → 100ms",
  "export default function Success() {",
  "  const roi = calculateROI(investment);",
  "  return roi > expectations;",
  "}",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="noise-overlay scanlines relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="bg-grid pointer-events-none absolute inset-0" />

      {/* Large gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as const }}
          className="absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full bg-neon-pink blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" as const }}
          className="absolute -bottom-32 left-1/4 h-[600px] w-[600px] rounded-full bg-neon-purple blur-[180px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" as const }}
          className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-pink blur-[120px]"
        />
      </div>

      {/* Floating code lines in background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.04]">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + i * 0.2, duration: 1 }}
            className="absolute font-mono text-sm text-foreground whitespace-nowrap"
            style={{
              top: `${12 + i * 10}%`,
              left: i % 2 === 0 ? "5%" : "55%",
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* Terminal-style tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-neon-pink" />
          <span className="font-mono text-xs text-muted-foreground">
            status: available for hire
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.4, 0.25, 1] as const,
          }}
          className="mb-6 text-5xl font-bold leading-[1.15] tracking-tight md:text-6xl lg:text-7xl"
        >
          הקוד שלי הופך את
          <br />
          <span className="gradient-text">העסק שלך</span> למכונת לידים
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          אני{" "}
          <span className="font-medium text-foreground">איתי זרם</span> —
          מפתח אתרים שמבין עסק. אני בונה אתרים מהירים, יפים, וממוקדי
          תוצאות שמביאים לקוחות ומגדילים הכנסות.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a href="#contact">
            <Button
              size="lg"
              className="neon-glow bg-gradient-to-l from-neon-pink to-neon-purple px-8 py-6 text-base font-bold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(233,30,140,0.4)]"
            >
              <span className="font-mono me-2 text-white/70">{"{"}</span>
              בואו נדבר
              <span className="font-mono ms-2 text-white/70">{"}"}</span>
            </Button>
          </a>
          <a href="#services">
            <Button
              variant="outline"
              size="lg"
              className="border-border bg-transparent px-8 py-6 text-base text-muted-foreground transition-all hover:border-neon-purple/30 hover:text-foreground"
            >
              השירותים שלי
              <ArrowDown className="ms-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" as const }}
          className="glow-line mx-auto mt-20 max-w-xs"
        />
      </div>
    </section>
  );
}
