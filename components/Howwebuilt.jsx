import Container from "./Container";

const principles = [
  {
    eyebrow: "India-first",
    title: "Built for real operating conditions",
    body: "Android-first screens, familiar workflows, print-ready documents, and support for the way Indian teams actually work, in English and Hindi.",
  },
  {
    eyebrow: "Practical AI",
    title: "Human control stays visible",
    body: "AI suggestions are reviewable, explainable, and reversible before they affect a live business process. People make the final call.",
  },
  {
    eyebrow: "Clear systems",
    title: "Useful before impressive",
    body: "We favour legibility, dependable workflows, and straightforward interfaces over unnecessary visual noise. If it is not faster, it does not ship.",
  },
  {
    eyebrow: "Responsible delivery",
    title: "Scope, ownership, and handover",
    body: "Every engagement starts with clear outcomes and ends with documented software, tests, and a deployment pipeline your team can continue to operate.",
  },
];

export default function Howwebuild() {
  return (
    <section
      id="how-we-build"
      aria-labelledby="how-we-build-heading"
      className="relative scroll-mt-24 overflow-hidden bg-slate-900"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-teal-500/10 blur-3xl"
      />

      <Container className="relative py-20 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-400">
          How we build
        </p>
        <h2
          id="how-we-build-heading"
          className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[52px]"
        >
          Professional software starts with sound decisions.
        </h2>
        <p className="mt-6 max-w-[820px] text-lg leading-8 text-slate-400 lg:text-xl lg:leading-9">
          We are early in our journey, so we would rather show you how we think
          and work than borrow credibility from vanity metrics.
        </p>

        {/* gap-px over a tinted background draws the dividers at every breakpoint */}
        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {principles.map((p) => (
            <li
              key={p.title}
              className="bg-slate-900 p-7 transition-colors duration-200 hover:bg-slate-800/70 lg:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-400">
                {p.eyebrow}
              </p>
              <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-white">
                {p.title}
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-slate-400">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}