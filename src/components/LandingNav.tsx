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
      className={`fixed inset-x-0 top-0 z-50 py-5 backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/85" : "border-b border-transparent bg-bg/60"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="/">
          <Wordmark size={21} />
        </Link>
        <div className="flex items-center gap-2">
          <Link href="#como" className="hidden rounded-lg px-4 py-2 text-sm text-muted transition-colors hover:text-text sm:block">
            Cómo funciona
          </Link>
          <Link href="/login" className="rounded-lg px-4 py-2 text-sm text-muted transition-colors hover:text-text">
            Ingresar
          </Link>
          <Link href="/register" className="btn btn-primary !px-5 !py-2 text-xs">
            Empezar
          </Link>
        </div>
      </div>
    </nav>
  );
}
