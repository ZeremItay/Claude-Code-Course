import { HeroSection } from "@/components/sections/hero-section";
import { ValueProposition } from "@/components/sections/value-proposition";
import { ServicesSection } from "@/components/sections/services-section";
import { ContactSection } from "@/components/sections/contact-section";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ValueProposition />
      <ServicesSection />
      <ContactSection />
      <WhatsAppButton />
    </main>
  );
}
