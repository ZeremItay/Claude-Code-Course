"use client";

import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-xs text-neon-purple/40">{"<"}</span>
          <span className="text-sm font-medium text-muted-foreground">
            {SITE_CONFIG.name}
          </span>
          <span className="font-mono text-xs text-neon-purple/40">{"/>"}</span>
        </div>

        <p className="font-mono text-xs text-muted-foreground/40">
          {`// © ${new Date().getFullYear()} — כל הזכויות שמורות`}
        </p>
      </div>
    </footer>
  );
}
