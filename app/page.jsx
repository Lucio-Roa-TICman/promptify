import { Badge, Button, Card } from "@/components/promptify-ui";

export default function Home() {
  return (
    <div className="main">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand"><span className="brand__mark" /> Promptify</div>
        <div className="navbar__links">
          <a className="navbar__link is-active">Inicio</a>
          <a className="navbar__link">Ejercicios</a>
          <a className="navbar__link">Ayuda</a>
        </div>
        <span className="navbar__spacer" />
        <Button variant="accent" size="sm">Login</Button>
      </nav>

      <div className="container stack" style={{ gap: "var(--sp-20)", position: "relative" }}>
        <span className="glow" style={{ top: "-200px", left: "50%", transform: "translateX(-50%)" }} />

        {/* HERO */}
        <section className="stack" style={{ alignItems: "center", textAlign: "center", paddingTop: "var(--sp-12)", position: "relative" }}>
          <Badge variant="blue">⚡ Ingeniería de prompts en español</Badge>
          <h1 style={{ fontSize: "var(--fs-4xl)", fontWeight: 700, lineHeight: 1.1 }}>
            Aprende a <span style={{ color: "var(--pink)" }}>promptear</span>
          </h1>
          <p className="text-muted" style={{ maxWidth: 620 }}>
            Domina la comunicación con inteligencias artificiales a través de interfaces de alta
            precisión. Lógica clara, cero ruido, resultados absolutos.
          </p>
          <div className="row" style={{ marginTop: "var(--sp-4)" }}>
            <Button variant="primary">INICIAR SECUENCIA →</Button>
            <Button variant="ghost">VER DOCUMENTACIÓN</Button>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section className="stack">
          <h2 className="title-section">Cómo funciona</h2>
          <p className="text-muted">Un proceso lineal diseñado para estructurar tu pensamiento arquitectónico.</p>
          <div className="grid-3" style={{ marginTop: "var(--sp-4)" }}>
            {[
              ["01", "Contexto Base", "Define el entorno y rol del modelo. Establece los parámetros iniciales sin ambigüedades.", undefined],
              ["02", "Instrucción Directa", "Articula el comando central con verbos de acción. Minimiza la fricción sintáctica.", "pink"],
              ["03", "Formato Salida", "Declara la estructura exacta esperada (JSON, Markdown, Tablas). Controla la topología.", undefined],
            ].map(([n, t, d, accent]) => (
              <Card key={n} accentTop accent={accent} className="stack">
                <span style={{ fontSize: "var(--fs-3xl)", fontWeight: 700, color: accent === "pink" ? "var(--pink)" : "var(--blue)" }}>{n}</span>
                <strong style={{ fontSize: "var(--fs-lg)" }}>{t}</strong>
                <span className="text-muted" style={{ fontSize: "var(--fs-sm)" }}>{d}</span>
              </Card>
            ))}
          </div>
        </section>

        {/* RECORRIDO */}
        <section className="stack">
          <h2 className="title-section">Tu recorrido en Promptify</h2>
          <div className="grid-3" style={{ marginTop: "var(--sp-4)" }}>
            {[
              ["📘", "Introducción", "Fundamentos y el Método C.L.A.R.A.", "var(--blue-light)"],
              ["🧪", "Ejercicios", "Laboratorios prácticos con feedback de IA en vivo.", "var(--pink)"],
              ["🏆", "Conclusión", "Resultados, estadísticas y devolución personalizada.", "var(--blue-light)"],
            ].map(([ic, t, d, c]) => (
              <Card key={t} className="stack">
                <span style={{ fontSize: 28 }}>{ic}</span>
                <strong style={{ fontSize: "var(--fs-lg)", color: c }}>{t}</strong>
                <span className="text-muted" style={{ fontSize: "var(--fs-sm)" }}>{d}</span>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
