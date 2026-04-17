-- Phase D: per-task guides for Persimmon (Diospyros kaki — Asian;
-- also covers D. virginiana — American).
--
-- Templates in lib/care/task-templates/persimmon.ts — 3 categories
-- (monitoring and protection intentionally skipped; persimmons are
-- famously easygoing — few pests and few cold concerns for a healthy
-- mature tree in its preferred zones, covered by the overview guide):
--   pruning     → Light structural pruning
--   feeding     → Very modest spring feeding
--   harvesting  → Astringent vs. non-astringent rule — the headline
--                 content for this tree
--
-- Sources: UGA Extension (Home Garden Persimmons), UC ANR Master
-- Gardeners Contra Costa County (Sweet or Astringent), Clemson HGIC
-- (How to Grow Persimmons in South Carolina), UF/IFAS EDIS HS1483
-- (Alleviating Astringency in Persimmon Fruit).

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'persimmon-pruning',
  '{
    "treeType": "Persimmon",
    "title": "Persimmon Light Pruning",
    "introduction": "Persimmons are one of the easiest fruit trees to prune — because they need the least of it. Asian persimmons (Fuyu, Hachiya, Jiro, Giombo) fruit on new wood from the previous year; over-pruning cuts off next year''s crop. The job is structural shaping when young, then maintenance-only as the tree matures.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Prune in late winter, while dormant",
        "description": "January through mid-February is the window across most of the persimmon-growing US. The tree is leafless and sap hasn''t begun flowing. Wait until the worst cold snap has passed but before bud swell."
      },
      {
        "stepNumber": 2,
        "title": "On young trees (years 1–4), pick scaffolds",
        "description": "Select 3–5 main scaffold branches on the central leader, spaced 8–12 inches apart vertically, pointing in different directions with wide crotch angles. Cut back competing leaders. Short branches that grew below the lowest scaffold can stay one more year as ''nurse'' branches, then come off."
      },
      {
        "stepNumber": 3,
        "title": "On mature trees, cut minimally",
        "description": "Past year 5, most persimmons need almost no annual pruning. Take out clearly dead wood, branches crossing and rubbing, and any weak or low branch you don''t want to walk around. That''s it — don''t re-shape mature persimmons every year."
      },
      {
        "stepNumber": 4,
        "title": "Watch for heavy limb splitting",
        "description": "Persimmon wood is brittle and overloaded branches break. If one scaffold is much longer than the others and carries a heavy crop last year, shorten it back to a side branch this winter. This is preventive — if you wait until a limb splits, the damage is done."
      },
      {
        "stepNumber": 5,
        "title": "Don''t paint cuts",
        "description": "Old advice about sealing pruning cuts has been replaced — wound dressings slow healing more than they help. Make a clean, angled cut just above a side branch or bud and let the tree close the wound naturally.",
        "tip": "Asian and American persimmons sucker from the rootstock — cut any suckers at ground level whenever you see them, not just in winter."
      },
      {
        "stepNumber": 6,
        "title": "Sterilize blades between trees",
        "description": "Wipe pruners with 70% alcohol between different trees (not usually needed between branches of the same tree). Persimmons have few disease issues but it''s still best practice to avoid spreading any problems."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners (1–1.5 inch cuts)",
      "Loppers (up to 2 inch cuts)",
      "Pruning saw (larger cuts)",
      "70% alcohol for sterilizing blades"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UGA Extension ''Home Garden Persimmons'' (3–5 scaffold selection on young trees, minimal maintenance on mature trees, persimmon fruits on new wood from previous year) and Clemson HGIC ''How to Grow Persimmons in South Carolina'' (brittle wood splitting under heavy crops, sucker removal at ground level)."
  }'::jsonb,
  'UGA Extension; Clemson HGIC',
  'Persimmon',
  'pruning',
  true
),
(
  'persimmon-feeding',
  '{
    "treeType": "Persimmon",
    "title": "Persimmon Spring Feeding",
    "introduction": "Persimmons are among the lightest feeders of any fruit tree. Excess nitrogen causes premature fruit drop — a persimmon that sheds its young fruit in June is almost always an over-fed one. In decent soil, a mature persimmon can go a full year or two with no fertilizer at all.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Check last year''s growth before deciding",
        "description": "Measure the length of typical new shoots from last season. Under 6 inches: feed lightly this year. 6–18 inches: this is the target range — feed at the low end of the rate below, or skip. Over 18 inches: skip fertilizer entirely, the tree has plenty."
      },
      {
        "stepNumber": 2,
        "title": "Apply in March, before bud break",
        "description": "Time the feeding for late February through mid-March across most US zones. Earlier in the season is better than later — late feedings push tender growth that interferes with fruit set and attracts spring pests."
      },
      {
        "stepNumber": 3,
        "title": "Use 1 lb of 10-10-10 per inch of trunk diameter",
        "description": "Measure trunk diameter a foot above the ground. Apply that many pounds of a balanced fertilizer — a 2-inch trunk gets 2 lbs. Cap at 4 lbs total on a mature tree. Use less if in doubt; the error mode of persimmons is over-feeding, not under-feeding."
      },
      {
        "stepNumber": 4,
        "title": "Spread in a ring from 1 ft out to the drip line",
        "description": "Rake mulch back, spread the fertilizer evenly in a ring around the tree, and replace the mulch. Keep granules at least a foot from the trunk — direct contact burns bark."
      },
      {
        "stepNumber": 5,
        "title": "Water it in deeply",
        "description": "Apply at least 1 inch of water over the fed area. This dissolves the fertilizer into the root zone and prevents root burn. Drip or soaker is ideal — overhead watering wets leaves unnecessarily.",
        "tip": "If June fruit drop is heavy, back off next year''s feeding rate by half — or skip it entirely. Persimmons telegraph over-feeding by dropping their young fruit."
      },
      {
        "stepNumber": 6,
        "title": "Don''t feed again during the season",
        "description": "One spring feeding is the whole year''s supplemental fertilizer for a healthy persimmon. Summer or fall feeding is almost always harmful — it pushes growth that doesn''t harden off, invites pests, and worsens fruit drop."
      }
    ],
    "toolsNeeded": [
      "Balanced granular fertilizer (10-10-10 or similar)",
      "Measuring cup",
      "Garden rake",
      "Hose or soaker line"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UGA Extension ''Home Garden Persimmons'' (1 lb 10-10-10 per inch of trunk diameter as baseline, skip feeding if last year''s growth was vigorous, excess nitrogen drives June fruit drop) and Clemson HGIC ''How to Grow Persimmons in South Carolina'' (persimmons thrive on light feeding; avoid summer and fall applications)."
  }'::jsonb,
  'UGA Extension; Clemson HGIC',
  'Persimmon',
  'feeding',
  true
),
(
  'persimmon-harvesting',
  '{
    "treeType": "Persimmon",
    "title": "Persimmon Harvest (Variety Matters)",
    "introduction": "Persimmon harvest is the one place where variety knowledge is not optional — get it wrong and the fruit is either perfect or inedibly mouth-puckering. Astringent varieties (Hachiya, American persimmons, Saijo) must be fully soft and jelly-like before eating; non-astringent varieties (Fuyu, Jiro, Giant Fuyu) can be eaten firm like an apple. Know which you have before you pick.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Identify your variety",
        "description": "If you don''t know, the shape is a strong hint: Hachiya and Saijo are acorn-shaped, pointed at the blossom end. Fuyu and Jiro are tomato-shaped, squat and flat. American persimmons (Diospyros virginiana) are small (1–2 inches across), round, and always astringent. Ask a nursery if you''re not sure — picking a Hachiya as if it were a Fuyu is a memorable mistake."
      },
      {
        "stepNumber": 2,
        "title": "Astringent: wait until fully soft",
        "description": "For Hachiya, Saijo, and American persimmons, leave the fruit on the tree until it''s fully colored (deep orange to red-orange) and the flesh feels soft — almost squishy — through the skin. At this point the tannins have converted and the flesh is sweet, silky, and jelly-like. Firm astringent fruit is inedibly mouth-puckering — the tannins dry out your mouth on contact."
      },
      {
        "stepNumber": 3,
        "title": "Non-astringent: pick when fully colored but still firm",
        "description": "For Fuyu, Jiro, and Giant Fuyu, pick when the fruit is fully orange but still firm enough to hold its shape. These can be eaten crisp like an apple. Leaving them on the tree past ripe just means they''ll soften (still edible; just a different texture)."
      },
      {
        "stepNumber": 4,
        "title": "Clip with pruners — don''t pull",
        "description": "Use bypass pruners or sharp scissors to cut the fruit off close to the fruit, leaving the green calyx (the cap on top) attached. Pulling a fruit off tears the calyx off and often tears bark on the spur — the calyx-less fruit also doesn''t store well."
      },
      {
        "stepNumber": 5,
        "title": "Ripen firm astringent fruit off-tree if you must pick early",
        "description": "If frost is forecast and astringent fruit isn''t soft yet, pick firm fruit with the calyx attached and ripen indoors at room temperature for 1–2 weeks, or in a paper bag with a ripe banana (ethylene speeds it). Do NOT wait for frost to ''sweeten'' astringent persimmons — frost damages fruit and doesn''t help the tannin conversion.",
        "tip": "Frozen-then-thawed Hachiya puree is a classic home use — freeze fully ripe fruit whole and thaw for baking."
      },
      {
        "stepNumber": 6,
        "title": "Handle carefully — they bruise",
        "description": "Ripe persimmons bruise easily. Use a padded harvest basket. Store non-astringent Fuyu/Jiro at 50–60°F for 2–3 weeks; ripe astringent fruit goes into the fridge and gets used within a few days."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners or sharp scissors",
      "Padded harvest basket",
      "Step stool for taller trees",
      "Paper bag + banana (optional, for off-tree ripening)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC ANR Master Gardener Program Contra Costa County ''Sweet or Astringent? Solving the Puzzle of Your Persimmon Tree'' (shape-based variety identification, soft-vs-firm harvest rule, ethylene-assisted off-tree ripening), UGA Extension ''Home Garden Persimmons'' (calyx-attached cutting technique, keep on tree until color is complete), and UF/IFAS EDIS HS1483 ''Alleviating Astringency in Persimmon Fruit'' (tannin conversion chemistry behind the astringent-vs-non-astringent split). The ''frost required'' misconception is explicitly refuted by all three sources."
  }'::jsonb,
  'UC ANR Master Gardeners; UGA Extension; UF/IFAS EDIS',
  'Persimmon',
  'harvesting',
  true
);
