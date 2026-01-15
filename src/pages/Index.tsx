import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProcessSteps from "@/components/landing/ProcessSteps";
import VisibilityDiagram from "@/components/landing/VisibilityDiagram";
import PlanComparison from "@/components/landing/PlanComparison";
import CTASection from "@/components/landing/CTASection";
import Glossary from "@/components/landing/Glossary";
import Footer from "@/components/landing/Footer";

// URLs de destino - Reemplaza estos placeholders con las URLs reales
const URLS = {
  cart: "#carrito",
  publish: "#publicar",
  planPro: "#plan-pro",
  contact: "#contacto",
  faq: "#faq",
  terms: "#terminos",
  privacy: "#privacidad",
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar cartUrl={URLS.cart} />
      
      <main>
        <Hero publishUrl={URLS.publish} planProUrl="#planes" />
        <ProcessSteps />
        <VisibilityDiagram />
        <PlanComparison activateUrl={URLS.publish} planProUrl={URLS.planPro} />
        <CTASection cartUrl={URLS.cart} contactUrl={URLS.contact} />
        <Glossary />
      </main>

      <Footer
        planProUrl={URLS.planPro}
        faqUrl={URLS.faq}
        termsUrl={URLS.terms}
        privacyUrl={URLS.privacy}
      />
    </div>
  );
};

export default Index;