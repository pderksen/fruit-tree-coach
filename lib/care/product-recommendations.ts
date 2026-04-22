// Amazon affiliate product recommendations, keyed by fruit category.
//
// Source of truth: data/amazon-affiliate-links.csv (Cori-editable).
// Tracking ID: fruittreecoach-20 — baked into every amzn.to short link.
// Before adding or updating any link here, run:
//   curl -sIL <amzn.to url> | grep -i ^location:
// and confirm the resolved URL contains `tag=fruittreecoach-20`.

import { FRUIT_CATEGORY_MAP, type FruitCategory } from "@/lib/fruit-tree-data";
import type { FruitTreeType, TaskCategory } from "@/lib/types";

export type ProductKind = "fertilizer" | "pest-control" | "pruning-tool";

export type Product = {
  label: string;
  url: string;
  kind: ProductKind;
};

// Which product kinds are relevant to each task category.
// harvesting intentionally shows no products.
const KINDS_BY_TASK_CATEGORY: Partial<Record<TaskCategory, ProductKind[]>> = {
  pruning: ["pruning-tool"],
  feeding: ["fertilizer"],
  protection: ["pest-control"],
  monitoring: ["pest-control"],
};

export function getProductsForTask(
  treeType: FruitTreeType,
  taskCategory: TaskCategory | undefined,
  templateOverride?: ProductKind[],
): Product[] {
  // A template-level override (including an empty array) takes precedence
  // over the category default — this is how fruit-thinning tasks opt out
  // of the category "monitoring" → pest-control mapping.
  const kinds =
    templateOverride ??
    (taskCategory ? KINDS_BY_TASK_CATEGORY[taskCategory] : undefined);
  if (!kinds || kinds.length === 0) return [];
  const fruitCategory = FRUIT_CATEGORY_MAP[treeType];
  return PRODUCTS_BY_FRUIT_CATEGORY[fruitCategory].filter((p) =>
    kinds.includes(p.kind),
  );
}

export const PRODUCTS_BY_FRUIT_CATEGORY: Record<FruitCategory, Product[]> = {
  Citrus: [
    { label: "Espoma Citrus-tone 5-2-6", url: "https://amzn.to/4tAp8iF", kind: "fertilizer" },
    { label: "Dr. Earth Organic Fruit Tree Fertilizer", url: "https://amzn.to/481tiaw", kind: "fertilizer" },
    { label: "Bonide Captain Jack's Deadbug Brew", url: "https://amzn.to/4es694S", kind: "pest-control" },
    { label: "Fiskars Power Tooth Folding Pruning Saw", url: "https://amzn.to/4tT2P7w", kind: "pruning-tool" },
  ],
  "Pome Fruit": [
    { label: "Espoma Tree-tone 6-3-2", url: "https://amzn.to/41Ecraa", kind: "fertilizer" },
    { label: "Dr. Earth Organic Fruit Tree Fertilizer", url: "https://amzn.to/481tiaw", kind: "fertilizer" },
    { label: "Bonide Captain Jack's Deadbug Brew", url: "https://amzn.to/4es694S", kind: "pest-control" },
    { label: "Fiskars Bypass Pruning Shears", url: "https://amzn.to/4cuMej0", kind: "pruning-tool" },
  ],
  "Stone Fruit": [
    { label: "Espoma Tree-tone 6-3-2", url: "https://amzn.to/41Ecraa", kind: "fertilizer" },
    { label: "Dr. Earth Organic Fruit Tree Fertilizer", url: "https://amzn.to/481tiaw", kind: "fertilizer" },
    { label: "Bonide Captain Jack's Deadbug Brew", url: "https://amzn.to/4es694S", kind: "pest-control" },
    { label: "Fiskars Bypass Loppers", url: "https://amzn.to/3Oqn6lK", kind: "pruning-tool" },
  ],
  // Pest-spray and pruning-tool recommendations for Tropical / Subtropical
  // are intentionally omitted for now — add when Cori picks them.
  "Tropical / Subtropical": [
    { label: "Dr. Earth Exotic Blend Tropical Fertilizer", url: "https://amzn.to/4vBbqNJ", kind: "fertilizer" },
    { label: "Dr. Earth Organic Fruit Tree Fertilizer", url: "https://amzn.to/481tiaw", kind: "fertilizer" },
  ],
  Other: [
    { label: "Espoma Tree-tone 6-3-2", url: "https://amzn.to/41Ecraa", kind: "fertilizer" },
    { label: "Dr. Earth Organic Fruit Tree Fertilizer", url: "https://amzn.to/481tiaw", kind: "fertilizer" },
    { label: "Bonide Captain Jack's Deadbug Brew", url: "https://amzn.to/4es694S", kind: "pest-control" },
  ],
};
