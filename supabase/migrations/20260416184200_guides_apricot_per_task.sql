-- Per-task guides for Apricot.
--
-- Templates in lib/care/task-templates/apricot.ts:
--   pruning     → Summer pruning (Eutypa avoidance)
--   protection  → Leaf-fall copper spray (bacterial canker)
--   feeding     → Spring fertilizing
--   monitoring  → Fruit thinning
--   harvesting  → Apricot harvest
--
-- Apricot's defining quirk: prune in late summer (July–August) NOT
-- dormant winter, because Eutypa dieback infects fresh dormant cuts
-- during wet weather. This is opposite of peach/plum/nectarine and
-- is the single most important thing for an apricot grower to know.
--
-- Sources: UC IPM Pest Notes, USU Extension, UC ANR Real Dirt,
-- University of Maryland Extension. Approved on insert after diff
-- review.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'apricot-pruning',
  '{
    "treeType": "Apricot",
    "title": "Apricot Summer Pruning",
    "introduction": "Apricot is the one stone fruit you should never prune in winter. Eutypa dieback — a fungus that enters through fresh pruning wounds during wet weather — kills apricots cut in the dormant season. The fix is simple but counter-intuitive: prune apricots in July or August after harvest, when the air is dry and the wood seals quickly. This is the opposite of peach, plum, and nectarine, so don''t group apricot in with the rest of the orchard.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait until after harvest, ideally July",
        "description": "The window in inland regions is July through August; in coastal areas with later fall rain, August. The goal is at least 6 weeks of dry weather after the cuts before the first fall rain. If you''re past that window, wait until next summer."
      },
      {
        "stepNumber": 2,
        "title": "Train to an open vase",
        "description": "Apricots fruit on spurs that live 3–4 years on slightly older wood. Maintain 3–4 main scaffold branches at 25–30° from vertical, evenly spaced around the trunk, with no central leader and an open center."
      },
      {
        "stepNumber": 3,
        "title": "Remove the three Ds and any cankered wood first",
        "description": "Cut out Dead, Damaged, or Diseased branches back to clean tissue. If you find Eutypa cankers (sunken, gummy areas with darker wood beneath), cut at least 1 foot below the visible canker. Sterilize between cuts."
      },
      {
        "stepNumber": 4,
        "title": "Thin crowded growth",
        "description": "Use thinning cuts (removing whole branches at their origin) to open the canopy. You should see scattered patches of sky through the leaves when looking up from underneath. Remove water sprouts growing straight up through the center."
      },
      {
        "stepNumber": 5,
        "title": "Renew older fruiting wood",
        "description": "Spurs over 3 years old produce small, low-quality fruit. Remove the oldest unproductive wood each year so younger spurs can take over. This keeps the tree productive long-term."
      },
      {
        "stepNumber": 6,
        "title": "Flame-treat any cuts you make outside the window",
        "description": "If you absolutely must prune in winter (broken branch, safety hazard), flame the cut with a propane torch for 5–10 seconds immediately after making it. The heat sterilizes the wound and prevents Eutypa infection.",
        "tip": "Bag and dispose of any wood with visible cankers — the fungus survives in pruned debris and produces spores during rain."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners",
      "Loppers for branches up to ~1.5 inch",
      "Pruning saw for larger scaffold cuts",
      "70% isopropyl alcohol for sterilizing between diseased cuts",
      "Small propane torch (only if winter cuts are unavoidable)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Eutypa Dieback'' Pest Note (July–August pruning window for inland regions, August for coast, 1-foot below canker rule, flame-treatment of unavoidable winter cuts), UC ANR ''Eutypa Alert! Wait to Prune Your Apricots'' (homeowner-facing rationale and timing), and UC IPM ''Eutypa Dieback and Bot Canker (Apricot)'' (spore transmission via rain and sprinklers, infection through pruning wounds)."
  }'::jsonb,
  'UC IPM; UC ANR',
  'Apricot',
  'pruning',
  true
),
(
  'apricot-protection',
  '{
    "treeType": "Apricot",
    "title": "Leaf-Fall Copper Spray for Bacterial Canker",
    "introduction": "Bacterial canker is the second-biggest disease threat to backyard apricots, after Eutypa. It enters the tree through leaf scars in fall when the leaves drop, and through frost cracks in winter. A single copper spray timed to leaf-fall closes the door before the bacteria can get in. This is a once-a-year job — skip it once and you may see dead branches, gummy oozing wounds, and dieback by spring.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Watch for leaf-fall, not the calendar",
        "description": "The right time is when about half the leaves have dropped naturally. In most US zones this is late October through early November, but a warm fall pushes it later and a cold snap pulls it earlier."
      },
      {
        "stepNumber": 2,
        "title": "Pick a fixed copper fungicide labeled for stone fruit",
        "description": "Copper hydroxide, copper sulfate, or Bordeaux mixture all work. Read the label — the product must list apricot or stone fruit and bacterial canker. Mix per the label exactly; over-concentration burns bark."
      },
      {
        "stepNumber": 3,
        "title": "Pick a dry day above 40 °F",
        "description": "Choose a day with no rain forecast for 24–48 hours. Rain before the spray dries washes the copper off. Cold below 40 °F slows the spray''s drying and reduces effectiveness."
      },
      {
        "stepNumber": 4,
        "title": "Spray to runoff on every twig and branch",
        "description": "Coat all bark surfaces — top of canopy, underside of branches, every twig. The bacteria enter through small wounds anywhere, so missed spots are vulnerable. Work top-down. A small tree takes about a gallon; a mature tree 2–3 gallons."
      },
      {
        "stepNumber": 5,
        "title": "Add a second spray after a heavy rain",
        "description": "If a heavy rain comes within a week of the first spray, the copper may have washed off before doing its job. Re-spray once the bark dries and the next dry window opens."
      },
      {
        "stepNumber": 6,
        "title": "Clean your sprayer immediately",
        "description": "Copper is corrosive to sprayer parts. Triple-rinse the tank, wand, and nozzle with clean water, then pump clean water through the system until it runs clear."
      }
    ],
    "toolsNeeded": [
      "Pump or backpack sprayer",
      "Fixed copper fungicide labeled for apricot bacterial canker",
      "Measuring cup and mixing container",
      "Gloves and safety glasses"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Bacterial Canker (Apricot)'' (leaf-scar entry route, copper at leaf-fall, ring nematode and tree vigor as underlying risk factors) and UC IPM ''Stem Cankers and Dieback'' (timing relative to leaf-fall, fixed copper formulations)."
  }'::jsonb,
  'UC IPM',
  'Apricot',
  'protection',
  true
),
(
  'apricot-feeding',
  '{
    "treeType": "Apricot",
    "title": "Apricot Spring Fertilizing",
    "introduction": "Apricots respond to a single, modest spring nitrogen application — but over-feeding actually makes things worse. Excess nitrogen pushes soft, leafy growth that''s more vulnerable to bacterial canker, the disease apricots are already prone to. One pre-bud-break feeding per year is the standard recommendation.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Time it to just before bud swell",
        "description": "Apply in early March in most US zones, while the tree is still dormant but starting to wake. Apricots bloom early — sometimes February in mild climates — so don''t wait until you see flower buds open."
      },
      {
        "stepNumber": 2,
        "title": "Calculate by trunk diameter",
        "description": "Standard home-orchard rate is about 1 lb of actual nitrogen per inch of trunk diameter, measured one foot above the ground. A 3-inch trunk wants 3 lb of actual N. A balanced 10-10-10 fertilizer is 10% N, so 30 lb of 10-10-10 supplies 3 lb."
      },
      {
        "stepNumber": 3,
        "title": "Spread under the drip line",
        "description": "Broadcast the fertilizer in a ring under the outermost branches — that''s where the feeder roots are. Keep it at least a foot from the trunk to avoid burning bark. Don''t pile it in one spot."
      },
      {
        "stepNumber": 4,
        "title": "Water it in deeply",
        "description": "Water immediately after spreading, enough to soak the top 6–8 inches. Granular fertilizer doesn''t do anything until it dissolves. Without water, it sits on the surface and washes away in the first rain."
      },
      {
        "stepNumber": 5,
        "title": "Stop after one feeding",
        "description": "Don''t add a second feeding mid-summer or after harvest. Apricots are uniquely vulnerable to bacterial canker, and extra nitrogen makes the disease worse. If growth looks weak, get a soil test before adding anything else.",
        "tip": "Yellowing between leaf veins is usually iron, zinc, or manganese deficiency — common in alkaline western soils. More nitrogen won''t fix it."
      }
    ],
    "toolsNeeded": [
      "Granular balanced fertilizer (e.g. 10-10-10) or composted manure",
      "Garden scale or measuring cup",
      "Garden hose or watering can"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from USU Extension ''How to Grow Apricots in Your Home Garden'' (single pre-bud-break application, modest nitrogen rate) and UC IPM ''Bacterial Canker (Apricot)'' (over-feeding nitrogen worsens canker; tree vigor management as primary disease control)."
  }'::jsonb,
  'USU Extension; UC IPM',
  'Apricot',
  'feeding',
  true
),
(
  'apricot-monitoring',
  '{
    "treeType": "Apricot",
    "title": "Apricot Fruit Thinning",
    "introduction": "Apricots set so much fruit that branches break under the load and the fruit itself stays small and bland. Thinning is the highest-payoff job in the apricot year — a few minutes per branch turns a marginal crop into a great one. Do it early, when fruit is grape-sized, and don''t feel guilty: thinning is the difference between 50 small bitter apricots and 25 perfect ones.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait 2–3 weeks after bloom",
        "description": "The window is the first 2–3 weeks after bloom, when fruit reaches grape size (1/2 inch or so). Earlier is better — every week you wait reduces the size benefit. By the time fruit is half-grown, thinning still helps but won''t produce noticeably bigger apricots."
      },
      {
        "stepNumber": 2,
        "title": "Target 3–5 inches between fruit",
        "description": "Aim for one apricot every 3–5 inches along each branch. Closer than 3 inches and the fruit stays small; farther than 5 is fine on weaker branches that can''t carry weight."
      },
      {
        "stepNumber": 3,
        "title": "Remove doubles and the smallest fruit first",
        "description": "Where two apricots are touching, pick the smaller one off. Then remove anything misshapen, scarred, or noticeably smaller than its neighbors. This easy half of the job often gets you most of the way to target spacing."
      },
      {
        "stepNumber": 4,
        "title": "Pinch off, don''t pull",
        "description": "Use thumb and forefinger to pinch fruitlets off, or snip with small scissors in tight clusters. Don''t yank — you can damage next year''s fruiting spur. The spur on the tree fruits again next year if you don''t break it."
      },
      {
        "stepNumber": 5,
        "title": "Thin overloaded branches first",
        "description": "If a branch is already sagging under fruit weight, thin it first. Apricot wood is brittle — a loaded branch will snap, and the resulting tear is an entry point for canker.",
        "tip": "If you''re unsure how aggressively to thin, err toward more. A tree that drops fruit on its own in May (''June drop'' for apricots) often still has too many — thin again after the natural drop settles."
      },
      {
        "stepNumber": 6,
        "title": "Clean up dropped fruitlets",
        "description": "Thinned fruit on the ground attracts pests and harbors brown rot. Rake them up and dispose — don''t leave them under the tree."
      }
    ],
    "toolsNeeded": [
      "Your hands (primary tool)",
      "Small scissors or snips for tight clusters",
      "Bucket or tarp for dropped fruitlets"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from USU Extension ''How to Grow Apricots in Your Home Garden'' (3–5 inch spacing, grape-size timing, optimum window 2–3 weeks after bloom) and UC ANR ''Don''t Hesitate to Thin That Fruit!'' (early thinning gives biggest size benefit, limb breakage on unthinned trees)."
  }'::jsonb,
  'USU Extension; UC ANR',
  'Apricot',
  'monitoring',
  true
),
(
  'apricot-harvesting',
  '{
    "treeType": "Apricot",
    "title": "Apricot Harvest",
    "introduction": "Apricots have one of the shortest harvest windows of any backyard tree — sometimes just 5–7 days from perfect to over-ripe. Pick too early and they never sweeten; pick too late and they fall and bruise. Watch the tree daily once color shows, and plan to make 2–3 picking passes over a single week.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait for full cultivar color",
        "description": "Most apricots ripen to a yellow base with orange or red blush, depending on variety. The full color is the cue — a green-shouldered apricot stays sour even if you let it ''ripen'' on the counter. Color first, then test by touch."
      },
      {
        "stepNumber": 2,
        "title": "Add the gentle-give test",
        "description": "Cup a colored apricot and press lightly with your thumb. A ripe apricot yields slightly. Rock-hard means wait another day or two; soft and squishy means too late and probably starting to brown-rot."
      },
      {
        "stepNumber": 3,
        "title": "Twist gently to detach",
        "description": "Lift the fruit and rotate slightly. A ripe apricot releases with little effort. If you have to pull hard, leave it — the stem stays attached to the spur, and that spur fruits again next year."
      },
      {
        "stepNumber": 4,
        "title": "Plan for 2–3 passes per tree",
        "description": "An apricot tree doesn''t ripen all at once. Pick the ripest fruit every 1–2 days for a week. The south side and upper canopy ripen first; check those branches earlier."
      },
      {
        "stepNumber": 5,
        "title": "Handle gently, store cool",
        "description": "Ripe apricots bruise from a light touch. Set fruit gently into a shallow basket in a single layer — never piled. Refrigerated apricots hold 3–5 days; for longer storage, halve and freeze or dehydrate.",
        "tip": "Apricots picked just shy of ripe finish softening at room temperature within a day. But they won''t get sweeter — sugar stops climbing the moment the fruit leaves the tree."
      },
      {
        "stepNumber": 6,
        "title": "Clean up drops daily",
        "description": "Fallen apricots attract yellowjackets and feed brown rot for next year. During harvest week, pick up everything on the ground every day. Bag or compost in a closed bin."
      }
    ],
    "toolsNeeded": [
      "Padded harvest basket or shallow tray",
      "Step ladder for taller branches",
      "Bucket for windfall and spoiled fruit"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Harvesting and Storing Apricots'' (color and softness as ripeness cues, twist technique, refrigerated storage 3–5 days) and USU Extension ''How to Grow Apricots in Your Home Garden'' (multiple harvests per tree, July–August window, fully ripe on the tree gives best flavor)."
  }'::jsonb,
  'UC IPM; USU Extension',
  'Apricot',
  'harvesting',
  true
);
