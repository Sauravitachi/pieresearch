import React from "react";
import { FeatureItem } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/cards/FeatureCard";

interface WhyUsSectionProps {
  features: FeatureItem[];
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ features }) => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white scroll-mt-16">
      <Container size="default">
        <SectionHeading
          badgeText="Regulatory Rigor"
          title="Why Disciplined Traders"
          titleHighlight="Trust Us"
          description="In an industry riddled with fake screenshots and reckless hype, we choose complete regulatory compliance and mathematical honesty."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item) => (
            <FeatureCard key={item.id} feature={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
