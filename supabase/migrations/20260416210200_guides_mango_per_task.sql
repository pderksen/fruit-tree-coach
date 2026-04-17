-- Phase E: per-task guides for Mango (Mangifera indica).
--
-- Templates in lib/care/task-templates/mango.ts — 4 categories
-- (protection intentionally skipped; mango freeze tolerance is a
-- zone-boundary question handled by the overview guide):
--   pruning     → Post-harvest selective pruning (July–August)
--   feeding     → Low-N, high-K split feeding for bearing trees
--   monitoring  → Anthracnose + powdery mildew protection at bloom
--                 — the defining Florida mango task
--   harvesting  → Shoulder-and-nose fill + internal yellow flesh
--                 check; ripen off-tree at 70–75°F
--
-- Sources: UF/IFAS EDIS HS2/MG216 (Mango Growing in the Florida
-- Home Landscape), UF/IFAS EDIS ENH563/ST404 (Mangifera indica),
-- UF/IFAS Extension St. Lucie County (Managing Anthracnose and
-- Powdery Mildew on Mango Tree; Common Problems of Mango in the
-- Florida Home Landscape).

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'mango-pruning',
  '{
    "treeType": "Mango",
    "title": "Mango Post-Harvest Pruning",
    "introduction": "Mangoes set next year''s flower buds on wood that matures in late summer. The best pruning window is immediately after harvest — cuts made in July or August push a flush of new growth that has time to mature and bud up before winter. Pruning later delays bloom and cuts into next year''s crop. The goal is a manageable, picking-height tree with good airflow through the canopy.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Prune right after the last fruit comes off",
        "description": "For early- and mid-season Florida varieties (Tommy Atkins, Haden, Kent, Keitt) this is late July through August. For late varieties you may be pruning into September. The window closes when fall temperatures arrive — too-late cuts push tender growth that frost will damage."
      },
      {
        "stepNumber": 2,
        "title": "Remove a few upper scaffolds to preserve the lower canopy",
        "description": "Each year, remove 2–3 of the tallest upper limbs back to their origin (crotch) with a lower scaffold. Without this, the canopy climbs and the lower branches die out from shading — you lose the part of the tree you can actually reach. Don''t take more than 20–25% of the canopy in one year."
      },
      {
        "stepNumber": 3,
        "title": "Open the center for airflow",
        "description": "Cut crossing branches, inward-growing shoots, and anything dense in the middle of the canopy. Good airflow is one of the best controls for anthracnose (the headline mango disease) — stagnant humid air inside a dense canopy is where it thrives."
      },
      {
        "stepNumber": 4,
        "title": "Don''t top — selective cuts only",
        "description": "Topping (lopping the tree at a uniform height) produces a mass of weak watersprouts and no fruit for 2–3 years. Instead, shorten individual tall scaffolds back to lateral branches spread over several seasons. The tree keeps fruiting while you''re bringing it down."
      },
      {
        "stepNumber": 5,
        "title": "Know when to call an arborist",
        "description": "For mango trees over 25–30 ft, hire a licensed arborist. Homeowner injuries from climbing fruit trees are common and mangoes in particular have heavy, brittle wood that splits unpredictably. The cost is almost always less than the ER visit.",
        "tip": "Mango sap can cause a contact dermatitis reaction similar to poison ivy (both are in the Anacardiaceae family). Wear long sleeves and gloves when pruning, and wash exposed skin promptly afterward."
      },
      {
        "stepNumber": 6,
        "title": "Clean tools between trees",
        "description": "Wipe pruners with 70% alcohol between different trees. Anthracnose spreads on contaminated blades. Within the same tree, cleaning between cuts isn''t necessary but is cheap insurance on a tree with any visible disease."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners (up to 1 inch)",
      "Loppers (1–2 inches)",
      "Pruning saw for larger scaffolds",
      "Long sleeves and gloves (sap protection)",
      "70% alcohol for blade sterilization"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Mango Growing in the Florida Home Landscape'' (HS2/MG216) (post-harvest timing for next-year bud set, selective removal of upper limbs to preserve lower canopy, don''t-top rule, arborist threshold at 25–30 ft) and UF/IFAS EDIS ''Mangifera indica'' (ENH563/ST404). Sap-dermatitis warning and Anacardiaceae-family note cross-referenced with UF/IFAS Extension St. Lucie County ''Common Problems of Mango in the Florida Home Landscape''."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Mango',
  'pruning',
  true
),
(
  'mango-feeding',
  '{
    "treeType": "Mango",
    "title": "Mango Low-N High-K Feeding",
    "introduction": "Young mangoes need a balanced fertilizer to build canopy. Once a mango is bearing fruit, the rules flip: nitrogen gets reduced drastically and potassium goes up (9–15%). Extra nitrogen on a bearing mango pushes leaves instead of fruit and actively reduces the next year''s crop. The split-application schedule below works for most South Florida home mangoes.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "First-year young tree: feed every 2–3 months",
        "description": "For a newly planted mango, apply 1/4 lb of a balanced tropical-fruit fertilizer every 2–3 months through the first year, increasing to 1 lb per application by end of year one. Six applications spread through the year is the target. Use any complete fertilizer with micronutrients (iron, zinc, manganese, magnesium)."
      },
      {
        "stepNumber": 2,
        "title": "Bearing tree: switch to low-N, high-K",
        "description": "Once the tree produces fruit (usually year 3–5 from planting), shift to a bearing-tree formula: nitrogen drastically reduced, potash at 9–15%. Examples: 6-2-12, 4-2-12, or any ''tropical fruit tree'' formula marketed for mango. This is the single biggest adjustment in mango care."
      },
      {
        "stepNumber": 3,
        "title": "Three to four applications through the year",
        "description": "Apply the first feeding in February (before bloom), the second after fruit set in April, and the third during the rainy-season fruit-development window in June or July. Add a light fourth application after harvest in August if the tree looks depleted."
      },
      {
        "stepNumber": 4,
        "title": "Spread past the drip line and water in",
        "description": "Broadcast fertilizer in a ring starting 2 ft from the trunk and extending 2 ft past the drip line — mango feeder roots extend well beyond the canopy edge. Water in with at least 1 inch of irrigation immediately after application."
      },
      {
        "stepNumber": 5,
        "title": "Add micronutrient foliar sprays on calcareous soils",
        "description": "South Florida calcareous soils lock up iron, manganese, zinc, and boron. Apply 2–3 foliar sprays per year of a micronutrient mix (labels vary by brand). Time sprays during new leaf flushes — April, June, August. Iron chelate soil drench (2–3 times yearly) corrects persistent yellowing between veins."
      },
      {
        "stepNumber": 6,
        "title": "Reduce or skip N during bloom",
        "description": "For bearing trees, do not apply high-nitrogen fertilizer from flower panicle emergence through fruit set (roughly January through April in South Florida). Extra N during bloom reduces fruit set and encourages vegetative flushes that compete with developing fruit.",
        "tip": "Signs of over-fertilization: dark green glossy leaves, rapid flush growth, poor fruit set, large canopy but small fruit. Back off N rate by half and watch for improvement."
      }
    ],
    "toolsNeeded": [
      "Balanced granular fertilizer (young trees)",
      "Low-N high-K bearing formula (6-2-12 or similar)",
      "Micronutrient foliar spray",
      "Iron chelate (if chlorosis appears)",
      "Measuring scoop",
      "Hose or irrigation"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Mango Growing in the Florida Home Landscape'' (HS2/MG216). Direct quote: ''For bearing trees, nitrogen should be drastically reduced or eliminated, and potash should be increased to 9% to 15%.'' Young-tree schedule (six applications in year 1, 1/4 lb increasing to 1 lb) and micronutrient foliar spray schedule for calcareous soils also drawn from this publication. Over-fertilization diagnostic (vegetative vigor + poor fruit set) cross-referenced with UF/IFAS Extension St. Lucie County ''Common Problems of Mango in the Florida Home Landscape''."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Mango',
  'feeding',
  true
),
(
  'mango-monitoring',
  '{
    "treeType": "Mango",
    "title": "Mango Anthracnose and Powdery Mildew Protection",
    "introduction": "Anthracnose (Colletotrichum gloeosporioides) and powdery mildew (Oidium mangiferae) at bloom are the two diseases that determine whether a Florida home mango sets fruit. Both infect flower panicles, kill developing fruit, and leave black lesions on leaves. The fix is protective spraying — start when panicles are 1/4 full size and repeat every 10–21 days through bloom and early fruit set.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Watch for panicle emergence (December–February)",
        "description": "In South Florida, mangoes push flower panicles (long flower clusters) from December into February depending on variety and weather. Start monitoring weekly when you first see panicle buds swelling. Early cool-wet weather = maximum disease pressure."
      },
      {
        "stepNumber": 2,
        "title": "First spray when panicles reach 1/4 size",
        "description": "Apply the first protective spray when flower panicles are about 1/4 of their full length — typically 4–6 inches long. This timing is critical; waiting until flowers open means infection has already started on the developing buds."
      },
      {
        "stepNumber": 3,
        "title": "Use copper for anthracnose, sulfur for powdery mildew",
        "description": "Copper fungicide (copper hydroxide, copper sulfate) at labeled rate controls anthracnose. Wettable sulfur at labeled rate controls powdery mildew. Both are approved for home fruit tree use and are organic-certified at appropriate rates. You can tank-mix copper and sulfur in one spray if labels allow. Follow the label."
      },
      {
        "stepNumber": 4,
        "title": "Repeat every 10–21 days through bloom",
        "description": "Reapply every 10–14 days if bloom overlaps with rainy weather, or every 14–21 days in dry conditions. Plan for 3–4 passes total: one at 1/4-size panicles, one at full bloom, one at fruit set, one after heavy rain if it''s a wet spring. Stop copper once fruit is golf-ball size — later applications can cause fruit russeting."
      },
      {
        "stepNumber": 5,
        "title": "Spray early morning, avoid midday heat",
        "description": "Spray in calm weather, ideally early morning when bees are less active and pollinators won''t walk through wet spray. Cover the whole canopy to dripping — panicles, new leaves, and all sides of branches. Don''t spray hot, dry foliage — sulfur can burn at temperatures above about 85°F."
      },
      {
        "stepNumber": 6,
        "title": "Resistant varieties need less protection",
        "description": "Tommy Atkins, Keitt, Kent, and Glenn have moderate-to-good anthracnose resistance and often need only 2 sprays per year. Haden and older varieties are highly susceptible — expect 4+ sprays in a wet year. If you''re planting a new mango, pick a resistant variety to save work forever.",
        "tip": "Good airflow from proper pruning cuts disease pressure dramatically — a tree with open canopy and routine copper at bloom rarely has serious anthracnose problems."
      }
    ],
    "toolsNeeded": [
      "Copper fungicide (copper hydroxide or copper sulfate)",
      "Wettable sulfur",
      "Backpack sprayer or pump sprayer",
      "Measuring cup for mixing",
      "Protective glasses and gloves"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Mango Growing in the Florida Home Landscape'' (HS2/MG216). Direct quote on timing: ''One to two early spring applications of sulfur and copper timed to begin when the panicle is 1/4 full size and then 10 to 21 days later will greatly improve the chances for fruit set.'' Detailed disease management (copper for anthracnose, sulfur for powdery mildew, stop copper at golf-ball size to prevent russeting) from UF/IFAS Extension St. Lucie County ''Managing Anthracnose and Powdery Mildew on Mango Tree''. Variety resistance ratings cross-referenced with UF/IFAS Extension St. Lucie County ''Common Problems of Mango in the Florida Home Landscape''."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Mango',
  'monitoring',
  true
),
(
  'mango-harvesting',
  '{
    "treeType": "Mango",
    "title": "Mango Harvest by Shoulder and Flesh Test",
    "introduction": "Picking a mango at the right maturity is the difference between a fruit that ripens sweet in your kitchen and one that stays starchy no matter how long it sits out. External color alone is misleading — varieties vary widely in ripe color. The reliable tests are (1) shape: the shoulders and nose have broadened and filled out, and (2) a flesh test: a cut sample shows yellow color near the seed, not white.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Know your variety''s typical harvest window",
        "description": "South Florida mango harvest runs May through September. Tommy Atkins: June–July. Haden: June. Kent: July–August. Keitt: August–September. Mark your variety''s typical date on a calendar and start checking daily a week before."
      },
      {
        "stepNumber": 2,
        "title": "Look for the shoulder and nose fill-out",
        "description": "Immature fruit has a narrow, pointed look. Mature fruit''s shoulders (the wide end near the stem) and nose (the pointed end) broaden and fill out — the fruit looks ''full'' and rounded. This shape change happens a few days before color change in most varieties and is more reliable than color."
      },
      {
        "stepNumber": 3,
        "title": "Watch for the first color break",
        "description": "A blush of yellow, pink, or red starting near the stem end means the fruit is entering maturity — varies by variety. Tommy Atkins goes red-blushed; Kent stays mostly green with a faint red shoulder; Keitt stays green throughout and you must rely on shape and flesh test alone."
      },
      {
        "stepNumber": 4,
        "title": "Flesh test: cut one sample",
        "description": "When you think the first fruits are ready, pick ONE, cut it open, and look at the flesh right next to the seed. White or pale cream = not mature, wait a week. Yellow throughout = mature, harvest the rest. Some yellow near the seed with white near the skin = borderline, okay to pick if you need to."
      },
      {
        "stepNumber": 5,
        "title": "Pick with 1–2 inches of stem attached",
        "description": "Cut or snap the fruit off with a short stem still attached. A clean broken stem at the fruit (no stem left) drips sap, which causes skin burns (''sap burn'') that leave black spots on the fruit. Hold the picked fruit stem-down briefly to let the sap drain away from the fruit skin.",
        "tip": "Harvest stem-down into a paper bag — don''t pile cut fruit in a bucket where dripping sap can burn other fruits. Rinse off picked fruit gently with water to remove any sap residue."
      },
      {
        "stepNumber": 6,
        "title": "Ripen at 70–75°F for 3–8 days",
        "description": "Place picked fruit on a counter or in a paper bag at 70–75°F — room temperature works in most of Florida. Check daily; ripe fruit has a slight give to gentle pressure and a sweet aroma at the stem end. Do NOT refrigerate underripe fruit — chilling injury turns the flesh gray. Once ripe, refrigerate up to 1 week."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners",
      "Picking bag or paper sack",
      "Sharp knife for flesh test",
      "Counter space at 70–75°F for ripening"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Mango Growing in the Florida Home Landscape'' (HS2/MG216). Direct quote on shoulder test: harvest when ''the shoulders and the nose of the fruit broaden (fill out)''. Internal flesh-color test (white to yellow near seed) and off-tree ripening at 70–75°F for 3–8 days also drawn from this publication. Sap-burn prevention (short stem, stem-down draining) and chilling-injury warning cross-referenced with UF/IFAS EDIS ''Mangifera indica'' (ENH563/ST404) and UF/IFAS Extension St. Lucie County ''Common Problems of Mango in the Florida Home Landscape''."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Mango',
  'harvesting',
  true
);
