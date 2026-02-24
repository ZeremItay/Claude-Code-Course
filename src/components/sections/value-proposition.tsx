"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Zap, TrendingUp, Shield, Clock } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    text: "אתרים שמביאים תוצאות עסקיות מדידות — לא רק \"יפים\"",
  },
  {
    icon: Zap,
    text: "ביצועים מהירים במיוחד שמשפרים חווית משתמש ודירוג ב-Google",
  },
  {
    icon: Shield,
    text: "קוד נקי ומאובטח שקל לתחזק ולהרחיב בעתיד",
  },
  {
    icon: Clock,
    text: "תהליך עבודה שקוף עם לוחות זמנים ברורים — בלי הפתעות",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ValueProposition() {
  return (
    <section id="value" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionWrapper>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            למה <span className="gradient-text">לעבוד איתי</span>?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            כשמפתח מבין את העסק שלך — התוצאות מדברות בעד עצמן.
            אני לא רק כותב קוד, אני בונה כלי שמביא לקוחות.
          </p>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.text}
              variants={itemVariants}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-elevated">
                <benefit.icon className="h-5 w-5 text-neon-pink" />
              </div>
              <p className="text-lg text-foreground">{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
