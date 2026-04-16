import type { TaskTemplate } from "./index";

/**
 * Apricot's defining quirk: prune in late summer (July–August), NOT
 * dormant winter — Eutypa dieback infects fresh dormant cuts during
 * wet weather. (UC IPM Pest Note 7470 / Eutypa Dieback.)
 */
export const apricot: TaskTemplate[] = [
  {
    id: "apricot-summer-pruning",
    species: "Apricot",
    title: "Summer pruning",
    why: "Apricots pruned in summer avoid Eutypa dieback — winter cuts get infected during rain.",
    description:
      "Prune apricots in late July through August, after harvest, when wounds heal before fall rain. Train to an open vase: 3–4 main scaffolds, no central leader, sun reaching the inside.",
    category: "pruning",
    windowStart: { month: 7, day: 15 },
    windowEnd: { month: 8, day: 15 },
    source: "UC IPM — Eutypa Dieback (Apricot); UCANR Real Dirt",
  },
  {
    id: "apricot-leaf-fall-copper",
    species: "Apricot",
    title: "Leaf-fall copper spray",
    why: "Bacterial canker enters through leaf scars in fall — a copper spray at leaf-fall closes the door.",
    description:
      "Spray a fixed copper fungicide labeled for stone fruit when about half the leaves have dropped, typically late October to early November. Coat all twigs and branches to runoff.",
    category: "protection",
    windowStart: { month: 10, day: 20 },
    windowEnd: { month: 11, day: 10 },
    source: "UC IPM — Bacterial Canker (Apricot)",
  },
  {
    id: "apricot-spring-feeding",
    species: "Apricot",
    title: "Spring fertilizing",
    why: "Apricots respond to modest spring nitrogen — over-feeding makes bacterial canker worse.",
    description:
      "Apply about 1 lb of actual nitrogen per inch of trunk diameter under the drip line just before bud break. Stop short of the trunk to avoid burning bark.",
    category: "feeding",
    windowStart: { month: 3, day: 1 },
    windowEnd: { month: 3, day: 14 },
    source: "USU Extension — Apricots in the Home Garden",
  },
  {
    id: "apricot-fruit-thinning",
    species: "Apricot",
    title: "Fruit thinning",
    why: "Apricots overproduce, then drop — early thinning gives bigger, better fruit.",
    description:
      "Two to three weeks after bloom, when fruit is grape-sized, thin to one apricot every 3–5 inches. Pick off doubles and the smallest fruit first.",
    category: "monitoring",
    windowStart: { month: 4, day: 14 },
    windowEnd: { month: 5, day: 5 },
    source: "USU Extension — Apricots in the Home Garden; UC ANR Fruit Thinning",
  },
  {
    id: "apricot-harvest",
    species: "Apricot",
    title: "Apricot harvest",
    why: "Apricots have a brief window — once they soften, they go quickly.",
    description:
      "Pick when fruit is fully colored (yellow with orange or red blush, depending on variety) and yields gently to thumb pressure. Twist slightly to detach without snapping the spur.",
    category: "harvesting",
    windowStart: { month: 6, day: 15 },
    windowEnd: { month: 7, day: 14 },
    source: "UC IPM — Harvesting and Storing Apricots; USU Extension",
  },
];
