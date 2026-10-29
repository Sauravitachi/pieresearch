"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown, Activity } from "lucide-react";
import { siteConfig } from "@/data/site";
import { mainNavItems } from "@/data/nav";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [legalDropdownOpen, setLegalDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={cn(
          "relative w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
            : "bg-white border-b border-slate-100"
        )}
      >
        <Container size="default">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-white shadow-sm group-hover:bg-sky-700 transition-colors">
                <Activity className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-slate-900 leading-none">
                  {siteConfig.brandName}
                </span>
                <span className="text-[10px] font-bold text-sky-700 tracking-wider uppercase mt-1">
                  SEBI Reg. RA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {mainNavItems.map((item) => {
                if (item.children) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setLegalDropdownOpen(true)}
                      onMouseLeave={() => setLegalDropdownOpen(false)}
                    >
                      <button
                        className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-sky-700 transition-colors py-2"
                        aria-expanded={legalDropdownOpen}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="h-4 w-4 text-slate-400" />
                      </button>

                      {legalDropdownOpen && (
                        <div className="absolute top-full right-0 w-64 pt-2 z-50">
                          <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm font-semibold text-slate-700 hover:text-sky-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                href="#inquiry"
                className="hidden sm:inline-flex"
              >
                Get Research
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={mainNavItems}
      />
    </>
  );
};
