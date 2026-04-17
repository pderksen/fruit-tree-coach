# Phase D — Pome + subtropical per-task guides

Pear, Pomegranate, Persimmon, Avocado, Olive. The group is grab-bag by
necessity — Pear fits the pome pattern (close to Apple), while the
other four are subtropical species with distinct care shapes. Each
tree gets its own template file + migration; shared patterns between
species are not forced.

## Trees in scope

- **Pear** (`Pyrus communis`) — pome fruit, closest to Apple. Dormant
  pruning (central-leader or modified central-leader), fireblight is
  the dominant disease watch in the East, thinning in heavy years,
  harvest picked mature-but-unripe and ripened off-tree.
- **Pomegranate** (`Punica granatum`) — thrives in hot-dry summers,
  minimal pruning (mostly sucker removal + shaping the first 3 years),
  split-fruit monitoring in late summer, harvest by rind color and
  sound.
- **Persimmon** (`Diospyros kaki` — Asian; `D. virginiana` — American).
  Astringent vs. non-astringent harvest logic is the headline. Light
  pruning, relatively pest-free for home orchards.
- **Avocado** (`Persea americana`) — frost protection is the defining
  concern in zone 9b+ backyards. Sparse canopy pruning (never shape
  into bare wood), monitoring for sunburn + persea mite, harvest by
  stem-test / days-on-tree rather than softness.
- **Olive** (`Olea europaea`) — alternate bearing is the dominant
  annual rhythm. Pruning for light penetration (olives fruit on
  previous year''s wood), olive fruit fly monitoring in CA, harvest
  window depends on end use (green for oil, ripe black for curing).

## Per-tree template shape

Following the plan doc''s "some trees don''t need 5 categories" guidance
— we declare the categories each tree''s cited sources actually cover,
not a uniform 4–5 per tree.

| Tree | pruning | protection | feeding | monitoring | harvesting |
|---|---|---|---|---|---|
| Pear | Dormant pruning (Feb) | — | Spring feeding (Mar) | Fireblight watch + thinning (May–Jun) | Pick mature-but-firm (Aug–Sep) |
| Pomegranate | Light training (Feb) | — | Spring feeding (Mar) | Split-fruit / leaffooted bug (Aug) | Harvest by rind + sound (Sep–Oct) |
| Persimmon | Light structural (Jan–Feb) | — | Spring feeding (Mar) | — | Harvest by astringent/non-astringent rule (Oct–Nov) |
| Avocado | Light thinning (Feb–Mar) | Frost protection (Nov–Dec) | Split feeding (Feb + Jun) | Sunburn / persea mite / anthracnose (Jul) | Stem-test harvest (varies by variety) |
| Olive | Alternate-bearing pruning (Feb–Mar) | — | Spring feeding (Mar) | Olive fruit fly watch (Jul–Aug, CA) | Harvest by end-use (Sep–Nov) |

Not every cell is populated. Pome (Pear) matches Apple''s coverage.
Subtropicals vary: Avocado earns `protection` (cold-tender in zone 9b
backyards), while the others skip it. Persimmon is famously easygoing
— we skip `monitoring` rather than invent a pest cadence.

Per-tree task IDs match the Phase A/B/C convention:
`<slug>-pruning`, `<slug>-feeding`, `<slug>-monitoring`,
`<slug>-protection`, `<slug>-harvest` (category value `harvesting`).

Expected total: ~18 template entries, ~17–18 new guide rows across 5
migrations.

## Per-tree quirks to capture

- **Pear**: fireblight (the bacterial disease that gives shoot tips a
  shepherd''s-crook look and blackened leaves) is the headline — the
  guide should cover removal technique (cut 12 inches below visible
  damage, sterilize between cuts). Harvest cue: press a thumb near
  the stem — if it gives slightly, pick; pears ripen off the tree.
  Tree-ripened pears go mealy.
- **Pomegranate**: minimal pruning after year 3 — mostly sucker
  removal. Split-fruit prevention comes from consistent watering in
  summer; once split the fruit can''t recover. Leaffooted bug is the
  main insect pest in CA/SW.
- **Persimmon**: astringent varieties (Hachiya) must be fully soft-
  jelly ripe before eating; non-astringent (Fuyu, Jiro) can be eaten
  firm like an apple. The guide has to disambiguate — getting this
  wrong ruins the experience (astringent persimmon picked firm is
  inedibly mouth-puckering).
- **Avocado**: zone-boundary tree. Frost protection (young trees
  especially) is the single most important winter task in zone 9b.
  Do not prune back into bare wood — avocado does not reliably
  regenerate from old wood. Harvest test: pull a fruit, leave at
  room temperature — if it softens evenly over 7–10 days, the tree
  is mature; if it shrivels, wait.
- **Olive**: alternate bearing is the norm — heavy year followed by
  light. Prune lightly in heavy-fruit years to thin the load.
  Olive fruit fly (in CA) lays eggs starting July; monitoring with
  yellow sticky traps + GF-120 bait is standard. Table vs. oil olives
  have opposite harvest cues: oil olives picked at color-change
  (green-to-purple), table olives picked by end-use.

## Sources to use

Per the ranked domain list in `docs/fruit_tree_care_resources.md`:

- **Pear**: PSU Extension (Apple and Pear Disease — fireblight),
  UMN Extension (Growing pears in the home garden), UC ANR Home
  Orchard Guide.
- **Pomegranate**: UC ANR / UC Davis Fruit & Nut Center Pomegranate
  page, UF/IFAS EDIS (The Pomegranate), Texas A&M AgriLife (Home
  Fruit Production — Pomegranates).
- **Persimmon**: UGA Extension (Home Garden Persimmons), UF/IFAS EDIS
  (The Persimmon), UC ANR (Oriental Persimmon).
- **Avocado**: UC ANR Publication 21580 / UC IPM (Avocado Home
  Garden), UF/IFAS EDIS (Avocado Growing in the Florida Home
  Landscape), UC IPM Freezing and Frost Damage (shared with citrus
  frost-protection pattern).
- **Olive**: UC ANR Publication 3485 (Olive Production Manual),
  UC IPM (Olive Fruit Fly), UF/IFAS EDIS (Olives for Your Florida
  Home Landscape).

Source citation conventions match Phase A/B/C:
- `source` column: short semicolon-delimited list (e.g. `'UC ANR;
  UC IPM'`)
- `researchNotes` field: full page titles in doubled-up single quotes

## Per-tree migration shape

One migration per tree — same convention as Phase A/B/C.
- Naming: `<timestamp>_guides_<tree>_per_task.sql`
- IDs prefixed by tree slug: `pear-pruning`, `olive-monitoring`, etc.
- `approved = true` on insert (review happens on SQL diff before commit)
- Doubled apostrophes inside the JSON body — grep for `[a-z]'[a-z]`
  before push

## Verification (per Phase D in per-task-rollout.md)

- `npm run typecheck` / `npm test` / `npm run lint` clean
- Spot-check one tree''s guide screen in the simulator (pick
  Persimmon — astringent/non-astringent split is the most distinctive
  content in this phase)
- DB snapshot to `backups/phase-d-pome-subtropical-2026-04-16.json`
  via the `UNION ALL` / `jsonb_agg` shape

## Out of scope for Phase D

- Variety-level timing (Bartlett vs. Anjou, Hachiya vs. Fuyu) beyond
  the astringent/non-astringent callout in Persimmon
- American persimmon (`D. virginiana`) differences — the Persimmon
  template targets the more-commonly-planted Asian species, with a
  note in the harvest guide for American persimmon (all wild-type
  American persimmons are astringent)
- Olive fruit fly control outside CA — the pest is a CA/Southwest
  concern; the monitoring task calls this out explicitly
- On-demand guide generation / zone-shifted windows (still deferred)
