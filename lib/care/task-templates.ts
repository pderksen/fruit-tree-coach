/**
 * Care task templates keyed by species.
 *
 * Each template declares a seasonal window as month/day pairs. The
 * date-aware layer in `task-windows.ts` uses today's date to pick which
 * templates surface as active / upcoming / late.
 *
 * Sources are cited per CLAUDE.md — all horticultural advice must be
 * defensible. Windows are typical-zone ranges from the cited extension
 * guides; zone shift is intentionally deferred (see plan doc).
 */

import type { FruitTreeType, TaskCategory } from "@/lib/types";
import type { MonthDay } from "@/lib/care/task-windows";

export interface TaskTemplate {
  id: string;
  species: FruitTreeType;
  title: string;
  why: string;
  description: string;
  category: TaskCategory;
  windowStart: MonthDay;
  windowEnd: MonthDay;
  source: string;
}

const apple: TaskTemplate[] = [
  {
    id: "apple-winter-pruning",
    species: "Apple",
    title: "Winter pruning",
    why: "Removing crossing branches improves air circulation and reduces disease risk.",
    description:
      "The sap is still dormant, making it the perfect time to shape your tree. Focus on removing the three Ds: Dead, Damaged, or Diseased branches.",
    category: "pruning",
    windowStart: { month: 2, day: 1 },
    windowEnd: { month: 2, day: 14 },
    source: "Oregon State University Extension — PNW 400",
  },
  {
    id: "apple-dormant-oil",
    species: "Apple",
    title: "Dormant oil spray",
    why: "Smothers overwintering scale, mites, and aphid eggs before they hatch.",
    description:
      "Apply horticultural oil when temps are above 40 °F and the tree is still dormant. Coat all bark surfaces thoroughly.",
    category: "protection",
    windowStart: { month: 2, day: 15 },
    windowEnd: { month: 2, day: 28 },
    source: "Oregon State Extension — Dormant Season Pest Control",
  },
  {
    id: "apple-spring-feeding",
    species: "Apple",
    title: "Organic fertilizing",
    why: "Supports healthy spring growth and fruit set.",
    description: "Apply compost around the drip line before bloom.",
    category: "feeding",
    windowStart: { month: 3, day: 15 },
    windowEnd: { month: 3, day: 28 },
    source: "WSU Extension — Home Orchard Fertility",
  },
  {
    id: "apple-thinning",
    species: "Apple",
    title: "Thinning fruits",
    why: "Prevents limb breakage and ensures larger fruit size.",
    description:
      "Remove excess fruit to prevent branch breakage and ensure the remaining fruit grows larger and sweeter.",
    category: "monitoring",
    windowStart: { month: 5, day: 20 },
    windowEnd: { month: 6, day: 2 },
    source: "University of Minnesota Extension — apple thinning guide",
  },
  {
    id: "apple-harvest-check",
    species: "Apple",
    title: "Harvest readiness check",
    why: "Picking at the right time ensures best flavor and storage life.",
    description:
      "Use the stem-twist test: cradle the apple and twist gently. If it separates easily, it's ready. Check seed color (dark brown = ripe) and flesh firmness.",
    category: "harvesting",
    windowStart: { month: 9, day: 1 },
    windowEnd: { month: 9, day: 14 },
    source: "University of Minnesota Extension — Harvesting Apples",
  },
];

const peach: TaskTemplate[] = [
  {
    id: "peach-leaf-curl-prevention",
    species: "Peach",
    title: "Peach leaf curl prevention",
    why: "Leaf curl fungus overwinters on bark — a single well-timed spray prevents it.",
    description:
      "Apply copper fungicide before bud break when buds are still dormant. One thorough application is usually sufficient for the season.",
    category: "protection",
    windowStart: { month: 1, day: 15 },
    windowEnd: { month: 1, day: 28 },
    source: "UC IPM — Peach Leaf Curl",
  },
  {
    id: "peach-winter-pruning",
    species: "Peach",
    title: "Peach tree pruning",
    why: "Peaches fruit on last year's wood — annual pruning encourages fresh fruiting wood.",
    description:
      "Prune to an open-vase shape. Remove inward-growing branches and last year's fruiting wood to encourage new growth.",
    category: "pruning",
    windowStart: { month: 2, day: 1 },
    windowEnd: { month: 2, day: 14 },
    source: "University of Georgia Extension — Peach Pruning",
  },
  {
    id: "peach-bud-monitoring",
    species: "Peach",
    title: "Bud monitoring",
    why: "Early detection of bud swell helps time pest sprays.",
    description:
      "Watch for pink bud tips — that signals the tree is breaking dormancy. A well-timed dormant oil spray now prevents scale and mite issues later.",
    category: "monitoring",
    windowStart: { month: 2, day: 20 },
    windowEnd: { month: 3, day: 5 },
    source: "Clemson Cooperative Extension — Peach Care Calendar",
  },
  {
    id: "peach-bloom-thinning",
    species: "Peach",
    title: "Bloom and fruit thinning",
    why: "Thinning early produces larger, sweeter peaches and protects limbs.",
    description:
      "Once fruit reaches marble size, thin to leave 6–8 inches between peaches. Remove any doubles and smaller fruit first.",
    category: "monitoring",
    windowStart: { month: 4, day: 1 },
    windowEnd: { month: 4, day: 14 },
    source: "Clemson Cooperative Extension — Peach Thinning",
  },
  {
    id: "peach-harvest",
    species: "Peach",
    title: "Harvest window",
    why: "Peaches don't improve after picking — timing is everything.",
    description:
      "Check for full color change (no green on the ground color), slight softness when pressed near the stem, and a sweet fragrance. Twist gently to pick.",
    category: "harvesting",
    windowStart: { month: 7, day: 1 },
    windowEnd: { month: 7, day: 14 },
    source: "Clemson Extension — Peach Harvest",
  },
];

const lemon: TaskTemplate[] = [
  {
    id: "lemon-spring-feeding",
    species: "Lemon",
    title: "Spring feeding",
    why: "Citrus are heavy feeders and need consistent nutrition.",
    description:
      "Apply a balanced citrus fertilizer. Meyer lemons benefit from micronutrients like iron and zinc, especially in alkaline soils.",
    category: "feeding",
    windowStart: { month: 3, day: 1 },
    windowEnd: { month: 3, day: 14 },
    source: "UC Davis — Citrus for the Home Garden",
  },
  {
    id: "lemon-pest-inspection",
    species: "Lemon",
    title: "Scale and aphid inspection",
    why: "Early detection prevents colonies from establishing and weakening the tree.",
    description:
      "Check undersides of leaves and stems for sticky honeydew, sooty mold, or small bumps (scale). Treat with neem oil or insecticidal soap if found.",
    category: "monitoring",
    windowStart: { month: 4, day: 1 },
    windowEnd: { month: 4, day: 14 },
    source: "UC Davis — Citrus Pest Management",
  },
  {
    id: "lemon-summer-feeding",
    species: "Lemon",
    title: "Summer feeding",
    why: "Citrus need 3–4 feedings per year to sustain fruit development.",
    description:
      "Apply citrus fertilizer again during active growth. Water deeply before and after feeding.",
    category: "feeding",
    windowStart: { month: 6, day: 1 },
    windowEnd: { month: 6, day: 14 },
    source: "UC Davis — Citrus for the Home Garden",
  },
  {
    id: "lemon-harvest",
    species: "Lemon",
    title: "Citrus harvest",
    why: "Meyer lemons can be picked once they reach full color.",
    description:
      "Harvest when fruit is deep yellow and gives slightly to pressure. Taste-test one — citrus won't sweeten further after picking. Cut, don't pull, to avoid tearing bark.",
    category: "harvesting",
    windowStart: { month: 10, day: 1 },
    windowEnd: { month: 10, day: 14 },
    source: "UC Davis — Citrus for the Home Garden",
  },
];

const fig: TaskTemplate[] = [
  {
    id: "fig-drainage-check",
    species: "Fig",
    title: "Check drainage",
    why: "Figs are drought-tolerant but hate wet feet.",
    description:
      "Ensure the soil around your fig drains freely. Amend heavy clay with compost. Mulch to retain moisture without waterlogging.",
    category: "monitoring",
    windowStart: { month: 3, day: 15 },
    windowEnd: { month: 3, day: 28 },
    source: "Texas A&M AgriLife Extension — Figs",
  },
  {
    id: "fig-beetle-monitoring",
    species: "Fig",
    title: "Fig beetle monitoring",
    why: "Green fig beetles feed on ripe fruit — early monitoring reduces losses.",
    description:
      "Watch for large iridescent green beetles around ripening fruit. Use fruit bags or fine netting on clusters to protect the crop. Remove fallen fruit to reduce attraction.",
    category: "monitoring",
    windowStart: { month: 6, day: 15 },
    windowEnd: { month: 6, day: 28 },
    source: "Texas A&M Extension — Fig Pests",
  },
  {
    id: "fig-ripeness-check",
    species: "Fig",
    title: "Fig ripeness check",
    why: "Figs must ripen on the tree — they stop ripening once picked.",
    description:
      "Ripe figs droop on the stem, feel soft, and may show slight skin cracks. Color deepens to brown-purple for Brown Turkey. Pick gently to avoid bruising.",
    category: "harvesting",
    windowStart: { month: 7, day: 15 },
    windowEnd: { month: 7, day: 28 },
    source: "Texas A&M Extension — Figs",
  },
];

export const TASK_TEMPLATES: Partial<Record<FruitTreeType, TaskTemplate[]>> = {
  Apple: apple,
  Peach: peach,
  Lemon: lemon,
  Fig: fig,
};

export function getTemplatesForSpecies(species: FruitTreeType): TaskTemplate[] {
  return TASK_TEMPLATES[species] ?? [];
}
