import type { TaskTemplate } from "./index";

/**
 * Plum templates cover both European (P. domestica, e.g. Stanley)
 * and Japanese (P. salicina, e.g. Santa Rosa) types. Windows reflect
 * European plum (more common backyard tree); Japanese plums ripen
 * earlier — note in guide.
 */
export const plum: TaskTemplate[] = [
  {
    id: "plum-winter-pruning",
    fruitType: "Plum",
    title: "Open-vase pruning",
    why: "Plums fruit on long-lived spurs — annual pruning keeps the canopy open and productive.",
    description:
      "Prune in late winter just before bud break. Remove crossing, downward, and dead branches. Maintain 3–4 main scaffolds at 25–30° from vertical with no branches in the center.",
    category: "pruning",
    windowStart: { month: 2, day: 15 },
    windowEnd: { month: 3, day: 5 },
    source: "UGA Extension — Home Garden Plums; PSU Extension Open Center",
  },
  {
    id: "plum-black-knot-removal",
    fruitType: "Plum",
    title: "Black knot removal",
    why: "Black knot galls release spores that spread the disease — removing them while dormant breaks the cycle.",
    description:
      "Inspect every branch for the dark, swollen, knotted galls. Cut at least 4 inches below each knot, into clean wood. Burn or bag the debris; do not compost.",
    category: "protection",
    windowStart: { month: 2, day: 1 },
    windowEnd: { month: 2, day: 21 },
    source: "PSU Extension — Black Knot of Prunus; UMN Extension Black Knot",
  },
  {
    id: "plum-spring-feeding",
    fruitType: "Plum",
    title: "Spring fertilizing",
    why: "A single early-spring feeding supports steady growth and good fruit set.",
    description:
      "Apply about 1 lb of actual nitrogen per inch of trunk diameter (or a balanced 10-10-10 at the labeled rate) under the drip line just before bud break. Water it in.",
    category: "feeding",
    windowStart: { month: 3, day: 1 },
    windowEnd: { month: 3, day: 14 },
    source: "University of Maryland Extension — Care of Stone Fruit Trees",
  },
  {
    id: "plum-fruit-thinning",
    fruitType: "Plum",
    title: "Fruit thinning",
    why: "Plums set heavily — thinning produces larger fruit and prevents limb breakage.",
    description:
      "About 30–45 days after bloom, when fruit is marble-sized, thin to leave one plum every 4–6 inches along each branch. Remove doubles and damaged fruit first.",
    category: "monitoring",
    windowStart: { month: 5, day: 1 },
    windowEnd: { month: 5, day: 21 },
    source: "UC ANR — Fruit Thinning; UGA Extension Home Garden Plums",
  },
  {
    id: "plum-harvest",
    fruitType: "Plum",
    title: "Plum harvest",
    why: "Plums show full color a week before they're truly ripe — wait for the gentle give.",
    description:
      "Pick when the skin shows full cultivar color (deep purple, red, or gold) and flesh yields slightly to thumb pressure. Twist gently to detach without damaging the fruiting spur.",
    category: "harvesting",
    windowStart: { month: 8, day: 1 },
    windowEnd: { month: 8, day: 21 },
    source: "PSU Extension — Plum Harvest; UMN Extension Stone Fruits",
  },
];
