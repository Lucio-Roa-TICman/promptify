import { Reveal } from "@/components/Reveal";

const CARDS = [
  {
    title: "Contexto",
    rotate: "-rotate-[1.8deg]",
    translate: "",
    titleSize: "text-[26px]",
    padding: "px-[26px] pt-7 pb-6",
    body: (
      <>
        Sos <span className="border-b-2 border-[#b68235] dark:border-[#d8a960]">editor de una revista de viajes</span> y
        escribís para lectores que nunca fueron a Salta.
      </>
    ),
    caption: "Quién habla y para quién.",
  },
  {
    title: "Objetivo",
    rotate: "",
    translate: "-translate-y-4",
    titleSize: "text-[29px]",
    padding: "px-7 pt-8 pb-7",
    body: (
      <>
        Escribí <span className="border-b-2 border-[#b68235] dark:border-[#d8a960]">3 títulos</span> para la nota de
        tapa, uno por cada ángulo posible.
      </>
    ),
    caption: "Qué tiene que quedar hecho.",
  },
  {
    title: "Detalle",
    rotate: "rotate-[1.8deg]",
    translate: "",
    titleSize: "text-[26px]",
    padding: "px-[26px] pt-7 pb-6",
    body: (
      <>
        Máximo <span className="border-b-2 border-[#b68235] dark:border-[#d8a960]">8 palabras</span> cada uno, tono
        cálido, sin signos de exclamación.
      </>
    ),
    caption: "Lo que la IA no adivina.",
  },
];

export function PromptPieces() {
  return (
    <section className="mx-auto max-w-[1280px] px-[clamp(18px,4vw,46px)] pb-[clamp(52px,7vw,92px)] pt-[clamp(66px,9vw,120px)]">
      <Reveal className="mb-[clamp(38px,5vw,66px)] flex items-baseline gap-5">
        <span className="font-outfit text-[10px] font-bold uppercase tracking-[0.2em] text-[#7d5721] tabular-nums dark:text-[#f0cd93]">
          01
        </span>
        <h2 className="font-outfit text-[clamp(32px,4.8vw,62px)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-ink dark:text-[#f2eee4]">
          Un prompt
          <br />
          tiene piezas
        </h2>
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(272px,1fr))] items-end gap-[clamp(24px,3vw,40px)]">
        {CARDS.map((card, i) => (
          <Reveal key={card.title} delay={(i + 1) as 1 | 2 | 3}>
            <div
              className={`relative ${card.rotate} ${card.translate} ${card.padding} rounded-[10px] border-2 border-ink bg-paper shadow-[8px_8px_0_0_#201A14] transition-transform duration-[400ms] hover:translate-y-[-8px] hover:rotate-0 hover:shadow-[12px_12px_0_0_#b68235] dark:border-[#f2eee4]/80 dark:bg-[#201c15] dark:shadow-[8px_8px_0_0_#0b0906] dark:hover:shadow-[12px_12px_0_0_#d8a960]`}
            >
              <div className="pointer-events-none absolute inset-[6px] rounded-[6px] border border-ink/[0.14] dark:border-[#f2eee4]/[0.16]" />
              <div className={`mb-[18px] font-outfit ${card.titleSize} font-black uppercase tracking-[-0.02em] text-ink dark:text-[#f2eee4]`}>
                {card.title}
              </div>
              <div className="min-h-[84px] font-mono text-[12.5px] leading-[1.75] text-ink dark:text-[#f2eee4]">
                {card.body}
              </div>
              <div className="my-3 h-px bg-ink/[0.14] dark:bg-[#f2eee4]/[0.16]" />
              <div className="text-sm text-ink/60 dark:text-[#f2eee4]/65">{card.caption}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
