"use client";

/**
 * Store de ejemplo (mock): guarda el progreso en memoria del navegador.
 * Reemplazar por server actions reales contra la base (ver "TODO BACK").
 */

import { MOCK_PROGRESS, TOTAL_MODULES } from "@/data/course";

let completed = [...MOCK_PROGRESS.completedModules];

export function getCompleted(): string[] {
  return completed;
}

export function isFinished(): boolean {
  return completed.length >= TOTAL_MODULES;
}

// TODO BACK: esto debería escribir en la base de datos.
export function completeModule(slug: string): {
  completed: string[];
  finished: boolean;
} {
  if (!completed.includes(slug)) completed = [...completed, slug];
  return { completed, finished: completed.length >= TOTAL_MODULES };
}

// TODO BACK: reiniciar progreso real del usuario.
export function resetProgress() {
  completed = [];
}
