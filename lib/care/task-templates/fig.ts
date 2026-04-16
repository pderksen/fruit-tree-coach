import type { TaskTemplate } from "./index";

export const fig: TaskTemplate[] = [
  {
    id: "fig-drainage-check",
    species: "Fig",
    title: "Check drainage",
    why: "Figs are drought-tolerant but hate wet feet.",
    description:
      "Ensure the soil around your fig drains freely. Amend heavy clay with compost. Mulch to retain moisture without waterlogging.",
    category: "monitoring",
    windowStart: { month: 3, day: 15 },
    windowEnd: { month: 3, day: 28 },
    source: "Texas A&M AgriLife Extension — Figs",
  },
  {
    id: "fig-beetle-monitoring",
    species: "Fig",
    title: "Fig beetle monitoring",
    why: "Green fig beetles feed on ripe fruit — early monitoring reduces losses.",
    description:
      "Watch for large iridescent green beetles around ripening fruit. Use fruit bags or fine netting on clusters to protect the crop. Remove fallen fruit to reduce attraction.",
    category: "monitoring",
    windowStart: { month: 6, day: 15 },
    windowEnd: { month: 6, day: 28 },
    source: "Texas A&M Extension — Fig Pests",
  },
  {
    id: "fig-ripeness-check",
    species: "Fig",
    title: "Fig ripeness check",
    why: "Figs must ripen on the tree — they stop ripening once picked.",
    description:
      "Ripe figs droop on the stem, feel soft, and may show slight skin cracks. Color deepens to brown-purple for Brown Turkey. Pick gently to avoid bruising.",
    category: "harvesting",
    windowStart: { month: 7, day: 15 },
    windowEnd: { month: 7, day: 28 },
    source: "Texas A&M Extension — Figs",
  },
];
