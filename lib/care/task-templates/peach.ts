import type { TaskTemplate } from "./index";

export const peach: TaskTemplate[] = [
  {
    id: "peach-leaf-curl-prevention",
    fruitType: "Peach",
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
    fruitType: "Peach",
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
    fruitType: "Peach",
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
    fruitType: "Peach",
    title: "Bloom and fruit thinning",
    why: "Thinning early produces larger, sweeter peaches and protects limbs.",
    description:
      "Once fruit reaches marble size, thin to leave 6–8 inches between peaches. Remove any doubles and smaller fruit first.",
    category: "monitoring",
    // Fruit-thinning is physical (hand-thinning), not pest-related — opt out of
    // the category "monitoring" → pest-control product default.
    productKinds: [],
    windowStart: { month: 4, day: 1 },
    windowEnd: { month: 4, day: 14 },
    source: "Clemson Cooperative Extension — Peach Thinning",
  },
  {
    id: "peach-harvest",
    fruitType: "Peach",
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
