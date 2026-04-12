# Phase 8: Cleanup & Hardening

## Goal
Remove leftover mock data from production paths, add proper loading
and error states everywhere, verify security with a second test
account, and make sure everything passes checks.

## Tasks

### 1. Audit and remove mock data imports
- Search all `app/` and `components/` files for imports from `lib/mocks/`
- Remove any remaining mock imports from production code
- Keep mock files in `lib/mocks/` — they're useful for tests
- Ensure no screen falls back to mock data when Supabase is unreachable

### 2. Add loading states to every data-fetching screen
- Home screen: skeleton cards or spinner while trees/tasks load
- Orchard screen: loading indicator
- Tree detail: loading indicator
- Calendar: loading indicator
- Profile: loading indicator
- Use a consistent loading pattern (reusable `LoadingSpinner` component
  or skeleton component)

### 3. Add pull-to-refresh
- Home screen: wrap ScrollView with `RefreshControl` that refetches
  the trees query (and any other queries on the screen)
- Orchard screen: add `RefreshControl` to the FlatList
- Tree detail: add `RefreshControl` to the ScrollView — refetches
  the single-tree query
- Use TanStack Query's `refetch` and `isRefetching` for the control's
  `refreshing` prop so the spinner reflects actual network state

### 4. Add error states
- Network error: "Unable to connect. Pull to refresh."
- Empty state: "No trees yet" / "No tasks this week" (distinct from error)
- Supabase error: generic "Something went wrong" with a retry button
- Use TanStack Query's `error` and `isError` states

### 5. Handle offline / slow network
- TanStack Query caches data — show stale data while refetching
- If fully offline and no cache: show a clear message
- Consider adding `networkMode: "offlineFirst"` to query client if
  the app should work offline

### 6. Verify RLS with a second test account
- Create a second user in Supabase Auth
- Add trees/orchards for both users
- Verify user A cannot see user B's data via the app
- Verify user A cannot see user B's data via direct Supabase query
  (use the SQL editor with `set role authenticated; set request.jwt.claims = ...`)

### 7. Remove deprecated Zustand stores
- Confirm `tree-store.ts`, `orchard-store.ts`, `profile-store.ts` are
  either deleted or no longer imported by any screen
- Keep `settings-store.ts` (local-only, not migrated)
- Clean up any AsyncStorage keys left behind by removed stores

### 8. Run all checks
- `npm run typecheck` — no TypeScript errors
- `npm test` — all tests pass (update tests that relied on mock stores)
- `npm run lint` — no lint errors
- Manual QA on Android and iOS:
  - Sign up fresh -> empty state -> add orchard -> add tree -> see tasks
  - Sign out -> sign in -> data persists
  - Kill app -> reopen -> still signed in, data loads

### 9. Update tests
- Tests that imported `useTreeStore` or `useOrchardStore` need updating
- Mock the service layer (not Supabase directly) in tests
- Add at least one integration-style test per service function if feasible

## Files changed
- All `app/` screens (loading/error states)
- `components/LoadingSpinner.tsx` or similar (new, if needed)
- `stores/tree-store.ts` (remove)
- `stores/orchard-store.ts` (remove)
- `stores/profile-store.ts` (remove or simplify)
- Test files

## Verification
- No imports from `lib/mocks/` in any `app/` or `components/` file
  (except test files)
- Every screen handles loading, error, and empty states
- Two test accounts cannot see each other's data
- `npm run typecheck`, `npm test`, `npm run lint` all pass
- Manual test on Android and iOS passes the full flow
