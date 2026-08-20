import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function FinalCTA() {
  return (
    <section id="curso" className="relative overflow-hidden border-t-2 border-ink dark:border-[#f2eee4]/80">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_420px_at_50%_92%,rgba(182,130,53,0.16),transparent_72%)] dark:bg-[radial-gradient(700px_420px_at_50%_92%,rgba(216,169,96,0.14),transparent_72%)]" />
      <div className="relative mx-auto max-w-[900px] px-[clamp(18px,4vw,46px)] py-[clamp(74px,9vw,120px)] pb-[clamp(80px,9vw,118px)] text-center">
        <Reveal>
          <h2 className="mx-auto mb-[22px] max-w-[16ch] text-balance font-outfit text-[clamp(36px,6.2vw,80px)] font-black uppercase leading-[0.86] tracking-[-0.035em] text-ink dark:text-[#f2eee4]">
            Veinte minutos
            <br />
            y escribís distinto
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mx-auto mb-[clamp(34px,4vw,44px)] max-w-[36ch] text-[16.5px] leading-[1.55] text-ink/60 dark:text-[#f2eee4]/65">
            No necesitás saber nada de tecnología.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <Link
            href="/register"
            className="group relative inline-flex flex-col items-center gap-1.5 rounded-lg border-2 border-ink bg-paper px-[clamp(32px,6vw,58px)] py-[18px] shadow-[8px_8px_0_0_#201A14] transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[13px_13px_0_0_#b68235] active:translate-x-0 active:translate-y-0 active:shadow-none dark:border-[#f2eee4]/80 dark:bg-[#201c15] dark:shadow-[8px_8px_0_0_#0b0906] dark:hover:shadow-[13px_13px_0_0_#d8a960]"
          >
            <span className="font-outfit text-[clamp(20px,2.6vw,27px)] font-black uppercase leading-none tracking-[-0.02em] text-ink dark:text-[#f2eee4]">
              Comenzar el curso
            </span>
            <span className="font-outfit text-[9.5px] font-bold uppercase tracking-[0.18em] text-ink/40 dark:text-[#f2eee4]/40">
              Ejercicio 01 de 07
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
