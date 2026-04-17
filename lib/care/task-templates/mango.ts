import type { TaskTemplate } from "./index";

/**
 * Mango (Mangifera indica). South Florida / warm-zone tropical.
 * Anthracnose at bloom is the defining disease pressure — copper/
 * sulfur passes during flowering are the control. Prune immediately
 * after harvest. Fertilizer shifts from high-N (young) to low-N
 * high-K (bearing). Harvest cue is shoulder-and-nose fill-out plus
 * internal yellow flesh. Sources: UF/IFAS EDIS HS2/MG216 (Mango
 * Growing in the Florida Home Landscape), UF/IFAS Extension St.
 * Lucie County (Managing Anthracnose and Powdery Mildew on Mango).
 */
export const mango: TaskTemplate[] = [
  {
    id: "mango-post-harvest-pruning",
    fruitType: "Mango",
    title: "Post-harvest pruning",
    why: "Pruning right after harvest lets the tree push new growth that will set next year's buds — waiting into fall delays bloom and reduces fruit set.",
    description:
      "Immediately after harvest (typically late July through August for most Florida varieties), remove a few upper limbs back to the crotch each year so lower canopy keeps getting light. Cut crossing branches and anything crowding the center. Do not top the tree — selective cuts on a few scaffolds per year preserve shape and keep fruit within reach. For trees over 25 ft, hire a licensed arborist rather than climbing.",
    category: "pruning",
    windowStart: { month: 7, day: 15 },
    windowEnd: { month: 8, day: 31 },
    source: "UF/IFAS EDIS — Mango Growing in the Florida Home Landscape (HS2/MG216)",
  },
  {
    id: "mango-low-n-feeding",
    fruitType: "Mango",
    title: "Low-N, high-K feeding for bearing trees",
    why: "Once a mango is fruiting, extra nitrogen pushes vegetative growth instead of fruit — the shift to low-N high-K is what brings heavy crops.",
    description:
      "For bearing trees, apply a low-nitrogen, high-potash fertilizer (e.g. 6-2-12 or similar with K at 9–15%) three to four times a year, with the first application in February and the others spread through the rainy season. Apply one foliar spray of copper, zinc, manganese, and boron in spring on calcareous soils. Skip or drastically reduce N during the flowering window.",
    category: "feeding",
    windowStart: { month: 2, day: 1 },
    windowEnd: { month: 2, day: 28 },
    source: "UF/IFAS EDIS — Mango Growing in the Florida Home Landscape (HS2/MG216)",
  },
  {
    id: "mango-anthracnose-monitoring",
    fruitType: "Mango",
    title: "Anthracnose and powdery mildew protection at bloom",
    why: "Anthracnose and powdery mildew at bloom are the #1 cause of fruit-set failure on mangoes in Florida — copper and sulfur applications during flowering are the control.",
    description:
      "Start protective sprays when flower panicles reach 1/4 full size (usually January–February in South Florida). Apply sulfur for powdery mildew and a copper fungicide for anthracnose, repeating every 10–21 days through bloom and early fruit set. Follow label rates. Stop copper once fruit is visibly developing. In wet springs, plan for 3–4 passes; in dry years one or two may be enough. Resistant varieties (Tommy Atkins) need less protection than highly susceptible ones (Haden).",
    category: "monitoring",
    windowStart: { month: 1, day: 15 },
    windowEnd: { month: 3, day: 31 },
    source: "UF/IFAS Extension St. Lucie County — Managing Anthracnose and Powdery Mildew on Mango Tree",
  },
  {
    id: "mango-harvest",
    fruitType: "Mango",
    title: "Mango harvest by shoulder and flesh test",
    why: "Picking at the right maturity is the difference between a fruit that ripens sweet at room temperature and one that stays starchy — external color alone misleads you.",
    description:
      "Florida mangoes mature May through September depending on variety. Pick when the 'shoulders and nose' of the fruit broaden and fill out, any blush has appeared, and a cut sample shows flesh near the seed turning from white to yellow. Harvest with 1–2 inches of stem to minimize sap burn, then hold at 70–75°F for 3–8 days to finish ripening. Do not refrigerate underripe fruit — chilling injury makes the flesh gray and flavorless.",
    category: "harvesting",
    windowStart: { month: 5, day: 15 },
    windowEnd: { month: 9, day: 15 },
    source: "UF/IFAS EDIS — Mango Growing in the Florida Home Landscape (HS2/MG216)",
  },
];
