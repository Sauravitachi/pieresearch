import React from "react";
import { ArrowRight, ShieldCheck, Headphones } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface CtaSectionProps {
  title?: string;
  description?: string;
  brandName?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  title = "Ready to Invest with Independent Quantitative Rigor?",
  description = "Join disciplined investors and market participants who prioritize valuation discipline, structured risk parameters, and unbiased equity research.",
  brandName = "[BRAND NAME]",
}) => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container size="default">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-cyan-50/40 to-sky-100/50 px-6 py-14 sm:px-12 sm:py-16 text-center shadow-lg border border-sky-200/90">
          {/* Subtle light sky blue ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100/80 border border-sky-300 text-sky-800 text-xs font-bold">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-600" />
              <span>Independent & SEBI Registered</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button variant="primary" size="lg" href="#plans" className="w-full sm:w-auto gap-2">
                <span>View Subscription Plans</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#inquiry"
                className="w-full sm:w-auto gap-2 bg-white hover:bg-slate-50 border-slate-300 text-slate-800 shadow-sm"
              >
                <Headphones className="h-4 w-4 text-sky-600" />
                <span>Request Callback</span>
              </Button>
            </div>

            <p className="text-[11px] text-slate-500 pt-2">
              All advisory provided under SEBI (Research Analysts) Regulations, 2014 by {brandName}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
