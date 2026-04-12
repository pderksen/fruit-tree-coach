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

## Phase 9a: Post-Migration Cleanup

- Delete dead hidden-tab files (`trees`, `advice`, `settings`) + registrations
- Keep `app/trial.tsx` as a dev-only test screen (launched from `dev-login`);
  remove the production trial-launcher button from `app/(tabs)/index.tsx`
- Rewire splash CTA from `/trial` → `/sign-in?mode=signup` (paywall not shipping yet)
- Fix missing `zipToZone` offline fallback in `useUpdateOrchard`
- Document the settings local-vs-sync split as a header comment in `settings-store.ts`
- Zustand store cleanup already done in prior phases — nothing to delete here

**Files:** `app/(tabs)/trees.tsx`, `app/(tabs)/advice.tsx`, `app/(tabs)/settings.tsx` (delete), `app/(tabs)/_layout.tsx`, `app/(tabs)/index.tsx`, `app/splash.tsx`, `hooks/use-orchards.ts`, `stores/settings-store.ts`

---

## Phase 9b: Offline-First Foundation

- Add TanStack Query persistence + `networkMode: "offlineFirst"` for offline-first UX
- Optimistic + queued mutations for critical offline actions (mark task done, add tree, update notes)
- Offline banner via `@react-native-community/netinfo`
- Write `docs/offline-strategy.md` to lock in the approach

**Files:** `app/_layout.tsx`, `lib/query-client.ts`, `hooks/use-tasks.ts`, `hooks/use-trees.ts`, `components/OfflineBanner.tsx`, `docs/offline-strategy.md`

---

## Phase 10: Guides in Supabase

- Move `MOCK_GUIDES` content into a `guides` table (or JSON column on tasks)
- Design schema for steps, tools, product recommendations, research notes
- Create `lib/services/guide-service.ts` + `hooks/use-guide.ts`
- Replace `MOCK_GUIDES` lookup in `app/tree/guide/[taskId].tsx` with a real query
- Decide on authoring workflow (seed SQL, admin UI, or direct table edits)
- Keep `guide_task_id` linkage on tasks working against the new source

**Files:** Supabase migration, `lib/services/guide-service.ts`, `hooks/use-guide.ts`, `lib/schemas.ts`, `app/tree/guide/[taskId].tsx`, `lib/mocks/guides.ts` (remove usage)

---

## Notes

- **Settings store** stays local unless cross-device sync is needed later
- **Mock data** files can remain in the repo for test fixtures
- **Every Supabase response** goes through a Zod schema (CLAUDE.md rule)
- **No Supabase imports in components** — all queries go through `lib/services/`
- **Server state uses TanStack Query**, local UI state stays in Zustand

---

## Schema changes: migration workflow

All schema changes from 2026-04-12 onward must land as committed migration
files in `supabase/migrations/`. This is our free-tier substitute for
point-in-time recovery — git history *is* the schema history.

**To make a schema change:**

1. `npx supabase migration new <descriptive_name>` — creates a timestamped
   `.sql` file in `supabase/migrations/`
2. Write the forward SQL in that file (tables, columns, policies, triggers)
3. `npx supabase db push` — applies it to the linked remote dev DB
4. Commit the new `.sql` file to git

**To undo a change:** write a new migration that reverses it (forward-only —
no `supabase db rollback`). Git `log`/`diff`/`blame` on `supabase/migrations/`
is the audit trail.

**Never make schema changes via the dashboard SQL editor or MCP
`apply_migration`** — they bypass the local files. Always go through
`migration new` + `db push` so the SQL lands in git.

**Baseline:** the four `20260411*` / `20260412183823_*` files are placeholder
shims — the real SQL for those was applied directly to the remote before
tracking started, and is not captured locally. `supabase db reset` will
therefore not reproduce pre-2026-04-12 schema state. All *future* migrations
will be replayable from git.

**Never commit:** the database password, the personal access token from
`supabase login`, or anything in `supabase/.temp/` (already gitignored).
