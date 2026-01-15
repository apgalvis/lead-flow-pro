import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

interface CTASectionProps {
  cartUrl?: string;
  contactUrl?: string;
}

const CTASection = ({ cartUrl = "#", contactUrl = "#" }: CTASectionProps) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 gradient-bg opacity-95" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 text-center px-6 py-10 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">
              ¿Listo para recibir leads sin interrupciones?
            </h2>
            <p className="text-primary-foreground/90 text-sm max-w-xl mx-auto mb-6">
              Empieza gratis y da el salto al plan sin tope cuando lo necesites.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <Button
                asChild
                variant="secondary"
                className="w-full sm:w-auto text-sm px-6 py-5 font-semibold shadow-lg bg-white text-primary hover:bg-white/90"
              >
                <a href={cartUrl}>
                  Activar mi Plan Pro
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="w-full sm:w-auto text-sm px-6 py-5 font-semibold text-primary-foreground hover:bg-white/10 border border-white/30"
              >
                <a href={contactUrl}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Hablar con asesor
                </a>
              </Button>
            </div>

            {/* Microcopy */}
            <p className="text-primary-foreground/70 text-xs">
              Sin tarjeta para probar. Cancela cuando quieras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;