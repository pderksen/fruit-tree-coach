# Project: Fruit Tree Coach

## What this is
A mobile app that helps people know exactly when and how to care for
their fruit trees each week. It gives simple, location-aware guidance
for pruning, fertilizing, thinning fruit, and seasonal maintenance.
Target user: homeowners and backyard gardeners with fruit trees who
want clear, confident instructions without guesswork. Solo-developed,
simple and practical, intended for iOS and Android App Store release.
The app should feel like a personal fruit tree care coach: easy to
understand, action-oriented, and focused on telling the user what to
do this week, what to wait on, and how to avoid common mistakes.

## Stack
- Expo SDK (latest stable) with React Native
- TypeScript, strict mode, no `any` without a comment
- Expo Router for file-based navigation
- Supabase for auth, database, storage
- TanStack Query for all server state
- Zustand for local UI state only
- NativeWind for styling (Tailwind classes)
- React Hook Form + Zod for forms and runtime validation
- Vitest + React Native Testing Library for tests
- Expo Location for location-aware guidance

## Project structure
- `app/` Expo Router screens, file-based routes
- `components/` reusable UI, co-locate tests as `Foo.test.tsx`
- `lib/api/` all Supabase calls live here, never inline in components
- `lib/schemas/` Zod schemas, shared between forms and API validation
- `lib/care/` fruit tree care logic: week-by-week task generation,
  climate zone rules, species-specific guidance
- `hooks/` custom React hooks
- `stores/` Zustand stores
- `docs/decisions/` one ADR per significant choice

## Domain concepts
- **Tree**: a user's individual fruit tree (species, variety, planted date, location)
- **Task**: a recommended action for a tree at a point in time (prune, fertilize, thin, spray, harvest)
- **Care plan**: the generated schedule of tasks for a tree across the year
- **Climate zone**: USDA hardiness zone, derived from user location, drives task timing
- **Chill hours**: cumulative cold exposure, relevant for many fruit species
- Tasks should always answer: what, why, when, and what happens if skipped

## Conventions
- Functional components only
- Absolute imports from `@/`
- Server state goes through TanStack Query, never useState + useEffect
- Every Supabase response is parsed through a Zod schema
- Tailwind classes via NativeWind, no inline StyleSheet unless unavoidable
- Files stay under ~200 lines, split when they grow past that
- User-facing copy is plain English, no jargon without a tooltip
- Care recommendations must cite their source in a code comment
  (extension service, university guide, etc.) so claims stay defensible

## Before declaring a task done
1. `npm run typecheck` passes
2. `npm test` passes for touched files
3. `npm run lint` passes
4. If UI changed, describe how to manually verify on Android and iOS

## What NOT to do
- Don't add dependencies without asking first
- Don't refactor unrelated code while fixing a bug
- Don't disable TypeScript or ESLint rules to silence errors
- Don't create new files when editing an existing one would do
- Don't use `any`, `as unknown as`, or `@ts-ignore` to bypass types
- Don't put Supabase queries inside components
- Don't use Context for server state, that's TanStack Query's job
- Don't invent horticultural advice, if a recommendation isn't backed
  by a known source, flag it and ask

## Working style
- For any non-trivial task, write a plan first and wait for approval
- Ask before making architectural decisions
- When stuck, surface the problem instead of guessing
- Prefer the boring, idiomatic solution over the clever one

## Useful commands
- `npm run dev` start Expo dev server
- `npm run android` run on Android emulator
- `npm run ios` run on iOS simulator (Mac only)
- `npm run typecheck` TypeScript check
- `npm test` run Vitest
- `npm run lint` ESLint
- `eas build --profile preview` cloud build for testing
- `eas build --profile production` production build