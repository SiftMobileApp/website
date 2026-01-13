import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WhySiftSection from "@/components/landing/WhySiftSection";
import ForSellersSection from "@/components/landing/ForSellersSection";
import AppConceptSection from "@/components/landing/AppConceptSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <HowItWorksSection />
      <WhySiftSection />
      <ForSellersSection />
      <AppConceptSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
