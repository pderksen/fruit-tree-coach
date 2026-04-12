# Phase 10: Guides in Supabase

## Goal
Move step-by-step guide content from `lib/mocks/guides.ts` into
Supabase so guides can be updated without shipping a new app build,
and so the guide screen reads live data like every other surface.

## Why this is separate
Phase 6b rewired the guide screen to load the task from Supabase, but
the guide content itself (steps, tools, product recommendations,
research notes) is still hardcoded in `MOCK_GUIDES` and keyed by
`guide_task_id`. Treating guides as content rather than data lets us
iterate on horticultural copy without a release, and sets up a future
authoring workflow.

## Current state after Phase 6b
- `tasks.guide_task_id` is a free-form text column that links a task
  to a mock guide entry
- `app/tree/guide/[taskId].tsx` loads the task from Supabase, then
  looks up the guide in `MOCK_GUIDES[task.guideTaskId]`
- `lib/mocks/guides.ts` holds `MOCK_GUIDES`, `Guide`, `GuideStep`,
  `ProductRecommendation` types and all content

## Not in scope (static reference data that stays local)
Phase 8a moved three per-fruit-type lookups out of `lib/mocks/` into
`lib/care/` because they're static reference content, not user data:
- `lib/care/expert-tips.ts` (`EXPERT_TIPS`)
- `lib/care/coach-tips.ts` (`COACH_TIPS`)
- `lib/care/season-stage.ts` (`CURRENT_SEASON_STAGE`)

These are intentionally *not* moving to Supabase — they change with
app releases, not per-user, and shipping them in-bundle keeps the UI
instant-on. Only `MOCK_GUIDES` (actual authored guide content) is in
scope for this phase.

## Tasks

### 1. Decide storage shape
Pick one — do not do both:
- **Relational**: `guides`, `guide_steps`, `guide_tools`,
  `guide_products` tables. Normalised, queryable, good if we'll build
  admin/search features later.
- **Document**: single `guides` table with a `jsonb` `content` column
  matching the current `Guide` shape. Less ceremony, fine if guides
  are only ever read whole by the app.

Default recommendation: **document** (jsonb). Guides are read whole,
written rarely, and schema churn is easier in JSON while content is
still evolving.

### 2. Schema migration
Assuming the document shape:
- `guides` table: `id (text pk, matches guide_task_id)`, `content
  (jsonb not null)`, `source (text)`, `updated_at (timestamptz)`
- Optional FK: convert `tasks.guide_task_id` to `references guides(id)`
  only after all existing values are backfilled or nulled
- RLS: read-only for authenticated users; writes via service role only

### 3. Zod schema and service
- Add `guideContentSchema` in `lib/schemas.ts` mirroring the `Guide`
  interface — steps, tools, products, research notes
- Add `guideRowSchema` and `guideSchema` transform
- Create `lib/services/guide-service.ts` with `fetchGuide(id)`
- Every response validated through Zod (CLAUDE.md rule)

### 4. Hook
- `hooks/use-guide.ts` exporting `useGuide(id: string | undefined)`
  backed by TanStack Query
- Cache key: `["guides", id]`
- Guides rarely change — consider a long `staleTime` (e.g. 1 hour)

### 5. Rewire the guide screen
- **File:** `app/tree/guide/[taskId].tsx`
- Replace `MOCK_GUIDES[guideKey]` with `useGuide(guideKey)`
- Handle loading and error states; keep the "Guide not available yet"
  fallback for tasks whose `guide_task_id` has no matching row
- Keep the existing "Mark as done" flow unchanged

### 6. Seeding and authoring
Pick one:
- **One-time seed migration**: convert `MOCK_GUIDES` into an
  `INSERT ... ON CONFLICT DO NOTHING` migration. Simple, version
  controlled, fine if edits are rare.
- **Seed + small admin script**: add a `scripts/sync-guides.ts` that
  upserts guides from a local JSON file — lets us edit guides in the
  repo and push to Supabase manually.
- **Admin UI**: defer. Not worth building until we have real authors.

Default recommendation: **one-time seed migration** now, revisit if
the content actually starts changing often.

### 7. Remove mock imports from production paths
- `MOCK_GUIDES` no longer imported from any `app/` file
- Keep `Guide` and related types either in `lib/types.ts` or exported
  from `lib/services/guide-service.ts` — whichever keeps the import
  graph simpler
- Keep `lib/mocks/guides.ts` only if test fixtures need it

## Files changed
- Supabase migration (new) — table + seed
- `lib/schemas.ts`
- `lib/services/guide-service.ts` (new)
- `hooks/use-guide.ts` (new)
- `app/tree/guide/[taskId].tsx`
- `lib/types.ts` (move `Guide` types if appropriate)
- `lib/mocks/guides.ts` (remove from production import graph)

## Verification
- Opening a task's guide fetches content from Supabase, not the mock
- Editing a guide row in Supabase reflects on next fetch (or after
  cache invalidation)
- Tasks with no matching guide row still show the graceful fallback
- `npm run typecheck`, `npm run lint`, `npm test` pass
- Manual QA: at least one pruning guide and one feeding guide render
  end to end on iOS and Android
