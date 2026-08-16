import { Reveal } from "@/components/Reveal";

/**
 * El pago visual de "HowItWorks": las 3 piezas ensambladas en una frase
 * real, en grande, sobre fondo oscuro cálido (no azul) para el único
 * momento de alto contraste de la página.
 */
export function EducationalVisual() {
  return (
    <section className="border-y-[3px] border-ink bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-display text-[clamp(24px,5vw,44px)] font-bold leading-[1.15]">
            <span className="text-kiddo-blue">Diseñador gráfico.</span>{" "}
            <span className="text-white">5 ideas de negocio.</span>{" "}
            <span className="text-kiddo-orange">En una lista.</span>
          </p>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-7 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            Eso es un prompt bien armado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
