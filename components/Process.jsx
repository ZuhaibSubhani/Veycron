import Container from "./Container";

const steps = [
  {
    title: "Understand the work",
    body: "We start with the people, constraints, and repetitive tasks behind the requirement, not a pre-selected technology.",
    outcome: "A written problem brief",
  },
  {
    title: "Define the right shape",
    body: "We identify whether an existing Veycron product, a tailored implementation, or a custom build is the best fit.",
    outcome: "Scope, timeline, and price",
  },
  {
    title: "Build in visible stages",
    body: "Working software is reviewed in small, understandable milestones so decisions stay grounded and changes stay manageable.",
    outcome: "A reviewable build at every milestone",
  },
  {
    title: "Launch with confidence",
    body: "We test the critical paths, document the system, and make sure ownership is clear before anything goes live.",
    outcome: "Tested, documented, handed-over software",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-24 bg-slate-50"
    >
      <Container className="py-20 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
          A clear working process
        </p>
        <h2
          id="process-heading"
          className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 md:text-5xl lg:text-[52px]"
        >
          From operational problem to dependable software.
        </h2>
        <p className="mt-6 max-w-[820px] text-lg leading-8 text-slate-600 lg:text-xl lg:leading-9">
          No theatre, no black box. We keep the work visible so your team
          understands what is being built, why it matters, and what comes next.
        </p>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex">
              <div className="flex w-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition duration-200 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-900/5 lg:p-8">
                <span className="font-mono text-base font-semibold text-teal-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-7 text-xl font-bold leading-snug tracking-tight text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  {s.body}
                </p>

                <div className="mt-auto pt-6">
                  <div className="border-t border-slate-100 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                      You get
                    </p>
                    <p className="mt-1.5 text-[15px] font-semibold leading-snug text-slate-800">
                      {s.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}