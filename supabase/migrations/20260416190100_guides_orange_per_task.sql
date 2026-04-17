-- Phase C: per-task guides for Orange (sweet, Citrus sinensis).
--
-- Templates in lib/care/task-templates/orange.ts:
--   feeding     → Pre-bloom feeding + summer feeding (two tasks, one
--                 shared guide via the unique (tree_type, task_category)
--                 index)
--   monitoring  → Citrus pest inspection (scale/aphid/leafminer/ACP)
--   protection  → Frost protection check
--   harvesting  → Orange harvest
--
-- Sources: UF/IFAS EDIS Citrus Culture in the Home Landscape, UC IPM
-- (Asian Citrus Psyllid, Citrus Pest Management, Freezing/Frost Damage
-- to Citrus), UC Master Gardeners Santa Clara County (Growing Great
-- Citrus). Ships with approved = true after SQL diff review.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'orange-feeding',
  '{
    "treeType": "Orange",
    "title": "Orange Citrus Feeding",
    "introduction": "Oranges are heavy feeders that carry 100+ pounds of fruit on a mature tree. The right pattern is 3–4 split feedings across the growing season, not one heavy spring dose — large single applications push tender flushes that attract leafminer and are vulnerable to cold damage. Match the rate to the tree''s age and always water fertilizer in deeply.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Use a citrus-specific fertilizer",
        "description": "Pick a product labeled for citrus (often 6-6-6 or 8-8-8 for young trees, 10-10-10 for mature) with micronutrients — iron, zinc, and manganese. Generic lawn or all-purpose blends lack the micronutrients that citrus need to keep leaves green and fruit sizing."
      },
      {
        "stepNumber": 2,
        "title": "Time the pre-bloom feeding",
        "description": "The biggest of the year''s feedings goes down in late January or February — nitrogen-heavy, just before bud swell and bloom. This feeds flower set and early fruit development. Time it 2–4 weeks before bloom in your area."
      },
      {
        "stepNumber": 3,
        "title": "Follow with split summer feedings",
        "description": "Apply a second dose in May and a third in June. Young trees in their first 4–5 years take smaller, more frequent amounts (roughly 1 tablespoon of actual nitrogen per month May through August). Mature trees can take 3–4 lbs of citrus fertilizer per application, 2–3 times per year."
      },
      {
        "stepNumber": 4,
        "title": "Stop by late August",
        "description": "Skip any feeding after late August. Fall nitrogen pushes tender new growth that is vulnerable to winter cold and attracts citrus leafminer — two problems you don''t want going into winter.",
        "tip": "Yellowing between the veins on new leaves is iron or zinc deficiency — a foliar citrus micronutrient spray corrects it faster than soil application."
      },
      {
        "stepNumber": 5,
        "title": "Spread in a ring from 1 ft out to the drip line",
        "description": "Keep granules at least 1 foot away from the trunk — direct contact burns bark. Rake mulch back, spread fertilizer evenly in a ring from 1 ft out to just past the drip line, then replace the mulch."
      },
      {
        "stepNumber": 6,
        "title": "Water it in thoroughly",
        "description": "Water deeply right after feeding — at least 1 inch over the fed area. Without water, granular fertilizer can burn roots on contact and won''t dissolve into the root zone. A soaker hose at the drip line works well."
      }
    ],
    "toolsNeeded": [
      "Citrus-specific granular fertilizer (with micronutrients)",
      "Measuring cup",
      "Garden rake",
      "Hose or soaker line"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Citrus Culture in the Home Landscape'' (6-6-6/8-8-8/10-10-10 NPK recommendations for citrus, split-application schedule, spread to drip line) and UC Master Gardeners Santa Clara County ''Growing Great Citrus'' (~1 tbsp N monthly May–August for young trees, up to 1 lb actual N/year for mature trees, avoid fall feeding to limit leafminer)."
  }'::jsonb,
  'UF/IFAS EDIS; UC Master Gardeners Santa Clara County',
  'Orange',
  'feeding',
  true
),
(
  'orange-monitoring',
  '{
    "treeType": "Orange",
    "title": "Citrus Pest Inspection",
    "introduction": "Oranges attract a predictable set of citrus pests: aphids on new shoots, scale on stems and leaf undersides, citrus leafminer on tender flush, and Asian citrus psyllid — the insect that spreads Huanglongbing (HLB, citrus greening), the most serious citrus disease in the US. Catching infestations when populations are small keeps the tree productive without heavy spraying.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Inspect every 2–3 weeks during growth flushes",
        "description": "Citrus flush new growth multiple times a year. Each flush is a pest magnet. Make it a habit to check the tree every 2–3 weeks from early spring through fall — more often on young trees or when a flush is starting."
      },
      {
        "stepNumber": 2,
        "title": "Look for sticky leaves and sooty mold",
        "description": "Run a hand along a leaf. Sticky = honeydew, produced by aphids, scale, or mealybug. Black sooty-looking patches on leaves are the mold that grows on that honeydew. Both mean a colony is established above."
      },
      {
        "stepNumber": 3,
        "title": "Check new shoots for aphids",
        "description": "Turn over the tips of soft new growth. Aphids cluster on the youngest tissue — green or black, pear-shaped, in clumps. A strong water jet knocks most off; severe infestations warrant insecticidal soap per label."
      },
      {
        "stepNumber": 4,
        "title": "Watch for citrus leafminer on young flush",
        "description": "Silvery, serpentine trails on young leaves are citrus leafminer — a moth larva tunneling inside the leaf. Mature leaves tolerate it; the concern is young trees (less than 5 years) where most leaves are flushing. Remove heavily mined leaves and avoid fertilizer that pushes extra flush."
      },
      {
        "stepNumber": 5,
        "title": "Scout for Asian citrus psyllid",
        "description": "ACP adults are about the size of an aphid with brownish mottled wings — they feed with their head down and tail in the air. Nymphs are tiny, yellowish, and excrete white waxy tubules. ACP spreads HLB, which has no home cure. In CA, FL, TX, and parts of the Gulf Coast, report suspected psyllids or HLB symptoms (blotchy mottled leaves, lopsided bitter fruit) to your local agricultural commissioner."
      },
      {
        "stepNumber": 6,
        "title": "Control ants and protect beneficials",
        "description": "Ants farm honeydew, feed it to their young, and protect aphids/scale from predators — controlling ants around the trunk lets ladybugs, lacewings, and parasitic wasps do their work. Avoid broad-spectrum insecticides; spot-treat with soap or oil only where needed.",
        "tip": "Sticky Tanglefoot bands around the trunk block ant traffic without harming beneficials."
      }
    ],
    "toolsNeeded": [
      "Hand lens (optional)",
      "Garden hose with spray nozzle",
      "Insecticidal soap or horticultural oil",
      "Ant barrier (e.g., Tanglefoot band)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Asian Citrus Psyllid and Huanglongbing Disease'' (PMG PN74155 — ACP identification, HLB symptoms, ant interference with biological control), UC IPM ''Citrus Pest Management Guidelines — Home Landscape'' (aphid water-blast control, scale ID, leafminer tolerance on mature trees, beneficials), and UF/IFAS EDIS ''Citrus Tree Care for the Home Gardener in the HLB Era''."
  }'::jsonb,
  'UC IPM; UF/IFAS EDIS',
  'Orange',
  'monitoring',
  true
),
(
  'orange-protection',
  '{
    "treeType": "Orange",
    "title": "Orange Frost Protection",
    "introduction": "Oranges are subtropical — sustained temperatures below 28°F for more than a few hours damage fruit and tender growth. In marginal citrus zones (8b and cooler) frost events are the single biggest threat to backyard oranges. The goal is to trap radiant heat around the canopy overnight and let it escape in the morning.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Water the soil deeply the day before",
        "description": "Moist soil absorbs and releases 2–3 times more heat overnight than dry soil. Water the area under and around the tree the day before a forecast freeze — this is the single highest-impact frost protection step."
      },
      {
        "stepNumber": 2,
        "title": "Clear mulch from the root zone",
        "description": "Mulch insulates the soil from the sun''s daytime warmth. On the day of a forecast freeze, rake mulch back so bare soil can absorb heat during the day. Replace it after the cold spell ends."
      },
      {
        "stepNumber": 3,
        "title": "Cover with sheets or frost cloth — not plastic",
        "description": "Drape sheets, burlap, or commercial frost cloth (e.g., Agribon) over the canopy. Plastic transfers heat too quickly and burns any leaves it touches. Use stakes or a frame to keep the cover off the leaves — ice forms where the cover contacts foliage."
      },
      {
        "stepNumber": 4,
        "title": "Seal the cover to the ground",
        "description": "Run the cover all the way to the ground on every side — the warmth you''re trying to trap rises from the soil, not from the tree. Weight the edges with stones or boards. Leave no gap."
      },
      {
        "stepNumber": 5,
        "title": "Add a heat source for severe nights",
        "description": "For nights forecast below 25°F, string incandescent Christmas lights (the old-fashioned kind that produce heat — LEDs don''t) through the canopy inside the cover, or place a 100W outdoor bulb at the base of the trunk. A few degrees of added warmth often makes the difference."
      },
      {
        "stepNumber": 6,
        "title": "Remove the cover the next morning",
        "description": "Pull the cover off once the temperature rises above freezing — usually mid-morning. Leaving it on traps heat and cooks the tree on a sunny day. Rewet the soil if another freeze is forecast within a few days.",
        "tip": "Pick any ripe fruit before a hard freeze — frozen oranges go mushy and drop."
      }
    ],
    "toolsNeeded": [
      "Old bedsheets, burlap, or frost cloth (Agribon)",
      "Stakes or tomato cage to frame the cover",
      "Stones or bricks to weight the edges",
      "Incandescent Christmas lights or 100W outdoor bulb (optional, for severe cold)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Freezing and Frost Damage to Citrus'' (28°F threshold for damage, cover materials, pick ripe fruit before freeze), UC ANR Publication 8100 ''Frost Protection for Citrus and Other Subtropicals'' (moist-soil heat retention, bare-soil preference during freeze events, cover-to-ground sealing, incandescent heat sources), and UC Master Gardeners Sacramento County ''Frost and Protection for Sensitive Plants'' (frame to keep cover off leaves, remove covers in the morning)."
  }'::jsonb,
  'UC IPM; UC ANR',
  'Orange',
  'protection',
  true
),
(
  'orange-harvesting',
  '{
    "treeType": "Orange",
    "title": "Orange Harvest",
    "introduction": "Oranges are one of the more forgiving citrus to harvest — they hold well on the tree and don''t shatter like peaches. The main risk is picking too early (color alone isn''t a reliable signal; oranges don''t sweeten after picking) or leaving Valencia too long in summer (they can re-green and drop). Pick by taste, not calendar, and a tree can supply fresh fruit for months.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Know your variety''s window",
        "description": "Hamlin and other early navel types ripen November–February. Midseason varieties (Pineapple, Midsweet) run January–March. Valencia is a late variety, peaking April–July. If you have multiple trees, the combined window can run November through July."
      },
      {
        "stepNumber": 2,
        "title": "Taste-test one fruit",
        "description": "Oranges do not sweeten or ripen after picking. Color is a weak signal — some fruit reaches full color weeks before it''s sweet. Pick one, cut it, taste. Sweet and juicy = ready. Tart or thin = leave the rest longer."
      },
      {
        "stepNumber": 3,
        "title": "Cut, don''t pull",
        "description": "Use pruners or scissors to snip the stem close to the fruit. Pulling tears bark on the twig — both openings invite rot, and the fruit is more likely to have a stem plug missing, which shortens shelf life."
      },
      {
        "stepNumber": 4,
        "title": "Leave ripe fruit on the tree for storage",
        "description": "Oranges store best on the tree. A whole crop doesn''t need to come off at once — pick as you need it, moving around the tree. This is especially true for Valencia, which holds up to several months past its peak."
      },
      {
        "stepNumber": 5,
        "title": "Watch for re-greening on Valencia",
        "description": "Valencia oranges can re-green in summer heat — the rind goes back to partly green even though the flesh inside is fully ripe and sweet. Taste is the only reliable signal once re-greening starts.",
        "tip": "Don''t squeeze juice from re-greened Valencia and hold it — the juice goes bitter after a day or two, even though the fresh fruit is fine."
      },
      {
        "stepNumber": 6,
        "title": "Store briefly off-tree",
        "description": "Picked oranges keep 1–2 weeks at room temperature, 4–6 weeks in the refrigerator crisper. For longer storage, juice and freeze — orange juice freezes well for up to 6 months."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners or sharp scissors",
      "Harvest basket or bag",
      "Step stool for taller trees"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Citrus Culture in the Home Landscape'' (variety harvest windows Nov–Jul across Hamlin, midseason, Valencia) and UC Master Gardeners Santa Clara County ''Growing Great Citrus'' (taste over color, Valencia re-greening, juice-stability note, multi-month on-tree storage). Cut-vs-pull technique cross-referenced with UC IPM home-citrus harvest guidance."
  }'::jsonb,
  'UF/IFAS EDIS; UC Master Gardeners Santa Clara County',
  'Orange',
  'harvesting',
  true
);
