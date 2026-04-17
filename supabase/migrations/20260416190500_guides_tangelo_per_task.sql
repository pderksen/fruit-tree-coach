-- Phase C: per-task guides for Tangelo (mandarin × grapefruit hybrid,
-- commonly Minneola a.k.a. Honeybell).
--
-- Templates in lib/care/task-templates/tangelo.ts:
--   feeding     → Pre-bloom + summer feeding (shared guide)
--   monitoring  → Alternaria brown spot + pest watch — Minneola-specific
--                 signature disease
--   protection  → Frost protection
--   harvesting  → Dec–Feb harvest; bell-shape and Alternaria-drop risk
--
-- Sources: UF/IFAS EDIS (Minneola Tangelo HS171/CH072, Citrus Culture
-- in the Home Landscape, Alternaria Brown Spot), UC IPM (Freezing/
-- Frost Damage, Citrus Pest Management), UC ANR Publication 8100.

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'tangelo-feeding',
  '{
    "treeType": "Tangelo",
    "title": "Tangelo Feeding",
    "introduction": "Tangelos — especially Minneola — are heavy feeders with a distinct seasonal pattern. The pre-bloom feeding in February drives flower set, which is the year''s biggest risk point given Minneola''s pollenizer dependence. A mid-season dose supports the bell-shaped fruit through summer sizing. Stop feeding by late August to avoid pushing tender fall growth into freeze season.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Use a citrus-specific fertilizer with micronutrients",
        "description": "Pick a citrus blend (6-6-6 or 8-8-8 for young trees, 10-10-10 for mature) with iron, zinc, and manganese. In Florida soils, micronutrients matter — alkaline or sandy conditions lock up iron, and tangelos show deficiency as yellow-between-veins new leaves."
      },
      {
        "stepNumber": 2,
        "title": "Time the pre-bloom feeding",
        "description": "Apply the biggest dose of the year in February, just before bud swell. For Minneola especially, this feeding supports the flower load — weak bloom combined with pollenizer limitations is a recipe for a short crop."
      },
      {
        "stepNumber": 3,
        "title": "Follow with 6-week splits through October",
        "description": "A common Florida home-grower schedule is 8-8-8 or 6-6-6 applied every 6 weeks from February through October for young trees. Mature trees take about 6–8 lbs per year, split across 3 applications (Feb, May, June). Young trees: smaller and more frequent."
      },
      {
        "stepNumber": 4,
        "title": "Spread to the drip line, keep off the trunk",
        "description": "Rake mulch back, sprinkle fertilizer in a ring from 1 ft outside the trunk to just past the drip line, replace mulch. Fertilizer on the trunk burns bark and can cause crown rot on wet soils."
      },
      {
        "stepNumber": 5,
        "title": "Water deeply after each application",
        "description": "Water at least 1 inch over the fed area right after. Without water, granular fertilizer burns roots on contact and won''t dissolve into the root zone. A soaker hose at the drip line works well."
      },
      {
        "stepNumber": 6,
        "title": "Stop by late August",
        "description": "Skip any feeding after late August. Fall nitrogen pushes tender new growth that is vulnerable to December freezes — Minneola in particular benefits from a natural hardening-off cycle before winter.",
        "tip": "For yellow-veined new leaves, a citrus foliar micronutrient spray corrects deficiency faster than soil application, especially in alkaline Florida sand."
      }
    ],
    "toolsNeeded": [
      "Citrus-specific granular fertilizer with micronutrients",
      "Measuring cup",
      "Soaker hose or drip line",
      "Foliar citrus spray (for deficiency correction, optional)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Citrus Culture in the Home Landscape'' (HS-867/HS132 — 8-8-8 or 6-6-6 applied every 6 weeks Feb–Oct for young trees, 6-6-6 at 6.1–7.8 lb/tree/year for mature trees split across 3 applications, drip-line spread, avoid trunk contact) and UF/IFAS EDIS ''Minneola Tangelo'' (HS171/CH072 — feeding and cultural context for Minneola)."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Tangelo',
  'feeding',
  true
),
(
  'tangelo-monitoring',
  '{
    "treeType": "Tangelo",
    "title": "Alternaria Brown Spot & Citrus Pest Watch",
    "introduction": "Minneola tangelo has one signature disease: Alternaria brown spot, caused by Alternaria alternata. The fungus targets young leaves and fruit with dark spots that cause defoliation and fruit drop. In humid or low-lying sites it can be severe enough to destroy most of a crop. On top of Alternaria, tangelos get the standard citrus pest complex — aphids, scale, citrus leafminer, and Asian citrus psyllid. Both fronts need monthly attention through the growing season.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Scout new flushes for Alternaria spots",
        "description": "Walk the tree every 2 weeks when new leaves are expanding. Look for small dark spots on young leaves (starting as pinpoints, expanding to brown lesions with yellow halos) and on young fruit (dark circular spots, often with a pitted center). Mature leaves and fruit resist infection — the danger window is during each flush."
      },
      {
        "stepNumber": 2,
        "title": "Time copper fungicide to new growth",
        "description": "In areas where Alternaria is a known problem (humid Florida, low-lying sites), apply a copper fungicide labeled for citrus at the start of each new flush in spring — typically February, April, and May in Florida. Follow label rates exactly. Preventive timing at flush start beats reactive spraying after symptoms appear."
      },
      {
        "stepNumber": 3,
        "title": "Rake and remove fallen leaves and fruit",
        "description": "Alternaria survives the off-season on dropped leaves and fruit. After each defoliation event and especially before the next growing season, rake up fallen material and dispose of it (trash or burn, not compost). Clean orchard floor = much lower spring infection pressure."
      },
      {
        "stepNumber": 4,
        "title": "Watch for the standard citrus pest complex",
        "description": "On the same scouting rounds, check new growth for sticky leaves, sooty mold, small scale bumps on stems, silvery leafminer trails. Treat light infestations with insecticidal soap or horticultural oil; encourage ladybugs and lacewings."
      },
      {
        "stepNumber": 5,
        "title": "Scout for Asian citrus psyllid and HLB",
        "description": "ACP adults are aphid-sized with brownish mottled wings; feed head-down, tail-up. Nymphs are yellow with white waxy tubules. HLB symptoms: blotchy mottled leaves, misshapen bitter fruit. Report suspected infestations to your local agricultural commissioner — there is no home cure."
      },
      {
        "stepNumber": 6,
        "title": "Avoid heavy summer pruning",
        "description": "Summer pruning pushes fresh flush — Alternaria food and a citrus leafminer magnet. Prune in early spring before the main flush starts, not mid-summer.",
        "tip": "Minneola on wet, low-lying sites may be nearly uncontrollable for Alternaria even with regular copper — if you''re planning a new tangelo, pick a well-drained higher spot."
      }
    ],
    "toolsNeeded": [
      "Copper fungicide labeled for citrus (for Alternaria management)",
      "Hand lens (optional)",
      "Garden hose with spray nozzle",
      "Rake (for fallen leaves and fruit)",
      "Insecticidal soap or horticultural oil"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Minneola Tangelo'' (HS171/CH072 — Alternaria susceptibility, fungicide program during spring flushes, vigorous spray program to prevent leaf and fruit damage), UF/IFAS EDIS ''Florida Citrus Production Guide: Alternaria Brown Spot'' (PP-147/CG021 — infection biology, wet-site severity, fungicide timing to each flush), and UC IPM ''Asian Citrus Psyllid and Huanglongbing Disease'' (PMG PN74155 — ACP identification and HLB symptoms)."
  }'::jsonb,
  'UF/IFAS EDIS; UC IPM',
  'Tangelo',
  'monitoring',
  true
),
(
  'tangelo-protection',
  '{
    "treeType": "Tangelo",
    "title": "Tangelo Frost Protection",
    "introduction": "Tangelos are moderately cold-tender — more than satsuma mandarins, less than lime. The bigger concern for Minneola is that the fruit doesn''t finish ripening before mid-winter freeze risk in the coldest parts of Florida. Plan protection for freeze events from mid-November through January, and always pick any ripe fruit before a hard freeze.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Water the soil deeply the day before",
        "description": "Moist soil absorbs and releases 2–3 times more heat overnight than dry soil. Water under the canopy the day before a forecast freeze — the single most impactful frost protection step."
      },
      {
        "stepNumber": 2,
        "title": "Pick any ripe fruit first",
        "description": "Minneola fruit freezes mushy below 28°F and drops afterward. If you have ripe fruit on the tree and a hard freeze is forecast, pick everything ripe enough to eat before sunset."
      },
      {
        "stepNumber": 3,
        "title": "Rake mulch back to expose bare soil",
        "description": "Mulch insulates soil from daytime sun. On the day of a forecast freeze, rake mulch away from the root zone so bare soil can absorb heat through the day. Replace the mulch after the cold spell ends."
      },
      {
        "stepNumber": 4,
        "title": "Cover with sheets or frost cloth",
        "description": "Drape sheets, burlap, or frost cloth (Agribon) over the canopy on a frame of stakes or a tomato cage. Avoid plastic — it transfers heat quickly and burns any leaves it touches. Run the cover all the way to the ground and weight the edges."
      },
      {
        "stepNumber": 5,
        "title": "Add a heat source for severe cold",
        "description": "For nights forecast below 26°F, string incandescent Christmas lights (the heat-producing kind, not LED) through the canopy inside the cover, or set a 100W outdoor bulb at the trunk base. A 3–4°F lift often saves the tree and remaining crop."
      },
      {
        "stepNumber": 6,
        "title": "Remove the cover the next morning",
        "description": "Pull the cover off once temperatures rise above freezing — usually mid-morning. Leaving it on cooks the tree on a sunny day. If another freeze is forecast within days, rewet the soil and re-cover before sunset."
      }
    ],
    "toolsNeeded": [
      "Old bedsheets, burlap, or frost cloth (Agribon)",
      "Stakes or tomato cage for a frame",
      "Stones or bricks to weight cover edges",
      "Incandescent Christmas lights or 100W outdoor bulb (for severe cold)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Freezing and Frost Damage to Citrus'' (28°F damage threshold, cover materials, pick ripe fruit before freeze), UC ANR Publication 8100 ''Frost Protection for Citrus and Other Subtropicals'' (moist-soil heat retention, bare-soil preference, cover-to-ground seal, incandescent heat sources), and UF/IFAS EDIS ''Minneola Tangelo'' (HS171/CH072 — fruit ripening window in relation to cold-season freezes)."
  }'::jsonb,
  'UC IPM; UC ANR; UF/IFAS EDIS',
  'Tangelo',
  'protection',
  true
),
(
  'tangelo-harvesting',
  '{
    "treeType": "Tangelo",
    "title": "Tangelo Harvest",
    "introduction": "Minneola tangelo is unmistakable at harvest: deep reddish-orange peel, a distinctive bell shape with a pronounced neck at the stem end, 3–3.5 inches across, and a smooth thin skin. The harvest window runs December through February. Leaving fruit too long on the tree increases both drop and Alternaria infection risk — pick promptly once ripe.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Watch for full reddish-orange color",
        "description": "Minneola turns from green through yellow-orange to a deep reddish-orange at ripeness. The color shift starts in December. Other tangelos (Orlando, Sunburst) turn more yellow-orange; use the variety''s typical mature color as your visual cue."
      },
      {
        "stepNumber": 2,
        "title": "Confirm by size and bell shape",
        "description": "Ripe Minneola reaches 3–3.5 inches across with the characteristic bell shape — wider at the bottom, narrower at the stem, with a distinct neck. Smaller fruit or fruit without the developed neck shape is likely not yet mature."
      },
      {
        "stepNumber": 3,
        "title": "Taste-test to confirm sweetness",
        "description": "Tangelos don''t sweeten after picking. Taste a sample fruit — a ripe Minneola is sweet-tart with strong citrus aroma and juicy. If it''s still sharp or bland, leave the rest another 1–2 weeks."
      },
      {
        "stepNumber": 4,
        "title": "Pick promptly once ripe",
        "description": "Unlike oranges or grapefruit, tangelos don''t hold well on the tree. Leaving ripe fruit too long increases drop (fruit falls and bruises) and Alternaria risk (more time for fungal spots to develop). Plan to pick the crop over 2–4 weeks once ripeness starts."
      },
      {
        "stepNumber": 5,
        "title": "Twist gently or snip the stem",
        "description": "The neck of a Minneola makes twist-picking natural — grip the fruit and give a slow twist; a ripe fruit detaches cleanly at the stem button. For fruit that resists twisting, snip the stem flush with pruners to avoid tearing the rind."
      },
      {
        "stepNumber": 6,
        "title": "Store cool",
        "description": "Tangelos keep 1 week at room temperature, 3–4 weeks in the refrigerator crisper. Thin-skinned varieties like Minneola bruise easily — don''t stack heavily. Juice and freeze for longer storage; tangelo juice keeps 6 months frozen.",
        "tip": "Minneola makes exceptional juice — the sweet-tart balance and strong aroma survive freezing better than orange juice."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners or citrus clippers",
      "Harvest basket",
      "Step stool for taller trees"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Minneola Tangelo'' (HS171/CH072 — December–February harvest window, 3–3.5 inch bell-shaped fruit with stem-end neck, Alternaria brown spot risk from leaving fruit on tree, deep reddish-orange color at maturity). Cut-vs-pull and storage guidance drawn from UC IPM citrus postharvest pages."
  }'::jsonb,
  'UF/IFAS EDIS; UC IPM',
  'Tangelo',
  'harvesting',
  true
);
