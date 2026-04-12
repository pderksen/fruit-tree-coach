# Fruit Tree Coach — Supabase Backend Integration (2026-04-11)

All phases for migrating from local mock data to a live Supabase backend.

---

## Phase 1: Supabase Project Setup & Database Schema

- Create Supabase project and get API keys
- Add `.env` with `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_ANON_KEY`
- Create database tables: `profiles`, `orchards`, `trees`, `tasks`
- Enable Row Level Security (RLS) on every table
- Create RLS policies so users can only access their own data
- Add trigger to auto-create a `profiles` row on sign-up

**Where:** Supabase dashboard SQL editor, `.env` file

---

## Phase 2: Auth — Wire Up Real Sign-In / Sign-Up / Sign-Out

- Replace mock `signIn`, `signUp`, `signOut` in `lib/auth.ts` with real Supabase calls
- Add auth state listener (`onAuthStateChange`) in root layout
- Gate the app so unauthenticated users see splash/trial/sign-in, authenticated users see tabs
- Update `profile-store` to seed from Supabase auth metadata (name)
- Add password reset flow (replace the placeholder alert)

**Files:** `lib/auth.ts`, `app/_layout.tsx`, `app/sign-in.tsx`, `stores/profile-store.ts`

---

## Phase 3: Service Layer & Zod Schemas

- Create `lib/services/` directory with query/mutation functions per table
- Define Zod schemas that validate every Supabase response
- Services: `profile-service.ts`, `orchard-service.ts`, `tree-service.ts`, `task-service.ts`
- Each service exports typed fetch/create/update/delete functions
- No Supabase imports in components or stores — only in `lib/services/`

**Files:** `lib/services/profile-service.ts`, `lib/services/orchard-service.ts`, `lib/services/tree-service.ts`, `lib/services/task-service.ts`, `lib/schemas.ts`

---

## Phase 4: Orchards — Migrate to Supabase + TanStack Query

- Create TanStack Query hooks for orchards (fetch, create, update)
- Replace `orchard-store.ts` Zustand store with query hooks
- On sign-up, auto-create a default orchard for the user
- Keep USDA zone lookup (`refreshZoneFromApi`) working with the new setup
- Update all screens that read from `useOrchardStore` to use the new hooks

**Files:** `hooks/use-orchards.ts`, `stores/orchard-store.ts` (remove or gut), all screens referencing orchards

---

## Phase 5: Trees — Migrate to Supabase + TanStack Query

- Create TanStack Query hooks for trees (fetch by orchard, create, update, delete)
- Replace `tree-store.ts` Zustand store with query hooks
- Remove `MOCK_TREES` initialization — real data comes from Supabase
- Update home screen, orchard screen, tree detail, and new-tree form
- Ensure `addTree` writes to Supabase and invalidates the query cache

**Files:** `hooks/use-trees.ts`, `stores/tree-store.ts` (remove or gut), `app/(tabs)/home.tsx`, `app/(tabs)/orchard.tsx`, `app/tree/new.tsx`, `app/tree/[id].tsx`

---

## Phase 6: Tasks — Migrate to Supabase + TanStack Query

- Create TanStack Query hooks for tasks (fetch by tree, create, toggle done, delete)
- Replace any mock task data with real queries
- Update calendar screen, home screen task lists, and guide screens
- Ensure marking a task done writes to Supabase immediately

**Files:** `hooks/use-tasks.ts`, `app/(tabs)/home.tsx`, `app/(tabs)/calendar.tsx`, `app/tree/guide/[taskId].tsx`, `lib/mocks/tasks.ts` (remove usage)

---

## Phase 7: Profile & Settings — Sync with Supabase

- Wire profile updates (name) to the `profiles` table via service layer
- Decide: keep settings (notification prefs) local or move to Supabase
- If moving settings: create `settings` table, service, and hooks
- If keeping local: leave `settings-store.ts` as-is (AsyncStorage)
- Update profile screen to read/write through the new service

**Files:** `hooks/use-profile.ts`, `stores/profile-store.ts`, `stores/settings-store.ts`, `app/profile.tsx`

---

## Phase 8: Cleanup & Hardening

- Remove all mock data imports (`lib/mocks/`) from production code paths
- Add loading and error states to every screen that fetches data
- Handle offline/network-error gracefully (show cached data or message)
- Verify RLS policies with a second test account
- Run `npm run typecheck`, `npm test`, `npm run lint`
- Manual QA on Android and iOS

**Files:** all screens, `lib/mocks/` (keep files for tests only), components

---

## Phase 9: Post-Migration Cleanup & Offline Foundation

- Delete obsolete Zustand stores (`tree-store`, `profile-store`, `orchard-store`)
- Delete obsolete screens (`app/trial.tsx`) and dead hidden-tab files
- Move `refreshZoneFromApi` out of `orchard-store` into `lib/zone-lookup.ts`
- Document settings split: device-local (notifications) vs future synced (units, flags)
- Add TanStack Query persistence + `networkMode: "offlineFirst"` for offline-first UX
- Optimistic + queued mutations for critical offline actions (mark task done)
- Offline banner via `@react-native-community/netinfo`
- Write `docs/offline-strategy.md` to lock in the approach

**Files:** `stores/*` (delete), `app/trial.tsx` (delete), `app/_layout.tsx`, `lib/query-client.ts`, `hooks/use-tasks.ts`, `components/OfflineBanner.tsx`, `docs/offline-strategy.md`

---

## Notes

- **Settings store** stays local unless cross-device sync is needed later
- **Mock data** files can remain in the repo for test fixtures
- **Every Supabase response** goes through a Zod schema (CLAUDE.md rule)
- **No Supabase imports in components** — all queries go through `lib/services/`
- **Server state uses TanStack Query**, local UI state stays in Zustand
