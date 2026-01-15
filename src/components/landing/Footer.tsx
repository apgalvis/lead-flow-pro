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
    <footer className="bg-foreground text-background py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">L</span>
              </div>
              <span className="font-display font-bold text-xl">LeadsPro</span>
            </a>
            <p className="text-background/70 text-sm max-w-sm leading-relaxed mb-6">
              La plataforma de leads verificados para agentes inmobiliarios. Publica
              gratis, recibe contactos de calidad y escala cuando lo necesites.
            </p>
            <Button
              asChild
              size="sm"
              className="gap-2 bg-primary hover:bg-primary/90"
            >
              <a href={planProUrl}>
                <Sparkles className="w-4 h-4" />
                Activa tu Plan Pro
              </a>
            </Button>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Recursos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#como-funciona"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Cómo funciona
                </a>
              </li>
              <li>
                <a
                  href="#planes"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Planes y precios
                </a>
              </li>
              <li>
                <a
                  href="#glosario"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Glosario
                </a>
              </li>
              <li>
                <a
                  href={faqUrl}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={termsUrl}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a
                  href={privacyUrl}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} LeadsPro. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-background/50 hover:text-background transition-colors text-sm"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-background/50 hover:text-background transition-colors text-sm"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-background/50 hover:text-background transition-colors text-sm"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;