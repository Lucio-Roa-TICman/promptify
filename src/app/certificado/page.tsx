"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Certificate } from "@/components/Certificate";
import { Reveal } from "@/components/Reveal";
import { TOTAL_MODULES } from "@/data/course";
import { getCompleted } from "@/lib/progressStore";
import { useSession } from "@/lib/auth-client";

export default function CertificadoPage() {
  const router = useRouter();
  const { data: session, isPending: sessionLoading } = useSession();
  const [completed, setCompleted] = useState<string[] | null>(null);

  useEffect(() => {
    if (!sessionLoading && !session) router.push("/login");
  }, [sessionLoading, session, router]);

  useEffect(() => {
    if (session) getCompleted().then(setCompleted);
  }, [session]);

  if (sessionLoading || !session || completed === null) {
    return <div className="min-h-screen" />;
  }

  const user = session.user;
  const finished = completed.length >= TOTAL_MODULES;

  return (
    <div className="min-h-screen">
      <div className="print:hidden">
        <Navbar userName={user.name} active="certificado" />
      </div>

      <main className="mx-auto max-w-4xl px-6 py-12">
        {finished ? (
          <>
            <Reveal className="mb-8 text-center print:hidden">
              <span className="eyebrow">Felicitaciones</span>
              <h1 className="mt-3 font-serif text-[clamp(30px,5vw,46px)] font-normal">Completaste el curso</h1>
              <p className="mt-2 text-muted">
                Acá está tu certificado. Para descargarlo y hacerlo realmente personalizado, agrega tu nombre.
              </p>
            </Reveal>
            <Certificate defaultName={user.name} />
          </>
        ) : (
          <div className="mx-auto max-w-md rounded-[18px] border border-line bg-surface p-10 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-surface-2 text-2xl">🔒</div>
            <h1 className="font-serif text-2xl font-normal">Certificado bloqueado</h1>
            <p className="mt-2 text-sm text-muted">
              Completá los {TOTAL_MODULES} módulos para desbloquear tu certificado. Llevás {completed.length} de {TOTAL_MODULES}.
            </p>
            <Link href="/curso" className="btn btn-primary mt-6 !py-2.5 text-xs">Continuar el curso</Link>
          </div>
        )}
      </main>
    </div>
  );
}
