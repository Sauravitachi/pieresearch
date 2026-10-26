import { LegalDocument } from "@/types";

export const legalDocuments: Record<string, LegalDocument> = {
  "terms-and-conditions": {
    slug: "terms-and-conditions",
    title: "Terms and Conditions of Research Service",
    lastUpdated: "October 2026",
    summary:
      "These terms govern your subscription and access to research recommendations, reports, and analytical insights provided under SEBI (Research Analysts) Regulations, 2014.",
    sections: [
      {
        heading: "1. Regulatory Status & Scope of Services",
        content: [
          "The Comet Research is the brand under which Akshay Kumar, a SEBI Registered Research Analyst holding Registration No. INH000031204, publishes research.",
          "Our services are strictly confined to the provision of independent market research reports, technical and quantitative price-action setups, and educational market commentary.",
          "We do not provide portfolio management, discretionary trading, account handling, or assured/guaranteed return products.",
        ],
      },
      {
        heading: "2. Client Execution & Investment Discretion",
        content: [
          "All trade entries, exits, modifications, and position sizing decisions are executed solely by the subscriber at their own discretion and financial risk.",
          "We do not execute trades on behalf of clients or collect funds for trading purposes.",
          "Subscribers are solely responsible for determining whether a particular recommendation is suitable for their risk tolerance, capital constraints, and financial profile.",
        ],
      },
      {
        heading: "3. Subscription Fees & Intellectual Property",
        content: [
          "All subscription fees are non-refundable once the service period has commenced, as research material and trading levels are disbursed immediately.",
          "All reports, trade levels, and proprietary notes are protected intellectual property. Redistribution, reproduction, copying, or forwarding through any medium is strictly prohibited and subject to legal action under Indian copyright laws.",
        ],
      },
      {
        heading: "4. Limitation of Liability",
        content: [
          "Trading in equities, futures, options, and commodities involves substantial capital risk including total loss of capital.",
          "Neither the Research Analyst nor any associated personnel shall be held liable for direct, indirect, incidental, or consequential losses incurred as a result of acting upon published research.",
        ],
      },
    ],
  },
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy & Data Protection Policy",
    lastUpdated: "October 2026",
    summary:
      "We respect your privacy and are committed to safeguarding personal information collected during onboarding and research broadcast delivery.",
    sections: [
      {
        heading: "1. Information We Collect",
        content: [
          "We collect personal identification data such as your full name, phone number, email address, PAN (where required by SEBI KYC mandates), and payment transaction references.",
          "We do NOT store sensitive card credentials, net-banking passwords, or UPI PINs on our servers. All financial transactions are processed via RBI-authorized payment gateways.",
        ],
      },
      {
        heading: "2. How We Use Your Information",
        content: [
          "To deliver timely research alerts via SMS, Telegram, WhatsApp, and dashboard notifications.",
          "To fulfill statutory compliance, verification, and audit requirements under SEBI and Prevention of Money Laundering Act (PMLA) regulations.",
          "To send administrative communications regarding service updates, renewal notices, and policy changes.",
        ],
      },
      {
        heading: "3. Zero Telemarketing & Data Sharing Policy",
        content: [
          "We maintain a strict zero-telemarketing policy. We do not sell, rent, lease, or share client phone numbers or email addresses with third-party brokers, call centers, or marketers.",
          "Client data is shared only with statutory regulatory authorities (e.g. SEBI, Stock Exchanges, or Law Enforcement) when officially required by law.",
        ],
      },
      {
        heading: "4. Data Security",
        content: [
          "All client records are encrypted using industry-standard TLS/SSL encryption and stored in secure data centers with restricted multi-factor access protocols.",
        ],
      },
    ],
  },
  "disclaimer-and-disclosure": {
    slug: "disclaimer-and-disclosure",
    title: "Mandatory SEBI Disclaimers & Conflict Disclosures",
    lastUpdated: "October 2026",
    summary:
      "Statutory disclosures under Regulation 19 of the Securities and Exchange Board of India (Research Analysts) Regulations, 2014.",
    sections: [
      {
        heading: "1. Standard Market Risk Warning",
        content: [
          "Investments in securities market are subject to market risks. Read all the related documents carefully before investing.",
          "Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.",
          "Derivatives trading involves high risk of capital loss. As per SEBI study, 9 out of 10 individual traders in equity F&O segment incurred net losses.",
        ],
      },
      {
        heading: "2. Material Conflict of Interest Disclosures",
        content: [
          "The Research Analyst and its associates do not hold 1% or more financial interest or beneficial ownership in the subject companies analyzed at the time of publication.",
          "The Research Analyst does not have any actual or material conflict of interest at the time of publication of the research report.",
          "The Research Analyst and its associates have not received any compensation from the subject company in the past 12 months for investment banking, merchant banking, or brokerage services.",
          "The Research Analyst has not served as an officer, director, or employee of the subject companies.",
        ],
      },
      {
        heading: "3. Independent Analyst Certification",
        content: [
          "The analyst certifies that all views expressed accurately reflect their personal technical/fundamental analysis regarding the securities or indices analyzed.",
          "No part of the analyst's compensation was, is, or will be directly or indirectly related to specific recommendations or views expressed in research reports.",
        ],
      },
    ],
  },
  "investor-charter": {
    slug: "investor-charter",
    title: "SEBI Investor Charter for Research Analysts",
    lastUpdated: "October 2026",
    summary:
      "A charter outlining the mission, services, rights, and responsibilities of investors dealing with SEBI Registered Research Analysts.",
    sections: [
      {
        heading: "A. Vision and Mission Statements",
        content: [
          "Vision: To protect the interests of investors by enabling fair, transparent, and unbiased research advisory in the securities market.",
          "Mission: To produce objective research recommendations based on sound analytical frameworks, maintaining complete professional integrity.",
        ],
      },
      {
        heading: "B. Details of Business Transacted by Research Analyst",
        content: [
          "Publishing research reports based on independent fundamental and technical analysis.",
          "Disclosing conflict of interest and ownership details transparently.",
          "Providing research recommendations across equities, index derivatives, and commodities.",
          "Maintaining complete record of research rationale, dispatches, and public appearances.",
        ],
      },
      {
        heading: "C. Rights of Investors",
        content: [
          "Right to receive unbiased, independent research reports based on verifiable facts and analysis.",
          "Right to receive all statutory disclosures regarding analyst conflict of interest and holdings.",
          "Right to transparent grievance redressal within statutory SEBI timelines.",
          "Right to access the official SEBI SCORES portal and SMART ODR mechanism if grievances are not resolved satisfactorily.",
        ],
      },
      {
        heading: "D. Responsibilities of Investors",
        content: [
          "Always deal only with SEBI Registered Research Analysts and verify their registration number on the SEBI website.",
          "Do not fall prey to fraudulent promises of assured returns, guaranteed profits, or unauthorized account handling.",
          "Pay subscription fees only through legitimate banking channels / official payment gateways into the designated bank account of the Research Analyst.",
          "Assess your own risk appetite, stop-loss discipline, and financial capacity before executing trades based on research.",
        ],
      },
    ],
  },
  "grievance-redressal": {
    slug: "grievance-redressal",
    title: "Grievance Redressal Policy & Dispute Escalation",
    lastUpdated: "October 2026",
    summary:
      "Structured three-tier dispute resolution mechanism ensuring transparent, prompt, and auditable client grievance redressal.",
    sections: [
      {
        heading: "Level 1: Internal Compliance Redressal",
        content: [
          "Clients may lodge any service grievance or discrepancy by writing directly to our designated compliance desk: akshaykumar20121999@gmail.com or calling +91 80531 61410 during market hours.",
          "All grievances received are officially ticketed and addressed within 7 to 15 working days with a written resolution.",
        ],
      },
      {
        heading: "Level 2: SEBI Complaints Redress System (SCORES 2.0)",
        content: [
          "If the grievance is not resolved to your satisfaction within 30 days, or if you do not receive a response, you may escalate the complaint to SEBI via the centralized SCORES 2.0 web portal: https://scores.sebi.gov.in",
          "You may also download the SEBI SCORES mobile app on Android or iOS for seamless tracking of regulatory escalations.",
          "SEBI Toll-Free Helpline: 1800 22 7575 / 1800 266 7575 (Available in multiple regional languages).",
        ],
      },
      {
        heading: "Level 3: SMART Online Dispute Resolution (ODR) Portal",
        content: [
          "In case the grievance remains unresolved through SCORES, clients can initiate online dispute resolution through the SMART ODR Portal established by SEBI: https://smartodr.in",
          "The SMART ODR platform provides independent conciliation and online arbitration for speedy dispute resolution in the Indian securities market.",
        ],
      },
    ],
  },
};
