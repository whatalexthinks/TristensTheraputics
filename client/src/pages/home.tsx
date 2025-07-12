import JungleBorder from "@/components/jungle-border";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import PricingSection from "@/components/pricing-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-black text-cream-light font-open overflow-x-hidden">
      <JungleBorder />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
