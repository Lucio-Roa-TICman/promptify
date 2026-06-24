"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { MoonLogo } from "./MoonLogo";

export function Certificate({ defaultName }: { defaultName: string }) {
  const router = useRouter();
  const [name, setName] = useState(defaultName);
  const [downloading, setDownloading] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  const dateLabel = new Date().toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  async function downloadPDF() {
    setDownloading(true);
    try {
      // Carga jsPDF y html2canvas desde CDN (sin dependencias en package.json).
      const [{ jsPDF }, html2canvas] = await Promise.all([
        loadJsPDF(),
        loadHtml2Canvas(),
      ]);
      if (!certRef.current) return;
      const canvas = await html2canvas(certRef.current, { scale: 2, backgroundColor: "#0A0B0F" });
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [canvas.width, canvas.height] });
      pdf.addImage(img, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`certificado-promptify-${name.replace(/\s+/g, "-").toLowerCase()}.pdf`);
    } catch {
      window.print();
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="print:hidden">
        <label className="mb-1.5 block text-xs font-medium text-muted">Nombre en el certificado</label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input value={name} onChange={(e) => setName(e.target.value)} className="input-field sm:max-w-sm" placeholder="Tu nombre" />
          <div className="flex gap-3">
            <button onClick={downloadPDF} disabled={downloading} className="btn btn-primary !py-2.5 text-xs">
              {downloading ? "Generando…" : "Descargar PDF"}
            </button>
            <button onClick={() => window.print()} className="btn btn-ghost !py-2.5 text-xs">Imprimir</button>
          </div>
        </div>
        <p className="mt-2 text-xs text-dim">
          Podés editar el nombre antes de descargar. Por defecto es el que usaste al registrarte.
        </p>
      </div>

      {/* Certificado */}
      <div
        ref={certRef}
        className="relative mx-auto aspect-[1.414/1] w-full max-w-3xl overflow-hidden rounded-[20px] border border-line bg-bg p-10 md:p-14"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,.18), transparent 70%), radial-gradient(ellipse 50% 40% at 90% 100%, rgba(251,207,232,.08), transparent 70%)",
        }}
      >
        <div className="pointer-events-none absolute inset-4 rounded-[14px] border border-line-strong" />
        <div className="pointer-events-none absolute inset-5 rounded-[12px] border border-blue-light/15" />

        <div className="relative flex h-full flex-col items-center justify-between text-center">
          <div className="flex flex-col items-center">
            <MoonLogo size={44} id="cert" />
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-blue-light">
              Certificado de finalización
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm text-muted">Se otorga el presente a</p>
            <h2 className="mt-3 font-serif text-[clamp(32px,5vw,52px)] font-normal leading-tight">
              {name || "Tu Nombre"}
            </h2>
            <div className="mx-auto mt-4 h-px w-40 bg-gradient-to-r from-transparent via-blue-light to-transparent" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              por completar exitosamente el curso{" "}
              <span className="text-text">Promptify — Aprendé a promptear</span>, dominando la
              construcción de prompts efectivos para inteligencia artificial.
            </p>
          </div>

          <div className="flex w-full items-end justify-between">
            <div className="text-left">
              <p className="font-serif text-base">Promptify</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-dim">Curso de Ingeniería de Prompts</p>
            </div>
            <div className="text-right">
              <p className="text-sm">{dateLabel}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-dim">Fecha de emisión</p>
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => router.push("/dashboard")} className="mx-auto block text-sm text-muted hover:text-text print:hidden">
        ← Volver al inicio
      </button>
    </div>
  );
}

/* Cargadores de CDN (evitan sumar dependencias al package.json del front) */
function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = reject;
    document.head.appendChild(s);
  });
}
async function loadJsPDF() {
  await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.2/jspdf.umd.min.js");
  // @ts-expect-error global de la CDN
  return { jsPDF: window.jspdf.jsPDF };
}
async function loadHtml2Canvas() {
  await loadScript("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js");
  // @ts-expect-error global de la CDN
  return window.html2canvas;
}
