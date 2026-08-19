import Link from "next/link";
import { Wordmark } from "@/components/MoonLogo";

export function LandingFooter() {
  return (
    <footer className="border-t-[3px] border-ink bg-cream py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6">
        <Wordmark size={17} />
        <nav className="flex gap-6 text-sm font-semibold text-ink/60" aria-label="Enlaces del pie">
          <Link href="/login" className="transition-colors hover:text-ink">
            Ingresar
          </Link>
          <Link href="/register" className="transition-colors hover:text-ink">
            Crear cuenta
          </Link>
        </nav>
        <span className="text-[13px] text-ink/40">
          © {new Date().getFullYear()} · Hecho por Facundo Gutiérrez y Lucio Roa
        </span>
      </div>
    </footer>
  );
}
