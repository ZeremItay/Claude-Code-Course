"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="relative px-4 py-28">
      {/* Section separator */}
      <div className="glow-line mx-auto mb-20 max-w-xs" />

      <div className="mx-auto max-w-2xl">
        <SectionWrapper>
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-neon-pink">
              {"// contact"}
            </span>
            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              בואו <span className="gradient-text">נדבר</span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-muted-foreground md:text-lg">
              השאירו פרטים ואחזור אליכם בהקדם עם הצעה מותאמת אישית
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          {/* Terminal window wrapper */}
          <div className="terminal-frame">
            <div className="terminal-header">
              <span className="terminal-dot bg-neon-pink/60" />
              <span className="terminal-dot bg-neon-purple/40" />
              <span className="terminal-dot bg-muted-foreground/20" />
              <span className="ms-auto font-mono text-[10px] text-muted-foreground/50">
                contact-form.tsx
              </span>
            </div>

            <div className="p-6 md:p-8">
              {/* Terminal prompt */}
              <div className="mb-6 flex items-center gap-2 font-mono text-xs text-muted-foreground/50">
                <span className="text-neon-pink">~</span>
                <span>$</span>
                <span className="text-foreground/60">
                  npm run send-inquiry
                </span>
                <span className="h-3.5 w-[2px] animate-pulse bg-neon-pink/40" />
              </div>

              <ContactForm />
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
