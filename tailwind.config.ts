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
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
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
