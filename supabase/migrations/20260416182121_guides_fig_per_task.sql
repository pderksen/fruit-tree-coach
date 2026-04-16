-- Phase A: per-task guides for Fig.
--
-- Adds one guide row per distinct task_category declared by the Fig
-- templates in lib/care/task-templates.ts:
--   monitoring  → Drainage + fig beetle (both fig-drainage-check and
--                 fig-beetle-monitoring templates share category
--                 `monitoring`; the unique (tree_type, task_category)
--                 index collapses them onto one guide)
--   harvesting  → Fig ripeness and picking
--
-- The fig-drainage-check template fires March 15–28; the
-- fig-beetle-monitoring template fires June 15–28. The guide below
-- covers both — structured so opening it from either task surfaces
-- the relevant steps. Drainage (seasonal site check) comes first;
-- beetle monitoring (ripening-season vigilance) follows.
--
-- Matches the shape established by the Peach pilot
-- (20260415010312_guides_peach_per_task.sql). Ships with approved = true
-- after developer review of this SQL diff.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'fig-monitoring',
  '{
    "treeType": "Fig",
    "title": "Fig Drainage and Beetle Monitoring",
    "introduction": "Figs are famously tough — drought-tolerant, pest-resistant, and forgiving — but they fail fast in two situations: wet feet from poor drainage, and ripening fruit left unprotected from beetles. Both problems are cheap to prevent and expensive to fix after the fact. This guide covers the two monitoring checks that matter most: a spring drainage pass, and a summer beetle watch as fruit ripens.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Spring: test drainage around the root zone",
        "description": "In early spring, dig a 12-inch test hole a few feet from the trunk and fill it with water. Let it drain fully, then fill again. If the second fill does not drain within 24 hours, drainage is poor — a serious problem for figs, which rot quickly in waterlogged soil."
      },
      {
        "stepNumber": 2,
        "title": "Amend heavy clay",
        "description": "If the test hole holds water, work 2–3 inches of compost or pine-bark fines into the soil surface under the canopy. For severe clay, consider building up a low mound (6–8 inches) around the tree to raise the root crown above standing water. Do not trap water with a watering basin right at the trunk."
      },
      {
        "stepNumber": 3,
        "title": "Mulch — but keep it off the trunk",
        "description": "Spread 2–3 inches of coarse mulch (wood chips, straw, or shredded bark) in a ring from about 6 inches out from the trunk to the drip line. Mulch keeps moisture steady without trapping it against the bark. A mulch volcano piled on the trunk traps water and invites rot."
      },
      {
        "stepNumber": 4,
        "title": "Summer: watch for fig beetles as fruit ripens",
        "description": "Green fig beetles (large, iridescent green, about an inch long) and dried-fruit beetles (small, brown, a quarter inch) both feed on ripening figs. You will notice them on fruit that is already coloring up. Both are attracted first to damaged or overripe fruit — a single split fig can bring a whole cloud."
      },
      {
        "stepNumber": 5,
        "title": "Remove fallen and overripe fruit daily",
        "description": "During the ripening window, walk the tree every day or two and pick up any fruit on the ground plus anything that has split open on the tree. This single habit cuts beetle pressure by more than any spray would — beetles congregate on fermenting fruit, and removing the attractant breaks the cycle."
      },
      {
        "stepNumber": 6,
        "title": "Bag or net clusters if beetles are heavy",
        "description": "For high-value fruit or heavy beetle years, slip a fine mesh organza bag or cheesecloth over individual ripening clusters, tied loosely at the stem. Full-tree netting works for small trees. Insecticides are generally not worth it on figs — coverage is poor and beetles keep arriving from surrounding trees.",
        "tip": "Varieties with a small closed eye (like Mission or Celeste) resist beetles much better than open-eye varieties. If beetles are an annual problem, consider that the next time you plant."
      },
      {
        "stepNumber": 7,
        "title": "Check for other common issues while you are there",
        "description": "While monitoring, glance at leaves for yellow patterns (fig mosaic virus — no cure, but tolerable) and at branches for sunken dark spots (fig canker — prune out affected wood in dry weather). Both are less urgent than drainage and beetles, but catching them early is worth the look."
      }
    ],
    "toolsNeeded": [
      "Shovel (for drainage test)",
      "Compost or pine-bark fines (for amending clay)",
      "Coarse mulch",
      "Mesh organza bags or fine netting (if beetles are a problem)",
      "A bucket for daily fruit cleanup"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Texas A&M AgriLife Extension ''Texas Fruit and Nut Production: Figs'' (drainage as the primary site concern, mulch placement, closed-eye variety resistance) and UC IPM ''Driedfruit Beetles'' and ''Green Fig Beetle'' (overripe/split fruit as the attractant, daily sanitation as primary control, bagging and netting for home orchards, insecticides not effective)."
  }'::jsonb,
  'Texas A&M AgriLife Extension; UC IPM',
  'Fig',
  'monitoring',
  true
),
(
  'fig-harvesting',
  '{
    "treeType": "Fig",
    "title": "Fig Ripeness and Picking",
    "introduction": "Unlike apples or pears, figs absolutely must ripen on the tree — once picked, the sugars stop developing and the fruit will not sweeten further. A fig picked a day too early is forever bland. The cues are obvious once you have seen them: the fruit droops, softens, and often shows a bead of nectar at the eye. Expect to pick your tree every 2–3 days for several weeks.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Watch for the droop",
        "description": "Unripe figs point outward or upward from the branch, held stiff by a firm stem. As they ripen, the stem softens and the fruit hangs down — almost like a droplet. Droop is the single most reliable visual cue across varieties."
      },
      {
        "stepNumber": 2,
        "title": "Check the color for your variety",
        "description": "Color varies by cultivar: Brown Turkey ripens to a deep mahogany purple-brown, Celeste to bronze-purple, Kadota and LSU Gold stay yellow-green at full ripeness. Know your variety''s ripe color — green on a Brown Turkey means wait; green on a Kadota may mean ready."
      },
      {
        "stepNumber": 3,
        "title": "Feel for softness",
        "description": "A ripe fig yields noticeably when gently squeezed — like a ripe peach, not like a plum. Rock-hard means wait another day or two. Very soft or splitting means pick immediately, before beetles or rot find it."
      },
      {
        "stepNumber": 4,
        "title": "Look for a nectar bead at the eye",
        "description": "Many varieties show a small drop of clear or amber nectar at the eye (the small opening at the bottom of the fruit) when fully ripe. This is a very positive ripeness signal. Some slight skin cracking is also normal at peak ripeness."
      },
      {
        "stepNumber": 5,
        "title": "Pick gently with the stem",
        "description": "Hold the fruit lightly and bend the stem back until it snaps — a ripe fig separates with almost no pressure. If it resists, leave it one more day. Wear long sleeves if you are sensitive to fig-latex sap, which can irritate skin.",
        "tip": "Pick in the morning when fruit is cool. Midday figs in hot weather are fragile and bruise easily."
      },
      {
        "stepNumber": 6,
        "title": "Pick every 2–3 days during the harvest window",
        "description": "A fig tree does not ripen all at once — it produces waves of fruit over 3–6 weeks. Walk the tree every 2–3 days and pick everything that passes the droop + softness + color tests. Missing a pass means overripe fruit, which attracts beetles and invites trouble for the rest of the crop."
      },
      {
        "stepNumber": 7,
        "title": "Use or refrigerate quickly",
        "description": "Ripe figs last 1–2 days at room temperature, 3–5 days refrigerated. For longer storage, halve and freeze on a tray, then bag once frozen, or dry in a dehydrator. Do not wash until just before eating — wet figs mold within hours."
      }
    ],
    "toolsNeeded": [
      "Shallow basket or tray (figs crush in a deep container)",
      "Long sleeves (optional, fig-sap sensitivity)",
      "Step stool for taller trees"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Texas A&M AgriLife Extension ''Texas Fruit and Nut Production: Figs'' (figs ripen only on tree, droop and softness as ripeness cues, multiple picking passes per tree, variety-specific color) and Clemson HGIC ''Figs'' (nectar bead at eye, handling fragility, short post-harvest shelf life)."
  }'::jsonb,
  'Texas A&M AgriLife Extension; Clemson HGIC',
  'Fig',
  'harvesting',
  true
);
