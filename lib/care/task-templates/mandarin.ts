import type { TaskTemplate } from "./index";

/**
 * Mandarin (`Citrus reticulata`) — includes satsumas, clementines.
 * Cold-hardier than oranges; satsumas tolerate brief dips into the
 * mid-20s °F. The defining harvest quirk: rind may still be green
 * when fruit is ready to eat — taste, don't trust color.
 */
export const mandarin: TaskTemplate[] = [
  {
    id: "mandarin-spring-feeding",
    fruitType: "Mandarin",
    title: "Spring feeding",
    why: "Mandarins start their growth flush in early spring and need consistent nitrogen through the season.",
    description:
      "Apply a complete citrus fertilizer with micronutrients. For young trees (4–5 years), about 1 tablespoon of actual nitrogen monthly May through August. Mature trees: up to 1 lb actual nitrogen per year, split across 2–3 applications.",
    category: "feeding",
    windowStart: { month: 3, day: 1 },
    windowEnd: { month: 3, day: 28 },
    source: "UC Master Gardeners Santa Clara County — Growing Great Citrus",
  },
  {
    id: "mandarin-summer-feeding",
    fruitType: "Mandarin",
    title: "Summer feeding",
    why: "Fruit sizing runs through summer — a follow-up feeding supports the crop.",
    description:
      "Apply the second citrus fertilizer dose in May or June. Young trees take smaller, more frequent amounts; mature trees need larger split doses. Water in deeply.",
    category: "feeding",
    windowStart: { month: 5, day: 15 },
    windowEnd: { month: 6, day: 15 },
    source: "UC Master Gardeners Santa Clara County — Growing Great Citrus",
  },
  {
    id: "mandarin-pest-inspection",
    fruitType: "Mandarin",
    title: "Citrus pest inspection",
    why: "Mandarins attract the standard citrus pest complex; ACP/HLB is the serious disease watch.",
    description:
      "Inspect new flushes every 2–3 weeks spring through fall. Look for sticky leaves, small bumps on stems, silvery leaf trails. Avoid heavy summer pruning — fresh flush attracts citrus leafminer.",
    category: "monitoring",
    windowStart: { month: 4, day: 1 },
    windowEnd: { month: 4, day: 28 },
    source: "UC IPM — Asian Citrus Psyllid; UC IPM Citrus Pest Management",
  },
  {
    id: "mandarin-frost-protection",
    fruitType: "Mandarin",
    title: "Frost protection",
    why: "Satsumas tolerate brief frost but sustained temps below 28°F damage fruit and foliage.",
    description:
      "Before a freeze, water soil deeply, drape the canopy with sheets or frost cloth (not plastic) on a frame, and optionally add incandescent Christmas lights for extra heat. Remove covers in the morning.",
    category: "protection",
    windowStart: { month: 11, day: 15 },
    windowEnd: { month: 12, day: 15 },
    source: "UC IPM — Freezing and Frost Damage to Citrus; UC ANR Publication 8100",
  },
  {
    id: "mandarin-harvest",
    fruitType: "Mandarin",
    title: "Mandarin harvest",
    why: "Mandarins — especially satsumas — can be fully ripe while the rind is still partly green.",
    description:
      "Taste-test one fruit. If sweet and the peel loosens easily, the crop is ready. Harvest runs December–April depending on variety. Satsumas don't hold well on the tree — pick promptly once ripe. Snip with pruners or twist gently.",
    category: "harvesting",
    windowStart: { month: 12, day: 1 },
    windowEnd: { month: 12, day: 28 },
    source: "UC Master Gardeners Santa Clara County — Growing Great Citrus; UC ANR — Use Taste Rather Than Rind Color",
  },
];
