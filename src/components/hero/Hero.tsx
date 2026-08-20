import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ChatGPTMark, ClaudeMark, GeminiMark } from "@/components/icons/AiMarks";

/**
 * Entrada de la landing — reconstrucción fiel de "Promptify Landing.dc.html"
 * (Claude Design, proyecto "Mascota Luna para Promptify"), la referencia
 * visual no-negociable para el rediseño. Colores, tipografía (Outfit) y
 * estructura calcados del mockup; usa ChatGPTMark/ClaudeMark/GeminiMark
 * (arte propio) en vez de los isotipos oficiales que trae el mockup —
 * decisión ya tomada con el usuario, ver comentario en icons/AiMarks.tsx.
 *
 * El acento dorado (#b68235 / #d8a960 en oscuro) es el de este mockup, no
 * el kiddo-orange (#FF7A0D) que ya usa el resto del sitio — queda local al
 * Hero por ahora, a la espera de que el usuario confirme si unificamos el
 * acento del design system entero o lo dejamos así.
 */
export function Hero() {
  return (
    <header className="relative overflow-hidden pt-[150px] pb-16 text-center dark:bg-[#16130e]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(880px_600px_at_50%_2%,rgba(182,130,53,0.16),transparent_70%)] dark:bg-[radial-gradient(880px_600px_at_50%_2%,rgba(216,169,96,0.14),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(32,31,29,0.11)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:radial-gradient(720px_500px_at_50%_6%,#000_12%,transparent_78%)] dark:bg-[radial-gradient(rgba(242,238,228,0.13)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-300px] h-[880px] w-[880px] -translate-x-1/2 animate-[spin_80s_linear_infinite] rounded-full border border-ink/[0.14] dark:border-[#f2eee4]/10" />
      <div className="pointer-events-none absolute left-1/2 top-[-170px] h-[600px] w-[600px] -translate-x-1/2 animate-[spin_56s_linear_infinite_reverse] rounded-full border border-dashed border-ink/[0.14] opacity-55 dark:border-[#f2eee4]/10" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <Reveal className="relative flex items-center justify-center [perspective:1600px]">
          <div className="absolute bottom-0 h-[34px] w-[min(600px,88%)] rounded-full bg-[radial-gradient(closest-side,rgba(32,31,29,0.07),transparent_76%)] dark:bg-[radial-gradient(closest-side,rgba(242,238,228,0.08),transparent_76%)]" />

          <div className="relative z-[1] mr-[-22px] animate-bob [animation-delay:0s]">
            <div className="relative grid aspect-square w-[clamp(84px,13vw,150px)] origin-center place-items-center rounded-[28px] border-2 border-ink bg-paper shadow-[7px_7px_0_0_#201A14] [transform:rotateY(22deg)_rotate(-7deg)_scale(0.92)] transition-transform duration-[440ms] hover:[transform:rotateY(0deg)_rotate(0deg)_scale(1)] hover:shadow-[11px_11px_0_0_#b68235] dark:border-[#f2eee4]/80 dark:bg-[#201c15] dark:shadow-[7px_7px_0_0_#0b0906] dark:hover:shadow-[11px_11px_0_0_#d8a960]">
              <div className="absolute inset-[6px] rounded-[22px] border border-ink/[0.14] dark:border-[#f2eee4]/16" />
              <GeminiMark size={44} />
            </div>
          </div>

          <div className="relative z-[3] animate-bob [animation-delay:0.4s] [animation-duration:7.6s]">
            <div className="relative grid aspect-square w-[clamp(120px,20vw,220px)] place-items-center rounded-[40px] border-2 border-ink bg-paper shadow-[10px_10px_0_0_#201A14] transition-transform duration-[440ms] hover:-translate-y-2.5 hover:shadow-[15px_15px_0_0_#b68235] dark:border-[#f2eee4]/80 dark:bg-[#201c15] dark:shadow-[10px_10px_0_0_#0b0906] dark:hover:shadow-[15px_15px_0_0_#d8a960]">
              <div className="absolute inset-[7px] rounded-[33px] border border-ink/[0.14] dark:border-[#f2eee4]/16" />
              <ClaudeMark size={78} />
            </div>
          </div>

          <div className="relative z-[1] ml-[-22px] animate-bob [animation-delay:1.1s] [animation-duration:10.5s]">
            <div className="relative grid aspect-square w-[clamp(84px,13vw,150px)] place-items-center rounded-[28px] border-2 border-ink bg-paper shadow-[7px_7px_0_0_#201A14] [transform:rotateY(-22deg)_rotate(7deg)_scale(0.92)] transition-transform duration-[440ms] hover:[transform:rotateY(0deg)_rotate(0deg)_scale(1)] hover:shadow-[11px_11px_0_0_#b68235] dark:border-[#f2eee4]/80 dark:bg-[#201c15] dark:shadow-[7px_7px_0_0_#0b0906] dark:hover:shadow-[11px_11px_0_0_#d8a960]">
              <div className="absolute inset-[6px] rounded-[22px] border border-ink/[0.14] dark:border-[#f2eee4]/16" />
              <ChatGPTMark size={40} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={1} className="mt-8 flex items-center justify-center gap-3 font-outfit text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 dark:text-[#f2eee4]/40">
          <span>Gemini</span>
          <span className="h-[2px] w-3.5 bg-ink/15 dark:bg-[#f2eee4]/15" />
          <span className="text-ink/60 dark:text-[#f2eee4]/60">Claude</span>
          <span className="h-[2px] w-3.5 bg-ink/15 dark:bg-[#f2eee4]/15" />
          <span>ChatGPT</span>
        </Reveal>

        <Reveal delay={2}>
          <h1 className="mt-6 font-outfit text-[clamp(46px,9vw,124px)] font-black uppercase leading-[0.84] tracking-[-0.035em] text-ink dark:text-[#f2eee4]">
            Hablá bien
            <br />
            con la IA
          </h1>
        </Reveal>

        <Reveal delay={3}>
          <p className="mx-auto mt-[18px] max-w-[380px] text-[17px] leading-relaxed text-ink/60 dark:text-[#f2eee4]/65">
            Un curso corto y práctico para escribir mejores prompts.
          </p>
        </Reveal>

        <Reveal delay={4} className="mt-[26px] flex items-center justify-center gap-3">
          <span className="h-[2px] w-[22px] bg-[#b68235] dark:bg-[#d8a960]" />
          <span className="font-outfit text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#7d5721] dark:text-[#f0cd93]">
            Solo 20 minutos · gratis
          </span>
          <span className="h-[2px] w-[22px] bg-[#b68235] dark:bg-[#d8a960]" />
        </Reveal>

        <Reveal delay={5} className="mt-9">
          <Link
            href="/register"
            className="group relative inline-flex flex-col items-center gap-1.5 rounded-lg border-2 border-ink bg-paper px-10 py-[18px] shadow-[8px_8px_0_0_#201A14] transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[13px_13px_0_0_#b68235] active:translate-x-0 active:translate-y-0 active:shadow-none dark:border-[#f2eee4]/80 dark:bg-[#201c15] dark:shadow-[8px_8px_0_0_#0b0906] dark:hover:shadow-[13px_13px_0_0_#d8a960]"
          >
            <span className="font-outfit text-[clamp(20px,2.6vw,27px)] font-black uppercase leading-none tracking-[-0.02em] text-ink dark:text-[#f2eee4]">
              Comenzar el curso
            </span>
            <span className="font-outfit text-[9.5px] font-bold uppercase tracking-[0.18em] text-ink/40 dark:text-[#f2eee4]/40">
              Primer ejercicio · sin registro
            </span>
          </Link>
        </Reveal>
      </div>
    </header>
  );
}
