"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthShell } from "@/components/AuthShell";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (name.trim().length < 2) {
      setError("Ingresá tu nombre (aparecerá en tu certificado).");
      return;
    }
    // TODO BACK: reemplazar por signUp.email() de better-auth.
    // El nombre (name) es el que se usa luego en el certificado.
    router.push("/dashboard");
  }

  return (
    <AuthShell
      title="Creá tu cuenta"
      subtitle="Empezá el curso en menos de un minuto."
      footer={
        <>
          ¿Ya tenés cuenta?{" "}
          <Link href="/login" className="text-blue-light hover:underline">
            Ingresá
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-muted">Nombre completo</label>
          <input
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Cómo querés que figure en tu certificado"
            autoComplete="name"
          />
          <p className="mt-1.5 text-[11px] text-dim">
            Este nombre se imprimirá en tu certificado al finalizar.
          </p>
        </div>
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
          <input
            type="password"
            required
            minLength={6}
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mínimo 6 caracteres"
            autoComplete="new-password"
          />
        </div>

        {error && (
          <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
            {error}
          </p>
        )}

        <button type="submit" className="btn btn-primary w-full">
          Crear cuenta
        </button>
      </form>
    </AuthShell>
  );
}
