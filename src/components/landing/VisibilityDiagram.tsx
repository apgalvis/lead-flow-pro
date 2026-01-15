import { Eye, EyeOff, Clock, ArrowRight } from "lucide-react";
import GlossaryTooltip from "./GlossaryTooltip";

const states = [
  {
    icon: Eye,
    title: "Bolsa activa",
    description: "Tu anuncio está visible y recibes leads verificados.",
    color: "bg-success text-success-foreground",
    borderColor: "border-success",
    glossaryKey: "bolsa" as const,
  },
  {
    icon: EyeOff,
    title: "Pausado",
    description: "El anuncio no es visible, pero sigue publicado y editable.",
    color: "bg-highlight text-highlight-foreground",
    borderColor: "border-highlight",
    glossaryKey: "pausado" as const,
  },
  {
    icon: Clock,
    title: "Cooldown",
    description: "Espera 30 días para que tu bolsa se recargue automáticamente.",
    color: "bg-muted text-muted-foreground",
    borderColor: "border-border",
    glossaryKey: "cooldown" as const,
  },
];

const VisibilityDiagram = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Ciclo de visibilidad
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Entiende cómo funciona tu anuncio
          </h2>
          <p className="text-muted-foreground text-lg">
            Tu anuncio siempre puede publicarse y editarse; la visibilidad y los leads
            dependen de tu <GlossaryTooltip termKey="bolsa">bolsa</GlossaryTooltip> o
            del{" "}
            <GlossaryTooltip termKey="premium">Plan Pro</GlossaryTooltip>.
          </p>
        </div>

        {/* Diagram */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-0">
            {states.map((state, index) => (
              <div key={state.title} className="flex items-center flex-1">
                {/* State card */}
                <div
                  className={`flex-1 p-6 rounded-2xl border-2 ${state.borderColor} bg-card hover:shadow-lg transition-shadow duration-300`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${state.color} flex items-center justify-center mb-4`}
                  >
                    <state.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    <GlossaryTooltip termKey={state.glossaryKey} showIcon={false}>
                      {state.title}
                    </GlossaryTooltip>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {state.description}
                  </p>
                </div>

                {/* Arrow connector */}
                {index < states.length - 1 && (
                  <div className="hidden md:flex items-center justify-center w-12 shrink-0">
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </div>
                )}
                {index < states.length - 1 && (
                  <div className="flex md:hidden items-center justify-center h-8">
                    <ArrowRight className="w-5 h-5 text-primary/40 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Loop indicator */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm">
              <Clock className="w-4 h-4" />
              <span>
                El ciclo se repite cada 30 días o puedes saltar al{" "}
                <GlossaryTooltip termKey="premium">Plan Pro</GlossaryTooltip>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisibilityDiagram;