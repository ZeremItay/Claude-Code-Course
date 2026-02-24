"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionWrapper>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            <span className="font-mono text-neon-pink">{"// "}</span>
            בואו נדבר
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            השאירו פרטים ואחזור אליכם בהקדם עם הצעה מותאמת אישית
          </p>
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          <ContactForm />
        </SectionWrapper>
      </div>
    </section>
  );
}
