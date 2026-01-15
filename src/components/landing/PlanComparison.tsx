import { Check, X, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GlossaryTooltip from "./GlossaryTooltip";

interface PlanComparisonProps {
  activateUrl?: string;
  planProUrl?: string;
}

const plans = [
  {
    id: "guardada",
    name: "Guardada / En pausa",
    description: "Siempre publicado y editable, sin visibilidad activa.",
    price: "Gratis",
    priceDetail: "Sin coste",
    features: [
      { text: "Anuncio publicado", included: true },
      { text: "Edición ilimitada", included: true },
      { text: "Visibilidad activa", included: false },
      { text: "Recepción de leads", included: false },
      { text: "Funciones Destacado", included: false },
      { text: "Funciones Prime", included: false },
    ],
    cta: null,
    popular: false,
    glossaryKey: "pausado" as const,
  },
  {
    id: "simple",
    name: "Anuncio Simple",
    description: "Visibilidad activa hasta alcanzar el tope de leads.",
    price: "Gratis",
    priceDetail: "Con bolsa de leads",
    features: [
      { text: "Anuncio publicado", included: true },
      { text: "Edición ilimitada", included: true },
      { text: "Visibilidad activa", included: true },
      { text: "Leads hasta el tope", included: true, glossary: "tope" as const },
      { text: "Funciones Destacado", included: false },
      { text: "Funciones Prime", included: false },
    ],
    cta: "Activar gratis",
    ctaVariant: "outline" as const,
    popular: false,
    glossaryKey: "bolsa" as const,
  },
  {
    id: "pro",
    name: "Plan Pro",
    description: "Visibilidad continua, leads ilimitados y máxima exposición.",
    price: "Premium",
    priceDetail: "Personalizado",
    features: [
      { text: "Anuncio publicado", included: true },
      { text: "Edición ilimitada", included: true },
      { text: "Visibilidad continua", included: true },
      { text: "Leads ilimitados", included: true },
      { text: "Funciones Destacado", included: true },
      { text: "Funciones Prime", included: true },
    ],
    cta: "Calcular mi Plan Pro",
    ctaVariant: "default" as const,
    popular: true,
    glossaryKey: "premium" as const,
  },
];

const PlanComparison = ({
  activateUrl = "#",
  planProUrl = "#",
}: PlanComparisonProps) => {
  return (
    <section id="planes" className="py-20 lg:py-28 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Comparativa de planes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Elige el plan que mejor se adapte a ti
          </h2>
          <p className="text-muted-foreground text-lg">
            Desde publicar gratis hasta máxima visibilidad con el{" "}
            <GlossaryTooltip termKey="premium">Plan Pro</GlossaryTooltip>.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border-2 bg-card p-6 lg:p-8 transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/10 scale-[1.02]"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gap-1 px-4 py-1 bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 fill-current" />
                  Recomendado
                </Badge>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  <GlossaryTooltip termKey={plan.glossaryKey} showIcon={false}>
                    {plan.name}
                  </GlossaryTooltip>
                </h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-3xl font-bold ${
                      plan.popular ? "gradient-text" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">{plan.priceDetail}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-muted-foreground" />
                      </div>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {feature.glossary ? (
                        <GlossaryTooltip termKey={feature.glossary}>
                          {feature.text}
                        </GlossaryTooltip>
                      ) : (
                        feature.text
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {plan.cta && (
                <Button
                  asChild
                  variant={plan.ctaVariant}
                  size="lg"
                  className={`w-full font-semibold ${
                    plan.popular
                      ? "shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                      : ""
                  }`}
                >
                  <a href={plan.id === "pro" ? planProUrl : activateUrl}>
                    {plan.popular && <Sparkles className="w-4 h-4 mr-2" />}
                    {plan.cta}
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanComparison;