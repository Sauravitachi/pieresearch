"use client";

import React from "react";
import Link from "next/link";
import { X, ChevronRight, Shield } from "lucide-react";
import { NavItem } from "@/types";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white text-slate-900">
      {/* Header with Close */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-white font-black text-sm">
            {siteConfig.brandName.charAt(0) === "[" ? "RA" : siteConfig.brandName.charAt(0)}
          </div>
          <span className="font-extrabold tracking-tight text-slate-900">
            {siteConfig.brandName}
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="py-2">
                  <p className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">
                    {item.label} & Compliance
                  </p>
                  <div className="space-y-1 pl-2 border-l border-slate-200">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={onClose}
                        className="block py-1.5 text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between py-2.5 text-base font-semibold text-slate-800 hover:text-sky-600 transition-colors border-b border-slate-100"
              >
                <span>{item.label}</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            href="#inquiry"
            onClick={onClose}
          >
            Request Research Access
          </Button>
        </div>

        {/* SEBI Compliance Footnote */}
        <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 space-y-1.5">
          <div className="flex items-center gap-1.5 text-sky-600 font-semibold">
            <Shield className="h-3.5 w-3.5" />
            <span>SEBI Reg. No. {siteConfig.sebiRegNo}</span>
          </div>
          <p className="text-[11px] text-slate-500">
            {siteConfig.complianceDisclaimers.sebiNotice}
          </p>
        </div>
      </div>
    </div>
  );
};
