-- Phase D: per-task guides for Avocado (Persea americana).
--
-- Templates in lib/care/task-templates/avocado.ts — 5 categories:
--   pruning     → Light pruning only; do NOT cut into bare wood
--   feeding     → Spring feeding with split option for June
--   monitoring  → Summer monitoring (sunburn, persea mite, moisture)
--   protection  → Frost protection — the defining winter task for
--                 zone 9b backyards
--   harvesting  → Test one fruit off-tree; avocado ripens only after
--                 picking
--
-- Sources: UC IPM (Training and Pruning Avocado Trees; Avocado Home
-- and Landscape), UC ANR Ventura Cooperative Extension (Protecting
-- Avocados from Frost; Methods of Frost Protection; Answers to FAQs
-- about Avocados; Rehabilitation of Freeze-Damaged Citrus and
-- Avocado Trees).

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'avocado-pruning',
  '{
    "treeType": "Avocado",
    "title": "Avocado Light Pruning",
    "introduction": "Avocados are the one fruit tree where the right answer is usually ''prune less.'' Avocado wood does not reliably regenerate from older bare wood the way citrus or stone fruit does — cuts into thick older wood often stay bare. Kept to light thinning, the tree manages its own shape better than most gardeners can.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Time cuts before bloom or after fruit set",
        "description": "The safest windows are late February through March (before bloom) or just after fruit set. Pruning during bloom or early fruit development knocks the crop off. In coastal Southern California the bloom window stretches — adjust by watching your own tree, not a calendar."
      },
      {
        "stepNumber": 2,
        "title": "Never cut into bare older wood",
        "description": "This is the key rule. If you cut back a scaffold into thick, leafless older wood, that cut often does not regrow leaves. Make all cuts back to a live lateral branch or at least into wood that has green leaves nearby. When in doubt, make a smaller cut."
      },
      {
        "stepNumber": 3,
        "title": "Remove crossing and ground-touching branches",
        "description": "Take out only branches crossing and rubbing, broken branches, and any wood hanging all the way to the soil. Skirts 1–2 feet off the ground are fine and protect the trunk from sunburn; wood actually touching soil is a disease and pest pathway."
      },
      {
        "stepNumber": 4,
        "title": "Keep skirts low to shade the trunk",
        "description": "Avocado trunks sunburn badly — the bark cracks and splits when exposed to direct sun. The canopy''s lower skirts are the tree''s natural shade. Don''t strip them away trying to make the tree look park-like; shade the trunk or paint it with white latex (50/50 with water) if you must open it up."
      },
      {
        "stepNumber": 5,
        "title": "Don''t prune frost-damaged wood yet",
        "description": "If a freeze blackened leaves and shoots this winter, wait until mid-summer (6–8 months after the freeze) to prune. New growth will emerge below the damage and show you where the live wood stops. Cutting early removes live tissue the tree would have used to recover.",
        "tip": "A moderate avocado doesn''t need annual pruning at all. Some home trees go 3–5 years between any cuts beyond the occasional broken branch."
      },
      {
        "stepNumber": 6,
        "title": "Control size with restraint",
        "description": "If a mature avocado is growing too large, the safest size-control strategy is drop-crotch pruning — cut back the tallest branches to lower side branches, spread over 2–3 seasons rather than all at once. Topping an avocado into bare wood is usually a slow way to kill it."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners (1–1.5 inch cuts)",
      "Loppers (up to 2 inch cuts)",
      "Pruning saw (larger cuts)",
      "White latex paint (50/50 with water) for trunk sunburn protection"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Training and Pruning Avocado Trees'' (light pruning rule; pruning before bloom or just after fruit set; don''t cut into bare older wood because avocado doesn''t reliably regenerate from it) and UC ANR Ventura Cooperative Extension ''Rehabilitation of Freeze-Damaged Citrus and Avocado Trees'' (wait until new growth has emerged before pruning frost damage — typically mid-summer, 6–8 months post-freeze)."
  }'::jsonb,
  'UC IPM; UC ANR Ventura Cooperative Extension',
  'Avocado',
  'pruning',
  true
),
(
  'avocado-feeding',
  '{
    "treeType": "Avocado",
    "title": "Avocado Spring Feeding",
    "introduction": "Avocados pull nitrogen steadily through bloom and early fruit set in spring. The backyard rule is a single modest spring feeding, optionally split to add a smaller June dose. A citrus-avocado fertilizer with zinc is the common pick — avocados are famously prone to zinc deficiency, which shows as small, cupped leaves with tip burn.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Use a citrus-avocado fertilizer with micronutrients",
        "description": "Pick a product labeled for citrus or citrus/avocado that includes zinc, iron, and manganese. Generic 10-10-10 lacks the micronutrients. Zinc is the one avocado care most often gets wrong — a zinc-deficient tree looks like a perfectly healthy smaller-leaved version of a normal tree."
      },
      {
        "stepNumber": 2,
        "title": "Time the main feeding in late February to early March",
        "description": "Apply before bloom. The nitrogen supports flower opening and early fruit set — the two biggest demand periods of the year."
      },
      {
        "stepNumber": 3,
        "title": "Use 1/10 lb of actual nitrogen per year of tree age",
        "description": "A 5-year-old tree gets 1/2 lb of actual nitrogen. Cap the total at 2 lbs of actual nitrogen per year on a mature tree. On coastal soils that drain well, split into two applications (half in March, half in June). On clay soils with slower drainage, one March application is enough."
      },
      {
        "stepNumber": 4,
        "title": "Spread under the full canopy",
        "description": "Avocado feeder roots extend well past the visible drip line. Spread fertilizer from 1 foot outside the trunk to at least 2 feet past the drip line. Rake mulch back before, replace it after. Keep granules off the trunk."
      },
      {
        "stepNumber": 5,
        "title": "Water in thoroughly",
        "description": "Water 1–2 inches over the fed area right after spreading. Avocado roots are shallow and any dry fertilizer in the root zone burns them. Sunburst-yellow leaf tips often mean fertilizer burn from under-watered application.",
        "tip": "If leaves are pale and veins stand out, that''s nitrogen. If leaves are small and cupped with tip burn, that''s zinc. Match the response to the symptom — a foliar zinc spray in spring corrects the small-leaf problem faster than soil application."
      },
      {
        "stepNumber": 6,
        "title": "Stop feeding by early July",
        "description": "Late-season nitrogen pushes tender new growth that doesn''t harden off before winter and is the easiest target for winter cold damage. No feeding from July onward. Mulch with wood chips to support slow nitrogen release through the growing season."
      }
    ],
    "toolsNeeded": [
      "Citrus-avocado fertilizer (with zinc, iron, manganese)",
      "Measuring cup",
      "Garden rake",
      "Hose or soaker line"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC ANR Ventura Cooperative Extension ''Answers to Frequently Asked Questions about Avocados'' (modest nitrogen rate, split March/June application for well-drained soils, citrus-avocado fertilizer with zinc and other micronutrients as the standard pick) and UC IPM ''Avocado: Cultural Practices and Nutrient Deficiencies'' (zinc deficiency symptoms, foliar vs soil application, small-leaf cupping signal)."
  }'::jsonb,
  'UC ANR Ventura Cooperative Extension; UC IPM',
  'Avocado',
  'feeding',
  true
),
(
  'avocado-monitoring',
  '{
    "treeType": "Avocado",
    "title": "Avocado Summer Monitoring",
    "introduction": "Summer is when three avocado problems show up: sunburned bark on exposed trunks or scaffolds, persea mite damage on leaves, and fruit drop from inconsistent soil moisture. A monthly walk-around in July–August keeps all three in check without spraying.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Check the trunk and scaffolds for sunburn",
        "description": "Bare or recently exposed bark can sunburn — look for vertical cracks, peeling bark, and dark scorched patches on the south and west sides. If you find any, paint the exposed wood with a 50/50 mix of white latex paint and water (interior latex, not acrylic, not oil). Repeat if it washes off in rain."
      },
      {
        "stepNumber": 2,
        "title": "Inspect leaves for persea mite",
        "description": "Persea mite (mostly a California pest) causes round brown-tan spots on the underside of leaves, often along the midrib. Damaged leaves look dull on top and feel coarse. A hand lens shows the tiny yellow mites inside small webs on the leaf underside."
      },
      {
        "stepNumber": 3,
        "title": "Water-jet mite populations weekly",
        "description": "A strong spray of water directed up into the canopy knocks persea mite populations down without chemicals, especially on young trees. Do this in the morning so leaves dry by afternoon. Insecticidal soap or narrow-range horticultural oil can be used on heavy infestations — follow label rates and avoid applying when daytime highs are above 85°F."
      },
      {
        "stepNumber": 4,
        "title": "Monitor soil moisture weekly",
        "description": "Avocado feeder roots sit in the top foot of soil and dry out fast in summer heat. Stick a finger 4–6 inches into the soil under the canopy — if it''s dry to that depth, water deeply. Shallow frequent watering is worse than deeper less-frequent watering."
      },
      {
        "stepNumber": 5,
        "title": "Watch for fruit drop patterns",
        "description": "Some June drop is normal — the tree self-thins a heavy set. But heavy drop through July and August usually means inconsistent water, heat stress, or poor pollination. If drop is severe, step up irrigation frequency and keep mulch 3–4 inches deep at the drip line.",
        "tip": "Anthracnose causes dark sunken spots on ripening fruit. It''s worse in humid climates — the FL home-landscape answer is copper fungicide sprays during bloom; in CA, improving canopy airflow by light thinning usually keeps it minimal."
      },
      {
        "stepNumber": 6,
        "title": "Keep mulch 3 inches deep at the drip line",
        "description": "Wood-chip mulch (not bark nuggets — they''re too coarse) at 3 inches buffers soil temperature and moisture, suppresses weeds, and slowly feeds the tree as it breaks down. Keep mulch 4–6 inches off the trunk — contact with bark rots the crown."
      }
    ],
    "toolsNeeded": [
      "White latex paint (50/50 with water) for sunburn protection",
      "Hand lens (for mite identification)",
      "Garden hose with strong spray nozzle",
      "Insecticidal soap or horticultural oil (optional)",
      "Wood-chip mulch"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Avocado'' (Managing Pests in Gardens: Trees and Shrubs) (persea mite symptoms and water-jet management, sunburn painting at 50/50 latex) and UC ANR Ventura Cooperative Extension ''Answers to Frequently Asked Questions about Avocados'' (irrigation depth rule for shallow avocado roots, mulch depth and trunk-clearance convention, June drop vs. stress-driven drop distinction)."
  }'::jsonb,
  'UC IPM; UC ANR Ventura Cooperative Extension',
  'Avocado',
  'monitoring',
  true
),
(
  'avocado-protection',
  '{
    "treeType": "Avocado",
    "title": "Avocado Frost Protection",
    "introduction": "Avocado is the most cold-tender common backyard tree in the US. Leaves are damaged below about 30°F; young trees can die outright in a hard freeze. Frost protection is the single most important winter task for any zone 9b backyard avocado. The principle is the same as citrus — trap the radiant heat of moist soil under a frame-held cover — but avocados need more active protection because they''re less cold-hardy than most citrus.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Water the soil deeply the day before a freeze",
        "description": "Moist soil stores and releases 2–3 times the heat of dry soil through the night. This is the single highest-impact step. Water the full area under and slightly past the canopy the day before a forecast freeze — don''t wait until the cold night itself."
      },
      {
        "stepNumber": 2,
        "title": "Clear mulch from the root zone on the freeze day",
        "description": "Mulch insulates the soil from daytime sun. On the day of a forecast freeze, rake mulch back so bare soil can absorb heat during the day and release it at night. Replace the mulch after the cold spell passes."
      },
      {
        "stepNumber": 3,
        "title": "Cover young trees all the way to the ground",
        "description": "Use frost cloth, old bedsheets, or burlap over a frame (stakes, a tomato cage, a sawhorse). The cover MUST reach the ground all the way around — the warmth you''re trapping rises from the soil, not the tree. Plastic transfers heat too quickly and burns any leaves it touches."
      },
      {
        "stepNumber": 4,
        "title": "Use incandescent lights for hard freezes",
        "description": "For nights forecast below 28°F, string old-style incandescent Christmas lights (the kind that warm up — LEDs produce no usable heat) through the canopy inside the cover, or place a 100W outdoor bulb near the base. A few degrees of added warmth often decides whether the tree survives."
      },
      {
        "stepNumber": 5,
        "title": "Accept that mature trees are harder to protect",
        "description": "A full-grown avocado may be too large to cover. If cold is forecast: water deeply, run a sprinkler under the tree overnight (constantly-moving water releases heat), and consider running a wind machine or fan on a still, cold night to break up the cold-air layer. A hard freeze on a mature unprotected tree may require the whole rehabilitation workflow in spring.",
        "tip": "After a frost event, resist the urge to prune blackened shoots immediately — you can''t tell how much is dead for 6–8 months. Wait for new growth to show the live boundary, then cut."
      },
      {
        "stepNumber": 6,
        "title": "Remove covers in the morning",
        "description": "Pull covers off as soon as the air warms above freezing — usually mid-morning. Leaving them on traps heat on a sunny day and cooks the tree. Rewet the soil if another freeze is forecast within a few days."
      }
    ],
    "toolsNeeded": [
      "Frost cloth (Agribon) or old bedsheets/burlap",
      "Stakes, tomato cage, or frame to keep cover off leaves",
      "Stones or bricks to weight the cover at ground level",
      "Incandescent Christmas lights or 100W outdoor bulb (optional, for severe cold)",
      "Sprinkler or micro-sprinkler (for large trees)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC ANR Ventura Cooperative Extension ''Protecting Avocados from Frost'' (young-tree cover technique, 5-degree protection from frost cloth + frame, avoid pruning until new growth reveals live wood), UC ANR Ventura ''Methods of Frost Protection'' (moist-soil heat retention, bare-soil preference during freeze, incandescent heat sources, wind machines for mature trees), and UC ANR Ventura ''Rehabilitation of Freeze-Damaged Citrus and Avocado Trees'' (wait-to-prune rule: 6–8 months post-freeze, let new growth reveal live boundary)."
  }'::jsonb,
  'UC ANR Ventura Cooperative Extension',
  'Avocado',
  'protection',
  true
),
(
  'avocado-harvesting',
  '{
    "treeType": "Avocado",
    "title": "Avocado Harvest",
    "introduction": "Avocados don''t ripen on the tree. They only soften after being picked — which means the standard ripeness tests (squeeze, color, smell) don''t work to time the harvest. Instead, you pick one sample fruit that looks full-sized and leave it at room temperature. If it softens evenly over 7–10 days, the tree is mature and you can start picking the rest.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Know your variety''s window",
        "description": "Hass (the most common California variety) harvests November through spring — sometimes stretching into the following fall. Bacon, Fuerte, and Zutano harvest earlier (fall). Florida varieties (Choquette, Day, Miguel) generally harvest July through October. Use your variety''s window as the earliest possible start, not the target."
      },
      {
        "stepNumber": 2,
        "title": "Pick one sample fruit that looks full-sized",
        "description": "Choose a fruit that looks as large as a mature one of your variety. Don''t pick the biggest (it may be an outlier) — pick a typical full-sized one. Use pruners to snip the stem close to the fruit, leaving a short stem attached."
      },
      {
        "stepNumber": 3,
        "title": "Leave it at room temperature for 7–10 days",
        "description": "Set the test fruit on the counter and check daily. Feel how it changes — a mature avocado softens evenly over a week, gradually yielding to gentle pressure. The color on Hass darkens; green-skinned varieties mostly just soften."
      },
      {
        "stepNumber": 4,
        "title": "Read the test result",
        "description": "If the fruit softens evenly to yielding-but-not-mushy over 7–10 days, the tree is mature — start harvesting. If it shrivels, stays rock-hard past two weeks, or rots without softening, the tree isn''t mature yet; wait 3–4 weeks and retest with a different fruit."
      },
      {
        "stepNumber": 5,
        "title": "Pick as you want to eat — use the tree as storage",
        "description": "Mature avocados store on the tree for weeks to months. Pick 3–5 at a time to ripen indoors. This is the single biggest advantage of growing your own — you set the ripening schedule instead of a grocery shelf. Hass can hang on a tree well into summer the year after it matures.",
        "tip": "Once picked, avocados ripen in 3–7 days on the counter. To slow ripening, refrigerate firm fruit. To speed it, put the fruit in a paper bag with a banana or apple."
      },
      {
        "stepNumber": 6,
        "title": "Clip, don''t pull",
        "description": "Cut each fruit off with pruners, leaving a short stem stub. Pulling tears bark from the spur. A broken stem hole also lets stem-end rot into the fruit — worst case, your ripening avocado spoils from inside before you can use it."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners",
      "Harvest bag (padded) or small basket",
      "Step stool or long-reach pole pruner for tall trees"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC ANR Ventura Cooperative Extension ''Answers to Frequently Asked Questions about Avocados'' (one-fruit sample test for tree maturity, 7–10 day off-tree softening as the pass/fail signal, on-tree storage for months on Hass, clip-don''t-pull technique). Florida-variety harvest windows cross-referenced with UF/IFAS EDIS ''Avocado Growing in the Florida Home Landscape''."
  }'::jsonb,
  'UC ANR Ventura Cooperative Extension; UF/IFAS EDIS',
  'Avocado',
  'harvesting',
  true
);
