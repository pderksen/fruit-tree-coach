-- Batch 3 of tree-type overview guides — citrus.
-- Five overviews: Lemon, Orange, Lime, Grapefruit, Tangerine.
-- Citrus care is broadly similar across species — the differences are
-- mostly harvest timing and cold tolerance. Each guide calls out its
-- species-specific quirks while sharing the core care cadence.
-- Ships with approved = true after developer review.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'lemon-overview',
  '{
    "treeType": "Lemon",
    "title": "Lemon Care Overview",
    "introduction": "Lemons are the most forgiving citrus for home gardeners — they bloom and fruit nearly year-round in warm climates, and Meyer lemons in particular tolerate container culture and mild cold better than most citrus. This overview covers the basics that keep a lemon tree healthy and productive.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in full sun",
        "description": "Plant in full sun, at least 15–25 feet from buildings and other trees. Citrus are subtropical and cannot take regular freezing temperatures — in zones 8 and cooler, grow in containers you can move to shelter. Avoid lawn-sprinkler zones; too-frequent shallow watering rots roots."
      },
      {
        "stepNumber": 2,
        "title": "Feed in 3 seasonal applications",
        "description": "Start feeding when buds swell in late winter. Use a citrus-specific fertilizer (e.g. 6-4-6 or 8-4-6 with micronutrients — iron, zinc, manganese). For young trees, feed every 6 weeks February through October. For mature trees, apply 3–4 lbs per application, 2–3 times per year, spread in a ring from 1 ft outside the trunk to beyond the drip line. Water in thoroughly.",
        "tip": "Foliar micronutrient sprays (April–September) correct the pale-leaf chlorosis that is common on citrus in alkaline soils."
      },
      {
        "stepNumber": 3,
        "title": "Water deeply, infrequently",
        "description": "Water new trees with a slow hose soak twice a week for the first month, then taper. Let the top 2–3 inches of soil dry between waterings. A wilting mid-afternoon canopy is the signal to water. Over-watering kills more citrus than under-watering."
      },
      {
        "stepNumber": 4,
        "title": "Prune lightly for shape",
        "description": "Lemons fruit heavily on lightly pruned trees. Keep the canopy at 7–10 feet tall, 10–15 feet wide. Remove dead, crossing, and inward-growing branches; clear suckers below the graft line. Skip heavy heading cuts — they reduce fruit production."
      },
      {
        "stepNumber": 5,
        "title": "Monitor for scale, aphids, and leafminer",
        "description": "Inspect new growth for curled leaves, sticky honeydew (aphids), or tiny brown bumps on stems and leaf undersides (scale). Silvery, winding trails on young leaves are citrus leafminer. Treat light infestations with neem oil or insecticidal soap; encourage ladybugs and lacewings."
      },
      {
        "stepNumber": 6,
        "title": "Harvest only mature fruit",
        "description": "Citrus do not ripen off the tree — pick only when fully ripe. Meyer lemons turn deep yellow to light orange; Eureka and Lisbon stay bright yellow. Snip with pruners or scissors rather than pulling, which can tear bark and invite disease."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners or harvest scissors",
      "Citrus fertilizer with micronutrients",
      "Pump sprayer for neem oil / insecticidal soap",
      "Soaker hose or drip line"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Lemon Growing in the Florida Home Landscape\" (spacing, watering cadence, fertilization schedule, 7–10 ft height target, light pruning preference, mature-fruit harvest), UC IPM''s \"Fertilizing Citrus\" (citrus-specific NPK ratios, micronutrient requirements), and UC Davis / UC ANR citrus pest guidance (scale, aphid, leafminer identification and organic controls)."
  }'::jsonb,
  'UF/IFAS EDIS; UC IPM; UC Davis',
  'Lemon',
  'overview',
  true
),
(
  'orange-overview',
  '{
    "treeType": "Orange",
    "title": "Orange Care Overview",
    "introduction": "Sweet oranges are the workhorse citrus of the American home landscape. A young grafted orange typically needs 3–5 years to start producing, but a mature tree yields 100+ pounds of fruit per season with steady care. Choose varieties with staggered harvest windows for fresh fruit November through July.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Pick the right variety",
        "description": "With room for more than one tree, plant early (''Hamlin''), midseason (''Pineapple'' or ''Midsweet''), and late (''Valencia'') for continuous harvest from November through July. For a single tree, a Valencia gives the longest on-tree storage window. Plant in full sun, 15+ feet from structures and other trees."
      },
      {
        "stepNumber": 2,
        "title": "Fertilize on a split schedule",
        "description": "For young trees use 6-6-6 or 8-8-8; for mature trees 10-10-10 works well. Split into 3–5 applications: a nitrogen-heavy feed in January or February just before bloom, a second in May, a third in June, with lighter follow-ups as needed. Keep fertilizer away from the trunk, spread in a ring to the drip line, water in thoroughly."
      },
      {
        "stepNumber": 3,
        "title": "Water deeply during dry spells",
        "description": "Oranges are sensitive to both drought and waterlogging. Water deeply when the top 2–3 inches of soil dry out; avoid frequent shallow irrigation. During fruit set and sizing (spring and summer), consistent moisture is critical — inconsistent watering causes fruit split and drop."
      },
      {
        "stepNumber": 4,
        "title": "Prune lightly — mostly for airflow",
        "description": "Prune in late winter before bud swell. Remove dead, crossing, or inward-growing branches; clear suckers below the graft. Skip heavy heading — oranges, like other citrus, resent it. The goal is an open canopy that lets light and air reach the interior."
      },
      {
        "stepNumber": 5,
        "title": "Watch for HLB and pest pressure",
        "description": "In Florida, Texas, and parts of California, Huanglongbing (HLB / citrus greening) is now the dominant disease — look for blotchy mottled leaves and misshapen, bitter fruit. There is no home cure; monitor and report suspected cases to your local extension. Also watch for scale, aphids, leafminer, and citrus psyllid (the HLB vector)."
      },
      {
        "stepNumber": 6,
        "title": "Harvest when fully colored and sweet",
        "description": "Oranges turn from green to their variety''s mature color, but color alone is not enough — taste-test one first. Sweetness does not increase after picking. Use pruners or scissors to snip the fruit with its button; pulling tears bark. Leave what you''re not eating on the tree; it stores best there."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners or harvest scissors",
      "Citrus fertilizer (6-6-6, 8-8-8, or 10-10-10)",
      "Soaker hose or drip line",
      "Harvest basket"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Citrus Culture in the Home Landscape\" (variety selection by maturity season, 6-6-6 / 8-8-8 / 10-10-10 recommendations, split-application schedule, light pruning guidance), UF/IFAS EDIS \"Citrus Tree Care for the Home Gardener in the HLB Era\" (HLB symptoms and vector awareness), and UC IPM citrus pest-management guidance."
  }'::jsonb,
  'UF/IFAS EDIS; UC IPM',
  'Orange',
  'overview',
  true
),
(
  'lime-overview',
  '{
    "treeType": "Lime",
    "title": "Lime Care Overview",
    "introduction": "Lime trees come in two main homeowner types: large-fruited ''Tahiti'' (Persian) limes and smaller, yellow-when-ripe Key limes. Both are tender — less cold-hardy than lemons — and reward full sun, well-drained soil, and light, consistent care. Young trees typically need 1–3 years to start fruiting.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in full sun with shelter",
        "description": "Plant in full sun. Limes are the least cold-hardy of common citrus — in zones 9 and colder, grow in a container you can move to shelter during frost. For in-ground planting, a south-facing location next to a wall traps extra warmth."
      },
      {
        "stepNumber": 2,
        "title": "Size containers properly",
        "description": "For container culture, start with a pot 2 inches wider than the nursery container and step up as roots fill in. Final container size is typically 18–36 inches in diameter. Use lightweight plastic or quality potting mix with good drainage."
      },
      {
        "stepNumber": 3,
        "title": "Feed regularly but not heavily",
        "description": "Use a citrus-specific fertilizer with micronutrients. Feed small amounts frequently (every 6–8 weeks during the growing season) rather than large doses. Container trees need more frequent, lighter feeding than in-ground trees because nutrients leach out quickly."
      },
      {
        "stepNumber": 4,
        "title": "Prune minimally for shape",
        "description": "Key limes and Persian limes both need only limited pruning. Prune to shape the tree, remove dead wood, and limit height — Key lime can be kept to 6–8 feet high, 10–12 feet wide. Remove suckers from below the graft line. Skip heavy cuts; they reduce yield."
      },
      {
        "stepNumber": 5,
        "title": "Water steadily, drain well",
        "description": "Limes want consistent moisture but hate wet feet. Water deeply when the top inch or two of soil dries; let it drain completely between waterings. For containers, never leave the pot sitting in a saucer of water."
      },
      {
        "stepNumber": 6,
        "title": "Harvest Key limes yellow, Persian limes green",
        "description": "Persian (''Tahiti'') limes are picked when fully sized and dark green — they are sour and aromatic at that stage. Key limes turn yellow when fully ripe — that is their mature color. Snip fruit with pruners; limes do not sweeten or ripen after picking."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners or harvest scissors",
      "Citrus fertilizer with micronutrients",
      "Well-draining container (18–36\" final diameter) for container culture",
      "Frost cloth or moveable shelter for cold snaps"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Key Lime Growing in the Florida Home Landscape\" (''Tahiti'' vs Key lime comparison, 6–8 ft height target for Key lime, pruning-only-for-shape guidance, yellow-at-ripe for Key lime), Clemson HGIC \"Container Citrus Production\" (container sizing, potting mix, 1–3 year fruiting lag), and UC IPM citrus fertilization principles."
  }'::jsonb,
  'UF/IFAS EDIS; Clemson HGIC; UC IPM',
  'Lime',
  'overview',
  true
),
(
  'grapefruit-overview',
  '{
    "treeType": "Grapefruit",
    "title": "Grapefruit Care Overview",
    "introduction": "Grapefruit are the largest of the common citrus trees and the most heavy-yielding — a mature tree can produce fruit over months rather than weeks. They are better suited to in-ground planting in zones 9–11 than container culture. Young grafted trees typically take 5 years to start flowering.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Plant in full sun, spaced generously",
        "description": "Grapefruit need full sun and room to grow — mature trees reach 20+ feet. Space at least 15 feet between trees and away from buildings. Container-grown nursery trees can be planted any time of year and establish more reliably than bare-root stock."
      },
      {
        "stepNumber": 2,
        "title": "Pick the right variety",
        "description": "''Ruby Red'' and ''Rio Red'' are popular seedless red-fleshed varieties with good cold tolerance. White-fleshed ''Marsh'' is hardier still. For the Gulf Coast and the Desert Southwest, all three are backyard staples."
      },
      {
        "stepNumber": 3,
        "title": "Fertilize consistently",
        "description": "Use a citrus-specific fertilizer with micronutrients. For young trees, apply small amounts every 6 weeks February through October. Mature trees take 3–4 lbs per application, 2–3 times per year. Heavy yields pull a lot of nutrition from the soil — do not skip feedings on bearing trees."
      },
      {
        "stepNumber": 4,
        "title": "Water deeply and consistently",
        "description": "Grapefruit are large trees with matching water demand in hot weather. Water deeply, let the top 2–3 inches dry between waterings. Mulch 2–3 inches deep at the drip line (not against the trunk) to retain moisture and suppress weeds."
      },
      {
        "stepNumber": 5,
        "title": "Prune lightly to open the canopy",
        "description": "Late winter pruning before bud swell. Focus on dead, damaged, and crossing branches; clear inward-growing shoots to let light reach the canopy interior. Skip heavy heading cuts. Remove suckers below the graft line anytime you see them."
      },
      {
        "stepNumber": 6,
        "title": "Harvest over a long window",
        "description": "Grapefruit is typically a fall harvest but holds well on the tree — ''Ruby Red'' and ''Rio Red'' can be picked from November into spring as needed. Sweetness increases with time on the tree. Taste-test one; snip ripe fruit with pruners."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners and pruning saw",
      "Citrus fertilizer with micronutrients",
      "Mulch",
      "Harvest basket and step ladder"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Citrus Culture in the Home Landscape\" (15-foot spacing, 5-year fruiting lag, container-grown nursery stock preference, extended fall-through-spring harvest), Clemson HGIC \"In-Ground Citrus Production\" (variety selection including Ruby Red, Rio Red, Marsh), and UC IPM citrus fertilization guidance."
  }'::jsonb,
  'UF/IFAS EDIS; Clemson HGIC; UC IPM',
  'Grapefruit',
  'overview',
  true
),
(
  'tangerine-overview',
  '{
    "treeType": "Tangerine",
    "title": "Tangerine Care Overview",
    "introduction": "Tangerines (Citrus reticulata) are smaller, easy-peel citrus in the mandarin family. They need the same general care as sweet oranges but start fruiting slightly earlier and are more cold-tolerant than most other citrus — ''Satsuma'' mandarins in particular tolerate brief dips into the mid-20s °F.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in full sun",
        "description": "Plant in full sun, 15 feet from buildings and other trees. In zones 8b–9a, ''Satsuma'' mandarins can survive occasional frost and are the best choice for cooler climates. Container culture lets you grow less-hardy tangerine varieties in zones 8 and below."
      },
      {
        "stepNumber": 2,
        "title": "Fertilize in split applications",
        "description": "Use a citrus-specific fertilizer (6-6-6 or 8-8-8 for young trees, 10-10-10 for mature) with micronutrients. Split into 3–5 applications across the growing season — nitrogen-heavy just before bloom (January/February), then follow-ups in May and June. Keep the fertilizer ring away from the trunk."
      },
      {
        "stepNumber": 3,
        "title": "Water deeply, infrequently",
        "description": "Water when the top 2–3 inches of soil dry. Consistent moisture during fruit sizing (late spring through summer) prevents split fruit. Mulch 2–3 inches deep at the drip line."
      },
      {
        "stepNumber": 4,
        "title": "Prune lightly in late winter",
        "description": "Tangerines tend to set heavy crops on the outer canopy and leave the interior bare. Prune in late winter to open the center and remove dead or crossing branches. Light annual pruning keeps the tree productive and accessible for harvest."
      },
      {
        "stepNumber": 5,
        "title": "Thin fruit on over-set trees",
        "description": "Tangerines often alternate bear — a big crop one year followed by a small one. Thinning in heavy years (removing about 1 in 4 fruitlets in June) helps even out the cycle and improves fruit size."
      },
      {
        "stepNumber": 6,
        "title": "Harvest when fully colored",
        "description": "Tangerines and mandarins ripen in fall through winter depending on variety. Color alone is not enough — taste-test for sweetness. Pick by snipping with pruners or by giving a gentle twist. The loose-peel trait is a tangerine hallmark, but fruit picked early peels less easily."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners or harvest scissors",
      "Citrus fertilizer with micronutrients",
      "Mulch",
      "Harvest basket"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Citrus Culture in the Home Landscape\" (NPK ratios for young vs mature citrus, split-application fertilization schedule, general citrus planting and pruning guidance) and UC IPM citrus cultural-care pages (watering cadence, mulch recommendations). Satsuma mandarin cold-hardiness and alternate-bearing tendency drawn from consolidated extension horticultural guidance; variety-specific frost ratings should be verified with your local extension."
  }'::jsonb,
  'UF/IFAS EDIS; UC IPM',
  'Tangerine',
  'overview',
  true
);
