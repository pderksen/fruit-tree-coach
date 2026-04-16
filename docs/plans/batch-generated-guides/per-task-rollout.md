# Per-task guide rollout for all fruits

## What this plan covers
Closes per-task guide coverage for every tree in `FRUIT_TREE_TYPES`.
Peach shipped the pilot (`20260415010312_guides_peach_per_task.sql`);
this plan rolls the same shape out across the remaining 24 trees,
grouped into reviewable phases.

## Where we are today
- `FRUIT_TREE_TYPES` (`lib/fruit-tree-data.ts`) has 25 species
- Overview guides: 25 / 25 (all approved; done in earlier phases)
- Per-task guides: **Peach, Apple, Lemon, Fig, Cherry, Plum, Apricot,
  Nectarine** — 34 rows (Peach 4, Apple 5, Lemon 3, Fig 2, Cherry 5,
  Plum 5, Apricot 5, Nectarine 5). Phases A and B complete
- Task templates (`lib/care/task-templates/<species>.ts` + barrel):
  Apple, Peach, Lemon, Fig, Cherry, Plum, Apricot, Nectarine. The
  remaining 17 trees still need templates before their per-task
  guides can ship

## How each tree reaches "done"
For every species:
1. **Template** — entry in `lib/care/task-templates.ts` declaring a
   `TaskTemplate[]` with seasonal windows grounded in a cited
   US-extension source
2. **Per-task guides** — one migration per tree (locked in after Phase
   A — three trees = three migrations), one guide per distinct
   `task_category` declared by the template, following the shape of
   `20260415010312_guides_peach_per_task.sql`
3. **Verification** — `npm run typecheck` + `npm test` + `npm run lint`
   all clean. These migrations are data-only so the full UI smoke from
   `docs/testing.md` is not required; a spot-check that the guide
   screen opens the new per-task row for one tree per phase is enough.
   DB snapshot once per phase to
   `backups/phase-<letter>-<short>-<date>.json`

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

### Phase A — Finish the four species with templates (DONE)
Apple, Lemon, Fig each got a per-task migration matching Peach.
- Apple (5 guides): pruning, protection, feeding, monitoring
  (thinning), harvesting — `20260416181748_guides_apple_per_task.sql`
- Lemon (3 guides): feeding (one guide covers both feeding tasks),
  monitoring, harvesting — `20260416181949_guides_lemon_per_task.sql`
- Fig (2 guides): monitoring (drainage + fig beetle combined),
  harvesting — `20260416182121_guides_fig_per_task.sql`

Sources used: UMN / Oregon State PNW 400 / WSU / Penn State / UGA /
UC IPM for Apple; UC Master Gardeners / UC IPM / Clemson for Lemon;
Texas A&M AgriLife / UC IPM / Clemson for Fig.

Shipped: 3 migrations, +10 guide rows. Backup
`backups/phase-a-per-task-guides-2026-04-16.json`.

### Phase B — Stone fruit (4 trees) (DONE)
Cherry, Plum, Apricot, Nectarine. All four got templates + per-task
guides covering pruning, protection, feeding, monitoring, harvesting.

Per-tree quirks captured:
- **Cherry**: summer pruning (not dormant) to avoid silver leaf and
  bacterial canker on fresh cuts; modified central leader, not
  open-vase
- **Apricot**: late-summer pruning (July–August) to avoid Eutypa
  dieback infection; leaf-fall copper for bacterial canker
- **Plum**: black knot removal during dormant pruning is the
  headline protection job
- **Nectarine**: leaf curl + open-vase + thinning, all mirroring peach
  (botanically the same species)

Prerequisite was completed before adding new trees: split
`lib/care/task-templates.ts` into per-species files at
`lib/care/task-templates/<species>.ts` + a barrel `index.ts`. Old
import path `@/lib/care/task-templates` keeps working unchanged.

Shipped: 4 migrations (cherry, plum, apricot, nectarine), +20 guide
rows, 4 template files. Backup
`backups/phase-b-stone-fruit-2026-04-16.json`. Sources: MSU Extension
(PNW 667), UC IPM, USU Extension, UGA Extension, PSU Extension, UMN
Extension, Clemson HGIC, UC ANR, University of Maryland Extension.

### Phase C — Citrus (7 trees) (NEXT)
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
2. Add that phase's trees to `lib/care/task-templates.ts` (or its
   per-species split once that lands — see Phase B prerequisite)
3. One migration per tree for the per-task guides — each named
   `<timestamp>_guides_<tree>_per_task.sql`
4. Run `typecheck` / `test` / `lint` — all clean. No full UI smoke
   needed for data-only guide rows; spot-check one guide screen in the
   simulator per phase
5. `npx supabase db push`; snapshot
   `backups/phase-<letter>-<short>-<date>.json` via the
   `UNION ALL` / `jsonb_agg` shape in CLAUDE.md's ad-hoc snapshot
   workflow
6. Delete this folder once the last phase ships — git preserves the
   history

## Risks / things to watch
- **Thin extension coverage** (Mulberry, Pawpaw, Date): don't paper
  over with folklore. If only 2 categories are defensible, ship 2
- **Seed-time stale filter**: dormant-season tasks (Jan–Feb pruning)
  shouldn't be seeded as urgent when a user adds a tree in July —
  `selectSeedableTemplates` already handles this, but re-check after
  each phase ships
- **Zone shifts still deferred**: templates use typical-zone windows
  from the cited source. User-zone-shifted windows are post-v1
- **Unique `(tree_type, task_category)` constraint**: two tasks in
  the same category collapse to one guide (Lemon feeding and Fig
  monitoring demonstrated this in Phase A). Document which task the
  guide was written against in `researchNotes`
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
