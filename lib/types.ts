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
  | "Lime";

export const FRUIT_TREE_TYPES: FruitTreeType[] = [
  "Apple",
  "Pear",
  "Peach",
  "Cherry",
  "Plum",
  "Fig",
  "Lemon",
  "Orange",
  "Lime",
];

export type TreeCategory = "Pome Fruit" | "Stone Fruit" | "Citrus" | "Ficus";

export const TREE_CATEGORY_MAP: Record<FruitTreeType, TreeCategory> = {
  Apple: "Pome Fruit",
  Pear: "Pome Fruit",
  Peach: "Stone Fruit",
  Cherry: "Stone Fruit",
  Plum: "Stone Fruit",
  Fig: "Ficus",
  Lemon: "Citrus",
  Orange: "Citrus",
  Lime: "Citrus",
};

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

export const SCIENTIFIC_NAME_MAP: Record<FruitTreeType, string> = {
  Apple: "Malus domestica",
  Pear: "Pyrus communis",
  Peach: "Prunus persica",
  Cherry: "Prunus avium",
  Plum: "Prunus domestica",
  Fig: "Ficus carica",
  Lemon: "Citrus limon",
  Orange: "Citrus sinensis",
  Lime: "Citrus aurantiifolia",
};

export const TREE_EMOJI: Record<FruitTreeType, string> = {
  Apple: "\uD83C\uDF4E",
  Peach: "\uD83C\uDF51",
  Lemon: "\uD83C\uDF4B",
  Fig: "\uD83C\uDF43",
  Pear: "\uD83C\uDF50",
  Cherry: "\uD83C\uDF52",
  Plum: "\uD83C\uDF51",
  Orange: "\uD83C\uDF4A",
  Lime: "\uD83C\uDF4B",
};
