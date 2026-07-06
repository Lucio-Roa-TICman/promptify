"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MODULES, TOTAL_MODULES } from "@/data/course";
import { Navbar } from "@/components/Navbar";
import { ExerciseRunner } from "@/components/ExerciseRunner";
import { getCompleted, completeModule } from "@/lib/progressStore";
import { useSession } from "@/lib/auth-client";

export function CourseClient() {
  const router = useRouter();
  const params = useSearchParams();
  const requested = params.get("m");
  const { data: session, isPending: sessionLoading } = useSession();

  const initialSlug =
    requested && MODULES.some((m) => m.slug === requested) ? requested : MODULES[0].slug;

  const [activeSlug, setActiveSlug] = useState(initialSlug);
  const [completed, setCompleted] = useState<string[] | null>(null);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    if (!sessionLoading && !session) router.push("/login");
  }, [sessionLoading, session, router]);

  useEffect(() => {
    if (session) getCompleted().then(setCompleted);
  }, [session]);

  const active = MODULES.find((m) => m.slug === activeSlug) ?? MODULES[0];
  const activeIndex = MODULES.findIndex((m) => m.slug === active.slug);
  const isLast = activeIndex === MODULES.length - 1;
  const canComplete = !active.exercise || solved || (completed?.includes(active.slug) ?? false);

  function select(slug: string) {
    setActiveSlug(slug);
    setSolved(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleComplete() {
    const res = await completeModule(active.slug);
    setCompleted(res.completed);

    if (res.finished && res.completed.length >= TOTAL_MODULES) {
      router.push("/certificado");
      return;
    }
    const next = MODULES[activeIndex + 1];
    if (next) select(next.slug);
    else router.push("/dashboard");
  }

  if (sessionLoading || !session || completed === null) {
    return <div className="min-h-screen" />;
  }

  return (
    <div className="min-h-screen">
      <Navbar userName={session.user.name} active="curso" />

      <div className="mx-auto flex max-w-6xl gap-8 px-6 py-10">
        {/* Sidebar */}
        <aside className="hidden w-60 shrink-0 lg:block">
          <div className="sticky top-24">
            <p className="eyebrow mb-4">Currículum</p>
            <nav className="space-y-1">
              {MODULES.map((m) => {
                const isDone = completed.includes(m.slug);
                const isActive = m.slug === active.slug;
                return (
                  <button
                    key={m.slug}
                    onClick={() => select(m.slug)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      isActive ? "bg-blue-light/10 text-text" : "text-muted hover:bg-white/[0.03] hover:text-text"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded text-[11px] font-semibold ${
                        isDone ? "bg-blue-light/20 text-blue-light" : isActive ? "bg-blue text-white" : "bg-surface-2 text-dim"
                      }`}
                    >
                      {isDone ? "✓" : m.index}
                    </span>
                    <span className="truncate">{m.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Contenido */}
        <main className="min-w-0 flex-1">
          <div key={active.slug} className="reveal in">
            <p className="eyebrow">{active.kicker}</p>
            <h1 className="mt-3 font-serif text-[clamp(32px,5vw,52px)] font-normal leading-tight tracking-[-0.02em]">
              {active.title}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-muted">{active.subtitle}</p>

            <div className="mt-10 space-y-6">
              {active.lessons.map((l, i) => (
                <div key={i} className="rounded-[16px] border border-line bg-surface p-6">
                  {l.heading && <h2 className="font-serif text-xl font-medium">{l.heading}</h2>}
                  <p className={`${l.heading ? "mt-2" : ""} leading-relaxed text-muted`}>{l.body}</p>
                </div>
              ))}
            </div>

            {active.exercise && (
              <div className="mt-10">
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-md bg-blue-light/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-light">
                    Práctica
                  </span>
                  <span className="text-xs text-dim">Aplicá lo que aprendiste</span>
                </div>
                <div className="rounded-[16px] border border-line bg-surface p-7">
                  <p className="mb-5">{active.exercise.prompt}</p>
                  <ExerciseRunner exercise={active.exercise} onSolved={() => setSolved(true)} />
                </div>
              </div>
            )}

            <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
              <button
                onClick={() => { const p = MODULES[activeIndex - 1]; if (p) select(p.slug); }}
                disabled={activeIndex === 0}
                className="btn btn-ghost !py-2.5 text-xs disabled:opacity-40"
              >
                ← Anterior
              </button>
              <button onClick={handleComplete} disabled={!canComplete} className="btn btn-primary !py-2.5 text-xs disabled:opacity-50">
                {isLast ? "Finalizar y ver certificado" : completed.includes(active.slug) ? "Siguiente módulo →" : "Completar módulo →"}
              </button>
            </div>
            {!canComplete && <p className="mt-3 text-right text-xs text-dim">Resolvé la práctica para continuar.</p>}
          </div>
        </main>
      </div>
    </div>
  );
}
