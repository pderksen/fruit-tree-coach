# Phase 6: Test Coverage Backfill

## Problem

The Supabase migration landed without tests. Each phase in this plan
expands the testable surface area further. Before the App Store
submission we need a credible baseline so regressions are caught at
CI time instead of by users.

Current state:
- No unit tests for `lib/schemas.ts` (Zod parsing)
- No unit tests for `lib/zone-lookup.ts` (USDA API + offline fallback)
- No integration test for the tree-creation path (hits Supabase,
  triggers starter-task seeding)
- No cross-user RLS leak test (blocked on Phase 1)
- No tests for the care generator (blocked on Phase 5)
- `__tests__/` and `hooks/` are largely empty

## Approach

Don't aim for 100% coverage. Aim for tests on the code paths where
a regression would be silent and expensive. In order of priority:

1. Schema parsing — if Supabase returns an unexpected shape, the app
   explodes at runtime. Tests catch drift.
2. RLS policies — a leak here is a privacy incident. Worth a real
   integration test with two accounts.
3. Care generator — the product's core logic. Every rule deserves
   a named test.
4. Zone lookup — network-dependent fallback logic is easy to break.
5. Tree creation flow — end-to-end sanity check.

## Tasks

1. **Schema parse tests.** `lib/schemas.test.ts`. For each exported
   schema:
   - Happy path: a known-good fixture parses without error
   - Each required field: removing it triggers a parse error
   - Type coercion: numeric strings, null vs. undefined edge cases
   Fixtures can come from `lib/mocks/` (that's what they're for now).

2. **Zone lookup tests.** `lib/zone-lookup.test.ts`:
   - Mock `fetch` to simulate USDA API success → correct zone
   - Mock `fetch` to simulate timeout → falls through to offline table
   - Mock `fetch` to simulate HTTP error → falls through
   - Unknown zip → returns null (or sentinel, whichever the code uses)
   - A handful of known zips from the offline table return expected
     zones

3. **Care generator tests.** `lib/care/task-generator.test.ts`
   (new, depends on Phase 5):
   - Apple sapling zone 5a winter → includes winter-pruning task
   - Apple sapling zone 9b winter → does *not* include winter-pruning
     (bloom timing differs)
   - Citrus zone 8 winter → includes frost-protection task
   - Newly-planted any type → includes deep-watering task
   - Mature stone-fruit spring → includes thinning task
   - Empty/unknown zone → produces some sensible default set, does
     not throw

4. **RLS integration test.** `__tests__/rls.test.ts` (depends on
   Phase 1). Using two Supabase test accounts:
   - Account A creates an orchard and tree
   - Account B queries `trees` — receives zero rows, not A's tree
   - Account B tries to update A's tree by id — rejected
   - Account B tries to insert a tree with `user_id = A` — rejected
   Gate this test behind an env var (`RUN_RLS_TESTS=1`) so it only
   runs when the test accounts are configured. Document setup in
   `docs/testing.md` under the "How to verify RLS" section added in
   Phase 1.

5. **Tree-creation integration test.** `__tests__/tree-creation.test.ts`:
   - Create a tree via `createTree` service function
   - Assert the tree row exists
   - Assert the expected generated tasks exist (specific task IDs
     from the care generator rule set)
   - Clean up after itself
   Same env-gated pattern as the RLS test.

6. **CI setup.** Confirm `npm test` runs all of the above on the
   default command. If integration tests require env vars, ensure
   CI has them set (or explicitly skips the integration suite with
   a clear log message).

7. **Update `docs/testing.md`.** A short section per test suite:
   what it covers, how to run it locally, what env vars it needs,
   what it's *not* testing.

## Out of scope

- E2E / Detox / Maestro tests. React Native E2E is expensive to
  maintain on a solo project; defer until there's a paid tester in
  the loop.
- UI snapshot tests. Brittle and low-value for this app's style.
- 100% coverage goals. Targeted tests only.
- Performance / load testing.

## Done when

- [ ] Schema parse tests green
- [ ] Zone lookup tests green
- [ ] Care generator tests green (per Phase 5 rule set)
- [ ] RLS integration test green with two test accounts configured
- [ ] Tree-creation integration test green
- [ ] `docs/testing.md` updated with per-suite notes
- [ ] `npm test` in CI passes; integration tests skip cleanly when
      env vars absent
