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
  // Sin esto, cada auth.api.getSession() (useSession en el cliente, y cada
  // ruta de /api/progress/*) pega contra Neon para validar la sesión — en
  // el driver HTTP serverless eso son ~200-500ms por request, y dashboard
  // solo dispara dos o tres en el primer render. La cookie cache guarda una
  // versión firmada (JWE) de la sesión por 5 minutos, así que sigue
  // resolviendo del lado del server pero sin ir a la base salvo que haya
  // vencido o el usuario haya cerrado sesión.
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  plugins: [nextCookies()],
});

export type Session = typeof auth.$Infer.Session;
