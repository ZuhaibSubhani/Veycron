import Link from "next/link";
import { FiArrowRight, FiBox, FiCheck, FiMonitor, FiSmartphone } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import Container from "./Container";

const needs = [
  {
    title: "A mobile app",
    desc: "For your customers or your staff",
    icon: FiSmartphone,
    tile: "bg-teal-100 text-teal-700",
  },
  {
    title: "A website or web system",
    desc: "Business site, portal, or online booking",
    icon: FiMonitor,
    tile: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "School management software",
    desc: "Fees, attendance, exams, parent updates",
    icon: LuGraduationCap,
    tile: "bg-violet-100 text-violet-700",
  },
  {
    title: "Stock and billing software",
    desc: "Inventory, GST invoices, barcode scanning",
    icon: FiBox,
    tile: "bg-amber-100 text-amber-700",
  },
];

const highlights = [
  "Mobile apps & websites",
  "School & stock software",
  "English + Hindi support",
  "Made for Indian workflows",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-teal-100/70 blur-3xl" />
      </div>

      <Container className="relative pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left: message */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-3 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-700" />
              For schools, shops, and growing businesses across the globe.
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-6xl lg:text-[64px]">
              Mobile apps, websites and software to run your school or business.
            </h1>

            <p className="mt-8 max-w-[640px] text-lg leading-[1.8] text-slate-600 lg:text-xl lg:leading-[1.8]">
              From school management and stock-and-billing software to custom
              mobile apps and websites, we build simple tools your team can use
              from day one. Talk to us in English or Hindi.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex h-14 items-center gap-3 rounded-xl bg-teal-700 px-6 text-base font-semibold text-white transition hover:bg-teal-800"
              >
                Tell us what you need
                <FiArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="#what-we-do"
                className="inline-flex h-14 items-center rounded-xl border border-slate-200 bg-white px-6 text-base font-medium text-slate-800 transition hover:bg-slate-50"
              >
                See what we build
              </Link>
            </div>
          </div>

          {/* Right: what do you need? */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
              <p className="font-heading text-xl font-bold text-slate-900">
                What do you need?
              </p>
              <p className="mt-1 text-[15px] text-slate-500">
                Pick the closest match and we will take it from there.
              </p>

              <ul className="mt-5 divide-y divide-slate-100">
                {needs.map(({ title, desc, icon: Icon, tile }) => (
                  <li key={title}>
                    <Link
                      href="#what-we-do"
                      className="group -mx-3 flex items-center gap-4 rounded-2xl px-3 py-4 transition hover:bg-slate-50"
                    >
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${tile}`}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="flex-1">
                        <span className="block text-base font-semibold text-slate-900">
                          {title}
                        </span>
                        <span className="block text-sm text-slate-500">{desc}</span>
                      </span>
                      <FiArrowRight
                        className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-teal-700"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-teal-700 transition hover:text-teal-900"
              >
                Not sure? Tell us the problem
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative border-y border-slate-200 bg-slate-50">
        <Container className="grid gap-4 py-8 sm:grid-cols-2 lg:flex lg:items-center lg:justify-around">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-base font-medium text-slate-700 lg:text-[17px]"
            >
              <FiCheck className="h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
              {item}
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}