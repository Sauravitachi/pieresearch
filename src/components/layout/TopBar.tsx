import React from "react";
import { AlertTriangle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export const TopBar: React.FC = () => {
  const tickerItems = [
    { text: "market is subject to risk pls read all the documents before investing", highlight: true },
    { text: `SEBI Reg. No. ${siteConfig.sebiRegNo}`, highlight: false },
    { text: "market is subject to risk pls read all the documents before investing", highlight: true },
    { text: "No assured returns or guaranteed profits • Strict SEBI Code", highlight: false },
    { text: "market is subject to risk pls read all the documents before investing", highlight: true },
    { text: "Research setups based on disciplined quantitative & technical models", highlight: false },
  ];

  const looped = [...tickerItems, ...tickerItems];

  return (
    <div className="relative z-50 flex h-8 sm:h-9 w-full items-center border-b border-amber-200/90 bg-amber-50 text-xs text-amber-950 select-none overflow-hidden">
      {/* Fixed Badge on Left */}
      <div className="relative z-10 flex h-full shrink-0 items-center gap-1.5 border-r border-amber-200 bg-amber-100 px-3 font-bold text-amber-900 shadow-xs">
        <AlertTriangle className="h-3.5 w-3.5 text-amber-600 shrink-0" />
        <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold whitespace-nowrap">
          Risk Warning
        </span>
      </div>

      {/* Continuous Marquee track moving from LEFT to RIGHT with seamless CSS fade mask */}
      <div className="flex-1 overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)]">
        <div className="animate-ticker-ltr whitespace-nowrap">
          {looped.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 text-[11px] font-medium"
            >
              {item.highlight ? (
                <span className="font-bold text-amber-950 tracking-tight flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0 animate-pulse" />
                  {item.text}
                </span>
              ) : (
                <span className="text-amber-800 font-medium">{item.text}</span>
              )}
              <span className="text-amber-400 font-bold">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact on right for desktop */}
      <div className="hidden lg:flex relative z-10 h-full shrink-0 items-center gap-3 border-l border-amber-200 bg-amber-100 px-3.5 text-[11px] font-semibold text-amber-900">
        <span className="text-amber-800">Analyst Desk:</span>
        <a
          href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
          className="flex items-center gap-1 text-sky-800 hover:text-sky-950 transition-colors font-bold"
        >
          <Phone className="h-3 w-3 text-sky-700" />
          <span>{siteConfig.displayPhone}</span>
        </a>
      </div>
    </div>
  );
};

