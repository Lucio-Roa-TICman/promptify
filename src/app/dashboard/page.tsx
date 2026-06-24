"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ProgressRing } from "@/components/ProgressRing";
import { Reveal } from "@/components/Reveal";
import { MODULES, TOTAL_MODULES, MOCK_USER } from "@/data/course";
import { getCompleted } from "@/lib/mockStore";

export default function DashboardPage() {
  // TODO BACK: reemplazar MOCK_USER por la sesión real,
  // y getCompleted() por el progreso real leído de la base.
  const user = MOCK_USER;
  const completed = getCompleted();

  const done = completed.length;
  const pct = Math.round((done / TOTAL_MODULES) * 100);
  const finished = done >= TOTAL_MODULES;
  const nextModule = MODULES.find((m) => !completed.includes(m.slug)) ?? MODULES[0];

  return (
    <div className="min-h-screen">
      <Navbar userName={user.name} active="dashboard" />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <Reveal>
          <span className="eyebrow">Centro de entrenamiento</span>
          <h1 className="mt-3 font-serif text-[clamp(34px,6vw,52px)] font-normal tracking-[-0.02em]">
            Hola, {user.name.split(" ")[0]}
          </h1>
          <p className="mt-2 text-muted">
            {finished
              ? "Completaste el curso. Tu certificado ya está disponible."
              : "Continuá donde lo dejaste y avanzá hacia tu certificado."}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <Reveal delay={1} className="lg:col-span-2">
            <div className="flex h-full items-center gap-6 rounded-[18px] border border-line bg-surface p-7">
              <ProgressRing value={done} max={TOTAL_MODULES} label={`${pct}%`} sublabel="Completado" />
              <div>
                <h2 className="font-serif text-xl font-medium">Tu progreso</h2>
                <p className="mt-1 text-sm text-muted">
                  {done} de {TOTAL_MODULES} módulos completados
                </p>
                <Link
                  href={finished ? "/certificado" : `/curso?m=${nextModule.slug}`}
                  className="btn btn-primary mt-4 !py-2.5 text-xs"
                >
                  {finished ? "Ver mi certificado" : done === 0 ? "Empezar el curso" : "Continuar"}
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="flex h-full flex-col justify-center rounded-[18px] border border-line bg-surface p-7">
              <span className="text-xs uppercase tracking-widest text-dim">Estado</span>
              <p className="mt-2 font-serif text-2xl font-medium">
                {finished ? "Curso finalizado" : "En progreso"}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12">
          <h2 className="font-serif text-2xl font-medium">Módulos del curso</h2>
          <div className="mt-5 space-y-3">
            {MODULES.map((m, i) => {
              const isDone = completed.includes(m.slug);
              return (
                <Reveal key={m.slug} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                  <Link
                    href={`/curso?m=${m.slug}`}
                    className="group flex items-center gap-4 rounded-[14px] border border-line bg-surface p-5 transition-colors hover:border-blue-light/40"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border text-sm font-semibold ${
                        isDone
                          ? "border-blue-light/40 bg-blue-light/15 text-blue-light"
                          : "border-line bg-surface-2 text-muted"
                      }`}
                    >
                      {isDone ? "✓" : m.index}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs uppercase tracking-wider text-dim">{m.kicker}</p>
                      <h3 className="truncate font-medium">{m.title}</h3>
                    </div>
                    <span className="hidden text-sm text-dim group-hover:text-blue-light sm:inline">
                      {isDone ? "Repasar" : "Empezar"} →
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
