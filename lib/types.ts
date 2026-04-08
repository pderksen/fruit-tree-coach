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
  | "Fig";

export const FRUIT_TREE_TYPES: FruitTreeType[] = [
  "Apple",
  "Pear",
  "Peach",
  "Cherry",
  "Plum",
  "Fig",
];

export interface Tree {
  id: string;
  name: string;
  type: FruitTreeType;
  variety?: string;
  plantedYear?: number;
  zipCode: string;
}

export interface Task {
  id: string;
  treeId: string;
  treeName: string;
  title: string;
  why: string;
  done: boolean;
}
