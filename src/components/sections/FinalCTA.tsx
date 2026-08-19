import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { RobotOk } from "@/components/mascots/RobotOk";

export function FinalCTA() {
  return (
    <section className="bg-cream py-24 text-center sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal className="mx-auto w-[180px] sm:w-[220px]">
          <RobotOk />
        </Reveal>
        <Reveal delay={2}>
          <h2 className="mt-8 font-display text-[clamp(34px,6.5vw,60px)] font-black uppercase leading-[0.95] text-ink">
            Empezá ahora.
          </h2>
        </Reveal>
        <Reveal delay={3} className="mt-9">
          <Button href="/register" variant="primary">
            Crear cuenta gratis
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
