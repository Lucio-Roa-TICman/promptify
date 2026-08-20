import { Reveal } from "@/components/Reveal";

const STEPS = [
  { n: "01", label: "Aprendé", desc: "una pieza por vez" },
  { n: "02", label: "Probá", desc: "escribís el prompt" },
  { n: "03", label: "Mejorá", desc: "corregís al instante" },
];

export function LearnByDoing() {
  return (
    <section className="border-t-2 border-ink bg-[#eae7df] dark:border-[#f2eee4]/80 dark:bg-[#1e1a13]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-[clamp(38px,5vw,78px)] px-[clamp(18px,4vw,46px)] py-[clamp(66px,8vw,108px)]">
        <Reveal>
          <div className="mb-9 flex items-baseline gap-5">
            <span className="font-outfit text-[10px] font-bold uppercase tracking-[0.2em] text-[#7d5721] tabular-nums dark:text-[#f0cd93]">
              02
            </span>
            <h2 className="font-outfit text-[clamp(32px,4.8vw,62px)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-ink dark:text-[#f2eee4]">
              Se aprende
              <br />
              haciendo
            </h2>
          </div>
          <div className="flex flex-col">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                className={`flex items-baseline gap-[22px] border-t border-ink/[0.14] py-[18px] dark:border-[#f2eee4]/[0.16] ${
                  i === STEPS.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="w-14 flex-none font-outfit text-[38px] font-black leading-[0.9] text-ink/[0.07] tabular-nums dark:text-[#f2eee4]/[0.08]">
                  {step.n}
                </span>
                <span className="font-outfit text-[25px] font-black uppercase tracking-[-0.02em] text-ink dark:text-[#f2eee4]">
                  {step.label}
                </span>
                <span className="text-[14.5px] text-ink/60 dark:text-[#f2eee4]/65">{step.desc}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="relative overflow-hidden rounded-[10px] border-2 border-ink bg-paper shadow-[11px_11px_0_0_#201A14] dark:border-[#f2eee4]/80 dark:bg-[#201c15] dark:shadow-[11px_11px_0_0_#0b0906]">
            <div className="flex items-center justify-between gap-4 border-b border-ink/[0.14] px-[22px] py-[13px] dark:border-[#f2eee4]/[0.16]">
              <span className="font-outfit text-[9.5px] font-bold uppercase tracking-[0.18em] text-ink/40 dark:text-[#f2eee4]/40">
                Ejercicio 01
              </span>
              <span className="flex gap-1.5">
                <span className="block h-[7px] w-[7px] rounded-full bg-[#b68235] dark:bg-[#d8a960]" />
                <span className="block h-[7px] w-[7px] rounded-full bg-[#b68235] dark:bg-[#d8a960]" />
                <span className="block h-[7px] w-[7px] rounded-full border border-ink/[0.14] dark:border-[#f2eee4]/[0.16]" />
                <span className="block h-[7px] w-[7px] rounded-full border border-ink/[0.14] dark:border-[#f2eee4]/[0.16]" />
              </span>
            </div>
            <div className="px-6 pb-6 pt-[26px]">
              <div className="font-mono text-[13.5px] leading-[1.75] text-ink dark:text-[#f2eee4]">
                Sos editor de una revista de viajes. Escribí 3 títulos para una nota sobre Salta
                <span className="animate-caret text-[#b68235] dark:text-[#d8a960]">▍</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="flex-none whitespace-nowrap rounded border-2 border-[#b68235] px-2.5 py-1.5 font-outfit text-[9.5px] font-bold uppercase tracking-[0.12em] text-[#7d5721] dark:border-[#d8a960] dark:text-[#f0cd93]">
                  Contexto ✓
                </span>
                <span className="flex-none whitespace-nowrap rounded border-2 border-[#b68235] px-2.5 py-1.5 font-outfit text-[9.5px] font-bold uppercase tracking-[0.12em] text-[#7d5721] dark:border-[#d8a960] dark:text-[#f0cd93]">
                  Objetivo ✓
                </span>
                <span className="flex-none whitespace-nowrap rounded border border-ink/[0.14] px-2.5 py-1.5 font-outfit text-[9.5px] font-bold uppercase tracking-[0.12em] text-ink/40 dark:border-[#f2eee4]/[0.16] dark:text-[#f2eee4]/40">
                  Detalle
                </span>
                <span className="flex-none whitespace-nowrap rounded border border-ink/[0.14] px-2.5 py-1.5 font-outfit text-[9.5px] font-bold uppercase tracking-[0.12em] text-ink/40 dark:border-[#f2eee4]/[0.16] dark:text-[#f2eee4]/40">
                  Formato
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
