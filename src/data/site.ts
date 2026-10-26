import { SiteConfig } from "@/types";

/**
 * Global Site Configuration & SEBI Compliance Information
 * Registration details mirror the SEBI "Recognized Intermediaries" public record.
 * Edit brand details, contacts, and registration details here.
 */
export const siteConfig: SiteConfig = {
  brandName: "The Comet Research",
  // INH-series registrations are granted to an individual, not a company.
  legalEntityName: "Akshay Kumar, Proprietor — The Comet Research",
  analystName: "Akshay Kumar",
  tagline: "Disciplined, Data-Backed Market Research for Serious Traders",
  subTagline:
    "SEBI Registered Research Analyst providing objective technical & quantitative trade set-ups with pre-defined risk parameters.",
  sebiRegNo: "INH000031204",
  sebiValidity: "Oct 23, 2026 – Perpetual",
  nismCertNo: "NISM-Series-XV: Research Analyst Certified",
  phone: "+91 80531 61410",
  displayPhone: "+91 80531 61410",
  email: "akshaykumar20121999@gmail.com",
  complianceEmail: "akshaykumar20121999@gmail.com",
  supportHours: "Mon – Fri: 08:30 AM – 05:30 PM IST",
  registeredOffice:
    "Code Brew, Plot No. 1-36, Sector 83 Alpha, Mohali, SAS Nagar, Punjab – 140308",
  socials: {
    whatsapp: "https://wa.me/918053161410",
  },
  trustStats: [
    { label: "SEBI Reg. Analyst", value: "Active RA", helper: "INH000031204" },
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
