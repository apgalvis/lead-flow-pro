import { Upload, Zap, Users, TrendingUp } from "lucide-react";
import GlossaryTooltip from "./GlossaryTooltip";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Publica tu propiedad",
    description:
      "Crea y edita tu anuncio fácilmente. Queda publicado de forma permanente y siempre puedes modificarlo.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Actívalo gratis",
    description:
      "Tu anuncio gana visibilidad gracias a tu bolsa de leads, que se recarga cada 30 días.",
    glossaryKey: "bolsa" as const,
    glossaryTerm: "bolsa de leads",
  },
  {
    icon: Users,
    number: "03",
    title: "Recibe leads verificados",
    description:
      "Obtén contactos filtrados y de calidad mientras tengas saldo disponible en tu bolsa.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Escala si quieres",
    description:
      "Con el Plan Pro estarás siempre visible, sin pausas ni límites de leads.",
    glossaryKey: "premium" as const,
    glossaryTerm: "Plan Pro",
  },
];

const ProcessSteps = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Proceso freemium
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Empieza en 4 sencillos pasos
          </h2>
          <p className="text-muted-foreground text-lg">
            Publica gratis, recibe leads verificados y escala cuando lo necesites.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 h-full">
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.glossaryKey ? (
                    <>
                      {step.description.split(step.glossaryTerm)[0]}
                      <GlossaryTooltip termKey={step.glossaryKey}>
                        {step.glossaryTerm}
                      </GlossaryTooltip>
                      {step.description.split(step.glossaryTerm)[1]}
                    </>
                  ) : (
                    step.description
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;