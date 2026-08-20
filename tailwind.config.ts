import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // Etapa 1 del rediseño Kiddo x Promptify: la landing soporta un toggle
  // claro/oscuro propio (data-theme en <html>, ver LandingNav). El resto
  // del sitio no usa variantes dark: todavía, así que este selector queda
  // inerte fuera de la landing.
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Fase 2: estos tokens ya no son un tema oscuro aparte — quedan
        // repintados a los mismos valores cálidos "kiddo" de abajo, para
        // que /login, /register, /dashboard, /curso y /certificado hereden
        // la paleta de la landing sin tocar cada className uno por uno.
        bg: "#F2EFE4",
        "bg-soft": "#EAE0CC",
        surface: "#FFFFFF",
        "surface-2": "#EAE0CC",
        blue: { DEFAULT: "#045699", light: "#FF7A0D" },
        pink: "#B5622E",
        text: "#201A14",
        muted: "#6B6255",
        dim: "#9C9483",
        line: "rgba(32,26,20,0.12)",
        "line-strong": "rgba(32,26,20,0.24)",

        // Paleta "kiddo" — nace en la landing, ahora es la paleta de toda
        // la app (cálida/tierra, el azul queda como acento puntual, no
        // como fondo de sección)
        cream: "#F2EFE4",
        sand: "#EAE0CC",
        paper: "#FFFFFF",
        ink: "#201A14",
        clay: "#B5622E",
        kiddo: {
          orange: "#FF7A0D",
          "orange-dark": "#E36700",
          blue: "#045699",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        // Fuente del mockup fiel de referencia — por ahora solo la usa
        // el Hero (ver comentario en layout.tsx).
        outfit: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      keyframes: {
        breathe: {
          "0%,100%": { opacity: "0.55", transform: "scale(0.95)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        bob: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-13px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        caret: {
          "0%,49%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
      },
      animation: {
        breathe: "breathe 6s ease-in-out infinite",
        bob: "bob 9.5s ease-in-out infinite",
        marquee: "marquee 34s linear infinite",
        caret: "caret 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
