"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { researchSegmentsData } from "@/data/segments";

export const InquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    segment: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.phone.trim() || !/^[6-9]\d{9}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      errs.phone = "Enter a valid 10-digit Indian mobile number";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!formData.segment) errs.segment = "Please select a research segment";
    if (!formData.acceptTerms) errs.acceptTerms = "You must agree to SEBI advisory terms";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  /**
   * Placeholder API submission handler. Connect to your backend route / CRM webhook here.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section id="inquiry" className="py-20 lg:py-28 bg-white scroll-mt-16">
      <Container size="narrow">
        <SectionHeading
          badgeText="Analyst Onboarding"
          title="Connect with Our"
          titleHighlight="Research Desk"
          description="Have questions about our methodology or need guidance choosing the right segment? Submit your details for a direct callback."
        />

        <Card className="p-6 sm:p-10 border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-sky-100 text-sky-700">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Inquiry Received
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Our compliance and analyst desk will reach out to you within 2 working hours.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({ fullName: "", phone: "", email: "", segment: "", acceptTerms: false });
                }}
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                />
                {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              {/* Segment Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Segment of Interest *
                </label>
                <select
                  value={formData.segment}
                  onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                >
                  <option value="">Select a segment...</option>
                  {researchSegmentsData.map((seg) => (
                    <option key={seg.id} value={seg.title}>
                      {seg.title} ({seg.holdingPeriod})
                    </option>
                  ))}
                </select>
                {errors.segment && <p className="mt-1 text-xs text-red-500">{errors.segment}</p>}
              </div>

              {/* Terms Checkbox */}
              <div>
                <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                    className="mt-0.5 rounded border-slate-300 text-sky-600 focus:ring-sky-600 h-4 w-4"
                  />
                  <span>
                    I confirm that I understand market risks, acknowledge that past performance is no guarantee of future returns, and agree to the{" "}
                    <Link href="/terms-and-conditions" className="text-sky-600 underline font-semibold">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/disclaimer-and-disclosure" className="text-sky-600 underline font-semibold">
                      SEBI Disclosures
                    </Link>.
                  </span>
                </label>
                {errors.acceptTerms && <p className="mt-1 text-xs text-red-500">{errors.acceptTerms}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Research Request</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </Card>
      </Container>
    </section>
  );
};
