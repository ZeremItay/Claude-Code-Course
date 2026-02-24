import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ValueProposition } from "@/components/sections/value-proposition";
import { ServicesSection } from "@/components/sections/services-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
