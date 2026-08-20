export function LandingFooter() {
  return (
    <footer className="border-t-2 border-ink bg-[#eae7df] dark:border-[#f2eee4]/80 dark:bg-[#1e1a13]">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-5 px-[clamp(18px,4vw,46px)] py-[22px]">
        <span className="font-outfit text-[19px] font-black uppercase tracking-[-0.02em] text-ink/60 dark:text-[#f2eee4]/60">
          Promptify
        </span>
        <span className="font-outfit text-[9.5px] font-bold uppercase tracking-[0.18em] text-ink/40 dark:text-[#f2eee4]/40">
          Curso de prompting
        </span>
      </div>
    </footer>
  );
}
