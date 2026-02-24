"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-neon-pink/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-neon-purple/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Code-style tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block"
        >
          <span className="font-mono text-sm text-neon-purple">
            {"<developer>"}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
        >
          הקוד שלי הופך את{" "}
          <span className="gradient-text">העסק שלך</span>
          <br />
          למכונת לידים
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          אני איתי זרם — מפתח אתרים שמבין עסק. אני בונה אתרים מהירים, יפים,
          וממוקדי תוצאות שמביאים לקוחות ומגדילים הכנסות.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
        >
          <a href="#contact">
            <Button
              size="lg"
              className="bg-gradient-to-l from-neon-pink to-neon-purple px-8 py-6 text-lg font-bold text-white hover:opacity-90"
            >
              <span className="font-mono me-2">{"{ "}</span>
              בואו נדבר
              <span className="font-mono ms-2">{" }"}</span>
              <ArrowDown className="ms-2 h-5 w-5 animate-bounce" />
            </Button>
          </a>
        </motion.div>

        {/* Closing code tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-8 inline-block"
        >
          <span className="font-mono text-sm text-neon-purple">
            {"</developer>"}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
