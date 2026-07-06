import Link from "next/link";
import { MoonLogo, Wordmark } from "@/components/MoonLogo";
import { Reveal } from "@/components/Reveal";
import { LandingNav } from "@/components/LandingNav";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <LandingNav /> {/* Barra de navegación de la landing */}

      {/* ---------- HERO ---------- */}
      <header className="relative pt-[160px] pb-[140px] text-center">
        {/* glow de fondo */}
        <div
          className="pointer-events-none absolute left-1/2 top-[-10%] -z-0 h-[600px] w-[900px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(37,99,235,.18), transparent 60%)",
          }}
        /> {/* Solo decorativo, no interactúa (pointer-events-none) */}

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          {/* Luna centrada arriba en el medio */}
          <Reveal className="mx-auto mb-10 w-fit">
            <MoonLogo size={96} glow id="hero" /> {/* Logo grande con efecto glow */}
          </Reveal>

          {/* Título principal */}
          <Reveal delay={1}>
            <h1 className="font-serif text-[clamp(44px,8vw,92px)] font-normal leading-[1.02] tracking-[-0.025em]">
              Aprendé a ver
              <br />
              <em className="bg-gradient-to-r from-blue-light to-pink bg-clip-text not-italic text-transparent [font-style:italic]">
                el brillo {/* Palabra destacada con degradé de color */}
              </em>{" "}
              de la IA
            </h1>
          </Reveal>

          {/* Eyebrow (etiqueta pequeña) con líneas decorativas a los costados */}
          <Reveal delay={2}>
            <div className="mx-auto mt-9 flex w-fit items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-line-strong" /> {/* línea izquierda */}
              <span className="flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 backdrop-blur-sm">
                <MoonLogo size={15} id="eyebrow" /> {/* logo chico */}
                <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-blue-light">
                  Curso de ingeniería de prompts
                </span>
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-line-strong" /> {/* línea derecha */}
            </div>
          </Reveal>

          {/* Subtítulo/descripción corta */}
          <Reveal delay={3}>
            <p className="mx-auto mt-8 max-w-[540px] text-[19px] text-muted">
              La inteligencia artificial no es complicada. Solo nadie te enseñó a
              hablarle. En 20 minutos cambiamos eso.
            </p>
          </Reveal>

          {/* Botones de acción (CTA) */}
          <Reveal delay={4}>
            <div className="mt-11 flex flex-wrap justify-center gap-3.5">
              <Link href="/register" className="btn btn-primary">
                Empezar gratis {/* Lleva al registro */}
              </Link>
              <Link href="#como" className="btn btn-ghost">
                Ver cómo funciona {/* Scroll a la sección "cómo funciona" */}
              </Link>
            </div>
            <p className="mt-9 font-mono text-[12.5px] tracking-[0.04em] text-dim">
              7 módulos · práctica real · certificado al terminar
            </p>
          </Reveal>
        </div>
      </header>

      {/* ---------- PROBLEMA ---------- */}
      <section className="py-[120px]">
        <div className="mx-auto max-w-6xl px-6">
          {/* Encabezado de la sección */}
          <Reveal className="mb-16 max-w-[640px]">
            <span className="eyebrow mb-[18px] block">El problema</span>
            <h2 className="font-serif text-[clamp(30px,5vw,52px)] font-normal leading-[1.08] tracking-[-0.02em]">
              No es que la IA no entienda. Es como le explicas.
            </h2>
            <p className="mt-5 text-[18px] text-muted">
              La misma herramienta, dos resultados opuestos. La diferencia nunca
              fue técnica: fue saber comunicar lo que querés.
            </p>
          </Reveal>

          {/* Comparación: prompt malo vs prompt bueno */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal delay={1}>
              {/* Tarjeta: ejemplo de prompt vago (mal ejemplo) */}
              <div className="rounded-[18px] border border-line bg-surface p-[34px] transition-transform duration-500 hover:-translate-y-1">
                <span className="mb-5 inline-block rounded-[7px] bg-red-400/10 px-[11px] py-[5px] font-mono text-[11px] uppercase tracking-[0.15em] text-red-300">
                  Prompt vago
                </span>
                <p className="font-mono text-[14.5px] leading-[1.7]">
                  &quot;Dame ideas de negocio&quot;
                </p>
                <p className="mt-[18px] text-sm text-muted">
                  Respuesta genérica, sirve para cualquiera y para nadie.
                </p>
              </div>
            </Reveal>

            <Reveal delay={2}>
              {/* Tarjeta: ejemplo de prompt con estructura (buen ejemplo) */}
              <div className="rounded-[18px] border border-blue-light/25 bg-surface p-[34px] transition-transform duration-500 hover:-translate-y-1">
                <span className="mb-5 inline-block rounded-[7px] bg-blue-light/12 px-[11px] py-[5px] font-mono text-[11px] uppercase tracking-[0.15em] text-blue-light">
                  Prompt con estructura
                </span>
                <p className="font-mono text-[14.5px] leading-[1.7]">
                  &quot;Soy diseñador gráfico con 2 años de experiencia en
                  Argentina. Dame 5 ideas de negocio freelance con baja
                  inversión.&quot;
                </p>
                <p className="mt-[18px] text-sm text-muted">
                  Contexto, rol y formato. La respuesta ahora es tuya.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- CÓMO FUNCIONA ---------- */}
      <section id="como" className="py-[120px]">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-16 max-w-[640px]">
            <span className="eyebrow mb-[18px] block">Cómo funciona</span>
            <h2 className="font-serif text-[clamp(30px,5vw,52px)] font-normal leading-[1.08] tracking-[-0.02em]">
              Tres piezas. Un buen prompt.
            </h2>
          </Reveal>

          {/* Los 3 pasos/pilares se guardan en un array y se recorren con map */}
          <div className="grid grid-cols-1 overflow-hidden rounded-[18px] border border-line md:grid-cols-3">
            {[
              { n: "01", t: "Contexto", d: "Quién sos, para qué público, qué situación rodea la tarea. Lo que la IA no puede adivinar." },
              { n: "02", t: "Instrucción", d: "Una tarea clara y directa. Cuánto querés, con qué nivel de detalle, hacia dónde apunta." },
              { n: "03", t: "Formato", d: "Cómo querés la respuesta: una lista, una tabla, un tono. La forma también comunica." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={(i + 1) as 1 | 2 | 3}> {/* Animación escalonada por columna */}
                <div className="h-full border-line bg-surface p-[40px_34px] transition-colors duration-500 hover:bg-surface-2 md:border-r [&:last-child]:md:border-r-0">
                  <span className="mb-[22px] block font-serif text-[15px] text-blue-light">
                    {s.n} {/* Número del paso */}
                  </span>
                  <h3 className="mb-3 font-serif text-[23px] font-medium tracking-[-0.01em]">
                    {s.t} {/* Título del paso */}
                  </h3>
                  <p className="text-[15px] text-muted">{s.d}</p> {/* Descripción */}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}
      <section className="py-[140px] text-center">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto mb-9 w-fit">
            <MoonLogo size={64} glow id="final" /> {/* Logo final, más chico que el del hero */}
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mb-[22px] font-serif text-[clamp(30px,5vw,52px)] font-normal tracking-[-0.02em]">
              Empezá a ver el brillo
            </h2>
            <p className="mx-auto mb-[38px] max-w-[440px] text-[18px] text-muted">
              Gratis, sin vueltas. Creá tu cuenta y en veinte minutos vas a mirar
              la IA distinto.
            </p>
            <Link href="/register" className="btn btn-primary">
              Comenzar ahora {/* Segundo CTA al registro, al final de la página */}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-line py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6">
          <Wordmark size={17} /> {/* Logo/texto de marca */}
          <span className="text-[13.5px] text-dim">
            © {new Date().getFullYear()} · Hecho por Facundo Gutiérrez y Lucio Roa {/* Año actual dinámico + créditos */}
          </span>
        </div>
      </footer>
    </div>
  );
}