import type { TaskTemplate } from "./index";

/**
 * Nectarine = fuzzless peach (Prunus persica var. nucipersica). Same
 * pruning, same leaf curl risk, same thinning approach as peach. The
 * smooth skin shows ground color earlier, so the harvest cue reads
 * sooner than for fuzzy peach.
 */
export const nectarine: TaskTemplate[] = [
  {
    id: "nectarine-leaf-curl-prevention",
    fruitType: "Nectarine",
    title: "Peach leaf curl prevention",
    why: "Leaf curl fungus overwinters on bark — one well-timed copper spray prevents it.",
    description:
      "Apply copper fungicide once between leaf-drop in fall and bud swell in late winter. Pick a dry day above 40 °F and spray to runoff on every twig and branch.",
    category: "protection",
    windowStart: { month: 1, day: 15 },
    windowEnd: { month: 1, day: 28 },
    source: "UC IPM — Peach Leaf Curl",
  },
  {
    id: "nectarine-winter-pruning",
    fruitType: "Nectarine",
    title: "Open-vase pruning",
    why: "Nectarines fruit on last year's wood — annual pruning keeps the tree productive.",
    description:
      "Prune to an open-vase shape in late winter before bud break. Head back long shoots by one-third to one-half. Remove water sprouts and any branch growing back into the center.",
    category: "pruning",
    windowStart: { month: 2, day: 1 },
    windowEnd: { month: 2, day: 14 },
    source: "Clemson HGIC — Pruning Peaches & Nectarines",
  },
  {
    id: "nectarine-spring-feeding",
    fruitType: "Nectarine",
    title: "Spring fertilizing",
    why: "Nectarines need consistent nitrogen for fruit set and growth.",
    description:
      "Apply about 1 lb of actual nitrogen per inch of trunk diameter (or a balanced 10-10-10 at label rate) under the drip line just before bud break. Water it in.",
    category: "feeding",
    windowStart: { month: 3, day: 1 },
    windowEnd: { month: 3, day: 14 },
    source: "University of Maryland Extension — Care of Stone Fruit Trees",
  },
  {
    id: "nectarine-fruit-thinning",
    fruitType: "Nectarine",
    title: "Fruit thinning",
    why: "Thinning early produces larger fruit and prevents limb breakage.",
    description:
      "About 4 weeks after bloom, when fruit is marble-sized, thin to leave one nectarine every 6 inches along each branch. Doubles and small fruit go first.",
    category: "monitoring",
    windowStart: { month: 4, day: 14 },
    windowEnd: { month: 5, day: 5 },
    source: "Clemson HGIC — Pruning Peaches & Nectarines; UC ANR Home Orchard",
  },
  {
    id: "nectarine-harvest",
    fruitType: "Nectarine",
    title: "Nectarine harvest",
    why: "Nectarines won't sweeten after picking — wait for the background color shift.",
    description:
      "Pick when the green ground color shifts to creamy yellow or gold and the fruit yields gently at the shoulder. Plan for 2–3 picking passes per tree over a week or two.",
    category: "harvesting",
    windowStart: { month: 7, day: 15 },
    windowEnd: { month: 8, day: 5 },
    source: "UC ANR — California Backyard Orchard (Nectarine); Clemson HGIC",
  },
];
