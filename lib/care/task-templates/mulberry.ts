import type { TaskTemplate } from "./index";

/**
 * Mulberry (Morus alba / M. rubra / M. nigra). Famously easygoing
 * across most US climates. Winter pruning for shape; late-winter and
 * mid-summer feeding with 10-10-10; harvest literally by shaking the
 * tree (fruit drops when ripe). Source coverage is thinner than
 * other phases — UGA Extension is the primary source. Sources: UGA
 * Extension B992 (Minor Fruits and Nuts in Georgia), Clemson HGIC
 * (Red vs. White Mulberry in South Carolina).
 */
export const mulberry: TaskTemplate[] = [
  {
    id: "mulberry-winter-pruning",
    fruitType: "Mulberry",
    title: "Winter shape pruning",
    why: "Mulberries don't need aggressive annual pruning — one winter pass to remove dead and crossing wood keeps the canopy healthy.",
    description:
      "In January or February while the tree is fully dormant, cut out dead, damaged, and crossing branches. Thin the canopy just enough to let light through — mulberry tolerates hard cuts but doesn't require them. If the tree is outgrowing its space, head back the longest scaffolds to a healthy outward-facing bud. At the same visit, spray dormant horticultural oil to catch overwintering white peach scale (the main mulberry pest).",
    category: "pruning",
    windowStart: { month: 1, day: 15 },
    windowEnd: { month: 2, day: 28 },
    source: "UGA Extension — Minor Fruits and Nuts in Georgia (B992)",
  },
  {
    id: "mulberry-feeding",
    fruitType: "Mulberry",
    title: "Late-winter and mid-summer feeding",
    why: "Two modest fertilizer passes a year are all a mature mulberry needs — enough for steady fruit set without pushing excess vegetative growth.",
    description:
      "Apply 1 lb of 10-10-10 fertilizer per inch of trunk diameter, split across two applications: the first in late winter just before bud break (February), the second in mid-summer after the main harvest (July). Broadcast in a ring from 1 ft outside the trunk past the drip line and water in. On a young tree (first 2–3 years) cut the rate in half — mulberries grow vigorously and overfeeding makes them lanky.",
    category: "feeding",
    windowStart: { month: 2, day: 1 },
    windowEnd: { month: 2, day: 28 },
    source: "UGA Extension — Minor Fruits and Nuts in Georgia (B992)",
  },
  {
    id: "mulberry-harvest",
    fruitType: "Mulberry",
    title: "Shake-the-tree harvest",
    why: "Mulberries ripen over several weeks and drop when ready — the classic way to harvest is to spread a sheet and shake the branches.",
    description:
      "Mulberries ripen in May or early June across most of the US. Spread an old bedsheet or clean tarp under the tree and shake each branch firmly — ripe berries drop; underripe ones stay on. Repeat every 2–3 days through the 3–4 week harvest window. Berries are extremely soft and stain — wear gloves and clothes you don't care about. Refrigerate immediately; fresh mulberries keep only 2–3 days. Black and red cultivars are sweeter and more popular for eating; white mulberry is blander but still good.",
    category: "harvesting",
    windowStart: { month: 5, day: 1 },
    windowEnd: { month: 6, day: 15 },
    source: "UGA Extension — Minor Fruits and Nuts in Georgia (B992); Clemson HGIC — Red vs. White Mulberry in South Carolina",
  },
];
