# Fruit Tree Coach — Next Steps (2026-04-12)

Post-Supabase-migration roadmap. The backend integration from
`plans-2026-04-11-supabase` is substantially complete: auth, services,
Zod schemas, TanStack Query hooks, orchards, trees, tasks, and
offline-first query persistence are all wired up. What remains breaks
into security hardening, navigation polish, location-aware care, and
a dynamic care-logic engine.

Ordered by priority. Phases 1–2 are blockers for production; 3–5 are
the next product-value milestones; 6 is cross-cutting testing that
touches everything.

---

## Phase 1: RLS Policy Recovery & Security Hardening

The highest-priority gap. RLS policies live on the remote database
but were never captured in a local migration file — the baseline
migration at `supabase/migrations/20260411230248_enable_rls_and_policies.sql`
is a 3-line placeholder. This means `supabase db reset` produces an
insecure database, and new environments (staging, a fresh dev setup)
won't have RLS at all. Fix before any feature work ships.

**Files:** `supabase/migrations/<new>.sql`, `docs/testing.md`

See [phase-1.md](phase-1.md).

---

## Phase 2: Navigation Reliability

Small, user-facing fixes left over from the Supabase migration. The
splash screen is still registered inside the Stack, so it can appear
as a back-button target when auth state flips. Several screens call
`router.back()` unconditionally and stumble when the history is empty
(deep link, modal dismissal, fresh launch). Items 1–3 from the review
live here.

**Files:** `app/_layout.tsx`, `app/splash.tsx`, `app/tree/guide/[taskId].tsx`, `app/tree/new.tsx`

See [phase-2.md](phase-2.md).

---

## Phase 3: Zone-Aware Trees (Location Plumbing)

Zip code and hardiness zone live on the orchard, but trees don't
reference either — so the care engine (Phase 5) has no way to produce
location-specific recommendations without always joining through
orchard. Decide on denormalization vs. always-join, then plumb the
chosen pattern through the service layer and hooks. Also fixes the
5s USDA API hang and the undocumented single-orchard assumption.

**Files:** `lib/services/tree-service.ts`, `lib/services/orchard-service.ts`, `hooks/use-trees.ts`, `hooks/use-orchards.ts`, `lib/zone-lookup.ts`

See [phase-3.md](phase-3.md).

---

## Phase 4: Type Safety & Schema Cleanup

Small tightening pass on domain types and schemas before Phase 5
doubles the surface area. `Task.treeType` is optional despite always
being linked to a tree; `OrchardWithUser` has no exported type;
`Task.guide_task_id` linkage is informal. Also: decide the settings
local-vs-sync question deferred from `plans-2026-04-11-supabase`
Phase 7.

**Files:** `lib/types.ts`, `lib/schemas.ts`, `lib/services/*`, `stores/settings-store.ts`

See [phase-4.md](phase-4.md).

---

## Phase 5: Care Logic Engine

The product's core promise — "tell me what to do this week" — is
currently 3 hardcoded starter tasks inserted for every tree regardless
of type, age, or zone (see `lib/services/tree-service.ts:7-42`). Build
a `lib/care/task-generator.ts` that takes `(tree, zone, season)` and
produces real tasks. Wire it into tree creation, orchard zone change,
and season rollover. Move static `EXPERT_TIPS` / `COACH_TIPS` to the
`guides` table work-started in `plans-2026-04-11-supabase` Phase 10.

**Files:** `lib/care/task-generator.ts` (new), `lib/care/*`, `lib/services/tree-service.ts`, `lib/services/guide-service.ts` (new — Phase 10 of prior plan), `hooks/use-guide.ts` (new)

See [phase-5.md](phase-5.md).

---

## Phase 6: Test Coverage Backfill

Cross-cutting. The Supabase layer went in without tests and each of
Phases 1–5 expands the surface area. Before we ship to the App Store
we need: schema-parse tests, a tree-creation + starter-task integration
test, a cross-user RLS leak test (needs Phase 1 first), unit tests for
`zipToZone` and the USDA fallback, and a care-generator test matrix.

**Files:** `__tests__/*`, `lib/schemas.test.ts`, `lib/zone-lookup.test.ts`, `lib/care/task-generator.test.ts`, `docs/testing.md`

See [phase-6.md](phase-6.md).

---

## Notes

- **Phase ordering is important:** Phase 1 unblocks the RLS test in
  Phase 6. Phase 3 is a prerequisite for Phase 5's zone-aware care.
  Phases 2 and 4 are independent and can slot in wherever.
- **Not in scope:** payments/paywall, Apple/Google social sign-in,
  multi-orchard UI, push notifications wiring (already planned
  separately). Fruit-icon and UI-polish items from
  `plans-2026-04-10b` are independent and not repeated here.
- **Mock data:** `lib/mocks/` files stay in the repo as test fixtures
  but should be imported from test code only, not production paths
  (carryover rule from prior plan).
