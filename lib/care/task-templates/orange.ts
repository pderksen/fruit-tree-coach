import type { TaskTemplate } from "./index";

/**
 * Orange (sweet, Citrus sinensis). Care follows the general citrus
 * pattern: 3–4× feeding Feb–Sep, recurring pest inspection, frost
 * protection in marginal zones, variety-staggered harvest.
 *
 * Harvest windows target the broad backyard case — Hamlin + midseason
 * varieties peak Nov–Feb; Valencia stretches into late spring. The
 * template uses December (the universal peak) and the overview guide
 * + per-task guide call out variety-specific timing.
 */
export const orange: TaskTemplate[] = [
  {
    id: "orange-spring-feeding",
    fruitType: "Orange",
    title: "Pre-bloom feeding",
    why: "Oranges flower in spring and pull heavily on nitrogen reserves through fruit set.",
    description:
      "Apply a citrus-specific fertilizer with micronutrients in a ring from 1 ft outside the trunk to past the drip line. Water in thoroughly. This is the biggest of 3–4 split feedings through the growing season.",
    category: "feeding",
    windowStart: { month: 2, day: 1 },
    windowEnd: { month: 2, day: 28 },
    source: "UF/IFAS EDIS — Citrus Culture in the Home Landscape",
  },
  {
    id: "orange-summer-feeding",
    fruitType: "Orange",
    title: "Summer feeding",
    why: "Fruit sizing through summer burns through reserves laid down in spring.",
    description:
      "Apply a second round of citrus fertilizer in May or June. Keep granules off the trunk; water in deeply. Lighter rate than the spring feeding.",
    category: "feeding",
    windowStart: { month: 5, day: 15 },
    windowEnd: { month: 6, day: 15 },
    source: "UF/IFAS EDIS — Citrus Culture in the Home Landscape",
  },
  {
    id: "orange-pest-inspection",
    fruitType: "Orange",
    title: "Citrus pest inspection",
    why: "Aphids, scale, and citrus leafminer flare on new flushes; Asian citrus psyllid spreads HLB.",
    description:
      "Check new growth for sticky leaves, black sooty mold, small bumps on stems, or silvery leaf-tunnels. Inspect monthly spring through fall. Report suspected HLB symptoms (blotchy mottled leaves, misshapen fruit) to your local extension.",
    category: "monitoring",
    windowStart: { month: 4, day: 1 },
    windowEnd: { month: 4, day: 28 },
    source: "UC IPM — Asian Citrus Psyllid; UC IPM Citrus Pest Management",
  },
  {
    id: "orange-frost-protection",
    fruitType: "Orange",
    title: "Frost protection check",
    why: "Oranges start to suffer below 28°F for more than a few hours — cover before the first hard freeze.",
    description:
      "Before a freeze event, water soil deeply (moist soil holds heat better than dry), drape the canopy with sheets or frost cloth (not plastic) on a frame so leaves don't touch the cover, and remove covers in the morning.",
    category: "protection",
    windowStart: { month: 11, day: 15 },
    windowEnd: { month: 12, day: 15 },
    source: "UC IPM — Freezing and Frost Damage to Citrus; UC ANR Publication 8100",
  },
  {
    id: "orange-harvest",
    fruitType: "Orange",
    title: "Orange harvest",
    why: "Oranges don't sweeten after picking — taste-test before committing to harvest.",
    description:
      "Pick a sample fruit and taste. If sweet, snip ripe fruit with pruners or scissors rather than pulling (pulling tears bark). Peak for Hamlin/midseason varieties is Dec–Feb; Valencia runs Apr–Jul.",
    category: "harvesting",
    windowStart: { month: 12, day: 1 },
    windowEnd: { month: 12, day: 28 },
    source: "UF/IFAS EDIS — Citrus Culture in the Home Landscape; UC Master Gardeners — Growing Great Citrus",
  },
];
