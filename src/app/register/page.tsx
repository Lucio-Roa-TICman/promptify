"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthShell } from "@/components/AuthShell";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (name.trim().length < 2) {
      setError("Ingresá tu nombre (aparecerá en tu certificado).");
      return;
    }

    setLoading(true);
    // El nombre queda guardado en la tabla "user" y es el que se usa
    // luego en el dashboard, la navbar y el certificado.
    const { error: signUpError } = await authClient.signUp.email({
      name: name.trim(),
      email,
      password,
    });

    setLoading(false);

    if (signUpError) {
      setError(
        signUpError.code === "USER_ALREADY_EXISTS"
          ? "Ya existe una cuenta con ese email. Probá iniciar sesión."
          : signUpError.message ?? "No se pudo crear la cuenta."
      );
      return;
    }

    router.push("/dashboard");
    router.refresh();
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
            minLength={8}
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mínimo 8 caracteres"
            autoComplete="new-password"
          />
        </div>

        {error && (
          <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
            {error}
          </p>
        )}

        <button type="submit" disabled={loading} className="btn btn-primary w-full disabled:opacity-60">
          {loading ? "Creando cuenta…" : "Crear cuenta"}
        </button>
      </form>
    </AuthShell>
  );
}
