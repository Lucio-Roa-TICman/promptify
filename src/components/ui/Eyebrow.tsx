import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 bg-paper px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.14em] text-ink/70">
      {children}
    </span>
  );
}
