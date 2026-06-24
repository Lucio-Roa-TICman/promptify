import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Promptify — Aprendé a ver el brillo de la IA",
  description:
    "Curso interactivo de ingeniería de prompts. Aprendé a comunicarte con la IA en 20 minutos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,400..600&family=Manrope:wght@300..700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-serif: 'Fraunces', Georgia, serif;
            --font-sans: 'Manrope', system-ui, sans-serif;
            --font-mono: 'JetBrains Mono', monospace;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
