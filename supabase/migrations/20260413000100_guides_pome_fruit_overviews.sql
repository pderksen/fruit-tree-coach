-- Batch 2 of tree-type overview guides — pome fruit.
-- Five overviews: Apple, Pear, Crabapple, Quince, Medlar.
-- Ships with approved = true after developer review.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'apple-overview',
  '{
    "treeType": "Apple",
    "title": "Apple Care Overview",
    "introduction": "Apples are the most forgiving of the common backyard fruit trees once established, but they demand steady attention: late-winter pruning, fruit thinning in early summer, and disease-awareness if you live where apple scab, fire blight, or cedar-apple rust are present. This overview walks the year from dormant pruning through harvest.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Prune in late winter",
        "description": "Prune in late winter (February to early April), after the worst cold has passed but before bud break. Remove dead, damaged, and diseased wood first; then crossing branches and inward-growing shoots. Use thinning cuts at the branch collar — not heading cuts — for a stronger, more open canopy.",
        "tip": "Never remove more than one-third of the tree in a single year."
      },
      {
        "stepNumber": 2,
        "title": "Watch for fire blight signs",
        "description": "If you see blackened, shepherd''s-crook-shaped branch tips or oozing cankers during spring, that is fire blight. Prune infected wood at least 8 inches below the discolored bark during dry weather, sterilizing tools between every cut. Remove and burn or bag the infected material."
      },
      {
        "stepNumber": 3,
        "title": "Feed newly planted trees",
        "description": "For a new tree, broadcast about 1/2 lb of 5-10-10 (or equivalent organic) in a ring around — not against — the trunk after bud break. Mature trees usually need less; base rates on soil tests and prior-year shoot growth. Avoid heavy nitrogen, which pushes soft growth that attracts fire blight and aphids."
      },
      {
        "stepNumber": 4,
        "title": "Thin fruit at marble size",
        "description": "In late June or early July, once fruitlets reach marble size, hand-thin to one fruit per cluster and 4–6 inches between fruits on each branch. Thinning prevents limb breakage, promotes larger fruit, and breaks the tendency toward biennial bearing."
      },
      {
        "stepNumber": 5,
        "title": "Harvest by taste and seed color",
        "description": "Color alone is unreliable. A ripe apple separates easily with a gentle upward twist, has dark brown seeds when cut, and tastes crisp and sweet-tart rather than starchy. Pick gently to avoid bruising; most varieties store well in the fridge for 1–3 months."
      },
      {
        "stepNumber": 6,
        "title": "Rake leaves in fall to break disease cycles",
        "description": "Apple scab, rusts, and several leaf spots overwinter in fallen leaves. Rake and bag or burn all leaves before snowfall — do not leave them under the tree. This one step cuts next year''s disease pressure more than any spray."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners, loppers, and pruning saw",
      "Sterilizing solution (10% bleach or 70% isopropyl alcohol)",
      "Balanced fertilizer (5-10-10 or similar)",
      "Harvest basket or bag, step ladder"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UMN Extension''s \"Growing apples in the home garden\" and \"Pruning and training apple trees\" (late-winter pruning, 1/3 rule, marble-size thinning, biennial bearing), Penn State''s \"Home Orchard Calendar\" and \"Pruning and Training Apple Trees\" (seasonal sequence, thinning cuts preferred), and UC IPM''s fire blight guidance (8-inch cut below canker, dry-weather pruning, tool sterilization)."
  }'::jsonb,
  'UMN Extension; Penn State Extension; UC IPM',
  'Apple',
  'overview',
  true
),
(
  'pear-overview',
  '{
    "treeType": "Pear",
    "title": "Pear Care Overview",
    "introduction": "Pears are long-lived and lower-maintenance than apples, but they share a killer disease (fire blight) and have one big quirk on the harvest end — they don''t ripen well on the tree. Pick mature but firm, ripen indoors.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Prune in late winter, not during bloom",
        "description": "Prune before bud break, after the coldest weather has passed. Do not prune while the tree is in bloom or for two weeks after — wounds during wet, warm weather invite fire blight infection. Train young trees to a central leader or modified central leader."
      },
      {
        "stepNumber": 2,
        "title": "Go light on fertilizer",
        "description": "Too much nitrogen produces lush new growth that is highly susceptible to fire blight. If last year''s shoot growth was less than 12 inches, spread compost around the base in April or May. Otherwise, skip the annual fertilizer and let the tree self-regulate."
      },
      {
        "stepNumber": 3,
        "title": "Thin fruit in June and July",
        "description": "After natural drop, pick off the smallest pears so remaining fruits are about 6 inches apart on the branch. This encourages larger, higher-quality fruit and prevents limb damage from overloading."
      },
      {
        "stepNumber": 4,
        "title": "Watch for fire blight all season",
        "description": "Inspect monthly during spring and summer for blackened, shepherd''s-crook branch tips. Prune infected wood at least 8 inches below the visible damage, sterilizing tools between every cut. Remove and burn or bag infected material immediately."
      },
      {
        "stepNumber": 5,
        "title": "Harvest mature but firm",
        "description": "The biggest mistake new pear growers make is letting fruit ripen on the tree — it turns gritty. Instead, cup the pear and lift-and-twist in one motion. If it separates easily, it''s mature. Ripen at room temperature for 3–10 days depending on variety, then refrigerate.",
        "tip": "Bartlett turns from green to yellow during ripening; many other varieties stay green, so rely on softness near the stem, not color."
      },
      {
        "stepNumber": 6,
        "title": "Fall cleanup",
        "description": "Rake fallen leaves and fruit. Pear scab and pear psylla overwinter in debris. Inspect the trunk and scaffolds for cankers and plan next winter''s pruning to remove them."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners, loppers, and pruning saw",
      "Sterilizing solution",
      "Harvest basket"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UMN Extension''s \"Growing pears in the home garden\" (do-not-prune-during-bloom rule, compost-only feeding, 12-inch growth threshold, harvest mature-firm), Penn State Extension''s \"Pruning Apples and Pears in Home Fruit Plantings\" (training form, seasonal timing), and UC IPM''s fire blight guidance (cut-below-canker rule, tool sterilization)."
  }'::jsonb,
  'UMN Extension; Penn State Extension; UC IPM',
  'Pear',
  'overview',
  true
),
(
  'crabapple-overview',
  '{
    "treeType": "Crabapple",
    "title": "Crabapple Care Overview",
    "introduction": "Crabapples are ornamental first, edible second — most varieties are prized for spring bloom, not fruit. Care is similar to a full-size apple, with extra weight on disease-resistant variety selection since crabapples are prone to the same scab, rust, and fire blight pressures.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Prune in late winter for shape",
        "description": "Prune in late winter (February to early April) before bud break. Open the canopy center for airflow, remove crossing and downward-growing branches, cut out suckers from the base, and shape the tree. Spring and summer pruning increase fire blight risk."
      },
      {
        "stepNumber": 2,
        "title": "Remove fire blight promptly",
        "description": "If you see blackened shepherd''s-crook branch tips, prune out the affected wood 8+ inches below the canker during dry weather. Sterilize tools between cuts. Remove and destroy infected material."
      },
      {
        "stepNumber": 3,
        "title": "Feed sparingly",
        "description": "Crabapples need medium fertility. Over-fertilizing produces soft, fast growth that is highly susceptible to fire blight. A light spring application of balanced fertilizer or compost is usually enough for an established tree."
      },
      {
        "stepNumber": 4,
        "title": "Manage apple scab with sanitation",
        "description": "If leaves develop olive-green to brown spots and drop prematurely, apple scab is the culprit. The most effective homeowner control is raking and destroying fallen leaves in fall — infected leaves burned, buried, or hot-composted. Resistant varieties are the long-term answer."
      },
      {
        "stepNumber": 5,
        "title": "Watch for cedar-apple rust",
        "description": "Orange spots on leaves paired with strange gelatinous galls on nearby junipers or eastern red cedars means cedar-apple rust. Remove galls from cedars within a few hundred feet, or plant resistant crabapple varieties if you can''t."
      },
      {
        "stepNumber": 6,
        "title": "Fall cleanup and variety review",
        "description": "Rake up all leaves and fallen fruit before snowfall. If the tree required heavy spraying or lost leaves early despite sanitation, consider replacing with a resistant variety (e.g. ''Prairifire'', ''Adirondack'') — it''s the highest-leverage fix available."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners, loppers, and pruning saw",
      "Sterilizing solution",
      "Leaf rake"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UMN Extension''s \"Apple scab\" and \"Fire blight\" pages (sanitation-first scab management, 8-inch cut rule for fire blight), Penn State''s \"Crabapple Diseases\" (full disease spectrum, pruning timing, fertility caution), and Clemson HGIC''s \"Crabapple\" and \"Apple & Crabapple Diseases\" pages (open-canopy pruning goal, resistant variety emphasis)."
  }'::jsonb,
  'UMN Extension; Penn State Extension; Clemson HGIC',
  'Crabapple',
  'overview',
  true
),
(
  'quince-overview',
  '{
    "treeType": "Quince",
    "title": "Quince Care Overview",
    "introduction": "Quince is a small, tough deciduous tree closely related to apples and pears. Most varieties produce hard, fragrant fruit used for jelly, paste, or marmalade rather than fresh eating. Care is straightforward — the main watchables are fire blight (same as apples and pears) and leaf spot in wet summers.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in full sun with good drainage",
        "description": "Quince prefers full sun and well-drained soil. It tolerates a range of soil types but struggles in wet feet or deep shade. Hardy to about USDA zone 5 — in colder zones, quince rootstocks are not reliably winter-hardy."
      },
      {
        "stepNumber": 2,
        "title": "Prune lightly in late winter",
        "description": "Prune in late winter before bud break. Quince needs less pruning than apples — focus on removing dead, damaged, or crossing wood and opening the canopy for airflow. Avoid heavy cuts; quince heals slowly. Skip pruning during bloom and the two weeks after (fire blight window)."
      },
      {
        "stepNumber": 3,
        "title": "Feed modestly in spring",
        "description": "A light application of balanced fertilizer or compost at the drip line in early spring is usually sufficient. Like apples and pears, quince is prone to fire blight — over-feeding drives soft growth that invites infection."
      },
      {
        "stepNumber": 4,
        "title": "Water at the base, not overhead",
        "description": "Leaf spot and fungal diseases spread fast on wet foliage. Water deeply at the root zone rather than overhead; soaker hoses or drip irrigation are ideal. Mulch a 2–3 inch ring at the drip line to conserve moisture."
      },
      {
        "stepNumber": 5,
        "title": "Harvest when fruit is fully yellow and fragrant",
        "description": "Quince ripens in fall — usually October in most US climates. Pick when the fruit shifts from green to full yellow and gives off a strong, sweet perfume. Fruit does not soften on the tree; expect hard, heavy, aromatic fruit at harvest."
      },
      {
        "stepNumber": 6,
        "title": "Store cool and use for cooking",
        "description": "Quince stores several weeks in a cool, dark place. Most varieties are too astringent for fresh eating — cook into jelly, paste (membrillo), or add to apple pies for fragrance. Inspect the tree each winter for cankers and remove damaged wood during the next dormant pruning."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners, loppers, and pruning saw",
      "Sterilizing solution",
      "Mulch, soaker hose or drip line",
      "Harvest basket"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Penn State Extension''s \"Quince: An Autumn Fruit\" (ornamental + culinary framing, hardness-at-harvest, fall ripening window), UC IPM''s \"Managing Pests in Gardens: Trees and Shrubs: Quince\" (pest and disease pressures shared with pome family), and general OSU Extension fruit-tree planting guidance (overhead-water caution, mulch at drip line). Sources are thinner for quince than for apple or pear — verify variety-specific quirks with your local extension."
  }'::jsonb,
  'Penn State Extension; UC IPM; Oregon State Extension',
  'Quince',
  'overview',
  true
),
(
  'medlar-overview',
  '{
    "treeType": "Medlar",
    "title": "Medlar Care Overview",
    "introduction": "Medlar (Mespilus germanica) is a small, self-fertile, low-maintenance fruit tree that grows 4–6 m (13–20 ft) on common rootstocks. Its fruit is harvested hard and then \"bletted\" — stored until soft and brown — before eating or cooking. Medlar has thin US extension-source coverage; this overview draws from consolidated horticultural guidance.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in sun, sheltered from wind",
        "description": "Plant in full sun to partial shade with well-drained, slightly acidic to neutral soil. Medlar is hardy in USDA zones 5–8 and self-fertile — a single tree produces fruit without a pollinator partner. Avoid heavy clay or waterlogged spots."
      },
      {
        "stepNumber": 2,
        "title": "Shape young trees, then prune minimally",
        "description": "For the first 3–4 years, train to an open-centered, goblet-shaped canopy with 4–5 scaffold branches. Once shape is set, medlar needs very little pruning — mainly removing dead, damaged, or crossing branches in late winter. Medlar is tip-bearing, so do not shear back small side-shoots (that''s where the fruit sets)."
      },
      {
        "stepNumber": 3,
        "title": "Water deeply while establishing",
        "description": "Water regularly during the first 2–3 years, especially in dry spells. Established medlars are fairly drought-tolerant. Mulch 2–3 inches at the drip line to conserve moisture."
      },
      {
        "stepNumber": 4,
        "title": "Feed lightly",
        "description": "Medlar is not a heavy feeder. A spring top-dressing of compost or balanced fertilizer at the drip line is plenty for established trees. Over-feeding produces vegetative growth at the cost of fruit."
      },
      {
        "stepNumber": 5,
        "title": "Harvest hard in late fall",
        "description": "Pick fruit in October or November, after the first light frost, when leaves show fall color. The fruit will be hard, brown, and inedible at this stage — that is normal."
      },
      {
        "stepNumber": 6,
        "title": "Blet indoors before eating",
        "description": "Store harvested medlars stem-side-down on a cool tray, single layer, for 2–4 weeks until the flesh turns soft, dark brown, and aromatic. Eat fresh with a spoon, or cook into medlar jelly or cheese. Unbletted fruit is bitter and astringent."
      }
    ],
    "toolsNeeded": [
      "Bypass hand pruners and loppers",
      "Mulch",
      "Harvest basket",
      "Cool, dry storage tray for bletting"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from consolidated horticultural guidance on Mespilus germanica (RHS, Raintree Nursery, and general orchard references) — US Cooperative Extension coverage of medlar is limited, so guidance on tip-bearing habit, self-fertility, open-goblet training, and bletting is drawn from broader horticultural sources. Timing windows and zone ranges align with general pome-family care in USDA zones 5–8."
  }'::jsonb,
  'Consolidated horticultural guidance (RHS, orchard references); limited US Extension coverage',
  'Medlar',
  'overview',
  true
);
