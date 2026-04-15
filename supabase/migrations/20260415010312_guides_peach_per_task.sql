-- Pilot: per-task guides for Peach.
--
-- The app's guide screen (app/tree/guide/[taskId].tsx) opens from a
-- specific task (e.g. "Peach tree pruning"), so guide content should
-- cover ONLY that one task — not a full year of care. Until this
-- migration, Peach only had a tree-wide 'overview' guide, so every
-- task (pruning, feeding, thinning, harvest) surfaced the same
-- mixed-topic walkthrough.
--
-- This migration adds four per-task guides matching the peach
-- templates in lib/care/task-templates.ts:
--   protection  → Peach leaf curl prevention
--   pruning     → Peach tree pruning (open-vase)
--   monitoring  → Bloom and fruit thinning
--   harvesting  → Peach harvest window
--
-- Bud monitoring was intentionally skipped — low-value task for
-- homeowners; fruit thinning is the monitoring guide we want surfaced.
--
-- Product recommendations are intentionally empty for this pilot —
-- affiliate-link sourcing is a separate pass.
--
-- Ships with approved = true after developer review of this SQL diff.
-- IDs are prefixed 'peach-' to avoid colliding with the unapproved
-- dt1..dt15 legacy seed rows.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'peach-protection',
  '{
    "treeType": "Peach",
    "title": "Peach Leaf Curl Prevention",
    "introduction": "Peach leaf curl is the single most damaging disease for backyard peaches. The fungus overwinters on bark and infects buds just as they swell in late winter. One well-timed copper spray while the tree is still dormant prevents it for the whole year — miss the window, and there is nothing you can do until next winter.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Time the spray to the dormant window",
        "description": "Apply copper fungicide once between leaf-drop in fall and bud swell in late winter. The standard home-orchard timing is late January through February — before any pink shows in the buds. If buds have already broken, it is too late for this season.",
        "tip": "A second spray in late fall (after leaves drop) gives extra protection in wet-winter regions."
      },
      {
        "stepNumber": 2,
        "title": "Pick a dry day",
        "description": "Choose a day with no rain forecast for the next 24–48 hours and temperatures above 40 °F. Rain before the spray dries washes the copper off and wastes the application."
      },
      {
        "stepNumber": 3,
        "title": "Mix copper fungicide per the label",
        "description": "Use a fixed copper product (copper hydroxide, copper sulfate, or Bordeaux) labeled for peach leaf curl. Measure carefully — over-concentration damages bark, and under-concentration fails to protect. Fill the sprayer with water first, then add copper."
      },
      {
        "stepNumber": 4,
        "title": "Spray to the point of runoff",
        "description": "Coat every branch, twig, and bud surface until droplets just start to run. Work methodically from the top down. Do not skip the small twigs — that is where infection starts. A small tree takes about a gallon of mix; a mature tree 2–3 gallons."
      },
      {
        "stepNumber": 5,
        "title": "Clean your sprayer immediately",
        "description": "Copper is corrosive to sprayer parts. Triple-rinse the tank, wand, and nozzle with clean water when you are done, then pump clean water through the system until it runs clear."
      }
    ],
    "toolsNeeded": [
      "Pump or backpack sprayer",
      "Fixed copper fungicide labeled for peach leaf curl",
      "Measuring cup and mixing container",
      "Gloves and safety glasses"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM Pest Note 7426 ''Peach Leaf Curl'' (single dormant copper application, late-fall + late-winter schedule for wet regions, fixed copper products, no rescue spray once buds break) and Clemson HGIC ''Peach Diseases'' (spray-to-runoff coverage, timing relative to bud swell)."
  }'::jsonb,
  'UC IPM Pest Note 7426; Clemson HGIC',
  'Peach',
  'protection',
  true
),
(
  'peach-pruning',
  '{
    "treeType": "Peach",
    "title": "Peach Tree Pruning",
    "introduction": "Peaches fruit only on last year''s wood, so every branch that fruited this year will not fruit again. Annual pruning is what keeps a peach productive — without it, fruit moves to the outer edges and the center goes bare. Prune to an open-vase shape and remove 40–50% of last year''s growth. That sounds aggressive; for peach it is normal.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait for the right window",
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
        "description": "A peach should have 3–4 main scaffold branches angled 45–60° from vertical, with an open center that lets sunlight reach every branch. Remove any vigorous upright shoots (water sprouts) growing straight up through the center — they shade out fruiting wood and rarely fruit themselves."
      },
      {
        "stepNumber": 4,
        "title": "Renew the fruiting wood",
        "description": "Identify last year''s growth — smooth, reddish, pencil-thick shoots. These are where this year''s peaches will form. Keep the healthiest ones spaced roughly 6 inches apart along each scaffold; cut out the rest. On mature trees this removes 40–50% of what grew last year, which looks like a lot but is correct."
      },
      {
        "stepNumber": 5,
        "title": "Head back to control height",
        "description": "Shorten the tallest shoots to keep the tree at 8–9 feet — a height you can reach from the ground or a short ladder at harvest. Cut just above an outward-facing bud to direct next year''s growth outward, not up."
      },
      {
        "stepNumber": 6,
        "title": "Clean up prunings",
        "description": "Rake and bag or burn all pruned wood. Peach leaf curl, brown rot, and borer larvae overwinter in debris. Do not compost peach prunings — most home compost piles do not get hot enough to kill the spores."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners",
      "Loppers for branches up to ~1.5 inch",
      "Pruning saw for larger scaffold cuts",
      "70% isopropyl alcohol or 10% bleach for sterilizing between diseased cuts"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Clemson HGIC 1357 ''Pruning Peaches & Nectarines'' (open-vase training, 3–4 scaffolds, 40–50% annual growth removed), UGA Extension ''Home Garden Peaches'' (mid-February timing, height management), and UC IPM ''Pruning Peach and Nectarine Trees'' (fruits on one-year-old wood, thinning vs. heading cuts)."
  }'::jsonb,
  'Clemson HGIC 1357; UGA Extension; UC IPM',
  'Peach',
  'pruning',
  true
),
(
  'peach-monitoring',
  '{
    "treeType": "Peach",
    "title": "Bloom and Fruit Thinning",
    "introduction": "A healthy peach tree sets far more fruit than it can ripen. If you leave every fruitlet in place, you get small, bland peaches and broken branches. Thinning early — once fruit reaches marble size — is the single highest-return task in the peach year. Every week you wait reduces the size benefit.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait for natural fruit drop",
        "description": "Roughly 4–6 weeks after bloom, the tree sheds a wave of fruitlets on its own (June drop). Wait until this settles before hand-thinning — no point removing fruit the tree was going to drop anyway. Fruitlets should be marble-sized, about ½ to ¾ inch."
      },
      {
        "stepNumber": 2,
        "title": "Work one branch at a time",
        "description": "Pick a branch and count what is on it. Plan to leave one peach every 6–8 inches along the branch. That spacing is the target — closer than 6 inches and the fruit stays small; farther than 8 is fine on weaker branches."
      },
      {
        "stepNumber": 3,
        "title": "Remove doubles and the weakest fruit first",
        "description": "Where two peaches are touching, pick the smaller one off. Then remove any fruit that is misshapen, scarred, or noticeably smaller than its neighbors. This is the easy, obvious thinning — do it first."
      },
      {
        "stepNumber": 4,
        "title": "Thin to final spacing",
        "description": "Now space what is left to 6–8 inches apart. Pinch fruitlets off with your thumb and forefinger or snip with small scissors. Do not yank — you can tear the bark and damage next year''s fruiting wood.",
        "tip": "A mature branch loaded with un-thinned fruit will often snap. If a branch is sagging already, thin it first."
      },
      {
        "stepNumber": 5,
        "title": "Check yield by weight, not count",
        "description": "A good rule of thumb: leave one peach per 6–8 inches on horizontal wood, slightly fewer on weak or upright wood. If you are unsure, err toward more thinning — 30 large peaches taste better than 80 small ones."
      },
      {
        "stepNumber": 6,
        "title": "Pick up what you dropped",
        "description": "Thinned fruitlets on the ground attract pests and harbor brown rot. Rake them up and dispose — do not leave them under the tree."
      }
    ],
    "toolsNeeded": [
      "Your hands (primary tool)",
      "Small scissors or snips (optional, for fruit in tight clusters)",
      "A bucket or tarp for dropped fruitlets"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Clemson HGIC ''Peach Thinning'' (6–8 inch spacing, timing after June drop, marble-size target), Oregon State Extension ''Thinning Fruit Trees'' (hand-thinning technique, doubles removed first), and UGA Extension ''Home Garden Peaches'' (limb breakage risk on un-thinned trees)."
  }'::jsonb,
  'Clemson HGIC; Oregon State Extension; UGA Extension',
  'Peach',
  'monitoring',
  true
),
(
  'peach-harvesting',
  '{
    "treeType": "Peach",
    "title": "Peach Harvest Window",
    "introduction": "Peaches do not improve after picking — sugar stops climbing the moment the fruit leaves the tree. Pick too early and you get a mealy peach that never sweetens; pick too late and the tree drops them. The harvest window for any one peach is only a few days, and a single tree usually ripens over 1–2 weeks, so you will pick the same tree multiple times.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Watch the background color, not the blush",
        "description": "The red blush on a peach is genetic — it shows up early and does not mean the fruit is ripe. What you want is the background (ground) color shifting from green to creamy yellow or gold. That color change is the real ripeness signal."
      },
      {
        "stepNumber": 2,
        "title": "Check for a gentle give at the shoulder",
        "description": "Cup a peach and press lightly near the stem end. A ripe peach yields slightly under your thumb. Rock-hard means wait; squishy means too late. Start checking the south and upper side of the tree first — those peaches ripen earliest."
      },
      {
        "stepNumber": 3,
        "title": "Use the twist test",
        "description": "Cradle the fruit in your palm and give a gentle upward twist. A ripe peach releases cleanly with a slight tug. If you have to pull hard, it is not ready — put it back and leave the stem attached to the tree."
      },
      {
        "stepNumber": 4,
        "title": "Plan for 2–3 passes per tree",
        "description": "A single peach tree does not ripen all at once. Pick the ripest fruit every 2–3 days for a week or two. Leave anything that still has green ground color or feels hard — come back for it on the next pass."
      },
      {
        "stepNumber": 5,
        "title": "Handle like eggs",
        "description": "Ripe peaches bruise from a 2-inch drop. Set each fruit gently into a padded basket or shallow tray in a single layer. Do not pile them — the weight bruises the bottom layer within hours.",
        "tip": "If you plan to eat within a day or two, leave peaches at room temperature. Refrigerate only fully ripe fruit, and only briefly — cold storage ruins the texture."
      },
      {
        "stepNumber": 6,
        "title": "Clean up drops daily",
        "description": "Fallen peaches attract yellowjackets, ants, and brown rot. During harvest season, pick up anything on the ground every day or two and dispose of bruised or rotting fruit."
      }
    ],
    "toolsNeeded": [
      "Padded harvest basket or shallow tray",
      "Step ladder for taller branches",
      "A bucket for windfall cleanup"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Clemson HGIC ''Peach'' (background color as primary ripeness signal, blush unreliable, multiple harvests per tree), UGA Extension ''Home Garden Peaches'' (twist-release technique, fruit does not ripen after picking), and UC ANR ''Postharvest Handling of Peaches'' (bruise sensitivity, single-layer handling)."
  }'::jsonb,
  'Clemson HGIC; UGA Extension; UC ANR',
  'Peach',
  'harvesting',
  true
);
