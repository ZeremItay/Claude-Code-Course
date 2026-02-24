# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workspace

All work must be performed exclusively within this directory.

## Commands

- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm start` — Serve production build

## Tech Stack

Next.js 16 (App Router) + Tailwind CSS v4 + shadcn/ui + Framer Motion + Lenis + React Hook Form + Zod + Lucide React

## Architecture

Hebrew RTL landing page for "Itai Zerem" (web developer). Single page with vertical scroll sections.

- **`src/app/layout.tsx`** — Root layout: RTL (`lang="he" dir="rtl"`), Heebo + Fira Code fonts, LenisProvider, Toaster, SEO metadata
- **`src/app/page.tsx`** — Composes all sections: Hero → Value Prop → Services → Contact → WhatsApp FAB
- **`src/app/actions/contact.ts`** — Server Action: validates with Zod, forwards to external endpoint via `CONTACT_FORM_ENDPOINT` env var
- **`src/app/globals.css`** — Tailwind v4 `@theme inline` with dark "Coding Vibe" color system (neon pink #e91e8c, neon purple #a855f7)
- **`src/components/sections/`** — Section components (hero, value-proposition, services, contact)
- **`src/components/contact-form.tsx`** — Client component: React Hook Form + Zod + Server Action + Sonner toast
- **`src/components/providers/lenis-provider.tsx`** — Smooth scroll provider
- **`src/lib/schemas.ts`** — Zod schemas shared between client form and server action
- **`src/lib/constants.ts`** — Site config, WhatsApp URL
- **`src/lib/fonts.ts`** — Heebo (hebrew subset) + Fira Code font config

## Conventions

- RTL: Use Tailwind logical properties (`ps-*`, `pe-*`, `ms-*`, `me-*`, `start-*`, `end-*`) instead of physical (`pl-*`, `pr-*`, `left-*`, `right-*`)
- Framer Motion: Use `as const` on ease values to satisfy strict types (e.g., `ease: "easeOut" as const`)
- Colors are defined in `globals.css` `:root` block — no `tailwind.config.ts` needed (Tailwind v4 CSS-first)
- All Hebrew copy lives in component files and `src/lib/constants.ts`
