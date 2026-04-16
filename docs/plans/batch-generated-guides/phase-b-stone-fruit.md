# Phase B — Stone fruit per-task guides

Cherry, Plum, Apricot, Nectarine. Care pattern is close to Peach
(already shipped), so we lean on the same pruning/protection/thinning/
harvest spine and only diverge where biology actually differs.

## Trees in scope

- **Cherry** (sweet — `Prunus avium`). Most US backyard cherries are sweet
  cherry; tart/sour cherry differs in pruning shape and harvest timing.
  We'll write the guide against sweet cherry (the common case) and call
  out the tart-cherry difference in `researchNotes` where it matters.
- **Plum** (European + Japanese in one guide). European plums (`P. domestica`,
  e.g. Stanley) are self-fertile and ripen later; Japanese plums
  (`P. salicina`, e.g. Santa Rosa) need a pollinizer and ripen earlier.
  Templates use European-plum windows (the more common backyard tree)
  with the Japanese difference noted in the guide.
- **Apricot** (`Prunus armeniaca`). Bacterial canker is the headline
  protection issue; thinning and pruning are close to peach.
- **Nectarine** (`Prunus persica` var. `nucipersica`). Functionally a
  fuzzless peach — same pruning, same leaf curl risk, same thinning
  approach. Harvest cues read like peach but the smooth skin shows
  background color more clearly.

## Per-tree template shape

5 categories per tree (pruning, protection, feeding, monitoring,
harvesting), one template per category to keep the unique
`(tree_type, task_category)` constraint clean.

| Tree | pruning | protection | feeding | monitoring | harvesting |
|---|---|---|---|---|---|
| Cherry | Modified central leader (sweet); late winter | Brown rot blossom blight — bloom-time fungicide | Pre-bloom N; rate by tree age | Bird netting + cherry fruit fly trap watch | Pick by color + stem-on; no twist |
| Plum | Open-vase; late winter | Black knot pruning + dormant copper | Pre-bloom balanced N | Fruit thinning to 4–6 in spacing | Color + slight softness; ripens off tree |
| Apricot | Open-vase; **late summer** to reduce Eutypa risk | Bacterial canker — copper at leaf-fall | Light pre-bloom N (over-feeding worsens canker) | Fruit thinning to 2–4 in spacing | Color + give; brief harvest window |
| Nectarine | Open-vase; late winter (same as peach) | Peach leaf curl — dormant copper (same as peach) | Pre-bloom N; same approach as peach | Fruit thinning to 6–8 in spacing | Background color shift; multiple passes |

The two genuine per-tree quirks to get right:
1. **Apricot pruning timing** — extension sources are explicit that
   apricots should be pruned in late summer (not dormant) because
   Eutypa dieback infects fresh dormant cuts. This is the opposite
   of peach/nectarine/plum.
2. **Sweet cherry pruning shape** — modified central leader (not
   open-vase). Tart cherry uses open-vase; we'll note this in the
   guide.

## Sources to use (per the plan's domain ranking)

Researched on-demand via WebSearch scoped to extension domains
(per CLAUDE.md guidance — don't guess deep URLs). Expected hits:

- **Cherry** — Michigan State Extension (sweet cherry is a major MI crop),
  WSU Extension (PNW production), UC IPM (brown rot blossom blight,
  cherry fruit fly), Cornell CALS / NYSIPM
- **Plum** — Clemson HGIC, UGA Extension, Cornell (black knot), PSU
  (black knot also)
- **Apricot** — UC ANR / UC IPM (CA is the primary US production state),
  Utah State Extension
- **Nectarine** — Clemson HGIC, UC IPM, UGA — same Prunus complex as
  peach, sources overlap

Source citation conventions stay the same as Phase A:
- `source` column: short semicolon-delimited list (e.g.
  `'Clemson HGIC; UC IPM; MSU Extension'`)
- `researchNotes` field inside the JSON: full page titles in
  doubled-up single quotes

## Splitting `task-templates.ts` (prerequisite from per-task-rollout.md)

Current file is 270 lines with 4 species. Adding 4 stone-fruit trees
of ~5 templates each pushes it past 450 — split before adding.

**Shape:** per-species files at `lib/care/task-templates/<species>.ts`
plus a barrel `lib/care/task-templates/index.ts` re-exporting the same
public API (`TaskTemplate`, `TASK_TEMPLATES`, `getTemplatesForSpecies`,
`selectSeedableTemplates`).

Why per-species over per-category:
- Most edits are per-tree (tweak peach windows when MSU updates a
  guide) — per-species files keep the diff scoped
- Adding a new tree in later phases is one new file + one barrel line,
  no cross-file churn
- Shared types stay in `task-templates/index.ts` so per-species files
  only import `TaskTemplate`

Old import path `@/lib/care/task-templates` keeps working — the barrel
re-exports everything. Existing callers don't change.

## Per-tree migration shape

One migration per tree: `<timestamp>_guides_<tree>_per_task.sql`. Same
shape as `20260415010312_guides_peach_per_task.sql`:
- IDs prefixed by tree slug: `cherry-pruning`, `plum-monitoring`, etc.
- `approved = true` on insert (review happens on the SQL diff before
  commit)
- Inside the JSON body, doubled apostrophes — verified by a grep for
  `[a-z]'[a-z]` before push

Each migration ships ~5 guide rows. Total expected: 4 templates ×
5 categories = ~20 new guide rows + 4 template entries.

## Verification (per Phase B in per-task-rollout.md)

- `npm run typecheck` / `npm test` / `npm run lint` clean
- Spot-check one tree's guide screen in the simulator (one per phase
  is enough — pick Cherry since it has the most distinctive content)
- DB snapshot to `backups/phase-b-stone-fruit-2026-04-16.json` via
  the `UNION ALL` / `jsonb_agg` shape

## Out of scope for Phase B

- Tart cherry-specific templates (sweet cherry covers the common case;
  add tart only if a real user adds a tart cherry tree)
- Variety-specific timing within a species (Stanley vs. Santa Rosa
  windows)
- Fertilizer product recommendations — affiliate pass is a separate
  later step (`productRecommendations: []` for now)
