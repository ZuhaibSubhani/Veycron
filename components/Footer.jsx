import Image from "next/image";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import Container from "./Container";
import { SITE } from "@/lib/site";

const links = [
  { label: "What we do", href: "#what-we-do" },
  { label: "How we build", href: "#how-we-build" },
  { label: "Our process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  areaServed: "Worldwide",
  description:
    "Mobile apps, websites, school management software, and stock and billing software for businesses worldwide.",
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <Container className="pt-16 pb-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-6">
            <Link href="/" aria-label="Veycron home" className="flex items-center gap-2.5">
              {/* White tile keeps the logo visible on the dark footer */}
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white p-1.5">
                <Image
                  src={SITE.logo.src}
                  alt=""
                  width={SITE.logo.width}
                  height={SITE.logo.height}
                  className="h-full w-auto object-contain"
                />
              </span>
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                Veycron
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-7">
              Mobile apps, websites, and business software for schools, shops,
              and growing teams.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[15px] transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Get in touch
            </h2>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-5 inline-flex items-center gap-2.5 text-[15px] font-semibold text-white transition hover:text-teal-300"
            >
              <FiMail className="h-4 w-4" aria-hidden="true" />
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-sm">
          <p>© 2026 Veycron. All rights reserved.</p>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </footer>
  );
}