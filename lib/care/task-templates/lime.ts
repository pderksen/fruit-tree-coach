import type { TaskTemplate } from "./index";

/**
 * Lime (Persian `Citrus × latifolia` and Key `Citrus aurantiifolia`).
 * Least cold-hardy of common citrus — the protection template is the
 * most important species-level flag. Persian limes picked green;
 * Key limes picked yellow.
 */
export const lime: TaskTemplate[] = [
  {
    id: "lime-spring-feeding",
    fruitType: "Lime",
    title: "Spring feeding",
    why: "Limes are heavy feeders and need consistent micronutrients, especially in containers where nutrients leach.",
    description:
      "Apply a citrus-specific fertilizer (with iron, zinc, manganese) when new growth starts in spring. In ground: spread in a ring to the drip line. In containers: small amounts every 6–8 weeks.",
    category: "feeding",
    windowStart: { month: 3, day: 1 },
    windowEnd: { month: 3, day: 28 },
    source: "UF/IFAS EDIS — Key Lime Growing in the Florida Home Landscape",
  },
  {
    id: "lime-summer-feeding",
    fruitType: "Lime",
    title: "Summer feeding",
    why: "Sustained fruit development through summer requires a second feeding.",
    description:
      "Apply a second round of citrus fertilizer in late spring or early summer. Water deeply before and after. Container trees get lighter, more frequent doses than in-ground trees.",
    category: "feeding",
    windowStart: { month: 5, day: 15 },
    windowEnd: { month: 6, day: 15 },
    source: "Clemson HGIC — Container Citrus Production",
  },
  {
    id: "lime-pest-inspection",
    fruitType: "Lime",
    title: "Citrus pest inspection",
    why: "Limes attract the same citrus pest complex as lemons — aphids, scale, leafminer.",
    description:
      "Check new flush for sticky leaves, small bumps (scale), curled or silvery-trailed leaves (leafminer). Treat light infestations with insecticidal soap or horticultural oil; avoid heavy systemic insecticides on flowering trees to protect bees.",
    category: "monitoring",
    windowStart: { month: 4, day: 1 },
    windowEnd: { month: 4, day: 28 },
    source: "UC IPM — Citrus Pest Management Guidelines",
  },
  {
    id: "lime-frost-protection",
    fruitType: "Lime",
    title: "Frost protection",
    why: "Limes are the most cold-sensitive common citrus — damage starts in the low 30s °F on tender growth.",
    description:
      "Move container limes to shelter before any frost is forecast. For in-ground trees, water soil deeply, drape sheets or frost cloth on a frame, and clamp Christmas lights (incandescent) in the canopy for extra warmth.",
    category: "protection",
    windowStart: { month: 11, day: 15 },
    windowEnd: { month: 12, day: 15 },
    source: "UC ANR Publication 8100 — Frost Protection for Citrus and Other Subtropicals",
  },
  {
    id: "lime-harvest",
    fruitType: "Lime",
    title: "Lime harvest",
    why: "Persian limes picked green at full size; Key limes picked yellow.",
    description:
      "Persian (Tahiti) limes are at peak when fully sized, dark green, and slightly yielding — they turn yellow if left too long. Key limes are ripe when fully yellow. Snip with pruners; limes do not sweeten after picking.",
    category: "harvesting",
    windowStart: { month: 7, day: 15 },
    windowEnd: { month: 8, day: 15 },
    source: "UF/IFAS EDIS — Key Lime Growing in the Florida Home Landscape",
  },
];
