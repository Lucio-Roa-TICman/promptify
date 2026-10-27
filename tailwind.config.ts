import type { Config } from "tailwindcss";

// Helper: color que lee una variable CSS "R G B" y admite opacidad.
const themed = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // El tema claro/oscuro se controla con data-theme en <html> (ver
  // ThemeToggle y el script de layout.tsx). Los colores base son variables
  // CSS definidas en globals.css, así que cambian solos en TODAS las
  // pantallas cuando cambia el tema.
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Tokens que cambian con el tema (valores en globals.css).
        // Usan el formato "rgb(var(--x) / <alpha-value>)" para que
        // siga funcionando la opacidad, ej: border-ink/15, bg-sand/60.
        bg: themed("bg"),
        "bg-soft": themed("sand"),
        surface: themed("paper"),
        "surface-2": themed("sand"),
        blue: { DEFAULT: "#045699", light: "#FF7A0D" },
        pink: themed("clay"),
        text: themed("ink"),
        muted: themed("muted"),
        dim: themed("dim"),
        line: "rgb(var(--ink) / 0.12)",
        "line-strong": "rgb(var(--ink) / 0.24)",

        // Paleta "kiddo"
        cream: themed("bg"),
        sand: themed("sand"),
        paper: themed("paper"),
        ink: themed("ink"),
        clay: themed("clay"),
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
