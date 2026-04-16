-- Per-task guides for Cherry (sweet, Prunus avium).
--
-- Templates in lib/care/task-templates/cherry.ts:
--   pruning     → Summer pruning (modified central leader)
--   protection  → Brown rot blossom protection
--   feeding     → Spring nitrogen
--   monitoring  → Cherry fruit fly watch
--   harvesting  → Cherry harvest
--
-- Sweet cherry's defining quirk: prune in summer (not dormant winter)
-- to avoid silver leaf and bacterial canker on fresh cuts. This is
-- opposite of every other tree we've covered — call it out clearly.
--
-- Tart cherry (Prunus cerasus) differs in pruning shape (open-vase),
-- earlier harvest, and tolerates a wider zone range. Sweet cherry
-- covers the common backyard case; tart-specific guides can ship
-- later if real users add tart cherry trees.
--
-- Sources: MSU Extension PNW 667, UC IPM Cherry, USU Extension,
-- University of Maryland Extension. Approved on insert after diff
-- review.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'cherry-pruning',
  '{
    "treeType": "Cherry",
    "title": "Sweet Cherry Summer Pruning",
    "introduction": "Sweet cherries are the one fruit tree where dormant winter pruning is the wrong move. Fresh dormant cuts on cherry are a highway for silver leaf and bacterial canker — both of which can kill a young tree. Prune sweet cherries in summer instead, after harvest, while wounds heal fast and the air is dry. The training shape is also different: cherries do best with a modified central leader, not the open vase you''d use for peach or plum.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Time the cuts to early-to-mid summer",
        "description": "Prune in July, after harvest, when the tree is actively growing and wounds seal within days. The window closes once fall rain returns — typically by mid-August in cooler climates, late August in dry-summer regions.",
        "tip": "If you must remove a damaged or dangerous limb in winter, cover the cut with a tree-wound paint and accept that risk is higher."
      },
      {
        "stepNumber": 2,
        "title": "Pick out the central leader",
        "description": "A sweet cherry should have one dominant vertical leader running up the middle, with 4–5 well-spaced scaffold branches angled 45–60° from vertical along its length. If two shoots are competing for the leader role, cut the weaker one back."
      },
      {
        "stepNumber": 3,
        "title": "Remove the three Ds first",
        "description": "Cut out any Dead, Damaged, or Diseased wood — back to clean tissue or to the branch collar. Sterilize pruners with 70% alcohol between diseased cuts so you don''t spread canker."
      },
      {
        "stepNumber": 4,
        "title": "Thin, don''t head",
        "description": "Mature sweet cherries need very little annual cutting. Use thinning cuts (removing a whole branch back to its origin) rather than heading cuts (shortening a branch mid-length). Heading cuts trigger dense, weak regrowth that shades the canopy."
      },
      {
        "stepNumber": 5,
        "title": "Open the canopy enough to see through it",
        "description": "Sunlight reaching the inside of the tree is what ripens fruit and reduces disease pressure. Stand under the tree and look up — you should see scattered patches of sky through the leaves. Remove crossing branches and any growth shading the inside."
      },
      {
        "stepNumber": 6,
        "title": "Clean up cleanly",
        "description": "Bag or burn pruned wood, especially anything you cut for disease. Don''t leave debris under the tree where brown rot and canker overwinter."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners",
      "Loppers for branches up to ~1.5 inch",
      "Pruning saw for larger scaffold cuts",
      "70% isopropyl alcohol for sterilizing between diseased cuts"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from MSU Extension PNW 667 ''Cherry Training Systems'' (modified central leader, post-harvest pruning window, scaffold spacing) and UC Marin Master Gardeners ''Pruning Fruit Trees — Cherry'' (summer pruning rationale, silver leaf and bacterial canker risk on dormant cuts)."
  }'::jsonb,
  'MSU Extension PNW 667; UC Marin Master Gardeners',
  'Cherry',
  'pruning',
  true
),
(
  'cherry-protection',
  '{
    "treeType": "Cherry",
    "title": "Brown Rot Blossom Protection",
    "introduction": "Brown rot blossom blight is the disease that ruins more backyard cherry crops than anything else. It infects open flowers in cool wet spring weather, kills the blossoms, then sits dormant on the wood until fruit starts to ripen — when it explodes into the rotting brown fuzz everyone recognizes too late. The defense is simple: protect the blossoms during bloom. Skip this once and you can lose the entire crop.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Watch the bud stages, not the calendar",
        "description": "The right time to spray is at popcorn stage — when buds are white and showing color but not yet open. In most US zones this is early to mid April for sweet cherry, but bud stage is what matters, not the date."
      },
      {
        "stepNumber": 2,
        "title": "Pick a fungicide labeled for brown rot blossom blight on cherry",
        "description": "Captan and chlorothalonil are common home-orchard options. Look at the label — if cherry and brown rot blossom blight aren''t both listed, find a different product. Mix per the label exactly."
      },
      {
        "stepNumber": 3,
        "title": "Spray at popcorn, repeat at full bloom if rain is forecast",
        "description": "Apply the first spray at popcorn stage, covering every flower bud thoroughly. If rain is in the next 5–7 days during full bloom, apply a second spray at full bloom — wet conditions are when brown rot infects."
      },
      {
        "stepNumber": 4,
        "title": "Cover everything to runoff",
        "description": "The fungus can infect any open flower the spray missed. Work top-down, get into the inside of the canopy, and spray until droplets just start to run. A small tree takes about a gallon of mix; a mature tree 2–3 gallons."
      },
      {
        "stepNumber": 5,
        "title": "Sanitation matters more than people realize",
        "description": "Brown rot overwinters on mummified fruit (last year''s rotted cherries still hanging in the tree) and dead twigs. Walk the tree before bloom and pull off every mummy you can reach. Bag and trash — don''t compost."
      },
      {
        "stepNumber": 6,
        "title": "Pick clean and pick fast at harvest",
        "description": "Brown rot also infects ripe fruit. Pick cherries on time, remove any rotting fruit immediately, and don''t leave overripe cherries on the tree. Every rotten cherry left is next year''s spore source."
      }
    ],
    "toolsNeeded": [
      "Pump or backpack sprayer",
      "Fungicide labeled for cherry brown rot blossom blight (e.g. captan, chlorothalonil)",
      "Measuring cup and mixing container",
      "Gloves and safety glasses"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Brown Rot Blossom and Twig Blight (Cherry)'' (popcorn-stage timing, repeat at bloom in wet weather, sanitation of mummies) and MSU Extension ''Brown Rot'' (overwintering on mummified fruit, infection temperature window 67–77 °F, three-week pre-harvest infection window for fruit)."
  }'::jsonb,
  'UC IPM; MSU Extension',
  'Cherry',
  'protection',
  true
),
(
  'cherry-feeding',
  '{
    "treeType": "Cherry",
    "title": "Cherry Spring Nitrogen",
    "introduction": "Cherries don''t need much fertilizer — and over-feeding makes things worse. Excess nitrogen pushes lush, soft growth that''s more susceptible to bacterial canker and aphid pressure. One modest application in early spring, before bud break, is all a healthy backyard cherry needs.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Time it to just before bud swell",
        "description": "Apply in early March in most US zones, while the tree is still dormant but waking up. Roots are starting to take up nutrients before the canopy opens. Feeding later, after leaves are out, pushes the wrong kind of growth."
      },
      {
        "stepNumber": 2,
        "title": "Calculate the rate by trunk diameter",
        "description": "The home-orchard rule of thumb is about 1 lb of actual nitrogen per inch of trunk diameter, measured one foot above the ground. A 3-inch trunk wants 3 lb of actual N. Read the bag — a 10-10-10 fertilizer is 10% N, so 30 lb of 10-10-10 supplies 3 lb of actual N."
      },
      {
        "stepNumber": 3,
        "title": "Spread evenly under the drip line",
        "description": "The drip line is the circle on the ground directly below the outermost branches — that''s where the feeder roots are. Broadcast fertilizer evenly in that ring. Don''t pile it against the trunk; keep at least a foot of clearance."
      },
      {
        "stepNumber": 4,
        "title": "Water it in",
        "description": "Granular fertilizer is inert until it dissolves. Water deeply right after spreading — enough to soak the top 6–8 inches of soil. Without water it sits on the surface and washes away in the first heavy rain."
      },
      {
        "stepNumber": 5,
        "title": "Skip the second feeding",
        "description": "Unlike peach or citrus, cherries do not benefit from a summer or fall feeding. One pre-bud-break application per year is the recommendation. If your tree''s growth looks weak by mid-summer, get a soil test before adding more — micronutrient deficiency is more likely than nitrogen shortage.",
        "tip": "Yellowing between leaf veins (interveinal chlorosis) usually means iron, zinc, or manganese deficiency, not nitrogen. Adding more N won''t fix it."
      }
    ],
    "toolsNeeded": [
      "Granular balanced fertilizer (e.g. 10-10-10) or composted manure",
      "Garden scale or measuring cup",
      "Garden hose or watering can"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from University of Maryland Extension ''Care of Peach, Cherry, Nectarine, Plum, and Apricot Trees in Home Gardens'' (single pre-bud-break application, 1 lb actual N per inch of trunk diameter) and UC ANR ''Fertilizing Fruit Trees'' (over-feeding nitrogen worsens disease pressure on stone fruit, micronutrient deficiency vs. N shortage)."
  }'::jsonb,
  'University of Maryland Extension; UC ANR',
  'Cherry',
  'feeding',
  true
),
(
  'cherry-monitoring',
  '{
    "treeType": "Cherry",
    "title": "Cherry Fruit Fly Watch",
    "introduction": "If you find a cherry with a small white maggot inside, you missed the cherry fruit fly window. The adult flies emerge in late spring, lay eggs in ripening fruit, and the larvae hatch inside the cherries you''re about to pick. There is no rescue once eggs are laid — monitoring catches them early enough to act, or to harvest before egg-laying peaks. Spotted-wing drosophila is now part of the same conversation: it lays eggs in firmer, less ripe fruit, so the timeline is even earlier than classic cherry fruit fly.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Hang traps as fruit starts to color",
        "description": "Yellow sticky cards baited with apple-cider vinegar and a drop of dish soap catch both western cherry fruit fly and spotted-wing drosophila. Hang 2–3 traps per backyard tree at eye level, in shade on the inside of the canopy."
      },
      {
        "stepNumber": 2,
        "title": "Check traps twice a week",
        "description": "Cherry fruit fly is small (3–5 mm), with banded wings and a clear yellow scutellum on the back. Spotted-wing drosophila looks like a fruit fly but the males have a single dark spot on each wingtip. Once you see either species in the trap, the egg-laying window has started."
      },
      {
        "stepNumber": 3,
        "title": "Sample fruit by squeezing",
        "description": "Pick 1–2 cups of the ripest cherries you can find. Drop them in a zip-top bag, gently squeeze them flat, and add a salt-water solution (1/4 cup salt per quart of warm water). Larvae float to the surface within 15 minutes if eggs were laid."
      },
      {
        "stepNumber": 4,
        "title": "Bag clusters or net the whole tree",
        "description": "On small trees, fine mesh netting (under 1 mm) draped over the canopy and tied at the trunk excludes both flies completely. On larger trees, paper or organza fruit bags around individual clusters work, though they''re labor-intensive."
      },
      {
        "stepNumber": 5,
        "title": "Pick everything when ready — leave nothing",
        "description": "Both flies build their populations on overripe and rotting fruit. Strip every cherry off the tree at harvest, and pick up every fallen cherry from the ground. Don''t leave cracked or split fruit hanging."
      },
      {
        "stepNumber": 6,
        "title": "Compost or trash properly",
        "description": "Rotting cherries with larvae in them shouldn''t go in an open compost pile — the larvae complete their cycle and emerge as adult flies for next year. Bag and trash, or bury at least 12 inches deep."
      }
    ],
    "toolsNeeded": [
      "Yellow sticky cards (2–3 per tree)",
      "Apple cider vinegar and dish soap (bait)",
      "Fine mesh netting or fruit bags (for exclusion)",
      "Zip-top bags and salt for fruit sampling"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from USU Extension ''Western Cherry Fruit Fly in Utah Orchards'' (trap timing as fruit colors, identification cues) and UC IPM ''Spotted-Wing Drosophila (Cherry)'' (sampling protocol, salt-water flotation, sanitation as primary control)."
  }'::jsonb,
  'USU Extension; UC IPM',
  'Cherry',
  'monitoring',
  true
),
(
  'cherry-harvesting',
  '{
    "treeType": "Cherry",
    "title": "Cherry Harvest",
    "introduction": "Sweet cherries do not ripen further after picking — what you pick is what you get. The window for any one cherry is short (a few days at peak), and a single tree usually finishes its run inside a week. Wait for full color and a slight give, pick with the stem on, and don''t damage the fruiting spur on the way down — that spur fruits again next year.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait for full cultivar color",
        "description": "Bing and most dark sweet cherries hit deep mahogany when ripe. Rainier and yellow types turn cream to yellow with a red blush. The color a cultivar reaches is the cue — pick early and the cherry stays sour."
      },
      {
        "stepNumber": 2,
        "title": "Check firmness with the squeeze test",
        "description": "Ripe sweet cherries are firm but yield slightly under thumb pressure. Rock-hard means too early; soft and squishy means too late and probably starting to brown-rot."
      },
      {
        "stepNumber": 3,
        "title": "Pick with the stem attached",
        "description": "Stems-on cherries store a week longer than stems-off. Lift the cherry up and twist gently with your wrist — the stem releases from the spur cleanly. If you''re yanking down, you''re damaging next year''s fruit site."
      },
      {
        "stepNumber": 4,
        "title": "Never tear the spur",
        "description": "Cherry fruiting spurs are short, stubby branches that produce fruit for years. If you snap one off pulling fruit, that spot won''t bear next year. If a stem won''t release, leave it — come back when riper."
      },
      {
        "stepNumber": 5,
        "title": "Pick after dew dries, before midday heat",
        "description": "Wet cherries split and rot. Mid-day cherries are hot and bruise easily. The morning window after dew but before noon is the sweet spot — fruit is dry, cool, and firm."
      },
      {
        "stepNumber": 6,
        "title": "Leave nothing on the tree",
        "description": "Strip any cracked, split, or overripe cherries even if you won''t eat them. Leftover ripe fruit feeds the next generation of cherry fruit fly and brown rot for next year. Compost them in a closed bin or bag and trash.",
        "tip": "Refrigerate cherries unwashed in a single layer — water on the surface speeds rot. Wash just before eating."
      }
    ],
    "toolsNeeded": [
      "Padded basket or shallow tray",
      "Step ladder for taller branches",
      "Bucket for windfall and spoiled fruit"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from MSU Extension ''Sweet Cherry Harvest'' (full cultivar color, stem-on picking, twist technique) and UC IPM ''Brown Rot — Cherry'' (sanitation: leaving fruit on tree increases next-year disease pressure)."
  }'::jsonb,
  'MSU Extension; UC IPM',
  'Cherry',
  'harvesting',
  true
);
