-- Batch 1 of tree-type overview guides — stone fruit.
-- Five overview guides (one per type): Peach, Cherry, Plum, Apricot, Nectarine.
-- Each guide walks a full year of care in 6 steps, grounded in the
-- extension-service sources cited in researchNotes.
--
-- Scope note: existing per-task guides (dt1–dt15) for Peach and Cherry
-- stay put. These overviews are additive — task_category = 'overview'
-- is a new value, distinct from the per-task 'pruning' / 'feeding' / etc.
-- rows. The partial unique index on (tree_type, task_category) keeps
-- them from colliding with any future per-task Cherry rows.
--
-- Ships with approved = true after developer review of this SQL diff.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'peach-overview',
  '{
    "treeType": "Peach",
    "title": "Peach Care Overview",
    "introduction": "Peaches are high-maintenance but rewarding — they fruit on one-year-old wood, so annual pruning is non-negotiable, and the narrow window between dormancy and petal-fall drives most of the year''s work. This overview covers what to do through the season so a tree planted this year is productive by year three and healthy long-term.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Prune in late winter to an open center",
        "description": "Prune in mid-February through early March — after the worst cold but before bud swell. Train to an open-vase shape with 3–4 scaffold branches; remove vigorous upright shoots, dead and diseased wood, and any water sprouts in the canopy center. Peaches need aggressive pruning: removing 40–50% of last year''s growth is normal.",
        "tip": "Late pruning is safer than early — early cuts invite winter injury and canker infection."
      },
      {
        "stepNumber": 2,
        "title": "Apply dormant oil + copper before bud break",
        "description": "Before silver-tip stage, spray horticultural oil on all bark surfaces to smother overwintering scale and mite eggs. Follow with a copper fungicide application for peach leaf curl prevention — one well-timed spray in the dormant window prevents the disease for the whole year."
      },
      {
        "stepNumber": 3,
        "title": "Feed in early spring",
        "description": "Broadcast a balanced fertilizer (e.g. 5-10-10) in a ring from 1 foot outside the trunk to just beyond the drip line as buds break. For young trees use ~1/2 lb; for established trees follow soil-test-based rates. Water in thoroughly."
      },
      {
        "stepNumber": 4,
        "title": "Thin fruit 4–6 weeks after bloom",
        "description": "After the natural June drop, thin remaining fruitlets by hand so peaches are spaced 6–8 inches apart on each branch. Thinning early produces larger fruit; every week delayed reduces the size benefit.",
        "tip": "A mature peach branch that is not thinned will often break under the weight of over-set fruit."
      },
      {
        "stepNumber": 5,
        "title": "Harvest on background color, not blush",
        "description": "Start picking when the background (ground) color shifts from green to creamy yellow. The red blush is variety-driven and not a ripeness signal. Spot-pick the same tree 2–3 times over a week — ripe peaches come off with a gentle twist. Handle carefully; they bruise in 2-inch drops."
      },
      {
        "stepNumber": 6,
        "title": "Clean up in fall",
        "description": "Rake and remove all fallen leaves, mummified fruit, and pruned wood. These harbor peach leaf curl spores, brown rot, and overwintering pests. Bag or burn diseased material — do not compost."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners, loppers, and pruning saw",
      "Pump sprayer for dormant oil and copper fungicide",
      "Balanced granular fertilizer (5-10-10 or similar)",
      "Padded harvest basket"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Clemson HGIC''s \"Pruning Peaches & Nectarines\" (open-vase training, aggressive annual pruning), UC IPM''s peach pruning and peach leaf curl pages (dormant oil + copper timing), UGA Extension''s \"Home Garden Peaches\" (5-10-10 fertilizer rate, mid-February pruning window), and Penn State''s \"Home Orchard Calendar\" (seasonal action sequence)."
  }'::jsonb,
  'Clemson HGIC; UC IPM; UGA Extension; Penn State Extension',
  'Peach',
  'overview',
  true
),
(
  'cherry-overview',
  '{
    "treeType": "Cherry",
    "title": "Cherry Care Overview",
    "introduction": "Cherries are lower-effort than peaches — less annual pruning, no fruit thinning — but they demand attention at two points: timing the pruning window to avoid bacterial canker, and protecting the crop from birds and cherry fruit fly in early summer. This overview covers tart cherry primarily; sweet cherry shares most steps but uses a different training shape.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Prune in late winter",
        "description": "Prune in March–April after the coldest weather passes. Remove dead, diseased, and crossing branches; train tart cherry to an open-vase shape with 4–6 scaffold branches. Cut 4–6 inches below any black knot (rough, black swellings) and sterilize pruners between diseased cuts.",
        "tip": "Sweet cherry is the one exception: late-summer pruning reduces bacterial canker risk compared to wet spring cuts."
      },
      {
        "stepNumber": 2,
        "title": "Clear suckers and water sprouts",
        "description": "Cut root suckers flush at the soil and remove vertical water sprouts on main branches. Both steal energy from fruit production. Do not over-prune — cherries respond poorly to heavy cuts and can sunburn on exposed bark."
      },
      {
        "stepNumber": 3,
        "title": "Feed lightly in spring",
        "description": "Cherries need less nitrogen than apples or peaches. Apply a balanced fertilizer (or compost) in a ring at the drip line as buds break. Over-fertilizing produces lush growth that attracts aphids and resists flower-bud formation."
      },
      {
        "stepNumber": 4,
        "title": "Protect ripening fruit from birds",
        "description": "As fruit colors up in late spring to early summer, drape fine-mesh netting over the canopy or use reflective scare tape. Birds can strip a tree in a day. Harvest promptly once cherries are fully colored — they do not ripen after picking."
      },
      {
        "stepNumber": 5,
        "title": "Monitor for cherry fruit fly and leaf spot",
        "description": "Watch for small flies near ripening fruit and for leaves developing purple-brown spots that later yellow and drop (cherry leaf spot). Pick up dropped fruit daily to break the fruit fly life cycle. Severe leaf spot defoliation warrants a targeted fungicide program — consult your local extension."
      },
      {
        "stepNumber": 6,
        "title": "Clean up in fall",
        "description": "Rake up all fallen leaves, fruit, and pruned wood. Black knot, leaf spot, and cherry fruit fly all overwinter in debris. Bag or burn infected material — do not compost it."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners, loppers, and pruning saw",
      "Sterilizing solution (10% bleach or 70% isopropyl alcohol)",
      "Bird netting or reflective scare tape",
      "Balanced fertilizer or finished compost"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM''s \"Pruning Cherry Trees\" (timing, over-pruning caution, disease prevention) and University of Minnesota Extension''s \"Growing stone fruits in the home garden\" (open-center scaffold training for tart cherry, cherry-specific disease risks including black knot, cherry leaf spot, and cherry fruit fly). Scope targets tart cherry; sweet cherry training differs."
  }'::jsonb,
  'UC IPM; University of Minnesota Extension',
  'Cherry',
  'overview',
  true
),
(
  'plum-overview',
  '{
    "treeType": "Plum",
    "title": "Plum Care Overview",
    "introduction": "Plums fruit on short spurs that live for 2–3 years, so pruning is about shaping without destroying spur wood. Most varieties need a pollinator — if you have one plum, check whether it''s self-fruitful before expecting fruit. Timing the pruning window matters for bacterial canker prevention.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Confirm pollination",
        "description": "Most plums require a second variety blooming at the same time within 100 yards for fruit set. A handful of varieties (e.g. Methley) are partially self-fruitful. Check your variety''s pollination needs before planting or before diagnosing a fruitless tree."
      },
      {
        "stepNumber": 2,
        "title": "Prune after February 1",
        "description": "Delay dormant pruning until after February 1 to reduce bacterial canker infection. Use thinning cuts favoring outward-growing branches to spread the plum''s naturally upright form so sunlight reaches the canopy center."
      },
      {
        "stepNumber": 3,
        "title": "Preserve fruiting spurs",
        "description": "Fruit grows on short spurs on 2–3-year-old wood. Head back new whip shoots by half to encourage side branching and new spurs, but do not shear off productive older wood. Thin the canopy center to improve light penetration."
      },
      {
        "stepNumber": 4,
        "title": "Thin fruit if over-set",
        "description": "If branches are heavily loaded, thin plums to about 4 inches apart 4–6 weeks after bloom. Thinning reduces limb breakage and improves fruit size. European plums can be left thicker than Japanese plums."
      },
      {
        "stepNumber": 5,
        "title": "Harvest by color and squeeze test",
        "description": "Plums are ripe when the skin reaches its full variety color (purple, red, orange) and the flesh yields to gentle thumb pressure. Twist slightly while pulling to avoid damaging fruit buds for next year''s crop."
      },
      {
        "stepNumber": 6,
        "title": "Clean up fallen fruit and watch for canker",
        "description": "Remove dropped fruit promptly — it attracts insects and harbors brown rot. Inspect trunk and scaffolds each winter for sunken, oozing cankers; prune out 8–12 inches below any canker in dry weather and sterilize tools between cuts."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners, loppers, and pruning saw",
      "Sterilizing solution for diseased cuts",
      "Harvest basket"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM''s \"Pruning Plum and Prune Trees\" (thinning cuts, outward-growing branch preference, post-Feb-1 timing for bacterial canker), University of Minnesota Extension''s \"Growing stone fruits in the home garden\" (spur fruiting on 2–3-year-old wood, harvest squeeze test), and Clemson HGIC''s \"Plum\" page (pollination requirements, self-fruitful varieties)."
  }'::jsonb,
  'UC IPM; University of Minnesota Extension; Clemson HGIC',
  'Plum',
  'overview',
  true
),
(
  'apricot-overview',
  '{
    "treeType": "Apricot",
    "title": "Apricot Care Overview",
    "introduction": "Apricots are the most disease-prone of the common stone fruits, primarily because of Eutypa dieback — a fungus that infects through pruning wounds during wet winters. The biggest timing decision in the apricot year is when to prune, and for many homeowners that''s late summer, not late winter.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Prune in late August (wet-winter areas)",
        "description": "In regions with rainy winters, prune in late August — at least 6 weeks before fall rains — so pruning wounds can dry and close before Eutypa spores are active. In dry-winter areas, late-winter pruning is acceptable. Remove interfering limbs, dead and diseased wood, and shoots from the canopy center.",
        "tip": "If you must prune during the wet season, paint fresh cuts with a labeled fungicide (myclobutanil or thiophanate-methyl) to block Eutypa infection."
      },
      {
        "stepNumber": 2,
        "title": "Watch for brown rot twig blight",
        "description": "Brown rot is common on apricot. In spring, inspect for wilted, dead twigs with gummy cankers and prune them out 6 inches below the infection. Clean up dropped fruit and mummies — they''re the main source of next year''s inoculum."
      },
      {
        "stepNumber": 3,
        "title": "Feed for vigor, not excess",
        "description": "Healthy, vigorous trees resist bacterial canker better than stressed ones. Apply balanced fertilizer in early spring based on soil tests; for young trees, light, more-frequent irrigation with drip or microsprinklers supports steady growth without over-pushing soft tissue."
      },
      {
        "stepNumber": 4,
        "title": "Thin fruit 4–6 weeks after bloom",
        "description": "Apricots over-set heavily in good years. Thin to 2–4 inches between fruits to prevent limb breakage and improve size. June drop takes care of some thinning naturally — wait until after it finishes before hand-thinning."
      },
      {
        "stepNumber": 5,
        "title": "Harvest ripe — apricots don''t improve off the tree",
        "description": "Pick when the fruit is fully colored, slightly soft to gentle thumb pressure, and fragrant at the stem end. Apricots picked early stay mealy; picked ripe, they are fragile — eat or preserve within 2–3 days."
      },
      {
        "stepNumber": 6,
        "title": "Sanitize at season''s end",
        "description": "Remove all mummified fruit from branches and ground. Rake fallen leaves. Inspect scaffolds for sunken, cracked bark (Eutypa cankers) or gummy ooze (bacterial canker) and plan next pruning to remove infected wood well below visible symptoms."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners, loppers, and pruning saw",
      "Sterilizing solution for diseased cuts",
      "Fungicide for pruning-wound protection (wet-winter regions)",
      "Harvest basket"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM''s \"Pruning Apricot Trees\" (late-August pruning window in wet-winter regions, Eutypa wound protection), UC IPM''s \"Apricots\" home-garden page (brown rot twig blight management, bacterial canker through vigor), and UMN Extension''s brown rot of stone fruit page (general stone-fruit sanitation)."
  }'::jsonb,
  'UC IPM; University of Minnesota Extension',
  'Apricot',
  'overview',
  true
),
(
  'nectarine-overview',
  '{
    "treeType": "Nectarine",
    "title": "Nectarine Care Overview",
    "introduction": "Nectarines are a fuzz-free peach — same species, same pruning, same disease pressure, same fruit thinning. If you''ve cared for a peach, you can care for a nectarine. This overview walks the year, calling out the spots where nectarine behaves slightly differently.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Prune to an open vase in late winter",
        "description": "Prune in mid-February through early March to an open-center shape with 3–4 scaffold branches angled 45° or more from vertical. On mature trees, mostly thinning cuts back to outward-growing laterals — keep height around 8–9 feet for easier harvest. Remove 40–50% of last year''s growth."
      },
      {
        "stepNumber": 2,
        "title": "Apply dormant oil and copper",
        "description": "Before silver-tip stage, spray horticultural oil for overwintering scale and mites. Follow with copper fungicide for peach leaf curl — nectarines are hit just as hard as peaches and benefit from the same dormant-spray program."
      },
      {
        "stepNumber": 3,
        "title": "Feed lightly in early spring",
        "description": "Apply balanced fertilizer in a ring from 1 foot outside the trunk to the drip line as buds break. Avoid pushing heavy nitrogen — over-vigorous shoots get brown rot and borers."
      },
      {
        "stepNumber": 4,
        "title": "Thin aggressively after June drop",
        "description": "Four weeks after bloom, hand-thin fruit to 6 inches apart (or 8–12 inches for larger varieties). Grasp the fruit''s stem firmly and snap off the excess. Nectarines over-set as heavily as peaches and will break limbs without thinning."
      },
      {
        "stepNumber": 5,
        "title": "Harvest on background color",
        "description": "Pick when the green background color shifts to creamy yellow. Spot-pick the tree 2–3 times over a week. Nectarines bruise even more easily than peaches — handle one at a time, single-layer."
      },
      {
        "stepNumber": 6,
        "title": "Fall sanitation",
        "description": "Rake all fallen leaves, fruit, and pruned wood. Peach leaf curl spores and brown rot overwinter in debris. Bag or burn anything diseased — do not compost."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners, loppers, and pruning saw",
      "Pump sprayer for dormant oil and copper",
      "Balanced fertilizer",
      "Padded harvest basket"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Clemson HGIC''s \"Pruning Peaches & Nectarines\" (open-vase training, scaffold selection, height limits), UC IPM''s \"Pruning Peach and Nectarine Trees\" (moderate thinning + heading cuts to outward laterals, 6-inch thinning spacing), and Oregon State Extension''s fruit thinning guide (hand-thinning technique after June drop)."
  }'::jsonb,
  'Clemson HGIC; UC IPM; Oregon State Extension',
  'Nectarine',
  'overview',
  true
);
