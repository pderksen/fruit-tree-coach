-- Phase E: per-task guides for Date palm (Phoenix dactylifera).
--
-- Templates in lib/care/task-templates/date.ts — 4 categories
-- (protection intentionally skipped; date palms are desert trees and
-- cold damage below 20°F is a zone-boundary question handled by the
-- overview guide):
--   pruning     → Dead-frond pruning, never below horizontal
--   feeding     → Late-winter palm fertilizer (4-1-6-2 Mg ratio)
--   monitoring  → Hand pollination + strand thinning + bagging — the
--                 three distinctive date-grower jobs collapse into
--                 one guide (March through July)
--   harvesting  → Staged ''thinning harvest'' — pick in 2–3 passes
--
-- Sources: UNR Extension (Date Palm Gardening Guide for Southern
-- Nevada, FS-02-99 / PubID 3217), UA Cooperative Extension (Arizona
-- Landscape Palms, az1021).

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'date-pruning',
  '{
    "treeType": "Date",
    "title": "Date Palm Frond Pruning",
    "introduction": "Date palms only need pruning once a year, and the rules are different from every other tree in this app: green fronds stay, dead fronds come off, and you never cut above horizontal. Over-pruning a date palm causes ''pencil pointing'' of the trunk — the growing point tapers, the palm becomes top-heavy on a narrow stem, and winds snap it. Doing less is doing better.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait for January",
        "description": "In AZ, CA desert, and southern NV, January is the pruning month — coldest weather is past, fronds from last year are fully dried, and the palm is heading toward spring flowering. Don''t prune heat-stressed palms in summer."
      },
      {
        "stepNumber": 2,
        "title": "Cut only fully brown fronds",
        "description": "A frond is done when it has turned completely brown from tip to base — no green stripes. Half-green fronds are still feeding the palm; leaving them supports stronger growth. Cut flush to the trunk with a sharp pruning saw, leaving a short stub (about 1–2 inches) that will dry and fall off naturally."
      },
      {
        "stepNumber": 3,
        "title": "Never cut above horizontal — the ''9-and-3'' rule",
        "description": "Imagine a clock face over the palm. You can prune fronds pointing at 4 o''clock through 8 o''clock (below horizontal). Anything from 3 o''clock to 9 o''clock stays. Cutting fronds angled upward exposes the tender growing bud and narrows the trunk, causing ''pencil pointing'' that leaves the palm prone to wind break.",
        "tip": "If a frond is diseased or broken, it can come off regardless of angle — but an intact green frond above horizontal always stays."
      },
      {
        "stepNumber": 4,
        "title": "Remove last year''s fruit stalks",
        "description": "After the harvest, the long dried fruit stalks remain on the palm. Cut these back to the trunk at the same visit. They harbor spores and insects through the year if left in place."
      },
      {
        "stepNumber": 5,
        "title": "Gear up for the spines",
        "description": "Date palm leaf bases have rigid needle-like spines near the trunk that will stab through regular gloves and clothing. Wear leather gauntlet gloves and a long-sleeved leather or heavy denim shirt. Safety glasses are non-optional — a frond spine to the eye is a common home-palm injury."
      },
      {
        "stepNumber": 6,
        "title": "Do not ''shave'' or ''skin'' the trunk",
        "description": "Landscapers sometimes shave the dried leaf bases off a date palm trunk for appearance. Don''t. Skinning exposes the trunk tissue and invites disease and insect damage. Let the old leaf bases fall off on their own as they weather."
      }
    ],
    "toolsNeeded": [
      "Pruning saw (curved blade for overhead cuts)",
      "Leather gauntlet gloves",
      "Long-sleeved heavy shirt",
      "Safety glasses",
      "Extension pole saw for tall palms"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UNR Extension ''Date Palm Gardening Guide for Southern Nevada'' (FS-02-99; PubID 3217) (January timing, remove dead fronds and old fruit stalks, leather-glove safety) and UA Cooperative Extension ''Arizona Landscape Palms'' (az1021; az2021 January 2023 update) (never prune above horizontal rule, pencil-pointing wind-break risk from over-pruning, don''t skin or shave the trunk)."
  }'::jsonb,
  'UNR Extension; UA Cooperative Extension',
  'Date',
  'pruning',
  true
),
(
  'date-feeding',
  '{
    "treeType": "Date",
    "title": "Date Palm Spring Feeding",
    "introduction": "Date palms push heavy spring growth and open their flower spathes in March. A single fertilizer pass in late February through early March — before spathes open — supplies the palm for the whole bearing year. Palm-specific fertilizers with magnesium are worth seeking out; standard lawn fertilizer has the wrong ratio and can cause yellow-bottomed fronds (potassium deficiency).",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Time it before spathes open",
        "description": "Apply in the second half of February or the first week of March, BEFORE flower spathes open and pollen flies. Earlier is okay (first week of February) in warm years; later is too late — the spring flush has already started using reserves."
      },
      {
        "stepNumber": 2,
        "title": "Pick a palm-specific formula",
        "description": "Look for a 4-1-6-2 Mg ratio (or any palm fertilizer with ~2x more potassium than nitrogen, plus magnesium). Common equivalents: 8-2-12-4, 13-3-14-4. Soil test first if you can — potassium is naturally high in many AZ/NV soils and you may be able to skip it, but nitrogen and magnesium are almost always needed."
      },
      {
        "stepNumber": 3,
        "title": "Rate: 1.5 lbs N per 100 sq ft canopy",
        "description": "For an established palm, the year''s target is 1.5 lbs of actual nitrogen per 100 sq ft of canopy footprint (or 1 lb per 100 sq ft if you''re fertilizing six times a year instead of once). A 10-foot-canopy palm (~78 sq ft) needs about 1.2 lbs of actual N — which is 15 lbs of an 8% N palm fertilizer."
      },
      {
        "stepNumber": 4,
        "title": "Spread past the canopy edge",
        "description": "Rake mulch back and broadcast the fertilizer in a ring starting 2 ft from the trunk and extending to about 2 ft past the canopy edge — palm feeder roots extend well beyond the fronds. Keep granules off the trunk base to avoid salt burn."
      },
      {
        "stepNumber": 5,
        "title": "Water it in deeply",
        "description": "Immediately after spreading, apply at least 2 inches of water over the fed area (flood-irrigation style, or run drip/bubbler for several hours). Deep watering dissolves the fertilizer, carries it to root depth, and flushes salts out of the upper soil."
      },
      {
        "stepNumber": 6,
        "title": "Don''t feed established palms more than twice a year",
        "description": "One spring feeding is usually enough on a mature backyard palm. If fronds yellow mid-season (most often potassium or magnesium deficiency), a second light application in June corrects it. Stop all fertilizer by July — late-season nitrogen pushes soft growth that can''t ripen fruit.",
        "tip": "Yellowing on OLDER (lower) fronds with green midribs typically means potassium deficiency; yellow bands across lower fronds mean magnesium. A palm fertilizer with both corrects the pattern over 6–12 months."
      }
    ],
    "toolsNeeded": [
      "Palm-specific granular fertilizer (4-1-6-2 Mg ratio or equivalent)",
      "Measuring bucket or scoop",
      "Garden rake",
      "Deep-watering bubbler or flood basin"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UNR Extension ''Date Palm Gardening Guide for Southern Nevada'' (FS-02-99; PubID 3217) (late-February timing before spathes open, 4-1-6-2 Mg ratio, 1.5 lbs N per 100 sq ft canopy rate, flood-irrigation watering-in, soil-test first for potassium). UA Cooperative Extension ''Arizona Landscape Palms'' (az1021) confirms the high-N lawn fertilizer is the wrong choice for palms and causes potassium deficiency over time."
  }'::jsonb,
  'UNR Extension; UA Cooperative Extension',
  'Date',
  'feeding',
  true
),
(
  'date-monitoring',
  '{
    "treeType": "Date",
    "title": "Pollinate, Thin, and Bag the Date Crop",
    "introduction": "Three distinctive jobs separate date-growing from every other backyard fruit tree: (1) hand pollination in March–April (date palms are dioecious — female trees produce fruit only after pollen is physically transferred from a male), (2) strand-thinning in May–June (a bearing palm sets 10x more fruit than it can ripen well), and (3) bagging in July (birds and insects take a huge percentage of unprotected fruit). Skip any of these and the harvest suffers.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Collect pollen from a male palm (March)",
        "description": "In early March, male flower stalks (''spathes'') swell and split open. Cut the spathe before it fully opens, tie it off, and hang upside down over clean paper in a dry indoor space. After 2–3 days the pollen sifts out as a fine yellow powder. Collect it in a clean dry jar and refrigerate — it keeps about 4 months."
      },
      {
        "stepNumber": 2,
        "title": "Pollinate female spathes as they open",
        "description": "March through April, watch your female palm daily. When a spathe cracks open, the receptive window is about 3–5 days. Dust pollen directly onto the flower strands with a small brush, OR place a single male flower strand across the top of the female cluster, OR use a squirt-bottle with pollen mixed 1:10 with flour or talc. Repeat on every new spathe that opens."
      },
      {
        "stepNumber": 3,
        "title": "Strand-thin in May–June at pea size",
        "description": "When developing fruit reach pea size, each strand bundle holds 100+ tiny fruits — far more than the palm can ripen. Open each bunch of strands, cut out the center third (the shortest strands that won''t ripen well anyway), and thin remaining strands to 15–20 fruits each. Aim for about 35 strands per stalk on a mature palm.",
        "tip": "Thinning in May/June looks like you''re throwing away the crop. You''re not — the remaining fruit will be 3–4x larger and sweeter than an unthinned cluster, and the stalk won''t break under the load."
      },
      {
        "stepNumber": 4,
        "title": "Tie stalks up to support the load",
        "description": "As fruit enlarges and clusters get heavy, tie each fruit stalk loosely to a nearby frond with soft rope or fabric strip, holding the cluster in an arched position. This keeps stalks from snapping under the weight and keeps clusters away from the spiny lower fronds."
      },
      {
        "stepNumber": 5,
        "title": "Bag each cluster in mid-to-late July",
        "description": "When fruit reaches the khalal stage (fully sized, turning yellow or red depending on variety), enclose each cluster in a porous bag — burlap sacks or cheesecloth both work. Porosity matters: a sealed plastic bag traps heat and rots the fruit. The bag keeps birds off and catches any fruit that drops as it softens."
      },
      {
        "stepNumber": 6,
        "title": "Check bagged clusters weekly through harvest",
        "description": "Open and check each bag weekly as fruit transitions from khalal (crunchy, yellow/red) to rutab (soft, wrinkled, darker) to tamar (fully dried). Harvest timing depends on variety and target stage — see the harvest guide."
      }
    ],
    "toolsNeeded": [
      "Sharp knife for spathe harvest",
      "Clean jar for pollen storage",
      "Small paintbrush or puffer bottle",
      "Pruning shears for strand thinning",
      "Soft rope or fabric strips for tying stalks",
      "Burlap or cheesecloth bags (one per cluster)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UNR Extension ''Date Palm Gardening Guide for Southern Nevada'' (FS-02-99; PubID 3217) (March pollen collection, hand-pollination methods including the male-strand-across-female technique and pollen-flour mix, pea-size May–June thinning to 15–20 fruits per strand with 35 strands per stalk, mid-to-late July bagging with porous burlap or cheesecloth at khalal stage, stalk-tying to prevent breakage). Variety-specific nuances (Medjool vs. Deglet Noor timing) cross-referenced with UA Cooperative Extension ''Arizona Landscape Palms'' (az1021)."
  }'::jsonb,
  'UNR Extension; UA Cooperative Extension',
  'Date',
  'monitoring',
  true
),
(
  'date-harvesting',
  '{
    "treeType": "Date",
    "title": "Staged Date Harvest",
    "introduction": "Dates don''t ripen all at once — a single cluster will have fruit in every stage from crunchy-green (khalal) to soft-ripe (rutab) to fully dried (tamar) at the same time. The home-grower approach is variety-dependent: some varieties get ''bunch-cut'' when most fruit is ripe, others (like Medjool) get a ''thinning harvest'' — you pick only what''s ripe, come back in a week or two, repeat until the cluster is empty.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Know your variety''s harvest stage",
        "description": "Medjool, Halawy, Khadrawy, Barhi: eaten at rutab (soft-ripe) stage — picked when most fruit has wrinkled skin and amber-to-brown color. Deglet Noor, Zahidi: eaten at tamar (semi-dry) stage — wait until fruit firms up and shrivels. Barhi is also eaten at khalal (crunchy-yellow), which is distinctive — pick-and-eat in September."
      },
      {
        "stepNumber": 2,
        "title": "Choose bunch-cut OR thinning-harvest",
        "description": "Bunch-cut (for varieties that ripen fairly evenly like Halawy and Khadrawy): wait until ~3/4 of the cluster has reached the target stage, then cut the whole stalk and bring it indoors. The remaining fruit finishes ripening on the stalk. Thinning-harvest (for Medjool, Zahidi, uneven-ripening cultivars): pick only the ripe fruit in each cluster, leave the rest, return in 1–2 weeks and pick again. Repeat 2–3 passes through September–October."
      },
      {
        "stepNumber": 3,
        "title": "Early varieties: September–October",
        "description": "Halawy and Khadrawy are the earliest Arizona cultivars — bunch-cut in September or early October. Watch for birds once bags fail; the harvest window closes fast if you''re not checking weekly."
      },
      {
        "stepNumber": 4,
        "title": "Mid-season (Medjool, Zahidi): October onward",
        "description": "Medjool is the most common Arizona backyard variety. Start the first thinning-pass in late September to early October. Each pass takes 30–60 minutes per tree; plan on coming back every 10–14 days until the cluster is done. Expect 20–40 lbs per cluster on a healthy mature palm, spread across multiple passes."
      },
      {
        "stepNumber": 5,
        "title": "Clean and dry picked fruit",
        "description": "Rinse picked dates gently under cool water to remove dust and any bag fibers, spread on a clean cloth or screen, and air-dry at room temperature (or in a warm 90°F location) until the surface is dry to the touch — usually a few hours. Don''t wash more than a day''s pick at a time.",
        "tip": "If fruit still feels too firm for the target stage after picking, spread it in a single layer on a tray at 80–90°F for 2–5 days — it finishes ripening off the palm and develops sweeter flavor."
      },
      {
        "stepNumber": 6,
        "title": "Store by moisture level",
        "description": "Soft rutab-stage dates (Medjool, Barhi): refrigerate in airtight containers, 2–3 weeks fresh; freeze for up to a year. Semi-dry tamar-stage dates (Deglet Noor): store at room temperature in a sealed container 3–6 months, or refrigerate for longer. Very dry dates keep at room temperature for a year or more."
      }
    ],
    "toolsNeeded": [
      "Sharp knife or pruning shears",
      "Picking bag or clean bucket",
      "Extension pole with clippers for tall palms",
      "Clean cloth or screen for drying",
      "Airtight storage containers"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UNR Extension ''Date Palm Gardening Guide for Southern Nevada'' (FS-02-99; PubID 3217) (bunch-cut vs. thinning-harvest distinction, early-variety September window for Halawy/Khadrawy, Medjool October+ staged thinning harvest, rinse-and-air-dry processing, storage by variety moisture level). Variety-specific stage preferences (Medjool at rutab, Deglet Noor at tamar, Barhi at khalal) cross-referenced with UA Cooperative Extension ''Arizona Landscape Palms'' (az1021) and UC ANR date palm publications."
  }'::jsonb,
  'UNR Extension; UA Cooperative Extension',
  'Date',
  'harvesting',
  true
);
