const WORDS = ["Contexto", "Objetivo", "Detalle", "Estructura", "Prompt chaining", "Imágenes"];

function Row() {
  return (
    <span className="flex items-center gap-6 pr-6" aria-hidden="true">
      {WORDS.map((word) => (
        <span key={word} className="flex items-center gap-6">
          <span>{word}</span>
          <span className="text-[#b68235] dark:text-[#d8a960]">✦</span>
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-[#eae7df] py-3 dark:border-[#f2eee4]/80 dark:bg-[#1e1a13]">
      <div className="flex w-max animate-marquee font-outfit text-[clamp(15px,1.9vw,22px)] font-black uppercase tracking-[0.02em] text-ink/60 whitespace-nowrap dark:text-[#f2eee4]/60">
        <Row />
        <Row />
      </div>
    </div>
  );
}
