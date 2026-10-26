export interface SiteConfig {
  brandName: string;
  legalEntityName: string;
  /** Name of the individual Research Analyst holding the SEBI registration. */
  analystName: string;
  tagline: string;
  subTagline: string;
  sebiRegNo: string;
  /** Registration validity period as published by SEBI. */
  sebiValidity: string;
  nismCertNo: string;
  phone: string;
  displayPhone: string;
  email: string;
  complianceEmail: string;
  supportHours: string;
  registeredOffice: string;
  socials: {
    telegram?: string;
    whatsapp?: string;
    twitter?: string;
    linkedin?: string;
  };
  trustStats: {
    label: string;
    value: string;
    helper?: string;
  }[];
  complianceDisclaimers: {
    standardWarning: string;
    sebiNotice: string;
    generalRiskNotice: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export interface MarketTickerItem {
  symbol: string;
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
  category: "Index" | "Commodity" | "Equity";
}

export interface ResearchSegment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  holdingPeriod: string;
  riskProfile: "Moderate" | "High" | "Very High";
  recommendedCapital: string;
  instruments: string;
  iconName: string;
  badge: string;
  keyFeatures: string[];
}

export interface MethodStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metricBadge: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  quarterlyPrice: number;
  isPopular?: boolean;
  badgeText?: string;
  bestFor: string;
  recommendationsFrequency: string;
  features: string[];
  deliveryMode: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: "Compliance" | "Research" | "Billing" | "Execution";
}

export interface LegalDocument {
  slug: string;
  title: string;
  lastUpdated: string;
  summary: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredSegment: string;
  capitalRange: string;
  acceptTerms: boolean;
}
