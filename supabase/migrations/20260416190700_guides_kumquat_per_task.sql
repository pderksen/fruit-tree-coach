-- Phase C: per-task guides for Kumquat (Citrus japonica).
--
-- Templates in lib/care/task-templates/kumquat.ts — 3 categories
-- (protection intentionally skipped; kumquats are the cold-hardiest
-- common citrus, tolerating brief dips to ~10°F, so the overview
-- guide covers any frost-specific advice):
--   feeding     → Spring + summer feeding (shared guide); lighter
--                 than other citrus
--   monitoring  → Citrus pest inspection
--   harvesting  → Eat whole, peel and all — signature kumquat quirk
--
-- Sources: UF/IFAS EDIS (Kumquat FOR300/FR368, Citrus Culture in the
-- Home Landscape), UC IPM (Citrus Pest Management).

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'kumquat-feeding',
  '{
    "treeType": "Kumquat",
    "title": "Kumquat Feeding",
    "introduction": "Kumquats are the lightest feeders of common citrus — their smaller size and modest vegetative growth mean they need less nitrogen than oranges or grapefruit. Over-feeding a kumquat pushes tender flushes, reduces the characteristic compact form, and can delay fruiting. The pattern is 2–3 light split feedings with a citrus-specific fertilizer that includes micronutrients.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Pick a citrus-specific fertilizer",
        "description": "Use a citrus blend with micronutrients (iron, zinc, manganese). Generic all-purpose fertilizer lacks the micronutrients kumquats need — yellowing between veins on new leaves is the classic deficiency sign."
      },
      {
        "stepNumber": 2,
        "title": "Feed at half the rate of other citrus",
        "description": "Kumquats are smaller and need less nitrogen. Apply about half the label rate for oranges or grapefruit. Young trees: small amounts every 6 weeks during the growing season. Mature trees: 2–3 light split applications (late winter, late spring, early summer)."
      },
      {
        "stepNumber": 3,
        "title": "Time the pre-bloom feeding",
        "description": "The first and largest feeding goes down in February or early March, just before bud swell. This supports bloom and early fruit set. Keep the rate modest — more is not better for kumquats."
      },
      {
        "stepNumber": 4,
        "title": "Spread in a ring to the drip line",
        "description": "Rake mulch back, sprinkle fertilizer in a ring from 1 ft outside the trunk to past the drip line, then replace mulch. Keep granules off the trunk — direct contact burns bark."
      },
      {
        "stepNumber": 5,
        "title": "Water deeply after feeding",
        "description": "Water at least 1 inch over the fed area right after application. Without water, granular fertilizer burns roots on contact and won''t dissolve into the root zone."
      },
      {
        "stepNumber": 6,
        "title": "Stop by late August",
        "description": "Skip any feeding after late August. Fall nitrogen pushes tender new growth — kumquats are cold-hardy but tender new growth always lags the mature canopy in freeze tolerance.",
        "tip": "Container kumquats need lighter but slightly more frequent feedings — about every 8 weeks — because watering leaches nutrients from the pot."
      }
    ],
    "toolsNeeded": [
      "Citrus-specific granular fertilizer with micronutrients",
      "Measuring cup",
      "Garden rake",
      "Hose or soaker line"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Fortunella spp., Kumquat'' (FOR300/FR368 — lighter care requirements than other citrus, container-culture suitability) and UF/IFAS EDIS ''Citrus Culture in the Home Landscape'' (citrus micronutrient requirements, split-application schedule, stop-by-late-August guidance). Half-rate feeding guidance for kumquats drawn from UF/IFAS EDIS general citrus fertilization scaled to kumquat size."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Kumquat',
  'feeding',
  true
),
(
  'kumquat-monitoring',
  '{
    "treeType": "Kumquat",
    "title": "Citrus Pest Inspection",
    "introduction": "Kumquats attract the same pest complex as other citrus — aphids, scale, citrus leafminer, and Asian citrus psyllid — but typically at lower intensity. Their smaller size makes inspection quick, and the glossy narrow leaves show honeydew and sooty mold clearly. A 2–3 week scouting rhythm during growth flushes keeps a kumquat tree healthy for decades.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Walk the tree every 2–3 weeks",
        "description": "Kumquats flush new growth multiple times a year and each flush is a pest magnet. Walk the tree every 2–3 weeks from early spring through fall. Container kumquats on a patio are especially easy to inspect — no excuse to skip."
      },
      {
        "stepNumber": 2,
        "title": "Look for sticky leaves and sooty mold",
        "description": "Run a hand along a leaf. Sticky = honeydew (aphids, scale, mealybug). Black sooty patches are the mold that grows on honeydew. On kumquat''s glossy narrow leaves, both show up clearly and early."
      },
      {
        "stepNumber": 3,
        "title": "Check new shoots for aphids",
        "description": "Turn over the tips of soft new growth. Aphids cluster on the youngest tissue — green or black, pear-shaped, in clumps. A strong water jet knocks most off; severe infestations warrant insecticidal soap per label."
      },
      {
        "stepNumber": 4,
        "title": "Check stems and leaf undersides for scale",
        "description": "Scale look like small bumps glued to bark or leaf veins — brown, gray, or waxy white. They don''t move. A fingernail flicks off live scale and leaves a smear. Small infestations scrub off with a soft brush; larger ones respond to horticultural oil per label."
      },
      {
        "stepNumber": 5,
        "title": "Watch for citrus leafminer on young flush",
        "description": "Silvery serpentine trails on young leaves are citrus leafminer — a moth larva tunneling inside the leaf. Most damaging on young trees. Remove heavily mined leaves and avoid fertilizer that pushes extra flush."
      },
      {
        "stepNumber": 6,
        "title": "Scout for Asian citrus psyllid",
        "description": "Kumquats can host ACP and HLB in citrus-regulated states. ACP adults are aphid-sized with brownish mottled wings; feed head-down, tail-up. Nymphs are yellow with white waxy tubules. Report suspected infestations to your local agricultural commissioner — especially important for container kumquats that may have moved across regions.",
        "tip": "Protect bees at bloom — avoid broad-spectrum insecticides on flowering kumquats; stick to soap or oil spot-treatments after petal-fall."
      }
    ],
    "toolsNeeded": [
      "Hand lens (optional)",
      "Garden hose with spray nozzle",
      "Insecticidal soap or horticultural oil",
      "Soft brush"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UC IPM ''Citrus Pest Management Guidelines — Home Landscape'' (aphid water-blast control, scale ID and oil timing, leafminer tolerance on mature trees, bee protection at bloom), UC IPM ''Asian Citrus Psyllid and Huanglongbing Disease'' (PMG PN74155 — ACP identification, report-to-extension guidance), and UF/IFAS EDIS ''Fortunella spp., Kumquat'' (FOR300/FR368 — kumquat general care context)."
  }'::jsonb,
  'UC IPM; UF/IFAS EDIS',
  'Kumquat',
  'monitoring',
  true
),
(
  'kumquat-harvesting',
  '{
    "treeType": "Kumquat",
    "title": "Kumquat Harvest",
    "introduction": "Kumquats are the only common citrus eaten whole, skin and all. Surprising first-timers: the sweet part is the peel, and the flesh is tart — the combined bite is what makes them addictive. Fruit ripens October into March depending on variety. Nagami (oval, tangy-sweet) is the most common US kumquat; Meiwa (round, sweeter flesh) is worth seeking out if you can find one.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Wait for full orange color",
        "description": "Kumquats turn from green through yellow-orange to a deep orange at ripeness. Unlike mandarins, color here is a reliable signal — the flesh and peel ripen together. Under-ripe green or yellow fruit is bitter; fully orange fruit is ready."
      },
      {
        "stepNumber": 2,
        "title": "Check the feel",
        "description": "A ripe kumquat feels firm but slightly springy — not rock-hard. Gentle pressure shouldn''t compress the fruit, but the skin should yield a touch. Rock-hard fruit needs more time even if color looks right."
      },
      {
        "stepNumber": 3,
        "title": "Taste one whole",
        "description": "Pick one and eat it skin-on — this is the only way to know. Nagami should be tangy-sweet, with the peel providing most of the sweetness and the flesh providing the tart kick. Meiwa should be sweeter overall. If it''s still bitter or astringent, wait 2 weeks and try again."
      },
      {
        "stepNumber": 4,
        "title": "Harvest gradually",
        "description": "Kumquats hold well on the tree for weeks to months once ripe. A single backyard tree can produce more than a household uses. Pick as you need them, moving around the tree rather than stripping one side. The tree itself is the best storage."
      },
      {
        "stepNumber": 5,
        "title": "Snip with pruners",
        "description": "Use pruners or kitchen scissors to snip the stem close to the fruit. Kumquats have relatively thick short stems — pulling can detach the fruit but often tears the calyx (the little green cap) and shortens shelf life."
      },
      {
        "stepNumber": 6,
        "title": "Store briefly, preserve for longer",
        "description": "Kumquats keep 1 week at room temperature, 2–3 weeks in the refrigerator. For longer storage, slice and freeze (great for cocktails and cooking), or make marmalade — the whole-fruit character makes kumquat marmalade distinctive.",
        "tip": "Roll a kumquat between your palms before eating to mix the peel oil and juice — it releases more aroma and softens the first bite."
      }
    ],
    "toolsNeeded": [
      "Bypass pruners or sharp scissors",
      "Harvest basket",
      "Step stool (optional — kumquats are usually small trees)"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from UF/IFAS EDIS ''Fortunella spp., Kumquat'' (FOR300/FR368 — both pulp and rind are edible, whole-fruit consumption, fruit matures October through March, smaller tree size, container suitability). Nagami vs Meiwa character drawn from UF/IFAS EDIS general citrus dooryard-variety guidance."
  }'::jsonb,
  'UF/IFAS EDIS',
  'Kumquat',
  'harvesting',
  true
);
