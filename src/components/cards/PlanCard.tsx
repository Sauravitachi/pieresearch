import React from "react";
import { Check, ShieldCheck } from "lucide-react";
import { PricingPlan } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatINR, cn } from "@/lib/utils";

interface PlanCardProps {
  plan: PricingPlan;
  billingPeriod: "monthly" | "quarterly";
  onSelectPlan?: (planId: string) => void;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  billingPeriod,
  onSelectPlan,
}) => {
  const currentPrice =
    billingPeriod === "monthly" ? plan.monthlyPrice : plan.quarterlyPrice;
  const isQuarterly = billingPeriod === "quarterly";

  return (
    <Card
      className={cn(
        "relative flex flex-col justify-between h-full p-6 sm:p-8 transition-all duration-300 bg-white",
        plan.isPopular
          ? "border-2 border-sky-600 shadow-xl shadow-sky-950/5 ring-1 ring-sky-600/20 bg-sky-50/20"
          : "border-slate-200"
      )}
    >
      {/* Popular Highlight Badge */}
      {plan.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge variant="primary" className="bg-sky-600 text-white font-bold px-3 py-1 shadow-sm border-sky-600">
            {plan.badgeText || "Recommended"}
          </Badge>
        </div>
      )}

      <div>
        {/* Tier Name & Tagline */}
        <div className="mb-4">
          <h3 className="text-xl font-extrabold text-slate-900">
            {plan.name}
          </h3>
          <p className="mt-1 text-xs text-slate-500 min-h-[32px]">
            {plan.tagline}
          </p>
        </div>

        {/* Pricing block */}
        <div className="mb-6 pb-6 border-b border-slate-100">
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {formatINR(currentPrice)}
            </span>
            <span className="text-xs text-slate-500">
              /{isQuarterly ? "quarter" : "month"} + GST
            </span>
          </div>
          <p className="mt-2 text-xs font-semibold text-sky-700">
            Target: {plan.bestFor}
          </p>
        </div>

        {/* Features Checklist */}
        <div className="space-y-3 mb-8">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Plan Inclusions
          </p>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800 mt-0.5">
                <Check className="h-2.5 w-2.5" />
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button & Compliance Subtext */}
      <div>
        <Button
          variant={plan.isPopular ? "primary" : "outline"}
          size="lg"
          className="w-full"
          href="#inquiry"
          onClick={() => onSelectPlan?.(plan.id)}
        >
          Subscribe to {plan.name}
        </Button>

        <p className="mt-3 text-[11px] text-center text-slate-500 flex items-center justify-center gap-1">
          <ShieldCheck className="h-3 w-3 text-slate-400" />
          SEBI Compliant Advisory • No Assured Returns
        </p>
      </div>
    </Card>
  );
};
