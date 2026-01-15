import { Eye, EyeOff, Clock, ArrowRight, RefreshCw } from "lucide-react";
import GlossaryTooltip from "./GlossaryTooltip";

const states = [
  {
    icon: Eye,
    title: "Bolsa activa",
    description: "Visible y recibes leads",
    color: "bg-success text-success-foreground",
    borderColor: "border-success",
    glossaryKey: "bolsa" as const,
  },
  {
    icon: EyeOff,
    title: "Pausado",
    description: "No visible, pero editable",
    color: "bg-highlight text-highlight-foreground",
    borderColor: "border-highlight",
    glossaryKey: "pausado" as const,
  },
  {
    icon: Clock,
    title: "Cooldown",
    description: "30 días para recargar",
    color: "bg-muted text-muted-foreground",
    borderColor: "border-border",
    glossaryKey: "cooldown" as const,
  },
];

const VisibilityDiagram = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Ciclo de visibilidad
          </h2>
          <p className="text-muted-foreground text-sm">
            Tu anuncio siempre puede editarse; la visibilidad depende de tu{" "}
            <GlossaryTooltip termKey="bolsa">bolsa</GlossaryTooltip> o del{" "}
            <GlossaryTooltip termKey="premium">Plan Pro</GlossaryTooltip>.
          </p>
        </div>

        {/* Compact diagram */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {states.map((state, index) => (
              <div key={state.title} className="flex items-center">
                {/* State card */}
                <div
                  className={`p-3 md:p-4 rounded-xl border-2 ${state.borderColor} bg-card text-center min-w-[100px] md:min-w-[140px]`}
                >
                  <div
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${state.color} flex items-center justify-center mx-auto mb-2`}
                  >
                    <state.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground text-xs md:text-sm mb-0.5">
                    <GlossaryTooltip termKey={state.glossaryKey} showIcon={false}>
                      {state.title}
                    </GlossaryTooltip>
                  </h3>
                  <p className="text-muted-foreground text-[10px] md:text-xs">
                    {state.description}
                  </p>
                </div>

                {/* Arrow connector */}
                {index < states.length - 1 && (
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary/40 mx-1 md:mx-2 shrink-0" />
                )}
              </div>
            ))}
            
            {/* Loop back arrow */}
            <RefreshCw className="w-4 h-4 md:w-5 md:h-5 text-primary/40 ml-1 md:ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisibilityDiagram;