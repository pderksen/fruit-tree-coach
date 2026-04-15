/**
 * Placeholder types for the UI scaffold.
 * These will be revisited when real care logic and Supabase schema land.
 */

export type FruitTreeType =
  | "Apple"
  | "Apricot"
  | "Avocado"
  | "Cherry"
  | "Date"
  | "Fig"
  | "Grapefruit"
  | "Guava"
  | "Kumquat"
  | "Lemon"
  | "Lime"
  | "Mandarin"
  | "Mango"
  | "Mulberry"
  | "Nectarine"
  | "Olive"
  | "Orange"
  | "Pawpaw"
  | "Peach"
  | "Pear"
  | "Persimmon"
  | "Plum"
  | "Pomegranate"
  | "Tangelo"
  | "Tangerine";

export interface Orchard {
  id: string;
  name: string;
  zipCode: string;
  zone: string;
  createdAt: string;
}

export interface Tree {
  id: string;
  name: string;
  type: FruitTreeType;
  variety?: string;
  plantedOn?: string; // ISO date (YYYY-MM-DD)
  orchardId: string;
  ageBracket?: AgeBracket;
  description?: string;
}

export type TaskCategory =
  | "pruning"
  | "feeding"
  | "monitoring"
  | "harvesting"
  | "protection";

export type TaskStatus = "upcoming" | "active" | "late";

export interface Task {
  id: string;
  treeId: string;
  treeName: string;
  treeType?: FruitTreeType;
  title: string;
  why: string;
  dueDate?: string;
  category?: TaskCategory;
  description?: string;
  templateId?: string;
  windowStart?: { month: number; day: number };
  windowEnd?: { month: number; day: number };
  status?: TaskStatus;
  displayWindow?: string;
  /** Latest completion timestamp for this task, across all windows. */
  lastCompletedAt?: string;
}

export interface TaskCompletion {
  id: string;
  taskId: string;
  treeId: string;
  completedAt: string; // ISO timestamp
  notes?: string;
}

export interface GuideStep {
  stepNumber: number;
  title: string;
  description: string;
  tip?: string;
  /** Optional diagram image for visual guides (e.g. pruning diagrams). */
  diagramImage?: boolean;
}

export interface ProductRecommendation {
  name: string;
  category: "fertilizer" | "pruning-tool" | "pest-control" | "other";
  description: string;
  affiliateUrl?: string;
}

export interface Guide {
  id: string;
  treeType: FruitTreeType;
  title: string;
  introduction: string;
  steps: GuideStep[];
  toolsNeeded: string[];
  productRecommendations: ProductRecommendation[];
  source: string;
  researchNotes?: string;
}

export interface ExpertTip {
  quote: string;
  attribution: string;
}

export type SeasonStage = "dormant" | "bloom" | "growth" | "harvest";

export type AgeBracket = "sapling" | "young" | "maturing" | "mature";

export const AGE_BRACKET_LABELS: Record<AgeBracket, string> = {
  sapling: "Fresh Sapling (<1 yr)",
  young: "Young Tree (1–3 yr)",
  maturing: "Maturing (4–7 yr)",
  mature: "Mature (8+ yr)",
};

// Data tables (TREE_EMOJI, SCIENTIFIC_NAME_MAP, TREE_CATEGORY_MAP, etc.)
// are in @/lib/fruit-tree-data to keep this file under 200 lines.
