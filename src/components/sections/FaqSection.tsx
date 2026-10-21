import React from "react";
import { FaqItem } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";

interface FaqSectionProps {
  faqs: FaqItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50/70 scroll-mt-16 border-t border-slate-200">
      <Container size="narrow">
        <SectionHeading
          badgeText="Clarity & Compliance"
          title="Frequently Asked"
          titleHighlight="Questions"
          description="Everything you need to know about our SEBI registration, risk parameters, and research delivery."
        />

        <Accordion items={faqs} />
      </Container>
    </section>
  );
};
