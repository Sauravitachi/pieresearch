import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#0284c7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thecometresearch.com"),
  title: {
    default: `${siteConfig.brandName} | SEBI Registered Research Analyst`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: `${siteConfig.tagline}. SEBI Registration: ${siteConfig.sebiRegNo}. Disciplined technical and quantitative market research for Indian equities and derivatives.`,
  keywords: [
    "SEBI Registered Research Analyst",
    "SEBI RA",
    "Stock Market Research",
    "Equity Research",
    "Institutional Research",
    siteConfig.brandName,
  ],
  authors: [{ name: siteConfig.brandName }],
  creator: siteConfig.brandName,
  publisher: siteConfig.legalEntityName,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thecometresearch.com",
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} | SEBI Registered Research Analyst`,
    description: siteConfig.subTagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} | SEBI Registered Research Analyst`,
    description: siteConfig.subTagline,
    creator: "@thecometresearch",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={plusJakartaSans.variable}
      // globals.css sets scroll-behavior: smooth; this tells Next to suppress it
      // during route transitions.
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-sky-100 selection:text-sky-900">
        <header className="sticky top-0 z-40 w-full">
          <TopBar />
          <Navbar />
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
