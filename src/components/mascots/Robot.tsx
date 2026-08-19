/**
 * Mascota placeholder — line-art portado del proyecto de Claude Design
 * ("Personajes IA para landing" / Character.dc.html, variante "robot"),
 * recoloreado a la paleta kiddo. Reemplazar por el personaje dibujado a
 * mano (estilo pizza/hamburguesa) cuando esté listo.
 */
export function Robot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 200" className={className} style={{ width: "100%", height: "auto" }}>
      <g style={{ fill: "none", stroke: "#FF7A0D", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" }}>
        <path d="M182 34q0-14 12-14t12 12-11 13v6" />
        <circle cx="195" cy="62" r="1.8" style={{ fill: "#FF7A0D" }} />
        <path d="M36 44q0-11 9-11t9 9-8 10v4" />
        <circle cx="46" cy="66" r="1.4" style={{ fill: "#FF7A0D" }} />
      </g>
      <g style={{ fill: "none", stroke: "#201A14", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }}>
        <path d="M120 44v-12" />
        <circle cx="120" cy="28" r="6" style={{ fill: "#FFE3C2" }} />
        <path d="M114 22l-6-7M126 22l6-7" />
      </g>
      <g transform="rotate(-4 120 80)">
        <rect x="76" y="44" width="88" height="66" rx="8" style={{ fill: "#fff", stroke: "#201A14", strokeWidth: 1.8 }} />
        <rect x="86" y="56" width="68" height="34" rx="4" style={{ fill: "#FFE3C2", stroke: "#201A14", strokeWidth: 1.2 }} />
        <circle cx="106" cy="73" r="9" style={{ fill: "#fff", stroke: "#201A14", strokeWidth: 1.6 }} />
        <circle cx="106" cy="74" r="3.6" style={{ fill: "#201A14" }} />
        <circle cx="136" cy="73" r="5" style={{ fill: "#fff", stroke: "#201A14", strokeWidth: 1.6 }} />
        <circle cx="136" cy="74" r="2.2" style={{ fill: "#201A14" }} />
        <path d="M104 98q12 8 26-2" style={{ fill: "none", stroke: "#201A14", strokeWidth: 1.6, strokeLinecap: "round" }} />
        <path d="M164 66l6-4v14l-6-3M76 66l-6-4v14l6-3" style={{ fill: "none", stroke: "#201A14", strokeWidth: 1.4, strokeLinejoin: "round" }} />
        <path d="M148 50l6 6M154 50l-6 6" style={{ fill: "none", stroke: "#201A14", strokeWidth: 1 }} />
      </g>
      <g style={{ fill: "none", stroke: "#201A14", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }}>
        <path d="M114 112h14" />
        <rect x="90" y="116" width="60" height="48" rx="6" style={{ fill: "#fff" }} />
        <path d="M100 128h26M100 138h16" style={{ stroke: "#FF7A0D" }} />
        <circle cx="138" cy="150" r="5" />
        <path d="M90 124l-22 6-8 18" />
        <circle cx="58" cy="152" r="6" style={{ fill: "#fff" }} />
        <path d="M150 126l20 14" />
        <circle cx="176" cy="144" r="6" style={{ fill: "#fff" }} />
        <path d="M100 164v14M140 164v14" />
        <path d="M92 178h18M132 178h18" />
      </g>
      <text x="185" y="92" style={{ fontFamily: "var(--font-display)", fontSize: 30, fill: "#FF7A0D" }}>?</text>
      <circle cx="66" cy="188" r="3" style={{ fill: "none", stroke: "#201A14", strokeWidth: 1.2 }} />
      <path d="M74 188h6" style={{ fill: "none", stroke: "#201A14", strokeWidth: 1.2, strokeLinecap: "round" }} />
    </svg>
  );
}
