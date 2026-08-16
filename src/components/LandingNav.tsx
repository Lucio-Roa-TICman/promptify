"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "./MoonLogo";

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 py-4 text-ink transition-all duration-300 ${
        scrolled ? "border-b-[3px] border-ink bg-cream" : "border-b-[3px] border-transparent bg-cream/85"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="/">
          <Wordmark size={21} />
        </Link>
        <div className="flex items-center gap-1.5">
          <Link
            href="#como"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-ink/70 transition-colors hover:text-ink sm:block"
          >
            Cómo funciona
          </Link>
          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-sm font-semibold text-ink/70 transition-colors hover:text-ink"
          >
            Ingresar
          </Link>
          <Link
            href="/register"
            className="rounded-full border-[2.5px] border-ink bg-kiddo-orange px-5 py-2 font-display text-sm font-bold uppercase tracking-wide text-white shadow-[3px_3px_0_0_#201A14] transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#201A14] active:translate-y-0 active:shadow-none"
          >
            Empezar
          </Link>
        </div>
      </div>
    </nav>
  );
}
