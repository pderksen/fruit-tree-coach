import type { TaskTemplate } from "./index";

/**
 * Date palm (Phoenix dactylifera). Dioecious desert tree — female
 * trees need a male pollen source (hand pollination in backyard
 * settings). Three distinctive home-grower jobs: hand pollinate
 * (Mar–Apr), strand-thin (May–Jun), bag fruit (Jul). Prune dead
 * fronds in January — never below horizontal. Sources: UNR
 * Extension (Date Palm Gardening Guide for Southern Nevada, FS-02-99
 * / PubID 3217), UA Cooperative Extension (Arizona Landscape Palms).
 */
export const date: TaskTemplate[] = [
  {
    id: "date-dead-frond-pruning",
    fruitType: "Date",
    title: "Dead-frond and old-stalk pruning",
    why: "Dead fronds harbor pests and weigh on the trunk — remove them once a year, but stop at horizontal or you expose the growing bud to damage.",
    description:
      "In January, cut dead (fully brown) fronds and last year's dried fruit stalks flush to the trunk. Do NOT cut any frond above horizontal — green fronds feed the tree and over-pruning causes 'pencil pointing' of the trunk, which predisposes the palm to wind break. Wear leather gloves and long sleeves — the leaf bases have rigid spines.",
    category: "pruning",
    windowStart: { month: 1, day: 1 },
    windowEnd: { month: 1, day: 31 },
    source: "UNR Extension — Date Palm Gardening Guide for Southern Nevada",
  },
  {
    id: "date-spring-feeding",
    fruitType: "Date",
    title: "Late-winter feeding",
    why: "Date palms go into heavy growth and flowering in March — a spring fertilizer pass before flowers open fuels the whole bearing year.",
    description:
      "In late February through early March, before flower spathes open, apply a palm fertilizer with a 4-1-6-2 Mg ratio (or similar like 8-2-12-4). Rate is 1.5 lbs of actual nitrogen per 100 sq ft of canopy area, four times a year — or apply the whole year's allotment as one spring application on established backyard trees. Broadcast in a ring from 2 ft outside the trunk past the canopy edge and water in deeply.",
    category: "feeding",
    windowStart: { month: 2, day: 15 },
    windowEnd: { month: 3, day: 14 },
    source: "UNR Extension — Date Palm Gardening Guide for Southern Nevada",
  },
  {
    id: "date-pollination-and-thinning",
    fruitType: "Date",
    title: "Hand pollinate, strand-thin, and bag the fruit",
    why: "Date palms are dioecious — females produce fruit only after pollination. Then strand-thinning and bagging protect the crop through the season.",
    description:
      "March–April: when female spathes open, transfer pollen from a male tree by rubbing pollen onto the flower strands or laying a male flower stalk across the top of the female cluster. Repeat every 2 weeks while spathes open. May–June: when fruit reach pea size, open each strand bundle, remove the center third of strands, and thin remaining strands to 15–20 fruits each, about 35 strands per stalk. Mid-to-late July (khalal / yellow-red stage): bag each cluster with burlap or cheesecloth — porous enough to breathe — to keep birds and insects off.",
    category: "monitoring",
    windowStart: { month: 3, day: 15 },
    windowEnd: { month: 7, day: 31 },
    source: "UNR Extension — Date Palm Gardening Guide for Southern Nevada",
  },
  {
    id: "date-harvest",
    fruitType: "Date",
    title: "Staged date harvest",
    why: "Dates ripen unevenly across a cluster — picking one pass-at-a-time catches each fruit at its best stage.",
    description:
      "Early varieties (Halawy, Khadrawy): September–October, bunch-cut the whole cluster when three-quarters of the fruit has reached rutab (soft, wrinkled) stage. Medjool and Zahidi: October onward, use a 'thinning harvest' — pick just the ripe fruit in each cluster, come back 1–2 weeks later for the next round, repeat 2–3 times. Rinse lightly with cool water, air-dry at 90°F, then refrigerate soft varieties or store semi-soft ones at room temperature.",
    category: "harvesting",
    windowStart: { month: 9, day: 1 },
    windowEnd: { month: 10, day: 31 },
    source: "UNR Extension — Date Palm Gardening Guide for Southern Nevada",
  },
];
