import { Reveal } from "@/components/Reveal";
import { ChatGPTMark, ClaudeMark, GeminiMark } from "@/components/icons/AiMarks";

const TOOLS = [
  { Icon: ChatGPTMark, name: "ChatGPT", hint: "Para escribir y conversar." },
  { Icon: ClaudeMark, name: "Claude", hint: "Para pensar y programar." },
  { Icon: GeminiMark, name: "Gemini", hint: "Para todo, con Google." },
] as const;

/**
 * Vuelve a los tres ecosistemas del hero, ahora como tarjetas cortas.
 * Reusa los mismos íconos (fuente única en icons/AiMarks.tsx).
 */
export function ToolsEcosystem() {
  return (
    <section className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(30px,5.5vw,52px)] font-black uppercase leading-[0.95] text-ink">
            Practicás con las tres.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TOOLS.map((t, i) => (
            <Reveal key={t.name} delay={(i + 1) as 1 | 2 | 3}>
              <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-ink/15 bg-paper p-7">
                <t.Icon size={44} />
                <p className="font-display text-lg font-bold uppercase text-ink">{t.name}</p>
                <p className="text-sm text-ink/50">{t.hint}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
