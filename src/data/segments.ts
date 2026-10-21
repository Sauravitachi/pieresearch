import { ResearchSegment } from "@/types";

export const researchSegmentsData: ResearchSegment[] = [
  {
    id: "index-options",
    title: "Index Options",
    subtitle: "Systematic directional & momentum option setups",
    description:
      "Calculated calls and puts on Nifty 50 and Bank Nifty with predefined stop-loss, dual profit targets, and trailing levels.",
    holdingPeriod: "Intraday to 1-2 Days",
    riskProfile: "Very High",
    recommendedCapital: "₹50,000 – ₹1,50,000",
    instruments: "Nifty & Bank Nifty CE/PE",
    iconName: "TrendingUp",
    badge: "High Liquidity",
    keyFeatures: [
      "Strict 1:2 or higher risk-reward parameter",
      "Open Interest & PCR data-backed entries",
      "Real-time update on target achievement & exit",
    ],
  },
  {
    id: "stock-futures",
    title: "Stock Futures",
    subtitle: "High relative-strength F&O scrip setups",
    description:
      "Trend-following and price-action momentum setups in liquid NSE F&O equities, backed by institutional volume filtration.",
    holdingPeriod: "1 to 5 Trading Sessions",
    riskProfile: "Very High",
    recommendedCapital: "₹2,50,000 – ₹5,00,000",
    instruments: "NSE F&O Listed Stocks",
    iconName: "BarChart3",
    badge: "Trend Following",
    keyFeatures: [
      "Breakout setups verified with delivery spikes",
      "Position sizing guidelines per trade",
      "Disciplined trailing stop-loss protection",
    ],
  },
  {
    id: "equity-cash",
    title: "Equity Cash (Swing)",
    subtitle: "Fundamentally sound momentum breakouts",
    description:
      "Non-leveraged swing trades designed for retail and HNI investors looking for consistent capital compounding without overnight margin decay.",
    holdingPeriod: "1 to 4 Weeks",
    riskProfile: "Moderate",
    recommendedCapital: "₹1,00,000 – ₹10,00,000",
    instruments: "Nifty 500 Cash Equities",
    iconName: "PieChart",
    badge: "Low Overnight Decay",
    keyFeatures: [
      "Zero leverage risk – 100% cash segment",
      "Weekly and monthly chart pattern confirmations",
      "Comprehensive research note with each idea",
    ],
  },
  {
    id: "mcx-commodities",
    title: "MCX Commodities",
    subtitle: "Key pivot levels for Gold, Silver & Energy",
    description:
      "Technical setup alerts for precious metals and energy contracts correlating global macroeconomic triggers with domestic MCX levels.",
    holdingPeriod: "Intraday / Positional",
    riskProfile: "High",
    recommendedCapital: "₹1,50,000 – ₹3,00,000",
    instruments: "Gold, Silver, Crude Oil, Nat Gas",
    iconName: "Boxes",
    badge: "Evening Trading",
    keyFeatures: [
      "Evening session coverage (5:00 PM – 11:30 PM)",
      "Global inventory & dollar index correlation",
      "Definite invalidation price for every setup",
    ],
  },
  {
    id: "intraday-momentum",
    title: "Intraday Momentum",
    subtitle: "Fast-paced morning session breakout ideas",
    description:
      "Rapid setups generated between 09:15 AM and 11:30 AM based on opening-range breakouts, VWAP retests, and sectoral surges.",
    holdingPeriod: "Purely Intraday (Close by 3:15 PM)",
    riskProfile: "Very High",
    recommendedCapital: "₹75,000 – ₹2,00,000",
    instruments: "High Beta Cash & Stock Options",
    iconName: "Zap",
    badge: "Quick Turnaround",
    keyFeatures: [
      "All trades closed before market close",
      "Tight stop-loss to preserve trading capital",
      "Quick actionable telegram/SMS notifications",
    ],
  },
  {
    id: "positional-delivery",
    title: "Positional Delivery",
    subtitle: "Multi-month structural compounding ideas",
    description:
      "High-conviction medium-term ideas identifying emerging sectoral leaders, earnings turnaround themes, and institutional accumulation.",
    holdingPeriod: "1 to 6 Months",
    riskProfile: "Moderate",
    recommendedCapital: "₹2,00,000 – ₹20,00,000",
    instruments: "Midcap & Largecap Equities",
    iconName: "ShieldCheck",
    badge: "Wealth Compounding",
    keyFeatures: [
      "Detailed fundamental + technical PDF report",
      "Quarterly business earnings tracking",
      "Phased entry & staggered profit targets",
    ],
  },
];
