# Batch-generated guides (started 2026-04-12)

## Why this folder exists
Only 4 of the 37 supported fruit tree types have guides today
(Apple, Peach, Lemon, Fig — 15 hand-written entries in the seed
migration). Any user who adds a Cherry, Orange, Mango, Avocado, or
anything else sees "Guide not available yet." on every task they
open.

The fix: generate guides in batches using Claude Code as the
summarizer (no runtime API calls, no edge function, no secrets), and
commit each batch as a reviewable SQL migration. This matches the
app's existing principle from CLAUDE.md: *"All schema changes must
land as committed SQL files — git history is the schema history."*
Guide content is content, but keeping it in migrations gives us the
same auditability and rollback story we already rely on for schema.

## Shape of the work
Each (tree type, task category) pair gets one guide. 37 types ×
~5 categories = ~185 pairs, but in practice many pairs collapse (all
citrus share the same pruning guide, all stone fruit share similar
dormant sprays). Realistic target is ~60–80 distinct guides to cover
all supported tree types.

For each pair:
1. Claude Code (in a session like this one) reads the relevant
   extension-service pages via WebFetch — starting from the ranked
   list in `docs/fruit_tree_care_resources.md`
2. Summarizes into the existing `Guide` JSON schema, with sources
   cited in both the `source` column and the `researchNotes` field
3. Writes the guide as a row in a migration SQL file
4. Developer reviews the SQL diff before committing, flips
   `approved = true` (or commits with `approved = false` and flips
   in the dashboard after one more read)

No edge function. No runtime cost. If a user adds a tree type we
haven't generated for yet, the existing "Guide not available yet"
fallback still shows — we just expect to close that gap batch by
batch before public launch.

## Phase 1: Schema approval gate (DONE)
Migration `20260412230000_guides_approval_and_lookup.sql` added
`approved`, `tree_type`, `task_category` columns and swapped the RLS
policy to require `approved = true`. Hand-seeded rows were backfilled
to `approved = true` in the same migration.

This phase is complete and already pushed to the remote DB.

## Per-task guide rollout across all 25 trees (CURRENT)
See [per-task-rollout.md](per-task-rollout.md) — one plan, phased A–E.
Phase A (Apple / Lemon / Fig), Phase B (Cherry / Plum / Apricot /
Nectarine), Phase C (Citrus — Orange, Lime, Grapefruit, Mandarin,
Tangelo, Tangerine, Kumquat), and Phase D (Pome + subtropical — Pear,
Pomegranate, Persimmon, Avocado, Olive) shipped 2026-04-16. Phase E
(Tropical + berry — Date, Mango, Guava, Mulberry, Pawpaw) is next.
Those remaining 5 trees still need task templates added before their
per-task guides can ship.

## Phase 2: Pilot guide + template (CURRENT)
Generate one guide end-to-end to prove the pattern works:
- Pick a pair we can sanity-check against existing guides (e.g.
  Cherry pruning — we don't have one, but we have Apple + Peach
  pruning to compare tone and structure)
- Fetch 1–2 extension pages
- Write the migration SQL
- Review together, refine the prompt/format conventions as needed
- Lock in a template so subsequent batches are mechanical

## Phase 3: Cover all existing tree types (next)
Once the template is dialed in, generate guides in batches of ~5
pairs at a time:
- Each batch becomes one migration file named by scope
  (e.g. `<timestamp>_guides_stone_fruit_pruning.sql`)
- Developer reviews each batch's SQL before committing — this is the
  review gate
- Ship with `approved = true` on commit if the review passed; no
  separate dashboard step needed

Priority order (most likely to be opened by real users first):
1. Pome fruit pruning (Pear, Cherry, Plum — Apple already done)
2. Stone fruit feeding (Peach, Cherry, Plum, Apricot, Nectarine)
3. Citrus pruning + monitoring (Orange, Lime, Grapefruit, Tangerine,
   Kumquat — Lemon already done)
4. Subtropical overview (Pomegranate, Persimmon, Avocado, Olive)
5. Tropical + berry overview (Mango, Guava, Mulberry, Elderberry, etc.)

## Phase 4 (later): Task generation per tree
Today tasks are mock data for 4 specific trees. Before the generated
guides are reachable via the UI for any real user-added tree, we need
logic that creates tasks for a new tree. Likely shape: an edge
function triggered on tree insert (or called from the client after
tree creation) that uses the same ranked sources to decide what tasks
a Mango needs vs a Cherry and when they're due based on the user's
USDA zone. Tasks link to guides via `guide_task_id` pointing at the
(tree_type, task_category) pair.

Start this only after Phase 3 finishes. If guide quality is poor,
fix that before scaling the problem to tasks.

## Revisit
- The source list in `docs/fruit_tree_care_resources.md` was picked
  quickly. Before public launch, audit for licensing, fetch-friendliness,
  and content stability. Tighten the list rather than replace it
- If ~60–80 guides stops being feasible to review by hand, revisit
  on-demand generation. The `approved` column is already there for
  that future path
- **Medlar and Mulberry have thin US Cooperative Extension coverage.**
  Their current overview guides (in migrations `20260413000100` and
  `20260413000700`) draw from broader horticultural references rather
  than grounded extension pages. Revisit when better US extension
  sources become available — possibly from newer state publications
  or by switching to international authoritative sources (RHS, etc.)
  if the app's US-only scope relaxes. Flagged explicitly in each
  guide's `researchNotes` so users see the caveat
