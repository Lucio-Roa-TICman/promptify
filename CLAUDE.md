# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev          # localhost:3000
npm run build
npm run start
npm run lint

npm run db:generate   # drizzle-kit generate — creates a migration from src/db/schema.ts
npm run db:push       # drizzle-kit push — pushes schema straight to the DB (no migration file)
npm run db:studio     # drizzle-kit studio — browse the DB
```

There is no test suite in this repo (no test runner configured, no `test` script).

`npm run build` intentionally does not depend on network access to Google Fonts —
see "Fonts" below.

Requires a `.env.local` with `DATABASE_URL` (Neon Postgres), `BETTER_AUTH_SECRET`,
`BETTER_AUTH_URL`, `NEXT_PUBLIC_BETTER_AUTH_URL`. **`.env.local` is currently
tracked by git and not in `.gitignore` — treat any values in it as already
compromised (this repo is public) until they're rotated and the file is
untracked. Do not add new secrets to a tracked env file.**

## Architecture

Next.js 15 (App Router) + React 19 + TypeScript + TailwindCSS. Built by
Facundo Gutiérrez (backend/auth) and Lucio Roa (frontend/design).

**Routes**: `/` (landing), `/login`, `/register`, `/dashboard` (progress panel),
`/curso` (module sidebar + lessons + exercises), `/certificado` (personalized,
downloadable certificate). `src/middleware.ts` gates `/dashboard`, `/curso`,
`/certificado` behind a cookie-only session check (no DB hit) and bounces a
logged-in user away from `/login`/`/register`.

**Auth**: better-auth (`src/lib/auth.ts`, server) + `src/lib/auth-client.ts`
(browser: `signIn`, `signUp`, `signOut`, `useSession`). Email+password only,
no email verification required. A single catch-all route
(`src/app/api/auth/[...all]/route.ts`) handles all better-auth endpoints.

**Database**: Drizzle ORM over Neon serverless Postgres (`src/db/index.ts`,
`src/db/schema.ts`). Schema has the four tables better-auth expects
(`user`, `session`, `account`, `verification`) plus one app table,
`course_progress` — one row per `(userId, moduleSlug)` marking a completed
module (composite primary key, no separate `completed` flag). `auth-schema.ts`
at the repo root is better-auth's own reference copy of the schema shape;
`src/db/schema.ts` is the one Drizzle actually reads (`drizzle.config.ts`
points at it) and the one to edit.

**Progress**: `src/lib/progressStore.ts` is a thin `fetch` wrapper
(`getCompleted`, `completeModule`, `resetProgress`) around
`/api/progress`, `/api/progress/complete`, `/api/progress/reset`, which read
and write `course_progress` for the current session's user. Components call
these functions rather than hitting the API routes directly.

**Course content**: `src/data/course.ts` is the single source of truth for
the curriculum — `MODULES`, an array of typed `Module` objects (`slug`,
`index`, `kicker`, `title`, `subtitle`, `lessons[]`, optional `exercise`).
`Exercise` is a tagged union of four interactive types — `order`, `compare`,
`improve`, `open` — each rendered by a different branch of
`src/components/ExerciseRunner.tsx`. To change course content, edit this
file directly; there's no CMS or DB table for lesson/exercise content (only
progress is persisted). Note: `MODULES` currently has 13 entries, while some
marketing copy (landing hero/FAQ text, `layout.tsx` metadata) still says
"7 módulos" — a pre-existing mismatch, not yet reconciled.

**Daily challenge**: `src/data/daily.ts` picks from `DAILY_CHALLENGES`
deterministically by day-of-year modulo array length, so every user sees the
same challenge on the same day with no DB/state involved.

**Certificate**: `src/components/Certificate.tsx` renders a
name-personalized certificate and exports it client-side via jsPDF +
html2canvas loaded from a CDN (not npm dependencies), so no bundler config
is needed for PDF export.

**Fonts**: loaded via a plain `<link>` tag to Google Fonts in
`src/app/layout.tsx` (not `next/font`), with the family names exposed as
CSS vars (`--font-serif`, `--font-sans`, `--font-mono`, `--font-display`)
that `tailwind.config.ts` maps to `font-serif`/`font-sans`/`font-mono`/
`font-display`. This is deliberate: `next/font` would fail the production
build if the network can't reach Google Fonts at build time; the `<link>`
approach degrades gracefully instead. Keep new fonts on this same pattern.

**Theming**: the app is single-theme dark (`color-scheme: dark` in
`globals.css`, tokens `bg`/`surface`/`blue`/`pink`/`text`/`muted`/`dim`/
`line` in `tailwind.config.ts`) — used by `/login`, `/register`,
`/dashboard`, `/curso`, `/certificado`. The landing page (`src/app/page.tsx`,
`src/components/LandingNav.tsx`) is the one exception: it uses a separate,
additive set of light "kiddo" tokens (`cream`, `paper`, `ink`, `kiddo.orange`,
`kiddo.blue`, plus `font-display`) added alongside the dark tokens rather
than replacing them, so the rest of the app is unaffected. Keep that
separation — don't repurpose the dark tokens for landing work or vice versa.
`src/components/mascots/` holds placeholder line-art illustrations for the
landing (ported from an external design prototype); they're expected to be
replaced with hand-drawn artwork later.

**Motion**: `src/components/Reveal.tsx` is the one scroll-reveal primitive
in the app — a client component using `IntersectionObserver` to add an `.in`
class once an element enters the viewport (one-shot, unobserves after
triggering), with delay steps `1`-`4` mapping to `.d1`-`.d4` transition-delay
classes in `globals.css`. Reuse it for any new scroll-triggered animation
instead of writing a new observer.

**Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`).
