export function ProgressRing({
  value,
  max = 100,
  size = 120,
  label,
  sublabel,
}: {
  value: number;
  max?: number;
  size?: number;
  label?: string;
  sublabel?: string;
}) {
  const radius = (size - 14) / 2;
  const circ = 2 * Math.PI * radius;
  const pct = Math.min(value / max, 1);
  const offset = circ * (1 - pct);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#FBCFE8" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="7" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#ring)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-700 ease-out"
          style={{ filter: "drop-shadow(0 0 8px rgba(96,165,250,0.5))" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {label && <span className="font-serif text-2xl font-medium">{label}</span>}
        {sublabel && (
          <span className="mt-0.5 text-[10px] uppercase tracking-widest text-dim">{sublabel}</span>
        )}
      </div>
    </div>
  );
}
