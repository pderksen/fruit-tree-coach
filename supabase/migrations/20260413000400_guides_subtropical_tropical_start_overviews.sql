-- Batch 5 of tree-type overview guides — subtropical + Fig + tropical start.
-- Five overviews: Jujube, Loquat, Fig, Mango, Guava.
-- Ships with approved = true after developer review.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'jujube-overview',
  '{
    "treeType": "Jujube",
    "title": "Jujube Care Overview",
    "introduction": "Jujube (Chinese date) is one of the easiest fruit trees to grow — drought-tolerant, nearly pest-free, and happy in hot, dry climates from Texas through the Southwest. Trees reach 30+ feet in good conditions and produce fruit that starts green, turns brown, and wrinkles as it ripens on the tree.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in full sun, good drainage",
        "description": "Jujube thrives in hot, dry climates and is well-adapted across Texas and the southwestern US. Plant in full sun with fair-to-good drainage — jujube tolerates a wide range of soil pH but does not want wet feet. Hardy to USDA zone 6."
      },
      {
        "stepNumber": 2,
        "title": "Feed only nitrogen, only once",
        "description": "Jujube''s nitrogen requirement is the only fertilization it needs. Rule of thumb: 0.2 lb of actual nitrogen per inch of trunk diameter, up to a maximum of 1.0 lb. A single application just before spring growth is usually enough for the whole year."
      },
      {
        "stepNumber": 3,
        "title": "Prune lightly in late winter",
        "description": "Jujube suckers heavily from the base — remove suckers regularly. In late winter, prune out dead wood, crossing branches, and any inward-growing limbs to keep the canopy open. Trees can be kept smaller with light annual heading cuts if desired."
      },
      {
        "stepNumber": 4,
        "title": "Water sparingly once established",
        "description": "Jujube is remarkably drought-tolerant — one of its main appeals for dry-climate gardeners. Water young trees deeply during establishment, then taper. Mature trees can thrive on rainfall alone in most years, with supplemental watering only during extended droughts."
      },
      {
        "stepNumber": 5,
        "title": "Watch for cotton root rot in susceptible soils",
        "description": "Pests are rare on jujube, but cotton root rot can be a limiting factor in alkaline, calcareous soils where it is present (parts of Texas and the Southwest). If you''re in a cotton root rot area, improve drainage and consider site selection before planting."
      },
      {
        "stepNumber": 6,
        "title": "Harvest as fruit turns brown",
        "description": "Jujube fruit ripens July–August. As it matures on the tree, it shifts from light green through yellow-brown to dark brown, and the skin wrinkles. Pick at any point — green fruit is apple-like and crisp; fully brown and wrinkled is sweet and date-like. Both stages are edible."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners and loppers",
      "Nitrogen fertilizer",
      "Harvest basket",
      "Gloves (jujube has thorns)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Texas A&M AgriLife \"Jujube\" fact sheet (hot-dry climate suitability, 0.2 lb N per inch of trunk diameter rule, July–August harvest, green-through-wrinkled-brown ripening progression, rare pests with cotton root rot exception) and UGA Extension \"Home Fruit Orchard Pruning Techniques\" (general pruning principles applied to minor fruits)."
  }'::jsonb,
  'Texas A&M AgriLife; UGA Extension',
  'Jujube',
  'overview',
  true
),
(
  'loquat-overview',
  '{
    "treeType": "Loquat",
    "title": "Loquat Care Overview",
    "introduction": "Loquat is a handsome, evergreen subtropical tree (15–30 feet) that flowers in fall and ripens fruit in spring — the opposite of most fruit trees. It fits zones 8–10, is tolerant of a wide range of soils as long as they drain well, and yields 35–300 lbs of fruit a year once mature.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in full sun, wind-sheltered",
        "description": "Loquat is best suited to USDA zone 9 but grows in zones 8–10. In areas with spring frost risk, plant in the warmest spot — loquat flowers in fall and fruits in spring, so late freezes ruin the crop. Plant 25–30 feet from buildings and power lines; loquat can add up to 3 feet of growth per year."
      },
      {
        "stepNumber": 2,
        "title": "Drain well, water consistently",
        "description": "Loquat tolerates a wide range of soils from sand to heavy clay as long as drainage is good. Both over-watering and drought stress cause decline. Water deeply when the top 2–3 inches of soil dry; mulch 2–3 inches at the drip line to retain moisture."
      },
      {
        "stepNumber": 3,
        "title": "Train young trees by tipping",
        "description": "In the first 1–2 years, prune young trees by tipping shoots that exceed 2–3 feet — this encourages branching. Train to either a modified central leader or open-center shape. In cold-risk areas, delay pruning until new shoots emerge to protect against frost damage."
      },
      {
        "stepNumber": 4,
        "title": "Prune after harvest, not before bloom",
        "description": "Loquat blooms in fall on the tips of summer growth. Prune after spring harvest to shape the tree and remove dead or crossing wood — pruning before bloom sacrifices next year''s crop. Cut just above vigorous young growth rather than leaving stubs."
      },
      {
        "stepNumber": 5,
        "title": "Feed lightly, favor slow release",
        "description": "Loquat is not a heavy feeder. A slow-release balanced fertilizer applied in early spring and again after harvest is sufficient. Over-feeding produces lush foliage at the cost of fruit."
      },
      {
        "stepNumber": 6,
        "title": "Harvest ripe — fruit won''t sweeten off the tree",
        "description": "Loquat fruits ripen 4–5 months after fall flowering, typically March–May depending on climate. Pick when fully colored (yellow-orange) and slightly soft. Fruit does not continue to ripen after picking — green-harvested loquat stays tart. Handle gently; ripe loquat bruises easily."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners, loppers, and pole pruner",
      "Balanced slow-release fertilizer",
      "Mulch",
      "Harvest basket, step ladder"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Clemson HGIC \"Loquat (Eriobotrya japonica) Care, Cultivation & Growing Guide\" (zone 8–10 range, 25–30 ft spacing, tipping young shoots for branching, modified-central-leader or open-center training, delayed pruning in cold areas, fall bloom to spring harvest cycle, 35–300 lb mature yields) and UF/IFAS EDIS \"Loquat Growing in the Florida Home Landscape\" (subtropical culture, post-harvest pruning)."
  }'::jsonb,
  'Clemson HGIC; UF/IFAS EDIS',
  'Loquat',
  'overview',
  true
),
(
  'fig-overview',
  '{
    "treeType": "Fig",
    "title": "Fig Care Overview",
    "introduction": "Figs are one of the easiest-to-grow fruit trees in warm climates — they tolerate a wide range of soils, need minimal fertilizer, and produce reliably once established. The main homeowner decisions are pruning cadence (heavier each year for a smaller bush, lighter for a larger tree) and variety choice for your climate.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in full sun, well-drained soil",
        "description": "Figs need at least 8 hours of direct sun during the growing season. They grow in many soil types as long as drainage is good and the site is free of root-knot nematodes. In colder zones (6–7), plant on the south side of a building for reflected warmth."
      },
      {
        "stepNumber": 2,
        "title": "Plant dormant",
        "description": "Plant while the tree is dormant. In warm climates (zones 8+), bare-root trees can go out in fall or early winter. In middle and northern climates, wait until spring after hard winter freezes pass."
      },
      {
        "stepNumber": 3,
        "title": "Feed lightly, only if needed",
        "description": "Figs grow well in moderately fertile soils with no fertilizer. If growth is weak or the soil is very sandy, use a balanced granular fertilizer (8-8-8 or 10-10-10). For plants 1–2 years old, apply 1 oz per month from bud break through late July. For larger plants, apply 3 times a year in early April, early June, and mid-July."
      },
      {
        "stepNumber": 4,
        "title": "Prune in late winter",
        "description": "Prune before new growth begins. Maintain an open canopy for sunlight and airflow — remove dead, damaged, and crossing branches. Cut back long shoots by 1/3 to 1/2 each spring. Regular pruning improves fruit size and disease resistance; heavy pruning produces a smaller bush-shaped tree."
      },
      {
        "stepNumber": 5,
        "title": "Check drainage and watch for green fig beetles",
        "description": "Figs hate wet feet — poor drainage causes root rot and decline. During fruit ripening, watch for green fig beetles, which are drawn to fermenting fruit. Remove fallen and overripe fruit daily; use organza bags or netting on individual fruit clusters if beetle pressure is heavy."
      },
      {
        "stepNumber": 6,
        "title": "Harvest ripe — fruit won''t ripen off the tree",
        "description": "Figs must fully ripen on the tree. Signs: the fruit hangs down (unripe figs point up or sideways), feels soft to gentle pressure, and may show a drop of nectar at the blossom end. Pick daily once ripening starts — fresh figs keep only 1–2 days."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners, loppers, and pruning saw",
      "Balanced granular fertilizer (if needed)",
      "Organza bags or netting for beetle protection",
      "Shallow harvest basket"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UGA Extension \"Home Garden Figs\" (dormant planting, 8-8-8 / 10-10-10 fertilizer rates and application schedule, late-winter pruning, ripen-fully-on-tree harvest rule), Clemson HGIC \"Figs\" (full-sun requirement, soil adaptability, root-knot nematode caution), and UC IPM \"Pruning and Thinning Fig Trees\" (shoot shortening by 1/3–1/2 each spring)."
  }'::jsonb,
  'UGA Extension; Clemson HGIC; UC IPM',
  'Fig',
  'overview',
  true
),
(
  'mango-overview',
  '{
    "treeType": "Mango",
    "title": "Mango Care Overview",
    "introduction": "Mangoes are large (30–60 feet), long-lived tropical trees suited to zone 10b–11 — effectively south Florida, south Texas, Hawaii, and protected sites on the Gulf Coast. Mature trees yield 220–330 lbs of fruit per year. The main homeowner challenges are giving the tree enough space and managing height through annual pruning.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site away from everything",
        "description": "Mangoes grow 30–60 feet tall and nearly 50 feet wide. Plant well away from other trees, buildings, power lines, and structures. Pick the warmest spot in the landscape that does not flood or stay wet after summer rains. Full sun, fertile well-drained soil, ample moisture."
      },
      {
        "stepNumber": 2,
        "title": "Plant with a generous hole",
        "description": "Dig the planting hole 3–4 times the diameter and 3 times the depth of the container. Loosening a large volume of soil helps new roots spread into the surrounding ground. Back-fill with native soil (not amended potting mix, which creates a ''bathtub'' effect)."
      },
      {
        "stepNumber": 3,
        "title": "Prune right after harvest, annually",
        "description": "Pruning is the main homeowner task on mango. Right after harvest, selectively remove a few upper limbs back to their origin each year. This prevents loss of the lower canopy, reduces spray/harvest effort, and reduces storm damage. Aim to limit tree height to something manageable with a ladder."
      },
      {
        "stepNumber": 4,
        "title": "Keep the canopy open",
        "description": "An open canopy improves air movement and light penetration — both reduce disease pressure (especially anthracnose on flowers and developing fruit). Along with the annual upper-limb removal, thin crossing interior branches to keep light reaching the canopy center."
      },
      {
        "stepNumber": 5,
        "title": "Water consistently during bloom and fruit set",
        "description": "Mangoes need ample moisture during flowering (winter) and fruit sizing (spring through early summer). Mature trees tolerate occasional wet conditions but not prolonged waterlogging. Mulch 3–4 inches deep at the drip line, keeping clear of the trunk."
      },
      {
        "stepNumber": 6,
        "title": "Harvest May through September",
        "description": "In Florida and similar climates, harvest runs May through September depending on variety. A mature fruit has filled out its shoulders near the stem, the skin color has shifted to its variety''s mature color, and the flesh near the stem gives slightly to pressure. Clip with pruners to avoid tearing the stem."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners, loppers, and pole pruner",
      "Mulch",
      "Harvest pole picker",
      "Balanced fertilizer with micronutrients"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Mango Growing in the Florida Home Landscape\" (30–60 ft mature size, generous planting hole, post-harvest upper-limb pruning to preserve lower canopy and reduce storm damage, open-canopy goal, May–September harvest window, 220–330 lb mature yields) and UC IPM \"Pruning and Thinning\" general principles applied to tropical fruit trees."
  }'::jsonb,
  'UF/IFAS EDIS; UC IPM',
  'Mango',
  'overview',
  true
),
(
  'guava-overview',
  '{
    "treeType": "Guava",
    "title": "Guava Care Overview",
    "introduction": "Guavas are fast-growing tropical trees that do well in south Florida, south Texas, and similar zones. They are ideal subjects for size-controlled backyard growing — frequent tipping keeps a tree at 3–6 feet and heavily productive. Mature trees yield 50–80 lbs of fruit per year over two seasons (late summer and late winter).",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in full sun, away from structures",
        "description": "Guavas need full sun for best fruit production and prefer temperatures of 73–82 °F. Plant in the warmest area of the landscape that does not flood. Unpruned trees can reach 20 feet — plant away from buildings, power lines, and other trees, but note that active pruning keeps them much smaller."
      },
      {
        "stepNumber": 2,
        "title": "Train young trees for branching",
        "description": "Newly planted guava without lateral branches should be headed back at 1–2 feet to induce lateral branching. In the first year, select 3–4 well-distributed lateral branches, allow them to grow 24–36 inches, then tip them to induce further branching. This sets the structure for a manageable tree."
      },
      {
        "stepNumber": 3,
        "title": "Pick your size: 3–6 ft or 6–12 ft",
        "description": "Bearing guava can be held at 3–6 feet through continuous selective pruning and tipping, which makes for easy harvest. Or allow 6–12 feet for a more traditional tree. Do not let guava exceed 10 feet — taller trees topple in strong winds. Tip vigorously-growing shoots any time during the growing season to maintain size."
      },
      {
        "stepNumber": 4,
        "title": "Water regularly during establishment and fruiting",
        "description": "Young trees need consistent moisture during the first 2 years. Established guava is moderately drought-tolerant but fruit size and yield both improve with steady watering through bloom and fruit sizing. Mulch at the drip line."
      },
      {
        "stepNumber": 5,
        "title": "Feed lightly and often",
        "description": "Guava responds well to frequent light feedings — balanced fertilizer with micronutrients, split across the growing season. Young trees benefit from monthly applications; mature trees 3–4 times per year. Guava tolerates a wide pH range; iron or zinc deficiency is the most common nutritional issue."
      },
      {
        "stepNumber": 6,
        "title": "Harvest in late summer and late winter",
        "description": "In Florida, main harvest is August–October with a secondary February–March crop. Pick guava when the fruit softens slightly and the skin shifts from green toward its variety''s mature color (yellow, pink, or green depending on cultivar). Ripe guava is highly fragrant. Fruit will continue to ripen somewhat off the tree if picked mature-firm."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners and loppers",
      "Balanced fertilizer with micronutrients",
      "Mulch",
      "Harvest basket"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Guava Growing in the Florida Home Landscape\" (full-sun requirement, 73–82 °F ideal temperature, away-from-structures siting, young-tree training by heading at 1–2 ft then tipping laterals, 3–6 ft or 6–12 ft size choice, no-taller-than-10 ft wind rule, August–October main harvest with February–March secondary, 50–80 lb mature yield) and general UGA Extension pruning principles."
  }'::jsonb,
  'UF/IFAS EDIS; UGA Extension',
  'Guava',
  'overview',
  true
);
