import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

interface CTASectionProps {
  cartUrl?: string;
  contactUrl?: string;
}

const CTASection = ({ cartUrl = "#", contactUrl = "#" }: CTASectionProps) => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 gradient-bg opacity-95" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          {/* Content */}
          <div className="relative z-10 text-center px-6 py-16 lg:px-16 lg:py-20">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              ¿Listo para recibir leads sin interrupciones?
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Empieza gratis con tu bolsa de leads y da el salto al plan sin tope cuando
              lo necesites. Sin compromiso, cancela cuando quieras.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto text-base px-8 py-6 font-semibold shadow-xl hover:shadow-2xl transition-all bg-white text-primary hover:bg-white/90"
              >
                <a href={cartUrl}>
                  Ir al carrito y activar mi Plan Pro
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto text-base px-8 py-6 font-semibold text-primary-foreground hover:bg-white/10 border border-white/30"
              >
                <a href={contactUrl}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Habla con nuestro equipo
                </a>
              </Button>
            </div>

            {/* Microcopy */}
            <p className="text-primary-foreground/70 text-sm">
              Sin tarjeta para probar. Cancela cuando quieras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;