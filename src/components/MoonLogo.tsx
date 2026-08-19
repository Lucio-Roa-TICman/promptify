/**
 * Logo de la media luna de Promptify.
 * El degradé naranja->tierra representa "el brillo" del concepto de marca,
 * en línea con la paleta kiddo del resto de la app (fase 2).
 */
export function MoonLogo({
  size = 30,
  glow = false,
  id = "moon",
}: {
  size?: number;
  glow?: boolean;
  id?: string;
}) {
  return (
    <span
      className="relative inline-block"
      style={{ width: size, height: size }}
    >
      {glow && (
        <span
          className="absolute animate-breathe rounded-full"
          style={{
            inset: "-40%",
            background:
              "radial-gradient(circle, rgba(255,122,13,.45), transparent 65%)",
            filter: "blur(30px)",
            zIndex: -1,
          }}
        />
      )}
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#FF7A0D" />
            <stop offset="55%" stopColor="#E36700" />
            <stop offset="100%" stopColor="#B5622E" />
          </linearGradient>
          <mask id={`mask-${id}`}>
            <rect width="100" height="100" fill="white" />
            <circle cx="64" cy="40" r="35" fill="black" />
          </mask>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="40"
          fill={`url(#grad-${id})`}
          mask={`url(#mask-${id})`}
        />
      </svg>
    </span>
  );
}

export function Wordmark({ size = 21 }: { size?: number }) {
  return (
    <span className="flex items-center gap-[11px]">
      <MoonLogo size={size + 9} />
      <span
        className="font-serif font-semibold tracking-[-0.01em]"
        style={{ fontSize: size }}
      >
        Promptify
      </span>
    </span>
  );
}
