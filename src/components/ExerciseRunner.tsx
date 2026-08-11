"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { Exercise } from "@/data/course";

/* ---------- Ordenar bloques ---------- */
// Animación tipo FLIP: antes de reordenar, guardamos la posición actual de
// cada bloque; después del re-render, si un bloque cambió de lugar, lo
// "arrancamos" desde su posición vieja y lo dejamos deslizar con una
// transición CSS hasta su posición nueva. Así el reordenamiento se ve como
// un movimiento fluido en vez de un salto brusco.
function OrderExercise({ ex, onSolved }: { ex: Extract<Exercise, { type: "order" }>; onSolved: () => void }) {
  const [order, setOrder] = useState<string[]>([...ex.blocks].sort(() => Math.random() - 0.5).map((b) => b.id));
  const [result, setResult] = useState<"idle" | "ok" | "fail">("idle");
  const [justMoved, setJustMoved] = useState<Set<string>>(new Set());
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const prevRects = useRef<Record<string, DOMRect>>({});

  function captureRects() {
    const rects: Record<string, DOMRect> = {};
    for (const id of order) {
      const el = itemRefs.current[id];
      if (el) rects[id] = el.getBoundingClientRect();
    }
    prevRects.current = rects;
  }

  function move(i: number, dir: -1 | 1) {
    const j = i + dir;
    if (j < 0 || j >= order.length) return;
    captureRects();
    const next = [...order];
    [next[i], next[j]] = [next[j], next[i]];
    setOrder(next);
    setResult("idle");
    const moved = new Set([next[i], next[j]]);
    setJustMoved(moved);
    window.setTimeout(() => setJustMoved(new Set()), 320);
  }

  useLayoutEffect(() => {
    for (const id of order) {
      const el = itemRefs.current[id];
      const prev = prevRects.current[id];
      if (!el || !prev) continue;
      const next = el.getBoundingClientRect();
      const deltaY = prev.top - next.top;
      if (Math.abs(deltaY) > 0.5) {
        el.style.transition = "none";
        el.style.transform = `translateY(${deltaY}px)`;
        // Forzamos reflow para que el navegador registre el estado inicial
        // antes de animar hacia la posición final.
        void el.offsetHeight;
        requestAnimationFrame(() => {
          el.style.transition = "transform 300ms cubic-bezier(0.22, 1, 0.36, 1)";
          el.style.transform = "";
        });
      }
    }
    prevRects.current = {};
  }, [order]);

  function check() {
    const ok = order.every((id, i) => id === ex.correctOrder[i]);
    setResult(ok ? "ok" : "fail");
    if (ok) onSolved();
  }
  const text = (id: string) => ex.blocks.find((b) => b.id === id)?.text ?? "";

  return (
    <div className="space-y-3">
      {order.map((id, i) => (
        <div
          key={id}
          ref={(el) => { itemRefs.current[id] = el; }}
          className={`flex items-center gap-3 rounded-lg border p-3 transition-colors duration-300 will-change-transform ${
            justMoved.has(id) ? "border-blue-light/50 bg-blue-light/[0.08]" : "border-line bg-bg-soft"
          }`}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-light/15 text-xs font-semibold text-blue-light transition-transform duration-300">
            {i + 1}
          </span>
          <p className="flex-1 text-sm">{text(id)}</p>
          <div className="flex flex-col gap-1">
            <button
              onClick={() => move(i, -1)}
              className="rounded border border-line px-2 text-muted transition-all duration-150 hover:border-blue-light/40 hover:text-text active:scale-90"
            >
              ↑
            </button>
            <button
              onClick={() => move(i, 1)}
              className="rounded border border-line px-2 text-muted transition-all duration-150 hover:border-blue-light/40 hover:text-text active:scale-90"
            >
              ↓
            </button>
          </div>
        </div>
      ))}
      <Footer result={result} success={ex.successMessage} onCheck={check} />
    </div>
  );
}

/* ---------- Comparar ---------- */
function CompareExercise({ ex, onSolved }: { ex: Extract<Exercise, { type: "compare" }>; onSolved: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<"idle" | "ok" | "fail">("idle");

  function check() {
    if (!selected) return;
    const ok = !!ex.options.find((o) => o.id === selected)?.correct;
    setResult(ok ? "ok" : "fail");
    if (ok) onSolved();
  }

  return (
    <div className="space-y-3">
      {ex.options.map((o) => {
        const isSel = selected === o.id;
        const reveal = result !== "idle" && isSel;
        return (
          <button
            key={o.id}
            onClick={() => { setSelected(o.id); setResult("idle"); }}
            className={`block w-full rounded-lg border p-4 text-left text-sm transition-colors ${
              isSel ? "border-blue-light/60 bg-blue-light/10" : "border-line bg-bg-soft hover:border-line-strong"
            }`}
          >
            <p>{o.text}</p>
            {reveal && o.feedback && (
              <p className={`mt-2 text-xs ${o.correct ? "text-blue-light" : "text-amber-300"}`}>{o.feedback}</p>
            )}
          </button>
        );
      })}
      <Footer result={result} success={ex.successMessage} onCheck={check} />
    </div>
  );
}

/* ---------- Texto (mejorar / abierto) ---------- */
function TextExercise({ ex, onSolved }: { ex: Extract<Exercise, { type: "improve" | "open" }>; onSolved: () => void }) {
  const [text, setText] = useState("");
  const [result, setResult] = useState<"idle" | "ok" | "fail">("idle");

  function check() {
    // EVALUACIÓN MOCK (heurística simple por longitud y señales).
    // TODO BACK / APIs: reemplazar por una llamada a OpenAI que
    // devuelva feedback formativo según ex.criteria.
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const lower = text.toLowerCase();
    const signals = [
      /\bactu[aá]|\bsos\b|\bcomo (un|una)\b|\brol\b/.test(lower),
      /contexto|principiante|experiencia|soy |para /.test(lower),
      /\d|cinco|tres|lista|tabla|formato|p[aá]rrafo|viñeta/.test(lower),
      words >= 25,
    ];
    const ok = signals.filter(Boolean).length >= 3 && words >= 20;
    setResult(ok ? "ok" : "fail");
    if (ok) onSolved();
  }

  return (
    <div className="space-y-4">
      {ex.type === "improve" && (
        <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.06] p-4">
          <p className="text-[11px] uppercase tracking-wider text-amber-300/80">Prompt original (a mejorar)</p>
          <p className="mt-1 font-mono text-sm">{ex.badPrompt}</p>
        </div>
      )}
      <textarea
        value={text}
        onChange={(e) => { setText(e.target.value); setResult("idle"); }}
        placeholder={ex.type === "improve" ? "Reescribí el prompt acá…" : ex.placeholder}
        rows={5}
        className="input-field resize-none font-mono leading-relaxed"
      />
      <div className="rounded-lg border border-line bg-bg-soft p-4">
        <p className="text-[11px] uppercase tracking-wider text-dim">Tu prompt debería incluir</p>
        <ul className="mt-2 space-y-1">
          {ex.criteria.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-0.5 text-blue-light">·</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
      <Footer result={result} success={ex.successMessage} onCheck={check} />
    </div>
  );
}

/* ---------- Footer común ---------- */
function Footer({ result, success, onCheck }: { result: "idle" | "ok" | "fail"; success: string; onCheck: () => void }) {
  return (
    <div className="space-y-3 pt-1">
      {result === "ok" && (
        <div className="rounded-lg border border-blue-light/30 bg-blue-light/[0.07] p-4">
          <p className="text-sm text-blue-light">{success}</p>
        </div>
      )}
      {result === "fail" && (
        <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-300">
          Casi. Revisá los criterios e intentá de nuevo.
        </p>
      )}
      <button onClick={onCheck} className="btn btn-primary !py-2.5 text-xs">
        Comprobar respuesta
      </button>
    </div>
  );
}

export function ExerciseRunner({ exercise, onSolved }: { exercise: Exercise; onSolved: () => void }) {
  switch (exercise.type) {
    case "order": return <OrderExercise ex={exercise} onSolved={onSolved} />;
    case "compare": return <CompareExercise ex={exercise} onSolved={onSolved} />;
    case "improve":
    case "open": return <TextExercise ex={exercise} onSolved={onSolved} />;
  }
}
