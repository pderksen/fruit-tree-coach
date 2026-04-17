import type { TaskTemplate } from "./index";

/**
 * Kumquat (`Citrus japonica`). The cold-hardiest common citrus —
 * Nagami tolerates brief dips to ~10°F. The signature quirk: fruit
 * is eaten whole, skin and all (the sweet part is the peel; the
 * flesh is tart). Skips the `protection` template since Nagami is
 * hardy enough in the zones where it's commonly planted — overview
 * guide covers any frost-specific advice.
 */
export const kumquat: TaskTemplate[] = [
  {
    id: "kumquat-spring-feeding",
    fruitType: "Kumquat",
    title: "Spring feeding",
    why: "Kumquats are lighter feeders than oranges or grapefruit but still benefit from citrus-specific nutrition.",
    description:
      "Apply a citrus fertilizer with micronutrients as new growth begins. Lighter rates than other citrus — kumquats don't need heavy nitrogen. In ground: spread to drip line. Container kumquats: smaller, more frequent feedings.",
    category: "feeding",
    windowStart: { month: 3, day: 1 },
    windowEnd: { month: 3, day: 28 },
    source: "UF/IFAS EDIS — Kumquat (FOR300/FR368)",
  },
  {
    id: "kumquat-summer-feeding",
    fruitType: "Kumquat",
    title: "Summer feeding",
    why: "A mid-season feeding supports the heavy late-season crop kumquats produce.",
    description:
      "Apply a second, lighter citrus fertilizer dose in late spring or early summer. Water in deeply. Avoid over-feeding — excess nitrogen pushes tender fall growth.",
    category: "feeding",
    windowStart: { month: 5, day: 15 },
    windowEnd: { month: 6, day: 15 },
    source: "UF/IFAS EDIS — Citrus Culture in the Home Landscape",
  },
  {
    id: "kumquat-pest-inspection",
    fruitType: "Kumquat",
    title: "Citrus pest inspection",
    why: "Kumquats get the same pest complex as other citrus but at lower intensity.",
    description:
      "Check new growth every 2–3 weeks through spring and summer for sticky leaves, sooty mold, scale bumps, or silvery leafminer trails. Light infestations respond to insecticidal soap or horticultural oil.",
    category: "monitoring",
    windowStart: { month: 4, day: 1 },
    windowEnd: { month: 4, day: 28 },
    source: "UC IPM — Citrus Pest Management",
  },
  {
    id: "kumquat-harvest",
    fruitType: "Kumquat",
    title: "Kumquat harvest",
    why: "Kumquats are eaten whole — the peel is sweet, the flesh is tart. Fruit ripens October into March.",
    description:
      "Pick when fruit is fully orange and gives slightly to pressure. Taste one before committing to harvest — Nagami are tangy-sweet whole; Meiwa are sweeter. Snip with pruners or give a gentle twist. Fruit holds well on the tree for weeks once ripe.",
    category: "harvesting",
    windowStart: { month: 11, day: 1 },
    windowEnd: { month: 11, day: 28 },
    source: "UF/IFAS EDIS — Kumquat (FOR300/FR368)",
  },
];
