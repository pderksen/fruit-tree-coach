import type { TaskTemplate } from "./index";

/**
 * Sweet cherry templates (Prunus avium). Tart cherry differs in
 * pruning shape (open-vase) and earlier harvest — note in guide if
 * tart-specific support is added later.
 *
 * Sweet cherry's quirk: prune in summer after harvest, NOT dormant
 * winter, to reduce silver leaf and bacterial canker infection on
 * fresh cuts. (MSU Extension PNW 667; Marin MG.)
 */
export const cherry: TaskTemplate[] = [
  {
    id: "cherry-summer-pruning",
    species: "Cherry",
    title: "Summer pruning",
    why: "Sweet cherry pruned in summer heals faster and resists silver leaf and bacterial canker.",
    description:
      "Prune sweet cherries after harvest while wounds can still seal — typically July. Train to a modified central leader: keep one dominant vertical leader and 4–5 well-spaced scaffolds.",
    category: "pruning",
    windowStart: { month: 7, day: 1 },
    windowEnd: { month: 7, day: 21 },
    source: "MSU Extension — PNW 667 Cherry Training Systems",
  },
  {
    id: "cherry-bloom-fungicide",
    species: "Cherry",
    title: "Brown rot blossom protection",
    why: "Brown rot infects open blossoms in cool wet weather and ruins the crop weeks before harvest.",
    description:
      "Apply a fungicide labeled for brown rot blossom blight at popcorn (white-bud) stage, then again at full bloom if rain is forecast. Coverage matters more than product choice.",
    category: "protection",
    windowStart: { month: 4, day: 1 },
    windowEnd: { month: 4, day: 14 },
    source: "UC IPM — Brown Rot Blossom and Twig Blight (Cherry)",
  },
  {
    id: "cherry-spring-feeding",
    species: "Cherry",
    title: "Spring nitrogen",
    why: "Cherries need a single, modest nitrogen application in early spring — over-feeding worsens canker.",
    description:
      "Spread roughly 1 lb of actual nitrogen per inch of trunk diameter under the drip line, just before bud break. A balanced fertilizer like 10-10-10 works; water it in.",
    category: "feeding",
    windowStart: { month: 3, day: 1 },
    windowEnd: { month: 3, day: 14 },
    source: "University of Maryland Extension — Care of Stone Fruit Trees",
  },
  {
    id: "cherry-fruit-fly-monitoring",
    species: "Cherry",
    title: "Cherry fruit fly watch",
    why: "Cherry fruit fly and spotted-wing drosophila lay eggs in ripening fruit — early monitoring saves the crop.",
    description:
      "Hang yellow sticky traps and apple-cider-vinegar bait cups in the canopy as fruit begins to color. Pick a few ripening cherries and squeeze them in a plastic bag to check for larvae.",
    category: "monitoring",
    windowStart: { month: 5, day: 15 },
    windowEnd: { month: 6, day: 5 },
    source: "USU Extension — Western Cherry Fruit Fly; UC IPM Spotted-Wing Drosophila",
  },
  {
    id: "cherry-harvest",
    species: "Cherry",
    title: "Cherry harvest",
    why: "Sweet cherries don't ripen further off the tree — leave them on until full color.",
    description:
      "Pick when fruit reaches deep mahogany or dark red and the flesh feels firm but yields slightly. Cut or pinch the stem — never tear the spur or you'll lose next year's fruiting site.",
    category: "harvesting",
    windowStart: { month: 6, day: 15 },
    windowEnd: { month: 7, day: 5 },
    source: "MSU Extension — Sweet Cherry Harvest",
  },
];
