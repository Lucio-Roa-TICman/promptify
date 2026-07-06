import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/db";
import { courseProgress } from "@/db/schema";

export async function POST() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  await db.delete(courseProgress).where(eq(courseProgress.userId, session.user.id));
  return NextResponse.json({ completed: [] });
}
