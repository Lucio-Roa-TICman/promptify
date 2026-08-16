import { Reveal } from "@/components/Reveal";

const STEPS = [
  { n: "01", label: "Contexto", hint: "Quién sos.", color: "text-kiddo-blue", border: "border-kiddo-blue" },
  { n: "02", label: "Instrucción", hint: "Qué querés.", color: "text-ink", border: "border-ink" },
  { n: "03", label: "Formato", hint: "Cómo lo querés.", color: "text-clay", border: "border-clay" },
] as const;

/**
 * El método real del curso, reducido a lo mínimo: número, palabra,
 * cuatro palabras de ayuda. Sin fragmentos largos ni párrafos.
 */
export function HowItWorks() {
  return (
    <section id="como" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="mb-14 text-center">
          <h2 className="font-display text-[clamp(30px,5.5vw,52px)] font-black uppercase leading-[0.95] text-ink">
            Un buen prompt tiene 3 piezas.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.label} delay={(i + 1) as 1 | 2 | 3}>
              <div className={`rounded-2xl border-2 ${s.border} bg-paper p-7 text-center`}>
                <span className={`font-display text-4xl font-black ${s.color}`}>{s.n}</span>
                <p className="mt-2 font-display text-lg font-bold uppercase text-ink">{s.label}</p>
                <p className="mt-1 text-sm text-ink/50">{s.hint}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
