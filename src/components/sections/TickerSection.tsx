import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { MarketTickerItem } from "@/types";
import { Marquee } from "@/components/ui/Marquee";

interface TickerSectionProps {
  items: MarketTickerItem[];
}

export const TickerSection: React.FC<TickerSectionProps> = ({ items }) => {
  const loopedItems = [...items, ...items];

  return (
    <div className="flex w-full items-center border-y border-slate-200 bg-slate-50 py-3 select-none">
      <Marquee
        trackClassName="animate-ticker"
        label="market ticker"
        className="flex-1"
        buttonClassName="mx-2 border border-slate-300 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      >
        {loopedItems.map((item, idx) => (
          <div
            key={`${item.symbol}-${idx}`}
            className="inline-flex items-center gap-3 px-6 border-r border-slate-200 text-xs"
          >
            <span className="font-bold text-slate-800 tracking-wider">
              {item.symbol}
            </span>
            <span className="font-semibold text-slate-600">{item.value}</span>
            <span
              className={`inline-flex items-center gap-0.5 font-bold ${
                item.isPositive ? "text-emerald-700" : "text-red-600"
              }`}
            >
              {item.isPositive ? (
                <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
              ) : (
                <ArrowDownRight className="h-3.5 w-3.5 text-red-500" aria-hidden />
              )}
              {item.change}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
