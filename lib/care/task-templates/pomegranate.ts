import type { TaskTemplate } from "./index";

/**
 * Pomegranate (Punica granatum). Hot-dry climate favorite. Minimal
 * pruning after year 3 (fruit forms on 2–3-year-old wood), consistent
 * summer watering to prevent split fruit, harvest by rind color +
 * sound. Sources: UC ANR Marin Master Gardeners (Pruning
 * Pomegranate), UGA Extension (Pomegranate Production), Clemson HGIC
 * (Pomegranate — How to Grow, Care for, and Enjoy).
 */
export const pomegranate: TaskTemplate[] = [
  {
    id: "pomegranate-training-pruning",
    fruitType: "Pomegranate",
    title: "Sucker removal and light shaping",
    why: "Pomegranates fruit on 2–3-year-old wood — heavy pruning removes fruiting spurs and suppresses the crop.",
    description:
      "Before new spring growth, remove basal suckers at ground level (they sap energy and crowd the interior). On trees past year three, thin only crossing or dead wood — keep cuts light. Open the canopy just enough that sun reaches the interior for good flower set.",
    category: "pruning",
    windowStart: { month: 2, day: 15 },
    windowEnd: { month: 3, day: 15 },
    source: "UC ANR Marin Master Gardeners — Pruning Pomegranate",
  },
  {
    id: "pomegranate-spring-feeding",
    fruitType: "Pomegranate",
    title: "Spring fertilizing",
    why: "Pomegranates respond to modest spring nitrogen — overfeeding pushes vegetative growth at the expense of fruit.",
    description:
      "Apply about 2–4 oz of actual nitrogen per year of tree age in March (max 1 lb on a mature tree), split between March and May if preferred. Spread in a ring from 1 ft outside the trunk to past the drip line and water in thoroughly.",
    category: "feeding",
    windowStart: { month: 3, day: 1 },
    windowEnd: { month: 3, day: 21 },
    source: "UGA Extension — Pomegranate Production; Clemson HGIC — Pomegranate",
  },
  {
    id: "pomegranate-split-fruit-watch",
    fruitType: "Pomegranate",
    title: "Split fruit and leaffooted bug watch",
    why: "Inconsistent watering splits ripening fruit; leaffooted bugs pierce fruit and spoil it from the inside.",
    description:
      "Keep water consistent through summer — deep soaks on a regular schedule, not alternating bone-dry and soaked. Watch for grey-brown leaffooted bugs (3/4 inch, flattened leaf-like hind legs) clustering on fruit; knock them into soapy water in the morning when they're sluggish.",
    category: "monitoring",
    windowStart: { month: 7, day: 15 },
    windowEnd: { month: 8, day: 31 },
    source: "Clemson HGIC — Pomegranate; UC ANR Marin Master Gardeners — FRUIT TREES Pomegranate",
  },
  {
    id: "pomegranate-harvest",
    fruitType: "Pomegranate",
    title: "Pomegranate harvest",
    why: "Pomegranates don't ripen after picking — wait for full rind color and the metallic-sound test.",
    description:
      "Pick when the rind has gone from pale pink to deep red (or to the variety's mature color), the fruit feels heavy, and tapping it gives a metallic, slightly hollow sound. Clip with pruners close to the fruit — pulling tears bark.",
    category: "harvesting",
    windowStart: { month: 9, day: 15 },
    windowEnd: { month: 10, day: 31 },
    source: "UGA Extension — Pomegranate Production; Clemson HGIC — Pomegranate",
  },
];
