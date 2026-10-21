import React from "react";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ResearchPreviewCard } from "@/components/cards/ResearchPreviewCard";

interface HeroProps {
  headline: string;
  subtext: string;
  sebiRegNo: string;
  stats: { label: string; value: string; helper?: string }[];
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

export const Hero: React.FC<HeroProps> = ({
  headline,
  subtext,
  sebiRegNo,
  stats,
  primaryCtaText = "Explore Research Plans",
  secondaryCtaText = "Talk to Analyst Desk",
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-[radial-gradient(ellipse_90%_70%_at_50%_-15%,rgba(2,132,199,0.08),rgba(255,255,255,0))]">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline, CTAs, and Trust Strip */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="primary" className="py-1 px-3 shadow-xs font-bold text-sky-700 bg-sky-50 border-sky-200">
                <ShieldCheck className="h-3.5 w-3.5 text-sky-600" />
                <span>SEBI Reg. No. {sebiRegNo}</span>
              </Badge>
              <span className="hidden sm:inline-flex text-xs font-semibold text-slate-500">
                • Institutional-Grade Advisory
              </span>
            </div>

            {/* Headline with balanced wrap and no awkward hyphens */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.14] hyphens-none break-normal [text-wrap:balance]">
              Disciplined,{" "}
              <span className="text-sky-600 font-black">
                Data-Backed
              </span>{" "}
              Market Research for Serious Traders
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {subtext}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="#plans"
                className="group gap-2 shadow-md shadow-sky-800/10 hover:shadow-lg hover:shadow-sky-800/20"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#inquiry"
                className="bg-white border-slate-300 text-slate-800 hover:bg-slate-50 shadow-xs"
              >
                {secondaryCtaText}
              </Button>
            </div>

            {/* Compliance Guarantee Note */}
            <div className="flex items-center gap-2 pt-1 text-xs text-slate-500 font-medium">
              <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
              <span>Strict compliance with SEBI RA Regulations, 2014 • No assured returns</span>
            </div>

            {/* Trust Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:border-sky-200 hover:shadow-sm"
                >
                  <p className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-bold text-slate-700 mt-0.5">
                    {stat.label}
                  </p>
                  {stat.helper && (
                    <p className="text-[10px] text-slate-400 mt-0.5 font-medium">
                      {stat.helper}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Research Preview Card */}
          <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none">
            <ResearchPreviewCard />
          </div>
        </div>
      </Container>
    </section>
  );
};
