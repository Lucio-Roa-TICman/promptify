import { Suspense } from "react";
import { CourseClient } from "@/components/CourseClient";

export default function CursoPage() {
  return (
    <Suspense fallback={<div className="p-10 text-muted">Cargando…</div>}>
      <CourseClient />
    </Suspense>
  );
}
