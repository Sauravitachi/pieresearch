import React from "react";
import Link from "next/link";
import { Activity, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { legalLinks } from "@/data/nav";
import { Container } from "@/components/ui/Container";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-600 pt-16 pb-12 border-t border-slate-200">
      <Container size="default">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-white shadow-sm">
                <Activity className="h-5 w-5" />
              </div>
              <span className="text-xl font-black text-slate-900 tracking-tight">
                {siteConfig.brandName}
              </span>
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              {siteConfig.subTagline} Built strictly for disciplined investors and traders seeking objective market insights without emotional bias.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-sky-700 font-semibold shadow-sm">
              <ShieldCheck className="h-4 w-4 shrink-0 text-sky-600" />
              <span>SEBI Registration: {siteConfig.sebiRegNo}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#segments" className="hover:text-sky-700 transition-colors">
                  Research Segments
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-sky-700 transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-sky-700 transition-colors">
                  Why Us & Compliance
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-sky-700 transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-700 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Regulatory & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-sky-700 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://scores.sebi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-700 transition-colors"
                >
                  SEBI SCORES 2.0 ↗
                </a>
              </li>
              <li>
                <a
                  href="https://smartodr.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-700 transition-colors"
                >
                  SMART ODR Portal ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Compliance Officer */}
          <div className="space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Compliance Desk
            </h4>
            <p className="flex items-start gap-2 text-slate-600">
              <MapPin className="h-4 w-4 shrink-0 text-slate-400 mt-0.5" />
              <span>{siteConfig.registeredOffice}</span>
            </p>
            <p className="flex items-center gap-2 text-slate-600">
              <Mail className="h-4 w-4 shrink-0 text-slate-400" />
              <a href={`mailto:${siteConfig.complianceEmail}`} className="hover:text-sky-700">
                {siteConfig.complianceEmail}
              </a>
            </p>
            <p className="flex items-center gap-2 text-slate-600">
              <Phone className="h-4 w-4 shrink-0 text-slate-400" />
              <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-sky-700">
                {siteConfig.displayPhone}
              </a>
            </p>
          </div>
        </div>

        {/* Mandatory SEBI Statutory Disclaimers */}
        <div className="pt-8 pb-6 border-b border-slate-200 space-y-3 text-[11px] text-slate-500 leading-relaxed">
          <p className="font-semibold text-slate-800">
            Mandatory Regulatory Disclosures:
          </p>
          <p>
            <strong>Research Analyst:</strong> {siteConfig.analystName} • SEBI Reg. No.{" "}
            {siteConfig.sebiRegNo} • Validity: {siteConfig.sebiValidity} •{" "}
            {siteConfig.nismCertNo}
          </p>
          <p>
            <strong>1. Standard Market Risk Warning:</strong> {siteConfig.complianceDisclaimers.standardWarning}
          </p>
          <p>
            <strong>2. SEBI Performance Disclaimer:</strong> {siteConfig.complianceDisclaimers.sebiNotice}
          </p>
          <p>
            <strong>3. General Advisory Disclaimer:</strong> {siteConfig.complianceDisclaimers.generalRiskNotice}
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © 2026 {siteConfig.legalEntityName}. All rights reserved.
          </p>
          <p className="text-[11px]">
            SEBI (Research Analysts) Regulations, 2014 • CIN/Reg: {siteConfig.sebiRegNo}
          </p>
        </div>
      </Container>
    </footer>
  );
};
