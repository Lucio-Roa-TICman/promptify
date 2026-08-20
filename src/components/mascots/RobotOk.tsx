/**
 * Mascota placeholder — line-art de un mockup externo (variante "robot-ok"),
 * recoloreado a la paleta kiddo. Reemplazar por el personaje dibujado a
 * mano (estilo pizza/hamburguesa) cuando esté listo.
 */
export function RobotOk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 200" className={className} style={{ width: "100%", height: "auto" }}>
      <g style={{ fill: "none", stroke: "#FF7A0D", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" }}>
        <path d="M186 44l4-12 4 12 12 4-12 4-4 12-4-12-12-4z" />
        <path d="M44 60l3-9 3 9 9 3-9 3-3 9-3-9-9-3z" />
        <path d="M120 20v-8M100 26l-5-7M140 26l5-7" />
      </g>
      <g style={{ fill: "none", stroke: "#201A14", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }}>
        <path d="M120 44V32" />
        <circle cx="120" cy="26" r="6" style={{ fill: "#FFE3C2" }} />
      </g>
      <rect x="76" y="44" width="88" height="66" rx="8" style={{ fill: "#fff", stroke: "#201A14", strokeWidth: 1.8 }} />
      <rect x="86" y="56" width="68" height="34" rx="4" style={{ fill: "#FFE3C2", stroke: "#201A14", strokeWidth: 1.2 }} />
      <circle cx="106" cy="72" r="8" style={{ fill: "#fff", stroke: "#201A14", strokeWidth: 1.6 }} />
      <circle cx="134" cy="72" r="8" style={{ fill: "#fff", stroke: "#201A14", strokeWidth: 1.6 }} />
      <circle cx="107" cy="73" r="3.4" style={{ fill: "#201A14" }} />
      <circle cx="135" cy="73" r="3.4" style={{ fill: "#201A14" }} />
      <path d="M104 99q16 9 32 0" style={{ fill: "none", stroke: "#201A14", strokeWidth: 1.8, strokeLinecap: "round" }} />
      <path d="M164 64l7-4v16l-7-3M76 64l-7-4v16l7-3" style={{ fill: "none", stroke: "#201A14", strokeWidth: 1.4, strokeLinejoin: "round" }} />
      <g style={{ fill: "none", stroke: "#201A14", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }}>
        <path d="M112 110h16" />
        <rect x="88" y="114" width="64" height="50" rx="6" style={{ fill: "#fff" }} />
        <path d="M98 128h30M98 138h22" style={{ stroke: "#FF7A0D" }} />
        <circle cx="120" cy="152" r="5" />
        <path d="M88 122l-20 4-6 12" />
        <circle cx="58" cy="142" r="6" style={{ fill: "#fff" }} />
        <path d="M152 122l20-4 6-12" />
        <circle cx="182" cy="98" r="6" style={{ fill: "#fff" }} />
        <path d="M182 92v-8" />
        <path d="M102 164v14M138 164v14" />
        <path d="M94 178h18M130 178h18" />
      </g>
    </svg>
  );
}
