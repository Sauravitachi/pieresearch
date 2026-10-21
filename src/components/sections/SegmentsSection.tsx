import React from "react";
import { ResearchSegment } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SegmentCard } from "@/components/cards/SegmentCard";

interface SegmentsSectionProps {
  segments: ResearchSegment[];
}

export const SegmentsSection: React.FC<SegmentsSectionProps> = ({ segments }) => {
  return (
    <section id="segments" className="py-20 lg:py-28 bg-white scroll-mt-16">
      <Container size="default">
        <SectionHeading
          badgeText="Structured Advisory"
          title="Market-Specialized"
          titleHighlight="Research Segments"
          description="Every segment follows an uncompromising, rule-governed technical playbook with predefined stop-loss and dual target calibration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {segments.map((segment) => (
            <SegmentCard key={segment.id} segment={segment} />
          ))}
        </div>
      </Container>
    </section>
  );
};
