import { Reveal } from "@/components/Reveal";
import { Cerebrito } from "@/components/mascots/Cerebrito";
import { Robot } from "@/components/mascots/Robot";
import { RobotOk } from "@/components/mascots/RobotOk";

/**
 * El momento "personajes > cards" de la landing: los tres mascots grandes,
 * con espacio de sobra, sin tarjetas ni texto explicativo alrededor.
 * En mobile se apilan pero mantienen el mismo tamaño protagonista.
 */
export function CharacterShowcase() {
  return (
    <section className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-clay">
            Tu equipo
          </p>
          <h2 className="mt-3 font-display text-[clamp(34px,6.5vw,68px)] font-black uppercase leading-[0.95] text-ink">
            Vas a aprender acompañado.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-3 sm:items-end sm:gap-6">
          <Reveal delay={1} className="mx-auto w-[220px] sm:w-full">
            <Cerebrito />
          </Reveal>
          <Reveal delay={2} className="mx-auto w-[240px] sm:w-full">
            <Robot />
          </Reveal>
          <Reveal delay={3} className="mx-auto w-[220px] sm:w-full">
            <RobotOk />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
