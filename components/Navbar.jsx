"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiHexagon } from "react-icons/fi";
import Container from "./Container";

const links = [
  { label: "What we do", href: "#what-we-do" },
  { label: "How we build", href: "#how-we-build" },
  { label: "Our process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); // set the right state on load / refresh mid-page
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled
          ? "border-slate-200/70 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.25)]"
          : "border-slate-200 shadow-none"
      }`}
    >
      <Container className="flex h-20 items-center justify-between lg:h-24">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white">
            <FiHexagon className="h-5 w-5" />
          </span>
          <span className="font-heading text-2xl font-bold tracking-tight text-slate-900">
            Veycron
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-base font-medium text-slate-600 transition hover:text-slate-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="/login"
            className="hidden text-base font-medium text-slate-600 transition hover:text-slate-900 sm:block"
          >
            Sign in
          </Link>
          <Link
            href="#contact"
            className="rounded-xl bg-teal-700 px-5 py-2.5 text-base font-semibold text-white transition hover:bg-teal-800"
          >
            Talk to us
          </Link>
        </div>
      </Container>
    </header>
  );
}