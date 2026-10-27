"use client";

import { useEffect, useState } from "react";

export const THEME_KEY = "promptify-theme";
type Theme = "light" | "dark";

/**
 * Botón claro/oscuro. Se puede poner en cualquier pantalla (landing,
 * login, registro, dashboard, curso, certificado). El tema vive en
 * data-theme de <html> y se guarda en localStorage, así que se mantiene
 * al cambiar de página y al recargar. El script de layout.tsx lo aplica
 * antes de pintar.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Leemos el tema que ya aplicó el script de layout.tsx
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");

    // Si se cambia el tema en otra pestaña, nos sincronizamos
    const onStorage = (e: StorageEvent) => {
      if (e.key !== THEME_KEY) return;
      const next: Theme = e.newValue === "dark" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      setTheme(next);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className={`flex items-center gap-[2px] rounded-full border-2 border-ink/25 p-[2px] transition-colors sm:gap-[3px] sm:p-[3px] ${className}`}
    >
      <span
        className={`grid h-[22px] w-[22px] place-items-center rounded-full transition-colors sm:h-[26px] sm:w-[26px] ${
          theme === "light" ? "bg-ink text-cream" : "text-ink/40"
        }`}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      </span>
      <span
        className={`grid h-[22px] w-[22px] place-items-center rounded-full transition-colors sm:h-[26px] sm:w-[26px] ${
          theme === "dark" ? "bg-ink text-cream" : "text-ink/40"
        }`}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
        </svg>
      </span>
    </button>
  );
}
