-- Phase C: per-task guides for Grapefruit (Citrus × paradisi).
--
-- Templates in lib/care/task-templates/grapefruit.ts — 4 categories
-- (protection intentionally skipped; grapefruit are typically zone 9a+
-- and the overview guide covers any cold-specific advice):
--   feeding     → Pre-bloom + summer feeding (shared guide)
--   monitoring  → Citrus pest inspection
--   harvesting  → Long November-into-spring harvest window
--
-- Sources: UF/IFAS EDIS (Citrus Culture in the Home Landscape),
-- Clemson HGIC (In-Ground Citrus Production), UC IPM (Citrus Pest
-- Management, Asian Citrus Psyllid).

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'grapefruit-feeding',
  '{
    "treeType": "Grapefruit",
    "title": "Grapefruit Feeding",
    "introduction": "Grapefruit are the heaviest-yielding citrus in the home orchard — a mature tree can carry 500+ fruit through a season. That yield pulls hard on nitrogen and micronutrients, especially during bloom and fruit sizing. The pattern is 2–3 larger split feedings per year, heavier per dose than other citrus because of the crop load.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Use a citrus-specific fertilizer with micronutrients",
        "description": "Pick a citrus blend (6-6-6 or 8-8-8 for young trees, 10-10-10 for mature) with iron, zinc, and manganese. Generic lawn or all-purpose fertilizer lacks the micronutrients needed to keep grapefruit leaves fully green and fruit sizing properly."
      },
      {
        "stepNumber": 2,
        "title": "Time the pre-bloom feeding",
        "description": "Apply the year''s largest dose in February — just before bud swell. This is nitrogen-heavy, timed to support bloom and early fruit set. Spread in a ring from 1 ft outside the trunk to past the drip line; keep granules off the trunk."
      },
      {
        "stepNumber": 3,
        "title": "Follow with mid-spring and summer doses",
        "description": "Apply a second feeding in May and a third in June. Mature grapefruit trees can take 3–4 lbs per application; young trees take smaller amounts. A heavy-bearing tree should get the full 2–3 splits — skipping feedings pulls the tree into the next year''s smaller crop."
      },
      {
        "stepNumber": 4,
        "title": "Mulch 2–3 inches at the drip line",
        "description": "Grapefruit are thirsty in summer heat. A 2–3 inch mulch layer at the drip line — not against the trunk — holds soil moisture, suppresses weeds, and moderates soil temperature. Rake mulch back before applying fertilizer; replace after.",
        "tip": "Avoid volcano mulching — piling mulch against the trunk invites crown rot and attracts rodents."
      },
      {
        "stepNumber": 5,
        "title": "Stop feeding by late August",
        "description": "Fall nitrogen pushes tender new growth that is vulnerable to winter cold and attracts citrus leafminer. Any feeding after late August pushes the tree out of its natural hardening-off cycle."
      },
      {
        "stepNumber": 6,
        "title": "Water deeply after each feeding",
        "description": "Water at least 1 inch over the fed area right after application — without water, granular fertilizer burns roots on contact and won''t dissolve into the root zone. A soaker hose at the drip line works well for large trees."
      }
    ],
    "toolsNeeded": [
      "Citrus-specific granular fertilizer with micronutrients",
      "Measuring cup",
      "Mulch (2–3 inches at drip line)",
      "Soaker hose or drip line"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Citrus Culture in the Home Landscape'' (6-6-6/8-8-8/10-10-10 NPK rates, 3–4 lbs per application for mature citrus, 2–3 times per year, drip-line spread) and Clemson HGIC ''In-Ground Citrus Production'' (mulch 2–3 inches at drip line, heavy-yield grapefruit context, avoid trunk mulching). Stop-by-late-August guidance drawn from UC IPM citrus fertilization pages."
  }'::jsonb,
  'UF/IFAS EDIS; Clemson HGIC',
  'Grapefruit',
  'feeding',
  true
),
(
  'grapefruit-monitoring',
  '{
    "treeType": "Grapefruit",
    "title": "Citrus Pest Inspection",
    "introduction": "Grapefruit attract the standard citrus pest complex — aphids, scale, citrus leafminer — plus Asian citrus psyllid, the insect that spreads HLB (citrus greening). HLB is the most serious citrus disease in the US, with no home cure. Monthly inspection during growth flushes catches infestations early and protects a tree that may take 5 years to reach full production.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Inspect every 2–3 weeks through flush periods",
        "description": "Grapefruit flush new growth multiple times a year — each flush is a pest magnet. Walk the tree every 2–3 weeks spring through fall, more often in the first 5 years before the canopy is established."
      },
      {
        "stepNumber": 2,
        "title": "Look for sticky leaves and sooty mold",
        "description": "Run a hand along a leaf. Sticky = honeydew (aphids, scale, mealybug). Black sooty patches are the mold that grows on honeydew. Both mean a colony is established somewhere above."
      },
      {
        "stepNumber": 3,
        "title": "Check stems and leaf undersides for scale",
        "description": "Scale look like small bumps glued to bark or leaf veins — brown, gray, or waxy white. They don''t move. A fingernail flicks off live scale and leaves a smear; dead ones flake away dry. Small infestations scrub off with a soft brush; larger ones controlled with horticultural oil per label."
      },
      {
        "stepNumber": 4,
        "title": "Watch for citrus leafminer on young flush",
        "description": "Silvery serpentine trails on young leaves are citrus leafminer. Mature leaves tolerate it; the concern is young trees (under 5 years) where most leaves are flushing. Remove heavily mined leaves and avoid fertilizer that pushes extra flush."
      },
      {
        "stepNumber": 5,
        "title": "Scout for Asian citrus psyllid",
        "description": "ACP adults are about the size of an aphid with brownish mottled wings — they feed with head down and tail in the air. Nymphs are tiny, yellowish, and excrete white waxy tubules. HLB symptoms: blotchy mottled leaves, misshapen and bitter fruit. Report suspected psyllids or HLB to your local agricultural commissioner — there''s no home cure."
      },
      {
        "stepNumber": 6,
        "title": "Control ants, protect beneficials",
        "description": "Ants farm honeydew and protect aphids/scale from predators. A sticky Tanglefoot band around the trunk blocks ants without harming ladybugs, lacewings, or parasitic wasps. Avoid broad-spectrum insecticides; spot-treat with soap or oil only where needed.",
        "tip": "Spray horticultural oil on cool, overcast mornings — hot sunny days can burn leaves coated in oil."
      }
    ],
    "toolsNeeded": [
      "Hand lens (optional)",
      "Garden hose with spray nozzle",
      "Insecticidal soap or horticultural oil",
      "Soft brush",
      "Sticky Tanglefoot trunk band"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Asian Citrus Psyllid and Huanglongbing Disease'' (PMG PN74155 — ACP identification, HLB symptoms, ant interference with biological control), UC IPM ''Citrus Pest Management Guidelines — Home Landscape'' (scale and leafminer ID and controls), and UF/IFAS EDIS ''Citrus Tree Care for the Home Gardener in the HLB Era'' (monthly scouting during flushes, report-to-extension guidance)."
  }'::jsonb,
  'UC IPM; UF/IFAS EDIS',
  'Grapefruit',
  'monitoring',
  true
),
(
  'grapefruit-harvesting',
  '{
    "treeType": "Grapefruit",
    "title": "Grapefruit Harvest",
    "introduction": "Grapefruit are the most patient harvest in the citrus calendar. Unlike oranges, which peak and pass, grapefruit hold on the tree for months and actually sweeten with time. The long holding window (November into April or even May) is a feature — pick as you need fresh fruit rather than trying to clear the tree in a single pass.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Start tasting in November",
        "description": "Grapefruit color up and become technically ripe in late fall, but early-season fruit is often sharp and acidic. Pick one fruit in mid-November and taste. If it''s sweet and juicy, start picking; if sharp, wait 2–4 weeks and try again."
      },
      {
        "stepNumber": 2,
        "title": "Let the fruit sweeten on the tree",
        "description": "Unlike most citrus, grapefruit sweetness increases with additional time on the tree. Fruit picked in January is sweeter than fruit picked in November from the same tree. Holding fruit until it reaches your preferred flavor is the entire point of the long harvest window."
      },
      {
        "stepNumber": 3,
        "title": "Taste-test, don''t judge by color",
        "description": "Color alone is a weak signal — Ruby Red and Rio Red turn reddish-pink while still tart early in the season. Taste is the only reliable ripeness cue. Grapefruit does not sweeten after picking."
      },
      {
        "stepNumber": 4,
        "title": "Pick from the sunny side of the tree first",
        "description": "Fruit on the south and west sides of the tree ripen first because of more sun exposure. Start there, then work around the tree as the season progresses. Shaded-side fruit often needs an extra month."
      },
      {
        "stepNumber": 5,
        "title": "Snip the stem — don''t pull",
        "description": "Use pruners to cut the stem close to the fruit. Pulling tears the rind and can strip bark from the twig. A clean cut just above the button keeps the fruit storage-ready and protects the tree."
      },
      {
        "stepNumber": 6,
        "title": "Store briefly off-tree",
        "description": "Grapefruit keep 1–2 weeks at room temperature, 6–8 weeks in the refrigerator crisper. For longer storage, juice and freeze — grapefruit juice keeps 6 months frozen. The tree itself is the best storage; the longer you leave ripe fruit on the tree, the less you need to refrigerate.",
        "tip": "Very late-season grapefruit (March–April) can be affected by stylar-end rot — check the blossom end for soft dark spots before eating or storing."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners or sharp scissors",
      "Step ladder (mature trees are tall)",
      "Harvest basket or bag"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Citrus Culture in the Home Landscape'' (extended fall-through-spring harvest, fruit sweetens on the tree) and Clemson HGIC ''In-Ground Citrus Production'' (Ruby Red, Rio Red, Marsh varieties with long holding windows). Stylar-end rot and cut-vs-pull guidance drawn from UC IPM citrus postharvest pages."
  }'::jsonb,
  'UF/IFAS EDIS; Clemson HGIC; UC IPM',
  'Grapefruit',
  'harvesting',
  true
);
