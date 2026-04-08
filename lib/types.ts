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
  zipCode: string;
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
