"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { SITE } from "@/lib/site";

const interests = [
  "Veycron Campus (School ERP)",
  "Veycron Stock (Inventory)",
  "Veycron Assist (AI Scheduling)",
  "Veycron Labs (Custom AI)",
  "Veycron Build (Web & Mobile)",
  "Something else",
];

const field =
  "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition focus:border-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-600/15";
const label = "block text-sm font-semibold text-slate-800";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = `Enquiry: ${d.get("interest")} (${d.get("name")})`;
    const body = [
      `Name: ${d.get("name")}`,
      `Email / phone: ${d.get("contact")}`,
      d.get("org") ? `Organisation: ${d.get("org")}` : null,
      `Interested in: ${d.get("interest")}`,
      "",
      d.get("message"),
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Your name</label>
          <input id="name" name="name" required autoComplete="name" placeholder="Full name" className={field} />
        </div>
        <div>
          <label htmlFor="contact" className={label}>Email or phone</label>
          <input id="contact" name="contact" required autoComplete="email" placeholder="How can we reach you?" className={field} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="org" className={label}>
            Organisation <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input id="org" name="org" autoComplete="organization" placeholder="School, shop, or company" className={field} />
        </div>
        <div>
          <label htmlFor="interest" className={label}>I am interested in</label>
          <select id="interest" name="interest" defaultValue={interests[0]} className={field}>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>What are you trying to solve?</label>
        <textarea id="message" name="message" required rows={5} placeholder="A few lines about your team and the problem is enough." className={`${field} resize-none`} />
      </div>

      <button
        type="submit"
        className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-teal-700 px-6 text-base font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-600/30 sm:w-auto"
      >
        Send message
        <FiSend className="h-5 w-5" aria-hidden="true" />
      </button>

      <p className="text-sm text-slate-500" role="status">
        {sent ? (
          <>
            Opening your email app. Nothing happened?{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-teal-700 underline underline-offset-2">
              Email {SITE.email}
            </a>{" "}
            directly.
          </>
        ) : (
          <>This opens your email app with the message ready to send to {SITE.email}.</>
        )}
      </p>
    </form>
  );
}