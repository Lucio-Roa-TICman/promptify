"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthShell } from "@/components/AuthShell";
import { PasswordInput } from "@/components/PasswordInput";
import { authClient } from "@/lib/auth-client";
import { Robot } from "@/components/mascots/Robot";

export default function LoginPage() {
  const router = useRouter();

  // Sin esto, el chunk/RSC payload de /dashboard recién se pide después de
  // que signIn responde — precargarlo desde que se monta el form lo saca
  // del camino crítico del submit.
  useEffect(() => {
    router.prefetch("/dashboard");
  }, [router]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // better-auth devuelve el mismo código INVALID_EMAIL_OR_PASSWORD tanto si
  // el email no existe como si la contraseña está mal (a propósito, para no
  // revelar qué emails están registrados). Por eso este estado no dice "esa
  // cuenta no existe" con certeza, sino un mensaje que cubre ambos casos.
  const [accountNotFound, setAccountNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setAccountNotFound(false);
    setLoading(true);

    const { error: signInError } = await authClient.signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (signInError) {
      if (signInError.code === "INVALID_EMAIL_OR_PASSWORD") {
        setAccountNotFound(true);
      } else {
        setError(signInError.message ?? "No se pudo iniciar sesión.");
      }
      return;
    }

    router.push("/dashboard");
  }

  return (
    <AuthShell
      title="Bienvenido de nuevo"
      subtitle="Ingresá para continuar tu curso."
      footer={
        <>
          ¿No tenés cuenta?{" "}
          <Link href="/register" className="text-blue-light hover:underline">
            Registrate
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-muted">Email</label>
          <input
            type="email"
            required
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            autoComplete="email"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-muted">Contraseña</label>
          <PasswordInput
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
          />
        </div>

        {error && (
          <p className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-xs text-red-700">
            {error}
          </p>
        )}

        <button type="submit" disabled={loading} className="btn btn-primary w-full disabled:opacity-60">
          {loading ? "Ingresando…" : "Ingresar"}
        </button>
      </form>

      {accountNotFound && (
        <div className="mt-5 flex flex-col items-center rounded-2xl border-2 border-ink/12 bg-sand/40 px-5 py-6 text-center">
          <div className="w-20">
            <Robot />
          </div>
          <p className="mt-3 font-serif text-lg font-medium">Ups… no encontramos esa cuenta</p>
          <p className="mt-1 text-sm text-muted">
            Revisá tu email y contraseña, o creá una cuenta nueva para continuar.
          </p>
          <Link href="/register" className="btn btn-primary mt-4 !py-2.5 text-xs">
            Crear cuenta
          </Link>
        </div>
      )}
    </AuthShell>
  );
}
