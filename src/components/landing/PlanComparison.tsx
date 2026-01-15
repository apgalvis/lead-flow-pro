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
    name: "Guardada",
    description: "Publicado y editable, sin visibilidad.",
    price: "Gratis",
    features: [
      { text: "Anuncio publicado", included: true },
      { text: "Edición ilimitada", included: true },
      { text: "Visibilidad activa", included: false },
      { text: "Leads", included: false },
    ],
    cta: null,
    popular: false,
    glossaryKey: "pausado" as const,
  },
  {
    id: "simple",
    name: "Anuncio Simple",
    description: "Visible hasta el tope de leads.",
    price: "Gratis",
    features: [
      { text: "Anuncio publicado", included: true },
      { text: "Edición ilimitada", included: true },
      { text: "Visibilidad activa", included: true },
      { text: "Leads hasta el tope", included: true, glossary: "tope" as const },
    ],
    cta: "Activar gratis",
    ctaVariant: "outline" as const,
    popular: false,
    glossaryKey: "bolsa" as const,
  },
  {
    id: "pro",
    name: "Plan Pro",
    description: "Visibilidad continua y sin límites.",
    price: "Premium",
    features: [
      { text: "Visibilidad continua", included: true },
      { text: "Leads ilimitados", included: true },
      { text: "Destacado + Prime", included: true },
      { text: "Sin pausas", included: true },
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
    <section id="planes" className="py-12 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Elige tu plan
          </h2>
          <p className="text-muted-foreground text-sm">
            Desde gratis hasta visibilidad sin límites con{" "}
            <GlossaryTooltip termKey="premium">Plan Pro</GlossaryTooltip>.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-xl border-2 bg-card p-4 transition-all duration-300 hover:shadow-md ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 gap-1 px-3 py-0.5 text-xs bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 fill-current" />
                  Recomendado
                </Badge>
              )}

              {/* Plan header */}
              <div className="mb-3">
                <h3 className="font-display text-lg font-bold text-foreground">
                  <GlossaryTooltip termKey={plan.glossaryKey} showIcon={false}>
                    {plan.name}
                  </GlossaryTooltip>
                </h3>
                <p className="text-muted-foreground text-xs">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span
                  className={`text-2xl font-bold ${
                    plan.popular ? "gradient-text" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-4 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-success shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground shrink-0" />
                    )}
                    <span
                      className={`text-xs ${
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
                  size="sm"
                  className={`w-full font-semibold text-xs ${
                    plan.popular ? "shadow-md" : ""
                  }`}
                >
                  <a href={plan.id === "pro" ? planProUrl : activateUrl}>
                    {plan.popular && <Sparkles className="w-3 h-3 mr-1" />}
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