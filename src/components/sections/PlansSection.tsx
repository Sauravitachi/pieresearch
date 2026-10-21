"use client";

import React, { useState } from "react";
import { ShieldAlert } from "lucide-react";
import { PricingPlan } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlanCard } from "@/components/cards/PlanCard";
import { cn } from "@/lib/utils";

interface PlansSectionProps {
  plans: PricingPlan[];
  complianceNote: string;
}

export const PlansSection: React.FC<PlansSectionProps> = ({
  plans,
  complianceNote,
}) => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "quarterly">(
    "quarterly"
  );

  return (
    <section id="plans" className="py-20 lg:py-28 bg-slate-50/70 scroll-mt-16 border-y border-slate-200">
      <Container size="default">
        <SectionHeading
          badgeText="Fair & Transparent Pricing"
          title="Simple, Flat-Fee"
          titleHighlight="Research Plans"
          description="Zero percentage-of-profits. Zero hidden commissions. Transparent flat-fee advisory with direct institutional delivery."
        />

        {/* Billing Period Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center rounded-xl bg-slate-200/90 p-1 border border-slate-300/60">
            <button
              type="button"
              onClick={() => setBillingPeriod("monthly")}
              className={cn(
                "rounded-lg px-4 py-2 text-xs font-bold transition-all",
                billingPeriod === "monthly"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod("quarterly")}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition-all",
                billingPeriod === "quarterly"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <span>Quarterly Billing</span>
              <span className="rounded-full bg-sky-700 text-[10px] px-1.5 py-0.5 text-white">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              billingPeriod={billingPeriod}
            />
          ))}
        </div>

        {/* Mandatory Statutory Advisory Note */}
        <div className="mt-12 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs flex items-start gap-3 max-w-4xl mx-auto shadow-sm">
          <ShieldAlert className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
          <p className="leading-relaxed">{complianceNote}</p>
        </div>
      </Container>
    </section>
  );
};
