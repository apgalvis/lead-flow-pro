import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CreditCard, Lock } from "lucide-react";
import GlossaryTooltip from "./GlossaryTooltip";

interface HeroProps {
  publishUrl?: string;
  planProUrl?: string;
}

const Hero = ({ publishUrl = "#", planProUrl = "#planes" }: HeroProps) => {
  return (
    <section className="relative flex items-center pt-24 pb-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-primary/20 mb-5 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs font-medium text-secondary-foreground">
              Modelo freemium para agentes inmobiliarios
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 animate-fade-in-up">
            Contactos que sí avanzan –{" "}
            <span className="gradient-text">Leads verificados sin límites</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed animate-fade-in-up [animation-delay:100ms]">
            Prueba gratis con tu{" "}
            <GlossaryTooltip termKey="bolsa">bolsa de leads</GlossaryTooltip> y activa
            tu visibilidad sin límites con el{" "}
            <GlossaryTooltip termKey="premium">Plan Pro</GlossaryTooltip>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 animate-fade-in-up [animation-delay:200ms]">
            <Button
              asChild
              className="w-full sm:w-auto text-sm px-6 py-5 font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <a href={publishUrl}>
                Publica gratis
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto text-sm px-6 py-5 font-semibold border-2"
            >
              <a href={planProUrl}>Conoce el Plan Pro</a>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 animate-fade-in-up [animation-delay:300ms]">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <div className="p-1.5 rounded-md bg-secondary">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-medium">SSL Seguro</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <div className="p-1.5 rounded-md bg-secondary">
                <CreditCard className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-medium">Pagos protegidos</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <div className="p-1.5 rounded-md bg-secondary">
                <Lock className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-medium">Datos encriptados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;