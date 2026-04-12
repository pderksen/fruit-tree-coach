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
- `@react-native-community/datetimepicker` for native date pickers
- ESLint (latest stable) + Prettier for linting and formatting

## Project structure
- `app/` screens and navigation
- `app/(tabs)/` tab-based screens (home, calendar, new-tree, orchard, watering; `trees`/`advice`/`settings` exist but hidden from tab bar via layout)
- `app/profile.tsx` user profile/account screen (stack, not tab)
- `stores/settings-store.ts` notification and device-local app settings (stays local — see "Settings: local-device vs user-synced")
- `stores/tree-store.ts`, `stores/orchard-store.ts`, `stores/profile-store.ts` — legacy, being replaced by TanStack Query hooks in `hooks/use-*.ts`; scheduled for removal in Phase 9
- `hooks/use-trees.ts`, `hooks/use-orchards.ts`, `hooks/use-tasks.ts`, `hooks/use-profile.ts` TanStack Query hooks backed by `lib/services/`
- `docs/` planning docs — `all-phases.md` (roadmap), dated subfolders (e.g. `plans-2026-04-10/`) with per-phase plans
- `app/splash.tsx`, `app/trial.tsx`, `app/sign-in.tsx` onboarding flow
- `app/tree/` tree detail, creation, and step-by-step guide routes
- `components/` reusable UI components
- `lib/` shared logic, helpers, and app services
- `lib/types.ts` shared domain types (Tree, Task, FruitTreeType, ExpertTip, SeasonStage, AgeBracket)
- `lib/fruit-tree-data.ts` lookup tables (`FRUIT_TREE_TYPES`, `TREE_EMOJI`, `TREE_CATEGORY_MAP`, `SCIENTIFIC_NAME_MAP`)
- `lib/supabase.ts` Supabase client init
- `lib/auth.ts` auth helpers
- `lib/query-client.ts` TanStack Query client config
- `lib/notifications.ts` push notification setup
- `lib/fruit-icons.ts` fruit icon mapping
- `lib/date-utils.ts` date formatting and calculation helpers
- `lib/zone-lookup.ts` USDA zone / climate lookup
- `lib/mocks/` hardcoded mock data for UI development
- `lib/care/` care logic — `watering.ts`, `season-order.ts`, `research-sources.ts`
- `hooks/` custom React hooks (currently empty placeholder)
- `stores/` local app state

## Key files
- `app/_layout.tsx` root layout (global nav options, stack screen registration)
- `app/(tabs)/_layout.tsx` tab bar config (visible/hidden tabs)
- `global.css` Tailwind/NativeWind base styles
- `tailwind.config.js` custom colors (`brand-*`, `cream-*`), font config
- `metro.config.js` Metro bundler config with NativeWind plugin
- `app.json` Expo app config

## Domain concepts
- **Tree**: a user’s fruit tree, including tree type, location, and optional details like age or variety
- **Task**: a recommended action for a tree, such as pruning, fertilizing, thinning, or waiting
- **Care plan**: the set of recommended tasks and timing for a tree
- **Location**: the user’s area, used to adjust timing and recommendations
- Tasks should clearly answer: what to do, when to do it, and why it matters

## Offline strategy (target state — lands in Phase 9)
- Offline is a first-class use case (yard work, spotty connections), not an edge case
- Target: TanStack Query configured with AsyncStorage persistence and `networkMode: "offlineFirst"` so cached data renders immediately on cold start
- Target: critical mutations (marking a task done, adding a tree) are optimistic with rollback on error
- Target: UI never blocks when offline; an offline banner (via `@react-native-community/netinfo`) indicates state but lets the user keep working
- Target: sign-in, password reset, and USDA zone API calls are the only flows allowed to hard-fail offline; cache last-known zone as fallback
- Until Phase 9 ships, don't design new features assuming persistence is in place — but also don't add patterns that will make persistence harder to turn on

## Settings: local-device vs user-synced
- **Device-local** (stays in `stores/settings-store.ts` + AsyncStorage): notification on/off, notification time, haptics, sound. These are tied to the physical device — an iPad shouldn't buzz because the phone enabled notifications.
- **User-synced** (future `user_preferences` Supabase table): units (imperial/metric), language/region, onboarding-completed flags. These are about the user and feel broken if they reset across devices.
- Don't create the `user_preferences` table until a real synced preference exists — YAGNI, and an empty table locks in the wrong shape.

## Conventions
- Functional components only
- Custom Tailwind colors: `brand-*` (green scale, primary is brand-700 #15803d), `cream-*` (warm backgrounds)
- Custom font: `font-serif` maps to Georgia (used for quotes/tips)
- Absolute imports from `@/`
- Server state goes through TanStack Query, never useState + useEffect
- Every Supabase response is parsed through a Zod schema
- Tailwind classes via NativeWind, no inline StyleSheet unless unavoidable
- Files stay under ~200 lines, split when they grow past that
- User-facing copy is plain English, no jargon without a tooltip
- Care recommendations must cite their source in a code comment
  (extension service, university guide, etc.) so claims stay defensible
- Use `Partial<Record<K, V>>` for mock data maps that don't need entries for every union member
- Screens read trees from `useTreeStore`, not from `MOCK_TREES` directly
- New stack screens: register in `app/_layout.tsx` (title only — `headerBackTitle: ""` is set globally)

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
- `npm run test:watch` run Vitest in watch mode
- `npm run lint` ESLint
- `npm run format` Prettier format all files
- `eas build --profile preview` cloud build for testing
- `eas build --profile production` production build

## Environment setup
1. `npm install`
2. Create `.env` with:
   - `EXPO_PUBLIC_SUPABASE_URL`
   - `EXPO_PUBLIC_SUPABASE_ANON_KEY`
3. `npm run dev` to start

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
- ESLint `react/no-unescaped-entities`: use `&apos;` for apostrophes in JSX text (e.g. "You're" → `You&apos;re`)
- Zod v4 works with `@hookform/resolvers/zod` v5 — no special import path needed
- `@react-native-community/datetimepicker`: on Android the picker auto-dismisses on selection; on iOS it stays visible — handle with `Platform.OS` check
- Expo Router typed routes: after adding/removing route files, run `npx expo customize tsconfig.json` to regenerate `.expo/types/router.d.ts`
- Expo Router: the `(tabs)` Stack.Screen in `app/_layout.tsx` must have `title: "Home"` (or similar) — without it, iOS uses the raw route name "(tabs)" as back-button text
- Ionicons: `tree-outline` does not exist — use `leaf-outline` for tree-related icons
- Back button text: `headerBackTitle: ""` is set globally in `app/_layout.tsx` `screenOptions` — don't set it per-screen
- Expo Router auto-registers files in `app/` — deleting a tab file is required when replacing it (hiding via layout isn't enough)