import type { TaskTemplate } from "./index";

/**
 * Tangerine (`Citrus reticulata` — mandarin family). Sibling to
 * mandarin; the standout quirk is alternate bearing, which
 * recommends fruit thinning in heavy years to smooth the cycle.
 */
export const tangerine: TaskTemplate[] = [
  {
    id: "tangerine-spring-feeding",
    fruitType: "Tangerine",
    title: "Pre-bloom feeding",
    why: "Tangerines flower in early spring; nitrogen from a pre-bloom feed supports flower set and early fruit development.",
    description:
      "Apply a citrus-specific fertilizer (6-6-6 or 8-8-8 for young trees, 10-10-10 for mature) with micronutrients. Split the annual total into 3–5 applications; this is the largest.",
    category: "feeding",
    windowStart: { month: 2, day: 1 },
    windowEnd: { month: 2, day: 28 },
    source: "UF/IFAS EDIS — Citrus Culture in the Home Landscape",
  },
  {
    id: "tangerine-summer-feeding",
    fruitType: "Tangerine",
    title: "Summer feeding",
    why: "A mid-season feeding sustains fruit sizing through summer heat.",
    description:
      "Apply a second citrus fertilizer dose in May or June. Mulch 2–3 inches deep at the drip line to hold moisture.",
    category: "feeding",
    windowStart: { month: 5, day: 15 },
    windowEnd: { month: 6, day: 15 },
    source: "UF/IFAS EDIS — Citrus Culture in the Home Landscape",
  },
  {
    id: "tangerine-fruit-thinning",
    fruitType: "Tangerine",
    title: "Heavy-year thinning",
    why: "Tangerines are prone to alternate bearing — thinning in a heavy year smooths the next year's crop and improves size.",
    description:
      "In June, if the tree has set an unusually heavy crop, remove about 1 in 4 fruitlets. Pick the smallest and any double fruit. This prevents limb breakage and pulls the tree out of a heavy/light bearing cycle.",
    category: "monitoring",
    // Fruit-thinning is physical (hand-thinning), not pest-related — opt out of
    // the category "monitoring" → pest-control product default.
    productKinds: [],
    windowStart: { month: 6, day: 1 },
    windowEnd: { month: 6, day: 28 },
    source: "UF/IFAS EDIS — Citrus Culture in the Home Landscape",
  },
  {
    id: "tangerine-frost-protection",
    fruitType: "Tangerine",
    title: "Frost protection",
    why: "Tangerines begin to suffer below 28°F for more than a few hours.",
    description:
      "Before a freeze, water soil deeply, drape sheets or frost cloth on a frame so leaves don't touch the cover, and add incandescent lights in the canopy for extra heat. Remove covers in the morning.",
    category: "protection",
    windowStart: { month: 11, day: 15 },
    windowEnd: { month: 12, day: 15 },
    source: "UC IPM — Freezing and Frost Damage to Citrus; UC ANR Publication 8100",
  },
  {
    id: "tangerine-harvest",
    fruitType: "Tangerine",
    title: "Tangerine harvest",
    why: "Tangerines and mandarins ripen by taste, not color — loose peel is a hallmark of full ripeness.",
    description:
      "Taste-test before committing. A ripe tangerine peels away in one pull and is sweet throughout. Harvest runs fall through winter depending on variety. Pick by snipping with pruners or gentle twist.",
    category: "harvesting",
    windowStart: { month: 12, day: 1 },
    windowEnd: { month: 12, day: 28 },
    source: "UF/IFAS EDIS — Citrus Culture in the Home Landscape; UC ANR — Use Taste Rather Than Rind Color",
  },
];
