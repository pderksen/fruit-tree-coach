-- Batch 7 of tree-type overview guides — tropical tail + Pawpaw.
-- Five overviews: Jackfruit, Starfruit (Carambola), Coconut, Date Palm, Pawpaw.
-- Ships with approved = true after developer review.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'jackfruit-overview',
  '{
    "treeType": "Jackfruit",
    "title": "Jackfruit Care Overview",
    "introduction": "Jackfruit is a massive evergreen tropical tree (can exceed 50 feet) that produces the largest fruit in the world — individual fruits can weigh 40+ pounds. Suited to zones 10b–11 (south Florida, south Texas, Hawaii), it needs a lot of space, warmth, and patience. Cross-pollination between cultivars improves fruit set.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in full sun with 20–30 ft clearance",
        "description": "Jackfruit should be planted in full sun, 25–30 feet from buildings, power lines, and other trees if you plan to let it grow unpruned. If you commit to annual or semi-annual pruning, 20–25 ft spacing works. Pick a location where fruit drop won''t damage anything — mature fruits are very heavy."
      },
      {
        "stepNumber": 2,
        "title": "Plant in well-drained soil",
        "description": "Jackfruit grows best in well-drained soils — it tolerates sand, sandy loams, and the rocky, calcareous high-pH soils of south Florida. Planting can be done any time in south Florida with reliable irrigation; otherwise, plant in late spring or early summer at the start of the rainy season."
      },
      {
        "stepNumber": 3,
        "title": "Avoid root-bound nursery stock",
        "description": "Inspect the nursery container before buying — if roots are circling the bottom and sides (root-bound), the tap root may never straighten after planting, leading to poor establishment. Choose a healthy nursery tree with visible new growth and an appropriately-sized root ball."
      },
      {
        "stepNumber": 4,
        "title": "Prune to limit height",
        "description": "Unpruned jackfruit reaches 50+ feet, making harvest impossible. Annual or semi-annual pruning keeps trees at a manageable height. Tip vigorous upright shoots and remove interior branches to open the canopy. Prune after harvest to avoid sacrificing fruit."
      },
      {
        "stepNumber": 5,
        "title": "Cross-pollinate with a second cultivar",
        "description": "Jackfruit is wind and insect pollinated. Fruit set and quality improve with cross-pollination between different cultivars or seedlings. If space allows, plant 2 unrelated trees within a few hundred feet of each other."
      },
      {
        "stepNumber": 6,
        "title": "Harvest at aromatic ripeness",
        "description": "Mature fruit develops a strong sweet-musky fragrance and the skin spikes become softer and wider-spaced. Color shifts from green toward yellow-brown depending on variety. Use a saw or heavy pruners to cut the thick stem — wear gloves; jackfruit latex is sticky and hard to remove. Harvested fruit continues to ripen over 3–10 days at room temperature."
      }
    ],
    "toolsNeeded": [
      "Pruning saw, loppers, and pole saw",
      "Heavy-duty gloves (jackfruit latex)",
      "Tarp or padded ground cover below tree",
      "Sharp knife for opening harvested fruit"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Jackfruit Growing in the Florida Home Landscape\" (full-sun siting, 25–30 ft unpruned spacing / 20–25 ft with pruning, soil tolerance including calcareous high-pH, plant-in-rainy-season rule, avoid-root-bound guidance, cross-pollination benefit). Harvest ripeness indicators drawn from consolidated tropical fruit extension guidance."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Jackfruit',
  'overview',
  true
),
(
  'starfruit-overview',
  '{
    "treeType": "Starfruit",
    "title": "Starfruit (Carambola) Care Overview",
    "introduction": "Starfruit (carambola, Averrhoa carambola) is an ornamental evergreen that produces waxy yellow fruit year-round in zones 10b–11. It is highly wind-sensitive and benefits from wind shelter and annual pruning to keep a harvestable size (6–12 feet). Mature trees yield 250+ lbs of fruit per year.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site with wind protection",
        "description": "Plant in a wind-protected, sunny location with well-drained soil. Carambola trees are highly sensitive to wind and cold — fruit quality and yield both drop sharply in exposed sites. Space 20–30 feet from buildings and other trees. In marginal areas, plant near a heat-reflective wall."
      },
      {
        "stepNumber": 2,
        "title": "Train young trees by tipping",
        "description": "In the first 1–2 years, tip shoots that exceed 2–3 feet to encourage lateral branching. This sets the framework for a manageable, productive tree. Do not let young trees grow tall and leggy — they never develop a strong canopy structure."
      },
      {
        "stepNumber": 3,
        "title": "Prune mature trees to 6–12 feet",
        "description": "Selectively prune to maintain a tree height of 6–12 feet — this makes spraying and harvest practical and greatly reduces storm damage. Prune after the heaviest harvest window; carambola fruits almost continuously, so wait for a gap in fruit set."
      },
      {
        "stepNumber": 4,
        "title": "Water regularly during flowering and fruiting",
        "description": "Mature carambola needs regular water from flowering through harvest. Drought stress during those stages causes flower and fruit drop. Mulch 2–3 inches at the drip line; let the top inch of soil dry between deep waterings."
      },
      {
        "stepNumber": 5,
        "title": "Feed with a specialty tropical fruit mix",
        "description": "For mature trees, use a fertilizer with 6–8% N, 2–4% P, 6–8% K, and 3–4% Mg. Apply about 4 lbs per tree, split 4 times per year. Supplement with foliar micronutrient sprays (iron, manganese, zinc) — carambola is prone to deficiencies on alkaline soils."
      },
      {
        "stepNumber": 6,
        "title": "Harvest at color break",
        "description": "Sugar levels in carambola do not increase after picking. Pick during ''color break'' — when the fin bases shift from green to yellow. Fully yellow fruit left on the tree is sweetest but vulnerable to bird and insect damage. Peak production runs August–September and December–February; full harvest window is June through February."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners, loppers, and pole pruner",
      "Tropical-fruit fertilizer (6-2-6-3 with micronutrients)",
      "Foliar micronutrient spray",
      "Harvest basket"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Carambola Growing in the Florida Home Landscape\" (wind sensitivity, 20–30 ft spacing, first-year tipping for branching, 6–12 ft height target, 4 lbs/tree split 4x fertilizer at 6–8–2–4–6–8–3–4 NPK-Mg analysis, color-break harvest, year-round production, August–September and December–February peaks, 10–40 lb early yields ramping to 250–350 lb at maturity)."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Starfruit',
  'overview',
  true
),
(
  'coconut-overview',
  '{
    "treeType": "Coconut",
    "title": "Coconut Palm Care Overview",
    "introduction": "Coconut palms are iconic tropical trees adapted only to the most tropical parts of the US — south Florida (zone 10b–11), south Texas, Hawaii, and Puerto Rico. They are genuinely slow to produce (5–7 years to first coconuts) and large at maturity (60+ feet). Care is relatively simple once established, with fertilization being the main ongoing task.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site for space and sun",
        "description": "Plant in full sun with generous spacing — coconut palms spread wider than most palms and reach 60+ feet tall. Allow at least 20 feet between palms and from structures or power lines. Well-drained soil of nearly any type (sand, marl, muck) works as long as drainage is adequate."
      },
      {
        "stepNumber": 2,
        "title": "Plant a husked or unhusked nut",
        "description": "Coconut seed germinates inside the fruit, so husking isn''t required before planting. You can plant a nursery-grown seedling or a fresh coconut laid on its side, half-buried in soil. Water consistently until the sprout emerges from the husk."
      },
      {
        "stepNumber": 3,
        "title": "Fertilize 2–3 times a year",
        "description": "Use a slow-release palm fertilizer with an analysis like 12-4-12 or 8-2-12 plus micronutrients (iron, manganese, zinc, boron, copper). Apply 2–3 times a year during spring and summer growth. Palms are sensitive to over-fertilization — follow label rates and do not exceed them."
      },
      {
        "stepNumber": 4,
        "title": "Water steadily while young",
        "description": "Newly planted coconuts need consistent water while roots establish. Mature palms tolerate brief drought but produce more reliably with steady moisture. In deep sand, water more often; in heavier soils, let the top inch dry between waterings."
      },
      {
        "stepNumber": 5,
        "title": "Remove only dead or hazard fronds",
        "description": "Do not over-prune palms. Remove only dead (fully brown) fronds and any fronds that pose a falling hazard over walkways or structures. Green, partially yellow, or drooping-but-alive fronds still provide nutrients — cutting them weakens the palm."
      },
      {
        "stepNumber": 6,
        "title": "Harvest nuts while still green, or wait for drop",
        "description": "For drinking coconut water, harvest green nuts with full coconut water and soft jelly — use a pole pruner to cut clusters. For mature grating/milking coconuts, wait until nuts turn brown and drop naturally, or cut down brown clusters. A mature coconut palm produces 50–100+ nuts per year once established."
      }
    ],
    "toolsNeeded": [
      "Pole pruner or pole saw (for cluster harvest)",
      "Slow-release palm fertilizer (12-4-12 or 8-2-12 with micronutrients)",
      "Ladder or climbing gear (for maintenance on taller palms)",
      "Safety helmet (coconuts falling from height are dangerous)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Field Production of Palms\" and \"Palm Nutrition and Fertilization\" (12-4-12 / 8-2-12 with micronutrients fertilizer analysis, 2–3 fertilizer applications per year, do-not-over-fertilize caution), and \"Palm Seed Germination\" (no-husking-required planting). Zone 10b–11 limitation and harvest timing details drawn from consolidated coconut horticultural guidance."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Coconut',
  'overview',
  true
),
(
  'date-palm-overview',
  '{
    "treeType": "Date Palm",
    "title": "Date Palm Care Overview",
    "introduction": "Date palm (Phoenix dactylifera) is a drought-tolerant desert tree that produces best in hot, dry climates — ideally the desert Southwest (zones 9–11). In humid climates like Florida or the Gulf Coast, only a few varieties set fruit reliably. Trees are dioecious: you need both a female and a male (or hand-pollination) to produce dates.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in full sun, well-drained soil",
        "description": "Date palms need full sun, neutral to slightly acidic well-drained soil, and cold tolerance down to about 15 °F. Best production is in hot, low-humidity climates — the California and Arizona desert, and parts of south Texas. In humid climates, expect ornamental use rather than reliable fruit."
      },
      {
        "stepNumber": 2,
        "title": "Plant one male for every female",
        "description": "Dates are dioecious. Plant both female (fruit-producing) and male (pollen) trees, or commit to hand-pollination from a local source of pollen. One male can pollinate up to about 50 females in orchard settings. In a backyard with one female, hand-pollinate with purchased pollen."
      },
      {
        "stepNumber": 3,
        "title": "Hand-pollinate for reliable fruit",
        "description": "Even with a male nearby, commercial growers hand-pollinate for consistent yields. Cut a male flower spathe when flowers are fresh and shake pollen over opening female flower clusters, or tie strands of male flowers into the female cluster. Late winter to early spring bloom depending on climate."
      },
      {
        "stepNumber": 4,
        "title": "Fertilize like a palm",
        "description": "Use a slow-release palm fertilizer (12-4-12 or 8-2-12 with micronutrients) 2–3 times per year during active growth. Date palms are heavy feeders when fruiting. Water deeply during the growing season; they tolerate drought but fruit better with steady moisture during pollination and sizing."
      },
      {
        "stepNumber": 5,
        "title": "Trim lower fronds carefully",
        "description": "Many homeowners trim the lowest fronds to discourage fungal growth common in warm, humid climates. Remove only fully brown or dying fronds. Wear heavy gloves and long sleeves — frond bases carry stiff, dangerous spines. Never ''hurricane-cut'' a palm; removing live fronds weakens the tree."
      },
      {
        "stepNumber": 6,
        "title": "Harvest fruit in late summer to fall",
        "description": "Dates ripen through several stages — green (kimri), yellow or red (khalal), brown and softening (rutab), and fully ripe (tamar). Pick at the stage preferred for eating: khalal for crisp fresh dates, rutab for soft fresh dates, tamar for traditional dried dates. Cover developing bunches with nets to protect from birds and insects as they ripen."
      }
    ],
    "toolsNeeded": [
      "Long-handled pole pruner (for frond removal)",
      "Heavy gloves and long sleeves (spines)",
      "Slow-release palm fertilizer with micronutrients",
      "Fine mesh or paper bags for pollination / fruit protection"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Phoenix dactylifera, Date Palm\" (neutral-to-acidic well-drained soil, full-sun requirement, 15 °F cold tolerance, humidity-limitation for fruit in the Southeast, dioecious male/female requirement, susceptibility to lethal yellowing disease) and UF/IFAS EDIS \"Fertilization of Field-Grown and Landscape Palms in Florida\" (palm fertilizer analysis)."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Date Palm',
  'overview',
  true
),
(
  'pawpaw-overview',
  '{
    "treeType": "Pawpaw",
    "title": "Pawpaw Care Overview",
    "introduction": "Pawpaw (Asimina triloba) is a native North American fruit tree — the only one in the custard-apple family. It grows from the Midwest through the Southeast in zones 5–8, and produces 3–6 inch fruits with custard-textured, banana-mango-pineapple flavor. The main challenges are pollination (need two unrelated trees, pollinators are flies and beetles) and short fruit shelf life.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Plant two unrelated trees",
        "description": "Pawpaws are not self-fertile. You need at least two genetically-different trees — seedlings or named cultivars from different sources — within 30 feet of each other. Two of the same named variety will not cross-pollinate."
      },
      {
        "stepNumber": 2,
        "title": "Buy container-grown, not bare-root",
        "description": "Pawpaws have a brittle taproot and transplant poorly. Choose container-grown nursery trees to maximize survival. Plant in fall or early spring while dormant. Expect a slow-growing tree — 3–4 years before it is physically big enough to produce fruit."
      },
      {
        "stepNumber": 3,
        "title": "Site in sun with shelter for young trees",
        "description": "Pawpaws tolerate part shade but fruit best in full sun. Young seedlings (first 1–2 years) benefit from light shade or a shade cloth — their leaves sunburn easily. Well-drained, deep, fertile, slightly acidic soil (pH 5.5–7.0) is ideal."
      },
      {
        "stepNumber": 4,
        "title": "Hand-pollinate to boost fruit set",
        "description": "Pawpaws are pollinated by flies and beetles drawn to the mild rotten-meat scent of the maroon flowers — natural pollinator populations are often low. For better fruit set, hand-pollinate: collect pollen from one tree''s flowers (using a small artist''s brush) and transfer to another tree''s flowers over several days during bloom."
      },
      {
        "stepNumber": 5,
        "title": "Feed and water modestly",
        "description": "Pawpaws are light feeders — a spring application of balanced fertilizer or compost at the drip line is enough. Water young trees during dry spells; established pawpaws in native range often do fine on rainfall alone. Mulch 2–3 inches deep to retain moisture and suppress weeds."
      },
      {
        "stepNumber": 6,
        "title": "Harvest soft — use or refrigerate fast",
        "description": "Fruit ripens in September. Pick when the skin gives slightly to a gentle finger squeeze — fruit picked hard never ripens properly. Tree-ripened fruit keeps only 3–5 days at room temperature, up to 3 weeks refrigerated. Eat fresh with a spoon or freeze the pulp for baking and smoothies."
      }
    ],
    "toolsNeeded": [
      "Small artist''s brush (for hand-pollination)",
      "Bypass pruners and loppers",
      "Shade cloth for young seedlings (optional)",
      "Mulch"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Clemson HGIC \"Pawpaw\" (full-sun-or-part-shade range, pH 5.5–7.0 preference, 3–4 year establishment before fruiting, container-grown cultivar preference, non-self-fertile pollination, September fruit maturity, finger-squeeze ripeness test, 3-5 day shelf life), Penn State Extension \"The Native Pawpaw Tree\" and \"Pawpaw Fruit in the Garden and the Kitchen\" (pollinator biology, hand-pollination technique), and UF/IFAS EDIS \"Asimina triloba: Pawpaw\" (general landscape culture)."
  }'::jsonb,
  'Clemson HGIC; Penn State Extension; UF/IFAS EDIS',
  'Pawpaw',
  'overview',
  true
);
