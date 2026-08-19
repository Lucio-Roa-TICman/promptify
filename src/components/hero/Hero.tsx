import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { ChatGPTMark, ClaudeMark, GeminiMark } from "@/components/icons/AiMarks";

/**
 * Entrada de la landing. Los tres ecosistemas de IA son protagonistas
 * visuales desde el primer segundo — composición de 3 fichas apiladas con
 * tilt 3D (inspirada en Claude Design), no un dashboard genérico. Usa
 * ChatGPTMark/ClaudeMark/GeminiMark (arte propio) en vez de los isotipos
 * oficiales — ver comentario en icons/AiMarks.tsx.
 */
export function Hero() {
  return (
    <header className="relative overflow-hidden pt-[150px] pb-16 text-center dark:bg-[#16130e]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(880px_600px_at_50%_2%,rgba(255,122,13,0.14),transparent_70%)] dark:bg-[radial-gradient(880px_600px_at_50%_2%,rgba(216,169,96,0.14),transparent_70%)]" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(32,26,20,0.1)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:radial-gradient(720px_500px_at_50%_6%,#000_12%,transparent_78%)] dark:bg-[radial-gradient(rgba(242,238,228,0.13)_1px,transparent_1px)]"
      />
      <div className="pointer-events-none absolute left-1/2 top-[-300px] h-[880px] w-[880px] -translate-x-1/2 animate-[spin_80s_linear_infinite] rounded-full border border-ink/10 dark:border-[#f2eee4]/10" />
      <div className="pointer-events-none absolute left-1/2 top-[-170px] h-[600px] w-[600px] -translate-x-1/2 animate-[spin_56s_linear_infinite_reverse] rounded-full border border-dashed border-ink/10 opacity-55 dark:border-[#f2eee4]/10" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <Reveal className="relative flex items-center justify-center [perspective:1600px]">
          <div className="absolute bottom-0 h-[34px] w-[min(600px,88%)] rounded-full bg-[radial-gradient(closest-side,rgba(32,26,20,0.09),transparent_76%)] dark:bg-[radial-gradient(closest-side,rgba(242,238,228,0.08),transparent_76%)]" />

          <div className="relative z-[1] mr-[-22px] animate-bob [animation-delay:0s]">
            <div className="relative grid aspect-square w-[clamp(84px,13vw,150px)] origin-center place-items-center rounded-[28px] border-2 border-ink bg-paper shadow-[7px_7px_0_0_#201A14] [transform:rotateY(22deg)_rotate(-7deg)_scale(0.92)] transition-transform duration-[440ms] dark:border-[#f2eee4]/80 dark:bg-[#201c15] dark:shadow-[7px_7px_0_0_#0b0906]">
              <div className="absolute inset-[6px] rounded-[22px] border border-ink/12 dark:border-[#f2eee4]/16" />
              <GeminiMark size={44} />
            </div>
          </div>

          <div className="relative z-[3] animate-bob [animation-delay:0.4s] [animation-duration:7.6s]">
            <div className="relative grid aspect-square w-[clamp(120px,20vw,220px)] place-items-center rounded-[40px] border-2 border-ink bg-paper shadow-[10px_10px_0_0_#201A14] transition-transform duration-[440ms] hover:-translate-y-2 dark:border-[#f2eee4]/80 dark:bg-[#201c15] dark:shadow-[10px_10px_0_0_#0b0906]">
              <div className="absolute inset-[7px] rounded-[33px] border border-ink/12 dark:border-[#f2eee4]/16" />
              <ClaudeMark size={78} />
            </div>
            <div className="absolute -right-6 -top-3 z-[5] whitespace-nowrap rounded-full border-2 border-ink bg-cream px-3.5 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-ink shadow-[3px_3px_0_0_#FF7A0D] [transform:rotate(9deg)] dark:border-[#f2eee4]/80 dark:bg-[#16130e] dark:text-[#f2eee4] dark:shadow-[3px_3px_0_0_#d8a960]">
              20 min · gratis
            </div>
          </div>

          <div className="relative z-[1] ml-[-22px] animate-bob [animation-delay:1.1s] [animation-duration:10.5s]">
            <div className="relative grid aspect-square w-[clamp(84px,13vw,150px)] place-items-center rounded-[28px] border-2 border-ink bg-paper shadow-[7px_7px_0_0_#201A14] [transform:rotateY(-22deg)_rotate(7deg)_scale(0.92)] transition-transform duration-[440ms] dark:border-[#f2eee4]/80 dark:bg-[#201c15] dark:shadow-[7px_7px_0_0_#0b0906]">
              <div className="absolute inset-[6px] rounded-[22px] border border-ink/12 dark:border-[#f2eee4]/16" />
              <ChatGPTMark size={40} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={1} className="mt-8 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 dark:text-[#f2eee4]/40">
          <span>Gemini</span>
          <span className="h-[2px] w-3.5 bg-ink/15 dark:bg-[#f2eee4]/15" />
          <span className="text-ink/60 dark:text-[#f2eee4]/60">Claude</span>
          <span className="h-[2px] w-3.5 bg-ink/15 dark:bg-[#f2eee4]/15" />
          <span>ChatGPT</span>
        </Reveal>

        <Reveal delay={2}>
          <h1 className="mt-6 font-display text-[clamp(46px,10vw,124px)] font-black uppercase leading-[0.86] tracking-[-0.03em] text-ink dark:text-[#f2eee4]">
            Hablá bien
            <br />
            con la IA
          </h1>
        </Reveal>

        <Reveal delay={3}>
          <p className="mx-auto mt-5 max-w-[380px] text-[17px] leading-relaxed text-ink/60 dark:text-[#f2eee4]/65">
            Un curso corto y práctico para escribir mejores prompts.
          </p>
        </Reveal>

        <Reveal delay={4} className="mt-9">
          <Button href="/register" variant="primary" className="!flex-col !gap-1 !py-4">
            <span>Comenzar el curso</span>
            <span className="font-display text-[9.5px] font-bold uppercase tracking-[0.18em] text-white/70">
              Certificado al terminar
            </span>
          </Button>
        </Reveal>
      </div>
    </header>
  );
}
