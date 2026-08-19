import { Reveal } from "@/components/Reveal";
import { Cerebrito } from "@/components/mascots/Cerebrito";

/**
 * El momento "personajes > cards" de la landing: un solo mascot, muy
 * grande, casi sin texto alrededor. Sección alta a propósito — el scroll
 * tiene que tardar varios segundos en cruzarla viendo sobre todo al
 * personaje, no una grilla que se resuelve de un vistazo.
 */
export function CharacterShowcase() {
  return (
    <section className="bg-sand py-32 sm:py-48">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-clay">
            Tu guía
          </p>
        </Reveal>
        <Reveal delay={2} className="mx-auto mt-10 w-[260px] sm:w-[420px]">
          <Cerebrito />
        </Reveal>
      </div>
    </section>
  );
}
