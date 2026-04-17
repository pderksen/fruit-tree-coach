-- Phase E: per-task guides for Guava (Psidium guajava).
--
-- Templates in lib/care/task-templates/guava.ts — 4 categories
-- (protection intentionally skipped; guava frost tolerance is a
-- zone-boundary question handled by the overview guide):
--   pruning     → Size-control pruning (year-round, avoid Nov–Feb)
--   feeding     → Monthly young-tree feeding; 3–4 splits for mature
--   monitoring  → Caribbean fruit fly bagging at 1-inch fruit size
--                 — the single most effective home control
--   harvesting  → Variety-color harvest (pink/red yellows; white
--                 stays green)
--
-- Sources: UF/IFAS EDIS HS4/MG045 (Guava Growing in the Florida
-- Home Landscape), UF/IFAS EDIS ENY-412/IG072 (Guava Pests and
-- Beneficial Insects), UF/IFAS Gardening Solutions (Guava).

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'guava-pruning',
  '{
    "treeType": "Guava",
    "title": "Guava Size-Control Pruning",
    "introduction": "Guavas grow fast and can reach 12+ feet in a few years if left alone, putting fruit out of reach. They''re also exceptionally pruning-tolerant — you can cut almost anywhere and the tree will respond. The home-grower strategy is simple: pick a target height you can pick from (3–6 feet for easy reach, 6–12 feet if you don''t mind a ladder) and prune to maintain it.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Prune in late winter after the last freeze risk",
        "description": "In South Florida, wait until late February through March. Avoid heavy pruning November through February — the fresh cuts push tender new growth that frost can damage. Light maintenance cuts are fine anytime except just before a cold snap."
      },
      {
        "stepNumber": 2,
        "title": "On a young tree, head back to force branching",
        "description": "For a newly planted guava without lateral branches, cut the main stem at 1–2 ft to force lateral shoots. When the shoots reach 24–36 inches, tip them (cut back 4–6 inches) to force secondary branching. Select 3–4 well-spaced lateral scaffolds and remove the rest. This structure supports the tree for its lifetime."
      },
      {
        "stepNumber": 3,
        "title": "On a bearing tree, pick your target height",
        "description": "For a picking-height tree, keep the canopy at 3–6 ft by heading back any shoots that grow past your target. For a larger tree, 6–12 ft works but avoid going past 10 ft — wind damage risk jumps at that height and fruit becomes hard to reach without ladders. Whatever height you pick, head tall shoots back 2–3 times per year to maintain it."
      },
      {
        "stepNumber": 4,
        "title": "Use pruning to force off-season flowering",
        "description": "Guava flowers on new growth — pruning forces a new flush which flowers 8–12 weeks later. To shift some of your crop to a different season, withhold water for 2–3 weeks, then prune the tree and resume watering. The resulting flush flowers and fruits in a predictable window. Handy for extending harvest beyond the main summer crop."
      },
      {
        "stepNumber": 5,
        "title": "Remove dead and crossing wood anytime",
        "description": "Guava tolerates dead-wood removal and crossing-branch cuts year-round. Take these out whenever you notice them. Also remove suckers from the base — guava suckers aggressively if given the chance, and sucker shoots don''t make good fruiting wood.",
        "tip": "Guava wood is hard and can dull pruning blades quickly. Keep bypass pruners sharp or switch to loppers sooner than you would for softer wood."
      },
      {
        "stepNumber": 6,
        "title": "Sterilize between trees",
        "description": "Wipe blades with 70% alcohol between different guavas (not critical between branches of the same tree). Guava rust and algal leaf spot are the main diseases to worry about spreading, and clean tools are cheap insurance."
      }
    ],
    "toolsNeeded": [
      "Sharp bypass pruners",
      "Loppers for thicker wood",
      "Pruning saw for larger branches",
      "70% alcohol for blade sterilization"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Guava Growing in the Florida Home Landscape'' (HS4/MG045). Direct quotes: ''newly planted guava trees without lateral branches should be pruned at about 1 to 2 ft to induce lateral branching'', select ''3–4 well distributed lateral branches'' to ''grow 24 to 36 inches and then tipped to induce further branching'', and ''A period of 2–3 weeks without watering and then pruning will force new vegetative growth and flowering.'' Avoid heavy pruning Nov–Feb for frost protection cross-referenced with UF/IFAS Gardening Solutions ''Guava''."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Guava',
  'pruning',
  true
),
(
  'guava-feeding',
  '{
    "treeType": "Guava",
    "title": "Guava Bearing-Year Feeding",
    "introduction": "Guava is a heavy feeder during fruit development — it pulls enough nutrients that a neglected mature tree will show leaf yellowing between major flushes. The schedule below keeps a home tree fruiting productively: young trees get small amounts often, mature trees get 3–4 full-rate applications per year. Florida soils are often alkaline and lock up micronutrients — foliar sprays fill the gap.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Young tree (year 1): feed every 1–2 months",
        "description": "For a newly planted guava, apply 1/4 lb of a 6-6-6-2 or 8-3-9-2 fertilizer every 1–2 months through the first year. Increase the per-application rate gradually to 1 lb by end of year one. ''2'' at the end means 2% magnesium — critical in Florida soils."
      },
      {
        "stepNumber": 2,
        "title": "Mature tree: 3–4 applications per year",
        "description": "Once the tree is 3+ years old and bearing, shift to 3–4 fertilizer passes per year, total not exceeding 20 lbs per tree per year. Time the first application in February/March at flowering, the second in May/June as fruit develops, the third in August after main summer harvest, optional fourth in October for late crop."
      },
      {
        "stepNumber": 3,
        "title": "Pick a balanced-to-potash formula",
        "description": "6-6-6-2 (balanced) works for young trees still building canopy. Mature bearing trees do better with slightly higher potash like 8-3-9-2 — the extra K supports fruit development without pushing soft growth."
      },
      {
        "stepNumber": 4,
        "title": "Spread past the drip line and water in",
        "description": "Broadcast granules in a ring from 1 ft outside the trunk to 2 ft past the canopy edge. Rake mulch back first so fertilizer reaches soil. Water in deeply — at least 1 inch — immediately after applying."
      },
      {
        "stepNumber": 5,
        "title": "Add 3–4 micronutrient foliar sprays per year",
        "description": "Florida''s alkaline soils tie up iron, manganese, zinc, and copper even when present in the soil. Spray 3–4 times per year (spring through summer) with a complete foliar micronutrient mix. Signs it''s working: new leaves come out deep green instead of yellow-veined."
      },
      {
        "stepNumber": 6,
        "title": "Watch for chlorosis between growing seasons",
        "description": "Yellow leaves with green veins = iron deficiency (most common in Florida). Yellowing at the leaf tips moving inward = potassium deficiency. Tan or brown leaf margins = boron deficiency. If foliar sprays don''t correct the pattern in 6–8 weeks, a chelated iron soil drench (2–3 times yearly) addresses persistent iron issues.",
        "tip": "Mulch with compost or woody chips under the canopy — organic matter holds fertilizer longer and slowly adds micronutrients. Keep mulch a few inches off the trunk."
      }
    ],
    "toolsNeeded": [
      "Balanced fertilizer (6-6-6-2 or 8-3-9-2)",
      "Micronutrient foliar spray",
      "Iron chelate for drenches (if chlorosis persists)",
      "Sprayer for foliar applications",
      "Garden rake"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Guava Growing in the Florida Home Landscape'' (HS4/MG045). Direct quotes: ''every 1 to 2 months during the first year, beginning with 1/4 lb of fertilizer and increasing to 1 lb per tree'' for young trees and ''3 or 4 applications per year'' not exceeding ''20 lbs per tree per year'' for mature trees. Recommended formulations (6-6-6-2 and 8-3-9-2) and the ''3 to 4 annual nutritional sprays'' schedule for micronutrients also drawn from this publication."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Guava',
  'feeding',
  true
),
(
  'guava-monitoring',
  '{
    "treeType": "Guava",
    "title": "Caribbean Fruit Fly Bagging",
    "introduction": "The Caribbean fruit fly (Anastrepha suspensa) is the single biggest pest of guava in Florida. Females lay eggs in developing fruit; larvae tunnel through the flesh and ruin it. Damage is invisible from the outside until you cut the fruit open at harvest. The only effective home-grower control is physical: bag each fruit at 1-inch size with a paper bag, tied at the stem. Labor-intensive the first time, but it''s the difference between usable fruit and wormy fruit.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Watch for fruit set starting late spring",
        "description": "Guava flowers and sets fruit in waves through the warm months. In South Florida, the main summer crop starts setting in April–May, with a secondary early-spring crop. Walk the tree weekly starting late April — you''re looking for fruit that has grown past pea-size to about a grape size."
      },
      {
        "stepNumber": 2,
        "title": "Bag when fruit reaches 1-inch diameter",
        "description": "When a fruit is about 1 inch across (roughly grape-to-cherry size), it''s large enough to bag. Any smaller and the bag falls off; any larger and fruit flies may already have laid eggs. 1-inch diameter is the sweet spot."
      },
      {
        "stepNumber": 3,
        "title": "Use a paper bag, not plastic",
        "description": "Small brown paper bags (lunch-bag size or smaller apple-bagging sleeves sold for fruit protection) work perfectly. Plastic traps moisture and rots the fruit. Slip the bag over the fruit, gather the opening around the stem, and close with a twist-tie, stapler, or the bag''s own fold-over if it has that design."
      },
      {
        "stepNumber": 4,
        "title": "Re-bag through the summer as new fruit sizes up",
        "description": "Guava flowers and sets fruit over a long season, so new fruits enlarge each week. Plan to walk the tree and bag newly-sized fruit roughly every 7–10 days through May–July. On a mature tree with a heavy crop, this may mean bagging 50+ fruit per season — budget the time."
      },
      {
        "stepNumber": 5,
        "title": "Harvest with the bag still on",
        "description": "When the fruit inside the bag is ready (see the harvest guide for color cues — you can peek inside to check), pick the fruit bag-and-all. The bag protected the fruit through the whole developmental period and comes off at the counter. Reuse clean dry bags the next season."
      },
      {
        "stepNumber": 6,
        "title": "Clean up dropped fruit immediately",
        "description": "Every dropped, damaged, or overripe guava on the ground is a fruit-fly breeding chamber. Pick up ALL fallen fruit weekly through the season, seal in a plastic bag (not compost), and dispose in trash. This sanitation step reduces local fruit-fly populations by next season, supplementing the bagging.",
        "tip": "For homeowners who can''t bag every fruit (tall trees, heavy crops), prioritize bagging the lowest and most accessible fruits — the ones you''re most likely to actually pick and eat. Upper canopy fruit will be lost to flies but isn''t worth climbing ladders to protect."
      }
    ],
    "toolsNeeded": [
      "Small paper bags (lunch-bag size)",
      "Twist-ties, stapler, or tape",
      "Plastic bags for disposing of dropped fruit",
      "Step stool for lower canopy reach"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Guava Growing in the Florida Home Landscape'' (HS4/MG045). Direct quote: ''Covering the developing fruit when it reaches about 1 inch in diameter with a paper bag will prevent fruit fly infestation.'' Detailed Caribbean fruit fly biology, sanitation role, and the bag-don''t-spray home-grower approach drawn from UF/IFAS EDIS ''Guava Pests and Beneficial Insects'' (ENY-412/IG072), which identifies the Caribbean fruit fly as the most important pest of guava in Florida."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Guava',
  'monitoring',
  true
),
(
  'guava-harvesting',
  '{
    "treeType": "Guava",
    "title": "Guava Harvest by Variety Color",
    "introduction": "Pink/red-fleshed and white-fleshed guavas have OPPOSITE harvest cues. Pink/red types sweeten as they soften and the peel turns from green to yellow — pick at light green-to-yellow. White-fleshed types are eaten crunchy, picked when full-sized but still GREEN, before they soften. Picking by the wrong standard gives you either underripe fruit (pink picked too early) or rotting fruit (white picked too late).",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Know your variety''s flesh color",
        "description": "Most common home-garden guavas: pink-red fleshed varieties include ''Ruby X'', ''Homestead'', ''Barbie Pink'', most ''tropical red'' types. White-fleshed varieties include ''Asian White'', ''Hong Kong White'', most Asian/crunchy-guava types. If you''re not sure, cut one fruit open — flesh color determines the picking rule for the whole tree."
      },
      {
        "stepNumber": 2,
        "title": "Pink/red: pick when peel turns light green to yellow",
        "description": "Watch the peel color. Pink/red guavas are ready when the peel shifts from solid green to light green to yellow. Pick at light green for slightly firmer fruit that ripens on the counter in 2–3 days. Pick at yellow for softer, more tropical-flavored fruit ready to eat immediately. Avoid waiting past yellow — fruit gets mushy fast."
      },
      {
        "stepNumber": 3,
        "title": "White/Asian: pick full-sized and still green",
        "description": "Crunchy-style guavas are eaten at peak size while still green. Once they start yellowing, texture shifts from crunchy-apple to soft-tropical — which is fine if you like it, but defeats the point of growing white guava. Watch fruit size: when a fruit stops getting bigger week-over-week, it''s at full size and ready."
      },
      {
        "stepNumber": 4,
        "title": "Pick individual fruits, not the whole tree",
        "description": "Guava ripens over weeks, not days — the fruit on a single tree will span a range of maturities at any moment. Walk the tree twice a week during peak, pick only the fruit at your target stage, and leave the rest for next week''s pass."
      },
      {
        "stepNumber": 5,
        "title": "Expect first fruit in years 3–4",
        "description": "A seed-grown guava takes 4–5 years to fruit; a grafted tree fruits in year 2–3. The main harvest window is summer (July–September in Florida) with a smaller early-spring crop. Bagged fruit (see monitoring guide) determines how much of your crop you actually eat vs. lose to fruit flies.",
        "tip": "Ripe guava has a STRONG tropical aroma — you can smell a ripening pink guava from across the yard. The smell is a useful indicator alongside color."
      },
      {
        "stepNumber": 6,
        "title": "Refrigerate ripe fruit, use within 5–7 days",
        "description": "Picked guava keeps 5–7 days refrigerated. At room temperature, ripe pink/red guava only keeps 2–3 days. Freeze puree for smoothies or make jelly/jam for longer storage — guava is one of the easier fruits to preserve."
      }
    ],
    "toolsNeeded": [
      "Pruning shears or sharp fingers (guava stems snap cleanly)",
      "Picking basket",
      "Refrigerator or freezer for storage"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Guava Growing in the Florida Home Landscape'' (HS4/MG045). Direct quote: ''Pink or red guava are ready to pick when the peel turns light green to yellow.'' White-fleshed ''full-sized and green'' harvest rule and the 5–7 day refrigerated storage also drawn from this publication. Variety examples (''Ruby X'', ''Homestead'', ''Asian White'') cross-referenced with UF/IFAS Gardening Solutions ''Guava''. Typical main-summer and secondary-early-spring harvest pattern from the same sources."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Guava',
  'harvesting',
  true
);
