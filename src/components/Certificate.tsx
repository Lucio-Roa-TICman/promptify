"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { MoonLogo } from "./MoonLogo";

// Resumen corto de las competencias que otorga el curso.
// Basado en los módulos reales de src/data/course.ts.
const SKILLS = [
  "Construcción de prompts efectivos",
  "Aplicación de técnicas de prompting",
  "Ejercitación práctica e interactiva",
  "Mejora iterativa de resultados",
];

export function Certificate({ defaultName }: { defaultName: string }) {
  const router = useRouter();
  const name = defaultName;
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  const dateLabel = new Date().toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  async function downloadPDF() {
    setDownloading(true);
    setDownloadError(false);
    try {
      // jsPDF y html2canvas ahora son dependencias reales del proyecto
      // (ver package.json), en vez de cargarse desde un <script> de CDN.
      // Antes, si el CDN fallaba (bloqueado por un adblocker, firewall
      // corporativo, o simplemente sin conexión al momento del click),
      // el catch caía silenciosamente en window.print(), que es lo que
      // hacía que "Descargar PDF" en realidad abriera el diálogo de
      // impresión. Con las librerías empaquetadas en el propio build,
      // esa falla deja de depender de un recurso externo.
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);
      if (!certRef.current) throw new Error("No se encontró el certificado en pantalla.");
      const canvas = await html2canvas(certRef.current, {
        scale: 2,
        backgroundColor: "#FFFFFF",
        useCORS: true,
      });
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [canvas.width, canvas.height] });
      pdf.addImage(img, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`certificado-promptify-${name.replace(/\s+/g, "-").toLowerCase()}.pdf`);
    } catch (err) {
      // Si falla de verdad, avisamos en la UI en vez de mandar a imprimir
      // sin que el usuario entienda por qué cambió de acción.
      console.error("No se pudo generar el PDF del certificado:", err);
      setDownloadError(true);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="print:hidden">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            Tu certificado a nombre de <span className="text-text">{name}</span>.
          </p>
          <div className="flex gap-3">
            <button onClick={downloadPDF} disabled={downloading} className="btn btn-primary !py-2.5 text-xs">
              {downloading ? "Generando…" : "Descargar PDF"}
            </button>
            <button onClick={() => window.print()} className="btn btn-ghost !py-2.5 text-xs">Imprimir</button>
          </div>
        </div>
        {downloadError && (
          <p className="mt-3 text-xs text-amber-300">
            No pudimos generar el archivo PDF automáticamente. Probá de nuevo, o usá el botón
            &quot;Imprimir&quot; y elegí &quot;Guardar como PDF&quot; en el diálogo de impresión.
          </p>
        )}
      </div>

      {/* Certificado */}
      <div
        ref={certRef}
        className="relative mx-auto aspect-[1.414/1] w-full max-w-3xl overflow-hidden rounded-[20px] border-2 border-ink bg-paper p-10 md:p-14"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,122,13,.14), transparent 70%), radial-gradient(ellipse 50% 40% at 90% 100%, rgba(181,98,46,.10), transparent 70%)",
        }}
      >
        <div className="pointer-events-none absolute inset-4 rounded-[14px] border border-line-strong" />
        <div className="pointer-events-none absolute inset-5 rounded-[12px] border border-blue-light/25" />

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

            <div className="mt-5 flex max-w-lg flex-wrap items-center justify-center gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line-strong bg-sand/50 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-blue-light"
                >
                  {skill}
                </span>
              ))}
            </div>
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

