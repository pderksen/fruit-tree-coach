import type { TaskTemplate } from "./index";

export const apple: TaskTemplate[] = [
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
