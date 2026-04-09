/**
 * Placeholder types for the UI scaffold.
 * These will be revisited when real care logic and Supabase schema land.
 */

export type FruitTreeType =
  | "Apple"
  | "Pear"
  | "Peach"
  | "Cherry"
  | "Plum"
  | "Fig"
  | "Lemon"
  | "Orange"
  | "Lime"
  | "Crabapple"
  | "Quince"
  | "Medlar"
  | "Apricot"
  | "Nectarine"
  | "Grapefruit"
  | "Tangerine"
  | "Kumquat"
  | "Avocado"
  | "Pomegranate"
  | "Persimmon"
  | "Olive"
  | "Jujube"
  | "Loquat"
  | "Mango"
  | "Guava"
  | "Papaya"
  | "Banana"
  | "Passion Fruit"
  | "Dragon Fruit"
  | "Kiwi"
  | "Jackfruit"
  | "Starfruit"
  | "Coconut"
  | "Date Palm"
  | "Mulberry"
  | "Pawpaw"
  | "Gooseberry"
  | "Elderberry";

export interface Tree {
  id: string;
  name: string;
  type: FruitTreeType;
  variety?: string;
  plantedYear?: number;
  plantedDate?: string;
  zipCode: string;
  ageBracket?: AgeBracket;
  description?: string;
  /** Short status label shown on collection cards */
  statusLabel?: string;
  /** Brief description of current care state */
  statusDescription?: string;
}

export interface Task {
  id: string;
  treeId: string;
  treeName: string;
  title: string;
  why: string;
  done: boolean;
}

export interface DetailedTask extends Task {
  timeWindow?: string;
  description?: string;
  priority?: boolean;
  season?: string;
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
