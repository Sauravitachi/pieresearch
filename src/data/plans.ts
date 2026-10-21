import { PricingPlan } from "@/types";

export const pricingPlansData: PricingPlan[] = [
  {
    id: "equity-cash-plan",
    name: "Equity Momentum",
    tagline: "Ideal for retail investors and capital compounders who avoid overnight F&O decay.",
    monthlyPrice: 4999,
    quarterlyPrice: 12499,
    isPopular: false,
    bestFor: "Swing & Positional Traders",
    recommendationsFrequency: "3 to 5 high-conviction ideas / week",
    deliveryMode: "Dashboard + WhatsApp / SMS",
    features: [
      "Swing setups in Nifty 500 cash segment",
      "Exact Buy Range, Target 1, Target 2 & Stop-Loss",
      "Detailed fundamental + chart thesis PDF",
      "Risk-reward calibration (Minimum 1:2.5)",
      "Dedicated market hours query support",
      "Quarterly sectoral outlook report",
    ],
  },
  {
    id: "derivatives-pro-plan",
    name: "Derivatives Pro",
    tagline: "Engineered for active index and stock options traders needing rapid execution setups.",
    monthlyPrice: 8999,
    quarterlyPrice: 22999,
    isPopular: true,
    badgeText: "Most Popular",
    bestFor: "Active F&O & Day Traders",
    recommendationsFrequency: "1 to 3 disciplined setups / day",
    deliveryMode: "Ultra-Fast Telegram Bot + Dashboard",
    features: [
      "Nifty & Bank Nifty Directional Option Strategies",
      "Stock Futures & Momentum Breakout setups",
      "Open Interest (OI) & PCR institutional analysis",
      "Tight Stop-Loss & strict trailing alerts",
      "Morning pre-market battle plan (08:45 AM)",
      "Live market commentary during high-volatility spikes",
      "Direct priority analyst access via WhatsApp",
    ],
  },
  {
    id: "comprehensive-alpha-plan",
    name: "Institutional Alpha",
    tagline: "Our all-inclusive research suite covering Equities, Derivatives, and MCX Commodities.",
    monthlyPrice: 14999,
    quarterlyPrice: 37999,
    isPopular: false,
    badgeText: "Full Suite",
    bestFor: "HNIs, Family Offices & Full-Time Traders",
    recommendationsFrequency: "Complete coverage across all desks",
    deliveryMode: "Priority Bot + Direct Analyst Hotdesk",
    features: [
      "Complete access: Equity Cash, F&O and MCX",
      "MCX Precious Metals & Crude Oil evening setups",
      "Special Situations (Demergers, Buybacks, Turnarounds)",
      "Weekly 1-on-1 strategy call with lead analyst",
      "Custom position sizing & portfolio risk review",
      "Exclusive access to proprietary quantitative models",
      "Priority VIP grievance and support channel",
    ],
  },
];

export const plansComplianceNote =
  "Disclaimer: Fees paid are purely for independent research reports and analysis under SEBI (Research Analysts) Regulations, 2014. No assurance of returns or profit guarantees are provided. Goods and Services Tax (GST) at 18% is applicable on all subscription plans as per statutory norms.";
