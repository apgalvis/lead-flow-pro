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
    <section id="glosario" className="py-20 lg:py-28 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary mb-6">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Glosario de términos
          </h2>
          <p className="text-muted-foreground text-lg">
            Conoce los conceptos clave para aprovechar al máximo tu cuenta.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {glossaryItems.map((item) => (
              <AccordionItem
                key={item.key}
                value={item.key}
                className="border border-border rounded-xl bg-card px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {item.term}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.definition}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Glossary;