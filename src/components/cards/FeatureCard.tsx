import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Target,
  FileText,
  Lock,
  Headphones,
  LucideIcon,
} from "lucide-react";
import { FeatureItem } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  CheckCircle2,
  Target,
  FileText,
  Lock,
  Headphones,
};

interface FeatureCardProps {
  feature: FeatureItem;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const IconComponent = iconMap[feature.iconName] || ShieldCheck;

  return (
    <Card isHoverable className="flex flex-col justify-between h-full bg-white border-slate-200">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
            <IconComponent className="h-5 w-5" />
          </div>
          <Badge variant="secondary" className="text-[11px] font-semibold bg-slate-100 text-slate-700 border-slate-200">
            {feature.metricBadge}
          </Badge>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2">
          {feature.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </Card>
  );
};
