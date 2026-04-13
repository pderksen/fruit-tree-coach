-- Batch 4 of tree-type overview guides — Kumquat + subtropical fruits.
-- Five overviews: Kumquat, Avocado, Pomegranate, Persimmon, Olive.
-- Ships with approved = true after developer review.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'kumquat-overview',
  '{
    "treeType": "Kumquat",
    "title": "Kumquat Care Overview",
    "introduction": "Kumquats are small, dual-purpose citrus — ornamental through winter, edible skin-and-all. They are among the most cold-hardy citrus, tolerating brief dips into the low 20s °F on established trees, and they do well in containers. Care follows general citrus principles with a lighter feeding hand.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in full sun",
        "description": "Plant in full sun; kumquats tolerate light shade but fruit more heavily with full sun. Minimum 15 feet between trees or from structures. In zones 8 and cooler, use a container so you can move the tree to shelter during freezes."
      },
      {
        "stepNumber": 2,
        "title": "Prune just before bloom or after fruit set",
        "description": "The ideal time to prune citrus (including kumquat) is just before spring bloom or just after fruit set — the tree then adjusts fruit load during the natural June drop. Minor pruning can be done anytime, but avoid late-season cuts that stimulate tender growth vulnerable to frost. Remove suckers below the graft union."
      },
      {
        "stepNumber": 3,
        "title": "Feed modestly with citrus fertilizer",
        "description": "Kumquats do not need the heavy feeding a full-size orange does. Use a citrus-specific fertilizer with micronutrients. Apply 3–4 split applications across the growing season; keep the ring away from the trunk. Light, consistent feeding beats heavy infrequent doses."
      },
      {
        "stepNumber": 4,
        "title": "Water deeply, let top inch dry",
        "description": "Water when the top inch or two of soil dries. Deep, infrequent watering trumps frequent shallow irrigation. For container culture, never let the pot sit in a saucer of standing water — kumquat roots rot quickly in wet feet."
      },
      {
        "stepNumber": 5,
        "title": "Monitor for standard citrus pests",
        "description": "Watch new growth for aphids, scale, and citrus leafminer (silvery trails on young leaves). Treat with neem oil or insecticidal soap at first signs. Avoid broad-spectrum insecticides that harm beneficial insects."
      },
      {
        "stepNumber": 6,
        "title": "Harvest fully colored and sweet",
        "description": "Kumquats ripen in winter through spring depending on variety — Nagami is the common oval variety, Meiwa the rounder, sweeter one. Pick when the skin is fully orange and the fruit gives slightly to thumb pressure. Eat whole — the peel is the sweet part, the flesh is the tart part."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners or harvest scissors",
      "Citrus fertilizer with micronutrients",
      "Well-draining container (if growing in pot)",
      "Frost cloth for freeze events"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Citrus Culture in the Home Landscape\" (general citrus spacing, fertilization, sucker removal, pre-bloom/post-set pruning window), UC IPM citrus cultural-care pages (watering cadence, pest monitoring), and general citrus extension guidance. Kumquat-specific variety details (Nagami, Meiwa) and eat-the-peel guidance drawn from consolidated horticultural sources."
  }'::jsonb,
  'UF/IFAS EDIS; UC IPM',
  'Kumquat',
  'overview',
  true
),
(
  'avocado-overview',
  '{
    "treeType": "Avocado",
    "title": "Avocado Care Overview",
    "introduction": "Avocados are large, long-lived subtropical trees that need little pruning and no fruit thinning but are demanding about drainage, frost, and watering consistency. Young trees bear starting around year 3 and mature at year 7. Fruit does not ripen on the tree — it matures, then ripens after picking.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in the warmest, driest spot",
        "description": "Pick the warmest area of the landscape that does not flood or stay wet after summer rains. Avocados are extremely sensitive to waterlogged roots. Full sun, wind shelter for young trees, and at least 15 feet from structures and other trees. Hass and similar Mexican-type varieties are the most cold-tolerant homeowner choices."
      },
      {
        "stepNumber": 2,
        "title": "Water an inch per week",
        "description": "Irrigate about one inch of water per week once established. Container trees need more frequent watering. Consistent moisture during flowering and fruit sizing is critical — big swings cause fruit drop."
      },
      {
        "stepNumber": 3,
        "title": "Prune lightly for structure",
        "description": "Pruning is not required to keep avocado trees productive. When you do prune, raise low limbs to at least 2 feet off the ground to improve air circulation under the canopy. Early varieties: prune May–September, soon after harvest. Mid and late varieties: prune right after harvesting, every other year, after frost danger has passed."
      },
      {
        "stepNumber": 4,
        "title": "Fertilize through the growing season",
        "description": "Use a balanced fertilizer with micronutrients (avocados are prone to iron and zinc deficiency). Split applications across the spring-through-fall growing season. Keep fertilizer well away from the trunk and water in thoroughly."
      },
      {
        "stepNumber": 5,
        "title": "Monitor for anthracnose and lace bug",
        "description": "Anthracnose causes dark sunken spots on fruit near harvest — improve air circulation by pruning, and pick fruit promptly. Avocado lace bug causes yellow stippling on leaf uppersides. Severe infestations warrant treatment, but minor damage rarely needs action."
      },
      {
        "stepNumber": 6,
        "title": "Harvest mature, ripen off the tree",
        "description": "Avocados do not soften on the tree. Maturity is measured by calendar date and fruit size by variety — your local extension publishes Hass and similar-variety windows. Pick a sample; if it ripens well at room temperature in 7–10 days, the rest are mature. Ripen indoors in a paper bag with a banana to speed it up."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners, loppers, and pole saw",
      "Balanced fertilizer with micronutrients",
      "Soaker hose or drip line",
      "Harvest basket"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM''s \"Training and Pruning Avocado Trees\" (2-foot skirt pruning for air circulation, early-variety May-September pruning window, pruning not required for productivity), UC IPM''s avocado harvest guidance (fruit does not ripen on the tree, weight/size maturity standards), UF/IFAS EDIS \"Avocado Growing in the Florida Home Landscape\" (3-year initial bearing, 7-year maturity, site selection for drainage)."
  }'::jsonb,
  'UC IPM; UF/IFAS EDIS',
  'Avocado',
  'overview',
  true
),
(
  'pomegranate-overview',
  '{
    "treeType": "Pomegranate",
    "title": "Pomegranate Care Overview",
    "introduction": "Pomegranates are tough, drought-tolerant deciduous shrubs that fruit heavily in hot, dry summers. They are self-fruitful, easy to grow in zones 7–10, and largely pest-free. The main homeowner decisions are shape (single-trunk tree vs. multi-trunk shrub) and timing of light annual pruning.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in full sun, well-drained soil",
        "description": "Plant in full sun for best flowering and fruiting. Pomegranates tolerate a wide pH range (5.5–7.0) and most soil types as long as drainage is good. Plant in early spring (February–March), avoiding late frost, with soil that is loosely worked and not wet."
      },
      {
        "stepNumber": 2,
        "title": "Pick 3–6 main trunks",
        "description": "Pomegranates naturally sucker. Train to 3–6 main trunks or choose a single-trunk tree form and remove all suckers. The multi-trunk form is more natural for the species and easier to maintain; the tree form is more decorative."
      },
      {
        "stepNumber": 3,
        "title": "Prune in late winter to early spring",
        "description": "Prune in late winter or early spring — pomegranate blooms on new growth, so heavy pruning just before bud break reduces fruit. Remove suckers, dead wood, and crossing branches. Light annual pruning encourages new fruiting spurs on 2–3-year-old wood. Avoid heavy cuts, which reduce fruit production."
      },
      {
        "stepNumber": 4,
        "title": "Water deeply and infrequently",
        "description": "Pomegranates are drought-tolerant once established but fruit best with consistent moisture through summer. Water deeply when the top 3 inches of soil dries. Inconsistent watering causes fruit split — one of the most common homeowner complaints."
      },
      {
        "stepNumber": 5,
        "title": "Feed lightly",
        "description": "Pomegranates are not heavy feeders. A light spring application of balanced fertilizer or compost at the drip line is plenty. Over-fertilizing produces lush foliage at the cost of fruit."
      },
      {
        "stepNumber": 6,
        "title": "Harvest with pruners before the fruit splits",
        "description": "Pomegranates ripen late summer through November depending on variety. Pick when the fruit is fully colored, has a slight metallic ring when tapped, and is starting to feel heavy. Clip with shears, cutting as close to the fruit as possible — a sharp stump can puncture other fruit in storage. Harvest promptly once ripe; over-ripe fruit splits on the tree."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners and loppers",
      "Balanced fertilizer or compost",
      "Soaker hose or drip line",
      "Harvest pruners / scissors"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Clemson HGIC \"Pomegranate (Punica granatum)\" (full sun, pH 5.5–7.0, early-spring planting, 3–6 main trunks, late-winter pruning, blooms on new growth, light-pruning preference, fruit-ripening window), UGA Extension \"Pomegranate Production\", and UF/IFAS EDIS \"The Pomegranate\" (variety and harvest guidance)."
  }'::jsonb,
  'Clemson HGIC; UGA Extension; UF/IFAS EDIS',
  'Pomegranate',
  'overview',
  true
),
(
  'persimmon-overview',
  '{
    "treeType": "Persimmon",
    "title": "Persimmon Care Overview",
    "introduction": "Persimmons are small-to-medium deciduous trees (20–30 feet) well-adapted to home orchards in zones 6–10. The biggest decision is variety type: astringent (Hachiya, Tanenashi — must ripen to jelly-soft) vs. non-astringent (Fuyu, Jiro — edible firm). Care is low-input; pests and diseases are rare. Fruit continues to ripen after picking.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Pick astringent or non-astringent",
        "description": "Fuyu and Jiro (flat, round, non-astringent) are edible firm — like an apple in texture, sweet and mild. Hachiya and Tanenashi (elongated, astringent) must fully ripen to jelly-soft before eating or they are bitterly astringent. Non-astringent varieties are easier for beginners."
      },
      {
        "stepNumber": 2,
        "title": "Plant in full sun with room to spread",
        "description": "Oriental persimmons reach 20–30 feet at maturity — give them the space you would any full-size fruit tree. Full sun produces the most fruit. Persimmons tolerate a wide range of soil types once established, but extremes of drought or poor drainage cause serious fruit drop."
      },
      {
        "stepNumber": 3,
        "title": "Prune minimally in winter",
        "description": "Persimmons need very little pruning. During winter, remove dead or injured branches, crossing limbs, shaded interior wood, and any broken branches. Avoid heavy cuts — persimmons fruit on new growth from one-year-old wood, and over-pruning reduces yield."
      },
      {
        "stepNumber": 4,
        "title": "Water steadily through fruit set",
        "description": "Persimmons drop fruit when drought-stressed or waterlogged. Water deeply during dry spells, especially during bloom and early fruit sizing (late spring and summer). Mulch 2–3 inches at the drip line to conserve moisture."
      },
      {
        "stepNumber": 5,
        "title": "Feed modestly",
        "description": "A light spring application of balanced fertilizer at the drip line is enough for most established persimmons. Over-feeding produces lush foliage and drops fruit. Persimmons are among the easiest home orchard trees to manage nutritionally."
      },
      {
        "stepNumber": 6,
        "title": "Harvest by variety type",
        "description": "Non-astringent types: pick when firm, fully colored from yellow-orange through full color. Astringent types: pick at full color when soft or nearing softness — they are inedible any earlier. Both types continue to ripen after picking, so you can pick slightly early and ripen indoors if birds are a problem."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners, loppers, and pruning saw",
      "Mulch",
      "Harvest basket",
      "Pole picker for tall trees"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Clemson HGIC \"How to Grow Persimmons in South Carolina\" (variety comparison, 20–30 ft mature size, astringent vs non-astringent harvest guidance), UGA Extension \"Home Garden Persimmons\", and UF/IFAS EDIS \"Japanese Persimmon Cultivars in Florida\" and \"Japanese Persimmon Cultural Practices in Florida\" (minimal pruning, drought/waterlogging fruit-drop sensitivity, continued ripening after harvest)."
  }'::jsonb,
  'Clemson HGIC; UGA Extension; UF/IFAS EDIS',
  'Persimmon',
  'overview',
  true
),
(
  'olive-overview',
  '{
    "treeType": "Olive",
    "title": "Olive Care Overview",
    "introduction": "Olives are iconic Mediterranean trees that thrive in hot, dry summers and mild winters — zones 8–10. They are alternate-bearing (heavy crop every other year), long-lived, and resistant to most backyard pests. The main homeowner gotcha is pruning: olives fruit on last-year''s growth, so tipping young shoots cuts into next year''s crop.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in full sun with hot, dry summers",
        "description": "Olives want full sun and well-drained soil. They are drought-tolerant once established and actually perform worse in high-rainfall, humid climates. In the Southeast, consider fruitless varieties (Majestic Beauty, Swan Hill, Wilsoni, dwarf Little Ollie) to avoid olive fruit fly problems."
      },
      {
        "stepNumber": 2,
        "title": "Prune in late winter to early spring",
        "description": "February to May is the preferred pruning window — growth is slow, and wounds heal before summer heat. Remove interior branches from the base of the canopy rather than tipping branch ends. Tipping cuts off the one-year-old wood that produces next year''s olives.",
        "tip": "In off years of the alternate-bearing cycle, pruning out non-flowering branches during flowering can increase the current-year crop."
      },
      {
        "stepNumber": 3,
        "title": "Water deeply and infrequently",
        "description": "Olives are drought-tolerant but produce better with a deep soak every 2–3 weeks during summer dry spells. Avoid frequent shallow watering — olives prefer deep, deep roots. Do not fertilize-water a drought-stressed tree suddenly; ease back in."
      },
      {
        "stepNumber": 4,
        "title": "Feed sparingly",
        "description": "Olives are light feeders. A spring application of balanced fertilizer or composted manure around the drip line is usually sufficient. Over-feeding, especially high nitrogen, produces lush growth at the cost of fruit and makes the tree more attractive to pests."
      },
      {
        "stepNumber": 5,
        "title": "Monitor for olive fruit fly and olive knot",
        "description": "Olive fruit fly lays eggs in developing fruit, causing soft spots and off-flavors. Harvest promptly once fruit matures and press or process within days. Olive knot (bacterial) causes woody tumor-like swellings on branches — prune out in dry weather well below the swelling and sterilize tools between cuts."
      },
      {
        "stepNumber": 6,
        "title": "Harvest for your intended use",
        "description": "Green table olives are picked before full color change; black table olives when fully black; oil olives when transitioning. All olives need curing before eating — they are inedibly bitter straight from the tree. Harvest early and process quickly in regions with fruit fly pressure."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners, loppers, and pruning saw",
      "Sterilizing solution for diseased cuts",
      "Harvest nets or tarps (for shaking down fruit)",
      "Container for curing harvested olives"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Texas A&M AgriLife \"Olives\" (alternate-year bearing, prune-interior-branches-not-tips, February–May pruning window, pruning non-flowering branches during bloom in off years), UF/IFAS EDIS \"Olives for Your Florida Landscape\" (variety selection for Southeast, fruitless variety options), and UC IPM olive knot and olive fruit fly guidance (dry-weather pruning for olive knot, prompt harvest for fruit fly)."
  }'::jsonb,
  'Texas A&M AgriLife; UF/IFAS EDIS; UC IPM',
  'Olive',
  'overview',
  true
);
