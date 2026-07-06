import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/db";
import * as schema from "@/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
    // El usuario elige "solo email + contraseña" por ahora,
    // así que no exigimos verificación de email para no trabar el registro.
    requireEmailVerification: false,
  },
  // El nombre lo pedimos en el registro (para el certificado).
  user: {
    additionalFields: {},
  },
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  plugins: [nextCookies()],
});

export type Session = typeof auth.$Infer.Session;
