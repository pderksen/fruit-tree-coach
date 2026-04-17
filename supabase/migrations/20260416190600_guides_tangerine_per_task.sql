-- Phase C: per-task guides for Tangerine (Citrus reticulata, mandarin
-- family).
--
-- Templates in lib/care/task-templates/tangerine.ts:
--   feeding     → Pre-bloom + summer feeding (shared guide)
--   monitoring  → Heavy-year fruit thinning (alternate-bearing watch)
--   protection  → Frost protection
--   harvesting  → Taste over color; loose peel at ripeness
--
-- Sources: UF/IFAS EDIS (Citrus Culture in the Home Landscape), UC
-- Master Gardeners Santa Clara County, UC ANR (Use Taste Rather Than
-- Rind Color), UC IPM (Freezing/Frost Damage), UC ANR Publication
-- 8100.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'tangerine-feeding',
  '{
    "treeType": "Tangerine",
    "title": "Tangerine Feeding",
    "introduction": "Tangerines are heavy feeders with the same split-schedule rhythm as other mandarin-family citrus. The pre-bloom dose in February supports flower set and early fruit; follow-up doses in late spring and early summer carry the crop through sizing. Alternate-bearing tangerines benefit from steady, even feeding — skipping a year to punish a light crop backfires by weakening the tree going into the next heavy year.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Use a citrus-specific fertilizer",
        "description": "Pick a citrus blend with micronutrients — 6-6-6 or 8-8-8 for young trees, 10-10-10 for mature. Generic all-purpose fertilizer lacks the iron, zinc, and manganese that keep tangerine leaves fully green and fruit sizing properly."
      },
      {
        "stepNumber": 2,
        "title": "Time the pre-bloom feeding",
        "description": "The biggest of the year''s feedings goes in February, before bud swell and bloom. This is nitrogen-heavy and supports flower set. Time it 2–4 weeks before bloom in your climate."
      },
      {
        "stepNumber": 3,
        "title": "Split into 3–5 applications across the season",
        "description": "Apply smaller follow-up doses in May and June; optionally a lighter feeding in July. Mature trees can take up to 1 lb actual nitrogen per year split across 2–3 applications; young trees take smaller, more frequent amounts (~1 tbsp actual N per month May through August)."
      },
      {
        "stepNumber": 4,
        "title": "Spread in a ring to the drip line",
        "description": "Rake mulch back, sprinkle fertilizer in a ring from 1 ft outside the trunk to past the drip line, then replace mulch. Keep granules off the trunk — direct contact burns bark."
      },
      {
        "stepNumber": 5,
        "title": "Water it in thoroughly",
        "description": "Water at least 1 inch over the fed area right after application. Without water, granular fertilizer burns roots on contact and won''t dissolve into the root zone. Mulch 2–3 inches at the drip line helps hold soil moisture through summer."
      },
      {
        "stepNumber": 6,
        "title": "Stop by late August",
        "description": "Skip any feeding after late August. Fall nitrogen pushes tender new growth that attracts citrus leafminer and is vulnerable to winter cold. Let the tree harden off naturally before freeze season.",
        "tip": "Container tangerines need more frequent lighter feedings — every 6 weeks during the growing season — because watering leaches nutrients from the pot."
      }
    ],
    "toolsNeeded": [
      "Citrus-specific granular fertilizer with micronutrients",
      "Measuring cup",
      "Garden rake",
      "Soaker hose or drip line"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Citrus Culture in the Home Landscape'' (6-6-6/8-8-8/10-10-10 NPK rates, split-application schedule, drip-line spread, avoid trunk contact) and UC Master Gardeners Santa Clara County ''Growing Great Citrus'' (~1 tbsp actual N per month May–August for young trees, up to 1 lb actual N/year for mature trees, avoid fall feeding)."
  }'::jsonb,
  'UF/IFAS EDIS; UC Master Gardeners Santa Clara County',
  'Tangerine',
  'feeding',
  true
),
(
  'tangerine-monitoring',
  '{
    "treeType": "Tangerine",
    "title": "Tangerine Fruit Thinning",
    "introduction": "Tangerines are the most alternate-bearing of the mandarins — a tree carries a heavy crop one year and then a light one the next, flipping back and forth. Fruit thinning in a heavy year is the most reliable way to smooth that cycle. Thinning in June, when fruitlets are marble-sized, reduces limb stress, improves fruit size, and pushes the tree back toward even annual bearing.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Assess the crop in June",
        "description": "Walk the tree in early June. Count fruitlets on a representative branch and compare to a typical year. If clusters are packed tight — 6+ fruit per cluster, branches visibly bending — the tree is set for a heavy crop and will benefit from thinning."
      },
      {
        "stepNumber": 2,
        "title": "Remove about 1 in 4 fruitlets",
        "description": "Target removing roughly 25% of the set fruit. Pick the smallest, any doubles, and fruit from the inside of tight clusters. The goal is one fruit every 3–4 inches along a branch — not crowded up against neighbors."
      },
      {
        "stepNumber": 3,
        "title": "Prioritize bent or stressed limbs",
        "description": "If a branch is bowing under the crop, thin aggressively on that limb — reducing weight prevents breakage later in the season when fruit sizes up. A broken limb from heavy fruit load is a multi-year setback."
      },
      {
        "stepNumber": 4,
        "title": "Remove by twisting, not cutting",
        "description": "Pinch a fruitlet between thumb and forefinger and twist gently; it pops off cleanly at the stem. Cutting is slower and risks nicking the stem of neighbors. Work methodically around the tree so you don''t re-thin the same branch twice."
      },
      {
        "stepNumber": 5,
        "title": "Also scout for pests while you thin",
        "description": "Thinning is a good time to check for the standard citrus pest complex — sticky leaves (aphid/scale honeydew), silvery leafminer trails, scale bumps on stems. Treat as you find them. Avoid heavy summer pruning — fresh flush attracts leafminer."
      },
      {
        "stepNumber": 6,
        "title": "Note the result for next year",
        "description": "Thinning doesn''t eliminate alternate bearing in one pass — it gradually evens out over several years of consistent thinning. Keep notes on whether each year was heavy or light, so you know whether to thin again.",
        "tip": "A young tree (under 4 years) carrying its first big crop should be thinned heavily — 30–40% — to protect the framework and prevent the tree from pulling itself into a hard alternate-bearing pattern."
      }
    ],
    "toolsNeeded": [
      "Gloves (optional, fruit-stem sap can stain hands)",
      "Step stool for taller trees",
      "Bucket for removed fruitlets"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Citrus Culture in the Home Landscape'' (tangerine alternate-bearing tendency, heavy-year thinning recommendation, ~1-in-4 removal rate to moderate the cycle) and UC Master Gardeners Santa Clara County ''Growing Great Citrus'' (alternate bearing context, avoid heavy summer pruning)."
  }'::jsonb,
  'UF/IFAS EDIS; UC Master Gardeners Santa Clara County',
  'Tangerine',
  'monitoring',
  true
),
(
  'tangerine-protection',
  '{
    "treeType": "Tangerine",
    "title": "Tangerine Frost Protection",
    "introduction": "Tangerines suffer damage below 28°F sustained for more than a few hours, with tender new growth and developing fruit most vulnerable. In zones 9a–9b where most backyard tangerines grow, a handful of freeze nights each winter are the main threat. The goal is to trap soil heat under the canopy and add a backup heat source for the coldest nights.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Water the soil deeply the day before",
        "description": "Moist soil absorbs and releases 2–3 times more heat overnight than dry soil. Water under the canopy the day before a forecast freeze — the single highest-impact frost protection step."
      },
      {
        "stepNumber": 2,
        "title": "Rake mulch back to expose bare soil",
        "description": "Mulch insulates soil from daytime sun. On the day of a forecast freeze, rake mulch away from the root zone so bare soil can absorb heat through the day. Replace mulch after the cold spell ends."
      },
      {
        "stepNumber": 3,
        "title": "Cover with sheets or frost cloth — not plastic",
        "description": "Drape sheets, burlap, or frost cloth (Agribon) over the canopy on a frame — stakes, tomato cage, or PVC hoop. Avoid plastic: it transfers heat quickly and burns any leaves it touches. Ice forms where the cover touches foliage."
      },
      {
        "stepNumber": 4,
        "title": "Seal the cover to the ground",
        "description": "Run the cover all the way to the ground on every side — the warmth you''re trying to trap rises from the soil, not from the tree. Weight the edges with stones, bricks, or boards. No gaps at the base."
      },
      {
        "stepNumber": 5,
        "title": "Add a heat source for severe cold",
        "description": "For nights forecast below 25°F, string incandescent Christmas lights (not LED) through the canopy inside the cover, or set a 100W outdoor bulb at the trunk base. A few degrees of added warmth often makes the difference between fruit loss and a saved crop."
      },
      {
        "stepNumber": 6,
        "title": "Uncover the next morning",
        "description": "Pull the cover off once temperatures rise above freezing — usually mid-morning. Leaving it on cooks the tree on a sunny day. If more cold is forecast within days, rewet the soil and re-cover before sunset.",
        "tip": "Pick any ripe tangerines before a hard freeze — frozen fruit goes mushy and drops."
      }
    ],
    "toolsNeeded": [
      "Old bedsheets, burlap, or frost cloth (Agribon)",
      "Stakes or tomato cage for a frame",
      "Stones or bricks to weight cover edges",
      "Incandescent Christmas lights or 100W outdoor bulb (for severe cold)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Freezing and Frost Damage to Citrus'' (28°F damage threshold, cover materials, pick ripe fruit before freeze), UC ANR Publication 8100 ''Frost Protection for Citrus and Other Subtropicals'' (moist-soil heat retention, bare-soil preference, cover-to-ground seal, incandescent heat sources), and UC Master Gardeners Sacramento County ''Frost and Protection for Sensitive Plants'' (frame to keep cover off leaves, remove covers in the morning)."
  }'::jsonb,
  'UC IPM; UC ANR',
  'Tangerine',
  'protection',
  true
),
(
  'tangerine-harvesting',
  '{
    "treeType": "Tangerine",
    "title": "Tangerine Harvest",
    "introduction": "Tangerines share the mandarin family''s defining harvest quirk: ripeness is about taste and peel-release, not color. Many tangerine varieties reach full color weeks before they''re sweet, and some stay partly green even when perfectly ripe. Trust the taste + peel test. And because tangerines alternate-bear, some years give you a massive crop — plan to pick over a few weeks rather than trying to clear the tree in one pass.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Check readiness in late October",
        "description": "Most tangerine varieties ripen November through January. By late October, start tasting a sample fruit each week. When it''s sweet and the peel comes away easily, the crop is ready — even if rind color is still partly green."
      },
      {
        "stepNumber": 2,
        "title": "Use the taste + peel test",
        "description": "A ripe tangerine is sweet throughout and the peel slips off in a single piece with minimal tearing. An unripe tangerine is tart or bland, and the peel resists or tears the flesh. Both tests must pass — sweet alone isn''t enough; a peel that tears means internal membranes are still tight."
      },
      {
        "stepNumber": 3,
        "title": "Start on the sunny side of the tree",
        "description": "South- and west-facing fruit ripens first because of more sun exposure. Pick there first, then work around the tree as the season progresses. Shaded fruit may need an extra 2–4 weeks."
      },
      {
        "stepNumber": 4,
        "title": "Snip or twist gently",
        "description": "Give a ripe tangerine a slow twist — it detaches cleanly at the stem button. For fruit that resists twisting, snip the stem flush with pruners or citrus clippers. Pulling tears the rind and shortens shelf life."
      },
      {
        "stepNumber": 5,
        "title": "In heavy years, pace the harvest",
        "description": "Tangerines alternate-bear — a heavy year can produce hundreds of fruit on a backyard tree. Pick over a 3–6 week window rather than all at once. Ripe tangerines hold moderately well on the tree — better than satsumas, less than oranges — so there''s some flexibility."
      },
      {
        "stepNumber": 6,
        "title": "Store briefly",
        "description": "Tangerines keep 1 week at room temperature, 2–3 weeks in the refrigerator crisper. For a big crop, segment and freeze — tangerine segments keep 6 months frozen and are great for smoothies, baking, or defrosted salads.",
        "tip": "Thin-skinned tangerine varieties bruise easily when piled. Arrange in a single layer on a tray if storing for more than a few days."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners or citrus clippers",
      "Harvest basket or tray",
      "Step stool for taller trees"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC ANR ''Use Taste Rather Than Rind Color to Determine When to Harvest Citrus'' (taste as primary ripeness cue, color as a weak signal), UC Master Gardeners Santa Clara County ''Growing Great Citrus'' (peel-release as confirmation, harvest window by variety, on-tree holding behavior of mandarins vs satsumas), and UF/IFAS EDIS ''Citrus Culture in the Home Landscape'' (alternate-bearing context for tangerines, paced harvest in heavy years)."
  }'::jsonb,
  'UC ANR; UC Master Gardeners Santa Clara County; UF/IFAS EDIS',
  'Tangerine',
  'harvesting',
  true
);
