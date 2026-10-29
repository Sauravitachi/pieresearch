import { LegalDocument } from "@/types";
import { siteConfig } from "@/data/site";

export const legalDocuments: Record<string, LegalDocument> = {
  "terms-and-conditions": {
    slug: "terms-and-conditions",
    title: "Terms and Conditions of Research Service",
    lastUpdated: "October 2026",
    summary:
      "These terms govern your access to this website and your subscription to research recommendations, reports, and analytical insights published under the SEBI (Research Analysts) Regulations, 2014.",
    sections: [
      {
        heading: "1. Regulatory Status & Scope of Services",
        content: [
          `${siteConfig.brandName} is the brand under which ${siteConfig.analystName}, a SEBI Registered Research Analyst holding Registration No. ${siteConfig.sebiRegNo}, publishes research.`,
          "Our services are strictly confined to independent market research reports, technical and quantitative price-action setups, and educational market commentary on Indian securities.",
          "We do not provide portfolio management, discretionary trading, demat or broking services, merchant banking, investment banking, or assured-return products of any kind.",
          "We have no third-party execution, distribution, or sub-broking partners, and we receive no compensation, referral fee, or revenue share from any broker, platform, or product issuer.",
        ],
      },
      {
        heading: "2. Eligibility to Subscribe",
        content: [
          "You must be at least 18 years of age (21 where a legal guardian has been appointed) and competent to enter into a binding contract under the Indian Contract Act, 1872.",
          "Persons of unsound mind and undischarged insolvents are not eligible to subscribe.",
          "Services are offered only in jurisdictions where it is lawful to do so. We reserve the right to decline, restrict, or discontinue service to any person at our discretion.",
          "Non-resident subscribers are responsible for confirming that any security discussed is permissible for them under RBI and FEMA rules, including the RBI prohibited and caution lists.",
        ],
      },
      {
        heading: "3. Use of Website Content & Intellectual Property",
        content: [
          "All reports, trade levels, charts, written notes, and site content are the intellectual property of the Research Analyst or its licensors and are protected under Indian copyright law.",
          "You may view and download material for your own personal, non-commercial use provided all ownership and attribution notices are left intact.",
          "You may not modify, republish, redistribute, resell, broadcast, forward, or create derivative works from our content, in any medium, without prior written consent. Breach may lead to immediate termination without refund and to legal action.",
          "Nothing on this website grants any licence to use our name, logo, or trademarks.",
        ],
      },
      {
        heading: "4. Subscription Fees, Payment & Refund Policy",
        content: [
          "Fees payable, the applicable plan, and the service period are those displayed at the time you place your order. Fees, plans, and promotional offers may change at any time, and such changes do not affect an order already placed.",
          "Research levels and reports are delivered immediately upon activation. Accordingly, subscription fees are non-refundable and non-cancellable once the service period has commenced, except where a refund is required by applicable law.",
          "Any refund or credit granted at our discretion in a particular case does not create an obligation to grant one in any other case.",
          "We do not accept funds for trading, pooled investment, or custody of client assets under any circumstance. Payments are accepted only towards research subscription fees, through banking channels, into the designated account of the Research Analyst.",
          "By making payment you confirm that you have read these terms, the Privacy Policy, and the Disclaimer and Disclosure page, and that you have reviewed the nature of the service before subscribing.",
        ],
      },
      {
        heading: "5. Client Execution & Investment Discretion",
        content: [
          "All trade entries, exits, modifications, and position-sizing decisions are taken and executed solely by the subscriber, at the subscriber's own discretion and financial risk.",
          "We do not execute trades on behalf of clients, operate client accounts, or accept trading authority of any kind.",
          "Subscribers remain solely responsible for assessing whether a particular recommendation suits their risk tolerance, capital, tax position, and financial objectives, and are encouraged to consult their own advisers.",
        ],
      },
      {
        heading: "6. Communications, Alerts & Consent",
        content: [
          "Research is delivered through email, SMS, messaging applications, and dashboard notifications. By subscribing you consent to receive service-related communications through these channels, including where your number is registered under the DND registry, for the duration of your subscription.",
          "Delivery of SMS, email, and app notifications depends on networks and third-party service providers. We are not liable for delayed or failed delivery arising from factors outside our control.",
          "You are responsible for keeping your registered contact details accurate and current. We are not liable for research that fails to reach you because of incorrect or outdated contact details.",
        ],
      },
      {
        heading: "7. Confidentiality & Non-Transferable Access",
        content: [
          "Research content, trade levels, and login credentials are issued to the named subscriber alone and are not transferable or assignable.",
          "Sharing credentials, forwarding research to non-subscribers, or operating a group or channel using our content is a material breach and may result in immediate termination without a pro-rated refund.",
          "Information either party designates as confidential may still be disclosed where required by law, by a court, or by a regulator.",
        ],
      },
      {
        heading: "8. No Warranty on Accuracy",
        content: [
          "Research is prepared from sources believed to be reliable, but we do not warrant the accuracy, completeness, or timeliness of any data, price, or level published.",
          "Nothing published constitutes an offer, solicitation, or inducement to buy or sell any security.",
          "You rely on our research at your own risk and are expected to carry out your own verification and due diligence before acting.",
        ],
      },
      {
        heading: "9. Third-Party Links",
        content: [
          "This website may link to third-party sites and services that we neither review nor control. Such links are provided for convenience and do not imply endorsement.",
          "We accept no responsibility for the content, accuracy, security, or privacy practices of any third-party site.",
        ],
      },
      {
        heading: "10. Indemnification",
        content: [
          "You agree to indemnify and hold harmless the Research Analyst and associated personnel against claims, losses, liabilities, and reasonable legal costs arising from your use or misuse of the service, your breach of these terms, or any inaccurate information you supply.",
          "We may assume control of the defence of any such claim and will make reasonable efforts to notify you of third-party claims relating to your use of the service.",
        ],
      },
      {
        heading: "11. Limitation of Liability",
        content: [
          "Trading in equities, futures, options, and commodities involves substantial risk, including the total loss of capital.",
          "Neither the Research Analyst nor any associated personnel shall be liable for any direct, indirect, incidental, or consequential loss arising from acting upon published research, from reliance on site content, or from unauthorised access to or manipulation of data by third parties.",
        ],
      },
      {
        heading: "12. Grievances & Complaints",
        content: [
          `Please raise any query, suggestion, or grievance with us first, by writing to ${siteConfig.complianceEmail} or calling ${siteConfig.displayPhone} during support hours.`,
          "If you are not satisfied with our response, the escalation route through SEBI SCORES and the SMART ODR portal is set out on our Grievance Redressal page.",
        ],
      },
      {
        heading: "13. Severability & Amendments",
        content: [
          "If any provision of these terms is held invalid or unenforceable, the remaining provisions continue in full force.",
          "We may add to, change, or withdraw website content and may revise these terms at any time. Continued use of the service after a revision constitutes acceptance of the revised terms.",
          "These terms are to be read together with our Privacy Policy and our Disclaimer and Disclosure page.",
        ],
      },
      {
        heading: "14. Governing Law & Jurisdiction",
        content: [
          "These terms are governed by and construed in accordance with the laws of India.",
          "Subject to the SEBI grievance and dispute-resolution mechanisms available to investors, the courts at SAS Nagar (Mohali), Punjab shall have exclusive jurisdiction over any dispute arising from the use of this website or the service.",
        ],
      },
    ],
  },
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy & Data Protection Policy",
    lastUpdated: "October 2026",
    summary:
      "How we collect, use, store, and protect personal information gathered during onboarding and research delivery, under the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.",
    sections: [
      {
        heading: "1. Scope & Applicable Law",
        content: [
          `This policy applies to this website and to any application or messaging channel operated by ${siteConfig.brandName}.`,
          "It is framed in accordance with the Information Technology Act, 2000 and the rules made under it, the Digital Personal Data Protection Act, 2023, and the record-keeping obligations applicable to a SEBI Registered Research Analyst.",
        ],
      },
      {
        heading: "2. Information We Collect",
        content: [
          "Identification and contact data: full name, phone number, email address, postal address, and PAN or other KYC documents where required under SEBI and PMLA obligations.",
          "Transaction data: subscription plan, payment references, invoices, and renewal history. We do not store card credentials, net-banking passwords, or UPI PINs; payments are processed by RBI-authorised gateways.",
          "Technical data: IP address, device and browser information, language and time-zone preferences, pages visited, and the page you arrived from.",
          "Correspondence: records of calls, emails, and messages exchanged with us, along with any feedback or testimonial you choose to provide.",
          "If you submit another person's details, you confirm you have their consent to do so. Service may be suspended where KYC information is incomplete, inconsistent, or unverifiable.",
        ],
      },
      {
        heading: "3. How We Use Your Information",
        content: [
          "To deliver the research service you have subscribed to, including reports, trade levels, and alerts by email, SMS, messaging applications, and dashboard notifications.",
          "To raise invoices, process and reconcile payments, and manage renewals.",
          "To meet statutory compliance, verification, audit, and record-retention requirements under SEBI and PMLA regulations.",
          "To administer and secure the website, diagnose technical faults, prevent fraud and misuse, and compile aggregate usage statistics that do not identify any individual.",
          "To send administrative notices about service changes, renewals, and updates to our policies.",
        ],
      },
      {
        heading: "4. Cookies & Analytics",
        content: [
          "We use cookies and similar technologies to keep the site working correctly and to remember your preferences.",
          "We may use third-party analytics to understand aggregate traffic and usage patterns. Analytics providers process this data under their own terms.",
          "Most browsers allow you to refuse or delete cookies. Disabling them may affect parts of the site.",
        ],
      },
      {
        heading: "5. Disclosure of Information",
        content: [
          "We maintain a strict zero-telemarketing policy. We do not sell, rent, lease, or trade client phone numbers or email addresses with brokers, call centres, advertisers, or marketers.",
          "Access within our team is limited to personnel who need it in order to deliver the service.",
          "We share data with service providers only to the extent required to run the service, such as email and SMS delivery, payment processing, and IT hosting. These providers are bound to use the data solely for that purpose.",
          "We disclose information to SEBI, stock exchanges, tax authorities, law enforcement, or a court where we are legally required to do so.",
          "Aggregated or de-identified information that cannot identify an individual may be used and shared without restriction.",
        ],
      },
      {
        heading: "6. Data Security",
        content: [
          "Client records are transmitted over TLS/SSL encryption and stored with access restricted to authorised personnel.",
          "We apply access controls, encryption at rest where appropriate, and periodic review of our security practices.",
          "No method of transmission or storage is completely secure. We cannot guarantee absolute security, and you share information with us on that understanding.",
        ],
      },
      {
        heading: "7. Retention & Erasure of Data",
        content: [
          "We retain personal data for as long as the subscription is active and thereafter for the period required by SEBI record-keeping, tax, and audit obligations.",
          `You may request deletion of your data and closure of your account by writing to ${siteConfig.complianceEmail}.`,
          "Certain records may be retained after a deletion request where retention is required for legal reporting, fraud prevention, or dispute resolution. De-identified logs and routine backups may persist for a limited period.",
        ],
      },
      {
        heading: "8. Your Choices & Opt-Out",
        content: [
          `You may opt out of promotional emails, SMS, and calls at any time by writing to ${siteConfig.complianceEmail}.`,
          "Service-related communications necessary to deliver an active subscription, and communications we are required to send under regulation, will continue for the duration of that subscription.",
          "You may also request access to, or correction of, the personal data we hold about you.",
        ],
      },
      {
        heading: "9. Phishing & Impersonation",
        content: [
          "We will never ask for your trading account password, net-banking credentials, UPI PIN, or OTP. No employee or representative has any reason to request them.",
          "We do not operate any payment channel other than those published on this website, and we do not accept funds into any account other than the designated account of the Research Analyst.",
          `If you receive a message that appears to be from us but asks for credentials or payment to an unfamiliar account, do not respond. Report it to ${siteConfig.complianceEmail} immediately.`,
        ],
      },
      {
        heading: "10. Third-Party Websites & Services",
        content: [
          "This policy does not apply to third-party websites, applications, or services that you reach through links on this site.",
          "Where you grant a third party access to your account or content, you do so at your own risk and under that party's terms.",
        ],
      },
      {
        heading: "11. Changes to This Policy & Business Transfer",
        content: [
          "We may update this policy from time to time. Material changes will be notified on this page, and continued use of the service after an update constitutes acceptance of it.",
          "If the business is transferred, merged, or restructured, personal data may transfer as part of that transaction. We will take reasonable steps to ensure it continues to be protected and will give notice before any materially different policy applies.",
        ],
      },
      {
        heading: "12. Contact",
        content: [
          `Questions, requests, or concerns about this policy may be addressed to ${siteConfig.analystName} at ${siteConfig.complianceEmail} or ${siteConfig.displayPhone}.`,
          `Registered office: ${siteConfig.registeredOffice}.`,
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
        heading: "2. Registration & Scope of Services",
        content: [
          `${siteConfig.brandName} is the brand under which ${siteConfig.analystName}, a SEBI Registered Research Analyst holding Registration No. ${siteConfig.sebiRegNo}, publishes research.`,
          "We publish research-based opinions on Indian equity, derivative, and commodity market opportunities over short and longer holding periods.",
          "We do not offer merchant banking, investment banking, investment advisory, portfolio management, broking, or distribution services.",
          "We have no third-party execution or distribution partners and receive no compensation, brokerage share, or referral fee from any such party.",
        ],
      },
      {
        heading: "3. No Assured Returns & No Profit Sharing",
        content: [
          "We do not promise, indicate, or guarantee any return, profit, success rate, or capital protection, and no representative is authorised to do so on our behalf.",
          "We do not operate profit-sharing arrangements and do not accept funds for trading, pooling, or custody.",
          "Past performance of any recommendation, strategy, or model is not indicative of future results.",
        ],
      },
      {
        heading: "4. Material Conflict of Interest Disclosures",
        content: [
          "The Research Analyst and its associates do not hold 1% or more financial interest or beneficial ownership in the subject companies analyzed at the time of publication.",
          "The Research Analyst does not have any actual or material conflict of interest at the time of publication of the research report.",
          "The Research Analyst and its associates have not received any compensation from the subject company in the past 12 months for investment banking, merchant banking, or brokerage services.",
          "The Research Analyst has not served as an officer, director, or employee of the subject companies.",
          "Where a material conflict exists in respect of a particular report, it will be disclosed within that report itself.",
        ],
      },
      {
        heading: "5. Independent Analyst Certification",
        content: [
          "The analyst certifies that all views expressed accurately reflect their personal technical/fundamental analysis regarding the securities or indices analyzed.",
          "No part of the analyst's compensation was, is, or will be directly or indirectly related to specific recommendations or views expressed in research reports.",
          "The analyst is not compensated in any form by the companies that are the subject of our research.",
        ],
      },
      {
        heading: "6. Accuracy, Completeness & Liability",
        content: [
          "Research is prepared from sources believed to be reliable, but we do not guarantee the accuracy, completeness, or timeliness of any data, price, level, or statement published.",
          "We accept no liability for any decision taken on the basis of our content, nor for loss arising from unauthorised access to, interception of, or manipulation of our communications by third parties.",
          "Recommendations may be revised or withdrawn at any time without prior notice.",
        ],
      },
      {
        heading: "7. Educational Purpose & Costs Not Included",
        content: [
          "Levels, charts, and illustrations are published for educational and analytical purposes and do not take into account brokerage, exchange charges, statutory levies, taxes, slippage, or the specific circumstances of any individual.",
          "Actual results realised by a subscriber will differ from any illustration once these costs and individual execution differences are accounted for.",
        ],
      },
      {
        heading: "8. Acceptance",
        content: [
          "Accessing this website does not create any advisory, fiduciary, or contractual relationship between you and the Research Analyst.",
          "By reading and relying on this content, you accept the terms of this disclaimer together with our Terms and Conditions and Privacy Policy.",
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
          `Clients may lodge any service grievance or discrepancy by writing directly to our designated compliance desk: ${siteConfig.complianceEmail} or calling ${siteConfig.displayPhone} during market hours.`,
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
