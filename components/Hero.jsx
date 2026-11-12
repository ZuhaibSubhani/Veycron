import Link from "next/link";
import { FiArrowRight, FiBox, FiCheck, FiCode } from "react-icons/fi";
import { LuFlaskConical, LuGraduationCap, LuSparkles } from "react-icons/lu";
import Container from "./Container";

const offerings = [
  {
    title: "Campus",
    sub: "School ERP",
    label: "Designed for",
    value: "Schools & institutes",
    icon: LuGraduationCap,
    card: "border-teal-200 bg-teal-50/70",
    iconBg: "bg-teal-700",
    divider: "border-teal-200",
  },
  {
    title: "Stock",
    sub: "Inventory Management",
    label: "Designed for",
    value: "Retail & operations",
    icon: FiBox,
    card: "border-indigo-200 bg-indigo-50/70",
    iconBg: "bg-indigo-600",
    divider: "border-indigo-200",
  },
  {
    title: "Assist",
    sub: "AI Scheduling",
    label: "Designed for",
    value: "Planning teams",
    icon: LuSparkles,
    card: "border-violet-200 bg-violet-50/70",
    iconBg: "bg-violet-600",
    divider: "border-violet-200",
  },
  {
    title: "Labs",
    sub: "Custom AI Development",
    label: "Built around",
    value: "Your workflow",
    icon: LuFlaskConical,
    card: "border-amber-200 bg-amber-50/70",
    iconBg: "bg-amber-600",
    divider: "border-amber-200",
  },
  {
    title: "Build",
    sub: "Web & Mobile Dev",
    label: "Delivery",
    value: "Web & mobile",
    icon: FiCode,
    card: "border-teal-200 bg-teal-50/70",
    iconBg: "bg-teal-700",
    divider: "border-teal-200",
  },
];

const highlights = [
  "Products + engineering",
  "Android-first thinking",
  "English + Hindi ready",
  "Built for Indian workflows",
];

export default function Hero() {
  return (
    <section>
      <Container className="pt-10 pb-20 lg:pt-[52px] lg:pb-28">
        {/* Badge */}
        <span className="inline-flex items-center gap-3 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-700" />
          Software for ambitious teams across India
        </span>

        {/* Heading */}
        <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-6xl lg:text-[68px]">
          SaaS products and custom software for Indian businesses.
        </h1>

        {/* Subtext */}
        <p className="mt-9 max-w-[800px] text-lg leading-[1.85] text-slate-600 lg:text-xl lg:leading-[1.85]">
          Three focused software products and two engineering services, built
          for schools, shops, and operations teams that need technology to feel
          clear, dependable, and practical.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#what-we-do"
            className="inline-flex h-14 items-center gap-3 rounded-xl bg-teal-700 px-6 text-base font-semibold text-white transition hover:bg-teal-800"
          >
            See everything we do
            <FiArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-14 items-center rounded-xl border border-slate-200 bg-white px-6 text-base font-medium text-slate-800 transition hover:bg-slate-50"
          >
            Talk to us
          </Link>
        </div>

        {/* Offering cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
          {offerings.map(({ title, sub, label, value, icon: Icon, ...s }) => (
            <div
              key={title}
              className={`rounded-2xl border p-5 ${s.card}`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${s.iconBg}`}
              >
                <Icon className="h-5 w-5" />
              </span>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-1 text-[15px] text-slate-500">{sub}</p>

              <div className={`mt-4 border-t pt-4 ${s.divider}`}>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                <p className="mt-1.5 text-[15px] font-semibold text-slate-900">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Highlights strip */}
      <div className="border-y border-slate-200 bg-slate-50">
        <Container className="grid gap-4 py-8 sm:grid-cols-2 lg:flex lg:items-center lg:justify-around">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-base font-medium text-slate-700 lg:text-[17px]"
            >
              <FiCheck className="h-5 w-5 shrink-0 text-teal-700" />
              {item}
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}