// components/promptify-ui.jsx
// Componentes React del sistema de diseño Promptify.
// Requiere importar css/tokens.css y css/components.css en tu layout global.
// Uso con Next.js (App Router o Pages). Todos aceptan className y children.

export function Badge({ variant = "", children, className = "", ...props }) {
  return (
    <span className={`badge ${variant ? `badge--${variant}` : ""} ${className}`} {...props}>
      {children}
    </span>
  );
}

export function Button({ variant = "primary", size, block, children, className = "", ...props }) {
  return (
    <button
      className={`btn btn--${variant} ${size ? `btn--${size}` : ""} ${block ? "btn--block" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Card({ accentTop, accent, children, className = "", ...props }) {
  return (
    <div
      className={`card ${accentTop ? "card--accent-top" : ""} ${className}`}
      data-accent={accent}
      {...props}
    >
      {children}
    </div>
  );
}

export function Panel({ accentLeft, children, className = "", ...props }) {
  return (
    <div className={`panel ${accentLeft ? "panel--accent-left" : ""} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Chip({ active, children, onClick, className = "" }) {
  return (
    <span className={`chip ${active ? "is-active" : ""} ${className}`} onClick={onClick}>
      {children}
    </span>
  );
}

// Opción de ejercicio (radio). `selected` controla el estado visual.
export function Option({ selected, title, desc, check = true, onClick }) {
  return (
    <label className={`option ${selected ? "is-selected" : ""}`} onClick={onClick}>
      <span className="option__radio" />
      <span>
        <span className="option__title">{title}</span>
        {desc && <span className="option__desc">{desc}</span>}
      </span>
      {selected && check && <span className="option__check">✓</span>}
    </label>
  );
}

// Campo de formulario con label y hint opcionales.
export function Field({ label, labelColor = "blue", hint, children }) {
  return (
    <div className="field">
      <div className="row between">
        <span className={`field__label field__label--${labelColor}`}>{label}</span>
        {hint && <span className="field__hint">{hint}</span>}
      </div>
      {children}
    </div>
  );
}

// Bloque de feedback de la IA.
export function AIFeedback({ label, sublabel, text, avatar = "🤖" }) {
  return (
    <div className="ai-feedback">
      <span className="ai-feedback__avatar">{avatar}</span>
      <div>
        <div className="ai-feedback__label">{label}</div>
        {sublabel && <div className="sidebar__sub">{sublabel}</div>}
        {text && <div className="ai-feedback__text">{text}</div>}
      </div>
    </div>
  );
}

// Anillo de progreso (conic-gradient, sin SVG).
export function Ring({ value = 92, color = "var(--pink)", size = 220, label, unit = "/10" }) {
  return (
    <div
      className="ring"
      style={{ "--val": value, "--ring-color": color, width: size, height: size }}
    >
      <div style={{ textAlign: "center" }}>
        <span className="ring__value">{label ?? value}</span>
        {unit && <span className="ring__unit">{unit}</span>}
      </div>
    </div>
  );
}

// Barra de progreso lineal.
export function Progress({ value = 35 }) {
  return (
    <div className="progress">
      <div className="progress__bar" style={{ width: `${value}%` }} />
    </div>
  );
}

// Tarjeta de estadística.
export function Stat({ value, label, color = "blue" }) {
  return (
    <div className="stat">
      <div className={`stat__value stat__value--${color}`}>{value}</div>
      <div className="stat__label">{label}</div>
    </div>
  );
}
