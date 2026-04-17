-- Phase D: per-task guides for Pear (Pyrus communis).
--
-- Templates in lib/care/task-templates/pear.ts — 4 categories:
--   pruning     → Dormant pruning (central-leader training)
--   feeding     → Spring fertilizing (modest, nitrogen-limited to
--                 avoid pushing fireblight-prone growth)
--   monitoring  → Fireblight watch + fruit thinning (one guide
--                 covers both May–June tasks)
--   harvesting  → Pick mature-but-firm, ripen off the tree
--
-- Sources: Penn State Extension (Apple and Pear Disease: Fire
-- Blight), UMN Extension (Growing Pears in the Home Garden), OSU
-- Extension PNW 400 (Training and Pruning Your Home Orchard).
-- Ships with approved = true after SQL diff review.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'pear-pruning',
  '{
    "treeType": "Pear",
    "title": "Pear Dormant Pruning",
    "introduction": "Pears are pome fruit like apples and train the same way: a strong central leader or modified central leader with 4–6 scaffolds spaced around it. Pears fruit on long-lived spurs, so the goal of pruning is opening the canopy to light — not reshaping the tree every year. Light, consistent pruning also limits fireblight risk: aggressive cuts push tender new shoots, which the fireblight bacterium loves.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Prune while fully dormant",
        "description": "Mid-February is the sweet spot in most of the US — the tree is leafless and sap hasn''t started flowing, but the worst cold is past. Pruning after bloom is the wrong time because fireblight enters through fresh cuts when the weather turns warm and wet."
      },
      {
        "stepNumber": 2,
        "title": "Pick the central leader",
        "description": "A pear tree does best with one dominant vertical stem. On a young tree, pick the strongest upright leader and cut back competitors. On a mature tree that has gotten away into a V or bush shape, choose one leader and gradually reduce the others over 2–3 seasons rather than all at once."
      },
      {
        "stepNumber": 3,
        "title": "Space 4–6 scaffolds around the leader",
        "description": "Pick scaffold branches spiraling up the leader, about 6–12 inches apart vertically, pointing in different directions. Wide crotch angles (closer to 60–90° than straight up) are stronger and less likely to split under a heavy crop."
      },
      {
        "stepNumber": 4,
        "title": "Remove crossing, broken, and inward wood",
        "description": "Cut anything that rubs a neighbor, anything heading into the interior rather than out, and any broken or dead wood. Use a 3-point cut on branches bigger than an inch to avoid tearing bark."
      },
      {
        "stepNumber": 5,
        "title": "Keep cuts moderate on fireblight-prone varieties",
        "description": "Bartlett and many other popular pears are susceptible to fireblight. Heavy cuts push long tender shoots that are the pathogen''s preferred entry point. Resist the urge to rejuvenate a tree all in one year — spread it over 2–3 dormant seasons.",
        "tip": "Sterilize pruners between trees with 70% alcohol or 10% bleach, especially if fireblight was active last season."
      },
      {
        "stepNumber": 6,
        "title": "Leave the fruit spurs alone",
        "description": "Short, stubby spurs on older wood carry the fruit — they stay productive for many years. Don''t cut them off when thinning. If a scaffold is getting too long, prune back to a lateral branch rather than shortening random spur-covered wood."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners (1–1.5 inch cuts)",
      "Loppers (up to 2 inch cuts)",
      "Pruning saw (larger cuts)",
      "70% alcohol or 10% bleach for sterilizing blades"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from OSU Extension PNW 400 ''Training and Pruning Your Home Orchard'' (central-leader training for pears, scaffold spacing, 3-point cuts) and Penn State Extension ''Apple and Pear Disease: Fire Blight'' (limit pruning on fireblight-prone varieties, sterilize tools between cuts, avoid pruning in bloom)."
  }'::jsonb,
  'OSU Extension; Penn State Extension',
  'Pear',
  'pruning',
  true
),
(
  'pear-feeding',
  '{
    "treeType": "Pear",
    "title": "Pear Spring Feeding",
    "introduction": "Pears are modest feeders. The common mistake is over-fertilizing — excess nitrogen pushes long, soft shoots that are highly susceptible to fireblight, and a pear tree that runs away with vegetative growth stops fruiting. The goal is just enough nitrogen to support healthy leaf growth and fruit development, not to force the tree into extra growth.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Watch last year''s growth first",
        "description": "If new shoots grew 12–18 inches last year, the tree is fed enough — a spring feeding just maintains that rhythm. If shoots grew less than 8 inches, step up to the upper end of the rate below. If shoots grew over 24 inches, skip fertilizer entirely this year."
      },
      {
        "stepNumber": 2,
        "title": "Time it just before bud break",
        "description": "Apply in March, when the buds are starting to swell but leaves haven''t emerged. The tree can take up the nitrogen as roots wake up, and the timing supports bloom and early fruit set without pushing tender late-summer growth."
      },
      {
        "stepNumber": 3,
        "title": "Use a rate of 1/8 lb N per year of tree age",
        "description": "A 5-year-old tree gets 5/8 lb of actual nitrogen — roughly 6 lbs of a 10-10-10. Cap the rate at 1 lb of actual nitrogen on a mature tree. If you''re unsure, err low — under-feeding is far easier to fix than a fireblight outbreak."
      },
      {
        "stepNumber": 4,
        "title": "Spread in a ring, not at the trunk",
        "description": "Rake mulch back and spread the fertilizer evenly in a ring from 1 foot outside the trunk to just past the drip line. Direct contact with bark burns the trunk. Replace the mulch afterward."
      },
      {
        "stepNumber": 5,
        "title": "Water it in deeply",
        "description": "Apply at least 1 inch of water over the fed area after spreading. Granular fertilizer needs to dissolve into the root zone. Without water, it can burn roots and won''t reach where the tree can use it.",
        "tip": "On sandy soils, split the annual rate into two applications — half in March, half in May. Sandy soils don''t hold nitrogen well."
      },
      {
        "stepNumber": 6,
        "title": "Skip summer feeding",
        "description": "Don''t apply fertilizer in summer or fall. Late-season nitrogen pushes growth that doesn''t harden off before winter and is the single biggest fireblight risk factor a home gardener controls."
      }
    ],
    "toolsNeeded": [
      "Balanced granular fertilizer (10-10-10 or similar)",
      "Measuring cup",
      "Garden rake",
      "Hose or soaker line"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UMN Extension ''Growing Pears in the Home Garden'' (1/8 lb actual N per year of tree age, spread to drip line, watch shoot growth as the adjustment signal) and Penn State Extension ''Apple and Pear Disease: Fire Blight'' (excess nitrogen drives fireblight susceptibility; do not over-fertilize susceptible varieties, especially Bartlett)."
  }'::jsonb,
  'UMN Extension; Penn State Extension',
  'Pear',
  'feeding',
  true
),
(
  'pear-monitoring',
  '{
    "treeType": "Pear",
    "title": "Fireblight Watch and Fruit Thinning",
    "introduction": "Two things happen to a pear tree in May and June: fireblight flares on new growth, and young fruit needs thinning. The walk-around is the same — inspect shoots weekly, cut out any fireblight you find, and thin fruit clusters while you''re already up there. Fireblight is the #1 disease threat for backyard pears in most of the country, and early removal is the difference between losing a few shoots and losing the tree.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Walk the tree weekly May through June",
        "description": "Fireblight shows up fast when the weather warms and gets wet. A weekly inspection — 5 minutes around each tree — catches it while it''s contained to one or two shoots, before the bacteria move down into a scaffold where removal gets more surgical."
      },
      {
        "stepNumber": 2,
        "title": "Look for the shepherd''s crook",
        "description": "The signature symptom: a shoot tip turns black and curls into a shepherd''s-crook shape, with leaves hanging down, still attached, looking burned. You may also see oozing amber droplets on branches or wilted blossom clusters. The whole shoot looks scorched — hence ''fireblight.''"
      },
      {
        "stepNumber": 3,
        "title": "Cut 12 inches below visible damage",
        "description": "Prune each infected shoot back to healthy wood — 12 inches below the last visible discoloration. The bacteria travel internally past the visible symptoms, so a close cut leaves infection behind. Bag the cut wood and dispose of it; don''t compost or leave it on the ground."
      },
      {
        "stepNumber": 4,
        "title": "Sterilize pruners between every cut",
        "description": "Dip the blades in 70% alcohol or 10% household bleach between each cut, even on the same tree. Without sterilizing, you''ll spread fireblight from an infected branch to clean wood on the next cut. Keep a spray bottle of alcohol in your pocket and wipe/spray between cuts.",
        "tip": "Do not prune fireblight during rain — bacteria splash onto fresh cuts. Wait for a dry day with no rain in the 24-hour forecast."
      },
      {
        "stepNumber": 5,
        "title": "Thin fruit to one per cluster",
        "description": "Young pears set in clusters of 3–5. Leave the largest, healthiest fruit in each cluster and snap the rest off with your fingers. Space remaining fruit 4–6 inches apart along the branch. This is the same walk-around as the fireblight check — do both at once."
      },
      {
        "stepNumber": 6,
        "title": "Don''t force regrowth after heavy cuts",
        "description": "If you had to remove a lot of wood to chase fireblight, resist the urge to fertilize the tree back into growth. Extra nitrogen creates exactly the tender shoots fireblight wants next. Let the tree recover on its own."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners",
      "Spray bottle with 70% alcohol or 10% bleach solution",
      "Disposal bag (not compost) for pruned material",
      "Ladder or pole pruner for tall branches"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Penn State Extension ''Apple and Pear Disease: Fire Blight'' (shepherd''s-crook symptom, 12-inch-below-damage cut rule, sterilization between cuts, avoid pruning in rain) and UMN Extension ''Growing Pears in the Home Garden'' (thin fruit clusters to one per cluster, 4–6 inch spacing)."
  }'::jsonb,
  'Penn State Extension; UMN Extension',
  'Pear',
  'monitoring',
  true
),
(
  'pear-harvesting',
  '{
    "treeType": "Pear",
    "title": "Pear Harvest",
    "introduction": "Pears are the one tree fruit that should NOT be ripened on the tree. A tree-ripened European pear goes mealy and gritty at the core — what food writers call ''sleepy.'' Pick pears mature but still firm, chill them for a week or two, then ripen them at room temperature. Done right, a pear off the counter is buttery, juicy, and dissolves on the tongue — the reason pears were called the ''butter fruit'' by old growers.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait until late August or September",
        "description": "Most European pear varieties (Bartlett, Anjou, Bosc, Comice) mature in August and September, depending on variety and region. If you pick too early, the fruit won''t ripen properly — just soften unevenly and go tasteless. Start checking in mid-August."
      },
      {
        "stepNumber": 2,
        "title": "Lift-and-twist test",
        "description": "Cup a pear in your hand, lift it horizontal to the branch, and gently twist. If the stem separates cleanly from the spur, it''s ready to pick. If it resists, leave the fruit alone — it''s not mature yet. Check a few pears at different heights; they don''t all mature at once."
      },
      {
        "stepNumber": 3,
        "title": "Watch for skin color shift",
        "description": "A ready pear''s skin usually lightens slightly — Bartletts go from deep green toward yellow-green, Bosc goes bronzer, Anjou pales. Color alone isn''t enough (the lift-twist is the primary test) but it confirms the reading."
      },
      {
        "stepNumber": 4,
        "title": "Handle like eggs",
        "description": "Pears bruise easily. Place picked fruit into a padded harvest basket — don''t drop, don''t stack more than two deep. A bruise will brown under the skin during storage and the spot goes rotten first."
      },
      {
        "stepNumber": 5,
        "title": "Chill for 1–3 weeks before ripening",
        "description": "Most European pears need a cold period to develop the ability to ripen. Hold picked fruit at 30–40°F (the refrigerator crisper works) for 1 week for Bartletts, 2–3 weeks for Anjou, and up to 6 weeks for Bosc and Comice. Skip this step and the fruit goes from hard to rotten without passing through ripe.",
        "tip": "Check European pear storage temperatures by variety — some of the winter pears hold for months at just-above-freezing, giving you fresh pears into February."
      },
      {
        "stepNumber": 6,
        "title": "Ripen at room temperature, test the neck",
        "description": "Move pears from cold storage to the counter and let them warm up. In 3–7 days, press gently near the stem — when the neck yields slightly, it''s ripe. The body stays firmer. Eat immediately or move back to the fridge to hold for a couple more days."
      }
    ],
    "toolsNeeded": [
      "Padded harvest basket or soft-bottomed bag",
      "Step stool or ladder for upper fruit",
      "Refrigerator or cool garage (30–40°F) for post-harvest chilling"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UMN Extension ''Growing Pears in the Home Garden'' (lift-and-twist maturity test, off-tree ripening rule, neck-give ripeness test, 1–3 week cold period for most European pears). Tree-ripened pear mealy-core failure mode cross-referenced with OSU Extension home fruit guidance."
  }'::jsonb,
  'UMN Extension; OSU Extension',
  'Pear',
  'harvesting',
  true
);
