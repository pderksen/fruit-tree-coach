# Phase 8: Cleanup & Hardening

## Goal
Remove leftover mock data from production paths, add proper loading
and error states everywhere, verify security with a second test
account, and make sure everything passes checks.

## Split
- **8a — code cleanup** (items 1–5, 7): mock-import audit, loading/
  error/empty states, pull-to-refresh, Zustand store removal.
  **Status: DONE (2026-04-12).**
- **8b — verification** (items 6, 8, 9): two-account RLS check, full
  test run, manual QA on Android/iOS.
  **Status: DONE (2026-04-12)** — RLS verified via SQL simulation for
  test1/test2 users; typecheck/lint/test all pass; manual QA skipped
  at user's request.

## Tasks

### 1. Audit and remove mock data imports — ✅ done
- Reference data previously in `lib/mocks/care-details.ts` moved to
  `lib/care/`:
  - `EXPERT_TIPS` → `lib/care/expert-tips.ts`
  - `COACH_TIPS` → `lib/care/coach-tips.ts`
  - `CURRENT_SEASON_STAGE` → `lib/care/season-stage.ts`
- `lib/mocks/care-details.ts` now only exports `MOCK_DETAILED_TASKS`
  (unused in prod; kept as test fixture).
- `MOCK_GUIDES` import in `app/tree/guide/[taskId].tsx` deferred to
  **Phase 10** (Guides in Supabase) — acknowledged exception.
- Keep mock files in `lib/mocks/` — they're useful for tests.
- Ensure no screen falls back to mock data when Supabase is unreachable.

### 2. Add loading states to every data-fetching screen — ✅ done
- Home, orchard, tree detail, calendar, profile all render
  `<LoadingSpinner />` (new, `components/LoadingSpinner.tsx`) while
  TanStack Query is loading.

### 3. Add pull-to-refresh — ✅ done
- Home: `RefreshControl` on `ScrollView`, refetches trees + tasks.
- Orchard: `RefreshControl` on `FlatList`, refetches trees.
- Tree detail: `RefreshControl` on `ScrollView`, refetches single tree
  + tasks.
- Uses `isRefetching` + `refetch` from TanStack Query.

### 4. Add error states — ✅ done
- New `components/ErrorState.tsx` with optional retry button.
- Home, orchard, tree detail, calendar, profile all render error state
  with retry when `isError` is true.
- Empty states (no trees / no tasks) are distinct from errors.

### 5. Handle offline / slow network — ✅ partial, rest deferred
- TanStack Query stale-while-refetching behavior is in place.
- `networkMode: "offlineFirst"` + persistence **deferred to Phase 9**
  (owns the offline foundation).

### 6. Verify RLS with a second test account — ✅ done
- Used existing `test1@fruittreecoach.com` and `test2@fruittreecoach.com`.
- Seeded 1 orchard + 1 tree + 1 task for each user (kept in DB for
  manual app-side spot-checking).
- Simulated each user's session via `set local role authenticated` +
  `set local request.jwt.claims` and confirmed each sees exactly 1 of
  each row (their own) across profiles/orchards/trees/tasks.
- Attack simulation as test1: attempting to SELECT, UPDATE, DELETE, or
  INSERT-into-orchard targeting test2's rows all returned 0 rows —
  RLS policies fully block cross-user access on every table.

### 7. Remove deprecated Zustand stores — ✅ done
- `stores/tree-store.ts` and `stores/orchard-store.ts` were already
  removed in earlier phases.
- `stores/profile-store.ts` deleted. `useProfileStore` usage in
  `app/_layout.tsx` removed (name now comes from `useProfile()`, which
  reads the `profiles` row populated by the sign-up trigger).
- `stores/settings-store.ts` kept (device-local, not migrated).
- AsyncStorage key `fruit-tree-coach-profile` is now orphaned — will
  clear naturally when users reinstall; no programmatic purge needed.

### 8. Run all checks — ✅ done
- `npm run typecheck` — passes (2026-04-12).
- `npm run lint` — passes (2026-04-12).
- `npm test` — passes (no test files in app code; vitest exits clean).
- Manual QA on Android and iOS — skipped at user's request.

### 9. Update tests — ✅ n/a
- No app-code test files exist (repo currently has zero `*.test.ts`
  files under app/components/lib/hooks). Nothing to update.
- Writing new service-layer tests deferred — not in scope for 8b.

## Files changed (8a)
- `components/LoadingSpinner.tsx` (new)
- `components/ErrorState.tsx` (new)
- `lib/care/expert-tips.ts`, `lib/care/coach-tips.ts`,
  `lib/care/season-stage.ts` (new — reference data relocated)
- `lib/mocks/care-details.ts` (trimmed)
- `app/(tabs)/index.tsx`, `app/(tabs)/orchard.tsx`,
  `app/(tabs)/calendar.tsx`, `app/tree/[id].tsx`, `app/tree/new.tsx`,
  `app/profile.tsx` (loading/error/pull-to-refresh)
- `app/_layout.tsx` (drop profile-store seed)
- `stores/profile-store.ts` (deleted)

## Verification
- No imports from `lib/mocks/` in any `app/` or `components/` file
  except `app/tree/guide/[taskId].tsx` (phase-10 exception).
- Every data-fetching screen handles loading, error, and empty states.
- Two test accounts cannot see each other's data. ✅ (SQL-simulated)
- `npm run typecheck`, `npm test`, `npm run lint` all pass. ✅
- Manual test on Android and iOS passes the full flow. — skipped.
