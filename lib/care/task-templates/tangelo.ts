import type { TaskTemplate } from "./index";

/**
 * Tangelo (mandarin × grapefruit/pummelo hybrid — commonly Minneola
 * a.k.a. Honeybell). Two species-level quirks: needs a compatible
 * pollenizer nearby (Temple, Sunburst, or Fallglo) for reliable fruit
 * set; especially vulnerable to Alternaria brown spot on young leaves
 * and fruit.
 */
export const tangelo: TaskTemplate[] = [
  {
    id: "tangelo-spring-feeding",
    fruitType: "Tangelo",
    title: "Pre-bloom feeding",
    why: "Tangelos flower in spring and rely on built-up nitrogen reserves for reliable fruit set — especially important given Minneola's pollenizer dependence.",
    description:
      "Apply a complete citrus fertilizer (6-6-6 or 8-8-8) with micronutrients. Young trees: ~1 tablespoon actual nitrogen per month May through August. Mature trees: up to 1 lb actual nitrogen per year, split across 2–3 applications. Spread to the drip line.",
    category: "feeding",
    windowStart: { month: 2, day: 1 },
    windowEnd: { month: 2, day: 28 },
    source: "UF/IFAS EDIS — Citrus Culture in the Home Landscape; UF/IFAS EDIS — Minneola Tangelo",
  },
  {
    id: "tangelo-summer-feeding",
    fruitType: "Tangelo",
    title: "Summer feeding",
    why: "Fruit sizing requires a mid-season feeding — Minneola's bell-shaped fruit needs sustained nutrition.",
    description:
      "Apply the second split of citrus fertilizer in late spring or early summer. In Florida, 8-8-8 or 6-6-6 every six weeks February through October is a common home-grower pattern.",
    category: "feeding",
    windowStart: { month: 5, day: 15 },
    windowEnd: { month: 6, day: 15 },
    source: "UF/IFAS EDIS — Citrus Culture in the Home Landscape",
  },
  {
    id: "tangelo-alternaria-watch",
    fruitType: "Tangelo",
    title: "Alternaria brown spot + pest watch",
    why: "Minneola is especially susceptible to Alternaria brown spot — dark spots on young leaves and fruit that cause defoliation and crop loss.",
    description:
      "Scout new flushes in spring for small dark spots on tender leaves and young fruit. In problem areas, time preventive copper fungicide applications to each new growth flush. Rake and remove fallen leaves and fruit — both carry the fungus through the off-season. Also watch for the standard citrus pest complex (scale, aphid, leafminer).",
    category: "monitoring",
    windowStart: { month: 4, day: 1 },
    windowEnd: { month: 4, day: 28 },
    source: "UF/IFAS EDIS — Minneola Tangelo; UF/IFAS — Alternaria Brown Spot",
  },
  {
    id: "tangelo-frost-protection",
    fruitType: "Tangelo",
    title: "Frost protection",
    why: "Tangelos are moderately cold-tender — Minneola fruit won't finish ripening before mid-winter freeze risk in the coldest parts of Florida.",
    description:
      "Before a freeze, water soil deeply, drape sheets or frost cloth (not plastic) on a frame, and add incandescent lights in the canopy for extra heat. Pick any ripe fruit before a hard freeze.",
    category: "protection",
    windowStart: { month: 11, day: 15 },
    windowEnd: { month: 12, day: 15 },
    source: "UC IPM — Freezing and Frost Damage to Citrus; UC ANR Publication 8100",
  },
  {
    id: "tangelo-harvest",
    fruitType: "Tangelo",
    title: "Tangelo harvest",
    why: "Minneola ripens December–February; leaving fruit too long on the tree increases drop and Alternaria risk.",
    description:
      "Harvest when fruit reaches deep reddish-orange color, full bell shape with the characteristic neck, and a 3–3.5 inch size. Taste-test to confirm sweetness. Twist gently or snip flush with the stem.",
    category: "harvesting",
    windowStart: { month: 12, day: 15 },
    windowEnd: { month: 1, day: 15 },
    source: "UF/IFAS EDIS — Minneola Tangelo",
  },
];
