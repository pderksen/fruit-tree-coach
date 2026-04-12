# Phase 4: Type Safety & Schema Cleanup

## Problem

Small type-safety gaps accumulated during the Supabase migration.
They're each minor in isolation but together they let bugs slip past
`npm run typecheck`. Clean them up before Phase 5 doubles the surface
area.

Known issues:

- **`Task.treeType` is optional** (`lib/types.ts:81`) even though every
  task is linked to a tree. Callers either default it or use `?.` —
  masking cases where the tree lookup silently returned nothing.
- **`OrchardWithUser` isn't exported.** Callers of `orchard-service`
  infer the type from the schema shape, which works but leaves no
  stable public surface. If the schema changes, every caller breaks
  implicitly.
- **`Task.guide_task_id` linkage is informal.** No FK type
  relationship to `guides` table (which doesn't exist yet — comes in
  `plans-2026-04-11-supabase` Phase 10). Decide if we enforce it now
  or wait.
- **Settings local-vs-sync decision deferred.** `plans-2026-04-11-supabase`
  Phase 7 left this open. Time to decide and document.
- **Mock imports in production paths.** `plans-2026-04-11-supabase`
  Phase 8 called for removing these but the final audit may still
  have stragglers. Confirm.

## Tasks

1. **Tighten `Task.treeType`.** In `lib/types.ts`:
   - Make `treeType` required on `Task`
   - Update `lib/schemas.ts` to require it
   - Update all task-construction sites to supply it (the tree is
     always known at task-creation time via `tree_id`)
   - Let the typecheck surface the real callers that were relying on
     the optional — fix each one

2. **Export service-layer types.** For each service in
   `lib/services/*`, export the "hydrated" return type (e.g.
   `OrchardWithUser`, `TreeWithTasks`, `TaskWithGuide` if that
   exists). Callers should import those instead of re-deriving.

3. **Decide on `Task.guide_task_id`.** Recommendation: leave it as a
   plain string column for now (Phase 10 of the prior plan will
   formalize). Add a comment in `lib/types.ts` explaining why it's
   not a typed reference yet, and what Phase 5 / Phase 10 of the
   next plan will change.

4. **Decide settings storage.** Recommendation: **local-only**
   (AsyncStorage via `stores/settings-store.ts`). Reasons:
   - Notification prefs are device-specific (push tokens, OS-level
     permissions) — cross-device sync isn't meaningful
   - No user has asked for it
   - Keeps the scope tight

   Add a header comment to `stores/settings-store.ts` stating:
   "Local-only by design. Notification prefs are device-specific;
   there is no `settings` table on Supabase. If cross-device sync
   becomes a requirement, see `docs/plans-2026-04-11-supabase/
   phase-7.md` for the original proposal."

5. **Audit mock imports in production.** Grep for `lib/mocks/` in
   `app/`, `components/`, `hooks/`, `stores/`, `lib/services/`.
   Anything still imported outside of `__tests__/` gets moved or
   replaced with the real service call. (Per the review, a grep
   turned up nothing — confirm and then either delete the mock files
   or move them under a `test-fixtures/` folder.)

6. **Lint rule (optional).** Add an ESLint `no-restricted-imports`
   rule that blocks `lib/mocks/*` from being imported outside of
   test files. Catches future regressions cheaply.

## Out of scope

- Large type refactors. Each fix above is a small, localized change.
- Branded types / nominal typing for IDs. Worth doing eventually;
  not now.
- Migrating `guide_task_id` to a typed FK — that's Phase 10 of the
  prior plan.

## Done when

- [ ] `Task.treeType` is required and all callers updated
- [ ] Service-layer hydrated types are exported
- [ ] `Task.guide_task_id` has a header comment explaining the state
- [ ] `stores/settings-store.ts` has a local-only header comment
- [ ] No `lib/mocks/*` imports outside of test files
- [ ] (Optional) ESLint rule blocking mock imports in place
- [ ] `npm run typecheck && npm test && npm run lint` pass
