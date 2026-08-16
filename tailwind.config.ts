import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0B0F",
        "bg-soft": "#0d0f15",
        surface: "#13151C",
        "surface-2": "#181b24",
        blue: { DEFAULT: "#2563EB", light: "#60A5FA" },
        pink: "#FBCFE8",
        text: "#EDF1FA",
        muted: "#8a90a0",
        dim: "#565c6b",
        line: "rgba(255,255,255,0.07)",
        "line-strong": "rgba(255,255,255,0.13)",

        // Paleta "kiddo" — solo para la landing (fase 1: cálida/tierra,
        // el azul queda como acento puntual, no como fondo de sección)
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
      },
      keyframes: {
        breathe: {
          "0%,100%": { opacity: "0.55", transform: "scale(0.95)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      animation: { breathe: "breathe 6s ease-in-out infinite" },
    },
  },
  plugins: [],
};

export default config;
