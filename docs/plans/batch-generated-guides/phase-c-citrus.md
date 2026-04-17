# Phase C — Citrus per-task guides

Orange, Lime, Grapefruit, Mandarin, Tangelo, Tangerine, Kumquat. Care
pattern is close to Lemon (already shipped in Phase A), so most content
lines up with the Lemon pilot — the species-level divergence is in
harvest timing and cold tolerance.

## Trees in scope

Seven citrus species. All share: full-sun siting, 3–4× annual feeding
with a citrus-specific fertilizer containing micronutrients,
pest-inspection cadence dominated by scale / aphid / citrus leafminer /
Asian citrus psyllid, and "snip, don''t pull" harvest technique.

- **Orange** (sweet, `Citrus sinensis`) — the workhorse citrus. Early
  (Hamlin), midseason (Pineapple), and late (Valencia) varieties
  stagger harvest Nov–Jul.
- **Lime** (Persian and Key, `Citrus × latifolia` and `Citrus
  aurantiifolia`) — least cold-hardy of common citrus. Persian picked
  green, Key picked yellow.
- **Grapefruit** (`Citrus × paradisi`) — largest citrus tree, long
  holding window on the tree (Nov into spring). Takes ~5 years to
  fruit from grafted nursery stock.
- **Mandarin** (`Citrus reticulata`) — satsuma mandarins are the
  cold-hardiest common citrus; often ripe while skin is still partly
  green (taste, don''t look).
- **Tangelo** (mandarin × grapefruit/pummelo hybrid) — Minneola is the
  popular variety; needs a compatible pollenizer within bee range for
  good fruit set, and is especially susceptible to Alternaria brown
  spot.
- **Tangerine** (also `Citrus reticulata`) — mandarin-family; loose
  peel; prone to alternate bearing.
- **Kumquat** (`Citrus japonica`, sometimes `Fortunella`) — eaten
  whole, skin and all; the sweet part is the skin, the flesh is tart.
  Cold-hardiest of the group (brief dips to ~20 °F tolerated on
  Nagami).

## Per-tree template shape

Keeping to the Lemon pilot shape where possible — citrus care is
repetitive by design, so we don''t invent per-tree divergence that
isn''t grounded in a cited source. Each tree gets 4–5 task templates
across these categories:

| Tree | feeding | monitoring | protection | harvesting |
|---|---|---|---|---|
| Orange | 3–4× citrus feed Feb–Sep | Scale / aphid / leafminer / ACP-HLB watch | Frost protection (marginal zones) | Taste-test by variety; Nov start for Hamlin, May for Valencia |
| Lime | Citrus feed; container-frequent | Same pest mix as other citrus | Frost protection (most cold-sensitive) | Persian green / Key yellow |
| Grapefruit | 3× citrus feed; heavy feeders | Same pest mix | (skip separate protection — hardy enough in zone 9a+ for most US plantings) | Long Nov–Mar/Apr window |
| Mandarin | Citrus feed; micronutrients | Same pest mix | Frost protection (satsumas tolerate brief mid-20s) | Taste, not color; Dec–Apr |
| Tangelo | Citrus feed | Alternaria brown spot + pest mix (Minneola-specific) | Frost protection (Florida central/south) | Dec–Feb; twist-pick bell-shape |
| Tangerine | Citrus feed | Same pest mix; alternate-bearing watch | Frost protection (zone 9a+) | Taste + color; thin in heavy years |
| Kumquat | Citrus feed; less nitrogen | Same pest mix | (skip — Nagami most cold-hardy citrus; covered by overview) | Whole-fruit harvest cue |

Not every tree gets 5 categories. Following the plan doc''s guidance
("some trees don''t need 5 categories — declare fewer templates rather
than invent filler"), Grapefruit and Kumquat skip `protection` because
they are hardy enough in the zones where they''re commonly grown;
`pruning` is light for all citrus and is already well-covered by the
overview guide — we skip pruning templates unless a species has a
genuinely unique shape requirement.

Per-tree task IDs: `<slug>-feeding`, `<slug>-monitoring`,
`<slug>-protection`, `<slug>-harvest` (note: `harvest` not
`harvesting` on the template ID; the category value is `harvesting`).

Expected total: ~7 templates × ~4 categories = ~26 template entries,
~20–25 new guide rows (some categories share wording across trees; per
the unique `(tree_type, task_category)` index each tree still gets its
own guide row, but the shared content saves research time).

## Sources to use

Per the plan''s ranked domain list:

- **UC IPM** — Asian citrus psyllid / HLB, scale and aphid
  identification, citrus leafminer tolerance on mature trees, brown
  rot control.
- **UC ANR / UC Master Gardeners** — home-orchard citrus care,
  watering and feeding cadence, harvest cues.
- **Texas A&M AgriLife Extension** — home citrus guidance for the
  Gulf/Southwest; particularly useful for Kumquat and cold-hardy
  mandarin advice.
- **UF/IFAS EDIS** — Florida-specific orange, grapefruit, tangelo
  (Minneola) guidance; HLB context.
- **Clemson HGIC** — container citrus, Gulf-Coast citrus culture.

Source citation conventions match Phase A/B:
- `source` column: short semicolon-delimited list (e.g.
  `'UC IPM; UF/IFAS EDIS; Clemson HGIC'`)
- `researchNotes` field: full page titles in doubled-up single quotes

## Per-tree migration shape

One migration per tree — matches Phase A/B.
- Naming: `<timestamp>_guides_<tree>_per_task.sql`
- IDs prefixed by tree slug: `orange-feeding`, `kumquat-harvesting`,
  etc.
- `approved = true` on insert (review happens on the SQL diff before
  commit)
- Doubled apostrophes inside the JSON body — grep for `[a-z]'[a-z]`
  before push

## Verification (per Phase C in per-task-rollout.md)

- `npm run typecheck` / `npm test` / `npm run lint` clean
- Spot-check one tree''s guide screen in the simulator (pick Tangelo —
  most distinctive content with Alternaria + pollenizer pairing)
- DB snapshot to `backups/phase-c-citrus-2026-04-16.json` via the
  `UNION ALL` / `jsonb_agg` shape

## Out of scope for Phase C

- Pruning-specific per-task guides (light pruning covered in overview)
- Variety-specific timing within a species (Hamlin vs. Valencia
  harvest windows — overview already calls out the variety split)
- Tart-citrus / bitter-orange / calamondin (not in `FRUIT_TREE_TYPES`)
- Feedback on shared-content guides whether to collapse or keep
  per-tree — the unique `(tree_type, task_category)` index forces a
  row per tree, so we ship per-tree rows with lightly customized
  prose. Revisit if the duplication becomes a maintenance burden.

## Per-tree quirks to capture (summary)

- **Minneola tangelo** needs a compatible pollenizer (Temple,
  Sunburst, or Fallglo) within 30–50 feet; Alternaria brown spot is
  the signature disease watch.
- **Kumquat** is eaten whole; the sweet part is the skin.
- **Mandarin (satsuma)** can be ripe while still partly green —
  taste-test, don''t trust color.
- **Persian lime** picked green and full-sized; **Key lime** picked
  yellow.
- **Tangerine** alternate-bears — thin in heavy years to smooth the
  cycle.
- **Grapefruit** sweetness increases with time on the tree; long
  holding window is a feature, not a flaw.
