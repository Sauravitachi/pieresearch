import React from "react";
import { Shield, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

export const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-700 text-xs py-2 border-b border-slate-200">
      <Container size="default">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          {/* SEBI Registration Notice */}
          <div className="flex items-center gap-1.5 font-medium">
            <Shield className="h-3.5 w-3.5 text-sky-600 shrink-0" />
            <span>
              SEBI Registered Research Analyst:{" "}
              <strong className="text-slate-900 tracking-wider font-bold">
                {siteConfig.sebiRegNo}
              </strong>
            </span>
          </div>

          {/* Quick Contact & Working Hours */}
          <div className="flex items-center gap-4 text-slate-600">
            <span className="hidden md:flex items-center gap-1 text-[11px] text-slate-500">
              <Clock className="h-3 w-3 text-slate-400" />
              {siteConfig.supportHours}
            </span>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1.5 font-semibold text-sky-600 hover:text-sky-800 transition-colors"
            >
              <Phone className="h-3 w-3 text-sky-600" />
              <span>{siteConfig.displayPhone}</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
