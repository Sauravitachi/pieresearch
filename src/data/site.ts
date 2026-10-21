import { SiteConfig } from "@/types";

/**
 * Global Site Configuration & SEBI Compliance Information
 * Edit brand details, contacts, and registration details here.
 */
export const siteConfig: SiteConfig = {
  // Brand name: Replace with your actual brand name if needed
  brandName: "[BRAND NAME]",
  legalEntityName: "[BRAND NAME] RESEARCH SERVICES LLP",
  tagline: "Disciplined, Data-Backed Market Research for Serious Traders",
  subTagline:
    "SEBI Registered Research Analyst providing objective technical & quantitative trade set-ups with pre-defined risk parameters.",
  sebiRegNo: "ooooooooooo",
  nismCertNo: "NISM-Series-XV: Research Analyst Certified",
  phone: "+91 0000000000",
  displayPhone: "+91 0000000000",
  email: "research@brandname.in",
  complianceEmail: "compliance@brandname.in",
  supportHours: "Mon – Fri: 08:30 AM – 05:30 PM IST",
  registeredOffice:
    "Suite 402, Financial Tech Tower, BKC, Bandra East, Mumbai, Maharashtra - 400051",
  socials: {
    telegram: "https://t.me/brandname_research",
    whatsapp: "https://wa.me/919876543210",
    twitter: "https://x.com/brandname_ra",
    linkedin: "https://linkedin.com/company/brandname-research",
  },
  trustStats: [
    { label: "SEBI Reg. Analyst", value: "Active RA", helper: "ooooooooooo" },
    { label: "Rule-Based Setups", value: "100%", helper: "Systematic Models" },
    { label: "Min Risk-to-Reward", value: "1 : 2.5+", helper: "Predefined Invalidation" },
    { label: "Profit Sharing", value: "0%", helper: "Strict SEBI Code" },
  ],
  complianceDisclaimers: {
    standardWarning:
      "Investments in securities market are subject to market risks. Read all the related documents carefully before investing.",
    sebiNotice:
      "Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.",
    generalRiskNotice:
      "Research recommendations are based on technical and fundamental analysis and represent independent analyst opinions. We do not provide guaranteed returns, profit sharing, or portfolio management services. Trading in derivatives (Futures & Options) involves substantial risk of loss.",
  },
};
