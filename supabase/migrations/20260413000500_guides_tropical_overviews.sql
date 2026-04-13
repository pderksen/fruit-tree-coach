-- Batch 6 of tree-type overview guides — tropical fruits + kiwi.
-- Five overviews: Papaya, Banana, Passion Fruit, Dragon Fruit, Kiwi.
-- Ships with approved = true after developer review.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'papaya-overview',
  '{
    "treeType": "Papaya",
    "title": "Papaya Care Overview",
    "introduction": "Papaya is technically not a tree but a fast-growing, short-lived (3–5 year) herbaceous plant that acts like one. In zones 10–11 (south Florida, south Texas, Hawaii, frost-free parts of the Gulf Coast), a well-cared-for papaya produces 60–80 lbs of fruit per year starting 7–11 months after planting. Plants are sex-specific, so planting several increases the odds of at least one fruitful plant.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Site in full sun, 7–10 ft from structures",
        "description": "Plant in full sun for fastest growth and best production. Keep at least 7–10 feet from buildings, power lines, and other plants. Papaya is extremely frost-sensitive — a single freeze kills the plant. Pick the warmest spot in the landscape."
      },
      {
        "stepNumber": 2,
        "title": "Plant 2–3 seedlings for pollination",
        "description": "Papaya plants are male, female, or hermaphroditic. Planting 2–3 seedlings 7–12 feet apart ensures at least one is fruitful, and makes watering and feeding more efficient. Start seedlings from fresh seed extracted from ripe fruit; they germinate in about 2 weeks and can be transplanted when 1 foot tall."
      },
      {
        "stepNumber": 3,
        "title": "Water uniformly, never overhead on a timer",
        "description": "Papaya needs steady, uniform moisture in the root zone. Lawn-sprinkler timers are a common cause of decline — too much water too often rots the roots. Hand-water or use drip irrigation; let the top inch dry between waterings."
      },
      {
        "stepNumber": 4,
        "title": "Do not prune",
        "description": "Papayas are not pruned. The main growing point is at the top of the single stem; if you cut it, the plant may branch awkwardly or stop producing. Remove only dead yellowed leaves as they hang."
      },
      {
        "stepNumber": 5,
        "title": "Feed little and often",
        "description": "Papaya responds to frequent light feedings with a balanced fertilizer that includes micronutrients. Apply a small amount every 3–4 weeks during the growing season. Spread in a ring at the drip line, keep clear of the stem, water in thoroughly."
      },
      {
        "stepNumber": 6,
        "title": "Harvest at 1/10–1/3 yellow",
        "description": "Pick when 1/10 to 1/3 of the fruit peel has turned yellow-orange — longer on the plant means more sugar but higher bird/pest pressure. Let harvested fruit fully ripen at room temperature, then refrigerate. Ripe papaya keeps 4–7 days."
      }
    ],
    "toolsNeeded": [
      "Balanced fertilizer with micronutrients",
      "Drip irrigation or hand-watering wand",
      "Harvest basket",
      "Gloves (papaya latex can irritate skin)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Papaya Growing in the Florida Home Landscape\" (full-sun placement, 7–10 ft spacing, 4-month-to-flower and 7-11-month-to-fruit timeline, 60–80 lb yields, no-pruning rule, lawn-sprinkler-timer over-watering hazard, 1/10–1/3 yellow harvest indicator) and Texas A&M AgriLife \"Papaya\" (plant-multiple-seedlings for sex ratio, seed germination timing)."
  }'::jsonb,
  'UF/IFAS EDIS; Texas A&M AgriLife',
  'Papaya',
  'overview',
  true
),
(
  'banana-overview',
  '{
    "treeType": "Banana",
    "title": "Banana Care Overview",
    "introduction": "Bananas are giant herbs, not trees — the ''trunk'' is actually a pseudostem made of tightly rolled leaf bases. Each pseudostem fruits once and dies; a banana ''tree'' is really a mat of connected pseudostems at different ages. In zones 9–11, a well-cared-for mat produces fruit 10–24 months after planting and keeps producing indefinitely as new pseudostems emerge.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Plant a sucker or tissue-cultured start",
        "description": "Start with a large, healthy sucker (offshoot) from an established plant, or a tissue-cultured start from a nursery. Plant in full sun in well-drained, fertile soil. Bananas are heavy feeders and drinkers — pick a site where you can water and fertilize regularly."
      },
      {
        "stepNumber": 2,
        "title": "Mulch heavily",
        "description": "Apply a 2–6 inch layer of bark, wood chips, or similar mulch at the drip line. Mulch retains moisture, suppresses weeds, and feeds the shallow root system as it breaks down. Refresh annually."
      },
      {
        "stepNumber": 3,
        "title": "Feed 4–6 times per year with high-potassium fertilizer",
        "description": "Bananas need a high-K fertilizer — something like a 3-1-6 ratio (e.g. 6-2-12). Young plants: 1/2 lb every 2 months, building up. Mature plants: 5–6 lbs at flowering and fruiting. Split into 4–6 applications across the growing season."
      },
      {
        "stepNumber": 4,
        "title": "Prune pseudostems, not branches",
        "description": "Bananas don''t branch — you''re managing pseudostems. Thin a mat to 3–4 pseudostems at varying ages (one fruiting, one ready to fruit, one young). Cut down any fruited pseudostem once harvest is complete; it will never fruit again. Remove damaged or small suckers to direct energy to the best ones."
      },
      {
        "stepNumber": 5,
        "title": "Water consistently",
        "description": "Bananas are thirsty — 1–2 inches of water per week is typical. Consistent moisture during flowering and fruit sizing is critical; water stress at those stages causes fruit drop and small bunches. Do not let soil dry out around the root zone."
      },
      {
        "stepNumber": 6,
        "title": "Harvest before yellow, ripen off the plant",
        "description": "Cut bunches when the fingers are plump with smoothed-out edges but still green — 7–14 days before they would ripen on the plant. Hang in a shady cool place to ripen; bananas develop better flavor this way than if left on the plant to fully color up."
      }
    ],
    "toolsNeeded": [
      "Sharp pruning saw or loppers (for cutting pseudostems)",
      "High-K fertilizer (e.g. 6-2-12)",
      "Mulch, thick layer",
      "Rope and strong hands for harvesting heavy bunches"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Banana Growing in the Florida Home Landscape\" (sucker-based propagation, 10–24 month fruit timeline, 2–6 inch mulch layer, 3-1-6 ratio high-potassium fertilizer, 4–6 split applications, pseudostem-once-fruited-then-dies cycle, harvest-green-and-ripen-off-plant rule) and Texas A&M AgriLife \"Banana\" guidance."
  }'::jsonb,
  'UF/IFAS EDIS; Texas A&M AgriLife',
  'Banana',
  'overview',
  true
),
(
  'passion-fruit-overview',
  '{
    "treeType": "Passion Fruit",
    "title": "Passion Fruit Care Overview",
    "introduction": "Passion fruit is a vigorous, short-lived (3–5 year) perennial vine that produces reliably in zones 9b–11. It needs a sturdy trellis, consistent moisture, and restrained fertilization — too much nitrogen produces lush vines with few flowers. Harvest season runs June through December on established vines.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Build a strong trellis first",
        "description": "A mature passion fruit vine is heavy. Before planting, install a strong fence or trellis that can withstand high winds when covered with vine. For home landscapes, a 6-foot fence or arbor works well. Site in full sun or a spot where the vine can climb into full sun."
      },
      {
        "stepNumber": 2,
        "title": "Plant in well-drained, slightly acid soil",
        "description": "Passion fruit tolerates pH 6–7.5 but prefers slightly acid. Drainage matters more than soil type — waterlogged roots rot quickly. Plant in spring once soil warms. Train new shoots up the trellis; once the vine reaches the top, it spreads naturally along the structure."
      },
      {
        "stepNumber": 3,
        "title": "Water steadily, never let it dry out",
        "description": "Passion fruit is highly sensitive to drought — even brief dry spells reduce flowering, fruit set, and fruit size. Water deeply whenever the top 1–2 inches of soil dry. Mulch 2–3 inches at the base to conserve moisture."
      },
      {
        "stepNumber": 4,
        "title": "Fertilize moderately",
        "description": "Feed 2–3 times per year with a balanced fertilizer. Excessive nitrogen produces vines and leaves at the cost of flowers — a common homeowner mistake. Once the vine reaches maturity (can take a year), reduce fertilizer rates to encourage flowering."
      },
      {
        "stepNumber": 5,
        "title": "Prune in late winter",
        "description": "Prune when the vine is not actively growing (late winter). Cut back old, woody growth to stimulate new productive shoots — flowers and fruit form on new wood. Thin the canopy to improve airflow and light penetration. Skip summer pruning; you''ll cut off flowering wood."
      },
      {
        "stepNumber": 6,
        "title": "Harvest ripe — fruit drops when ready",
        "description": "Passion fruit ripens on the vine and often drops when fully ripe. Pick when the skin shifts from smooth-green to smooth-purple (purple varieties) or yellow-with-wrinkles (yellow varieties). Ripe fruit can be eaten immediately. If you collect dropped fruit within a day or two, it is at peak flavor."
      }
    ],
    "toolsNeeded": [
      "Sturdy trellis (fence, arbor, or post-and-wire)",
      "Bypass pruners and loppers",
      "Mulch",
      "Harvest basket"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"The Passion Fruit in Florida\" (full-sun requirement, pH 6–7.5, sturdy trellis requirement, 65–90 °F temperature range, 2–3 fertilizations per year, late-winter pruning, 1-year maturity for flowering, reduce-N-to-encourage-flowering rule, drought sensitivity for fruit set, June–December harvest window) and UF/IFAS EDIS \"Passion Fruit Problems in the Home Landscape\" (common cultivation issues)."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Passion Fruit',
  'overview',
  true
),
(
  'dragon-fruit-overview',
  '{
    "treeType": "Dragon Fruit",
    "title": "Dragon Fruit Care Overview",
    "introduction": "Dragon fruit (pitaya, Hylocereus undatus) is a climbing cactus grown on sturdy trellises in zones 10–11. It is one of the fastest-growing fruit plants in the home garden — cuttings put on over an inch of growth per day and produce fruit in 6–9 months. A 3–4-year-old plant can yield 200+ lbs per year. The main design decision is the trellis.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Build a strong, plastic-protected trellis",
        "description": "A mature dragon fruit plant weighs hundreds of pounds. Build a trellis that can hold several hundred pounds of stem weight. Use a post with a top structure (arbor or ''squid'' style) to support drooping laterals. Do NOT use bare wires — they cut into the stems. If wire is used, cover it with plastic hose."
      },
      {
        "stepNumber": 2,
        "title": "Plant cuttings from a proven variety",
        "description": "Start with 12–18 inch stem cuttings from a known fruiting variety. Let cuts callus for 1–2 weeks before planting. Plant in well-drained soil; add sand or perlite to heavy soils to prevent root rot. Provide 30% shade for the first 3–4 months or in intensely sunny locations — too much sun on young plants scorches stems."
      },
      {
        "stepNumber": 3,
        "title": "Train a single stem up, then top it",
        "description": "Tie the main stem to the trellis post, removing all lateral stems along the way. Once the plant reaches the top of the trellis, pinch the tip to force branching. Tie new laterals along the top structure; they will drape down and produce flowers and fruit."
      },
      {
        "stepNumber": 4,
        "title": "Water moderately",
        "description": "Despite being a cactus, dragon fruit prefers moderate, steady moisture — not the bone-dry conditions of a desert cactus. Water when the top 2–3 inches of soil dries. Cut back in winter when growth slows. Over-watering causes stem and fruit canker."
      },
      {
        "stepNumber": 5,
        "title": "Feed lightly through the growing season",
        "description": "Apply a balanced fertilizer or compost 3–4 times through spring and summer. Dragon fruit is not a heavy feeder; too much nitrogen produces green stems at the cost of flowering. Watch for iron and magnesium deficiency on alkaline soils."
      },
      {
        "stepNumber": 6,
        "title": "Hand-pollinate at night and harvest in 30–50 days",
        "description": "Flowers open at night for a single evening. For best fruit set, hand-pollinate by transferring pollen between flowers with a small brush — especially for self-incompatible varieties. Fruit ripens 30–50 days after pollination, when the skin shifts from green to full color (pink, red, or yellow depending on variety) and the ''ears'' begin to shrivel. Cut with pruners."
      }
    ],
    "toolsNeeded": [
      "Heavy-duty trellis with plastic-covered supports",
      "Bypass pruners",
      "Soft brush for hand-pollination",
      "Balanced fertilizer"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS \"Pitaya (Dragonfruit) Growing in the Florida Home Landscape\" (stem weight trellis requirement, plastic-covered wires rule, cutting-based propagation, 1.2 inch/day growth rate, 6–9 month to fruit, 30% shade for first 3–4 months, top-then-lateral training, 220 lb 3-4 year yields) and UF/IFAS EDIS \"Stem and Fruit Canker of Dragon Fruit\" (over-watering caution)."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Dragon Fruit',
  'overview',
  true
),
(
  'kiwi-overview',
  '{
    "treeType": "Kiwi",
    "title": "Kiwi Care Overview",
    "introduction": "Kiwi (Actinidia deliciosa for fuzzy kiwifruit, A. arguta for hardy kiwiberries) is a vigorous perennial vine that needs a sturdy overhead arbor and two plants — one male, one female — to produce fruit. Hardy kiwiberries grow in zones 4–8; fuzzy kiwifruit needs zones 7–9. Prune heavily each year; kiwi growth is aggressive.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Build a walkable overhead arbor",
        "description": "Kiwi is trained on a horizontal arbor 7–8 feet high — tall enough to walk under while fruiting shoots hang down. Use strong corner posts braced to cross members; add cross pieces for a rectangular or square top with braces and strong cross pieces. A weak arbor will collapse under mature vine weight."
      },
      {
        "stepNumber": 2,
        "title": "Plant one male for every 6–10 females",
        "description": "Kiwi plants are dioecious — males produce pollen but no fruit; only females fruit. You need at least one male within pollinating distance of your females. Plant in deep, well-drained soil in a spot sheltered from late frost. The bark is thin and can sunscald — young trunks may need wrapping."
      },
      {
        "stepNumber": 3,
        "title": "Train a single straight trunk first",
        "description": "At planting, prune the vine back to 1–2 buds. Train a single straight trunk up to the arbor in year one — this is the most important goal of the first growing season. Once the trunk reaches the arbor, train two permanent cordons along the top."
      },
      {
        "stepNumber": 4,
        "title": "Prune females in December, males after bloom",
        "description": "Female vines get heavy winter pruning (December). Keep 10–20 well-spaced canes (5–10 per side of the cordon), and shorten each cane by cutting just past the outer trellis wire — usually about 2 feet long. Male vines are pruned after bloom in late June, since they are there only to provide pollen."
      },
      {
        "stepNumber": 5,
        "title": "Water deeply and consistently",
        "description": "Kiwi has shallow, wide-spreading roots and needs deep, consistent watering — especially during the long fruit-sizing period (summer through early fall). Drought stress reduces fruit size and yield. Mulch 2–3 inches at the base to conserve moisture."
      },
      {
        "stepNumber": 6,
        "title": "Harvest firm, ripen indoors",
        "description": "Fuzzy kiwifruit is ready to pick when still firm but seeds have turned black (usually early September in the PNW). Refrigerate firm fruit for several weeks of storage, or pick when soft for immediate eating. Hardy kiwiberries ripen in late summer to early fall and are picked soft like grapes."
      }
    ],
    "toolsNeeded": [
      "Heavy-duty overhead arbor (minimum 7–8 ft tall)",
      "Bypass pruners and loppers",
      "Trunk wrap for first winter (sunscald protection)",
      "Mulch"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from OSU Extension \"Growing kiwifruit in your home garden\" (7–8 ft arbor height, dioecious male/female requirement, 1:6-10 male-to-female ratio, single-trunk year-one training, December female pruning / post-bloom male pruning, 10–20 cane count, 2-ft cane length, harvest-firm-then-ripen rule) and OSU Extension \"Growing kiwifruit\" PNW producers guide (hardy kiwiberry distinction, frost protection)."
  }'::jsonb,
  'Oregon State Extension',
  'Kiwi',
  'overview',
  true
);
