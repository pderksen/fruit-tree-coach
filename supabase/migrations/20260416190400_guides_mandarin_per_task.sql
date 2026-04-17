-- Phase C: per-task guides for Mandarin (Citrus reticulata).
--
-- Templates in lib/care/task-templates/mandarin.ts:
--   feeding     → Spring + summer feeding (shared guide)
--   monitoring  → Citrus pest inspection
--   protection  → Frost protection (satsumas tolerate brief mid-20s °F)
--   harvesting  → Harvest by taste, not color — signature mandarin quirk
--
-- Sources: UC Master Gardeners Santa Clara County (Growing Great
-- Citrus), UC ANR (Use Taste Rather Than Rind Color), UC IPM (Citrus
-- Pest Management, Asian Citrus Psyllid, Freezing/Frost Damage),
-- UC ANR Publication 8100.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'mandarin-feeding',
  '{
    "treeType": "Mandarin",
    "title": "Mandarin Feeding",
    "introduction": "Mandarins — including satsumas and clementines — are cold-hardier and smaller than oranges but need the same split-feeding pattern. For young trees (first 4–5 years), the goal is frequent light feedings through the growing season. For mature bearing trees, 2–3 larger split doses with a citrus-specific fertilizer carry the crop from bloom through harvest.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Pick a citrus-specific fertilizer",
        "description": "Use a citrus blend with micronutrients (iron, zinc, manganese). Generic all-purpose fertilizer lacks the micronutrients mandarins need to keep leaves fully green. Yellowing between the veins on new leaves is a micronutrient deficiency — fix it with a citrus-specific blend or foliar spray."
      },
      {
        "stepNumber": 2,
        "title": "Light, frequent feedings for young trees",
        "description": "In the first 4–5 years, apply about 1 tablespoon of actual nitrogen per month, May through August. Scale up the tablespoons each year as the tree grows. Young trees respond better to smaller, more frequent amounts than to one big annual dose."
      },
      {
        "stepNumber": 3,
        "title": "Split the annual total for mature trees",
        "description": "A mature mandarin can take up to 1 lb of actual nitrogen per year, split across 2–3 applications. Time the largest share in late winter (before bud swell), a second in late spring, and an optional third in early summer. Stop by late August."
      },
      {
        "stepNumber": 4,
        "title": "Spread in a ring to the drip line",
        "description": "Rake mulch back, sprinkle fertilizer in a ring from 1 ft outside the trunk to just past the drip line, then replace the mulch. Keep granules off the trunk — direct contact burns bark."
      },
      {
        "stepNumber": 5,
        "title": "Water deeply after feeding",
        "description": "Water at least 1 inch over the fed area right after application. Without water, granular fertilizer burns roots on contact and won''t dissolve into the root zone."
      },
      {
        "stepNumber": 6,
        "title": "Avoid fall nitrogen",
        "description": "Skip any feeding after late August. Fall nitrogen pushes tender new growth that attracts citrus leafminer and is vulnerable to winter cold. Let the tree harden off naturally.",
        "tip": "Container mandarins need more frequent, lighter feedings — about every 6 weeks during the growing season — because watering leaches nutrients from the pot."
      }
    ],
    "toolsNeeded": [
      "Citrus-specific granular fertilizer with micronutrients",
      "Measuring cup",
      "Garden rake",
      "Hose or soaker line"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC Master Gardeners Santa Clara County ''Growing Great Citrus'' (~1 tbsp actual nitrogen per month May–August for young trees, up to 1 lb actual nitrogen per year for mature trees, avoid summer/fall pruning and feeding to limit leafminer) and UF/IFAS EDIS ''Citrus Culture in the Home Landscape'' (split-application schedule, drip-line spread, citrus micronutrient requirements)."
  }'::jsonb,
  'UC Master Gardeners Santa Clara County; UF/IFAS EDIS',
  'Mandarin',
  'feeding',
  true
),
(
  'mandarin-monitoring',
  '{
    "treeType": "Mandarin",
    "title": "Citrus Pest Inspection",
    "introduction": "Mandarins attract the standard citrus pest complex — aphids, scale, citrus leafminer — plus Asian citrus psyllid, the vector of HLB (citrus greening). Because mandarins are often the first citrus a home gardener plants (they''re cold-hardier and smaller than oranges), the monitoring cadence is especially important — healthy young mandarins reward years of regular scouting.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Walk the tree every 2–3 weeks",
        "description": "Mandarins flush new growth multiple times a year. Check the tree every 2–3 weeks from early spring through fall — more often in the first 5 years before the canopy is established."
      },
      {
        "stepNumber": 2,
        "title": "Look for sticky leaves and sooty mold",
        "description": "Run a hand along a leaf. Sticky = honeydew (aphids, scale, mealybug). Black sooty patches are the mold that grows on honeydew. Both mean a colony is established above."
      },
      {
        "stepNumber": 3,
        "title": "Check stems and leaf undersides for scale",
        "description": "Scale look like small bumps glued to bark or leaf veins — brown, gray, or waxy white. They don''t move. A fingernail flicks off live scale and leaves a smear. Small infestations scrub off with a soft brush; larger ones respond to horticultural oil per label."
      },
      {
        "stepNumber": 4,
        "title": "Watch for citrus leafminer",
        "description": "Silvery serpentine trails on young leaves are citrus leafminer — a moth larva tunneling inside the leaf. Most damaging on trees under 5 years. Remove heavily mined leaves. Critically, avoid heavy summer pruning on mandarins — fresh flush is a leafminer magnet."
      },
      {
        "stepNumber": 5,
        "title": "Scout for Asian citrus psyllid",
        "description": "ACP adults are about aphid-sized with brownish mottled wings; they feed head-down, tail-up. Nymphs are yellow and excrete white waxy tubules. HLB symptoms: blotchy mottled leaves, misshapen bitter fruit. Report suspected psyllids or HLB to your local agricultural commissioner — there is no home cure."
      },
      {
        "stepNumber": 6,
        "title": "Control ants, encourage beneficials",
        "description": "Ants farm honeydew and protect aphids/scale from predators. A sticky Tanglefoot band around the trunk blocks ants without harming ladybugs, lacewings, or parasitic wasps. Avoid broad-spectrum insecticides on flowering mandarins to protect bees.",
        "tip": "Time horticultural oil sprays for cool overcast mornings — hot sun plus oil burns leaves."
      }
    ],
    "toolsNeeded": [
      "Hand lens (optional)",
      "Garden hose with spray nozzle",
      "Insecticidal soap or horticultural oil",
      "Soft brush",
      "Sticky trunk band (Tanglefoot)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Asian Citrus Psyllid and Huanglongbing Disease'' (PMG PN74155 — ACP identification, HLB symptoms, ant interference with biological control), UC IPM ''Citrus Pest Management Guidelines — Home Landscape'' (scale and leafminer ID and controls), and UC Master Gardeners Santa Clara County ''Growing Great Citrus'' (avoid summer pruning to limit leafminer)."
  }'::jsonb,
  'UC IPM; UC Master Gardeners Santa Clara County',
  'Mandarin',
  'monitoring',
  true
),
(
  'mandarin-protection',
  '{
    "treeType": "Mandarin",
    "title": "Mandarin Frost Protection",
    "introduction": "Satsuma mandarins are the cold-hardiest common citrus after kumquat — brief dips into the mid-20s °F are survivable for established trees. But sustained temperatures below 28°F for more than a few hours damage fruit and tender growth on any mandarin. The goal is to trap soil heat under the canopy overnight.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Water the soil deeply the day before",
        "description": "Moist soil absorbs and releases 2–3 times more heat overnight than dry soil. Water under the canopy the day before a forecast freeze — the single highest-impact frost protection step."
      },
      {
        "stepNumber": 2,
        "title": "Rake mulch back to expose bare soil",
        "description": "Mulch insulates soil from daytime sun. On the day of a forecast freeze, rake mulch away from the root zone so bare soil can absorb heat through the day. Replace the mulch after the cold spell."
      },
      {
        "stepNumber": 3,
        "title": "Cover with sheets or frost cloth — not plastic",
        "description": "Drape sheets, burlap, or frost cloth (Agribon) over the canopy on a frame of stakes or a tomato cage. Avoid plastic — it transfers heat quickly and burns any leaves it touches. Ice forms where the cover contacts foliage."
      },
      {
        "stepNumber": 4,
        "title": "Seal the cover to the ground",
        "description": "Run the cover all the way to the ground on every side — the warmth you''re trapping rises from the soil, not from the tree. Weight the edges with stones, bricks, or boards. Leave no gap at the base."
      },
      {
        "stepNumber": 5,
        "title": "Add a heat source for severe cold",
        "description": "For nights forecast below 26°F (young trees) or 22°F (mature satsumas), string incandescent Christmas lights (not LED) through the canopy inside the cover, or set a 100W outdoor bulb at the trunk base. A few degrees of added warmth often saves the tree."
      },
      {
        "stepNumber": 6,
        "title": "Remove the cover in the morning",
        "description": "Pull the cover off once temperatures rise above freezing — usually mid-morning. Leaving it on cooks the tree on a sunny day. If more cold is forecast within a few days, rewet the soil and re-cover before sunset.",
        "tip": "Pick any ripe mandarins before a hard freeze — frozen fruit goes mushy and drops."
      }
    ],
    "toolsNeeded": [
      "Old bedsheets, burlap, or frost cloth",
      "Stakes or tomato cage for a frame",
      "Stones or bricks to weight the edges",
      "Incandescent Christmas lights or 100W outdoor bulb (for severe cold)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Freezing and Frost Damage to Citrus'' (28°F damage threshold, cover materials, pick ripe fruit before freeze), UC ANR Publication 8100 ''Frost Protection for Citrus and Other Subtropicals'' (moist-soil heat retention, bare-soil preference, cover-to-ground seal, incandescent heat sources), and UC Master Gardeners Santa Clara County ''Growing Great Citrus'' (satsuma cold tolerance into mid-20s °F)."
  }'::jsonb,
  'UC IPM; UC ANR',
  'Mandarin',
  'protection',
  true
),
(
  'mandarin-harvesting',
  '{
    "treeType": "Mandarin",
    "title": "Mandarin Harvest",
    "introduction": "Mandarins have one defining quirk: they can be fully ripe while the rind is still partly green. This is especially true of satsumas in mild-winter regions — the chilly nights that drive rind color aren''t always cold enough to fully turn a fruit that''s already sweet inside. Trust taste over color. And unlike oranges, satsuma mandarins do not hold well on the tree — pick promptly once ripe.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Start tasting by your variety''s expected window",
        "description": "Satsuma mandarins: late October through December. Clementines and most other mandarins: December through April. By the start of the expected window, pick a sample fruit and taste — don''t wait for full orange color, especially on satsumas."
      },
      {
        "stepNumber": 2,
        "title": "Use the taste + peel test",
        "description": "A ripe mandarin is sweet and the peel comes away easily in a single pull. An unripe fruit is tart or bland, and the peel resists or tears the flesh. If both the taste is sweet and the peel loosens, the crop is ready regardless of color."
      },
      {
        "stepNumber": 3,
        "title": "Don''t wait for full color on satsumas",
        "description": "Satsumas in mild-winter regions commonly stay partly green on the rind even after the flesh is fully ripe and sweet. Waiting for full orange color often means waiting past peak — the fruit can go puffy, lose flavor, or start rind breakdown on the tree."
      },
      {
        "stepNumber": 4,
        "title": "Pick satsumas promptly",
        "description": "Satsuma rinds are delicate and the fruit does not hold well on the tree once ripe. Pick over a 2–3 week window rather than leaving a full crop standing. Other mandarins (like clementines) hold longer and can be picked as needed."
      },
      {
        "stepNumber": 5,
        "title": "Snip the stem — don''t pull",
        "description": "Satsuma rinds are especially prone to tearing. Use pruners or citrus clippers to snip the stem flush with the fruit. A torn rind invites rot and shortens shelf life. Handle satsumas gently — bruising shows quickly on thin-skinned fruit."
      },
      {
        "stepNumber": 6,
        "title": "Store briefly, use promptly",
        "description": "Satsumas keep 1 week at room temperature, 2–3 weeks in the refrigerator crisper. Other mandarins store a little longer. For a big crop, segment and freeze — mandarin segments keep 6 months frozen and are ideal for smoothies or baking.",
        "tip": "Keep satsumas out of piled masses — weight on the bottom fruit bruises the rinds. Arrange in a single layer on a tray if storing for more than a few days."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners or citrus clippers",
      "Harvest basket (single-layer tray for satsumas)",
      "Step stool for taller trees"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC Master Gardeners Santa Clara County ''Growing Great Citrus'' (rind may stay green when fruit is ready, satsuma harvest December–April by variety, fruit doesn''t hold well on tree for satsumas), UC ANR ''Use Taste Rather Than Rind Color to Determine When to Harvest Citrus'' (taste as primary ripeness cue, color as weak signal), and UC ANR ''Satsuma Rind Breakdown'' (rind fragility, prompt picking, no on-tree holding)."
  }'::jsonb,
  'UC Master Gardeners Santa Clara County; UC ANR',
  'Mandarin',
  'harvesting',
  true
);
