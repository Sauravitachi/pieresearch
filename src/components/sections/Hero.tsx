import React from "react";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface HeroProps {
  headline: string;
  subtext: string;
  sebiRegNo: string;
  stats: { label: string; value: string; helper?: string }[];
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

export const Hero: React.FC<HeroProps> = ({
  subtext,
  sebiRegNo,
  stats,
  primaryCtaText = "Explore Research Plans",
  secondaryCtaText = "Talk to Analyst Desk",
}) => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(2,132,199,0.08),rgba(255,255,255,0))]">
      <Container size="default">
        <div className="mx-auto flex max-w-4xl flex-col items-center py-16 text-center sm:py-20 lg:py-24">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <Badge
              variant="primary"
              className="gap-1.5 border-sky-200 bg-sky-50 px-3 py-1 font-semibold text-sky-700 shadow-xs"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-sky-600" />
              <span>SEBI Reg. No. {sebiRegNo}</span>
            </Badge>
            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
            <span className="hidden text-xs font-medium text-slate-500 sm:block">
              Institutional-Grade Advisory
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-slate-900 [text-wrap:balance] sm:text-5xl lg:text-[3.25rem]">
            Disciplined,{" "}
            <span className="whitespace-nowrap text-sky-600">Data&#8209;Backed</span>{" "}
            Market Research for Serious Traders
          </h1>

          {/* Subtext */}
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 [text-wrap:pretty] sm:text-lg">
            {subtext}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
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
              className="border-slate-300 bg-white text-slate-800 shadow-xs hover:bg-slate-50"
            >
              {secondaryCtaText}
            </Button>
          </div>

          {/* Compliance */}
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-slate-500">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-sky-600" />
            <span>Compliant with SEBI RA Regulations, 2014 · No assured returns</span>
          </p>

          {/* Stats */}
          {stats.length > 0 && (
            <dl className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.03)] sm:grid-cols-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center bg-white px-4 py-5">
                  <dd className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-xs font-semibold text-slate-700">
                    {stat.label}
                  </dt>
                  {stat.helper && (
                    <p className="mt-0.5 text-[11px] text-slate-400">{stat.helper}</p>
                  )}
                </div>
              ))}
            </dl>
          )}
        </div>
      </Container>
    </section>
  );
};