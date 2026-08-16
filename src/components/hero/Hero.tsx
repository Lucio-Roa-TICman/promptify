import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { ModelChip } from "@/components/hero/ModelChip";
import { ChatGPTMark, ClaudeMark, GeminiMark } from "@/components/icons/AiMarks";
import { Cerebrito } from "@/components/mascots/Cerebrito";

/**
 * Entrada de la landing. Los tres ecosistemas de IA son protagonistas
 * visuales desde el primer segundo — no hay hero SaaS tradicional con
 * párrafo largo, y la luna de marca no aparece acá (queda solo en el nav).
 * Sin eyebrow: los chips de modelo ya cumplen ese rol, una etiqueta extra
 * era chrome de más antes de llegar al título.
 */
export function Hero() {
  return (
    <header className="relative overflow-hidden pt-[150px] pb-16 text-center">
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <Reveal className="flex flex-wrap items-center justify-center gap-3.5">
          <ModelChip icon={<ChatGPTMark size={24} />} label="ChatGPT" rotate="-3deg" />
          <ModelChip icon={<ClaudeMark size={24} />} label="Claude" rotate="2deg" />
          <ModelChip icon={<GeminiMark size={24} />} label="Gemini" rotate="-2deg" />
        </Reveal>

        <Reveal delay={2}>
          <h1 className="mt-9 font-display text-[clamp(56px,12vw,140px)] font-black uppercase leading-[0.86] tracking-[-0.01em] text-ink">
            Promptify
          </h1>
        </Reveal>

        <Reveal delay={3}>
          <p className="mx-auto mt-4 max-w-[360px] font-display text-xl font-bold text-ink/70">
            Hablale bien a la IA.
          </p>
        </Reveal>

        <Reveal delay={4} className="mt-8">
          <Button href="/register" variant="primary">
            Empezar gratis
          </Button>
        </Reveal>

        <Reveal delay={4} className="mx-auto mt-12 w-[200px] sm:w-[260px]">
          <Cerebrito />
        </Reveal>
      </div>
    </header>
  );
}
