import type { ReactNode } from "react";

export function ModelChip({
  icon,
  label,
  rotate = "0deg",
}: {
  icon: ReactNode;
  label: string;
  rotate?: string;
}) {
  return (
    <div
      className="flex items-center gap-2.5 rounded-full border-2 border-ink/15 bg-paper px-4 py-2.5 shadow-[0_2px_0_0_rgba(32,26,20,0.08)]"
      style={{ transform: `rotate(${rotate})` }}
    >
      {icon}
      <span className="font-display text-sm font-bold uppercase tracking-wide text-ink">{label}</span>
    </div>
  );
}
