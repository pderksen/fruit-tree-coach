import type { TaskTemplate } from "./index";

/**
 * Guava (Psidium guajava). South Florida / CA coastal subtropical.
 * Size control is the headline — guava tolerates hard pruning
 * anytime except Nov–Feb. Caribbean fruit fly is the one real pest,
 * controlled by paper-bagging individual fruit at 1-inch size.
 * Harvest cue is color (pink/red → peel yellows; white → stays
 * green). Sources: UF/IFAS EDIS HS4/MG045 (Guava Growing in the
 * Florida Home Landscape), UF/IFAS EDIS ENY-412/IG072 (Guava Pests
 * and Beneficial Insects).
 */
export const guava: TaskTemplate[] = [
  {
    id: "guava-size-control-pruning",
    fruitType: "Guava",
    title: "Size-control pruning",
    why: "Guava grows fast — a tree left alone hits 12+ ft and fruit becomes unreachable. Regular pruning keeps it picking-height and encourages flowering.",
    description:
      "Prune in late winter after the last freeze risk (late February–March in Florida). On a young tree, head back to 1–2 ft to force branching, then select 3–4 lateral scaffolds and tip them at 24–36 inches. On a bearing tree, keep height at 3–6 ft for easy harvest (or let it grow to 6–12 ft if tall tools are fine). Cut anywhere — guava is very pruning-tolerant. Avoid heavy cuts November through February to prevent frost damage on fresh wounds.",
    category: "pruning",
    windowStart: { month: 2, day: 15 },
    windowEnd: { month: 3, day: 31 },
    source: "UF/IFAS EDIS — Guava Growing in the Florida Home Landscape (HS4/MG045)",
  },
  {
    id: "guava-feeding",
    fruitType: "Guava",
    title: "Bearing-year feeding",
    why: "Guava fruits heavily and pulls nutrients hard through the fruit-development window — scheduled feeding keeps the crop sizing up.",
    description:
      "For young trees, apply 1/4 to 1 lb of a 6-6-6-2 or 8-3-9-2 fertilizer every 1–2 months through the first year, increasing the rate as the tree grows. For mature trees, split 3–4 applications across the year, total not exceeding 20 lbs per tree per year. Time the first application at flowering and the second at the end of the main summer harvest. Add 3–4 micronutrient foliar sprays (copper, zinc, manganese, boron) spring through summer.",
    category: "feeding",
    windowStart: { month: 3, day: 1 },
    windowEnd: { month: 4, day: 15 },
    source: "UF/IFAS EDIS — Guava Growing in the Florida Home Landscape (HS4/MG045)",
  },
  {
    id: "guava-fruit-fly-bagging",
    fruitType: "Guava",
    title: "Caribbean fruit fly bagging",
    why: "Caribbean fruit fly (Anastrepha suspensa) ruins more Florida guava than any other pest — bagging each fruit at 1-inch size is the only reliable home-grower control.",
    description:
      "Walk the tree weekly starting in late May. When a fruit reaches about 1 inch in diameter, slip a small paper bag (the kind sold for apple/peach bagging, or a brown lunch bag with the corners folded) over it and tie loose at the stem. The bag is a physical barrier; females can't lay eggs through it. Repeat as new fruit enlarges through the summer main crop. Bags come off at harvest — they don't impede ripening. Pick up and bag any dropped fruit — fallen guava breeds next year's flies.",
    category: "monitoring",
    windowStart: { month: 5, day: 15 },
    windowEnd: { month: 7, day: 31 },
    source: "UF/IFAS EDIS — Guava Pests and Beneficial Insects (ENY-412/IG072)",
  },
  {
    id: "guava-harvest",
    fruitType: "Guava",
    title: "Guava harvest by variety color",
    why: "Pink/red-fleshed and white-fleshed guavas have opposite harvest cues — picking by the wrong standard gives you either an under-ripe fruit or a rotting one.",
    description:
      "Florida's main crop ripens in summer with a smaller early-spring pick. For pink or red guava, pick when the peel turns light green to yellow — the fruit finishes softening at room temperature in 2–3 days. For white-fleshed (crunchy-style) guava, pick while still full-sized and green to light-green; the crunch is the point and yellowing means it's gone past prime. Ripe guava keeps 5–7 days refrigerated. Expect first fruit in years 3–4 from planting.",
    category: "harvesting",
    windowStart: { month: 7, day: 1 },
    windowEnd: { month: 9, day: 30 },
    source: "UF/IFAS EDIS — Guava Growing in the Florida Home Landscape (HS4/MG045)",
  },
];
