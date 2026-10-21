import React from "react";
import {
  TrendingUp,
  BarChart3,
  PieChart,
  Boxes,
  Zap,
  ShieldCheck,
  Clock,
  Wallet,
  Check,
  LucideIcon,
} from "lucide-react";
import { ResearchSegment } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  BarChart3,
  PieChart,
  Boxes,
  Zap,
  ShieldCheck,
};

interface SegmentCardProps {
  segment: ResearchSegment;
}

export const SegmentCard: React.FC<SegmentCardProps> = ({ segment }) => {
  const IconComponent = iconMap[segment.iconName] || TrendingUp;

  const riskBadgeVariant =
    segment.riskProfile === "Very High"
      ? "risk"
      : segment.riskProfile === "High"
      ? "warning"
      : "secondary";

  return (
    <Card isHoverable className="flex flex-col justify-between h-full bg-white border-slate-200">
      <div>
        {/* Header & Badges */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
            <IconComponent className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-[11px] bg-slate-50 text-slate-700 border-slate-200">
              {segment.badge}
            </Badge>
            <Badge variant={riskBadgeVariant} className="text-[11px]">
              {segment.riskProfile} Risk
            </Badge>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-slate-900 mb-1.5">
          {segment.title}
        </h3>
        <p className="text-xs font-semibold text-sky-600 mb-3">
          {segment.subtitle}
        </p>
        <p className="text-sm text-slate-600 mb-5 leading-relaxed">
          {segment.description}
        </p>

        {/* Key Features checklist */}
        <div className="space-y-2 mb-6">
          {segment.keyFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800 mt-0.5">
                <Check className="h-2.5 w-2.5" />
              </span>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Meta Footer */}
      <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            Horizon:
          </span>
          <span className="font-semibold text-slate-800">
            {segment.holdingPeriod}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Wallet className="h-3.5 w-3.5 text-slate-400" />
            Rec. Capital:
          </span>
          <span className="font-semibold text-slate-800">
            {segment.recommendedCapital}
          </span>
        </div>
      </div>
    </Card>
  );
};
