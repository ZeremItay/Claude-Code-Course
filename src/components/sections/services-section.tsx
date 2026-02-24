"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { ServiceCard } from "@/components/service-card";

const services = [
  {
    icon: "{ }",
    title: "דפי נחיתה",
    description:
      "דפי נחיתה ממירים שנבנים לתוצאות. עיצוב חד, טעינה מהירה, ו-SEO מובנה שמביא לקוחות מ-Google.",
  },
  {
    icon: "< />",
    title: "אתרי תדמית",
    description:
      "אתרים מקצועיים שמשדרים אמינות ומציגים את העסק שלך בצורה הטובה ביותר — במובייל ובדסקטופ.",
  },
  {
    icon: "⚡",
    title: "ביצועים ומהירות",
    description:
      "אופטימיזציה מלאה לביצועים. ציון Lighthouse גבוה, זמני טעינה מינימליים, וחוויית משתמש חלקה.",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionWrapper>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            <span className="font-mono text-neon-purple">{"<"}</span>
            שירותים
            <span className="font-mono text-neon-purple">{" />"}</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            כל פרויקט מותאם אישית לצרכים של העסק שלך
          </p>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
