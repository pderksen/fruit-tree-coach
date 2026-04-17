import type { TaskTemplate } from "./index";

/**
 * Grapefruit (`Citrus × paradisi`). Largest citrus tree in the home
 * orchard — heavy yields and a long holding window on the tree.
 * Grapefruit tolerate zone 9a+ reliably, so the protection category
 * is skipped in favor of heavier feeding coverage.
 */
export const grapefruit: TaskTemplate[] = [
  {
    id: "grapefruit-spring-feeding",
    fruitType: "Grapefruit",
    title: "Pre-bloom feeding",
    why: "Grapefruit carry heavy crops and need strong nitrogen reserves before bloom.",
    description:
      "Apply a citrus-specific fertilizer with micronutrients in a ring from 1 ft outside the trunk to past the drip line. Mature trees take 3–4 lbs of fertilizer per application, 2–3 times per year. Water in thoroughly.",
    category: "feeding",
    windowStart: { month: 2, day: 1 },
    windowEnd: { month: 2, day: 28 },
    source: "UF/IFAS EDIS — Citrus Culture in the Home Landscape",
  },
  {
    id: "grapefruit-summer-feeding",
    fruitType: "Grapefruit",
    title: "Summer feeding",
    why: "Fruit sizing runs through summer — a second feeding supports the crop without pushing tender fall growth.",
    description:
      "Apply a second citrus fertilizer dose in May or June. Keep fertilizer off the trunk; water deeply after. Mulch 2–3 inches at the drip line to retain moisture in hot weather.",
    category: "feeding",
    windowStart: { month: 5, day: 15 },
    windowEnd: { month: 6, day: 15 },
    source: "UF/IFAS EDIS — Citrus Culture in the Home Landscape",
  },
  {
    id: "grapefruit-pest-inspection",
    fruitType: "Grapefruit",
    title: "Citrus pest inspection",
    why: "Scale, aphid, leafminer, and Asian citrus psyllid all feed on citrus flushes — grapefruit are susceptible to HLB.",
    description:
      "Check new flushes every 2–3 weeks spring through fall. Look for sticky leaves, black sooty mold, small bumps on stems, silvery leaf trails. Report suspected HLB (blotchy mottled leaves, misshapen fruit) to your local extension.",
    category: "monitoring",
    windowStart: { month: 4, day: 1 },
    windowEnd: { month: 4, day: 28 },
    source: "UC IPM — Citrus Pest Management; UC IPM Asian Citrus Psyllid",
  },
  {
    id: "grapefruit-harvest",
    fruitType: "Grapefruit",
    title: "Grapefruit harvest",
    why: "Grapefruit sweetens with time on the tree and holds well for months — pick as you need it.",
    description:
      "Harvest begins in November and continues into spring for most varieties. Taste-test before picking — color alone is not a reliable signal. Snip ripe fruit with pruners; leaving the rest on the tree lets it sweeten further.",
    category: "harvesting",
    windowStart: { month: 11, day: 15 },
    windowEnd: { month: 12, day: 15 },
    source: "UF/IFAS EDIS — Citrus Culture in the Home Landscape; Clemson HGIC — In-Ground Citrus Production",
  },
];
