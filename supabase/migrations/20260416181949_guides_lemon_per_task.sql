-- Phase A: per-task guides for Lemon.
--
-- Adds one guide row per distinct task_category declared by the Lemon
-- templates in lib/care/task-templates.ts:
--   feeding     → Citrus feeding (covers both spring + summer templates;
--                 the unique (tree_type, task_category) index collapses
--                 the two feeding tasks onto one guide)
--   monitoring  → Scale and aphid inspection
--   harvesting  → Citrus harvest
--
-- The lemon templates include `lemon-spring-feeding` AND
-- `lemon-summer-feeding` — both category `feeding`. The guide below
-- covers the recurring 3–4× per year citrus feeding pattern so either
-- task opens the right content.
--
-- Matches the shape established by the Peach pilot
-- (20260415010312_guides_peach_per_task.sql). Ships with approved = true
-- after developer review of this SQL diff.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'lemon-feeding',
  '{
    "treeType": "Lemon",
    "title": "Citrus Feeding",
    "introduction": "Citrus are heavy feeders — they fruit and flush new growth most of the year, which burns through nitrogen. Meyer lemons in particular are prone to micronutrient deficiencies (iron and zinc chlorosis) in alkaline or container soils. The right pattern is 3–4 light feedings a year from early spring through late summer, not one heavy spring dose.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Pick a citrus-specific fertilizer",
        "description": "Use a product labeled for citrus (e.g., ''citrus & avocado food'') rather than a general lawn or all-purpose fertilizer. Citrus blends include iron, zinc, and manganese — the micronutrients Meyer lemons need to keep leaves fully green and fruit sizing properly."
      },
      {
        "stepNumber": 2,
        "title": "Time feedings across the growing season",
        "description": "Apply 3–4 times a year: first in early spring after last frost, then late spring, mid-summer, and optionally a light feeding in late summer. Stop by late August — feeding in fall pushes tender new growth that is vulnerable to winter cold."
      },
      {
        "stepNumber": 3,
        "title": "Match the rate to the tree''s age",
        "description": "Young 1–2 year trees: 2 tablespoons of actual nitrogen per feeding. 3-year trees: about 4 tablespoons. Mature trees (4+ years): about 8 tablespoons per feeding, or roughly 1 pound of citrus fertilizer per year per inch of trunk diameter, split across the 3–4 applications.",
        "tip": "Container lemons need more frequent, lighter feedings — about monthly during the growing season — because watering leaches nutrients quickly."
      },
      {
        "stepNumber": 4,
        "title": "Spread under the canopy",
        "description": "Sprinkle granules evenly in a ring from about 1 foot out from the trunk to just past the drip line. Keep fertilizer off the trunk — direct contact can burn bark. For mulched trees, rake the mulch back, apply, then replace the mulch."
      },
      {
        "stepNumber": 5,
        "title": "Water it in thoroughly",
        "description": "Water deeply right after feeding — at least an inch over the fed area. Without water, granular fertilizer can burn roots on contact and also fails to dissolve into the root zone. A soaker hose or slow drip at the drip line works well."
      },
      {
        "stepNumber": 6,
        "title": "Watch for deficiency symptoms",
        "description": "Yellowing between the veins (interveinal chlorosis) on new leaves signals iron or zinc deficiency — common in alkaline soils. A citrus-specific foliar spray corrects it faster than soil application. Pale yellow on older leaves usually means nitrogen is low — the next scheduled feeding should fix it."
      }
    ],
    "toolsNeeded": [
      "Citrus-specific granular fertilizer (with micronutrients)",
      "Measuring cup",
      "Garden rake (to move mulch aside)",
      "Hose or watering can"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC Master Gardeners San Luis Obispo ''Citrus Cultural Practices'' (3–4 feedings per year, age-scaled rates, stop by late summer) and UC Master Gardeners Sonoma ''Meyer Lemon'' (citrus-specific fertilizer with micronutrients, iron/zinc deficiency symptoms, container-tree frequency)."
  }'::jsonb,
  'UC Master Gardeners San Luis Obispo; UC Master Gardeners Sonoma',
  'Lemon',
  'feeding',
  true
),
(
  'lemon-monitoring',
  '{
    "treeType": "Lemon",
    "title": "Scale and Aphid Inspection",
    "introduction": "Citrus attract a specific set of sap-sucking pests: aphids on new shoots, scale on stems and leaf undersides, and citrus leafminers on tender flush. All three secrete sticky honeydew that grows black sooty mold — the most visible symptom, and usually the first thing homeowners notice. Catching infestations when populations are small keeps the tree productive without heavy spraying.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Inspect every 2–3 weeks during active growth",
        "description": "Citrus flush new growth multiple times a year. Each flush is a pest magnet. Make it a habit to check the tree every 2–3 weeks from early spring through fall — more often on young trees or when a flush is starting."
      },
      {
        "stepNumber": 2,
        "title": "Look for sticky leaves and sooty mold",
        "description": "Run a hand along a leaf. If it feels sticky, honeydew is being produced — a sure sign of aphids, scale, or mealybug. Black sooty-looking patches on leaves are the mold that grows on that honeydew. Both symptoms mean a colony is already established somewhere above."
      },
      {
        "stepNumber": 3,
        "title": "Check new shoots for aphids",
        "description": "Turn over the tips of soft, new growth. Aphids cluster on the youngest, tenderest tissue — usually green or black, pear-shaped, in clumps. A strong jet of water from the hose knocks most of them off; severe infestations warrant insecticidal soap per label."
      },
      {
        "stepNumber": 4,
        "title": "Check stems and leaf undersides for scale",
        "description": "Scale look like small bumps glued to bark or leaf veins — brown, gray, or waxy white. They do not move. A fingernail flicks off a live scale and leaves a smear; a dead one flakes away dry. Small infestations can be scrubbed off with a soft brush; larger ones are controlled with horticultural oil applied per label during a dormant or delayed-dormant window."
      },
      {
        "stepNumber": 5,
        "title": "Watch for citrus leafminer on new flush",
        "description": "Silvery, serpentine trails on young leaves are citrus leafminer damage — a moth larva tunneling inside the leaf. Mature leaves tolerate it; the concern is young trees where most leaves are flushing. Removing heavily mined leaves and avoiding fertilizer that pushes extra flush are the main home-orchard controls."
      },
      {
        "stepNumber": 6,
        "title": "Encourage beneficial insects",
        "description": "Ladybug adults and larvae, lacewings, and parasitic wasps eat aphids and scale crawlers. Broad-spectrum insecticides kill them along with the pests and make the next outbreak worse. Spot-treat with soap or oil only where needed, and avoid systemic insecticides on flowering citrus to protect bees."
      }
    ],
    "toolsNeeded": [
      "Hand lens or magnifier (optional, helpful for scale ID)",
      "Garden hose with spray nozzle",
      "Insecticidal soap or horticultural oil (for confirmed infestations)",
      "Soft brush or old toothbrush"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Citrus Pest Management Guidelines — Home Landscape'' (aphid water-blast control, scale ID and oil timing, leafminer tolerance on mature trees, protecting beneficials) and Clemson HGIC ''Citrus Insect Pests'' (honeydew and sooty mold as primary symptoms, soft brush for small scale infestations)."
  }'::jsonb,
  'UC IPM; Clemson HGIC',
  'Lemon',
  'monitoring',
  true
),
(
  'lemon-harvesting',
  '{
    "treeType": "Lemon",
    "title": "Citrus Harvest",
    "introduction": "Lemons — especially Meyer lemons — are one of the most forgiving fruits to harvest. They hold on the tree for weeks without dropping, and unlike peaches or apples the sugar-acid balance shifts slowly. The main risk is picking too early (fruit stays tart and never softens) or leaving so much on the tree that next year''s crop is reduced. Pick as you need them, and a tree can supply a household for months.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait for full color",
        "description": "Regular (Eureka, Lisbon) lemons ripen to bright yellow; Meyer lemons to a deeper, almost-orange yellow. Green patches mean more time is needed. Color alone is not quite enough — use it together with size and feel."
      },
      {
        "stepNumber": 2,
        "title": "Check size and feel",
        "description": "Ripe lemons feel slightly heavy for their size and give very slightly when gently squeezed — not soft, but not rock-hard either. A fruit that still feels like a golf ball needs more time even if it looks yellow."
      },
      {
        "stepNumber": 3,
        "title": "Taste-test one",
        "description": "Lemons do not continue to sweeten or ripen on the counter after picking. If you are unsure, pick one, cut it, and taste. Tart and juicy = ready. Dry or bitter = leave the rest longer. Once ripe, they will hold well on the tree for several more weeks."
      },
      {
        "stepNumber": 4,
        "title": "Cut, do not pull",
        "description": "Use pruners or scissors to clip the stem close to the fruit. Pulling can tear the rind and sometimes strip bark off the twig — both open the fruit and the tree to rot. A clean cut just above the button (the little green cap where stem meets fruit) is ideal."
      },
      {
        "stepNumber": 5,
        "title": "Harvest gradually, not all at once",
        "description": "A single Meyer lemon tree can produce more than a household uses. Pick fruit as you need it, moving around the tree rather than stripping one side. Leaving ripe fruit on the tree does not harm it in the short term, but a very heavy standing crop slows new bloom and can push trees into biennial bearing."
      },
      {
        "stepNumber": 6,
        "title": "Store briefly",
        "description": "Fresh lemons keep 1–2 weeks at room temperature, 3–4 weeks in the refrigerator crisper. For longer storage, juice and freeze — zest and juice freeze well for up to a year.",
        "tip": "Meyer lemon zest is thinner and more fragrant than regular lemon — zest before juicing and freeze the zest in a small jar for baking."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners or sharp scissors",
      "Harvest basket or bag",
      "Step stool for taller trees"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC Master Gardeners San Luis Obispo ''Citrus Cultural Practices'' (color + feel + taste as combined ripeness signal, cut vs. pull technique, multi-week holding on tree) and UC Master Gardeners Sonoma ''Meyer Lemon'' (Meyer-specific color cue, thin zest note, storage windows)."
  }'::jsonb,
  'UC Master Gardeners San Luis Obispo; UC Master Gardeners Sonoma',
  'Lemon',
  'harvesting',
  true
);
