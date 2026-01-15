import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export const glossaryTerms: Record<string, GlossaryTerm> = {
  bolsa: {
    term: "Bolsa de consumo de leads",
    definition:
      "Cantidad de leads gratuitos que puedes recibir. Al agotarse, tu anuncio se pausa automáticamente hasta la siguiente recarga.",
  },
  tope: {
    term: "Tope de leads",
    definition:
      "Límite máximo de leads gratuitos que puedes recibir. Al alcanzarlo, el anuncio se pausa hasta que se recargue la bolsa.",
  },
  pausado: {
    term: "Pausado/Suspendido",
    definition:
      "Estado en el que tu anuncio no es visible para los buscadores, pero se mantiene publicado y puedes editarlo en cualquier momento.",
  },
  cooldown: {
    term: "Cooldown (30 días)",
    definition:
      "Periodo de espera de 30 días para que tu bolsa de leads se recargue automáticamente y tu anuncio vuelva a ser visible.",
  },
  premium: {
    term: "Premium / Plan Pro",
    definition:
      "Plan de pago que elimina el tope de leads y la pausa, garantizando visibilidad continua y estabilidad para tu anuncio.",
  },
};

interface GlossaryTooltipProps {
  termKey: keyof typeof glossaryTerms;
  children: React.ReactNode;
  showIcon?: boolean;
}

const GlossaryTooltip = ({
  termKey,
  children,
  showIcon = true,
}: GlossaryTooltipProps) => {
  const term = glossaryTerms[termKey];

  if (!term) return <>{children}</>;

  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger asChild>
        <span className="inline-flex items-center gap-1 cursor-help border-b border-dashed border-primary/50 hover:border-primary transition-colors">
          {children}
          {showIcon && <HelpCircle className="w-3.5 h-3.5 text-primary/60" />}
        </span>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="max-w-xs p-3 bg-card border border-border shadow-lg"
      >
        <p className="font-semibold text-foreground text-sm mb-1">{term.term}</p>
        <p className="text-muted-foreground text-xs leading-relaxed">
          {term.definition}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};

export default GlossaryTooltip;