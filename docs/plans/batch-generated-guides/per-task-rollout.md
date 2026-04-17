# Per-task guide rollout for all fruits

## What this plan covers
Closes per-task guide coverage for every tree in `FRUIT_TREE_TYPES`.
Peach shipped the pilot (`20260415010312_guides_peach_per_task.sql`);
this plan rolls the same shape out across the remaining 24 trees,
grouped into reviewable phases.

## Where we are today
- `FRUIT_TREE_TYPES` (`lib/fruit-tree-data.ts`) has 25 species
- Overview guides: 25 / 25 (all approved; done in earlier phases)
- Per-task guides: **all 25 trees shipped** — 101 rows total
  (Peach 4, Apple 5, Lemon 3, Fig 2, Cherry 5, Plum 5, Apricot 5,
  Nectarine 5, Orange 4, Lime 4, Grapefruit 3, Mandarin 4, Tangelo 4,
  Tangerine 4, Kumquat 3, Pear 4, Pomegranate 4, Persimmon 3,
  Avocado 5, Olive 4, Date 4, Mango 4, Guava 4, Mulberry 3, Pawpaw 2).
  Phases A, B, C, D, E all complete
- Task templates (`lib/care/task-templates/<species>.ts` + barrel):
  all 25 species have templates

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

### Phase C — Citrus (7 trees) (DONE)
Orange, Lime, Grapefruit, Mandarin, Tangelo, Tangerine, Kumquat. All
seven got templates + per-task guides. Category coverage varies:
Orange, Lime, Mandarin, Tangelo, Tangerine ship feeding + monitoring
+ protection + harvesting; Grapefruit and Kumquat skip protection
(cold-hardy enough in typical zones to defer to the overview).

Per-tree quirks captured:
- **Orange**: variety-staggered harvest windows (Hamlin Nov–Feb,
  Valencia Apr–Jul), Valencia re-greening note
- **Lime**: most cold-sensitive common citrus; Persian vs Key
  harvest cues (green-at-size vs yellow-at-ripe)
- **Grapefruit**: sweetens with time on tree; Nov–Apr holding window
- **Mandarin**: rind may stay green when fruit is ripe — taste over
  color (satsumas especially)
- **Tangelo**: Minneola-specific Alternaria brown spot management
  (preventive copper fungicide at each spring flush); pollenizer
  dependence called out in overview
- **Tangerine**: heavy-year fruit thinning to smooth alternate
  bearing
- **Kumquat**: whole-fruit harvest (eaten skin and all); half-rate
  feeding vs other citrus

Shipped: 7 migrations, +26 guide rows (Orange 4, Lime 4, Grapefruit
3, Mandarin 4, Tangelo 4, Tangerine 4, Kumquat 3), 7 template files.
Backup `backups/phase-c-citrus-2026-04-16.json`. Sources: UC IPM
(ACP/HLB, Citrus Pest Management, Freezing/Frost Damage), UC ANR
(Publication 8100 frost protection, taste-over-rind-color), UC
Master Gardeners Santa Clara County, UF/IFAS EDIS (Citrus Culture in
the Home Landscape, Minneola Tangelo HS171/CH072, Alternaria Brown
Spot PP-147/CG021, Kumquat FOR300/FR368), Clemson HGIC (In-Ground +
Container Citrus Production).

### Phase D — Pome + subtropical (5 trees) (DONE)
Pear, Pomegranate, Persimmon, Avocado, Olive. All five got templates
+ per-task guides. Category coverage varies:
- **Pear** (4 guides): pruning, feeding, monitoring (fireblight +
  thinning), harvesting — dormant pruning, fireblight 12-inch cut
  rule, lift-twist maturity test with off-tree ripening
- **Pomegranate** (4 guides): pruning, feeding, monitoring, harvesting
  — sucker removal, 2–3 year old fruiting wood, split-fruit
  prevention, metallic-sound ripeness test
- **Persimmon** (3 guides): pruning, feeding, harvesting — skipped
  monitoring and protection (easygoing tree); astringent vs
  non-astringent rule is the headline
- **Avocado** (5 guides): pruning, feeding, monitoring, protection,
  harvesting — full coverage including frost protection (the defining
  winter task in 9b) and the one-sample-off-tree harvest test
- **Olive** (4 guides): pruning, feeding, monitoring, harvesting —
  skipped protection; alternate-bearing pruning balance, olive fruit
  fly monitoring for CA/West, green-vs-black harvest by end use

Per-tree quirks captured:
- **Pear**: fireblight (shepherd''s crook) + cut 12 inches below
  damage + sterilize between cuts; off-tree ripening rule (tree-
  ripened pears go mealy)
- **Pomegranate**: fruits on 2–3 year old wood so pruning stays
  light; split fruit is a consistent-watering problem; leaffooted
  bug flick-into-soapy-water
- **Persimmon**: shape-based variety ID (acorn = astringent, tomato
  = non-astringent); ''frost required'' is a misconception — frost
  damages immature fruit
- **Avocado**: never cut into bare older wood (doesn''t regenerate);
  wait 6–8 months before pruning frost damage; harvest test is off-
  tree softening, not squeeze
- **Olive**: scale pruning to the alternate-bearing rhythm (harder
  in heavy year, lighter in light year); olive fruit fly is CA/West-
  primary; harvest color depends entirely on end use (oil vs green
  cure vs black cure)

Shipped: 5 migrations, +20 guide rows (Pear 4, Pomegranate 4,
Persimmon 3, Avocado 5, Olive 4), 5 template files. Backup
`backups/phase-d-pome-subtropical-2026-04-16.json`. Sources: Penn
State Extension (Apple and Pear Disease: Fire Blight), UMN Extension
(Growing Pears in the Home Garden), OSU Extension PNW 400, UC ANR
Marin Master Gardeners (Pruning Pomegranate; FRUIT TREES
Pomegranate), UGA Extension (Pomegranate Production; Home Garden
Persimmons), Clemson HGIC (Pomegranate; How to Grow Persimmons in
SC), UC ANR Master Gardeners Contra Costa County (Sweet or
Astringent), UF/IFAS EDIS HS1483 (Alleviating Astringency in
Persimmon Fruit), UC IPM (Training and Pruning Avocado Trees;
Avocado; Olive Fruit Fly — Home and Landscape; Olive), UC ANR
Ventura Cooperative Extension (Protecting Avocados from Frost;
Methods of Frost Protection; Answers to FAQs about Avocados;
Rehabilitation of Freeze-Damaged Citrus and Avocado Trees), UC ANR
(Olive Production Manual, Publication 3353/3485), UF/IFAS EDIS
(Avocado Growing in the Florida Home Landscape).

### Phase E — Tropical + berry (5 trees) (DONE)
Date, Mango, Guava, Mulberry, Pawpaw. All five got templates +
per-task guides. Category coverage varies more than other phases
because US-extension coverage for this group is the thinnest — we
deliberately shipped fewer categories rather than invent advice:
- **Date** (4 guides): pruning, feeding, monitoring (hand
  pollination + strand thinning + bagging), harvesting — three
  distinctive home-grower jobs collapse into one monitoring guide;
  bunch-cut vs. thinning-harvest by variety
- **Mango** (4 guides): pruning, feeding, monitoring, harvesting —
  post-harvest pruning timing, low-N/high-K bearing-tree feeding,
  anthracnose + powdery mildew copper/sulfur at 1/4-panicle bloom,
  shoulder-and-nose harvest test with off-tree ripening at 70–75°F
- **Guava** (4 guides): pruning, feeding, monitoring, harvesting —
  aggressive size-control pruning tolerance, paper-bag Caribbean
  fruit fly control at 1-inch fruit size, variety-color harvest
  (pink/red yellows; white stays green)
- **Mulberry** (3 guides): pruning, feeding, harvesting — skipped
  monitoring (white peach scale handled by dormant oil during the
  winter-pruning visit); literal ''shake-the-tree'' harvest
- **Pawpaw** (2 guides): monitoring, harvesting — skipped pruning,
  feeding, protection because US-extension sources don''t provide
  home-orchard cadences for those tasks, and shipping guides we
  can''t cite would violate project rules. Hand pollination between
  two different cultivars is the #1 home-grower lever

Per-tree quirks captured:
- **Date**: dioecious (female trees need pollen source); never
  prune above horizontal ("pencil pointing" risk); Medjool thinning-
  harvest in 2–3 October passes vs. bunch-cut for Halawy/Khadrawy
- **Mango**: sap-dermatitis warning (Anacardiaceae family); resistant
  varieties (Tommy Atkins, Kent, Keitt) need fewer bloom sprays than
  Haden; stop copper at golf-ball fruit size to prevent russeting
- **Guava**: withhold-water-then-prune trick forces off-season
  flowering; prune year-round except Nov–Feb (frost sensitivity)
- **Mulberry**: juice stains are permanent on clothing and concrete;
  birds take the top canopy no matter what; freeze pulp for long-
  term storage because fresh fruit keeps only 2–3 days
- **Pawpaw**: self-incompatible — two cultivars of the same variety
  don''t pollinate; flowers smell like rotting meat to attract fly
  pollinators; ripe fruit may develop black skin blotches (normal);
  seeds contain alkaloids (spit them out); freeze pulp for storage

Shipped: 5 migrations, +17 guide rows (Date 4, Mango 4, Guava 4,
Mulberry 3, Pawpaw 2), 5 template files. Backup
`backups/phase-e-tropical-berry-2026-04-17.json`. Sources: UNR
Extension (Date Palm Gardening Guide for Southern Nevada FS-02-99;
PubID 3217), UA Cooperative Extension (Arizona Landscape Palms
az1021; az2021), UF/IFAS EDIS (HS2/MG216 Mango Growing in the
Florida Home Landscape; ENH563/ST404 Mangifera indica; HS4/MG045
Guava Growing in the Florida Home Landscape; ENY-412/IG072 Guava
Pests and Beneficial Insects), UF/IFAS Extension St. Lucie County
(Managing Anthracnose and Powdery Mildew on Mango Tree; Common
Problems of Mango in the Florida Home Landscape), UGA Extension
(B992 Minor Fruits and Nuts in Georgia), Clemson HGIC (Red vs. White
Mulberry in South Carolina), Ohio State Ohioline (ANR-0187 Pawpaws:
An Alternative Fruit Crop in the Midwest), Penn State Extension (The
Native Pawpaw Tree; Pawpaw Fruit in the Garden and the Kitchen),
Purdue Extension (Pawpaw – the Indiana Banana?).

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
