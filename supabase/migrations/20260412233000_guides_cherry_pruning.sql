-- Pilot guide for the batch-generation flow — Cherry × pruning.
-- See docs/plans-2026-04-12-guides/phase-2.md for the template
-- conventions this follows.
--
-- Grounded in:
--   - UC IPM, "Pruning Cherry Trees" (ipm.ucanr.edu/PMG/GARDEN/FRUIT/CULTURAL/cherpruning.html)
--     — timing, over-pruning caution, disease prevention notes
--   - UMN Extension, "Growing stone fruits in the home garden"
--     (extension.umn.edu/fruit/growing-stone-fruits-home-garden)
--     — scaffold-branch training, open-center shape for tart cherry,
--       cherry-specific disease risks (black knot, leaf spot, cherry fruit fly)
--
-- Scope note: content targets tart/sour cherry, which is the more
-- common backyard planting and what UMN's guidance covers directly.
-- Sweet cherry uses a different training system; a separate guide
-- can be added if/when sweet-cherry-specific sources are curated.
--
-- Ships with approved = true after developer review of this SQL diff.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values (
  'cherry-pruning',
  '{
    "treeType": "Cherry",
    "title": "Cherry Pruning Guide",
    "introduction": "Cherries need less annual pruning than apples or peaches, but the cuts you do make matter. The goals are an open, airy canopy (better airflow means less disease), a manageable height for harvest, and removal of dead or diseased wood before it spreads. Most pruning happens in late winter while the tree is dormant, with a narrow exception for summer work on sweet cherry.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Pick the right window",
        "description": "Prune in late winter, after the worst cold has passed but before buds swell (roughly March–April in cold zones). Avoid pruning from January through early March when freeze damage risk is highest, and avoid mid-summer cuts on tart cherry.",
        "tip": "Sweet cherry is the one exception: late-summer pruning reduces bacterial canker infection risk compared to wet spring cuts."
      },
      {
        "stepNumber": 2,
        "title": "Remove dead, diseased, and damaged wood first",
        "description": "Walk the tree and cut out anything dead, broken, or showing disease. Watch especially for black knot — rough, black swellings on branches — and cut 4–6 inches below any sign of it. Sterilize pruners between diseased cuts.",
        "tip": "Use 10% bleach or 70% isopropyl alcohol to sterilize blades. Bag or burn diseased wood — do not compost it."
      },
      {
        "stepNumber": 3,
        "title": "Thin crossing and competing branches",
        "description": "Remove branches that rub against each other, grow straight down, or crowd the canopy interior. Use thinning cuts (take the whole branch back to its origin) rather than heading cuts (shortening a branch mid-length), which produce weak regrowth."
      },
      {
        "stepNumber": 4,
        "title": "Open the center",
        "description": "Tart cherry trains best to an open-center (vase) shape with 4–6 main scaffold branches rising from the trunk at different heights. Remove vigorous upright shoots growing into the middle of the canopy so sunlight reaches the interior."
      },
      {
        "stepNumber": 5,
        "title": "Clear suckers and water sprouts",
        "description": "Cut root suckers (shoots from below the graft line) flush at the soil and remove any water sprouts — straight, fast-growing vertical shoots on main branches. Both steal energy from fruit production."
      },
      {
        "stepNumber": 6,
        "title": "Cut cleanly at the branch collar",
        "description": "Make every cut just outside the branch collar — the slightly swollen ring where a branch meets the trunk. Do not leave stubs; stubs will not heal and invite wood rot. Do not cut flush with the trunk either, which damages the collar and slows healing.",
        "tip": "If a bird can fly through the canopy after you are done, airflow is about right. Do not over-prune — cherries respond poorly to heavy cuts and can get sunburn on exposed bark."
      },
      {
        "stepNumber": 7,
        "title": "Clean up and dispose carefully",
        "description": "Rake up all pruned wood and fallen fruit from the season prior. Black knot, leaf spot, and cherry fruit fly all overwinter in debris around the base. Bag or burn infected material — do not leave it in the orchard or add it to compost."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners (branches up to 3/4\")",
      "Loppers (branches 3/4\" to 1.5\")",
      "Pruning saw (branches over 1.5\")",
      "Sterilizing solution (10% bleach or 70% isopropyl alcohol)",
      "Bag or bin for diseased wood disposal"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM''s \"Pruning Cherry Trees\" page (timing, over-pruning caution, disease prevention framing) and University of Minnesota Extension''s \"Growing stone fruits in the home garden\" (open-center scaffold training for tart cherry, cherry-specific disease risks including black knot, cherry leaf spot, and cherry fruit fly). Scope targets tart/sour cherry — the backyard-common species UMN''s guidance covers directly. Sweet cherry training differs and is out of scope here."
  }'::jsonb,
  'UC IPM — Pruning Cherry Trees; University of Minnesota Extension — Growing Stone Fruits in the Home Garden',
  'Cherry',
  'pruning',
  true
);
