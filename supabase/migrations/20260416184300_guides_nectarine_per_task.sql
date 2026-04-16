-- Per-task guides for Nectarine.
--
-- Templates in lib/care/task-templates/nectarine.ts:
--   pruning     → Open-vase pruning (late winter, same as peach)
--   protection  → Peach leaf curl prevention (same as peach)
--   feeding     → Spring fertilizing
--   monitoring  → Fruit thinning
--   harvesting  → Nectarine harvest
--
-- Nectarine is botanically a fuzzless peach (Prunus persica var.
-- nucipersica). Same pruning, same leaf curl risk, same thinning
-- approach. The smooth skin shows ground color earlier than fuzzy
-- peach, so the harvest cue is slightly different.
--
-- Sources: UC ANR California Backyard Orchard, Clemson HGIC, UC IPM,
-- University of Maryland Extension. Approved on insert after diff
-- review.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'nectarine-protection',
  '{
    "treeType": "Nectarine",
    "title": "Peach Leaf Curl Prevention for Nectarine",
    "introduction": "Nectarines get peach leaf curl just as badly as peaches do — the disease doesn''t care about the fuzz. The fungus overwinters on bark and infects buds just as they swell in late winter. One well-timed copper spray while the tree is still dormant prevents it for the whole year. Miss the window and there is nothing you can do until next winter.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Time the spray to the dormant window",
        "description": "Apply copper fungicide once between leaf-drop in fall and bud swell in late winter. The standard home-orchard timing is late January through February — before any pink shows in the buds. If buds have already broken, it is too late for this season.",
        "tip": "A second spray in late fall (after leaves drop) gives extra protection in wet-winter regions like the PNW."
      },
      {
        "stepNumber": 2,
        "title": "Pick a dry day above 40 °F",
        "description": "Choose a day with no rain forecast for the next 24–48 hours and temperatures above 40 °F. Rain before the spray dries washes the copper off and wastes the application."
      },
      {
        "stepNumber": 3,
        "title": "Mix copper fungicide per the label",
        "description": "Use a fixed copper product (copper hydroxide, copper sulfate, or Bordeaux) labeled for peach leaf curl on peach or nectarine. Measure carefully — over-concentration damages bark. Fill the sprayer with water first, then add copper."
      },
      {
        "stepNumber": 4,
        "title": "Spray to the point of runoff",
        "description": "Coat every branch, twig, and bud surface until droplets just start to run. Work top-down. Don''t skip the small twigs — that''s where infection starts. A small tree takes about a gallon of mix; a mature tree 2–3 gallons."
      },
      {
        "stepNumber": 5,
        "title": "Clean your sprayer immediately",
        "description": "Copper is corrosive to sprayer parts. Triple-rinse the tank, wand, and nozzle with clean water when you''re done, then pump clean water through the system until it runs clear."
      }
    ],
    "toolsNeeded": [
      "Pump or backpack sprayer",
      "Fixed copper fungicide labeled for peach leaf curl",
      "Measuring cup and mixing container",
      "Gloves and safety glasses"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Peach Leaf Curl'' Pest Note 7426 (single dormant copper application, late-fall + late-winter schedule for wet regions, no rescue spray once buds break) and UC IPM ''Peach Leaf Curl (Nectarine)'' (nectarine equally susceptible to the disease, same management as peach)."
  }'::jsonb,
  'UC IPM',
  'Nectarine',
  'protection',
  true
),
(
  'nectarine-pruning',
  '{
    "treeType": "Nectarine",
    "title": "Nectarine Open-Vase Pruning",
    "introduction": "Nectarines fruit only on last year''s wood — same as peach — so every branch that fruited this year won''t fruit again. Annual pruning is what keeps a nectarine productive. Prune to an open-vase shape and remove about half of last year''s growth. That sounds aggressive; for nectarine it''s normal.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Prune in late winter before bud break",
        "description": "Prune in mid-February through early March — after the coldest weather has passed but before bud swell. Early-winter pruning invites cold injury and canker; late pruning after bud swell stresses the tree.",
        "tip": "If a late hard freeze is forecast, it is fine to delay pruning by a week or two."
      },
      {
        "stepNumber": 2,
        "title": "Remove the three Ds first",
        "description": "Start by cutting out any Dead, Damaged, or Diseased wood. Make clean cuts back to healthy tissue or to the branch collar. Sterilize pruners with 70% alcohol between diseased cuts."
      },
      {
        "stepNumber": 3,
        "title": "Keep an open vase",
        "description": "A nectarine should have 3–4 main scaffold branches angled 45–60° from vertical, with an open center that lets sunlight reach every branch. Remove any vigorous upright shoots growing straight up through the center — they shade out fruiting wood and rarely fruit themselves."
      },
      {
        "stepNumber": 4,
        "title": "Renew the fruiting wood",
        "description": "Identify last year''s growth — smooth, reddish, pencil-thick shoots. These are where this year''s nectarines will form. Keep the healthiest ones spaced about 6 inches apart along each scaffold; cut out the rest. On mature trees this removes 40–50% of what grew last year, which looks like a lot but is correct."
      },
      {
        "stepNumber": 5,
        "title": "Head back to control height",
        "description": "Shorten the tallest shoots to keep the tree at 8–9 feet — a height you can reach from the ground or a short ladder at harvest. Cut just above an outward-facing bud to direct next year''s growth outward, not up."
      },
      {
        "stepNumber": 6,
        "title": "Clean up prunings",
        "description": "Rake and bag or burn all pruned wood. Peach leaf curl, brown rot, and borer larvae overwinter in debris. Don''t compost nectarine prunings — most home compost piles don''t get hot enough to kill the spores."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners",
      "Loppers for branches up to ~1.5 inch",
      "Pruning saw for larger scaffold cuts",
      "70% isopropyl alcohol or 10% bleach for sterilizing"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Clemson HGIC ''Pruning Peaches & Nectarines'' (open-vase training, head back long shoots by 1/2, thin small shoots, light penetration), UC IPM ''Pruning Peach and Nectarine Trees'' (40–50% annual growth removed, fruits on one-year-old wood), and UC ANR ''California Backyard Orchard — Nectarine'' (height management, multiple-pass harvest planning)."
  }'::jsonb,
  'Clemson HGIC; UC IPM; UC ANR',
  'Nectarine',
  'pruning',
  true
),
(
  'nectarine-feeding',
  '{
    "treeType": "Nectarine",
    "title": "Nectarine Spring Fertilizing",
    "introduction": "Nectarines need consistent nitrogen to support good fruit set and steady growth. Same approach as peach: a single feeding in early spring, before bud break, sized to the tree. Don''t over-do it — extra nitrogen pushes soft growth that''s more vulnerable to brown rot and aphid pressure.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Time it to just before bud swell",
        "description": "Apply in early March in most US zones, while the tree is still dormant but starting to wake. Roots take up nutrients before the canopy opens, supporting strong bloom and fruit set."
      },
      {
        "stepNumber": 2,
        "title": "Calculate by trunk diameter",
        "description": "Standard home-orchard rate is about 1 lb of actual nitrogen per inch of trunk diameter, measured one foot above the ground. A 3-inch trunk wants 3 lb of actual N. A balanced 10-10-10 fertilizer is 10% N, so 30 lb of 10-10-10 supplies 3 lb."
      },
      {
        "stepNumber": 3,
        "title": "Spread under the drip line",
        "description": "Broadcast the fertilizer in a ring under the outermost branches — that''s where the feeder roots are. Keep at least a foot of clearance from the trunk to avoid burning bark."
      },
      {
        "stepNumber": 4,
        "title": "Water it in deeply",
        "description": "Water immediately after spreading, enough to soak the top 6–8 inches. Granular fertilizer is inert until it dissolves; without water it sits on the surface and washes away in the first rain."
      },
      {
        "stepNumber": 5,
        "title": "Stop after one feeding",
        "description": "Don''t add a second feeding mid-summer. Nectarines do not benefit from extra nitrogen and the soft growth it pushes increases disease pressure. If growth looks weak by mid-summer, get a soil test before adding more.",
        "tip": "Yellowing between leaf veins (interveinal chlorosis) usually means iron, zinc, or manganese deficiency — not nitrogen shortage. More N won''t fix it."
      }
    ],
    "toolsNeeded": [
      "Granular balanced fertilizer (e.g. 10-10-10) or composted manure",
      "Garden scale or measuring cup",
      "Garden hose or watering can"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from University of Maryland Extension ''Care of Peach, Cherry, Nectarine, Plum, and Apricot Trees in Home Gardens'' (single pre-bud-break application, 1 lb actual N per inch of trunk diameter) and UC ANR ''Fertilizing Stone Fruit and Pome Fruit'' (over-feeding nitrogen worsens disease pressure on stone fruit)."
  }'::jsonb,
  'University of Maryland Extension; UC ANR',
  'Nectarine',
  'feeding',
  true
),
(
  'nectarine-monitoring',
  '{
    "treeType": "Nectarine",
    "title": "Nectarine Fruit Thinning",
    "introduction": "A healthy nectarine tree sets far more fruit than it can ripen. Leave every fruitlet in place and you get small, bland nectarines and broken branches. Thinning early — once fruit reaches marble size, about 4 weeks after bloom — is the single highest-return task in the nectarine year. Every week you wait reduces the size benefit.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait for natural fruit drop",
        "description": "Roughly 4 weeks after bloom, the tree sheds a wave of fruitlets on its own (June drop). Wait until this settles before hand-thinning — no point removing fruit the tree was going to drop anyway. Fruitlets should be marble-sized."
      },
      {
        "stepNumber": 2,
        "title": "Work one branch at a time",
        "description": "Pick a branch and count what is on it. Plan to leave one nectarine every 6 inches along the branch. That spacing is the target — closer than 6 inches and the fruit stays small."
      },
      {
        "stepNumber": 3,
        "title": "Remove doubles and the weakest fruit first",
        "description": "Where two nectarines are touching, pick the smaller one off. Then remove any fruit that is misshapen, scarred, or noticeably smaller than its neighbors. This is the easy, obvious thinning — do it first."
      },
      {
        "stepNumber": 4,
        "title": "Thin to final spacing",
        "description": "Now space what is left to 6 inches apart. Pinch fruitlets off with your thumb and forefinger or snip with small scissors. Don''t yank — you can tear the bark and damage next year''s fruiting wood.",
        "tip": "A mature branch loaded with un-thinned fruit will often snap. If a branch is sagging already, thin it first."
      },
      {
        "stepNumber": 5,
        "title": "Err toward more thinning",
        "description": "If you''re unsure, thin more rather than less. A nectarine tree with 30 large, sweet fruit is more rewarding than one with 80 small, mediocre ones. Just 5% of flowers becoming fruits is a full crop."
      },
      {
        "stepNumber": 6,
        "title": "Pick up what you dropped",
        "description": "Thinned fruitlets on the ground attract pests and harbor brown rot. Rake them up and dispose — don''t leave them under the tree."
      }
    ],
    "toolsNeeded": [
      "Your hands (primary tool)",
      "Small scissors or snips for tight clusters",
      "Bucket or tarp for dropped fruitlets"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Clemson HGIC ''Pruning Peaches & Nectarines'' (6-inch spacing, marble-size timing about 4 weeks after bloom, doubles removed first), UC ANR ''California Backyard Orchard — Nectarine'' (4–6 inch hand-thinning, 5% set as full crop), and UC ANR ''Don''t Hesitate to Thin That Fruit!'' (limb breakage on un-thinned trees)."
  }'::jsonb,
  'Clemson HGIC; UC ANR',
  'Nectarine',
  'monitoring',
  true
),
(
  'nectarine-harvesting',
  '{
    "treeType": "Nectarine",
    "title": "Nectarine Harvest",
    "introduction": "Nectarines, like peaches, do not improve after picking — sugar stops climbing the moment the fruit leaves the tree. Pick too early and you get a mealy nectarine that never sweetens; pick too late and the tree drops them. The smooth skin actually makes the ripeness cue easier to read than fuzzy peach: the background color shifts clearly from green to creamy yellow when the fruit is ready.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Watch the background color, not the blush",
        "description": "The red blush on a nectarine shows up early and doesn''t mean ripeness. What you want is the background (ground) color shifting from green to creamy yellow or gold. On a smooth-skinned nectarine that color change is easy to see — easier than on a fuzzy peach."
      },
      {
        "stepNumber": 2,
        "title": "Add the gentle-give test",
        "description": "Cup a colored nectarine and press lightly near the stem end. A ripe nectarine yields slightly. Rock-hard means wait; squishy means too late. Start checking the south and upper sides of the tree first — those nectarines ripen earliest."
      },
      {
        "stepNumber": 3,
        "title": "Use the twist test",
        "description": "Cradle the fruit in your palm and give a gentle upward twist. A ripe nectarine releases cleanly with a slight tug. If you have to pull hard, it is not ready — leave it and come back."
      },
      {
        "stepNumber": 4,
        "title": "Plan for 2–3 passes per tree",
        "description": "A single nectarine tree does not ripen all at once. Pick the ripest fruit every 2–3 days for a week or two. Leave anything that still has green ground color or feels firm — come back for it on the next pass."
      },
      {
        "stepNumber": 5,
        "title": "Handle like eggs",
        "description": "Ripe nectarines bruise from a 2-inch drop, and the smooth skin shows every mark. Set each fruit gently into a padded basket or shallow tray in a single layer. Don''t pile them — the weight bruises the bottom layer within hours.",
        "tip": "If you plan to eat within a day or two, leave nectarines at room temperature. Refrigerate only fully ripe fruit, briefly — cold storage ruins the texture."
      },
      {
        "stepNumber": 6,
        "title": "Clean up drops daily",
        "description": "Fallen nectarines attract yellowjackets, ants, and brown rot. During harvest season, pick up anything on the ground every day or two and dispose of bruised or rotting fruit."
      }
    ],
    "toolsNeeded": [
      "Padded harvest basket or shallow tray",
      "Step ladder for taller branches",
      "Bucket for windfall cleanup"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC ANR ''California Backyard Orchard — Nectarine'' (background color as primary ripeness signal, twist-release technique, multiple harvests per tree) and Clemson HGIC ''Pruning Peaches & Nectarines'' (firm-but-yielding texture, harvest before brown rot starts in over-ripe fruit)."
  }'::jsonb,
  'UC ANR; Clemson HGIC',
  'Nectarine',
  'harvesting',
  true
);
