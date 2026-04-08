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
- Expo SDK 54 with React Native (pinned — see Gotchas)
- TypeScript, strict mode, no `any` without a comment
- Expo Router (latest stable) for file-based navigation
- Supabase for auth, database, storage
- TanStack Query for all server state
- Zustand for local UI state only
- NativeWind (latest stable) for styling (Tailwind classes)
- React Hook Form + Zod for forms and runtime validation
- Vitest + React Native Testing Library (latest stable) for tests
- Expo Location for location-aware guidance
- ESLint (latest stable) + Prettier for linting and formatting

## Project structure
- `app/` screens and navigation
- `components/` reusable UI components
- `lib/` shared logic, helpers, and app services
- `lib/care/` fruit tree care logic and recommendation generation
- `hooks/` custom React hooks
- `stores/` local app state

## Domain concepts
- **Tree**: a user’s fruit tree, including tree type, location, and optional details like age or variety
- **Task**: a recommended action for a tree, such as pruning, fertilizing, thinning, or waiting
- **Care plan**: the set of recommended tasks and timing for a tree
- **Location**: the user’s area, used to adjust timing and recommendations
- Tasks should clearly answer: what to do, when to do it, and why it matters

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

## Gotchas
- ESLint 9+ flat config: use `eslint.config.js`, not `.eslintrc.*`
- ESLint: `eslint-config-expo/flat` is the correct import for flat config
- ESLint: `@typescript-eslint/*` rules must be scoped to `files: ["**/*.ts", "**/*.tsx"]`
- `@testing-library/jest-native` is deprecated; use built-in matchers from `@testing-library/react-native`
- Supabase env vars: `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_ANON_KEY`
- NativeWind v4+ requires metro plugin (`withNativeWind`), babel preset, and `global.css` import in root layout
- NativeWind v4 requires `react-native-css-interop` as a direct dependency — without it, Metro fails to resolve `jsx-runtime`
- Expo Go (App Store) supports SDK 54 as of April 2026 — do not upgrade past SDK 54 until Expo Go catches up
- Expo SDK upgrades: run `npx expo install --fix` after updating to align ecosystem packages
- NativeWind v4 requires Tailwind CSS v3 — do not upgrade to Tailwind v4
- `eslint-config-expo` does not yet support ESLint 10 — stay on ESLint 9.x
- `eslint-import-resolver-typescript` must be a direct devDependency for lint to resolve `@/` imports
- Expo SDK dictates compatible versions of `react`, `react-native`, and `typescript` — always check with `npx expo install --fix`
- When changing Expo SDK versions, also align `react-test-renderer` to the matching React version