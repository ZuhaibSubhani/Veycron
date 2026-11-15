import { FiGlobe, FiMail, FiMessageSquare } from "react-icons/fi";
import Container from "./Container";
import ContactForm from "./ContactForm";
import { SITE } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 bg-white">
      <Container className="py-20 lg:py-28">
        <div className="grid overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/5 lg:grid-cols-5">
          {/* Left: pitch */}
          <div className="relative overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900 p-8 text-white sm:p-12 lg:col-span-2">
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-200">
                Contact us
              </p>
              <h2 id="contact-heading" className="mt-4 text-4xl font-extrabold leading-[1.12] tracking-tight lg:text-[44px]">
                Tell us what you are trying to fix.
              </h2>
              <p className="mt-5 text-lg leading-8 text-teal-50/80">
                Whether it is a school ERP, inventory software, AI scheduling,
                or a custom build, a short note is enough to start the conversation.
              </p>

              <ul className="mt-10 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                    <FiMail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-teal-100/80">Email us</p>
                    <a href={`mailto:${SITE.email}`} className="text-lg font-semibold underline-offset-4 hover:underline">
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                    <FiGlobe className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-teal-100/80">Who we work with</p>
                    <p className="text-lg font-semibold">Teams and businesses worldwide</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                    <FiMessageSquare className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-teal-100/80">What to include</p>
                    <p className="text-lg font-semibold leading-snug">Your team, the problem, and any deadline</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white p-8 sm:p-12 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}