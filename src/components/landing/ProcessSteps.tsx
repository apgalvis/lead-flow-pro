import { Upload, Zap, Users, TrendingUp } from "lucide-react";
import GlossaryTooltip from "./GlossaryTooltip";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Publica tu propiedad",
    description: "Crea y edita tu anuncio fácilmente. Queda publicado de forma permanente.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Actívalo gratis",
    description: "Tu anuncio gana visibilidad gracias a tu bolsa de leads.",
    glossaryKey: "bolsa" as const,
    glossaryTerm: "bolsa de leads",
  },
  {
    icon: Users,
    number: "03",
    title: "Recibe leads verificados",
    description: "Obtén contactos filtrados mientras tengas saldo disponible.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Escala si quieres",
    description: "Con el Plan Pro estarás siempre visible, sin pausas.",
    glossaryKey: "premium" as const,
    glossaryTerm: "Plan Pro",
  },
];

const ProcessSteps = () => {
  return (
    <section id="como-funciona" className="py-12 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Empieza en 4 sencillos pasos
          </h2>
          <p className="text-muted-foreground text-sm">
            Publica gratis, recibe leads verificados y escala cuando lo necesites.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              <div className="relative bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 h-full">
                {/* Number badge */}
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-xs shadow-md">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-sm font-semibold text-foreground mb-1.5">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
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