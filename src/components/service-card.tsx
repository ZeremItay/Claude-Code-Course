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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" as const }}
      className="terminal-frame group h-full transition-all duration-300 hover:border-neon-pink/20"
    >
      {/* Terminal header bar */}
      <div className="terminal-header">
        <span className="terminal-dot bg-neon-pink/60" />
        <span className="terminal-dot bg-neon-purple/40" />
        <span className="terminal-dot bg-muted-foreground/20" />
        <span className="ms-auto font-mono text-[10px] text-muted-foreground/50">
          {title}.tsx
        </span>
      </div>

      {/* Card content */}
      <div className="p-6">
        {/* Icon */}
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-surface-elevated transition-all duration-300 group-hover:border-neon-pink/20 group-hover:shadow-[0_0_20px_rgba(233,30,140,0.1)]">
          <span className="font-mono text-lg text-neon-pink">{icon}</span>
        </div>

        <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Decorative code line */}
        <div className="mt-5 flex items-center gap-2 font-mono text-xs text-muted-foreground/30">
          <span className="text-neon-pink/30">{">"}</span>
          <span>ready to deploy_</span>
          <span className="h-3.5 w-[2px] animate-pulse bg-neon-pink/40" />
        </div>
      </div>
    </motion.div>
  );
}
