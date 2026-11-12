import Link from "next/link";
import { FiArrowRight, FiBox, FiCheck, FiCode } from "react-icons/fi";
import { LuFlaskConical, LuGraduationCap, LuSparkles } from "react-icons/lu";
import Container from "./Container";

const themes = {
  teal: {
    card: "from-teal-50 to-white border-teal-200/80 hover:border-teal-400",
    icon: "bg-gradient-to-br from-teal-500 to-teal-700 shadow-teal-700/30",
    watermark: "text-teal-600/[0.07]",
    pill: "bg-white border-teal-200 text-teal-800",
    check: "bg-teal-100 text-teal-700",
    cta: "border-teal-300 text-teal-800 hover:bg-teal-700 hover:border-teal-700 hover:text-white",
    divider: "border-teal-200/70",
  },
  indigo: {
    card: "from-indigo-50 to-white border-indigo-200/80 hover:border-indigo-400",
    icon: "bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-indigo-700/30",
    watermark: "text-indigo-600/[0.07]",
    pill: "bg-white border-indigo-200 text-indigo-800",
    check: "bg-indigo-100 text-indigo-700",
    cta: "border-indigo-300 text-indigo-800 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white",
    divider: "border-indigo-200/70",
  },
  violet: {
    card: "from-violet-50 to-white border-violet-200/80 hover:border-violet-400",
    icon: "bg-gradient-to-br from-violet-500 to-purple-700 shadow-violet-700/30",
    watermark: "text-violet-600/[0.07]",
    pill: "bg-white border-violet-200 text-violet-800",
    check: "bg-violet-100 text-violet-700",
    cta: "border-violet-300 text-violet-800 hover:bg-violet-600 hover:border-violet-600 hover:text-white",
    divider: "border-violet-200/70",
  },
  amber: {
    card: "from-amber-50 to-white border-amber-200/80 hover:border-amber-400",
    icon: "bg-gradient-to-br from-amber-400 to-orange-600 shadow-orange-600/30",
    watermark: "text-amber-600/[0.08]",
    pill: "bg-white border-amber-200 text-amber-800",
    check: "bg-amber-100 text-amber-700",
    cta: "border-amber-300 text-amber-800 hover:bg-amber-600 hover:border-amber-600 hover:text-white",
    divider: "border-amber-200/70",
  },
};

const saas = [
  {
    name: "Veycron Campus",
    descriptor: "School ERP",
    kind: "SaaS",
    pricing: "per student / year",
    href: "/campus",
    cta: "Explore Campus",
    icon: LuGraduationCap,
    theme: themes.teal,
    summary:
      "School management software for admissions, fees, attendance, timetable, exams, and parent communication, in one system a clerk can run on a 5-inch screen.",
    features: [
      "Fee receipts with WhatsApp and SMS alerts",
      "Attendance, report cards, and exam results",
      "Parent app in English and Hindi",
      "Works on low-end Android phones",
    ],
  },
  {
    name: "Veycron Stock",
    descriptor: "Inventory Management",
    kind: "SaaS",
    pricing: "per seat / month",
    href: "/stock",
    cta: "Explore Stock",
    icon: FiBox,
    theme: themes.indigo,
    summary:
      "Real-time inventory management across multiple warehouses, GST-compliant invoicing, and barcode scanning on your phone. Stop guessing, stop leaking.",
    features: [
      "Multi-warehouse stock with live counts",
      "GST invoices and purchase orders",
      "Barcode scanning with any Android phone",
      "Low-stock and expiry alerts",
    ],
  },
  {
    name: "Veycron Assist",
    descriptor: "AI Scheduling",
    kind: "SaaS",
    pricing: "per seat / month",
    href: "/assist",
    cta: "Explore Assist",
    icon: LuSparkles,
    theme: themes.violet,
    summary:
      "Build conflict-free timetables and shift rosters in minutes. The AI suggests; you approve. Every decision is reversible and every suggestion is explained.",
    features: [
      "Constraint-aware timetable and shift planning",
      "Explainable AI suggestions",
      "One-click approve, edit, or undo",
      "Handles leaves and substitutions",
    ],
  },
];

const services = [
  {
    name: "Veycron Labs",
    descriptor: "Custom AI Development",
    kind: "Service",
    pricing: "project or retainer",
    href: "/labs",
    cta: "Explore Labs",
    icon: LuFlaskConical,
    theme: themes.amber,
    summary:
      "We build AI into your existing workflows, with inference woven into the processes your team already uses, not a chatbot bolted on top.",
    features: [
      "LLM integration and RAG over your documents",
      "AI agents for repetitive operations",
      "Evaluation and guardrails from day one",
      "Prototype to production support",
    ],
  },
  {
    name: "Veycron Build",
    descriptor: "Web & Mobile Development",
    kind: "Service",
    pricing: "fixed-scope project",
    href: "/build",
    cta: "Explore Build",
    icon: FiCode,
    theme: themes.teal,
    summary:
      "Fixed-scope delivery. We scope it, build it, and hand it over with a test suite and deployment pipeline, on time and to spec.",
    features: [
      "React, Next.js, and React Native",
      "Android-first mobile app development",
      "Tests, CI/CD, and documentation handover",
      "Clear scope, timeline, and price",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Veycron products and services",
  itemListElement: [...saas, ...services].map((o, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": o.kind === "SaaS" ? "SoftwareApplication" : "Service",
      name: o.name,
      description: o.summary,
      ...(o.kind === "SaaS"
        ? { applicationCategory: "BusinessApplication", operatingSystem: "Android, Web" }
        : { areaServed: "IN", provider: { "@type": "Organization", name: "Veycron" } }),
    },
  })),
};

function GroupLabel({ children }) {
  return (
    <div className="flex items-center gap-4">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
        {children}
      </p>
      <span className="h-px flex-1 bg-slate-200" />
    </div>
  );
}

function OfferingCard({ o, wide = false }) {
  const Icon = o.icon;
  const t = o.theme;
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border bg-gradient-to-br p-7 transition-colors duration-200 sm:p-8 ${t.card}`}
    >
      {/* Oversized watermark icon */}
      <Icon
        aria-hidden="true"
        className={`pointer-events-none absolute -right-8 -top-8 h-48 w-48 ${t.watermark}`}
      />

      <div className="relative flex flex-wrap items-center justify-between gap-3">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg ${t.icon}`}
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span
          className={`rounded-full border px-3.5 py-1.5 text-xs font-medium ${t.pill}`}
        >
          <span className="font-bold">{o.kind}</span> · {o.pricing}
        </span>
      </div>

      <h3 className="relative mt-7 text-2xl font-bold tracking-tight text-slate-900">
        {o.name}
      </h3>
      <p className="relative mt-1 text-sm font-semibold text-slate-500">
        {o.descriptor}
      </p>

      <p className="relative mt-4 text-[15px] leading-7 text-slate-600">
        {o.summary}
      </p>

      <ul
        className={`relative mt-6 border-t pt-6 ${t.divider} ${
          wide ? "grid gap-x-8 gap-y-3 sm:grid-cols-2" : "space-y-3"
        }`}
      >
        {o.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 text-[15px] leading-6 text-slate-700"
          >
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${t.check}`}
            >
              <FiCheck className="h-3 w-3 stroke-[3]" aria-hidden="true" />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={o.href}
        className={`relative mt-8 inline-flex items-center justify-center gap-2 self-start rounded-xl border bg-white px-5 py-3 text-[15px] font-semibold transition-colors duration-200 ${t.cta} ${
          wide ? "" : "w-full self-stretch"
        } mt-auto`}
      >
        {o.cta}
        <FiArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="scroll-mt-24 bg-slate-50/60"
    >
      <Container className="py-16 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
          What we do
        </p>
        <h2
          id="what-we-do-heading"
          className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-[56px] lg:leading-[1.1]"
        >
          Three SaaS products. Two service lines.
        </h2>
        <p className="mt-6 max-w-[800px] text-lg leading-8 text-slate-600 lg:text-xl lg:leading-9">
          Choose a focused product for a familiar operational problem, or work
          with our engineering team on something specific to your organisation.
          Every offering gets the same attention to clarity, reliability, and
          long-term usefulness.
        </p>

        {/* SaaS products: 3 across */}
        <div className="mt-14 lg:mt-16">
          <GroupLabel>SaaS products</GroupLabel>
          <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {saas.map((o) => (
              <li key={o.name} className="min-w-0">
                <OfferingCard o={o} />
              </li>
            ))}
          </ul>
        </div>

        {/* Services: 2 wider cards */}
        <div className="mt-14">
          <GroupLabel>Engineering services</GroupLabel>
          <ul className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {services.map((o) => (
              <li key={o.name} className="min-w-0">
                <OfferingCard o={o} wide />
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}