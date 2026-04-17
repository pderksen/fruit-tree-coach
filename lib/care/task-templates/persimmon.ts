import type { TaskTemplate } from "./index";

/**
 * Persimmon (Diospyros kaki — Asian; also D. virginiana — American).
 * Famously easygoing tree; few pests in the home orchard. The
 * headline is the astringent vs. non-astringent harvest rule:
 * astringent (Hachiya) must be fully soft before eating,
 * non-astringent (Fuyu, Jiro) can be eaten firm. Sources: UGA
 * Extension (Home Garden Persimmons), UC ANR (Sweet or Astringent —
 * Solving the Puzzle), Clemson HGIC (How to Grow Persimmons).
 */
export const persimmon: TaskTemplate[] = [
  {
    id: "persimmon-light-pruning",
    fruitType: "Persimmon",
    title: "Light structural pruning",
    why: "Persimmons fruit on new wood from the previous year — over-pruning removes next year's crop, but structural shaping keeps fruit within reach.",
    description:
      "While dormant (January–February), remove dead, crossing, and inward-growing branches. On young trees, pick 3–5 scaffold branches and cut back to keep the tree open; on mature trees, limit cuts to maintenance — persimmons naturally form a handsome round crown.",
    category: "pruning",
    windowStart: { month: 1, day: 15 },
    windowEnd: { month: 2, day: 28 },
    source: "UGA Extension — Home Garden Persimmons; Clemson HGIC — How to Grow Persimmons in South Carolina",
  },
  {
    id: "persimmon-spring-feeding",
    fruitType: "Persimmon",
    title: "Spring fertilizing",
    why: "Persimmons are light feeders — too much nitrogen makes fruit drop before it sizes.",
    description:
      "Apply about 1 lb of 10-10-10 per inch of trunk diameter just before bud break, max 4 lbs on a mature tree. If growth was over a foot last year, skip the feeding entirely — persimmons can go a year or two without supplemental fertilizer on decent soil.",
    category: "feeding",
    windowStart: { month: 3, day: 1 },
    windowEnd: { month: 3, day: 21 },
    source: "UGA Extension — Home Garden Persimmons",
  },
  {
    id: "persimmon-harvest",
    fruitType: "Persimmon",
    title: "Persimmon harvest (variety matters)",
    why: "Astringent varieties (Hachiya) are inedibly puckering until fully soft; non-astringent (Fuyu, Jiro) can be eaten firm. Know your tree before you pick.",
    description:
      "Astringent (Hachiya, American persimmon): leave on the tree until the fruit turns translucent and jelly-soft. Non-astringent (Fuyu, Jiro): pick when fully colored orange but still firm — eat like an apple. Either way, clip with pruners close to the fruit; the calyx (green cap) should come off with the fruit.",
    category: "harvesting",
    windowStart: { month: 10, day: 1 },
    windowEnd: { month: 11, day: 15 },
    source: "UC ANR Master Gardeners Contra Costa County — Sweet or Astringent; UGA Extension — Home Garden Persimmons",
  },
];
