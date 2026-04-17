-- Phase D: per-task guides for Olive (Olea europaea).
--
-- Templates in lib/care/task-templates/olive.ts — 4 categories
-- (protection intentionally skipped; olives are hardy in their
-- typical Mediterranean-climate zones — olive freeze damage is a
-- structural concern outside those zones that the overview handles):
--   pruning     → Open canopy for light + alternate-bearing load
--                 thinning
--   feeding     → Modest spring feeding (skip in light-crop years)
--   monitoring  → Olive fruit fly watch (CA/West)
--   harvesting  → Green-vs-black cues by end use (oil, green cure,
--                 black cure)
--
-- Sources: UC ANR (Olive Production Manual Publication 3353), UC IPM
-- (Olive Fruit Fly — Home and Landscape; Olive in Managing Pests in
-- Gardens), UF/IFAS EDIS (Olives for Your Florida Home Landscape).

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'olive-pruning',
  '{
    "treeType": "Olive",
    "title": "Olive Pruning for Light and Balance",
    "introduction": "Olives fruit on the previous year''s wood. That means two things for pruning: first, the canopy needs to let light reach the interior wood so it stays productive; second, annual pruning is a balancing act — enough to open the canopy, not so much that you strip off wood that will fruit this year. Mature olives also alternate-bear (heavy crop one year, light the next), and smart pruning evens that out.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Prune in late winter through early spring",
        "description": "Late February through March is the window in most US olive-growing regions. The tree is still dormant but close enough to spring that cuts heal quickly. Avoid pruning before hard frosts pass — wounded olive wood is vulnerable to cold damage."
      },
      {
        "stepNumber": 2,
        "title": "Open the canopy to let light in",
        "description": "Remove crossing branches, inward-growing shoots, and any obvious dead wood. The goal is a ''vase'' or ''bird''s nest'' shape where dappled light reaches the trunk. Interior branches that stay in deep shade stop producing fruit — open the canopy and those branches return to productive wood."
      },
      {
        "stepNumber": 3,
        "title": "Scale cuts to the crop rhythm",
        "description": "In a heavy-set year (lots of flowers and fruit starting to form), prune more aggressively to reduce load — thin some of the fruiting wood. In a light-set year after a heavy year, prune lightly and preserve every bit of fruiting wood you can. This is the #1 home-grower control over alternate bearing."
      },
      {
        "stepNumber": 4,
        "title": "Remove basal suckers at ground level",
        "description": "Olives send up suckers from the base and from low on the trunk. Cut them off at ground level or flush to the trunk. Sucker removal every winter prevents a single-trunk tree from turning into an unmanageable multi-trunk shrub."
      },
      {
        "stepNumber": 5,
        "title": "Don''t top — drop-crotch instead",
        "description": "If a mature olive has gotten too tall, don''t top it into bare wood. Use drop-crotch cuts — shorten a tall scaffold back to a lateral branch lower on the tree, spread over 2–3 seasons. Topped olives sprout watersprouts and look ugly for years.",
        "tip": "Olive wood is dense and slow-healing. Make clean, angled cuts and avoid leaving stubs. Sterilize between trees with 70% alcohol."
      },
      {
        "stepNumber": 6,
        "title": "Paint exposed trunk after heavy thinning",
        "description": "If opening the canopy exposes trunk bark that hasn''t seen direct sun, paint it with 50/50 white latex + water. Olive trunks sunburn on south and west sides when suddenly exposed — the paint reflects heat and protects the bark until the canopy re-fills."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners (1–1.5 inch cuts)",
      "Loppers (up to 2 inch cuts)",
      "Pruning saw (larger cuts)",
      "White latex paint (50/50 with water) for exposed trunk",
      "70% alcohol for sterilizing blades"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC ANR ''Olive Production Manual'' (Publication 3353/3485) (open-canopy pruning target, scale cuts to alternate-bearing year, drop-crotch rather than topping) and UC IPM ''Olive'' (Managing Pests in Gardens: Trees and Shrubs) (basal sucker removal, sterilization between trees, trunk sunburn on suddenly-exposed bark)."
  }'::jsonb,
  'UC ANR; UC IPM',
  'Olive',
  'pruning',
  true
),
(
  'olive-feeding',
  '{
    "treeType": "Olive",
    "title": "Olive Spring Feeding",
    "introduction": "Olives evolved on lean, rocky Mediterranean soils and don''t need heavy feeding. A modest spring nitrogen dose is useful in a bearing (heavy-crop) year; in a light-crop year following a heavy one, it''s often smarter to skip feeding entirely and let the tree rebuild carbohydrate reserves. Lean feeding is part of what gives home-grown olives their character — overfed trees produce watery, insipid fruit.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Read the crop before deciding",
        "description": "Walk the tree and look at the fruit set. Heavy crop forming (flowers everywhere, fruit already setting dense)? Feed at the rate below. Light crop after last year''s heavy one? Skip fertilizer this year entirely and focus on irrigation and pruning."
      },
      {
        "stepNumber": 2,
        "title": "Time it in March, before hot weather",
        "description": "Apply in March, before temperatures climb and the tree begins pushing new growth. Earlier feedings (February) risk being washed away by spring rain on well-drained soils. Later feedings push soft summer growth that''s vulnerable to olive fruit fly and cold damage."
      },
      {
        "stepNumber": 3,
        "title": "Use 1 lb of actual nitrogen per inch of trunk diameter",
        "description": "Measure trunk diameter one foot above the ground. A 2-inch trunk gets 2 lbs of actual nitrogen — roughly 20 lbs of 10-10-10. Cap total at 2 lbs of actual nitrogen on a mature backyard tree. For trees on naturally fertile soil, half these rates are plenty."
      },
      {
        "stepNumber": 4,
        "title": "Spread past the drip line, not at the trunk",
        "description": "Rake mulch back and spread fertilizer in a ring from 1 ft outside the trunk to about 2 ft past the drip line — olive feeder roots extend well beyond the canopy edge. Keep granules at least a foot from the trunk to avoid burning bark."
      },
      {
        "stepNumber": 5,
        "title": "Water it in deeply",
        "description": "Apply at least 1 inch of water over the fed area after spreading. In Mediterranean-climate regions with dry winters, this may be the first deep watering of the year — on top of dissolving the fertilizer, it''s a good reset for the tree.",
        "tip": "Olives on drip irrigation drop fruit when stressed in summer. If you see heavy June drop, check whether the irrigation schedule is meeting the tree''s summer demand rather than assuming it needs more fertilizer."
      },
      {
        "stepNumber": 6,
        "title": "Don''t feed mid-summer or fall",
        "description": "Late-season nitrogen pushes soft new growth that olive fruit fly prefers, reduces cold-hardiness going into winter, and can actually reduce the coming year''s fruit set. Stop with the March feeding."
      }
    ],
    "toolsNeeded": [
      "Balanced granular fertilizer (10-10-10 or similar)",
      "Measuring cup",
      "Garden rake",
      "Hose or soaker line"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC ANR ''Olive Production Manual'' (Publication 3353) (modest nitrogen rate for home and small-orchard olives, skip feeding in light-crop years, spread past drip line). UC IPM ''Olive'' (Managing Pests in Gardens: Trees and Shrubs) confirms that over-fertilization pushes soft growth attractive to olive fruit fly."
  }'::jsonb,
  'UC ANR; UC IPM',
  'Olive',
  'feeding',
  true
),
(
  'olive-monitoring',
  '{
    "treeType": "Olive",
    "title": "Olive Fruit Fly Watch",
    "introduction": "Olive fruit fly (Bactrocera oleae) is the dominant backyard olive pest in California and the Southwest — a small fruit fly that lays eggs in developing fruit starting around midsummer. Larvae tunnel through the flesh and turn picked olives rotten or bitter. Damage is easy to miss until harvest. The home-orchard strategy has two parts: monitoring with sticky traps, and kaolin clay or sanitation to reduce egg-laying.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Start monitoring when fruit reaches pea size",
        "description": "In most of California, that''s late June to early July. Hang one yellow sticky trap in the canopy, mid-height, at least 3 feet inside the edge — these catch adult flies and signal when activity starts. Check weekly. The goal is catching first flight, not precise trap counts."
      },
      {
        "stepNumber": 2,
        "title": "Identify olive fruit fly vs. common fruit flies",
        "description": "Olive fruit fly is about 1/4 inch long, brown with darker wing tips, and has a white or pale spot on its back just behind the head. Common vinegar flies (Drosophila) are smaller and all tan. If trap catches are adult olive fruit fly, begin control the same week."
      },
      {
        "stepNumber": 3,
        "title": "Apply kaolin clay (Surround WP) as your primary tool",
        "description": "Mix kaolin clay in water per label rate. Spray to coat all leaves, branches, and fruit until it looks like the tree has been frosted white. The clay is a physical barrier — flies can''t see well enough to lay eggs through the coating. Reapply every 5–6 weeks through fruit development (typically 3 applications)."
      },
      {
        "stepNumber": 4,
        "title": "Use GF-120 bait as an alternative or supplement",
        "description": "GF-120 NF Naturalyte is a spinosad-based fruit fly bait approved for home use and organic production. It''s applied as spot treatments — small spots on trunk and lower branches weekly during fruit development. Effective if applied consistently. Read the label — spinosad is broadly toxic to bees, so avoid spraying flowers."
      },
      {
        "stepNumber": 5,
        "title": "Practice strict end-of-season sanitation",
        "description": "After harvest, pick up EVERY dropped olive under the tree and any you couldn''t reach in the canopy. Seal fallen fruit in a bag (not a compost pile) and send to the landfill. Overwintering pupae in soil and in unpicked fruit are the source of next year''s flies — sanitation is the single most effective long-term control.",
        "tip": "If you don''t plan to use the crop, consider fruitless cultivars or apply a flower-spray inhibitor in spring to prevent fruit — unpicked olives are a fly factory."
      },
      {
        "stepNumber": 6,
        "title": "Accept that trees outside CA may not need this",
        "description": "Olive fruit fly is primarily a California and Southwest problem. Florida home olives typically escape it; Texas and Arizona trees have moderate pressure. If traps show zero activity for 3 weeks during fruit development in your area, you can probably skip the kaolin applications."
      }
    ],
    "toolsNeeded": [
      "Yellow sticky traps (1 per tree)",
      "Kaolin clay spray (Surround WP) and sprayer",
      "OR GF-120 NF Naturalyte bait",
      "Disposal bag (not compost) for dropped fruit"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Olive Fruit Fly — Home and Landscape'' (monitoring with yellow sticky traps starting at pea-size fruit, kaolin clay barrier applied every 5–6 weeks, GF-120 spinosad bait as an alternative, strict end-of-season sanitation as the single most effective long-term control) and UC IPM ''Olive Fruit Fly — Olive Agriculture Pest Management Guidelines'' (fly identification, egg-laying biology). Geographic distribution (CA/SW primary, FL escape, TX/AZ moderate) cross-referenced with UF/IFAS and Texas AgriLife home-olive extension pages."
  }'::jsonb,
  'UC IPM; UF/IFAS EDIS',
  'Olive',
  'monitoring',
  true
),
(
  'olive-harvesting',
  '{
    "treeType": "Olive",
    "title": "Olive Harvest by End Use",
    "introduction": "Olive harvest timing depends entirely on what you''re making. Olives straight off the tree are inedibly bitter — they have to be cured or pressed. Green-for-oil, green-for-brine-curing, and black-for-curing all have different ideal picking points. The fruit''s color on the tree IS the harvest indicator — you pick when the color matches your intended use.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Decide what you''re making first",
        "description": "Home olive oil: pick at color-change (green fruit just starting to turn purple-black, some fully turned). Green-cured (Spanish-style, Sicilian-style): pick fully sized but still fully green. Black-cured (Kalamata-style, dry-salt-cured, oil-cured): pick fully mature — all black, slightly soft. If mixing uses, pick in waves."
      },
      {
        "stepNumber": 2,
        "title": "For oil: pick at first color break",
        "description": "In California, this is typically early-to-mid October. Watch the canopy — when you see a mix of still-green fruit and some that have turned purple-to-black, it''s time. Oil yield per pound drops slightly if you wait for full black, but flavor shifts from peppery and grassy to milder and sweeter — pick based on the profile you want."
      },
      {
        "stepNumber": 3,
        "title": "For green-cured olives: pick early (September)",
        "description": "For Spanish-style brine-cured or lye-cured olives, you want fully sized, firm, still-fully-green fruit. In California this is usually September. Size matters more than any color shift for green olives — if fruit still looks small for the variety, wait another week or two even if it''s still green."
      },
      {
        "stepNumber": 4,
        "title": "For black-cured olives: pick late (November)",
        "description": "For Greek-style or dry-salt-cured black olives, wait until fruit is fully black, has started to soften slightly, and easily detaches from the stem. In California this stretches to early-to-mid November. The fruit develops more complex flavor as it matures; overripe olives start to drop on their own."
      },
      {
        "stepNumber": 5,
        "title": "Strip gently onto a tarp",
        "description": "Spread a tarp or old sheet under the tree. Use your hand to run down each branch from base to tip, stripping olives into the tarp. On small trees, hand-picking is faster; on larger trees, a ''rake and tarp'' method (gentle rake through the canopy over a tarp) picks quickly without damaging the next year''s fruiting wood.",
        "tip": "Process olives within 24 hours. Once picked, olives begin to oxidize and ferment. Uncured fruit left more than a day or two becomes unusable."
      },
      {
        "stepNumber": 6,
        "title": "Start curing immediately",
        "description": "Home cures all take time (brine cure is 2–6 months, dry salt is 3–6 weeks, lye cure is the fastest at ~2 weeks). Have your cure materials ready BEFORE harvest day — salt, jars, water, lye (for lye cure), whatever your recipe calls for. A picked olive sitting in a bucket while you buy supplies is a picked olive going bad."
      }
    ],
    "toolsNeeded": [
      "Tarp or old sheets for catching fruit",
      "Harvest bucket or basket",
      "Step stool or pole-harvest rake (for larger trees)",
      "Pre-prepared cure materials (salt, brine, lye — varies by method)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC ANR ''Olive Production Manual'' (Publication 3353) (color-break timing for oil harvest, green vs. black curing windows, strip-onto-tarp technique) and UC IPM ''Olive Fruit Fly'' (Home and Landscape) (drop-picking-through-November window). Home curing methods and the 24-hour processing rule cross-referenced with UC ANR small-farm publications on home olive curing."
  }'::jsonb,
  'UC ANR; UC IPM',
  'Olive',
  'harvesting',
  true
);
