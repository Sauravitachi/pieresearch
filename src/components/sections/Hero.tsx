import React from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, LineChart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CometBackdrop } from "@/components/ui/CometBackdrop";

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
    <section className="relative isolate overflow-hidden bg-white">
      {/* Brand backdrop: a comet sweeping across the top of the section */}
      <CometBackdrop />

      <Container size="default">
        <div className="mx-auto flex max-w-4xl flex-col items-center py-16 text-center sm:py-20 lg:py-28">
          {/* Eyebrow — one solid pill reads sharper than loose fragments */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white/80 py-1.5 pl-2 pr-4 shadow-sm backdrop-blur-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-bold tracking-wide text-sky-700 ring-1 ring-inset ring-sky-200/80">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-sky-600" />
              SEBI Reg. {sebiRegNo}
            </span>
            <span className="h-3.5 w-px bg-slate-200" />
            <span className="text-[11px] font-semibold tracking-wide text-slate-600">
              Institutional-Grade Advisory
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-7 text-[2.5rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-slate-900 sm:text-[3.25rem] lg:text-[3.75rem]">
            Disciplined,{" "}
            <span className="whitespace-nowrap bg-gradient-to-r from-sky-700 via-sky-600 to-cyan-700 bg-clip-text text-transparent">
              Data&#8209;Backed
            </span>
            <br className="hidden sm:block" />{" "}
            Market Research
            <span className="block text-slate-900">for Serious Traders</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 [text-wrap:pretty] sm:text-lg">
            {subtext}
          </p>

          {/* CTAs */}
          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
            <Button
              variant="primary"
              size="lg"
              href="#plans"
              className="group gap-2 shadow-lg shadow-sky-700/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-700/25"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#inquiry"
              className="group gap-2 border-slate-300 bg-white text-slate-800 shadow-xs hover:border-slate-400 hover:bg-slate-50"
            >
              <LineChart className="h-4 w-4 text-slate-400 transition-colors group-hover:text-sky-600" />
              <span>{secondaryCtaText}</span>
            </Button>
          </div>

          {/* Compliance */}
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/80 px-3.5 py-1.5 text-[11px] font-medium text-slate-500 sm:text-xs">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-sky-600" />
            <span>Compliant with SEBI RA Regulations, 2014 · No assured returns</span>
          </p>

          {/* Stats */}
          {stats.length > 0 && (
            <dl className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 py-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_8px_24px_rgba(2,132,199,0.10)]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                  <dd className="text-2xl font-extrabold tracking-tight text-slate-900 tabular-nums">
                    {stat.value}
                  </dd>
                  <dt className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-slate-500">
                    {stat.label}
                  </dt>
                  {stat.helper && (
                    <p className="mt-1 text-[11px] font-medium text-slate-500">
                      {stat.helper}
                    </p>
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
