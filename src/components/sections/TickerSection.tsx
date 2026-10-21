import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { MarketTickerItem } from "@/types";

interface TickerSectionProps {
  items: MarketTickerItem[];
}

export const TickerSection: React.FC<TickerSectionProps> = ({ items }) => {
  const loopedItems = [...items, ...items];

  return (
    <div className="w-full bg-slate-50 border-y border-slate-200 py-3 overflow-hidden select-none">
      <div className="flex animate-ticker whitespace-nowrap">
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
                <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600" />
              ) : (
                <ArrowDownRight className="h-3.5 w-3.5 text-red-500" />
              )}
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
