import React, { Suspense } from "react";
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

/**
 * Everything that depends on the slug lives here, behind the page's Suspense
 * boundary. Reading `params` in the page itself would tie the shared App Shell
 * to a single URL and make navigation to these pages slower.
 */
async function LegalDocumentBody({ params }: LegalPageProps) {
  const { slug } = await params;
  const doc = legalDocuments[slug];

  if (!doc) {
    notFound();
  }

  return (
    <>
      {/* Page Title Card */}
      <div className="mb-10 pb-8 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-3">
          <Badge variant="primary">SEBI Compliance Document</Badge>
          <span className="text-xs text-slate-500">• Reg: {siteConfig.sebiRegNo}</span>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
            <Clock className="h-3 w-3" aria-hidden />
            <span>Last Updated: {doc.lastUpdated}</span>
          </span>
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
              <FileText className="h-4 w-4 text-sky-600 shrink-0" aria-hidden />
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
    </>
  );
}

function LegalDocumentSkeleton() {
  return (
    <div className="animate-pulse" aria-hidden>
      <div className="mb-10 pb-8 border-b border-slate-200">
        <div className="mb-3 h-5 w-64 rounded-full bg-slate-200" />
        <div className="h-9 w-3/4 rounded-lg bg-slate-200" />
        <div className="mt-4 h-4 w-full rounded bg-slate-200" />
        <div className="mt-2 h-4 w-5/6 rounded bg-slate-200" />
      </div>

      <div className="space-y-8">
        {[0, 1, 2].map((idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="mb-4 h-5 w-1/2 rounded bg-slate-200" />
            <div className="space-y-3">
              <div className="h-3.5 w-full rounded bg-slate-100" />
              <div className="h-3.5 w-11/12 rounded bg-slate-100" />
              <div className="h-3.5 w-4/5 rounded bg-slate-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LegalPage({ params }: LegalPageProps) {
  return (
    <div className="py-12 sm:py-16 bg-slate-50/60 min-h-screen">
      <Container size="narrow">
        {/* Breadcrumb & Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-sky-700 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            <span>Back to Home</span>
          </Link>
        </div>

        <Suspense fallback={<LegalDocumentSkeleton />}>
          <LegalDocumentBody params={params} />
        </Suspense>

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
