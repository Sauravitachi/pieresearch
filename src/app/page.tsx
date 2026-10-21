import { siteConfig } from "@/data/site";
import { marketTickerData } from "@/data/ticker";
import { researchSegmentsData } from "@/data/segments";
import { methodologySteps } from "@/data/methodology";
import { whyUsFeatures } from "@/data/features";
import { pricingPlansData, plansComplianceNote } from "@/data/plans";
import { faqsData } from "@/data/faqs";

import { Hero } from "@/components/sections/Hero";
import { TickerSection } from "@/components/sections/TickerSection";
import { SegmentsSection } from "@/components/sections/SegmentsSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { InquirySection } from "@/components/sections/InquirySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero
        headline={siteConfig.tagline}
        subtext={siteConfig.subTagline}
        sebiRegNo={siteConfig.sebiRegNo}
        stats={siteConfig.trustStats}
      />

      {/* 2. Live Market Scrolling Ticker */}
      <TickerSection items={marketTickerData} />

      {/* 3. Research Segments (Options, Futures, Cash, MCX, Intraday, Positional) */}
      <SegmentsSection segments={researchSegmentsData} />

      {/* 4. Methodology & Research Process */}
      <MethodSection steps={methodologySteps} />

      {/* 5. Why Choose Us & Compliance Rigor */}
      <WhyUsSection features={whyUsFeatures} />

      {/* 6. Subscription Plans & Pricing */}
      <PlansSection
        plans={pricingPlansData}
        complianceNote={plansComplianceNote}
      />

      {/* 7. Analyst Onboarding & Inquiry Form */}
      <InquirySection />

      {/* 8. Frequently Asked Questions (Accordion) */}
      <FaqSection faqs={faqsData} />

      {/* 9. Final Call to Action */}
      <CtaSection brandName={siteConfig.brandName} />
    </>
  );
}
