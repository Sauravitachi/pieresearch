import React from "react";
import { Check, Search, Layers, Activity, Crosshair, Send, FileCheck, LucideIcon } from "lucide-react";
import { MethodStep } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Layers,
  Activity,
  Crosshair,
  Send,
  FileCheck,
};

interface MethodSectionProps {
  steps: MethodStep[];
}

export const MethodSection: React.FC<MethodSectionProps> = ({ steps }) => {
  return (
    <section id="methodology" className="py-20 lg:py-28 bg-slate-50/70 scroll-mt-16 border-y border-slate-200">
      <Container size="default">
        <SectionHeading
          badgeText="Systematic Framework"
          title="How Our Research is"
          titleHighlight="Constructed"
          description="We do not rely on hunches or social chatter. Every trade idea passes through a multi-layer quantitative and structural validation funnel."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item) => {
            const Icon = iconMap[item.iconName] || Search;

            return (
              <Card key={item.step} className="relative flex flex-col justify-between h-full bg-white border-slate-200 shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700 font-extrabold text-sm border border-sky-200">
                      0{item.step}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-600 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  {item.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-600">
                      <Check className="h-3 w-3 text-sky-600 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
