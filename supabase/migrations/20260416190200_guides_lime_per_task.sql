-- Phase C: per-task guides for Lime (Persian + Key).
--
-- Templates in lib/care/task-templates/lime.ts:
--   feeding     → Spring + summer feeding (two tasks, one shared guide)
--   monitoring  → Citrus pest inspection
--   protection  → Frost protection — limes are the most cold-sensitive
--                 common citrus, so this category is the species headline
--   harvesting  → Persian (green) + Key (yellow) harvest cues
--
-- Sources: UF/IFAS EDIS (Key Lime Growing in the FL Home Landscape,
-- Citrus Culture in the Home Landscape), UC IPM (Citrus Pest
-- Management, Freezing/Frost Damage to Citrus), UC ANR Publication
-- 8100, Clemson HGIC (Container Citrus Production). Ships approved.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'lime-feeding',
  '{
    "treeType": "Lime",
    "title": "Lime Citrus Feeding",
    "introduction": "Limes are heavy feeders with a twist: more than most citrus, they end up in containers, where nutrients leach out with every watering. Container limes need smaller, more frequent feedings than in-ground trees. For both, the pattern is 3–4 splits across the growing season with a citrus-specific fertilizer that includes iron, zinc, and manganese.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Pick a citrus-specific fertilizer",
        "description": "Use a product labeled for citrus with micronutrients. Generic all-purpose fertilizer lacks the iron and zinc limes need — leaves turn yellow between the veins when those micronutrients run low, especially in alkaline or container soils."
      },
      {
        "stepNumber": 2,
        "title": "Feed on a split schedule",
        "description": "Start when new growth appears in early spring. Apply 3–4 times across the growing season: early spring, late spring, mid-summer, optional light late-summer dose. Stop by late August to avoid pushing tender growth into fall."
      },
      {
        "stepNumber": 3,
        "title": "Match the rate to the tree (and the pot)",
        "description": "In-ground young trees: 2 tablespoons of actual nitrogen per feeding; mature trees up to about 8 tablespoons. Container limes: lighter doses every 6–8 weeks during the growing season — container soil holds less and leaches faster."
      },
      {
        "stepNumber": 4,
        "title": "Spread in a ring, keep off the trunk",
        "description": "For in-ground trees, sprinkle granules from 1 ft out from the trunk to just past the drip line. For containers, scatter around the soil surface. Direct contact with the trunk burns bark.",
        "tip": "For containers, flush with clear water once a month — a deep rinse through the drain holes prevents salt buildup from repeated fertilizing."
      },
      {
        "stepNumber": 5,
        "title": "Water it in thoroughly",
        "description": "Water deeply right after feeding — at least an inch over the fed area for in-ground trees, a full through-drain rinse for containers. Without water, granular fertilizer burns roots on contact."
      },
      {
        "stepNumber": 6,
        "title": "Foliar-feed for stubborn deficiencies",
        "description": "Yellowing between veins on new leaves (interveinal chlorosis) means iron or zinc deficiency. A citrus foliar micronutrient spray corrects it within weeks — faster than soil application, especially in alkaline soils where iron is locked up."
      }
    ],
    "toolsNeeded": [
      "Citrus-specific granular fertilizer with micronutrients",
      "Measuring cup",
      "Hose or watering can",
      "Foliar citrus spray (for deficiency correction, optional)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Key Lime Growing in the Florida Home Landscape'' (split feeding schedule, container management) and Clemson HGIC ''Container Citrus Production'' (more frequent lighter doses for containers, salt-flush technique, nutrient leaching). Iron/zinc deficiency symptoms and foliar-spray correction drawn from UC IPM citrus fertilization pages."
  }'::jsonb,
  'UF/IFAS EDIS; Clemson HGIC',
  'Lime',
  'feeding',
  true
),
(
  'lime-monitoring',
  '{
    "treeType": "Lime",
    "title": "Citrus Pest Inspection",
    "introduction": "Limes attract the same pest complex as lemons — aphids on new shoots, scale on stems and leaf undersides, citrus leafminer on young flush. The best defense is regular scouting: catching a small infestation is easy, while a large one that has already coated the canopy in sooty mold takes months to recover from.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Inspect every 2–3 weeks during active growth",
        "description": "Limes flush new growth multiple times a year and every flush is a pest magnet. Make it a habit to walk the tree every 2–3 weeks from early spring through fall — more often on young trees."
      },
      {
        "stepNumber": 2,
        "title": "Look for sticky leaves and sooty mold",
        "description": "Run a hand along a leaf. Sticky = honeydew, from aphids, scale, or mealybug. Black sooty patches are the mold that grows on that honeydew. Both mean a colony is established somewhere above."
      },
      {
        "stepNumber": 3,
        "title": "Check new shoots for aphids",
        "description": "Turn over the tips of soft new growth. Aphids cluster on the youngest tissue — green or black, pear-shaped, in clumps. A strong water jet knocks most off; severe infestations warrant insecticidal soap per label."
      },
      {
        "stepNumber": 4,
        "title": "Check stems and leaf undersides for scale",
        "description": "Scale look like small bumps glued to bark or leaf veins — brown, gray, or waxy white. They don''t move. A fingernail flicks off a live scale and leaves a smear; a dead one flakes away dry. Small infestations scrub off with a soft brush; larger ones controlled with horticultural oil per label."
      },
      {
        "stepNumber": 5,
        "title": "Watch for citrus leafminer on young flush",
        "description": "Silvery serpentine trails on young leaves are citrus leafminer — a moth larva tunneling inside the leaf. Most concerning on trees under 5 years, where most leaves are flushing. Remove heavily mined leaves and avoid fertilizer that pushes extra flush."
      },
      {
        "stepNumber": 6,
        "title": "Protect bees at bloom",
        "description": "Lime bloom is heavily visited by honeybees and native pollinators. Avoid broad-spectrum insecticides on flowering trees; stick to soap or oil spot-treatments after the bloom petal-fall."
      }
    ],
    "toolsNeeded": [
      "Hand lens (optional)",
      "Garden hose with spray nozzle",
      "Insecticidal soap or horticultural oil",
      "Soft brush"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Citrus Pest Management Guidelines — Home Landscape'' (aphid water-blast control, scale ID and oil timing, leafminer tolerance on mature trees, bee protection at bloom) and Clemson HGIC ''Citrus Insect Pests'' (honeydew and sooty mold as primary symptoms, soft brush for small scale infestations)."
  }'::jsonb,
  'UC IPM; Clemson HGIC',
  'Lime',
  'monitoring',
  true
),
(
  'lime-protection',
  '{
    "treeType": "Lime",
    "title": "Lime Frost Protection",
    "introduction": "Limes are the most cold-sensitive of the common citrus — tender growth can be damaged by temperatures in the low 30s °F, and a sustained freeze below 28°F will damage fruit, foliage, and often the whole tree. In any zone colder than 10a, containers you can move indoors are the safest long-term plan. For in-ground limes, every degree of added overnight warmth matters.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Move container limes to shelter",
        "description": "Container limes are the easy case: before any frost is forecast, move the pot into a garage, enclosed porch, or unheated sunroom. Return it outside once overnight lows are back above 40°F. Avoid hot living rooms; sudden warmth stresses the tree."
      },
      {
        "stepNumber": 2,
        "title": "Water the soil deeply the day before",
        "description": "For in-ground limes, moist soil absorbs 2–3 times more heat overnight than dry soil. Water under the canopy the day before a freeze. This is the highest-impact frost protection step."
      },
      {
        "stepNumber": 3,
        "title": "Rake mulch back to expose soil",
        "description": "Mulch insulates the soil from daytime sun. On the day of a forecast freeze, rake mulch away from the root zone so bare soil can absorb heat through the day. Replace the mulch after the cold spell ends."
      },
      {
        "stepNumber": 4,
        "title": "Cover with sheets or frost cloth",
        "description": "Drape sheets, burlap, or frost cloth (Agribon works) over the canopy on a frame — stakes, tomato cage, or PVC hoop. Avoid plastic; it transfers heat quickly and burns any leaves it touches. Run the cover to the ground on every side and weight the edges."
      },
      {
        "stepNumber": 5,
        "title": "Add a heat source for hard freezes",
        "description": "For nights forecast below 28°F, string incandescent Christmas lights (old-fashioned, not LED) through the canopy inside the cover, or set a 100W outdoor bulb at the base of the trunk. A 3–4°F lift is often the difference between a close call and a dead tree."
      },
      {
        "stepNumber": 6,
        "title": "Uncover the next morning",
        "description": "Pull the cover off once temperatures rise above freezing — usually mid-morning. Leaving it on cooks the tree on a sunny day. If another freeze is forecast soon, rewet the soil and put the cover back before sunset."
      }
    ],
    "toolsNeeded": [
      "Old bedsheets, burlap, or frost cloth (Agribon)",
      "Stakes, tomato cage, or PVC frame",
      "Bricks or stones to weight cover edges",
      "Incandescent Christmas lights or 100W outdoor bulb (for severe cold)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC ANR Publication 8100 ''Frost Protection for Citrus and Other Subtropicals'' (low 30s °F threshold for tender citrus growth, moist-soil heat retention, bare-soil preference during freeze, frame-and-cover technique, incandescent heat sources) and UC IPM ''Freezing and Frost Damage to Citrus'' (remove covers in the morning, pick ripe fruit before a hard freeze). Lime cold-sensitivity drawn from UF/IFAS EDIS ''Key Lime Growing in the Florida Home Landscape''."
  }'::jsonb,
  'UC ANR; UC IPM; UF/IFAS EDIS',
  'Lime',
  'protection',
  true
),
(
  'lime-harvesting',
  '{
    "treeType": "Lime",
    "title": "Lime Harvest",
    "introduction": "Limes are a harvest puzzle: Persian (Tahiti) limes are picked green, Key limes are picked yellow, and each has its own ripeness cues. The main mistake is leaving Persian limes too long — they turn yellow and lose acidity — or picking Key limes green, when they''re still bitter. Neither type sweetens or ripens off the tree, so timing is everything.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Know your type",
        "description": "Persian (Tahiti) limes: larger, seedless, picked dark green at full size. Key limes: smaller, seedy, picked when fully yellow (their mature color). Yellow Persian limes are over-mature; green Key limes are under-ripe."
      },
      {
        "stepNumber": 2,
        "title": "Check size and feel for Persian",
        "description": "Persian limes are ready when they''ve reached full size (roughly 2.5 inches across), are dark glossy green, and feel heavy for their size with a slight give when gently squeezed. Rock-hard limes need more time even if color looks right."
      },
      {
        "stepNumber": 3,
        "title": "Wait for yellow on Key limes",
        "description": "Key limes start green, lighten, and turn fully yellow when ripe. Pick when the entire fruit is yellow and gives slightly. Left too long, yellow Key limes drop from the tree and go mushy — check the ground under the tree during peak season."
      },
      {
        "stepNumber": 4,
        "title": "Taste-test if unsure",
        "description": "Limes do not sweeten or ripen after picking. Cut one open — a ripe lime is juicy, acidic, and aromatic. A dry, pulpy fruit was either picked too late (Persian) or too early (Key). Leave the rest longer if needed."
      },
      {
        "stepNumber": 5,
        "title": "Cut, don''t pull",
        "description": "Snip the stem close to the fruit with pruners or scissors. Pulling tears bark on the twig — both wounds invite rot. A clean cut just above the button (the green cap where stem meets fruit) is ideal."
      },
      {
        "stepNumber": 6,
        "title": "Store briefly",
        "description": "Limes keep 1 week at room temperature, 3–4 weeks in the refrigerator crisper. Key limes are particularly perishable once yellow; use or juice within a few days. Frozen lime juice keeps 6 months and is ideal for baking or key lime pie.",
        "tip": "Zest limes before juicing — the aromatic zest freezes well in a small jar and adds more flavor to recipes than juice alone."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners or sharp scissors",
      "Harvest basket or bag",
      "Freezer bags for juice storage"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Key Lime Growing in the Florida Home Landscape'' (yellow-at-ripe for Key lime, fruit-drop risk for over-ripe Key, no post-picking ripening) and UC ANR citrus cultural-care guidance (Persian harvest at full size and dark green, taste over calendar). Cut-vs-pull technique cross-referenced with UC IPM harvest guidance."
  }'::jsonb,
  'UF/IFAS EDIS; UC ANR; UC IPM',
  'Lime',
  'harvesting',
  true
);
