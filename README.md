# [BRAND NAME] - SEBI Registered Research Analyst Landing Website

A modern, clean, super-smooth, and fast landing website built for a SEBI Registered Research Analyst brand using **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed specifically with an all-light, premium fintech aesthetic featuring whitespace, rounded-2xl cards, soft borders, and complete regulatory compliance.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS (with customized light design tokens in `globals.css`)
- **Icons**: `lucide-react` (Strictly SVG icons, zero emojis)
- **Typography**: `next/font/google` (Plus Jakarta Sans)
- **Helpers**: `clsx`, `tailwind-merge` for safe conditional classes

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css              → Light fintech CSS variables & design tokens
│   ├── layout.tsx               → Root layout (Plus Jakarta Sans, SEO, TopBar, Navbar, Footer)
│   ├── page.tsx                 → Home page (pure assembly of sections, zero business logic)
│   ├── (legal)/
│   │   └── [slug]/
│   │       └── page.tsx         → Dynamic page template for all 5 compliance documents
│   ├── robots.ts                → Search engine crawler instructions
│   └── sitemap.ts               → Automated sitemap generation
│
├── components/
│   ├── ui/                      → Single-purpose, reusable UI primitives
│   │   ├── Container.tsx        → Responsive container with max-width limits
│   │   ├── Badge.tsx            → Pill badge (primary, secondary, warning, risk)
│   │   ├── Button.tsx           → Accessible button & link supporting multiple variants
│   │   ├── Card.tsx             → 2xl rounded fintech card with soft borders
│   │   ├── SectionHeading.tsx   → Standard section header with badge, title, and description
│   │   └── Accordion.tsx        → Smooth, accessible collapsible accordion
│   │
│   ├── layout/                  → Core website navigation & footer
│   │   ├── TopBar.tsx           → SEBI Reg No, direct contact, and working hours strip
│   │   ├── Navbar.tsx           → Sticky glassmorphic navbar with logo, links, and Legal dropdown
│   │   ├── MobileMenu.tsx       → Clean mobile slide-out drawer
│   │   └── Footer.tsx           → Links, compliance officer details, and statutory SEBI disclaimers
│   │
│   ├── sections/                → Modular landing page sections
│   │   ├── Hero.tsx             → Headline, subtext, dual CTAs, trust stats, preview card
│   │   ├── TickerSection.tsx    → Infinite smooth marquee for market indices & MCX contracts
│   │   ├── SegmentsSection.tsx  → 6 Research segment cards (Options, Futures, Cash, MCX, etc.)
│   │   ├── MethodSection.tsx    → 6-step quantitative & technical research construction
│   │   ├── WhyUsSection.tsx     → Regulatory compliance, transparent log, data privacy
│   │   ├── PlansSection.tsx     → Pricing cards with Monthly/Quarterly toggle & statutory note
│   │   ├── InquirySection.tsx   → Lead capture form with client validation & placeholder API
│   │   ├── FaqSection.tsx       → Accordion answering SEBI compliance, delivery, and refund FAQs
│   │   └── CtaSection.tsx       → Final high-conversion light action banner
│   │
│   └── cards/                   → Specialized card components
│       ├── SegmentCard.tsx      → Renders research segment with risk badge and capital info
│       ├── PlanCard.tsx         → Renders subscription tier with INR formatting & inclusions
│       ├── FeatureCard.tsx      → Renders Why Us feature points
│       └── ResearchPreviewCard.tsx → Terminal preview showing sample trade (Entry, SL, Targets)
│
├── data/                        → ALL text, compliance data, plans, and legal content
│   ├── site.ts                  → Brand name, SEBI Reg No, contacts, disclaimers, trust stats
│   ├── nav.ts                   → Navigation menus and legal dropdown links
│   ├── ticker.ts                → Market indices (NIFTY, BANK NIFTY, SENSEX, GOLD, CRUDE)
│   ├── segments.ts              → 6 research segments configuration
│   ├── methodology.ts           → 6-step research process data
│   ├── features.ts              → Why Us features and regulatory highlights
│   ├── plans.ts                 → Flat-fee subscription tiers and pricing
│   ├── faqs.ts                  → Accordion FAQs
│   └── legal.ts                 → Full markdown-ready copy for all 5 policy pages
│
├── lib/
│   └── utils.ts                 → Tailwind merge (`cn`) and INR currency formatter
│
└── types/
    └── index.ts                 → Shared TypeScript interfaces
```

---

## 🚀 How to Run the Project

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## ✏️ Where to Edit Content (`/src/data`)

**Zero text is hardcoded inside components.** To modify content, edit the appropriate file in `src/data/`:

| What you want to edit | File to edit |
|---|---|
| Brand Name, Phone, Email, SEBI Reg. No., Disclaimers | `src/data/site.ts` |
| Top navigation links & Legal dropdown items | `src/data/nav.ts` |
| Scrolling ticker symbols and prices | `src/data/ticker.ts` |
| Research segments (holding period, capital, risk profile) | `src/data/segments.ts` |
| 6-step methodology process | `src/data/methodology.ts` |
| Why Us features and trust badges | `src/data/features.ts` |
| Pricing tiers, inclusions, monthly/quarterly fees | `src/data/plans.ts` |
| Frequently Asked Questions | `src/data/faqs.ts` |
| Terms, Privacy Policy, Disclaimers, Investor Charter, Grievance | `src/data/legal.ts` |

---

## 🎨 How to Change Theme Colors

The light color palette is governed by CSS variables defined in [src/app/globals.css](file:///c:/Users/pc/Desktop/pieresearch/src/app/globals.css).

To change the primary accent color across the entire site, simply adjust `--primary` and `--primary-hover`:

```css
:root {
  /* Current: Vibrant Sky Blue Fintech */
  --primary: #0284c7;
  --primary-hover: #0369a1;
  --primary-light: #f0f9ff;

  /* Example: Electric Royal Blue */
  /* --primary: #2563eb; */
  /* --primary-hover: #1d4ed8; */
  /* --primary-light: #eff6ff; */

  /* Example: Deep Emerald / Mint */
  /* --primary: #047857; */
  /* --primary-hover: #065f46; */
  /* --primary-light: #ecfdf5; */
}
```

---

## 🔄 How to Make Sections Dynamic (API / CMS Integration)

Because every section receives typed props and maps over data arrays, replacing static `/data` imports with an API or CMS takes **under 3 lines of code** in [src/app/page.tsx](file:///c:/Users/pc/Desktop/pieresearch/src/app/page.tsx) without touching any component!

### Example: Fetching Plans from an API

In `src/app/page.tsx`:

```tsx
// Before:
import { pricingPlansData } from "@/data/plans";

// After (Server Component fetch):
export default async function HomePage() {
  const res = await fetch("https://api.yourbrand.in/v1/plans", {
    next: { revalidate: 3600 }, // ISR cache for 1 hour
  });
  const plans = await res.json();

  return (
    <>
      {/* Passes fetched data directly */}
      <PlansSection plans={plans} complianceNote={plansComplianceNote} />
    </>
  );
}
```

---

## 🛡️ Regulatory & SEBI Compliance Features

- **No Fake Testimonials**: Fully compliant with SEBI regulations prohibiting unverified testimonials.
- **Zero Guaranteed Return Language**: Emphasizes strict risk management, mathematical stop-losses, and pre-defined risk-reward ratios.
- **Illustration Only**: Sample research dispatches in the Hero are clearly marked as educational illustrations.
- **Direct Redressal**: Includes direct links to SEBI SCORES 2.0 (`https://scores.sebi.gov.in`) and SMART ODR (`https://smartodr.in`) in the footer and legal pages.
- **Investor Charter**: Dedicated legal page (`/investor-charter`) implementing SEBI's mandated advisory charter.
