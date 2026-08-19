import { Reveal } from "@/components/Reveal";
import { Robot } from "@/components/mascots/Robot";

/**
 * Momento de mucho espacio y un solo personaje grande — a propósito no
 * lleva más que una línea de texto.
 */
export function IntroVisual() {
  return (
    <section className="border-t-[3px] border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <Reveal className="w-[240px] sm:w-[300px]">
          <Robot />
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-8 font-display text-[clamp(26px,4.5vw,42px)] font-bold leading-[1.05] text-ink">
            ¿Le escribís y te tira cualquier cosa?
          </p>
        </Reveal>
      </div>
    </section>
  );
}
