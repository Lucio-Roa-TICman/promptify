import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/db";
import { courseProgress } from "@/db/schema";

export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const rows = await db
    .select({ moduleSlug: courseProgress.moduleSlug })
    .from(courseProgress)
    .where(eq(courseProgress.userId, session.user.id));

  return NextResponse.json({ completed: rows.map((r) => r.moduleSlug) });
}
