# Phase 3: Zone-Aware Trees (Location Plumbing)

## Problem

Location data lives on the orchard, not the tree:

- `orchards.zip_code` and `orchards.zone` are set via
  `hooks/use-orchards.ts:74-89` (zip → USDA zone → save to orchard)
- Trees have no `zip_code` or `zone` column, and no direct reference
  to their orchard's location fields
- `useDefaultOrchard()` at `hooks/use-orchards.ts:26-29` hard-codes
  `data?.[0]` — the single-orchard assumption isn't documented

Consequences:
- The care engine (Phase 5) can't produce zone-specific tasks without
  always joining through orchard
- If we ever support multi-orchard, trees would need to know which
  zone to care about — the current schema can't express that cleanly
- The USDA zip→zone lookup in `lib/zone-lookup.ts:244-270` has a 5s
  timeout that hangs users on slow networks

## Decision to make

**Denormalize vs. always-join** for zone on trees. Recommendation:
**denormalize** (add `zone` to `trees` at write-time). Reasoning:

- Care generation reads zone on every task computation — join overhead
  adds up
- Offline-first: tree + zone in one row simplifies cache shape for
  TanStack Query
- When a user changes their orchard's zone, we already need to
  regenerate care tasks across all trees — that same code path can
  update each tree's denormalized `zone` column

If we go with always-join instead: document it, expose a
`useTreeWithZone(id)` hook, and make the care engine take
`(tree, orchard)` instead of `(tree, zone)`.

## Tasks

1. **Write an ADR-style note** in this file or a new
   `docs/decisions/zone-denormalization.md` capturing the chosen
   pattern and the tradeoff. Keep it to one page.

2. **Schema migration** (if denormalizing): `npx supabase migration
   new add_zone_to_trees`. Add `zone TEXT` column to `trees`,
   nullable initially. Backfill from the orchard's zone for existing
   rows in the same migration.

3. **Update `tree-service.ts` create path.** New trees read zone from
   their orchard at creation time and persist it on the tree row.

4. **Update `orchard-service.ts` zone-change path.** When an orchard's
   zone changes (via `useUpdateOrchard`), update every tree in that
   orchard in the same transaction (or a mutation batch with proper
   TanStack Query invalidation).

5. **Update `lib/schemas.ts`.** Add `zone` to the tree schema. Decide
   whether it's required or nullable (nullable until backfill
   completes, then required).

6. **Document the single-orchard assumption.** Header comment in
   `hooks/use-orchards.ts` above `useDefaultOrchard()` explaining
   that multi-orchard isn't supported yet, and what would need to
   change if it were.

7. **Fix the USDA timeout.** In `lib/zone-lookup.ts:244-270`:
   - Shorten the fetch timeout from 5s to 2s
   - On timeout or error, fall through to the static offline table
     (already exists below in the same file) silently — no user-
     facing error unless *both* paths fail
   - Expand the static offline table coverage if there are common
     zip ranges missing (spot-check a few)

8. **Remove `zip_code` from `Tree` if it was added speculatively.**
   Confirm `lib/types.ts:81` and `lib/schemas.ts` — the `Tree` type
   should have `zone` but the canonical `zip_code` stays on orchard
   only. No two sources of truth.

## Out of scope

- Multi-orchard UI or data model. Single-orchard is fine for the
  foreseeable product; just document the assumption.
- Offline-cache shape redesign. The `networkMode: "offlineFirst"`
  setup from `plans-2026-04-11-supabase` Phase 9b handles this; just
  confirm zone-denorm doesn't break it.

## Done when

- [ ] Decision captured in writing (denormalize vs. always-join)
- [ ] If denormalizing: migration landed + committed to
      `supabase/migrations/`
- [ ] Tree create path persists zone
- [ ] Orchard zone-change propagates to all that orchard's trees
- [ ] `useDefaultOrchard()` has a header comment on the assumption
- [ ] USDA lookup timeout shortened and silent fallback verified
- [ ] No duplicate zip/zone fields between tree and orchard
- [ ] `npm run typecheck && npm test && npm run lint` pass
