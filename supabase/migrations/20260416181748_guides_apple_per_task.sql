-- Phase A: per-task guides for Apple.
--
-- Adds one guide row per distinct task_category declared by the Apple
-- templates in lib/care/task-templates.ts:
--   pruning     → Winter pruning (central-leader training)
--   protection  → Dormant oil spray
--   feeding     → Spring fertilizing
--   monitoring  → Thinning fruitlets
--   harvesting  → Harvest readiness check
--
-- Matches the shape established by the Peach pilot
-- (20260415010312_guides_peach_per_task.sql).
--
-- Product recommendations are intentionally empty — affiliate-link
-- sourcing is a separate pass. Ships with approved = true after
-- developer review of this SQL diff.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'apple-pruning',
  '{
    "treeType": "Apple",
    "title": "Apple Tree Winter Pruning",
    "introduction": "Apples fruit on spurs that live for several years on older wood, so pruning is less about renewing fruiting wood (as with peach) and more about keeping a strong, open framework that lets light into every branch. Prune in late winter after the coldest weather has passed but before buds swell — that timing limits cold injury and shortens the window when fresh cuts are exposed.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait for the right window",
        "description": "Prune in February or early March — after the worst of winter and before bud swell. Pruning too early in winter invites cold damage; pruning after green tip stresses the tree.",
        "tip": "If a late hard freeze is forecast, it is fine to delay by a week or two."
      },
      {
        "stepNumber": 2,
        "title": "Start with the three Ds",
        "description": "Cut out any Dead, Damaged, or Diseased wood first. Make clean cuts back to healthy tissue or the branch collar. Sterilize pruners with 70% alcohol between diseased cuts — especially important if fire blight is present in your area."
      },
      {
        "stepNumber": 3,
        "title": "Keep a central leader",
        "description": "Most apples are trained to a central-leader shape: one dominant vertical trunk with 4–5 main scaffold branches spiraling out, spaced 8–12 inches apart vertically. Pick the strongest upright shoot as the leader and remove competing uprights."
      },
      {
        "stepNumber": 4,
        "title": "Remove crossing branches and water sprouts",
        "description": "Take out branches that cross or rub each other, and any vigorous vertical shoots (water sprouts) growing straight up from scaffolds. These shade the interior, rarely fruit, and clutter the canopy."
      },
      {
        "stepNumber": 5,
        "title": "Thin out, do not just shorten",
        "description": "Favor thinning cuts (removing a whole branch back to its origin) over heading cuts (shortening a branch partway). Thinning opens the canopy to light; heading creates bushy regrowth. Apples need light reaching the spurs to set good fruit."
      },
      {
        "stepNumber": 6,
        "title": "Protect fruiting spurs",
        "description": "Short, stubby growths along older branches are spurs — these are where apples form. Avoid cutting them unless they are overcrowded or unproductive. On older trees, rotate out the oldest, weakest spurs every few years to keep fruit size up."
      },
      {
        "stepNumber": 7,
        "title": "Clean up prunings",
        "description": "Rake and bag or burn all pruned wood. Apple scab and fire blight overwinter in debris. Do not compost pruned wood from a diseased tree."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners",
      "Loppers for branches up to ~1.5 inch",
      "Pruning saw for scaffold cuts",
      "70% isopropyl alcohol for sterilizing between diseased cuts"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from University of Minnesota Extension ''Pruning and training apple trees'' (late-winter timing, central-leader training, scaffold spacing, thinning vs. heading cuts) and Oregon State Extension PNW 400 ''Training and Pruning Your Home Orchard'' (three Ds, water sprouts, spur preservation)."
  }'::jsonb,
  'UMN Extension; Oregon State PNW 400',
  'Apple',
  'pruning',
  true
),
(
  'apple-protection',
  '{
    "treeType": "Apple",
    "title": "Dormant Oil Spray",
    "introduction": "A single well-timed horticultural oil spray while the tree is still dormant smothers the overwintering stages of scale, mites, and aphids before they hatch in spring. For most homeowners this is the single highest-return pest-control task of the year — it costs one afternoon and one bottle of oil and prevents weeks of hand-wrangling later.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Time it to the delayed-dormant window",
        "description": "The best window is late winter, just as buds start to swell but before green tissue (green tip) emerges — typically mid to late February in most US apple regions. Earlier sprays work too, but delayed-dormant timing catches the highest proportion of hatching pests."
      },
      {
        "stepNumber": 2,
        "title": "Check the forecast",
        "description": "Pick a day when temperatures will stay above 40 °F for at least 24 hours and no rain is forecast. Oil applied below 40 °F or before a freeze can injure bark. Rain in the first day washes the oil off before it works."
      },
      {
        "stepNumber": 3,
        "title": "Mix horticultural oil per the label",
        "description": "Use a horticultural or dormant oil product labeled for fruit trees. Follow label rates — typically 2–4 tablespoons per gallon. Fill the sprayer with water first, then add oil, and agitate the tank regularly while spraying.",
        "tip": "Do not tank-mix oil with sulfur or within 30 days of a sulfur spray — the combination is phytotoxic to apple."
      },
      {
        "stepNumber": 4,
        "title": "Spray to the point of runoff",
        "description": "Coat every twig, branch, and bud surface until droplets just start to run. Work from the top down and cover the inside and outside of each branch. Missed spots are where pests survive — thoroughness matters more than volume."
      },
      {
        "stepNumber": 5,
        "title": "Clean the sprayer",
        "description": "Rinse the tank, wand, and nozzle with warm soapy water when done, then flush clean water through until it runs clear. Oil residue gums up sprayer parts if left overnight."
      }
    ],
    "toolsNeeded": [
      "Pump or backpack sprayer",
      "Horticultural (dormant) oil labeled for apple",
      "Measuring spoons or cup",
      "Gloves and safety glasses"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Applying Dormant or Delayed-Dormant Treatments'' (delayed-dormant timing, 40 °F minimum, oil-sulfur incompatibility) and Oregon State Extension ''Winter sprays help fruit trees stay healthy'' (target pests: scale, mites, aphids; coverage to runoff)."
  }'::jsonb,
  'UC IPM; Oregon State Extension',
  'Apple',
  'protection',
  true
),
(
  'apple-feeding',
  '{
    "treeType": "Apple",
    "title": "Spring Fertilizing",
    "introduction": "Apples are moderate feeders — they need consistent nitrogen for new growth and fruit set, but over-fertilizing pushes soft, leafy growth that is magnetically attractive to aphids and fire blight. The safest homeowner approach is a single spring application of compost or a balanced fertilizer before bloom, sized to the tree''s age and vigor.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Time it before bloom",
        "description": "Apply in mid to late March — once the soil has thawed and the tree is breaking dormancy, but before flowers open. Pre-bloom feeding supports flowering and early fruit development; post-bloom nitrogen can encourage excessive leaf growth that competes with fruit."
      },
      {
        "stepNumber": 2,
        "title": "Judge the tree before you feed",
        "description": "Look at last year''s shoot growth — the smooth, light-colored wood at the branch tips. Healthy mature apples should have made 12–18 inches of new growth; young trees 18–24 inches. If growth was already strong, feed lightly or skip the year. If growth was less than 6 inches, feed at the high end of the rate."
      },
      {
        "stepNumber": 3,
        "title": "Pick compost or a balanced fertilizer",
        "description": "For most backyard trees, 2–3 inches of finished compost spread under the canopy is enough. If using a granular fertilizer, pick a balanced formulation (e.g., 10-10-10) and apply roughly 1 pound per inch of trunk diameter — measured at knee height."
      },
      {
        "stepNumber": 4,
        "title": "Spread under the drip line, not the trunk",
        "description": "Apple feeder roots extend to the outer edge of the canopy (the drip line) and slightly beyond. Spread compost or granules in a ring from about 1 foot out from the trunk to just beyond the drip line. Keep fertilizer off the trunk itself — direct contact can burn bark."
      },
      {
        "stepNumber": 5,
        "title": "Water it in",
        "description": "Water deeply after applying — at least 1 inch of water over the fed area — so nutrients move into the root zone. Without water, granular fertilizer sits on the surface and can burn or run off."
      }
    ],
    "toolsNeeded": [
      "Shovel or garden fork",
      "Compost or balanced (e.g., 10-10-10) granular fertilizer",
      "Measuring container",
      "Garden hose or watering can"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Washington State University Extension ''Home Orchard Fertility'' (pre-bloom timing, shoot-growth-based rate decision, 1 pound per inch of trunk diameter rule) and University of Minnesota Extension ''Growing apples in the home garden'' (compost option, drip-line placement, watering in)."
  }'::jsonb,
  'WSU Extension; UMN Extension',
  'Apple',
  'feeding',
  true
),
(
  'apple-monitoring',
  '{
    "treeType": "Apple",
    "title": "Thinning Fruitlets",
    "introduction": "Apples typically set 4–6 fruitlets per cluster, which is far more than the tree can size up. If you leave every fruitlet, you get small, lopsided apples and — worse — the tree goes into biennial bearing, where a heavy crop one year is followed by almost nothing the next. Thinning to one apple per cluster, 6–8 inches apart, fixes both problems.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait for June drop",
        "description": "About 4–6 weeks after bloom the tree naturally sheds some fruitlets on its own (June drop). Wait until that finishes before hand-thinning. By then fruitlets are dime- to nickel-sized — big enough to grade but small enough to pinch off easily."
      },
      {
        "stepNumber": 2,
        "title": "Identify the king fruit",
        "description": "Each cluster has a central, largest fruitlet — the king fruit — surrounded by smaller ones. The king usually has the best shape and sets the earliest, so it is almost always the one to keep. Its stem is thicker and it sits slightly higher in the cluster."
      },
      {
        "stepNumber": 3,
        "title": "Thin to one fruit per cluster",
        "description": "Pick off every fruitlet in each cluster except the king. Pinch with your thumbnail or snip with small scissors. Do not yank — twisting the spur off damages next year''s fruiting wood."
      },
      {
        "stepNumber": 4,
        "title": "Space clusters 6–8 inches apart",
        "description": "Now step back and look along each branch. Where two retained fruits are within 6 inches of each other, remove the smaller or weaker-looking one. The target: roughly one apple every 6–8 inches along horizontal fruiting wood."
      },
      {
        "stepNumber": 5,
        "title": "Remove damaged or misshapen fruit first",
        "description": "When choosing between two close fruits, always keep the one that is better shaped, cleaner, and free of blemishes. Insect-damaged or scabbed fruitlets are a drain — pull them first."
      },
      {
        "stepNumber": 6,
        "title": "Clean up the ground",
        "description": "Rake and dispose of thinned fruitlets. Left on the ground they attract pests (codling moth, plum curculio) and can harbor apple scab spores."
      }
    ],
    "toolsNeeded": [
      "Your hands (primary tool)",
      "Small scissors or snips for tight clusters",
      "A bucket or tarp for dropped fruitlets"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from University of Minnesota Extension ''Growing apples in the home garden'' (one fruit per cluster, 6–8 inch spacing, wait for June drop) and Penn State Extension ''Apple Crop Load Management'' (king-fruit identification, biennial-bearing risk when unthinned, timing at 10–20 mm fruitlet size)."
  }'::jsonb,
  'UMN Extension; Penn State Extension',
  'Apple',
  'monitoring',
  true
),
(
  'apple-harvesting',
  '{
    "treeType": "Apple",
    "title": "Harvest Readiness Check",
    "introduction": "Unlike peaches, apples can improve slightly after picking — but only if picked at the right stage. Picked too early, they are starchy, acidic, and never develop full flavor; picked too late, they go soft on the tree and store poorly. Three simple tests (stem-twist, seed color, ground color) together give a reliable ripeness signal without lab equipment.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Know your variety''s expected window",
        "description": "Apples vary enormously in ripening date — early varieties (e.g., Zestar) are ready in August; late keepers (e.g., Honeycrisp, Fuji) not until late September or October. Know your variety''s window before you start checking. Within the window, the tests below tell you which week."
      },
      {
        "stepNumber": 2,
        "title": "Try the stem-twist test",
        "description": "Cup an apple in your hand, lift it upward, and give a gentle twist. A ripe apple separates from the spur cleanly with almost no force. If you have to pull or the spur comes with it, it is not ready — leave it for another week."
      },
      {
        "stepNumber": 3,
        "title": "Check the seed color",
        "description": "Cut one apple from the south side of the tree and look at the seeds. Fully ripe apples have dark brown seeds. Pale tan or white seeds mean more time is needed. This is the most reliable single check for storage apples."
      },
      {
        "stepNumber": 4,
        "title": "Read the ground color",
        "description": "Behind the red blush, apples have a background (ground) color that starts green and shifts toward yellow or cream as sugars build. For most varieties, a clear yellow-green ground color — not deep green — means picking time. Blush alone is not a ripeness signal; some varieties red up weeks before the fruit matures."
      },
      {
        "stepNumber": 5,
        "title": "Pick in 2–3 passes",
        "description": "A single tree does not ripen all at once. The sunny, south and upper side of the tree ripens first — pick those now and come back 5–7 days later for the rest. Two to three passes per tree is normal, especially for Honeycrisp and Fuji."
      },
      {
        "stepNumber": 6,
        "title": "Handle and store gently",
        "description": "Bruises shorten storage life dramatically. Set each apple into a padded basket — do not drop or pile them. For storage, keep apples cold (32–35 °F) and humid; a crisper drawer works, or a cool basement in a ventilated crate. Store only unblemished fruit; one rotten apple really does spoil the crate."
      }
    ],
    "toolsNeeded": [
      "Padded harvest basket or bag",
      "Small knife (for seed-color check)",
      "Step ladder for taller branches",
      "Ventilated storage crates for keepers"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from University of Minnesota Extension ''Harvesting Apples'' (stem-twist test, ground-color shift, seed-color check, multiple picking passes) and UGA Extension ''Home Garden Apples'' (variety-specific windows, bruise sensitivity, cold storage conditions)."
  }'::jsonb,
  'UMN Extension; UGA Extension',
  'Apple',
  'harvesting',
  true
);
