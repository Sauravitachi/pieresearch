import { MethodStep } from "@/types";

export const methodologySteps: MethodStep[] = [
  {
    step: 1,
    title: "Algorithmic Universe Filtering",
    subtitle: "Liquidity & Relative Strength Scan",
    description:
      "We screen over 2,000 actively traded scrips daily to filter only top-tier liquid equities and index contracts with institutional participation.",
    iconName: "Search",
    deliverables: [
      "Average daily turnover > ₹50 Cr filter",
      "Sectoral relative strength scoring",
      "Event and corporate action exclusion",
    ],
  },
  {
    step: 2,
    title: "Multi-Timeframe Price Action",
    subtitle: "Confluence of Structure & Volume",
    description:
      "Every candidate setup is audited across Daily, Hourly, and 15-Minute charts to verify breakout conviction, VWAP positioning, and key support-resistance zones.",
    iconName: "Layers",
    deliverables: [
      "Higher timeframe trend alignment",
      "Volume-spread analysis (VSA)",
      "Moving average dynamic support tests",
    ],
  },
  {
    step: 3,
    title: "Derivatives & Open Interest Audit",
    subtitle: "Option Chain & Put-Call Ratio Check",
    description:
      "For F&O recommendations, we analyze strike-wise open interest buildups, unwinding patterns, and changes in implied volatility to gauge big-money stance.",
    iconName: "Activity",
    deliverables: [
      "Strike concentration analysis",
      "Rollover percentage evaluation",
      "Futures long/short buildup verification",
    ],
  },
  {
    step: 4,
    title: "Risk-Reward & Position Framing",
    subtitle: "Defined Invalidation & Dual Targets",
    description:
      "No setup is published without an exact entry range, a mathematically grounded stop-loss level, and a minimum 1:2 expected risk-to-reward ratio.",
    iconName: "Crosshair",
    deliverables: [
      "Calculated stop-loss based on swing pivots",
      "Target 1 (safe lock) & Target 2 (extended)",
      "Suggested allocation / risk percentage",
    ],
  },
  {
    step: 5,
    title: "Instant Encrypted Broadcast",
    subtitle: "Direct to Dashboard & Instant Messaging",
    description:
      "Research dispatches are beamed simultaneously to subscribers via private Telegram bot and user dashboard with clear visual entry zones.",
    iconName: "Send",
    deliverables: [
      "Zero latency broadcast",
      "Clear buy/sell price band",
      "Follow-up alerts for trailing or exit",
    ],
  },
  {
    step: 6,
    title: "Post-Trade Audit & Transparency",
    subtitle: "Documented Invalidation & Performance Log",
    description:
      "Every call — whether hit target, trailed out, or stopped out — is permanently logged in our performance audit log for total client accountability.",
    iconName: "FileCheck",
    deliverables: [
      "Unedited audit trails",
      "Monthly risk & drawdown review",
      "Continuous feedback loop into models",
    ],
  },
];
