import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen } from "lucide-react";
import { glossaryTerms } from "./GlossaryTooltip";

const glossaryItems = [
  { key: "bolsa", ...glossaryTerms.bolsa },
  { key: "tope", ...glossaryTerms.tope },
  { key: "pausado", ...glossaryTerms.pausado },
  { key: "cooldown", ...glossaryTerms.cooldown },
  { key: "premium", ...glossaryTerms.premium },
];

const Glossary = () => {
  return (
    <section id="glosario" className="py-10 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Glosario
          </h2>
          <p className="text-muted-foreground text-sm">
            Conoce los conceptos clave.
          </p>
        </div>

        {/* Accordion - 2 columns on desktop */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-2">
          {glossaryItems.map((item) => (
            <Accordion key={item.key} type="single" collapsible>
              <AccordionItem
                value={item.key}
                className="border border-border rounded-lg bg-card px-4 data-[state=open]:shadow-sm transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground text-sm hover:no-underline py-3">
                  {item.term}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs pb-3 leading-relaxed">
                  {item.definition}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glossary;