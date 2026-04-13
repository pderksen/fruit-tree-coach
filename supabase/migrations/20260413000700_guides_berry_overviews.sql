-- Batch 8 (final) of tree-type overview guides — berry family.
-- Three overviews: Mulberry, Gooseberry, Elderberry.
-- Ships with approved = true after developer review.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'mulberry-overview',
  '{
    "treeType": "Mulberry",
    "title": "Mulberry Care Overview",
    "introduction": "Mulberries are fast-growing, long-lived shade trees that produce heavy crops of sweet berries resembling elongated blackberries. Three main types matter for homeowners: white mulberry (Morus alba, the most common but can be weedy), red mulberry (Morus rubra, native to the Eastern US), and black mulberry (Morus nigra, best flavor but less cold-hardy). Care is minimal once established.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Pick the right variety and site",
        "description": "Black mulberry is hardiest in zones 7–10 with the best flavor. Red mulberry is native to the Eastern US and cold-hardy to zone 5. White mulberry tolerates zones 4–9 but some cultivars are invasive — buy from a reputable nursery. Plant in full sun with room for a 20–50 foot tree. Staining fruit drop is a real issue near walkways and cars — site accordingly."
      },
      {
        "stepNumber": 2,
        "title": "Plant in well-drained soil",
        "description": "Mulberries tolerate a wide range of soils as long as drainage is adequate. They prefer slightly acidic to neutral pH. Water deeply through the first 1–2 years while the tree establishes; mature trees are remarkably drought-tolerant."
      },
      {
        "stepNumber": 3,
        "title": "Prune in late winter to shape",
        "description": "Prune during dormancy — late winter before bud break. Mulberries tolerate heavy pruning and can be kept pollarded (cut back hard each year) for a smaller, more accessible tree. For a natural shape, remove dead, damaged, and crossing branches; thin interior shoots for airflow."
      },
      {
        "stepNumber": 4,
        "title": "Feed lightly, if at all",
        "description": "Established mulberries rarely need fertilizer. A light spring application of balanced fertilizer or compost at the drip line suffices if growth slows. Over-fertilizing produces excessive growth and reduces fruit quality."
      },
      {
        "stepNumber": 5,
        "title": "Watch for fruit-drop mess, not pests",
        "description": "Mulberries are largely pest- and disease-free — one of their main appeals. The biggest homeowner complaint is fruit drop: ripe berries fall and stain whatever is below (concrete, cars, lawn furniture). Use a drop cloth during peak fruit season or plant fruitless male cultivars if you want the shade tree without the berries."
      },
      {
        "stepNumber": 6,
        "title": "Harvest by shaking or picking",
        "description": "Mulberries ripen over several weeks in early to mid-summer depending on variety. Berries do not ripen uniformly — pick daily once they begin turning fully dark (black/deep red for most eating varieties). The easiest harvest method is spreading a tarp or sheet under the tree and shaking branches; fully ripe berries drop at the slightest touch."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners, loppers, and pruning saw",
      "Drop cloth or tarp for harvest / mess control",
      "Harvest basket with shallow layers",
      "Stain-tolerant clothing"
    ],
    "productRecommendations": [],
    "researchNotes": "Source coverage for mulberry in US Cooperative Extension is limited — broader fruit-tree principles (dormant pruning, full-sun preference, drop-cloth harvest, drought tolerance once established) drawn from consolidated horticultural guidance and general extension fruit-tree publications. Variety selection (Morus alba vs rubra vs nigra), hardiness ranges, and the fruitless-male option for homeowners drawn from horticultural references; verify variety-specific traits with your local extension before planting."
  }'::jsonb,
  'Consolidated horticultural guidance (thin US Extension coverage)',
  'Mulberry',
  'overview',
  true
),
(
  'gooseberry-overview',
  '{
    "treeType": "Gooseberry",
    "title": "Gooseberry Care Overview",
    "introduction": "Gooseberries are small, self-fertile, thorny shrubs (3–5 feet) hardy in zones 3–6 — they thrive in cool climates and struggle in hot, humid summers. A single plant can produce several pounds of tart-sweet fruit per year. The main management task is annual winter pruning on the 3-year spur cycle.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in cool, partly sunny, wind-sheltered spot",
        "description": "Gooseberries prefer cool, humid conditions with morning sun and afternoon shade in hot climates. Unlike most fruits, they tolerate partial shade well. Wind protection helps — thorny canes snap in strong winds. Soil pH 5.6–6.5 is ideal."
      },
      {
        "stepNumber": 2,
        "title": "Space 3–4 feet apart in the row",
        "description": "Plant dormant bare-root plants in early spring. Space 3–4 feet apart in the row and 8–10 feet between rows. Most varieties are self-fertile, so even a single plant produces fruit. Plant slightly deeper than they grew in the nursery to encourage new shoots from the base."
      },
      {
        "stepNumber": 3,
        "title": "Prune in late winter for spur production",
        "description": "Prune when dormant in late winter. Red currants and gooseberries produce most of their fruit on spurs on 2- and 3-year-old wood. Remove canes 4 or more years old at the base, any weak or damaged canes, and keep an equal mix of 1-, 2-, and 3-year-old canes. Total about 9 main canes per plant."
      },
      {
        "stepNumber": 4,
        "title": "Fertilize lightly each spring",
        "description": "Apply 6–8 ounces of 10-10-10 (or equivalent organic) annually in an 18-inch ring around each plant in early spring. Water it in. Over-feeding produces lush growth and more powdery mildew pressure."
      },
      {
        "stepNumber": 5,
        "title": "Manage for powdery mildew",
        "description": "Powdery mildew is the most common disease. Prevention is sanitation and airflow: prune consistently to keep an open canopy, water at the base (not overhead), and clean fallen leaves in fall. Mildew-resistant varieties (e.g. ''Invicta'', ''Poorman'', ''Hinnonmaki'') are the highest-leverage fix."
      },
      {
        "stepNumber": 6,
        "title": "Harvest green-hard to ripe",
        "description": "Gooseberries ripen over a 4–6 week window in July and August depending on variety. Pick green and hard for cooking, pies, and preserves. For fresh eating, wait until fully colored (red, yellow, purple, or green depending on variety) and soft. Test ripeness by gentle squeeze and taste — color alone can be misleading."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners and loppers (watch the thorns)",
      "Heavy gloves (essential)",
      "Balanced granular fertilizer (10-10-10)",
      "Shallow harvest basket"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UMN Extension \"Growing currants and gooseberries in the home garden\" (cool-humid preference, partial-shade tolerance, 3–4 ft in-row spacing, 8–10 ft between rows, pH 5.6–6.5, 6–8 oz 10-10-10 in 18-inch ring), Penn State Extension \"Home Fruit Plantings: Gooseberries and Currants\" (spur fruiting on 2–3 year wood, remove 4+ year canes, 9 canes total), and OSU Extension berry pruning resources (powdery mildew sanitation and resistant variety selection)."
  }'::jsonb,
  'UMN Extension; Penn State Extension; Oregon State Extension',
  'Gooseberry',
  'overview',
  true
),
(
  'elderberry-overview',
  '{
    "treeType": "Elderberry",
    "title": "Elderberry Care Overview",
    "introduction": "Elderberries are vigorous, cold-hardy native shrubs (zones 3–8) grown for their clusters of dark berries used in syrups, wines, jellies, and immune-support preparations. They are nearly maintenance-free once established, with the main annual tasks being pruning out old canes and timing the short harvest window. Plant at least two different varieties for cross-pollination.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in sun, wet-tolerant soil",
        "description": "Elderberries prefer wet, well-drained soils — they are one of the few fruiting plants that tolerates periodic flooding. Full sun produces the best fruit yield; partial shade reduces yield but the plants still grow. They are excellent rain-garden or wet-edge candidates."
      },
      {
        "stepNumber": 2,
        "title": "Plant two varieties for cross-pollination",
        "description": "Elderberries are wind-pollinated and need cross-pollination from another variety for good fruit set. Plant at least two different cultivars within 60 feet of each other. This also staggers bloom and harvest, extending the productive window."
      },
      {
        "stepNumber": 3,
        "title": "Water steadily during establishment",
        "description": "Water newly planted elderberries consistently for the first 1–2 years. They have shallow roots and wilt quickly in dry spells. Mulch 2–3 inches at the base to retain moisture and suppress weeds. Established plants still benefit from deep watering during extended droughts."
      },
      {
        "stepNumber": 4,
        "title": "Prune canes on a 3-year cycle",
        "description": "Most productive wood is 2 or 3 years old. Each winter, remove weak and damaged canes and any canes more than 3 years old. Aim for roughly equal numbers of 1-, 2-, and 3-year-old canes — about 9 canes total per plant. This rotation keeps the plant producing heavily year after year."
      },
      {
        "stepNumber": 5,
        "title": "Feed lightly in spring",
        "description": "Elderberries are moderate feeders. A spring application of balanced fertilizer or compost at the drip line is sufficient. They tolerate a wide soil pH range and are not finicky about nutrition. Watch for occasional cane borers and powdery mildew; most plants stay pest-free."
      },
      {
        "stepNumber": 6,
        "title": "Harvest whole clusters, process fast",
        "description": "Fruit ripens mid-August through mid-September depending on cultivar and climate. Individual clusters ripen over 5–15 days. Harvest entire clusters by cutting the stem — picking individual berries loses too much juice. Process or freeze within a day or two. A mature plant yields 12–15 lbs per year. Never eat raw elderberries in quantity; cook before consuming."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners and loppers",
      "Mulch, 2–3 inch layer",
      "Harvest shears for cutting whole clusters",
      "Large bowls, a freezer, or a processor for immediate handling"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Penn State Extension \"Elderberry in the Garden and the Kitchen\" (wet-well-drained soil preference, cross-pollination requirement with 60-ft spacing, mid-August through mid-September harvest, 5–15 day cluster ripening, harvest-whole-clusters rule, 12–15 lb mature yield, raw-fruit caution), Penn State Extension \"Home Fruit Plantings: Elderberries\" (1/2/3-year cane rotation, 9-cane total), and OSU Extension berry-crop guidance (wind-pollination biology, pruning timing)."
  }'::jsonb,
  'Penn State Extension; Oregon State Extension',
  'Elderberry',
  'overview',
  true
);
