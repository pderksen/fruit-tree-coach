import type { TaskTemplate } from "./index";

/**
 * Olive (Olea europaea). Alternate-bearing Mediterranean tree —
 * heavy crop one year, light the next. Olives fruit on previous
 * year's wood, so pruning for light penetration matters. Olive fruit
 * fly is the headline pest in California; sanitation + kaolin clay
 * is the home-orchard approach. Sources: UC IPM (Olive Fruit Fly —
 * Home and Landscape; Olive in Gardens/Trees and Shrubs; Fruit Spray
 * Thinning for Olive), UC ANR.
 */
export const olive: TaskTemplate[] = [
  {
    id: "olive-thinning-pruning",
    fruitType: "Olive",
    title: "Pruning for light and alternate-bearing thinning",
    why: "Olives fruit on last year's wood — opening the canopy lets light reach the interior, and pruning harder in a heavy year smooths alternate bearing.",
    description:
      "In late February through March, before spring growth, remove crossing, dead, and inward wood. In a heavy-set year, thin harder to balance the load; in a light year, prune lightly to preserve fruiting wood. Keep the canopy open enough that dappled light reaches the trunk.",
    category: "pruning",
    windowStart: { month: 2, day: 15 },
    windowEnd: { month: 3, day: 21 },
    source: "UC ANR — Olive Production Manual (Publication 3353/3485)",
  },
  {
    id: "olive-spring-feeding",
    fruitType: "Olive",
    title: "Spring fertilizing",
    why: "Olives grow on lean soils but a modest spring nitrogen dose supports fruit set in a bearing year.",
    description:
      "In March, apply about 1 lb of actual nitrogen per inch of trunk diameter (max 2 lbs on a mature tree) using a balanced fertilizer. Spread in a ring from 1 ft outside the trunk past the drip line and water in. Skip the feeding entirely in a light-crop year after a heavy bearing year.",
    category: "feeding",
    windowStart: { month: 3, day: 1 },
    windowEnd: { month: 3, day: 21 },
    source: "UC ANR — Olive Production Manual",
  },
  {
    id: "olive-fruit-fly-watch",
    fruitType: "Olive",
    title: "Olive fruit fly watch (CA/West)",
    why: "Olive fruit fly lays eggs in developing fruit starting when olives reach pea size — damage becomes obvious only at harvest if you miss it.",
    description:
      "Starting early July (or when fruit reach pea size in your area), hang a yellow sticky trap in the canopy to monitor. Apply kaolin clay (Surround WP) to coat leaves and fruit when fruit becomes susceptible, repeating every 5–6 weeks through summer. At season end, pick up every dropped fruit and seal it in a bag — unharvested olives on the ground breed next year's flies.",
    category: "monitoring",
    windowStart: { month: 7, day: 1 },
    windowEnd: { month: 8, day: 15 },
    source: "UC IPM — Olive Fruit Fly (Home and Landscape)",
  },
  {
    id: "olive-harvest",
    fruitType: "Olive",
    title: "Olive harvest",
    why: "Green-vs-black harvest timing changes with end use — oil olives come off at color change, table olives picked for their cure style.",
    description:
      "For oil: pick when fruit is shifting green to purple-black (typically October in warm inland CA). For home-cured green olives: pick full-sized but still green (September). For home-cured black olives: wait for full black (November). Either way, strip gently by hand onto a tarp, or comb with a rake-like tool on larger trees.",
    category: "harvesting",
    windowStart: { month: 9, day: 15 },
    windowEnd: { month: 11, day: 15 },
    source: "UC ANR — Olive Production Manual; UC IPM — Olive",
  },
];
