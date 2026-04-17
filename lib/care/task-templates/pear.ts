import type { TaskTemplate } from "./index";

/**
 * Pear (Pyrus communis). Pome fruit — closest to Apple. Central-leader
 * training, dormant pruning, spring feeding, fireblight as the
 * dominant disease concern, and harvest-mature-but-firm with off-tree
 * ripening. Sources: Penn State Extension (Apple and Pear Disease —
 * Fire Blight), UMN Extension (Growing pears in the home garden),
 * OSU Extension PNW 400 (Training and pruning your home orchard).
 */
export const pear: TaskTemplate[] = [
  {
    id: "pear-dormant-pruning",
    fruitType: "Pear",
    title: "Dormant pruning",
    why: "Pears fruit on long-lived spurs — dormant pruning keeps sun reaching the spurs and the canopy open.",
    description:
      "Prune in February while fully dormant. Train to a central leader or modified central leader: one dominant vertical stem, 4–6 scaffolds spaced around it. Remove crossing, broken, and inward-growing wood. Keep cuts moderate — aggressive cuts push tender shoots that are fireblight-prone.",
    category: "pruning",
    windowStart: { month: 2, day: 1 },
    windowEnd: { month: 2, day: 28 },
    source: "OSU Extension PNW 400 — Training and Pruning Your Home Orchard",
  },
  {
    id: "pear-spring-feeding",
    fruitType: "Pear",
    title: "Spring fertilizing",
    why: "Pears need modest spring nitrogen — over-feeding pushes soft shoots that invite fireblight.",
    description:
      "Apply about 1/8 lb of actual nitrogen per year of tree age just before bud break (max 1 lb per mature tree). Spread in a ring from 1 ft outside the trunk to past the drip line and water in. Do not exceed this — susceptible varieties (Bartlett) get fireblight with excess nitrogen.",
    category: "feeding",
    windowStart: { month: 3, day: 1 },
    windowEnd: { month: 3, day: 21 },
    source: "UMN Extension — Growing Pears in the Home Garden",
  },
  {
    id: "pear-fireblight-watch",
    fruitType: "Pear",
    title: "Fireblight and thinning watch",
    why: "Shepherd's-crook shoot tips are fireblight — catch it early, cut well below the damage, and thin fruit while you're in the tree.",
    description:
      "Walk the tree weekly May–June. Look for blackened shoot tips curling into a shepherd's crook, oozing cankers on branches, and wilted blossom clusters. Cut 12 inches below visible damage and sterilize pruners between every cut (10% bleach or 70% alcohol). Also thin young fruit to one per cluster, 4–6 inches apart.",
    category: "monitoring",
    windowStart: { month: 5, day: 1 },
    windowEnd: { month: 6, day: 15 },
    source: "Penn State Extension — Apple and Pear Disease: Fire Blight; UMN Extension — Growing Pears in the Home Garden",
  },
  {
    id: "pear-harvest",
    fruitType: "Pear",
    title: "Pear harvest",
    why: "European pears ripen off the tree — tree-ripened pears go mealy at the core.",
    description:
      "Pick when the fruit still feels firm but the stem separates easily from the spur when lifted and gently twisted. Skin color shifts slightly lighter. Move picked fruit to a cool spot for 1–3 weeks, then ripen at room temperature — the neck gives slightly when ready to eat.",
    category: "harvesting",
    windowStart: { month: 8, day: 15 },
    windowEnd: { month: 9, day: 15 },
    source: "UMN Extension — Growing Pears in the Home Garden",
  },
];
