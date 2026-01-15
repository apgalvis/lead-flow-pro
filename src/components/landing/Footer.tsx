import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface FooterProps {
  planProUrl?: string;
  faqUrl?: string;
  termsUrl?: string;
  privacyUrl?: string;
}

const Footer = ({
  planProUrl = "#",
  faqUrl = "#",
  termsUrl = "#",
  privacyUrl = "#",
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Brand */}
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="font-display font-bold text-lg">LeadsPro</span>
            </a>
            <Button
              asChild
              size="sm"
              className="gap-1.5 bg-primary hover:bg-primary/90 text-xs"
            >
              <a href={planProUrl}>
                <Sparkles className="w-3 h-3" />
                Activa Plan Pro
              </a>
            </Button>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs">
            <a href="#como-funciona" className="text-background/70 hover:text-background transition-colors">
              Cómo funciona
            </a>
            <a href="#planes" className="text-background/70 hover:text-background transition-colors">
              Planes
            </a>
            <a href="#glosario" className="text-background/70 hover:text-background transition-colors">
              Glosario
            </a>
            <a href={faqUrl} className="text-background/70 hover:text-background transition-colors">
              FAQs
            </a>
            <a href={termsUrl} className="text-background/70 hover:text-background transition-colors">
              T&C
            </a>
            <a href={privacyUrl} className="text-background/70 hover:text-background transition-colors">
              Privacidad
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-background/10 text-center">
          <p className="text-background/50 text-xs">
            © {currentYear} LeadsPro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;