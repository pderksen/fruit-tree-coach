# Per-task guide rollout for all fruits

## What this plan covers
Closes per-task guide coverage for every tree in `FRUIT_TREE_TYPES`.
Peach shipped the pilot (`20260415010312_guides_peach_per_task.sql`);
this plan rolls the same shape out across the remaining 24 trees,
grouped into reviewable phases.

## Where we are today
- `FRUIT_TREE_TYPES` (`lib/fruit-tree-data.ts`) has 25 species
- Overview guides: 25 / 25 (all approved; done in earlier phases)
- Per-task guides: **Peach only** — 4 rows (protection / pruning /
  monitoring / harvesting)
- Task templates (`lib/care/task-templates.ts`): only Apple, Peach,
  Lemon, Fig. Every other tree has no calendar tasks, which means
  the guide screen can't open — per-task guides aren't reachable
  without templates first

## How each tree reaches "done"
For every species:
1. **Template** — entry in `lib/care/task-templates.ts` declaring a
   `TaskTemplate[]` with seasonal windows grounded in a cited
   US-extension source
2. **Per-task guides** — one migration per tree, one guide per
   distinct `task_category` declared by the template, following the
   shape of `20260415010312_guides_peach_per_task.sql`
3. **Verification** — `npm run typecheck` + `npm test` + `npm run lint`,
   manual seed + open-guide smoke in simulator, DB snapshot to
   `backups/<short-reason>-<date>.json`

Constraints carried from the pilot:
- `(tree_type, task_category)` is unique — two tasks in the same
  category collapse to one guide (Lemon feeding, Fig monitoring
  already demonstrate this)
- American English (`20260412224911_fix_guides_american_english.sql`)
- No horticultural claims without a cited extension source
- `productRecommendations` stays `[]` until the affiliate pass
- No UI changes — `lib/services/guide-service.ts` already prefers
  per-task over overview

## Phases

### Phase A — Finish the four species with templates (NEXT)
Apple, Lemon, Fig each get a per-task migration matching Peach.
- Apple (5 guides): pruning, protection, feeding, monitoring
  (thinning), harvesting
- Lemon (3 guides): feeding, monitoring (scale/aphid), harvesting.
  Template has two `feeding` tasks — one guide covers both
- Fig (2 guides): monitoring (drainage + fig beetle combined),
  harvesting

Sources: Oregon State PNW 400 / UMN / Penn State / UGA for Apple;
UC IPM / UC Master Gardeners / Clemson for Lemon; Texas A&M /
UC IPM / Clemson for Fig.

Expected: 3 migrations, +10 guide rows.

### Phase B — Stone fruit (4 trees)
Cherry, Plum, Apricot, Nectarine. Care pattern close to Peach.
- `pruning` — dormant, open-vase for Plum/Apricot/Nectarine; sweet
  cherry uses modified central leader (per-tree difference)
- `protection` — dormant oil + copper. Brown rot is the headline for
  cherry; bacterial canker for apricot
- `monitoring` — fruit thinning (apricot, nectarine, plum). Sweet
  cherry not thinned
- `harvesting` — per-tree color / firmness / pit-color cues

Sources: Clemson HGIC, UGA Extension, UC IPM, Michigan State
Extension (sweet cherry).
Expected: 4 template entries, ~14 new guide rows.

### Phase C — Citrus (7 trees)
Orange, Lime, Grapefruit, Mandarin, Tangelo, Tangerine, Kumquat. Care
pattern close to Lemon; harvest timing is where trees actually
diverge.
- `feeding` — 3–4× per year; same content across citrus (likely one
  shared guide body, per-tree IDs)
- `monitoring` — scale / aphid / citrus leafminer inspection
- `protection` — frost protection where zones matter (Kumquat most
  cold-hardy; Lime least)
- `harvesting` — per-species cues. Navel vs. Valencia windows differ;
  Kumquat eaten skin-on

Sources: UC IPM, UC ANR Home Orchard, Texas A&M AgriLife,
Clemson HGIC.
Expected: 7 template entries, ~20 new guide rows (feeding shared
content but rows-per-tree because of the unique index; consider
whether to use separate IDs with the same JSON body or a thinner
"see citrus feeding" message — decide in the phase's own plan file).

### Phase D — Pome + subtropical (5 trees)
Pear, Pomegranate, Persimmon, Avocado, Olive.
- **Pear** close to Apple — pruning, fireblight watch, thinning,
  harvest (picked unripe, ripens off tree — opposite of Peach)
- **Pomegranate** — minimal pruning, sun-scald monitoring, split-fruit
  harvest cue
- **Persimmon** — astringent vs. non-astringent harvest logic is the
  headline
- **Avocado** — frost protection (zone 9b+), sparse pruning, bloom-drop
  monitoring
- **Olive** — alternate bearing, pruning for fruit, olive fruit fly
  monitoring in CA

Sources: UC ANR, UF/IFAS, Texas A&M, UGA Extension, Clemson HGIC.
Expected: 5 template entries, ~17 new guide rows.

### Phase E — Tropical + berry (5 trees)
Date, Mango, Guava, Mulberry, Pawpaw.
Thinnest US-extension coverage — Mulberry and Pawpaw already flagged
in `all-phases.md`'s Revisit section. Lean on UF/IFAS (mango, guava),
Texas A&M (date, mulberry), Kentucky State / Ohio State (pawpaw).
If extension coverage for a category is thin, ship fewer guides
rather than invent advice — overview guide already serves as the
fallback.
Expected: 5 template entries, ~12 new guide rows.

## Process per phase
1. Write a short plan file in this folder (`phase-b-stone-fruit.md`
   etc.) before coding — covers per-tree template shape, the exact
   source list for each tree, and any per-tree quirks
2. Edit `task-templates.ts` adding that phase's trees. Split into
   `lib/care/task-templates/<category>.ts` + a barrel once the main
   file crosses ~200 lines (per CLAUDE.md's file-size convention)
3. One migration per tree (or one per phase if the phase is small)
   for the per-task guides
4. Run `typecheck` / `test` / `lint`; cite `docs/testing.md` steps
   exercised
5. `npx supabase db push`; snapshot `backups/<short>-<date>.json`
6. Delete this folder once the last phase ships — git preserves the
   history

## Risks / things to watch
- **Template sprawl**: `task-templates.ts` will grow past ~200 lines
  quickly. Split per-category before it hurts
- **Thin extension coverage** (Mulberry, Pawpaw, Date): don't paper
  over with folklore. If only 2 categories are defensible, ship 2
- **Seed-time stale filter**: dormant-season tasks (Jan–Feb pruning)
  shouldn't be seeded as urgent when a user adds a tree in July —
  `selectSeedableTemplates` already handles this, but re-check after
  each phase ships
- **Zone shifts still deferred**: templates use typical-zone windows
  from the cited source. User-zone-shifted windows are post-v1
- **Unique `(tree_type, task_category)` constraint**: two tasks in
  the same category collapse to one guide. Pick which task the
  guide describes first and document in `researchNotes`
- **Some trees don't need 5 categories**: declare fewer templates
  rather than invent filler. Pomegranate barely needs pruning;
  Persimmon barely needs protection

## Acceptance (rollout complete)
- Every species in `FRUIT_TREE_TYPES` declares at least one task
  template
- `fetchGuideByCategory` returns a per-task guide (not overview
  fallback) for every category any template declares
- `npm run typecheck` / `npm test` / `npm run lint` clean after the
  last phase
- One `backups/` snapshot per phase

## Out of scope
- Zone-aware timing shifts
- Variety-level differences (Granny vs. Honeycrisp windows)
- On-demand guide generation (rejected in `all-phases.md`)
- New species beyond the current 25 in `FRUIT_TREE_TYPES`
