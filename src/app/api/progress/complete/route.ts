import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/db";
import { courseProgress } from "@/db/schema";
import { MODULES, TOTAL_MODULES } from "@/data/course";

export async function POST(req: Request) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const { slug } = (await req.json()) as { slug?: string };
  const validSlug = MODULES.some((m) => m.slug === slug);
  if (!slug || !validSlug) {
    return NextResponse.json({ error: "Módulo inválido" }, { status: 400 });
  }

  // onConflictDoNothing evita duplicados si el usuario ya lo había completado.
  await db
    .insert(courseProgress)
    .values({ userId: session.user.id, moduleSlug: slug })
    .onConflictDoNothing();

  const rows = await db
    .select({ moduleSlug: courseProgress.moduleSlug })
    .from(courseProgress)
    .where(eq(courseProgress.userId, session.user.id));

  const completed = rows.map((r) => r.moduleSlug);
  return NextResponse.json({ completed, finished: completed.length >= TOTAL_MODULES });
}
