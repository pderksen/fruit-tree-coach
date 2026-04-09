import type { FruitTreeType } from "@/lib/types";

export interface CalendarTask {
  id: string;
  treeId: string;
  treeName: string;
  treeType: FruitTreeType;
  title: string;
  description: string;
  dueDate: string;
  category: "pruning" | "feeding" | "monitoring" | "harvesting" | "protection";
}

/**
 * Mock calendar tasks for April–May 2026.
 * Each recommendation cites a university extension or equivalent source.
 */
export const MOCK_CALENDAR_TASKS: CalendarTask[] = [
  // Source: Oregon State University Extension — PNW 400
  {
    id: "ct1",
    treeId: "1",
    treeName: "Honeycrisp Apple",
    treeType: "Apple",
    title: "Finish dormant pruning",
    description:
      "Remove crossing and dead branches before buds swell. Late pruning risks disease entry.",
    dueDate: "2026-04-10",
    category: "pruning",
  },
  // Source: Clemson Cooperative Extension — Peach Care Calendar
  {
    id: "ct2",
    treeId: "2",
    treeName: "Elberta Peach",
    treeType: "Peach",
    title: "Apply dormant oil spray",
    description:
      "Spray before bud break to smother overwintering scale and mite eggs.",
    dueDate: "2026-04-11",
    category: "protection",
  },
  // Source: UC Davis — Citrus for the Home Garden
  {
    id: "ct3",
    treeId: "3",
    treeName: "Meyer Lemon",
    treeType: "Lemon",
    title: "Spring feeding with citrus fertilizer",
    description:
      "Apply balanced citrus fertilizer (e.g. 6-4-6) with micronutrients. Water thoroughly after application.",
    dueDate: "2026-04-14",
    category: "feeding",
  },
  // Source: Texas A&M AgriLife Extension — Figs
  {
    id: "ct4",
    treeId: "4",
    treeName: "Brown Turkey Fig",
    treeType: "Fig",
    title: "Check soil drainage",
    description:
      "Ensure no standing water around the root zone. Amend heavy clay with compost if needed.",
    dueDate: "2026-04-15",
    category: "monitoring",
  },
  // Source: University of Minnesota Extension — Apple Thinning
  {
    id: "ct5",
    treeId: "1",
    treeName: "Honeycrisp Apple",
    treeType: "Apple",
    title: "Inspect for fire blight",
    description:
      "Look for blackened, shepherd-crook branch tips. Prune 12\" below infected tissue with sterilised tools.",
    dueDate: "2026-04-20",
    category: "monitoring",
  },
  // Source: Clemson Cooperative Extension
  {
    id: "ct6",
    treeId: "2",
    treeName: "Elberta Peach",
    treeType: "Peach",
    title: "Monitor bud swell",
    description:
      "Pink bud tips signal dormancy break. Time any remaining sprays before petals open.",
    dueDate: "2026-04-22",
    category: "monitoring",
  },
  // Source: WSU Extension — Home Orchard Fertility
  {
    id: "ct7",
    treeId: "1",
    treeName: "Honeycrisp Apple",
    treeType: "Apple",
    title: "Apply compost ring",
    description:
      "Spread 2–3 inches of compost around the drip line before bloom to feed roots through spring.",
    dueDate: "2026-04-28",
    category: "feeding",
  },
  // Source: UC Davis — Citrus for the Home Garden
  {
    id: "ct8",
    treeId: "3",
    treeName: "Meyer Lemon",
    treeType: "Lemon",
    title: "Check for citrus leafminer",
    description:
      "Inspect new growth for silvery trails. Treat early infestations with neem oil.",
    dueDate: "2026-05-03",
    category: "monitoring",
  },
  // Source: University of Minnesota Extension — Apple Thinning
  {
    id: "ct9",
    treeId: "1",
    treeName: "Honeycrisp Apple",
    treeType: "Apple",
    title: "Thin fruit clusters",
    description:
      "After petal fall, remove excess fruitlets to one per cluster. Aim for 6–8\" between fruits.",
    dueDate: "2026-05-10",
    category: "pruning",
  },
  // Source: Texas A&M AgriLife Extension — Figs
  {
    id: "ct10",
    treeId: "4",
    treeName: "Brown Turkey Fig",
    treeType: "Fig",
    title: "Light tip pruning",
    description:
      "Pinch back overly vigorous shoots to encourage lateral branching and fruit production.",
    dueDate: "2026-05-15",
    category: "pruning",
  },
];
