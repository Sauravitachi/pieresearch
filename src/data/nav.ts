import { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  {
    label: "Segments",
    href: "#segments",
  },
  {
    label: "Methodology",
    href: "#methodology",
  },
  {
    label: "Why Us",
    href: "#why-us",
  },
  {
    label: "Plans",
    href: "#plans",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Legal",
    href: "#",
    children: [
      {
        label: "Terms & Conditions",
        href: "/terms-and-conditions",
        description: "User agreement, advisory guidelines, and service boundaries",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        description: "How your data is encrypted, stored, and protected",
      },
      {
        label: "Disclaimer & Disclosure",
        href: "/disclaimer-and-disclosure",
        description: "Mandatory SEBI RA disclosures and conflict of interest declarations",
      },
      {
        label: "Investor Charter",
        href: "/investor-charter",
        description: "SEBI charter outlining investor rights, duties, and advisory process",
      },
      {
        label: "Grievance Redressal",
        href: "/grievance-redressal",
        description: "Compliance officer contact, SCORES portal, and SMART ODR mechanism",
      },
    ],
  },
];

export const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer & Disclosure", href: "/disclaimer-and-disclosure" },
  { label: "Investor Charter", href: "/investor-charter" },
  { label: "Grievance Redressal", href: "/grievance-redressal" },
];
