-- Fills the three remaining v1 fruit-tree types with overview guides:
-- Date, Mandarin, Tangelo. Also drops the orphan cherry-pruning row so
-- every v1 tree has exactly one guide (task_category = 'overview') and
-- the seed set is uniform.
--
-- Sources: UF/IFAS EDIS, University of Arizona Cooperative Extension,
-- UC ANR Master Gardeners (Santa Clara County). See researchNotes per row.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'date-overview',
  '{
    "treeType": "Date",
    "title": "Date Palm Care Overview",
    "introduction": "Date palm (Phoenix dactylifera) is a desert tree that fruits best in hot, low-humidity climates — the California and Arizona deserts and parts of south Texas (zones 9–11). It tolerates cold down to about 15 °F. Trees are dioecious: a female tree only sets fruit if pollen from a male is supplied, usually by hand-pollination in a backyard.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in full sun, well-drained soil",
        "description": "Date palms need full sun and well-drained, neutral-to-acidic soil. Best fruit production is in hot, dry climates with low humidity. In humid Gulf Coast or Florida sites, expect ornamental use rather than reliable dates. Allow at least 20–30 feet from buildings and other large palms — mature trees reach 40–80 feet."
      },
      {
        "stepNumber": 2,
        "title": "Plan for male and female trees",
        "description": "Date palms are dioecious — every tree is either male (pollen) or female (fruit). A backyard with one female needs a pollen source: a nearby male, or purchased pollen for hand-pollination. One male can pollinate dozens of females in a grove, but a single backyard tree will set little to no fruit on its own."
      },
      {
        "stepNumber": 3,
        "title": "Hand-pollinate during spring bloom",
        "description": "When female flower clusters open in late winter or early spring, cut a strand of fresh male flowers and tie or shake it into each female cluster, or dust pollen onto open female flowers with a brush. Repeat over several days as more flowers open. Without pollination, fruit will not form."
      },
      {
        "stepNumber": 4,
        "title": "Fertilize with a palm-specific blend",
        "description": "Use a palm fertilizer with roughly 3:1:3 N:P:K plus magnesium and micronutrients (iron, manganese, zinc, boron) — common analyses are 8-2-12 or 12-4-12. Apply in mid-spring and early summer, watering it in within 24 hours. Two to three applications per year is enough; over-fertilizing palms causes more harm than under-fertilizing."
      },
      {
        "stepNumber": 5,
        "title": "Prune only dead fronds",
        "description": "Remove fronds only after they are fully brown. Green or partially yellow fronds are still feeding the tree — cutting them weakens it. Wear heavy gloves and long sleeves; frond bases carry stiff, dangerous spines. Avoid \"hurricane cuts\" or skinning the trunk, both of which invite disease. Remove spent fruit stalks in June or July as part of regular cleanup."
      },
      {
        "stepNumber": 6,
        "title": "Harvest at the stage you prefer",
        "description": "Dates ripen in late summer through fall in four stages: kimri (green, hard), khalal (yellow or red, crisp), rutab (brown, soft), and tamar (fully cured, dry-sweet). Harvest at whichever stage you eat — many varieties are picked at khalal for fresh eating or left to cure on the tree to tamar. Bag developing bunches with mesh or paper to keep birds and insects off."
      }
    ],
    "toolsNeeded": [
      "Long-handled pole pruner or pruning saw (for fronds and bunches)",
      "Heavy gloves and long sleeves (frond spines)",
      "Palm-specific fertilizer (e.g., 8-2-12 with micronutrients)",
      "Mesh or paper bags for pollination and fruit protection"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Phoenix dactylifera, Date Palm\" (FOR 252/FR314 — full sun, well-drained neutral-to-acidic soil, ~15 °F cold tolerance, dioecious male/female requirement, lethal yellowing susceptibility) and University of Arizona Cooperative Extension \"Arizona Landscape Palms and their Management\" (az2021 — palm fertilizer ~3:1:3 N:K:P plus Mg and micronutrients, mid-spring and early-summer applications, water in within 24 hours, prune only fully brown fronds, leave leaf bases until dry, avoid trunk skinning, remove fruit stalks in June/July). Date ripening stage names (kimri/khalal/rutab/tamar) are the standard horticultural classification used across date-growing references."
  }'::jsonb,
  'UF/IFAS EDIS; University of Arizona Cooperative Extension',
  'Date',
  'overview',
  true
),
(
  'mandarin-overview',
  '{
    "treeType": "Mandarin",
    "title": "Mandarin Care Overview",
    "introduction": "Mandarins (including satsumas and clementines) are the easiest backyard citrus for many US growers — cold-hardier than oranges, smaller at maturity, and easy to peel. They produce reliably from the Gulf Coast through California and warm parts of the Southwest (zones 9–11, with satsumas tolerating brief dips into zone 8). Care is similar to other citrus: steady moisture, light feeding through the warm season, and minimal pruning.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site for warmth and sun",
        "description": "Plant in the sunniest, warmest spot available — a south- or southwest-facing location near a wall, patio, or driveway is ideal in marginal climates. Mandarins want full sun and well-drained soil. Avoid low-lying spots where cold air settles on frost nights."
      },
      {
        "stepNumber": 2,
        "title": "Water deeply, then let the top dry",
        "description": "Newly planted trees need water 2–3 times a week in hot weather to keep the rootball moist (not soggy). Mature trees prefer deep watering 1–2 times per month in warm weather, letting the top 3–6 inches of soil dry between waterings. Water under the canopy out to slightly past the drip line — not at the trunk."
      },
      {
        "stepNumber": 3,
        "title": "Feed lightly through the warm season",
        "description": "Use a complete citrus fertilizer with micronutrients. For young trees in the first 4–5 years, apply about 1 tablespoon of nitrogen monthly May through August. Mature trees need up to 1 lb of actual nitrogen per year, split across 2–3 applications. Yellowing between leaf veins points to micronutrient deficiency — feed with a citrus-specific blend rather than generic fertilizer."
      },
      {
        "stepNumber": 4,
        "title": "Prune lightly in early spring",
        "description": "Mandarins need very little pruning. In the first 2–3 years, remove only suckers below the graft and any vigorous vertical shoots (water sprouts). Once the tree is fruiting, prune in early spring (March in mild climates) to remove dead wood, crossing branches, and the lowest skirt of branches that touches the ground. Avoid heavy summer pruning — fresh growth attracts citrus leafminer."
      },
      {
        "stepNumber": 5,
        "title": "Thin only on heavy years",
        "description": "Most years home growers do not need to thin mandarins. But a young or weak tree carrying an extra-heavy crop benefits from thinning to a single fruit per cluster, leaving the largest. This prevents limb breakage and reduces the alternate-bearing pattern (heavy year, light year) that mandarins are prone to."
      },
      {
        "stepNumber": 6,
        "title": "Harvest by taste, not by color",
        "description": "Satsumas and many mandarins can be ripe while still partly green. Pick a sample fruit and taste it; if it is sweet and easy to peel, the crop is ready. Harvest runs December through April depending on variety — fruit holds well on the tree for several weeks once ripe, so pick as needed rather than all at once."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners and loppers",
      "Complete citrus fertilizer with micronutrients",
      "Slow-release nitrogen source (organic or synthetic)",
      "Harvest basket and citrus clippers (or twist-pick by hand)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC Master Gardeners of Santa Clara County \"Growing Great Citrus\" (sunniest/warmest siting, watering 2–3x weekly for new trees and deep monthly for mature trees, top 3–6 inches dry between waterings, 1 tbsp N monthly May–August for young trees, up to 1 lb actual N/year for mature trees, March pruning timing, skirt-up of low branches, avoid summer pruning to limit citrus leafminer, harvest indicator that rind may still be green when fruit is ready, December–April harvest window, alternate-bearing tendency on heavy crops). Asian citrus psyllid / HLB is the most serious citrus disease threat in California and the Gulf states — report suspected infestations to your local agricultural commissioner."
  }'::jsonb,
  'UC ANR Master Gardeners (Santa Clara County)',
  'Mandarin',
  'overview',
  true
),
(
  'tangelo-overview',
  '{
    "treeType": "Tangelo",
    "title": "Tangelo Care Overview",
    "introduction": "Tangelos are mandarin × grapefruit/pummelo hybrids — the most common backyard variety is Minneola (also sold as Honeybell), instantly recognizable by its bell shape and deep reddish-orange skin. Tangelos grow throughout citrus-friendly US zones (9–11) and are cared for like other citrus, with two added requirements: a compatible pollenizer tree nearby for good fruit set, and vigilance for Alternaria brown spot, which especially targets Minneola.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Plant a pollenizer nearby",
        "description": "Minneola tangelo is not strongly self-fertile and yields drop sharply without a compatible pollenizer within bee range. Plant a Temple, Sunburst, or Fallglo within 30–50 feet for reliable fruit set. Two Minneolas alone will not pollinate each other."
      },
      {
        "stepNumber": 2,
        "title": "Site in full sun with room to grow",
        "description": "Tangelos want full sun and well-drained soil. Minneola in particular develops into a very large tree at maturity — give it 20+ feet of clear space from buildings, fences, and other large trees. In Florida, avoid the coldest pockets of the state since Minneola fruit does not finish ripening before typical mid-winter freeze risk."
      },
      {
        "stepNumber": 3,
        "title": "Water deeply, then let the top dry",
        "description": "Newly planted trees need water 2–3 times per week in hot weather to keep the rootball moist but not soggy. Established trees prefer deep watering 1–2 times per month, letting the top 3–6 inches of soil dry between waterings. Water under the canopy and slightly past the drip line, not at the trunk."
      },
      {
        "stepNumber": 4,
        "title": "Feed through the warm season",
        "description": "Use a complete citrus fertilizer with micronutrients. Young trees take about 1 tablespoon of actual nitrogen per month May through August, scaling up each year. Mature trees take up to 1 lb of actual nitrogen per year, split across 2–3 applications. In Florida, an 8-8-8 or 6-6-6 citrus blend applied roughly every six weeks February through October is a common home-grower schedule."
      },
      {
        "stepNumber": 5,
        "title": "Prune sparingly",
        "description": "Tangelos need very little pruning. Remove suckers below the graft, dead or crossing wood, and any branches that drag on the ground. Avoid heavy cuts — unnecessary pruning reduces fruit production. If you must shape, remove the minimum canopy needed; do it in early spring rather than mid-summer to avoid attracting citrus leafminer."
      },
      {
        "stepNumber": 6,
        "title": "Watch for Alternaria brown spot",
        "description": "Minneola is especially vulnerable to Alternaria brown spot — small dark spots on young leaves and fruit that can drop both. Scout new flushes from spring through early summer and consider preventive copper fungicide applications timed to new growth in problem areas. Rake and remove fallen leaves and fruit, which carry the fungus through the off-season."
      },
      {
        "stepNumber": 7,
        "title": "Harvest December through February",
        "description": "Minneola fruit ripens December through February and develops a deep reddish-orange color, a thin smooth peel, and a 3–3.5 inch bell-shaped fruit with the characteristic neck. Pick by twisting gently or clipping the stem flush — leaving fruit too long on the tree increases drop and Alternaria risk."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners and loppers",
      "Complete citrus fertilizer with micronutrients (e.g., 6-6-6 or 8-8-8)",
      "Copper fungicide for Alternaria management (optional)",
      "Citrus clippers and harvest basket"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Minneola Tangelo\" (HS171/CH072 — not strongly self-fertile, Temple/Sunburst/Fallglo as pollenizers, Cleopatra mandarin or Swingle citrumelo rootstocks, very large mature size, 3–3.5 inch bell-shaped fruit with stem-end neck, December–February harvest, Alternaria brown spot susceptibility) and UF/IFAS EDIS \"Citrus Culture in the Home Landscape\" (HS-867/HS132 — 8-8-8 fertilizer every six weeks February–October for young trees, 6-6-6 at 6.1–7.8 lb/tree/year for mature trees split across 3 applications, minimal pruning principle, copper fungicide for fungal disease control). Watering and harvest cadence cross-referenced with UC Master Gardeners of Santa Clara County \"Growing Great Citrus\" (deep monthly watering for established citrus, top 3–6 inches dry between waterings)."
  }'::jsonb,
  'UF/IFAS EDIS; UC ANR Master Gardeners (Santa Clara County)',
  'Tangelo',
  'overview',
  true
);

-- Drop the orphan cherry-pruning row so every v1 tree has exactly one
-- 'overview' guide and the seed set is uniform. Pruning content can be
-- re-added later as part of a complete category rollout.
delete from public.guides where id = 'cherry-pruning';
