# Promptify — Front

Front completo del curso Promptify, hecho con **Next.js (App Router)**,
**TailwindCSS** y **TypeScript**. Todas las pantallas están maquetadas y
funcionando con **datos de ejemplo (mock)**, listas para que el back las conecte.

---

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

> Las fuentes (Fraunces, Manrope, JetBrains Mono) se cargan por `<link>` desde
> Google Fonts en `src/app/layout.tsx`. No usa `next/font`, así que el `npm run
> build` no falla aunque la red bloquee la descarga de fuentes.

---

## Pantallas

| Ruta            | Qué es                                              |
| --------------- | --------------------------------------------------- |
| `/`             | Landing                                             |
| `/login`        | Inicio de sesión                                    |
| `/register`     | Registro (pide nombre antes del email)              |
| `/dashboard`    | Panel de progreso                                   |
| `/curso`        | Curso: sidebar de módulos, lecciones y ejercicios   |
| `/certificado`  | Certificado personalizable (descarga PDF / imprime) |

---

## >>> PARA EL BACKEND (Facundo) <<<

Todo lo que hay que conectar está marcado con el comentario **`TODO BACK`**.
Buscá ese texto en el proyecto y vas a encontrar exactamente los puntos:

- **`src/data/course.ts`** — `MOCK_USER` y `MOCK_PROGRESS`: reemplazar por la
  sesión real (better-auth) y el progreso real (leído de Neon).
- **`src/lib/mockStore.ts`** — `getCompleted()`, `completeModule()`,
  `resetProgress()`: reemplazar por server actions reales contra la base.
  Los componentes llaman a estas funciones, así que si mantenés la misma forma
  (mismos nombres y retornos), el front sigue funcionando sin tocar nada más.
- **`src/app/login/page.tsx`** y **`register/page.tsx`** — reemplazar el
  `router.push("/dashboard")` por `signIn.email()` / `signUp.email()`.
- **`src/components/Navbar.tsx`** — `handleSignOut()`: conectar `signOut()`.
- **`src/components/ExerciseRunner.tsx`** — la evaluación de los ejercicios de
  texto es una heurística simple (mock). Acá va la llamada a la **API de OpenAI**
  para devolver feedback formativo (esa parte la integra Lucio).

El contenido del curso (módulos, lecciones, ejercicios) es real y editable,
también en `src/data/course.ts`.

---

## El certificado

Funciona de punta a punta en el front: toma el nombre por defecto, permite
editarlo, y lo descarga como PDF o lo imprime (jsPDF + html2canvas cargados
desde CDN, sin dependencias extra). Lo único que el back tiene que darle es el
nombre real del usuario y confirmar que completó el curso.

---

## Diseño

Tema oscuro minimalista. El logo es una media luna con degradé azul→rosa que
representa "el brillo" de la IA (la idea: la IA no es algo oscuro, el brillo
está aunque mucha gente todavía no lo vea). Animaciones sobrias: aparición al
hacer scroll (IntersectionObserver), hover que eleva tarjetas, glow que late.

Tokens de color y tipografía en `tailwind.config.ts`.

---

Hecho por Facundo Gutiérrez y Lucio Roa.
