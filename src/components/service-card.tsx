"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 20px rgba(233, 30, 140, 0.3)",
      }}
      transition={{ duration: 0.2 }}
      className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-neon-pink/30"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-elevated">
        <span className="font-mono text-xl text-neon-pink">{icon}</span>
      </div>
      <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
