-- Phase D: per-task guides for Pomegranate (Punica granatum).
--
-- Templates in lib/care/task-templates/pomegranate.ts — 4 categories
-- (protection intentionally skipped; pomegranate is hardy in the
-- zones where it''s commonly grown and the overview covers any
-- cold-specific guidance):
--   pruning     → Sucker removal + light shaping (fruits on 2–3 yr
--                 old wood, so keep cuts light)
--   feeding     → Modest spring feeding
--   monitoring  → Split-fruit prevention + leaffooted bug watch
--   harvesting  → Rind color + metallic-sound test
--
-- Sources: UC ANR Marin Master Gardeners (Pruning Pomegranate, FRUIT
-- TREES Pomegranate), UGA Extension (Pomegranate Production), Clemson
-- HGIC (Pomegranate — How to Grow, Care for, and Enjoy in SC).

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'pomegranate-pruning',
  '{
    "treeType": "Pomegranate",
    "title": "Pomegranate Sucker Removal and Shaping",
    "introduction": "Pomegranates want to be shrubs. Left alone, they send up dozens of suckers from the base and form a dense thicket. The home-garden approach is somewhere in between — keep the tree shape, but accept that a pomegranate doesn''t need annual structural pruning the way an apple does. The headline rule: fruit forms on 2–3 year old wood, so aggressive pruning cuts next year''s crop off.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Prune before new spring growth",
        "description": "Late February through mid-March is the window in most US climates. You want the plant still dormant so you can see the structure, but close enough to spring that cuts heal fast as the tree wakes up."
      },
      {
        "stepNumber": 2,
        "title": "Cut suckers at ground level",
        "description": "Pomegranates send up vigorous shoots from the base all year. Cut them off right at ground level — not above. Suckers compete for energy and crowd the interior. On multi-trunked (shrub-form) trees you may keep 3–5 main trunks; on single-trunk trees, remove every sucker."
      },
      {
        "stepNumber": 3,
        "title": "Thin the interior lightly",
        "description": "Remove only crossing, broken, or clearly dead branches. Light is the main goal — if you can see dappled sun reaching the interior, you''ve done enough. Heavy thinning strips out the 2–3 year old wood that will carry next year''s fruit."
      },
      {
        "stepNumber": 4,
        "title": "Leave mature trees alone past year 3",
        "description": "By year 3, a trained pomegranate should be mostly shaped. From year 4 onward, limit pruning to sucker removal and the occasional broken branch. The plant fruits best on its own."
      },
      {
        "stepNumber": 5,
        "title": "Watch for spines",
        "description": "Most pomegranate varieties have small stiff thorns on older wood. Wear leather gloves and long sleeves — sucker removal is the scratchiest job on the tree.",
        "tip": "Pomegranate wood is hard and holds an edge — keep pruners sharp, sterilize between plants, and make clean cuts that don''t tear the soft bark."
      },
      {
        "stepNumber": 6,
        "title": "Save fruiting wood",
        "description": "Fruit-bearing wood is 2–3 years old — slightly gray-brown, slightly thicker than new green shoots. Leave it. If a branch hasn''t flowered in its third year and shows no vigor, cut it back to a younger side shoot."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners",
      "Loppers (for base suckers and older wood)",
      "Leather gloves and long sleeves",
      "70% alcohol for sterilizing blades"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC ANR Marin Master Gardeners ''Pruning Pomegranate'' (fruit forms on 2–3 year old wood, light annual pruning rule, sucker removal at ground level) and Clemson HGIC ''Pomegranate (Punica granatum): How to Grow, Care for, and Enjoy in South Carolina'' (sucker removal discipline, opening canopy for light, leaving mature trees alone past year 3)."
  }'::jsonb,
  'UC ANR Marin Master Gardeners; Clemson HGIC',
  'Pomegranate',
  'pruning',
  true
),
(
  'pomegranate-feeding',
  '{
    "treeType": "Pomegranate",
    "title": "Pomegranate Spring Feeding",
    "introduction": "Pomegranates evolved on lean Mediterranean soils and don''t need heavy feeding. In fact, too much nitrogen pushes vegetative growth at the expense of flowers — a pomegranate that''s all leaf and no fruit is almost always an over-fed tree. A modest, split spring feeding is plenty.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Skip it on young trees the first year",
        "description": "Newly planted pomegranates don''t need fertilizer during the first growing season. Let the roots establish in the existing soil. Starting in year two, begin the modest feeding schedule below."
      },
      {
        "stepNumber": 2,
        "title": "Apply in March, before bud break",
        "description": "Target early March, when buds are just starting to swell. The nitrogen supports the flush of new growth that will carry this year''s flowers. Too-early feeding wastes fertilizer to rain; too-late feeding pushes soft late-summer growth."
      },
      {
        "stepNumber": 3,
        "title": "Use 2–4 oz of actual nitrogen per year of tree age",
        "description": "A 3-year-old tree gets 6–12 oz of actual nitrogen — roughly a pound of 10-10-10. Cap the total at about 1 lb of actual nitrogen on a mature tree. If you''ve been splitting applications, use half the annual total in March and the rest in May."
      },
      {
        "stepNumber": 4,
        "title": "Spread in a ring from 1 ft out to the drip line",
        "description": "Rake mulch back and spread the fertilizer evenly. Keep granules at least 1 foot from the trunk — bark contact burns. Replace the mulch after spreading."
      },
      {
        "stepNumber": 5,
        "title": "Water it in thoroughly",
        "description": "Apply at least 1 inch of water over the fed area right after — fertilizer only works once it dissolves into the root zone. On drip-irrigated trees, run the system long enough to reach the full width of the fed ring.",
        "tip": "If last year''s shoots grew over 2 feet, skip this year''s feeding entirely — over-vegetative pomegranates need restraint, not more food."
      },
      {
        "stepNumber": 6,
        "title": "Don''t feed in summer or fall",
        "description": "Late-season nitrogen pushes tender growth that doesn''t harden off before winter. On marginal-zone plantings (pomegranate is only reliably hardy to about zone 7b), summer feeding increases winter damage. Stop at the May application at the latest."
      }
    ],
    "toolsNeeded": [
      "Balanced granular fertilizer (10-10-10 or similar)",
      "Measuring cup",
      "Garden rake",
      "Hose or soaker line"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UGA Extension ''Pomegranate Production'' (modest N requirement, split March/May application, roughly 1 lb actual N/year cap on mature trees) and Clemson HGIC ''Pomegranate'' (over-fertilizing suppresses flowering, skip fertilizer in first year, spread to drip line)."
  }'::jsonb,
  'UGA Extension; Clemson HGIC',
  'Pomegranate',
  'feeding',
  true
),
(
  'pomegranate-monitoring',
  '{
    "treeType": "Pomegranate",
    "title": "Split Fruit Prevention and Leaffooted Bug Watch",
    "introduction": "Two problems show up in mid-to-late summer on a pomegranate: fruit splits open on the tree, and leaffooted bugs pierce fruit and leave brown blotches inside. The good news is both are preventable with a simple summer habit — consistent watering and a weekly walk-around.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Keep water consistent through summer",
        "description": "Split fruit is caused by sudden water — a long dry spell followed by a big rain or heavy irrigation makes the inside grow faster than the skin can stretch, and the fruit cracks. Set a steady deep-watering schedule starting in July: one long soak every 7–10 days in most climates, longer intervals for older trees, shorter for container plantings."
      },
      {
        "stepNumber": 2,
        "title": "Mulch to even out soil moisture",
        "description": "A 2–3 inch layer of wood-chip mulch at the drip line buffers the soil against the dry-wet cycle that causes splitting. Keep mulch 2–3 inches away from the trunk itself — mulch against bark rots the crown."
      },
      {
        "stepNumber": 3,
        "title": "Walk the tree weekly for leaffooted bugs",
        "description": "Leaffooted bugs (Leptoglossus) are 3/4-inch gray-brown insects with a white zigzag band across their back and distinctive leaf-like flanges on the hind legs. They cluster on fruit, piercing it with long mouthparts. Check weekly from mid-July through September."
      },
      {
        "stepNumber": 4,
        "title": "Knock them into soapy water in the morning",
        "description": "Leaffooted bugs are sluggish in the cool morning. Hold a bowl or jar of soapy water under a cluster and flick them in — they drop in rather than fly. This is far more effective than spraying, and keeps beneficials in the garden unharmed."
      },
      {
        "stepNumber": 5,
        "title": "Don''t salvage split fruit",
        "description": "Once a fruit splits, it starts to ferment and attract pests. Pick split fruit off and dispose of it (don''t leave on ground). Use sound fruit immediately — the arils inside are still fine if the split is fresh, but storage is out.",
        "tip": "Overripe fruit is a leaffooted bug magnet. Pick promptly at harvest time and clear any dropped fruit from under the tree."
      },
      {
        "stepNumber": 6,
        "title": "Clean up dropped fruit in fall",
        "description": "Overwintering leaffooted bug adults hide in garden debris and come back next year. Raking up fallen fruit and old mulch beneath the tree in October–November breaks the cycle."
      }
    ],
    "toolsNeeded": [
      "Drip irrigation or soaker hose",
      "Wood-chip mulch",
      "Bowl or jar of soapy water",
      "Garden gloves"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Clemson HGIC ''Pomegranate'' (drip irrigation preferred over overhead, consistent moisture prevents split fruit) and UC ANR Marin Master Gardeners ''FRUIT TREES: Pomegranate'' (split-fruit mechanism, leaffooted bug morning-sluggish flick-into-soap method). UGA Extension ''Pomegranate Production'' confirms leaffooted bug and split-fruit as the dominant home-orchard issues."
  }'::jsonb,
  'Clemson HGIC; UC ANR Marin Master Gardeners',
  'Pomegranate',
  'monitoring',
  true
),
(
  'pomegranate-harvesting',
  '{
    "treeType": "Pomegranate",
    "title": "Pomegranate Harvest",
    "introduction": "Pomegranates do not ripen after picking — the arils inside freeze at whatever state they were in when the fruit came off the tree. Harvesting by color alone usually picks early; the most reliable backyard test is the sound test, which tells you the seeds inside are packed tight against the rind.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait for full mature color",
        "description": "Each variety has its own target color — Wonderful goes deep burgundy red, Ambrosia ends pale pink, Eversweet stays mostly pink-yellow. Watch the color shift over weeks in September and October. When a fruit stops changing, it''s getting close."
      },
      {
        "stepNumber": 2,
        "title": "Check weight in the hand",
        "description": "A ready pomegranate feels heavy for its size. The arils inside are full of juice. An underripe fruit feels lighter and slightly hollow."
      },
      {
        "stepNumber": 3,
        "title": "The metallic-sound test",
        "description": "Tap the side of the fruit with a knuckle or the flat of a spoon. A ripe pomegranate gives a clear, slightly metallic, slightly hollow sound — ''tink.'' An unripe fruit thuds dully. This is the most reliable maturity test; growers use it as the go-signal."
      },
      {
        "stepNumber": 4,
        "title": "Look for flat, slightly angular sides",
        "description": "As arils inside swell and press against the rind, a ripe pomegranate goes from smoothly round to slightly flattened on the sides. This is subtle — only useful in combination with color and the sound test."
      },
      {
        "stepNumber": 5,
        "title": "Clip with pruners — don''t pull",
        "description": "Cut the stem close to the fruit with bypass pruners or sharp scissors. Leave no long stem sticking out (it can puncture neighboring fruit in storage). Pulling tears bark off the wood, which invites disease and damages fruiting spurs.",
        "tip": "Don''t wait for fruit to drop on its own — at that point it''s overripe and attracting pests. Pick when the sound test says yes."
      },
      {
        "stepNumber": 6,
        "title": "Store in a cool spot",
        "description": "Whole pomegranates keep 1–2 months at 40–50°F (a cool garage or fridge crisper). Arils removed from the rind keep about a week in the fridge and freeze well — a winter''s supply of seeds is a standard home-orchard use."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners or sharp scissors",
      "Harvest basket",
      "Step stool for taller trees"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UGA Extension ''Pomegranate Production'' (metallic-sound test as standard maturity indicator, clip-don''t-pull technique, 1–2 month storage life) and Clemson HGIC ''Pomegranate'' (harvest-doesn''t-ripen-after-picking rule, color-by-variety variation, cut close to the stem). UC ANR Marin Master Gardeners ''FRUIT TREES: Pomegranate'' cross-references the full-weight-in-hand and angular-sides signs."
  }'::jsonb,
  'UGA Extension; Clemson HGIC',
  'Pomegranate',
  'harvesting',
  true
);
