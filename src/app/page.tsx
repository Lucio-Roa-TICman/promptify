import Link from "next/link";
import { MoonLogo, Wordmark } from "@/components/MoonLogo";
import { Reveal } from "@/components/Reveal";
import { LandingNav } from "@/components/LandingNav";
import { MODULES } from "@/data/course";

const PIECES = [
  {
    label: "Contexto",
    color: "text-blue-light",
    border: "border-blue-light/30",
    chip: "bg-blue-light/10",
    fragment: "Soy diseñador gráfico con 2 años de experiencia en Argentina.",
    detail: "Quién sos y qué situación rodea la tarea. Lo que la IA no puede adivinar.",
  },
  {
    label: "Instrucción",
    color: "text-text",
    border: "border-line-strong",
    chip: "bg-white/5",
    fragment: "Dame 5 ideas de negocio freelance con baja inversión.",
    detail: "La tarea, clara y directa. Cuánto querés y hacia dónde apunta.",
  },
  {
    label: "Formato",
    color: "text-pink",
    border: "border-pink/30",
    chip: "bg-pink/10",
    fragment: "Presentalas en una lista numerada, cada una con su justificación.",
    detail: "La forma de la respuesta: lista, tabla, tono. La forma también comunica.",
  },
];

const FAQS = [
  {
    q: "¿Necesito saber programar?",
    a: "No. El curso está pensado para personas que ya usan IA en el día a día pero sienten que podrían sacarle más provecho. Solo necesitás saber escribir.",
  },
  {
    q: "¿Cuánto tiempo lleva?",
    a: "Alrededor de 20 minutos. Son 7 módulos cortos, cada uno con su práctica, y podés pausar y retomar cuando quieras: tu progreso queda guardado.",
  },
  {
    q: "¿La práctica es real o solo teoría?",
    a: "Cada módulo termina con un ejercicio: ordenar las piezas de un prompt, elegir el mejor entre varios, o reescribir uno vago. Aprendés haciendo.",
  },
  {
    q: "¿Recibo un certificado?",
    a: "Sí. Al completar los 7 módulos se desbloquea tu certificado personalizado con tu nombre, descargable en PDF.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <LandingNav />

      {/* HERO */}
      <header className="relative pt-[150px] pb-24 text-center">
        <div
          className="pointer-events-none absolute left-1/2 top-[-10%] -z-0 h-[600px] w-[900px] -translate-x-1/2"
          style={{ background: "radial-gradient(ellipse at center, rgba(37,99,235,.16), transparent 60%)" }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <Reveal className="mx-auto mb-9 w-fit">
            {/* Luna azul, solo acá en el hero (el resto del sitio sigue con MoonLogo dorada) */}
            <span className="relative inline-block" style={{ width: 88, height: 88 }}>
              <span
                className="absolute animate-breathe rounded-full"
                style={{
                  inset: "-40%",
                  background: "radial-gradient(circle, rgba(37,99,235,.5), transparent 65%)",
                  filter: "blur(30px)",
                  zIndex: -1,
                }}
              />
              <svg width={88} height={88} viewBox="0 0 100 100" fill="none">
                <defs>
                  <radialGradient id="hero-blue-moon" cx="38%" cy="32%" r="75%">
                    <stop offset="0%" stopColor="#93C5FD" />
                    <stop offset="55%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="40" fill="url(#hero-blue-moon)" />
                <circle cx="38" cy="36" r="7" fill="#1E40AF" opacity="0.3" />
                <circle cx="62" cy="55" r="5" fill="#1E40AF" opacity="0.25" />
                <circle cx="46" cy="66" r="4" fill="#1E40AF" opacity="0.2" />
              </svg>
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="font-serif text-[clamp(42px,7.5vw,88px)] font-normal leading-[1.03] tracking-[-0.025em]">
              Promptify
            </h1>
          </Reveal>

          <Reveal delay={3}>
            <p className="mx-auto mt-7 max-w-[520px] text-lg text-muted">
              La IA no es complicada: nadie te enseñó a hablarle.
              Eso cambia hoy, en 20 minutos.
            </p>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-10 flex flex-wrap justify-center gap-3.5">
              <Link href="/register" className="btn btn-primary">
                Empezar gratis
              </Link>
              <Link href="#programa" className="btn btn-ghost">
                Ver el programa
              </Link>
            </div>
            <p className="mt-7 font-mono text-xs tracking-[0.04em] text-dim">
              7 módulos · práctica real · certificado al terminar
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="mx-auto mt-8 flex w-fit items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-line-strong" aria-hidden />
              <span className="flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 backdrop-blur-sm">
                <MoonLogo size={14} id="eyebrow" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-light">
                  Curso de ingeniería de prompts
                </span>
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-line-strong" aria-hidden />
            </div>
          </Reveal>

          <Reveal delay={3}>
            <p className="mx-auto mt-7 max-w-[520px] text-lg text-muted">
              La inteligencia artificial no es complicada. Solo nadie te enseñó
              a hablarle. En 20 minutos cambiamos eso.
            </p>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-10 flex flex-wrap justify-center gap-3.5">
              <Link href="/register" className="btn btn-primary">
                Empezar gratis
              </Link>
              <Link href="#programa" className="btn btn-ghost">
                Ver el programa
              </Link>
            </div>
            <p className="mt-7 font-mono text-xs tracking-[0.04em] text-dim">
              7 módulos · práctica real · certificado al terminar
            </p>
          </Reveal>

          {/* Preview del producto */}
          <Reveal delay={4} className="mt-16">
            <div
              aria-hidden
              className="relative mx-auto max-w-3xl rounded-2xl border border-line-strong bg-surface/80 text-left shadow-[0_30px_80px_-30px_rgba(37,99,235,0.25)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 font-mono text-[11px] text-dim">
                  promptify · módulo 2 — práctica
                </span>
              </div>

              <div className="flex">
                <div className="hidden w-44 shrink-0 border-r border-line p-4 sm:block">
                  <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-dim">
                    Currículum
                  </p>
                  <div className="space-y-1.5">
                    {MODULES.map((m, i) => (
                      <div
                        key={m.slug}
                        className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${
                          i === 1 ? "bg-blue-light/10 text-text" : "text-dim"
                        }`}
                      >
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded text-[8px] font-semibold ${
                            i < 1
                              ? "bg-blue-light/20 text-blue-light"
                              : i === 1
                              ? "bg-blue text-white"
                              : "bg-surface-2"
                          }`}
                        >
                          {i < 1 ? "✓" : i + 1}
                        </span>
                        <span className="truncate">{m.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="min-w-0 flex-1 p-5">
                  <span className="rounded bg-blue-light/15 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-blue-light">
                    Práctica
                  </span>
                  <p className="mt-3 text-sm text-text">
                    Ordená los bloques para armar un prompt profesional.
                  </p>
                  <div className="mt-4 space-y-2">
                    {[
                      "Actuá como un asesor de emprendimientos.",
                      "Soy diseñador gráfico con 2 años de experiencia.",
                      "Dame 5 ideas de negocio freelance.",
                    ].map((t, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 rounded-lg border border-line bg-bg-soft px-3 py-2.5"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-light/15 text-[10px] font-semibold text-blue-light">
                          {i + 1}
                        </span>
                        <span className="truncate font-mono text-[11px] text-muted">{t}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 inline-flex rounded-lg bg-gradient-to-b from-blue-light to-blue px-4 py-2 text-[11px] font-semibold text-white">
                    Comprobar respuesta
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* EL MÉTODO */}
      <section id="como" className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-14 max-w-[620px]">
            <span className="eyebrow mb-4 block">El método</span>
            <h2 className="font-serif text-[clamp(30px,5vw,50px)] font-normal leading-[1.08] tracking-[-0.02em]">
              Tres piezas. Un buen prompt.
            </h2>
            <p className="mt-5 text-lg text-muted">
              Todo prompt efectivo se construye igual. Mirá cómo se ensamblan
              las piezas — cada color es una parte del mensaje.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PIECES.map((p, i) => (
              <Reveal key={p.label} delay={(i + 1) as 1 | 2 | 3}>
                <div
                  className={`h-full rounded-2xl border ${p.border} bg-surface p-7 transition-transform duration-500 hover:-translate-y-1`}
                >
                  <span
                    className={`inline-block rounded-md ${p.chip} px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] ${p.color}`}
                  >
                    {p.label}
                  </span>
                  <p className={`mt-5 font-mono text-[13.5px] leading-relaxed ${p.color}`}>
                    &quot;{p.fragment}&quot;
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Prompt ensamblado */}
          <Reveal delay={4} className="mt-5">
            <div className="rounded-2xl border border-line bg-bg-soft p-7 md:p-8">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
                El prompt completo
              </p>
              <p className="font-mono text-[15px] leading-[1.9]">
                <span className="text-blue-light">
                  Soy diseñador gráfico con 2 años de experiencia en Argentina.
                </span>{" "}
                <span className="text-text">
                  Dame 5 ideas de negocio freelance con baja inversión.
                </span>{" "}
                <span className="text-pink">
                  Presentalas en una lista numerada, cada una con su justificación.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EL PROGRAMA */}
      <section id="programa" className="border-t border-line py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[560px]">
              <span className="eyebrow mb-4 block">El programa</span>
              <h2 className="font-serif text-[clamp(30px,5vw,50px)] font-normal leading-[1.08] tracking-[-0.02em]">
                7 módulos, 20 minutos
              </h2>
            </div>
            <p className="max-w-[340px] text-sm leading-relaxed text-muted">
              Cada módulo cierra con una práctica. Tu progreso se guarda y el
              certificado se desbloquea al terminar.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {MODULES.map((m, i) => (
              <Reveal key={m.slug} delay={Math.min(i % 2 === 0 ? 1 : 2, 4) as 1 | 2}>
                <div className="group flex h-full gap-5 bg-surface p-7 transition-colors duration-300 hover:bg-surface-2">
                  <span className="font-serif text-[15px] leading-7 text-blue-light">
                    {String(m.index).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg font-medium tracking-[-0.01em] text-text">
                      {m.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{m.subtitle}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={2}>
              <div className="flex h-full items-center gap-5 bg-gradient-to-br from-surface to-blue/10 p-7">
                <MoonLogo size={34} id="programa-cert" />
                <div>
                  <h3 className="font-serif text-lg font-medium tracking-[-0.01em] text-text">
                    Tu certificado
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    Personalizado con tu nombre, descargable en PDF al completar el curso.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mb-12 text-center">
            <span className="eyebrow mb-4 block">Preguntas frecuentes</span>
            <h2 className="font-serif text-[clamp(28px,4.5vw,44px)] font-normal tracking-[-0.02em]">
              Lo que siempre preguntan
            </h2>
          </Reveal>

          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <details className="group rounded-xl border border-line bg-surface transition-colors open:border-blue-light/30">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-medium text-text [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      className="shrink-0 text-dim transition-transform duration-300 group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-line py-32 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto mb-8 w-fit">
            <MoonLogo size={60} glow id="final" />
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mb-5 font-serif text-[clamp(30px,5vw,50px)] font-normal tracking-[-0.02em]">
              Empezá a ver el brillo
            </h2>
            <p className="mx-auto mb-9 max-w-[420px] text-lg text-muted">
              Gratis, sin vueltas. Creá tu cuenta y en veinte minutos vas a
              mirar la IA distinto.
            </p>
            <Link href="/register" className="btn btn-primary !px-8 !py-3.5">
              Comenzar ahora
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6">
          <Wordmark size={17} />
          <nav className="flex gap-6 text-sm text-muted" aria-label="Enlaces del pie">
            <Link href="/login" className="transition-colors hover:text-text">Ingresar</Link>
            <Link href="/register" className="transition-colors hover:text-text">Crear cuenta</Link>
            <Link href="#programa" className="transition-colors hover:text-text">Programa</Link>
          </nav>
          <span className="text-[13px] text-dim">
            © {new Date().getFullYear()} · Hecho por Facundo Gutiérrez y Lucio Roa
          </span>
        </div>
      </footer>
    </div>
  );
}
