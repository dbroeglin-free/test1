# AGENTS.md

Guidelines for AI agents working on this repository.

## Project Overview

**Météo des Neiges** is a static React SPA displaying real-time weather for ski resorts near Geneva. It fetches data from the [Open-Meteo API](https://open-meteo.com) and deploys to GitHub Pages via GitHub Actions.

## Tech Stack

- React 19, TypeScript 5, Vite 7
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- TanStack React Query v5 for data fetching
- React Router v7 with `basename="/test1/"`
- Vitest + Testing Library for tests
- ESLint 9 with strict TypeScript rules

## Repository Structure

```
src/
├── components/     # Reusable UI components (Header, Footer, ResortCard)
├── data/           # Static data (resorts.ts — resort definitions with coordinates)
├── pages/          # Route-level components (Dashboard.tsx)
├── services/       # API and utility modules (weatherService.ts, weatherUtils.ts)
└── types/          # Shared TypeScript interfaces (index.ts)
```

## Development Commands

```bash
npm run dev          # Start dev server at http://localhost:5173/test1/
npm run build        # TypeScript check + Vite production build → dist/
npm run lint         # ESLint
npm run test         # Vitest (single run)
npm run test:watch   # Vitest (watch mode)
```

Always run `npm run lint` and `npm run test` before committing.

## Code Conventions

- **Language**: All UI text and labels are in French.
- **TypeScript**: Strict mode is enabled. All types live in `src/types/index.ts`. No `any`.
- **Components**: Functional components with named exports as default. Props interfaces defined inline in the component file.
- **Styling**: Tailwind utility classes only — no custom CSS except `src/index.css` for the Tailwind import.
- **Data fetching**: Use TanStack React Query. Query keys follow `['weather', resort.id]` pattern. Stale time is 10 minutes; `refetchOnWindowFocus` is false.
- **No secrets**: The app uses only the free, unauthenticated Open-Meteo API. No `.env` files needed.

## Base Path

The app is deployed at `https://<owner>.github.io/test1/`. The base path `/test1/` is set in two places that must stay in sync:
- `vite.config.ts`: `base: '/test1/'`
- `App.tsx`: `<BrowserRouter basename="/test1">`

If the repository is renamed, update both.

## Adding a Resort

1. Add an entry to `src/data/resorts.ts` following the existing `Resort` interface.
2. No other changes are needed — the Dashboard fetches weather for all resorts in that array.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds and deploys to GitHub Pages automatically.
