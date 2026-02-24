"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Zap, TrendingUp, Shield, Clock } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    number: "01",
    title: "ממוקד תוצאות",
    text: "אתרים שמביאים תוצאות עסקיות מדידות — לא רק \"יפים\"",
  },
  {
    icon: Zap,
    number: "02",
    title: "ביצועים מהירים",
    text: "ביצועים מהירים במיוחד שמשפרים חווית משתמש ודירוג ב-Google",
  },
  {
    icon: Shield,
    number: "03",
    title: "קוד מאובטח",
    text: "קוד נקי ומאובטח שקל לתחזק ולהרחיב בעתיד",
  },
  {
    icon: Clock,
    number: "04",
    title: "תהליך שקוף",
    text: "תהליך עבודה שקוף עם לוחות זמנים ברורים — בלי הפתעות",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ValueProposition() {
  return (
    <section id="value" className="relative px-4 py-28">
      {/* Section separator */}
      <div className="glow-line mx-auto mb-20 max-w-xs" />

      <div className="mx-auto max-w-5xl">
        <SectionWrapper>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-neon-purple">
              {"// why_me"}
            </span>
            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              למה <span className="gradient-text">לעבוד איתי</span>?
            </h2>
            <p className="mx-auto max-w-xl text-base text-muted-foreground md:text-lg">
              כשמפתח מבין את העסק שלך — התוצאות מדברות בעד עצמן.
              <br className="hidden md:block" />
              אני לא רק כותב קוד, אני בונה כלי שמביא לקוחות.
            </p>
          </div>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.number}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neon-pink/20 hover:bg-card"
            >
              {/* Number watermark */}
              <span className="absolute top-4 left-4 font-mono text-5xl font-bold text-white/[0.03] transition-colors group-hover:text-neon-pink/[0.06]">
                {benefit.number}
              </span>

              <div className="relative flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-elevated transition-colors group-hover:border-neon-pink/20">
                  <benefit.icon className="h-5 w-5 text-neon-pink" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {benefit.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
