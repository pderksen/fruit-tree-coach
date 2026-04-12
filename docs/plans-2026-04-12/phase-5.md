# Phase 5: Care Logic Engine

## Problem

Tree creation currently inserts three hardcoded starter tasks
(`lib/services/tree-service.ts:7-42`) regardless of tree type, age,
or zone. This is the product's core value prop — "tell me what to do
this week for *my* tree in *my* climate" — and right now every tree
gets the same generic list. Tasks don't regenerate when seasons
change. Zone isn't consulted. Age bracket is stored on `Tree`
(`lib/types.ts:129`) but never read.

This phase builds the engine. Depends on Phase 3 (zone on trees).

## Approach

Design a pure function — no I/O, no React, no Supabase — that takes a
tree's facts and returns a list of recommended tasks. Wrap it with a
service-layer function that persists them. This keeps the care logic
testable in isolation and lets us iterate on horticultural accuracy
without touching the query layer.

### Signature

```ts
// lib/care/task-generator.ts
export function generateCareTasksForTree(
  tree: Tree,
  zone: string,
  season: SeasonStage,
  now: Date = new Date()
): GeneratedTask[];
```

`GeneratedTask` is a Task minus DB-assigned fields (`id`, `created_at`,
`tree_id`). The caller (`tree-service`) attaches those.

### Inputs the generator must consider

- `tree.type` (FruitTreeType) — drives basic needs (citrus ≠ apple)
- `tree.category` (pome / stone / citrus / berry / nut / tropical) —
  drives pruning timing, pest windows
- `tree.ageBracket` (newly_planted / young / mature / old) — a
  newly-planted tree needs watering and staking, a mature tree
  needs thinning
- `zone` — hardiness zone shifts timing (zone 5 blooms later than
  zone 9)
- `season` (SeasonStage) — current season gates which tasks apply
- `now` — used to compute due dates relative to the season window

### Sources

Every recommendation must cite a source in a code comment (CLAUDE.md
rule). Start from what's already in `lib/care/`:

- `lib/care/watering.ts` — watering frequency by category
- `lib/care/season-order.ts` — season rotation
- `lib/care/research-sources.ts` — citation list

## Tasks

1. **Design the rule data shape.** Rather than a giant switch
   statement, model rules as data:
   ```ts
   type CareRule = {
     id: string;
     appliesTo: (tree: Tree, zone: string, season: SeasonStage) => boolean;
     build: (tree: Tree, now: Date) => GeneratedTask;
     source: string; // extension service URL or citation
   };
   ```
   An array of `CareRule` is easy to test, easy to extend, and keeps
   each recommendation close to its citation.

2. **Seed the initial rule set.** Start small — 10-15 rules covering
   the highest-impact care tasks. Suggested seeds:
   - Winter pruning (pome/stone, mature/old, dormant season)
   - Dormant oil spray (pome/stone, late-winter)
   - Deep watering (newly-planted, any active-growth season)
   - Fruit thinning (pome/stone, young/mature, post-bloom)
   - Summer pruning (stone fruit, summer)
   - Fertilize at bud-break (all, spring, zone-adjusted timing)
   - Mulch refresh (all, spring or fall)
   - Citrus-specific: frost protection (citrus, zones 8-10, winter)
   - Pest scouting (any, growing season)
   - Harvest window reminder (by category + zone)

3. **Write `lib/care/task-generator.ts`.** Export
   `generateCareTasksForTree` and the `CareRule` type. Keep under
   200 lines (CLAUDE.md rule); split rule definitions into
   `lib/care/rules/*.ts` if needed.

4. **Wire into tree creation.** Replace the hardcoded
   `STARTER_TASKS` block in `lib/services/tree-service.ts:7-42`
   with a call to the generator. Read zone from the tree (Phase 3
   denormalization) and current season from `lib/care/season-order.ts`.

5. **Wire into orchard zone changes.** When a user updates their zone
   (via `useUpdateOrchard`), regenerate care tasks for every tree in
   that orchard. Consider: do we delete existing incomplete tasks
   and replace, or diff? Recommendation: delete incomplete + regen,
   preserve completed task history. Document the choice.

6. **Wire into season rollover.** Add a service function
   `regenerateSeasonalTasks(treeId)` that the app can call when the
   season ticks over. For now, call it lazily on tree detail screen
   load if the last generation was in a prior season. A background
   cron is out of scope; lazy regen is fine.

7. **Move static tips to guides.** `EXPERT_TIPS` and `COACH_TIPS`
   currently live as static lookups. Move them into the `guides`
   table (depends on `plans-2026-04-11-supabase` Phase 10). Each
   generated task links via `guide_task_id` to the right guide entry.

8. **Placeholder assets audit.** Grep for `TODO: Pruning diagram` and
   similar placeholders in `app/tree/guide/[taskId].tsx`. File each
   as a separate content task (not blocking this phase).

## Out of scope

- Hyper-local calibration (microclimate, soil type, slope). Zone is
  the granularity we're supporting.
- Weather API integration (real-time frost warnings). Separate phase.
- ML / generated recommendations. Rules + citations only.
- Push notifications on new tasks. Already planned in a separate
  notifications initiative.

## Done when

- [ ] `lib/care/task-generator.ts` exists with the rule-data shape
- [ ] At least 10 seeded rules, each with a source citation
- [ ] `tree-service` creates tasks via the generator, no hardcoded
      `STARTER_TASKS`
- [ ] Orchard zone change triggers regeneration across the orchard's
      trees
- [ ] Lazy season-rollover regen on tree detail screen
- [ ] `EXPERT_TIPS` / `COACH_TIPS` migrated to the `guides` table
      (or ticketed if Phase 10 of prior plan isn't done yet)
- [ ] Test cases: apple sapling zone 5a vs zone 9b produces
      different tasks (covered in Phase 6)
- [ ] `npm run typecheck && npm test && npm run lint` pass
