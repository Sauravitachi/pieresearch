import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Clock, ShieldCheck, FileText } from "lucide-react";
import { legalDocuments } from "@/data/legal";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

interface LegalPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(legalDocuments).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = legalDocuments[slug];

  if (!doc) {
    return {
      title: "Document Not Found",
    };
  }

  return {
    title: `${doc.title} | ${siteConfig.brandName} (SEBI Reg. RA)`,
    description: doc.summary,
  };
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const doc = legalDocuments[slug];

  if (!doc) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-16 bg-slate-50/60 min-h-screen">
      <Container size="narrow">
        {/* Breadcrumb & Back Link */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-sky-700 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Clock className="h-3 w-3" />
            <span>Last Updated: {doc.lastUpdated}</span>
          </div>
        </div>

        {/* Page Title Card */}
        <div className="mb-10 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="primary">SEBI Compliance Document</Badge>
            <span className="text-xs text-slate-500">• Reg: {siteConfig.sebiRegNo}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {doc.title}
          </h1>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {doc.summary}
          </p>
        </div>

        {/* Dynamic Sections Content */}
        <div className="space-y-8">
          {doc.sections.map((section, idx) => (
            <Card key={idx} className="p-6 sm:p-8 bg-white border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="h-4 w-4 text-sky-600 shrink-0" />
                <span>{section.heading}</span>
              </h2>

              <div className="space-y-3">
                {section.content.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-sm text-slate-600 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Compliance Desk Help Card */}
        <div className="mt-12 p-6 rounded-2xl bg-sky-50/80 border border-sky-200">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-900">
                Queries Regarding This Policy?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For compliance clarifications or investor rights verification, contact our Principal Officer & Compliance Desk at{" "}
                <a href={`mailto:${siteConfig.complianceEmail}`} className="font-semibold text-sky-700 underline">
                  {siteConfig.complianceEmail}
                </a>{" "}
                or call {siteConfig.displayPhone}.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
