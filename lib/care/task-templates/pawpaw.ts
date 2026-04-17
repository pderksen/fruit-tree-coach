import type { TaskTemplate } from "./index";

/**
 * Pawpaw (Asimina triloba). Native understory tree, hardy USDA
 * 5a–9. Two home-grower headlines: (1) cross-pollination failure
 * is the #1 reason home pawpaws don't fruit — plant two genetically
 * different cultivars and hand-pollinate with a small brush, and
 * (2) the harvest window is short — 3–5 weeks in September, with
 * fruit going from firm to soft-when-squeezed over a few days.
 * Coverage for pruning / feeding / protection is extension-thin, so
 * Phase E ships only the two categories backed by cited sources.
 * Sources: Ohio State Ohioline ANR-0187 (Pawpaws: An Alternative
 * Fruit Crop in the Midwest), Penn State Extension (The Native
 * Pawpaw Tree; Pawpaw Fruit in the Garden and the Kitchen).
 */
export const pawpaw: TaskTemplate[] = [
  {
    id: "pawpaw-hand-pollination",
    fruitType: "Pawpaw",
    title: "Hand pollinate for fruit set",
    why: "Pawpaw flowers are pollinated by flies and early beetles — insect activity is unreliable, so hand pollination is the single biggest lever on whether your tree fruits at all.",
    description:
      "When flowers open (late April through May depending on your zone), check daily. Pick a flower off a genetically different pawpaw (a different cultivar — cross-pollination between two trees of the same cultivar does not set fruit), touch its pollen-loaded anthers with a small soft-bristled brush, then paint the pollen onto the stigma of a flower on the other tree. Repeat for 5–10 flowers per visit, every 2–3 days through bloom. Plant at least two different named cultivars (e.g. Shenandoah and Susquehanna, or Davis and NC-1) or hand pollination cannot work.",
    category: "monitoring",
    windowStart: { month: 4, day: 15 },
    windowEnd: { month: 5, day: 20 },
    source: "Ohio State Ohioline — Pawpaws: An Alternative Fruit Crop in the Midwest (ANR-0187)",
  },
  {
    id: "pawpaw-harvest",
    fruitType: "Pawpaw",
    title: "Pawpaw harvest (short window)",
    why: "Pawpaw fruit ripens in a tight 3–5 week window, and once ripe it only keeps a few days at room temperature — missing the window means losing the crop.",
    description:
      "Pawpaw ripens in September (late August in southern zones, into early October in the North). The true readiness test is feel: a ripe pawpaw gives to gentle squeezing like a ripe peach. Dark spots or black blotches on the skin are normal on ripe fruit, not a defect. Check daily once one fruit softens — the rest follow within days. Pick by lifting and twisting; ripe fruit releases easily. Eat within 3–5 days at room temperature or refrigerate up to about a week. Freeze excess pulp for smoothies or baking — pawpaw does not store fresh.",
    category: "harvesting",
    windowStart: { month: 9, day: 1 },
    windowEnd: { month: 9, day: 30 },
    source: "Ohio State Ohioline — Pawpaws: An Alternative Fruit Crop in the Midwest (ANR-0187); Penn State Extension — Pawpaw Fruit in the Garden and the Kitchen",
  },
];
