"use client";

/**
 * Reemplazo real de mockStore.ts: en vez de guardar en memoria del navegador,
 * llama a las rutas /api/progress, que leen y escriben en la base (Neon)
 * para el usuario que esté logueado (sesión de better-auth).
 */

export async function getCompleted(): Promise<string[]> {
  const res = await fetch("/api/progress", { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return data.completed as string[];
}

export async function completeModule(
  slug: string
): Promise<{ completed: string[]; finished: boolean }> {
  const res = await fetch("/api/progress/complete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ slug }),
  });
  if (!res.ok) throw new Error("No se pudo guardar el progreso");
  return res.json();
}

export async function resetProgress(): Promise<void> {
  await fetch("/api/progress/reset", { method: "POST" });
}
