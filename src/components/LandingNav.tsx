"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "./MoonLogo";

const THEME_KEY = "promptify-theme";

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch {}
    if (saved === "dark") setTheme("dark");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
    setTheme(next);
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 py-4 text-ink transition-all duration-300 dark:text-[#f2eee4] ${
        scrolled
          ? "border-b-[3px] border-ink bg-cream dark:border-[#f2eee4]/20 dark:bg-[#16130e]"
          : "border-b-[3px] border-transparent bg-cream/85 dark:bg-[#16130e]/85"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/">
          <Wordmark size={21} />
        </Link>
        <div className="flex items-center gap-1 sm:gap-1.5">
          <Link
            href="#como"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-ink/70 transition-colors hover:text-ink dark:text-[#f2eee4]/70 dark:hover:text-[#f2eee4] sm:block"
          >
            Cómo funciona
          </Link>
          <Link
            href="/login"
            className="rounded-full px-2.5 py-2 text-xs font-semibold text-ink/70 transition-colors hover:text-ink dark:text-[#f2eee4]/70 dark:hover:text-[#f2eee4] sm:px-4 sm:text-sm"
          >
            Ingresar
          </Link>
          <Link
            href="/register"
            className="rounded-full border-[2.5px] border-ink bg-kiddo-orange px-3.5 py-2 font-display text-xs font-bold uppercase tracking-wide text-white shadow-[3px_3px_0_0_#201A14] transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#201A14] active:translate-y-0 active:shadow-none dark:border-[#f2eee4]/80 dark:shadow-[3px_3px_0_0_#0b0906] sm:px-5 sm:text-sm"
          >
            Empezar
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="flex items-center gap-[2px] rounded-full border-2 border-ink/25 p-[2px] transition-colors dark:border-[#f2eee4]/25 sm:ml-1 sm:gap-[3px] sm:p-[3px]"
          >
            <span
              className={`grid h-[22px] w-[22px] place-items-center rounded-full transition-colors sm:h-[26px] sm:w-[26px] ${
                theme === "light" ? "bg-ink text-cream" : "text-ink/40 dark:text-[#f2eee4]/40"
              }`}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            </span>
            <span
              className={`grid h-[22px] w-[22px] place-items-center rounded-full transition-colors sm:h-[26px] sm:w-[26px] ${
                theme === "dark" ? "bg-[#f2eee4] text-[#16130e]" : "text-ink/40 dark:text-[#f2eee4]/40"
              }`}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
