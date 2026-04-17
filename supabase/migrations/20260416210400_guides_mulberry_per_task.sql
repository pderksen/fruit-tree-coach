-- Phase E: per-task guides for Mulberry (Morus alba / M. rubra /
-- M. nigra).
--
-- Templates in lib/care/task-templates/mulberry.ts — 3 categories
-- (monitoring and protection intentionally skipped; mulberry is
-- famously easygoing — white peach scale is the one real pest and
-- is controlled by dormant oil during the winter-pruning pass,
-- folded into the pruning guide):
--   pruning     → Winter shape pruning + dormant oil
--   feeding     → Late-winter + mid-summer 10-10-10 split
--   harvesting  → Shake-the-tree harvest (fruit drops when ripe)
--
-- Source coverage for mulberry is thinner than other phases — UGA
-- Extension B992 is the primary US-extension reference. Flagged in
-- all-phases.md''s Revisit section.
--
-- Sources: UGA Extension B992 (Minor Fruits and Nuts in Georgia),
-- Clemson HGIC (Red vs. White Mulberry in South Carolina).

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'mulberry-pruning',
  '{
    "treeType": "Mulberry",
    "title": "Mulberry Winter Shape Pruning",
    "introduction": "Mulberries are among the easiest fruit trees to prune — one winter pass to remove dead and crossing wood is all a healthy tree needs. Heavier cuts are tolerated but rarely necessary. The same dormant-winter visit is a good time to spray horticultural oil, which catches the white peach scale overwintering on twigs (mulberry''s one notable pest).",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Prune in January–February while fully dormant",
        "description": "Wait until leaves have dropped and the tree is deep in dormancy — typically January through February across most of the mulberry-growing US. The tree is leafless (good visibility), sap isn''t flowing (minimal bleeding), and spring bud break is still weeks away."
      },
      {
        "stepNumber": 2,
        "title": "Remove dead and crossing wood",
        "description": "Take out any branches that are clearly dead, damaged, diseased, or crossing and rubbing against other branches. This is 80% of the job. Mulberry is vigorous and self-corrects most structural issues on its own — you''re just tidying."
      },
      {
        "stepNumber": 3,
        "title": "Thin the canopy lightly for light penetration",
        "description": "If the canopy is so dense that light can''t reach interior branches, thin a few crowded shoots — aim for dappled light reaching the trunk. Don''t over-thin; mulberry''s dense canopy is part of what makes the summer shade and the heavy crop."
      },
      {
        "stepNumber": 4,
        "title": "Head back if the tree is outgrowing its space",
        "description": "Mature mulberries reach 30–50 ft if unmanaged — bigger than many yards want. Head the longest scaffolds back to outward-facing side branches (not stubs) to bring the tree back to a manageable size. Spread heavy cuts over 2–3 winters; one big chop-back produces watersprouts and delays fruiting."
      },
      {
        "stepNumber": 5,
        "title": "Spray dormant oil the same day",
        "description": "After pruning, spray the whole tree with dormant horticultural oil at the label rate. This smothers any white peach scale overwintering on twigs and branches. Spray on a dry day when temperatures are above 40°F and staying above freezing for 24 hours. Coverage matters — wet everything."
      },
      {
        "stepNumber": 6,
        "title": "Expect tolerance for missed years",
        "description": "Unlike apple or peach where a missed pruning year really shows, mulberry shrugs off a year or two of neglect. If you skip a winter, the tree will still fruit heavily — just catch up the next year.",
        "tip": "White mulberry sap and any fruit stains are notoriously hard to remove from clothing and concrete. Wear old clothes when pruning, and don''t stand fresh-cut branches against pale surfaces."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners",
      "Loppers for 1–2 inch wood",
      "Pruning saw for larger scaffolds",
      "Dormant horticultural oil and sprayer"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UGA Extension ''Minor Fruits and Nuts in Georgia'' (B992). Direct quote: ''Prune trees each winter to remove dead and crossing branches.'' White peach scale pest identification and dormant oil as the control treatment (''several dormant oil sprays in late winter'') also drawn from this publication. Mulberry extension coverage is thinner than other fruits — the Revisit section of docs/plans/batch-generated-guides/all-phases.md flags this and notes that Clemson HGIC ''Red vs. White Mulberry in South Carolina'' is the secondary corroborating source."
  }'::jsonb,
  'UGA Extension; Clemson HGIC',
  'Mulberry',
  'pruning',
  true
),
(
  'mulberry-feeding',
  '{
    "treeType": "Mulberry",
    "title": "Mulberry Twice-a-Year Feeding",
    "introduction": "Mulberries grow vigorously on modest fertility and don''t need much help. Two fertilizer passes a year — one in late winter before bud break, one in mid-summer after the main harvest — are all an established tree needs. Overfeeding produces lanky vegetative growth and less fruit; underfeeding shows as pale, small leaves and reduced crops.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "First pass: late winter, before bud break",
        "description": "In February (or early March in colder zones), just before buds begin to swell, apply the first fertilizer dose. This timing positions nutrients for spring''s vigorous growth flush."
      },
      {
        "stepNumber": 2,
        "title": "Use 1 lb of 10-10-10 per inch of trunk diameter",
        "description": "Measure trunk diameter one foot above the ground. A 3-inch-diameter mulberry gets 3 lbs of 10-10-10 per application. Split the annual total in half between the two applications — so a 3-inch tree gets 1.5 lbs in February and 1.5 lbs in July."
      },
      {
        "stepNumber": 3,
        "title": "Spread past the drip line",
        "description": "Broadcast granules in a ring from 1 ft outside the trunk extending to about 2 ft past the canopy edge. Mulberry roots extend well beyond the visible canopy. Keep granules off the trunk base and away from young shallow roots."
      },
      {
        "stepNumber": 4,
        "title": "Water it in",
        "description": "Apply at least 1 inch of water over the fed area immediately after spreading. Rainfall within a day or two counts. Water carries the fertilizer to root depth and prevents burning on the soil surface."
      },
      {
        "stepNumber": 5,
        "title": "Second pass: mid-summer, after main harvest",
        "description": "Apply the second half of the year''s total in July, after the main mulberry crop finishes (typically early-to-mid June depending on climate). This feeds the tree through the rest of the growing season and helps it put away reserves for next year."
      },
      {
        "stepNumber": 6,
        "title": "Halve the rate on young trees",
        "description": "For a young tree (years 1–3), use half the rate — mulberries grow fast and overfeeding pushes lanky unbranched shoots. If the tree looks vigorous with deep green leaves, skip the summer feeding entirely in young years.",
        "tip": "If a mature tree''s leaves yellow mid-season despite being fed, it may be a micronutrient issue (iron or manganese) tied to alkaline soil, not a nitrogen shortage. A foliar micronutrient spray addresses this without adding more fertilizer to the soil."
      }
    ],
    "toolsNeeded": [
      "10-10-10 balanced fertilizer (or equivalent)",
      "Measuring scoop",
      "Garden rake",
      "Hose or irrigation"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UGA Extension ''Minor Fruits and Nuts in Georgia'' (B992). Direct quote: ''Fertilize the trees in late winter and in mid-summer, using about 1 lb of 10-10-10 for each inch of trunk diameter.'' Young-tree rate reduction and signs of over- and under-feeding drawn from general mulberry-care guidance in the same publication and from Clemson HGIC ''Red vs. White Mulberry in South Carolina''. Mulberry''s extension coverage is thinner than other fruits — flagged in docs/plans/batch-generated-guides/all-phases.md."
  }'::jsonb,
  'UGA Extension; Clemson HGIC',
  'Mulberry',
  'feeding',
  true
),
(
  'mulberry-harvesting',
  '{
    "treeType": "Mulberry",
    "title": "Shake-the-Tree Mulberry Harvest",
    "introduction": "Mulberries ripen and drop when ready — no color-chart or firmness-test needed. The extension-service recommendation is literal: spread a sheet under the tree and shake the branches. Ripe fruit falls, underripe fruit stays on. The trade-off is that mulberries are extremely soft, stain everything they touch, and keep only 2–3 days after picking. Plan for this being a short, messy, rewarding harvest window.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Watch for ripening in May or early June",
        "description": "Most mulberries ripen in May across the South (Georgia, the Carolinas) and late May through early June farther north. Individual cultivars and climate shift the window by 1–2 weeks. Start checking when you notice some fruit darkening to full red-black (red and black mulberries) or yellowing (white mulberry)."
      },
      {
        "stepNumber": 2,
        "title": "Spread a sheet or clean tarp",
        "description": "An old bedsheet or clean tarp laid flat under the tree catches ripe fruit as it drops. A light-colored sheet makes it easier to see what you''re picking up. Choose fabric you don''t care about — mulberry juice stains permanently."
      },
      {
        "stepNumber": 3,
        "title": "Shake each branch firmly",
        "description": "Grab a lower branch and shake it vigorously for a few seconds. Ripe berries drop; underripe stays on. Move to the next branch and repeat. For higher branches, use a long pole or rake to shake from below. On a large tree, work the perimeter first, then push in toward the trunk."
      },
      {
        "stepNumber": 4,
        "title": "Repeat every 2–3 days through the harvest window",
        "description": "Mulberries ripen progressively over about 3–4 weeks. Come back every 2–3 days through the window and shake fresh fruit down. On the heaviest production days, a mature tree can drop several pounds in one visit."
      },
      {
        "stepNumber": 5,
        "title": "Wear dark clothes and gloves",
        "description": "Juice stains are the main mulberry-harvest hazard. Wear clothing you don''t care about and disposable gloves. Rinse juice off concrete walks and driveways within an hour with water and a brush — dried stains don''t come out.",
        "tip": "Birds love mulberries too. Expect to share the top-of-canopy crop with them — even a full harvest schedule won''t get everything before they do. Netting isn''t really practical at mulberry size."
      },
      {
        "stepNumber": 6,
        "title": "Use fresh within 2–3 days, or freeze",
        "description": "Fresh-picked mulberries keep only 2–3 days refrigerated — they''re more fragile than raspberries. Use immediately for fresh eating, baking, or jam. For longer storage, spread in a single layer on a baking sheet, freeze solid, then pack into bags. Frozen mulberries keep 6–12 months and work well in smoothies, pies, and sauces."
      }
    ],
    "toolsNeeded": [
      "Old bedsheet or clean tarp",
      "Long pole or rake for high branches",
      "Dark clothes and gloves (stain protection)",
      "Colander for rinsing",
      "Freezer bags for long-term storage"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UGA Extension ''Minor Fruits and Nuts in Georgia'' (B992). Direct quote: ''The fruit drops when ripe and may be harvested by shaking the tree.'' May-harvest timing for Georgia also drawn from this publication. Storage life (2–3 days fresh, freezer as long-term option) and staining caution cross-referenced with Clemson HGIC ''Red vs. White Mulberry in South Carolina''. Mulberry extension coverage is thinner than other fruits — flagged in docs/plans/batch-generated-guides/all-phases.md''s Revisit section."
  }'::jsonb,
  'UGA Extension; Clemson HGIC',
  'Mulberry',
  'harvesting',
  true
);
