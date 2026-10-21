"use client";

import React, { useState } from "react";
import { FileText, TrendingUp, ShieldCheck, ArrowUpRight, BarChart2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface EquityResearchSample {
  id: string;
  tabLabel: string;
  companyName: string;
  ticker: string;
  sector: string;
  recommendation: string;
  cmp: string;
  targetPrice: string;
  upside: string;
  timeHorizon: string;
  roe: string;
  orderBook: string;
  thesis: string;
}

const sampleReports: EquityResearchSample[] = [
  {
    id: "capital-goods",
    tabLabel: "Large-Cap Quality",
    companyName: "Larsen & Toubro Ltd",
    ticker: "NSE: LT",
    sector: "Infrastructure & Defense",
    recommendation: "FUNDAMENTAL ACCUMULATE",
    cmp: "₹3,620",
    targetPrice: "₹4,280",
    upside: "+18.2%",
    timeHorizon: "12 – 18 Months",
    roe: "18.4%",
    orderBook: "₹4.85 Lakh Cr",
    thesis:
      "Core beneficiary of domestic capex expansion with multi-year order book visibility and margin improvement across hydrocarbon and defense verticals.",
  },
  {
    id: "structural-tech",
    tabLabel: "IT & Digital",
    companyName: "Tata Consultancy Services",
    ticker: "NSE: TCS",
    sector: "Technology & Cloud",
    recommendation: "LONG-TERM BUY",
    cmp: "₹4,120",
    targetPrice: "₹4,850",
    upside: "+17.7%",
    timeHorizon: "12 – 24 Months",
    roe: "48.2%",
    orderBook: "$10.2 Bn TCV",
    thesis:
      "Industry-leading balance sheet and operating free cash flow. Poised for accelerating client digital spend and enterprise AI integration.",
  },
  {
    id: "consumer-growth",
    tabLabel: "Consumer Compounder",
    companyName: "Titan Company Ltd",
    ticker: "NSE: TITAN",
    sector: "Branded Lifestyle & Retail",
    recommendation: "ACCUMULATE ON DIPS",
    cmp: "₹3,450",
    targetPrice: "₹4,050",
    upside: "+17.4%",
    timeHorizon: "12 – 18 Months",
    roe: "26.8%",
    orderBook: "3,000+ Stores",
    thesis:
      "Sustained formalization of Indian jewelry retail with double-digit network expansion and premium brand pricing power.",
  },
];

export const ResearchPreviewCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(sampleReports[0].id);
  const activeReport = sampleReports.find((r) => r.id === activeTab) || sampleReports[0];

  return (
    <div className="relative rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(2,132,199,0.08)]">
      {/* Soft ambient sky blue glow highlight */}
      <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

      {/* Terminal Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
            <FileText className="h-3.5 w-3.5" />
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800">
            Institutional Research Note
          </span>
        </div>

        <Badge variant="outline" className="text-[10px] py-0.5 px-2 bg-slate-50 text-slate-600 border-slate-200 font-semibold">
          Sample Valuation Thesis
        </Badge>
      </div>

      {/* Sector Category Switcher Tabs */}
      <div className="flex items-center gap-1.5 pt-3.5 pb-1">
        {sampleReports.map((report) => (
          <button
            key={report.id}
            type="button"
            onClick={() => setActiveTab(report.id)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200",
              activeTab === report.id
                ? "bg-sky-50 text-sky-700 border border-sky-200/90 shadow-xs"
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            )}
          >
            {report.tabLabel}
          </button>
        ))}
      </div>

      {/* Company Title & Recommendation Pill */}
      <div className="my-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <span>{reportBadgeLabel(activeReport.sector)}</span>
              <span>•</span>
              <span className="font-mono text-[11px] text-slate-600 font-bold">{activeReport.ticker}</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5 tracking-tight">
              {activeReport.companyName}
            </h4>
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-1 rounded-md bg-sky-50 text-sky-700 border border-sky-200/80">
            <TrendingUp className="h-3 w-3" />
            <span>{activeReport.recommendation}</span>
          </span>
        </div>

        {/* Valuation & Price Target Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <p className="text-[10px] uppercase font-bold text-slate-400">Current Price</p>
            <p className="font-extrabold text-slate-900 text-sm mt-0.5">{activeReport.cmp}</p>
          </div>
          <div className="p-2.5 rounded-xl bg-sky-50/50 border border-sky-100">
            <p className="text-[10px] uppercase font-bold text-sky-600">Target Value</p>
            <p className="font-extrabold text-sky-600 text-sm mt-0.5">{activeReport.targetPrice}</p>
          </div>
          <div className="p-2.5 rounded-xl bg-sky-50/80 border border-sky-200/80">
            <p className="text-[10px] uppercase font-bold text-sky-700">Upside Potential</p>
            <p className="font-extrabold text-sky-700 text-sm mt-0.5">{activeReport.upside}</p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <p className="text-[10px] uppercase font-bold text-slate-400">Horizon</p>
            <p className="font-extrabold text-slate-800 text-sm mt-0.5">{activeReport.timeHorizon}</p>
          </div>
        </div>

        {/* Fundamental Health Metrics */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 rounded-lg bg-slate-50/60 border border-slate-100 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 font-medium">Return on Equity (RoE)</span>
            <span className="font-bold text-slate-800">{activeReport.roe}</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-50/60 border border-slate-100 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 font-medium">Order Book / Revenue</span>
            <span className="font-bold text-slate-800">{activeReport.orderBook}</span>
          </div>
        </div>
      </div>

      {/* Research Thesis / Rationale */}
      <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs">
        <p className="text-[11px] leading-relaxed text-slate-600 bg-sky-50/40 p-3 rounded-xl border-l-2 border-sky-600">
          <strong className="text-slate-900 font-bold block mb-1">Fundamental Research Thesis:</strong>
          {activeReport.thesis}
        </p>

        <p className="text-[10px] text-slate-400 flex items-center gap-1 pt-0.5">
          <ShieldCheck className="h-3 w-3 shrink-0 text-sky-600" />
          Prepared under SEBI (Research Analysts) Regulations, 2014. For sample illustration only.
        </p>
      </div>
    </div>
  );
};

function reportBadgeLabel(sector: string): string {
  return sector;
}
