"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Wordmark } from "./MoonLogo";
import { authClient } from "@/lib/auth-client";

export function Navbar({
  userName,
  active,
}: {
  userName?: string;
  active?: "dashboard" | "curso" | "certificado";
}) {
  const router = useRouter();

  const links = [
    { href: "/dashboard", label: "Inicio", key: "dashboard" },
    { href: "/curso", label: "Curso", key: "curso" },
    { href: "/certificado", label: "Certificado", key: "certificado" },
  ];

  async function handleSignOut() {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-cream">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/dashboard">
          <Wordmark size={19} />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === l.key ? "bg-sand text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {userName && (
            <span className="hidden text-sm text-muted sm:inline">{userName}</span>
          )}
          <button
            onClick={handleSignOut}
            className="rounded-full border-2 border-ink/20 px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-ink hover:text-ink"
          >
            Salir
          </button>
        </div>
      </div>
    </header>
  );
}
