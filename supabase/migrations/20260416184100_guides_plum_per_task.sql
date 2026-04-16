-- Per-task guides for Plum.
--
-- Templates in lib/care/task-templates/plum.ts:
--   pruning     → Open-vase pruning (late winter)
--   protection  → Black knot removal
--   feeding     → Spring fertilizing
--   monitoring  → Fruit thinning
--   harvesting  → Plum harvest
--
-- Covers both European (P. domestica, e.g. Stanley) and Japanese
-- (P. salicina, e.g. Santa Rosa) plums in one guide. Windows reflect
-- European plum (more common backyard tree); Japanese plums ripen
-- earlier — called out in the harvest guide.
--
-- Sources: UGA Extension B1518, PSU Extension, UMN Extension,
-- UC ANR, University of Maryland Extension. Approved on insert.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'plum-pruning',
  '{
    "treeType": "Plum",
    "title": "Plum Open-Vase Pruning",
    "introduction": "Plums fruit on long-lived spurs along older wood, so unlike peach you''re not cutting away half the canopy every year. The job is keeping the tree vase-shaped and open so sun reaches every fruiting branch. Prune in late winter just before bud break — early enough that wounds heal as the tree wakes, late enough to avoid mid-winter cold injury.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Time it from late February to early March",
        "description": "Prune from late winter through petal fall — the recommended window in most US zones. Cuts heal fastest when the tree is just starting to wake. If a hard freeze is forecast in the next 10 days, wait it out."
      },
      {
        "stepNumber": 2,
        "title": "Remove the three Ds first",
        "description": "Start with Dead, Damaged, or Diseased branches. Cut back to clean tissue or to the branch collar. Sterilize pruners with 70% alcohol between any cuts on diseased wood — black knot in particular spreads on contaminated tools."
      },
      {
        "stepNumber": 3,
        "title": "Set the vase shape",
        "description": "A mature plum has 3–4 main scaffold branches angled 25–30° from vertical, evenly spaced around the trunk, with no central leader and an open center. If a vigorous shoot has grown straight up through the middle, cut it out at its base."
      },
      {
        "stepNumber": 4,
        "title": "Thin crowded growth, don''t shorten it",
        "description": "Use thinning cuts (removing a whole branch back to its origin) rather than heading cuts (shortening a branch mid-length). Thinning preserves the natural form and reduces dense regrowth that shades the canopy."
      },
      {
        "stepNumber": 5,
        "title": "Keep height at 8–10 feet",
        "description": "A plum left to grow can reach 20 feet, which makes harvest miserable and pruning dangerous. Cut the tallest leaders back to an outward-facing side branch to keep the tree at a manageable picking height."
      },
      {
        "stepNumber": 6,
        "title": "Clean up debris carefully",
        "description": "Bag or burn any pruned wood from diseased branches — especially anything cut for black knot. Composting black-knot wood lets the fungus survive and re-infect the tree next year."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners",
      "Loppers for branches up to ~1.5 inch",
      "Pruning saw for larger scaffold cuts",
      "70% isopropyl alcohol or 10% bleach for sterilizing"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UGA Extension B1518 ''Home Garden Plums'' (open-vase training, 3–4 scaffolds at 25–30° inclination), Penn State Extension ''Pruning and Training Home Fruit Trees to an Open Center'' (late-winter timing through petal fall), and UC IPM ''Pruning Plum and Prune Trees'' (thinning vs. heading cuts, height management)."
  }'::jsonb,
  'UGA Extension; PSU Extension; UC IPM',
  'Plum',
  'pruning',
  true
),
(
  'plum-protection',
  '{
    "treeType": "Plum",
    "title": "Black Knot Removal",
    "introduction": "Black knot is the disease that kills plum trees in slow motion. The fungus produces dark, swollen, rough galls on branches — easy to spot in winter when leaves are off. Each gall releases millions of spores in spring rain, and unchecked infections eventually girdle and kill major limbs. The good news: cutting out every gall while the tree is dormant breaks the cycle. Do it once a year and you keep the disease in check.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Inspect the entire tree in late winter",
        "description": "Walk around the tree slowly with leaves still off. Black knot galls look like tar-coated, swollen sections of branch — sometimes a few inches long, sometimes engulfing a foot of wood. Check every branch including the upper canopy."
      },
      {
        "stepNumber": 2,
        "title": "Cut at least 4 inches below each gall",
        "description": "The fungus lives inside the wood beyond the visible gall. Cut at least 4 inches below the lowest visible swelling, into clean wood. On a thick scaffold, you may not be able to cut that far below — in that case, carve out the gall plus 1 inch of healthy bark all around it."
      },
      {
        "stepNumber": 3,
        "title": "Sterilize between every cut",
        "description": "Wipe pruner blades with 70% alcohol or dip in 10% bleach between every gall. This is the single most-skipped step. A contaminated tool spreads spores from gall to clean branch with one cut."
      },
      {
        "stepNumber": 4,
        "title": "Bag and trash — never compost",
        "description": "Black knot galls in a backyard compost pile survive and produce spores for years. Bag pruned wood in heavy contractor bags and trash, or burn if your area allows. Do not chip into mulch."
      },
      {
        "stepNumber": 5,
        "title": "Watch for missed galls during the season",
        "description": "Galls are easier to see in late winter but new infections develop through spring. Walk the tree once more in early summer; flag any new galls you missed and cut them at the next dormant pruning."
      },
      {
        "stepNumber": 6,
        "title": "Replace severely infected trees",
        "description": "If 30% or more of the major scaffolds carry galls, the tree is past the point where pruning will save it. Take it out, burn or trash all wood, and choose a resistant variety like Damson, Bluefree, or President when you replant."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners",
      "Loppers and pruning saw for thick branches",
      "Knife or chisel for carving galls from large limbs",
      "70% isopropyl alcohol or 10% bleach for sterilizing",
      "Heavy contractor bags for disposal"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Penn State Extension ''Black Knot of Prunus in the Home Landscape'' (4-inch cut below gall, sterilization protocol, disposal) and UMN Extension ''Black Knot'' (bagging and trashing, list of resistant cultivars including Damson, Bluefree, President)."
  }'::jsonb,
  'PSU Extension; UMN Extension',
  'Plum',
  'protection',
  true
),
(
  'plum-feeding',
  '{
    "treeType": "Plum",
    "title": "Plum Spring Fertilizing",
    "introduction": "Plums need a single, modest spring feeding to support good fruit set without pushing soft, disease-prone growth. Over-feeding plums with nitrogen makes them more susceptible to bacterial canker and brown rot, so resist the urge to ''give them a boost'' beyond the once-a-year application.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Time it to just before bud swell",
        "description": "Apply in early March in most US zones, while the tree is still dormant but starting to wake. Roots take up nutrients before the canopy opens, supporting strong bloom and fruit set."
      },
      {
        "stepNumber": 2,
        "title": "Calculate by trunk diameter",
        "description": "Standard home-orchard rate is about 1 lb of actual nitrogen per inch of trunk diameter, measured one foot above the ground. A balanced 10-10-10 fertilizer is 10% N, so 10 lb of 10-10-10 supplies 1 lb of actual N."
      },
      {
        "stepNumber": 3,
        "title": "Spread under the drip line",
        "description": "Broadcast the fertilizer in a ring under the outermost branches — that''s where the feeder roots are. Keep it at least a foot away from the trunk to avoid burning the bark."
      },
      {
        "stepNumber": 4,
        "title": "Water it in deeply",
        "description": "Water immediately after spreading, enough to soak the top 6–8 inches. Granular fertilizer doesn''t work until it dissolves; without water it sits on the surface and washes away."
      },
      {
        "stepNumber": 5,
        "title": "Stop after one feeding",
        "description": "Don''t add a second feeding mid-summer or post-harvest. Plums respond poorly to extra nitrogen — fruit quality drops and disease pressure rises. If growth looks weak, get a soil test before adding anything else.",
        "tip": "Yellowing between leaf veins is usually a micronutrient deficiency (iron, zinc, manganese), not nitrogen shortage. More N won''t fix it."
      }
    ],
    "toolsNeeded": [
      "Granular balanced fertilizer (e.g. 10-10-10) or composted manure",
      "Garden scale or measuring cup",
      "Garden hose or watering can"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from University of Maryland Extension ''Care of Peach, Cherry, Nectarine, Plum, and Apricot Trees in Home Gardens'' (single pre-bud-break application, 1 lb actual N per inch of trunk diameter) and UC ANR ''Fertilizing Stone Fruit and Pome Fruit'' (over-feeding worsens stone fruit disease pressure)."
  }'::jsonb,
  'University of Maryland Extension; UC ANR',
  'Plum',
  'feeding',
  true
),
(
  'plum-monitoring',
  '{
    "treeType": "Plum",
    "title": "Plum Fruit Thinning",
    "introduction": "Plums set far more fruit than the tree can ripen. Without thinning, you get small, bland plums and broken branches. Thinning is fast on plums — a few minutes per branch — and the size payoff is dramatic. Do it early, when fruit is marble-sized, and don''t feel guilty pulling off most of what you see.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait for natural fruit drop",
        "description": "Roughly 30–45 days after bloom, the tree sheds a wave of fruitlets on its own. Wait until that settles — no point removing fruit the tree was going to drop anyway. Fruitlets should be marble to pea-sized at this point."
      },
      {
        "stepNumber": 2,
        "title": "Pick a target spacing per branch",
        "description": "European plums (Stanley, Italian) thin to about 4–6 inches between fruit. Japanese plums (Santa Rosa, Methley) and pluots thin slightly tighter, 3–5 inches. Smaller-fruited types tolerate closer spacing."
      },
      {
        "stepNumber": 3,
        "title": "Remove doubles and damaged fruit first",
        "description": "Where two fruit are touching, pinch off the smaller one. Remove anything misshapen, scarred, or noticeably smaller than its neighbors. This is the easy half of the job."
      },
      {
        "stepNumber": 4,
        "title": "Thin to final spacing",
        "description": "Now space what''s left to your target distance. Pinch fruitlets off with thumb and forefinger, or snip with small scissors in tight clusters. Don''t yank — you can damage next year''s fruiting spur.",
        "tip": "If a branch is already sagging under fruit weight, thin that branch first. A loaded plum branch will snap, and the tear damages bark for years."
      },
      {
        "stepNumber": 5,
        "title": "Don''t thin too late",
        "description": "Every week you wait reduces the size benefit. By the time fruit is half-grown, thinning still helps the tree but won''t produce noticeably bigger plums. The window is the first 6 weeks after bloom — sooner is better."
      },
      {
        "stepNumber": 6,
        "title": "Pick up dropped fruitlets",
        "description": "Thinned fruit on the ground attracts pests and harbors brown rot. Rake them up — don''t leave them under the tree."
      }
    ],
    "toolsNeeded": [
      "Your hands (primary tool)",
      "Small scissors or snips for tight clusters",
      "Bucket or tarp for dropped fruitlets"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC ANR ''Don''t Hesitate to Thin That Fruit!'' (4–6 inch spacing for plums, 30–45 days post-bloom timing) and UGA Extension B1518 ''Home Garden Plums'' (limb breakage on un-thinned trees, finishing thinning before fruit reaches half-size)."
  }'::jsonb,
  'UC ANR; UGA Extension',
  'Plum',
  'monitoring',
  true
),
(
  'plum-harvesting',
  '{
    "treeType": "Plum",
    "title": "Plum Harvest",
    "introduction": "Plums ripen unevenly across a tree and even across a single branch — pick over several passes rather than stripping the whole tree at once. Color tells you when a plum is close, but the gentle-give test tells you when it''s actually ready. Japanese plums ripen earlier (July) than European types (August–September) — match your timing to your variety, not the calendar.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait for full cultivar color",
        "description": "Each variety has a target color. Stanley turns deep blue-purple. Santa Rosa turns red-purple. Yellow varieties go from green to clear yellow. The full color is the cue — wait for it on each individual fruit."
      },
      {
        "stepNumber": 2,
        "title": "Add the gentle-give test",
        "description": "Cup a colored plum and press gently with your thumb at the shoulder. A ripe plum yields slightly. Rock-hard means wait; squishy means too late. On Japanese plums the give shows up before full color — go by feel."
      },
      {
        "stepNumber": 3,
        "title": "Twist gently to detach",
        "description": "Lift the plum and rotate slightly. A ripe plum releases with little effort. If you have to pull hard, it''s not ready — leave it, the stem stays on the spur, and you''ll come back."
      },
      {
        "stepNumber": 4,
        "title": "Plan for 2–3 picks per tree",
        "description": "A single plum tree ripens over 1–2 weeks. Pick the ripest fruit every 2–3 days. Don''t strip the whole tree — fruit still showing green ground color or feeling firm needs another few days."
      },
      {
        "stepNumber": 5,
        "title": "Handle gently, store cool",
        "description": "Ripe plums bruise easily. Set fruit gently into a shallow tray in a single layer. Refrigerated plums hold 3–5 weeks; counter-ripen any picked slightly underripe at room temperature for a day or two before chilling.",
        "tip": "For canning or jam, pick when firm-ripe and well-colored. For eating fresh, wait an extra day or two for full softness."
      },
      {
        "stepNumber": 6,
        "title": "Clean up drops daily",
        "description": "Fallen plums attract yellowjackets and feed brown rot. During harvest, pick up anything on the ground every day or two. Bag or compost in a closed bin — don''t leave rotting fruit under the tree."
      }
    ],
    "toolsNeeded": [
      "Padded harvest basket or shallow tray",
      "Step ladder for taller branches",
      "Bucket for windfall and spoiled fruit"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Penn State Extension ''Plum Production and Harvesting'' (multiple harvests per tree, color and softness cues, twist technique) and UMN Extension ''Growing Stone Fruits in the Home Garden'' (variety-specific color cues, refrigerated storage 3–5 weeks)."
  }'::jsonb,
  'PSU Extension; UMN Extension',
  'Plum',
  'harvesting',
  true
);
