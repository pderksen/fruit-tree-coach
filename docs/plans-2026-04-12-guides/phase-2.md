# Phase 2: Pilot guide + template

## Goal
Generate one guide end-to-end through the batch-migration flow, lock
in conventions, and confirm the output quality matches the
hand-written seed guides (`dt1`…`dt15`) before scaling to ~60 pairs.

## Pilot pair
**Cherry × pruning.** Chosen because:
- Cherry is a common backyard tree with no existing guide
- We have Apple + Peach pruning guides to compare tone and structure
- Pruning is the highest-effort category (most steps, most tool
  specificity), so if the pattern works here it'll work elsewhere

## Template conventions
Each generated guide follows the shape of the existing seed rows:
- `id` is `<type-lowercase>-<category>` (no uuid suffix since we're
  committing one row per pair, no concurrent-write concern)
- `tree_type` and `task_category` set
- `content.treeType` equals the requested type
- `content.title` is `"<Type> <Season/Topic> Guide"` (e.g.
  "Cherry Winter Pruning Guide")
- 4–7 steps, each with a clear action-verb title
- `productRecommendations` left as `[]` — products are curated
  separately and added later
- `content.researchNotes` cites the specific sources used
- `source` column is a human-readable attribution string listing
  the extension services
- `approved` set to `true` on commit after developer review

## Flow for the pilot
1. Fetch 1–2 extension pages on cherry pruning (likely Penn State
   and Oregon State per `docs/fruit_tree_care_resources.md`)
2. Summarize into guide JSON matching the schema
3. Write as INSERT into a new migration file
4. Developer reviews the SQL diff, confirms tone + accuracy
5. `npx supabase db push` applies to remote
6. Open the app, confirm a Cherry pruning task (if one exists)
   links through correctly — or invoke the guide directly via
   the dashboard by setting `tasks.guide_task_id = 'cherry-pruning'`
   on a test task

## Exit criteria for Phase 2
- One pilot guide committed and approved
- A mental template we can apply in Phase 3 without re-deciding
  structural questions each batch
- Any refinements to conventions are added to this doc so batches
  stay consistent

## Known open questions to resolve in the pilot
- Should guides use "you" (imperative) or neutral voice? Existing
  seeds use imperative ("Walk around the tree..."). Keep that.
- Do we want `diagramImage: true` hints in generated guides? Existing
  seeds use them sparingly. Leave off for now — we don't have
  diagrams for most trees yet
- How long should `researchNotes` be? Existing seeds range from
  omitted to 3 sentences. Aim for 2–3 sentences when sources
  genuinely inform the content
