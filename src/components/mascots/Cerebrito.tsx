/**
 * Mascota placeholder — line-art portado del proyecto de Claude Design
 * ("Personajes IA para landing" / Character.dc.html, variante "cerebrito"),
 * recoloreado a la paleta kiddo. Reemplazar por el personaje dibujado a
 * mano (estilo pizza/hamburguesa) cuando esté listo.
 */
export function Cerebrito({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 200" className={className} style={{ width: "100%", height: "auto" }}>
      <g style={{ fill: "none", stroke: "#FF7A0D", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }}>
        <rect x="10" y="14" width="38" height="28" rx="2" />
        <path d="M10 22h38" />
        <path d="M25 38q0-6 5-8t2-6-6-1" />
        <circle cx="28.5" cy="34" r="0.9" style={{ fill: "#FF7A0D" }} />
        <rect x="192" y="20" width="40" height="30" rx="2" />
        <path d="M192 28h40M199 36h20M199 43h13" />
        <rect x="6" y="88" width="32" height="26" rx="2" />
        <path d="M6 95h32" />
        <path d="M14 108l5-6 4 4 3-3 4 5" />
        <rect x="198" y="150" width="34" height="26" rx="2" />
        <path d="M198 157h34M205 165h14" />
        <path d="M62 20l-3-9M170 22l5-9M212 78l9-4M22 62l-9-4" />
        <path d="M204 96q6-6 12 0t-6 10v3M210 116v1.6" />
      </g>
      <ellipse cx="118" cy="76" rx="60" ry="52" style={{ fill: "#fff", stroke: "#201A14", strokeWidth: 1.8 }} />
      <g style={{ fill: "none", stroke: "#201A14", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" }}>
        <circle cx="57" cy="82" r="7" />
        <circle cx="179" cy="82" r="7" />
        <path d="M92 24q6-13 15-4M110 20q9-12 17-1M129 24q9-9 14 1" />
        <path d="M84 50q13-8 25-2M126 48q13-6 25 2" />
      </g>
      <g style={{ fill: "none", stroke: "#201A14", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
        <circle cx="96" cy="78" r="18" style={{ fill: "#fff" }} />
        <circle cx="140" cy="78" r="18" style={{ fill: "#fff" }} />
        <path d="M114 78h8M78 73l-16-5M158 73l17-5" />
      </g>
      <circle cx="99" cy="80" r="4" style={{ fill: "#201A14" }} />
      <circle cx="137" cy="80" r="4" style={{ fill: "#201A14" }} />
      <path d="M108 106q10 12 20 0q-10 5-20 0z" style={{ fill: "#FFE3C2", stroke: "#201A14", strokeWidth: 1.4, strokeLinejoin: "round" }} />
      <g style={{ fill: "none", stroke: "#201A14", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }}>
        <path d="M108 126h20" />
        <path d="M100 130h36v32h-36z" style={{ fill: "#fff" }} />
        <path d="M104 138h16M104 145h10" />
        <path d="M100 137l-22-8" />
        <circle cx="72" cy="124" r="7" style={{ fill: "#fff" }} />
        <path d="M72 117v-13" />
        <path d="M136 140l16 4" />
        <circle cx="156" cy="146" r="6" style={{ fill: "#fff" }} />
        <path d="M110 162v16M126 162v16" />
        <path d="M104 178h12M120 178h12" />
      </g>
      <g style={{ fill: "none", stroke: "#201A14", strokeWidth: 1.4, strokeLinejoin: "round" }}>
        <rect x="150" y="112" width="30" height="40" rx="3" style={{ fill: "#fff" }} />
        <path d="M155 122h20M155 130h20M155 138h12" style={{ stroke: "#FF7A0D" }} />
      </g>
    </svg>
  );
}
