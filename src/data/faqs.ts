import { FaqItem } from "@/types";

export const faqsData: FaqItem[] = [
  {
    id: "sebi-registration",
    question: "Are you a SEBI Registered Research Analyst?",
    answer:
      "Yes. We are registered with the Securities and Exchange Board of India (SEBI) as a Research Analyst under Registration Number ooooooooooo, in strict accordance with the SEBI (Research Analysts) Regulations, 2014. You can verify our credential directly on the official SEBI website under Recognized Intermediaries.",
    category: "Compliance",
  },
  {
    id: "how-recommendations-delivered",
    question: "How and when are trade recommendations delivered?",
    answer:
      "All recommendations are broadcast instantaneously via our verified Telegram alert channel, SMS/WhatsApp alerts, and the subscriber web dashboard. Morning market preparation notes are sent at 08:45 AM IST, while intraday and momentum alerts are delivered in real time with explicit entry price ranges, target levels, and stop-loss orders.",
    category: "Execution",
  },
  {
    id: "do-you-provide-guaranteed-returns",
    question: "Do you offer guaranteed returns or profit-sharing services?",
    answer:
      "No. In strict compliance with SEBI guidelines, we NEVER provide guaranteed returns, profit assurances, or profit-sharing arrangements. We do not manage client funds or trade on clients' behalf. We provide purely objective research analysis with risk-reward parameters; actual trade execution remains solely under client discretion.",
    category: "Compliance",
  },
  {
    id: "minimum-capital-needed",
    question: "What is the recommended trading capital to start?",
    answer:
      "While there is no legal minimum, we advise maintaining a minimum trading capital of ₹50,000 for Index Options, ₹1,00,000 for Equity Cash Swing, and ₹2,50,000 for Stock Futures to effectively manage position sizing and keep portfolio risk below 2% per trade.",
    category: "Research",
  },
  {
    id: "stop-loss-policy",
    question: "How do you calculate Stop-Loss and manage downside risk?",
    answer:
      "Every single research call comes with a non-negotiable stop-loss level anchored to market structure (e.g. swing high/low, ATR bands, or VWAP invalidation). We strongly advocate disciplined risk budgeting, keeping maximum risk on any single trade to 1–2% of overall trading capital.",
    category: "Research",
  },
  {
    id: "refund-and-cancellation",
    question: "What is your refund and cancellation policy?",
    answer:
      "Subscription fees are non-refundable once the advisory period commences, as intellectual research reports and actionable levels are disbursed immediately. We encourage prospects to thoroughly review our methodology, historical performance log, and disclaimers before subscribing.",
    category: "Billing",
  },
];
