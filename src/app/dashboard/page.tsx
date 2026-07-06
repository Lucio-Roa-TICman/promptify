"use client"; // Este componente corre en el navegador (cliente), no en el servidor

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Para navegar entre páginas sin recargar
import { Navbar } from "@/components/Navbar"; // Barra de navegación superior
import { ProgressRing } from "@/components/ProgressRing"; // Anillo visual de progreso
import { Reveal } from "@/components/Reveal"; // Wrapper que anima la aparición del contenido
import { MODULES, TOTAL_MODULES } from "@/data/course";
import { getCompleted } from "@/lib/progressStore"; // Trae los módulos completados desde la base
import { useSession } from "@/lib/auth-client"; // Sesión real de better-auth

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, isPending: sessionLoading } = useSession();
  const [completed, setCompleted] = useState<string[] | null>(null);

  useEffect(() => {
    if (!sessionLoading && !session) {
      router.push("/login");
    }
  }, [sessionLoading, session, router]);

  useEffect(() => {
    if (session) getCompleted().then(setCompleted);
  }, [session]);

  if (sessionLoading || !session || completed === null) {
    return <div className="min-h-screen" />;
  }

  const user = session.user;
  const done = completed.length; // Cuántos módulos completó
  const pct = Math.round((done / TOTAL_MODULES) * 100); // Porcentaje de avance
  const finished = done >= TOTAL_MODULES; // Si ya terminó todo el curso
  const nextModule = MODULES.find((m) => !completed.includes(m.slug)) ?? MODULES[0]; // Próximo módulo pendiente (o el primero si ya terminó)

  return (
    <div className="min-h-screen">
      <Navbar userName={user.name} active="dashboard" /> {/* Muestra el nombre y marca "dashboard" como pestaña activa */}

      <main className="mx-auto max-w-6xl px-6 py-12">
        <Reveal>
          {/* Título y saludo */}
          <span className="eyebrow">Centro de entrenamiento</span>
          <h1 className="mt-3 font-serif text-[clamp(34px,6vw,52px)] font-normal tracking-[-0.02em]">
            Hola, {user.name.split(" ")[0]} {/* Solo el primer nombre */}
          </h1>
          <p className="mt-2 text-muted">
            {finished
              ? "Completaste el curso. Tu certificado ya está disponible."
              : "Continuá donde lo dejaste y avanzá hacia tu certificado."}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {/* Tarjeta grande: anillo de progreso + botón de acción */}
          <Reveal delay={1} className="lg:col-span-2">
            <div className="flex h-full items-center gap-6 rounded-[18px] border border-line bg-surface p-7">
              <ProgressRing value={done} max={TOTAL_MODULES} label={`${pct}%`} sublabel="Completado" />
              <div>
                <h2 className="font-serif text-xl font-medium">Tu progreso</h2>
                <p className="mt-1 text-sm text-muted">
                  {done} de {TOTAL_MODULES} módulos completados
                </p>
                <Link
                  href={finished ? "/certificado" : `/curso?m=${nextModule.slug}`} // A dónde lleva el botón según el estado
                  className="btn btn-primary mt-4 !py-2.5 text-xs"
                >
                  {finished ? "Ver mi certificado" : done === 0 ? "Empezar el curso" : "Continuar"} {/* Texto del botón según el estado */}
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Tarjeta chica: estado textual */}
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
              const isDone = completed.includes(m.slug); // Si este módulo puntual está completado
              return (
                <Reveal key={m.slug} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}> {/* Animación escalonada, tope en 4 */}
                  <Link
                    href={`/curso?m=${m.slug}`} // Lleva al módulo correspondiente
                    className="group flex items-center gap-4 rounded-[14px] border border-line bg-surface p-5 transition-colors hover:border-blue-light/40"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border text-sm font-semibold ${
                        isDone
                          ? "border-blue-light/40 bg-blue-light/15 text-blue-light" // Estilo si está completo
                          : "border-line bg-surface-2 text-muted" // Estilo si está pendiente
                      }`}
                    >
                      {isDone ? "✓" : m.index} {/* Tilde si terminó, número de orden si no */}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs uppercase tracking-wider text-dim">{m.kicker}</p> {/* Categoría del módulo */}
                      <h3 className="truncate font-medium">{m.title}</h3> {/* Título, se corta si es largo */}
                    </div>
                    <span className="hidden text-sm text-dim group-hover:text-blue-light sm:inline">
                      {isDone ? "Repasar" : "Empezar"} → {/* Texto que cambia según estado, oculto en mobile */}
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
