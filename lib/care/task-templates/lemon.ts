import type { TaskTemplate } from "./index";

export const lemon: TaskTemplate[] = [
  {
    id: "lemon-spring-feeding",
    species: "Lemon",
    title: "Spring feeding",
    why: "Citrus are heavy feeders and need consistent nutrition.",
    description:
      "Apply a balanced citrus fertilizer. Meyer lemons benefit from micronutrients like iron and zinc, especially in alkaline soils.",
    category: "feeding",
    windowStart: { month: 3, day: 1 },
    windowEnd: { month: 3, day: 14 },
    source: "UC Davis — Citrus for the Home Garden",
  },
  {
    id: "lemon-pest-inspection",
    species: "Lemon",
    title: "Scale and aphid inspection",
    why: "Early detection prevents colonies from establishing and weakening the tree.",
    description:
      "Check undersides of leaves and stems for sticky honeydew, sooty mold, or small bumps (scale). Treat with neem oil or insecticidal soap if found.",
    category: "monitoring",
    windowStart: { month: 4, day: 1 },
    windowEnd: { month: 4, day: 14 },
    source: "UC Davis — Citrus Pest Management",
  },
  {
    id: "lemon-summer-feeding",
    species: "Lemon",
    title: "Summer feeding",
    why: "Citrus need 3–4 feedings per year to sustain fruit development.",
    description:
      "Apply citrus fertilizer again during active growth. Water deeply before and after feeding.",
    category: "feeding",
    windowStart: { month: 6, day: 1 },
    windowEnd: { month: 6, day: 14 },
    source: "UC Davis — Citrus for the Home Garden",
  },
  {
    id: "lemon-harvest",
    species: "Lemon",
    title: "Citrus harvest",
    why: "Meyer lemons can be picked once they reach full color.",
    description:
      "Harvest when fruit is deep yellow and gives slightly to pressure. Taste-test one — citrus won't sweeten further after picking. Cut, don't pull, to avoid tearing bark.",
    category: "harvesting",
    windowStart: { month: 10, day: 1 },
    windowEnd: { month: 10, day: 14 },
    source: "UC Davis — Citrus for the Home Garden",
  },
];
