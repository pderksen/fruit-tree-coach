# Phase 1: Schema approval gate (DONE)

Status: complete. Migration applied to remote on 2026-04-12.

## What shipped
File: `supabase/migrations/20260412230000_guides_approval_and_lookup.sql`

Added to `public.guides`:
- `approved boolean not null default false` — gates visibility via RLS
- `tree_type text` — lookup key for (type, category) pairs
- `task_category text` — lookup key for (type, category) pairs

Indexes + policies:
- Partial unique index `guides_type_category_idx` on
  `(tree_type, task_category)` where both are non-null. Prevents
  duplicate guides for the same pair; the partial predicate lets
  existing hand-seeded rows (which have null tree_type) coexist
- RLS policy swapped from "readable by authenticated" to
  "approved and readable by authenticated". Unapproved rows are
  invisible to the client until a reviewer flips the flag

Backfill:
- All 15 hand-seeded rows flipped to `approved = true` in the same
  migration — they were human-reviewed by virtue of being
  hand-written

## Why this still matters after pivoting to batch generation
The original plan in this folder had Phase 1 feeding an edge function
that generated guides at runtime. We pivoted to offline batch
generation in Claude Code + SQL migrations (see `all-phases.md`).
The approval column is still valuable:
- Batch migrations can ship with `approved = false` if we want a
  second pass of review in the Supabase dashboard
- If a guide is later found to be wrong, flipping `approved = false`
  hides it from users without a destructive delete
- Leaves the door open for on-demand generation later without a
  second schema change
