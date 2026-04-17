-- Phase E: per-task guides for Pawpaw (Asimina triloba).
--
-- Templates in lib/care/task-templates/pawpaw.ts — 2 categories.
-- Pruning, feeding, and protection are INTENTIONALLY SKIPPED because
-- US cooperative extension sources (Ohio State, Penn State, Purdue)
-- do not provide a home-orchard pruning cadence, fertilizer
-- schedule, or frost-protection protocol for pawpaw. Shipping guides
-- for those categories would violate the CLAUDE.md rule that care
-- recommendations must cite a defensible source. Overview guide
-- covers general fallback:
--   monitoring  → Hand pollination for fruit set (the #1 home-grower
--                 task for pawpaw — insect pollination is unreliable)
--   harvesting  → Soft-squeeze harvest in a tight September window
--
-- Coverage flagged in all-phases.md''s Revisit section.
--
-- Sources: Ohio State Ohioline ANR-0187 (Pawpaws: An Alternative
-- Fruit Crop in the Midwest), Penn State Extension (The Native
-- Pawpaw Tree; Pawpaw Fruit in the Garden and the Kitchen), Purdue
-- Extension (Pawpaw – the Indiana Banana?).

insert into public.guides (id, content, source, tree_type, task_category, approved)
values
(
  'pawpaw-monitoring',
  '{
    "treeType": "Pawpaw",
    "title": "Pawpaw Hand Pollination for Fruit Set",
    "introduction": "Pawpaws are pollinated by flies and early-emerging beetles — not bees. Natural pollination is notoriously unreliable, and many home pawpaws bloom heavily for years without ever setting fruit. Hand pollination with a small brush, transferring pollen between two genetically different cultivars, is the single biggest lever on whether you get a crop. This is the one task that separates fruiting pawpaws from empty ones.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Confirm you have two different cultivars",
        "description": "Pawpaw is self-incompatible — two trees of the same cultivar will not pollinate each other. You need at least two genetically different cultivars: e.g. ''Shenandoah'' and ''Susquehanna'', or ''Davis'' and ''NC-1'', or ''Potomac'' and ''Allegheny''. Seedling trees from different parents also work. If you''re not sure whether your two trees are the same cultivar, call the nursery you bought them from — it matters."
      },
      {
        "stepNumber": 2,
        "title": "Wait for flowers to open (April–May)",
        "description": "Pawpaw flowers open over 2–3 weeks in late April through May depending on your zone. The flowers are distinctive: dark maroon-purple, 1–2 inches across, hanging downward. Check daily once you see the first flowers. The female parts mature first (receptive), then the male parts release pollen later — this timing mismatch is one reason insect pollination fails."
      },
      {
        "stepNumber": 3,
        "title": "Identify the receptive female stage",
        "description": "A flower is ready to receive pollen when the inner petals are open to form a cup shape and the stigmas (central green/yellow structures) look glossy and sticky. Pollen-shedding male stage comes later, after the stigmas have dried. You want to apply pollen to a flower in the female-receptive stage."
      },
      {
        "stepNumber": 4,
        "title": "Collect pollen from the other cultivar",
        "description": "On a flower of your SECOND cultivar, find one that''s in the male stage — stamens releasing visible yellow-tan pollen. Use a small soft-bristled brush (a model-paint brush or a small makeup brush) to gently touch the pollen — it should cling to the bristles."
      },
      {
        "stepNumber": 5,
        "title": "Paint pollen onto the receptive female flower",
        "description": "Move to the first cultivar''s receptive flower. Dab the pollen-loaded brush onto the sticky stigmas. Be gentle — bruised flowers abort. Pollinate 5–10 flowers per tree per visit. Then reverse direction: collect pollen from the first cultivar''s male-stage flowers and paint it onto receptive flowers on the second cultivar. Cross-pollination works in both directions."
      },
      {
        "stepNumber": 6,
        "title": "Repeat every 2–3 days through bloom",
        "description": "Come back every 2–3 days while flowers are opening (typically a 2–3 week window). Hand-pollinated flowers will abort initial fruit heavily in June (''June drop''), but those that stick swell through summer. A single successfully pollinated flower can set a cluster of 2–6 fruits. Expect pollination success of 20–40% with consistent hand work — that''s plenty for a home crop.",
        "tip": "Some growers supplement fly attraction with hanging roadkill or spoiled meat near the tree during bloom. It works — pawpaw flowers evolved to smell like rotting meat to attract fly pollinators — but is obviously impractical for most backyards. Hand pollination is the civilized option."
      }
    ],
    "toolsNeeded": [
      "Small soft-bristled brush (model-paint or makeup brush)",
      "Small container for holding pollen between flowers (optional)",
      "Ladder if trees are tall enough to need one"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Ohio State Ohioline ''Pawpaws: An Alternative Fruit Crop in the Midwest'' (ANR-0187). Direct guidance on cross-pollination requirement: ''an established orchard or woodland must have two or more genetically different trees for flowers to pollinate and bear fruit'' and ''an unfortunate and common mistake made by inexperienced growers is establishing an orchard using a single pawpaw variety.'' Fly-and-beetle pollinator ecology and the rotting-meat flower-scent note cross-referenced with Penn State Extension ''The Native Pawpaw Tree'' and Purdue Extension ''Pawpaw – the Indiana Banana?''. Recommended cultivars (Shenandoah, Susquehanna, Davis, NC-1, Potomac, Allegheny) drawn from the Ohio State publication."
  }'::jsonb,
  'Ohio State Ohioline; Penn State Extension',
  'Pawpaw',
  'monitoring',
  true
),
(
  'pawpaw-harvesting',
  '{
    "treeType": "Pawpaw",
    "title": "Pawpaw Harvest (Short September Window)",
    "introduction": "Pawpaw ripens in a tight 3–5 week window in September, and tree-ripened fruit keeps only 3–5 days at room temperature before going soft-past-eating. Miss the window and you lose the crop. The only reliable ripeness test is feel: a ripe pawpaw gives to gentle squeezing, like a ripe peach. Color change (greenish to slightly yellow-green) and black skin blotches follow but aren''t required — many ripe pawpaws stay green.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Know your zone''s typical window",
        "description": "Pawpaw ripens late August in the southern end of its range (Tennessee, Kentucky, Georgia), mid-September in the Midwest and Mid-Atlantic (Ohio, Pennsylvania, Virginia), and late September into early October in the northern end (Michigan, New York). Mark the expected window on a calendar and start checking daily 1–2 weeks before."
      },
      {
        "stepNumber": 2,
        "title": "Check daily once the first fruit softens",
        "description": "The harvest moves fast. Once one fruit on the tree gives to squeezing, the rest follow within days. Walk the tree every morning during the window and gently press each accessible fruit."
      },
      {
        "stepNumber": 3,
        "title": "The ripeness test: gentle squeeze",
        "description": "A ripe pawpaw gives slightly to gentle pressure — similar to a peach or avocado at eating stage. An underripe pawpaw is rock-hard. Too-ripe pawpaw is mushy and may smell over-fermented. The sweet spot is brief: 1–2 days per fruit."
      },
      {
        "stepNumber": 4,
        "title": "Black blotches and color change are NOT required",
        "description": "Some ripe pawpaws develop dark spots or black blotches on the skin — this is normal ripening, not a defect or disease. Some cultivars yellow slightly at full ripeness. But many pawpaws stay solidly green even when perfectly ripe. Don''t wait for color — rely on feel."
      },
      {
        "stepNumber": 5,
        "title": "Pick by lifting and twisting",
        "description": "A ripe pawpaw detaches easily from the peduncle (short fruiting stalk) with a gentle lift-and-twist motion. If it resists, leave it another day. Drop fruit into a soft-lined basket — pawpaw bruises easily and any impact darkens the flesh under the skin."
      },
      {
        "stepNumber": 6,
        "title": "Eat within 3–5 days or freeze",
        "description": "Tree-ripened pawpaw keeps 3–5 days at room temperature, about a week refrigerated. For longer storage, scoop the yellow pulp from picked fruit, pack it into freezer bags or jars, and freeze. Frozen pulp keeps 6–12 months and works beautifully in smoothies, quick breads, and ice cream. Pawpaw does not store fresh — freezing is the preservation option.",
        "tip": "Pawpaw seeds are large (lima-bean-sized) and should not be eaten. The pulp around them is excellent; the seeds themselves contain alkaloids and mildly upset some stomachs. Spit them out like cherry pits."
      }
    ],
    "toolsNeeded": [
      "Soft-lined picking basket",
      "Ladder if fruit is high in canopy",
      "Freezer bags or jars for pulp storage",
      "Spoon for scooping pulp from picked fruit"
    ],
    "productRecommendations": [],
    "researchNotes": "Compiled from Ohio State Ohioline ''Pawpaws: An Alternative Fruit Crop in the Midwest'' (ANR-0187). Direct quote on harvest window: ''In Ohio, pawpaw fruit typically ripen in September in a rather short harvest window of three to five weeks depending on weather conditions and the cultivar.'' Room-temperature shelf-life (''three to five days at room temperature'') and squeeze-test ripeness indicator drawn from Penn State Extension ''The Native Pawpaw Tree'' (''The true indicator of when a fruit is ready to pick is that it will feel soft when gently squeezed'') and Penn State Extension ''Pawpaw Fruit in the Garden and the Kitchen''. Black-blotch normal-ripening note and seed inedibility cross-referenced with Purdue Extension ''Pawpaw – the Indiana Banana?''. Pawpaw extension coverage is thin — per CLAUDE.md rules, Phase E intentionally omits pruning/feeding/protection categories rather than invent unsourced advice (flagged in docs/plans/batch-generated-guides/all-phases.md''s Revisit section)."
  }'::jsonb,
  'Ohio State Ohioline; Penn State Extension',
  'Pawpaw',
  'harvesting',
  true
);
