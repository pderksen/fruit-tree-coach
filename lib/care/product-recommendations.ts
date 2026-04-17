// Amazon affiliate product recommendations, keyed by fruit category.
//
// Source of truth: data/amazon-affiliate-links.csv (Cori-editable).
// Tracking ID: fruittreecoach-20 — baked into every amzn.to short link.
// Before adding or updating any link here, run:
//   curl -sIL <amzn.to url> | grep -i ^location:
// and confirm the resolved URL contains `tag=fruittreecoach-20`.

import type { FruitCategory } from "@/lib/fruit-tree-data";

export type ProductKind = "fertilizer" | "pest-spray" | "pruning-tool";

export type Product = {
  label: string;
  url: string;
  kind: ProductKind;
};

export const PRODUCTS_BY_FRUIT_CATEGORY: Record<FruitCategory, Product[]> = {
  Citrus: [
    { label: "Espoma Citrus-tone 5-2-6", url: "https://amzn.to/4tAp8iF", kind: "fertilizer" },
    { label: "Dr. Earth Organic Fruit Tree Fertilizer", url: "https://amzn.to/481tiaw", kind: "fertilizer" },
    { label: "Bonide Captain Jack's Deadbug Brew", url: "https://amzn.to/4es694S", kind: "pest-spray" },
    { label: "Fiskars Power Tooth Folding Pruning Saw", url: "https://amzn.to/4tT2P7w", kind: "pruning-tool" },
  ],
  "Pome Fruit": [
    { label: "Espoma Tree-tone 6-3-2", url: "https://amzn.to/41Ecraa", kind: "fertilizer" },
    { label: "Dr. Earth Organic Fruit Tree Fertilizer", url: "https://amzn.to/481tiaw", kind: "fertilizer" },
    { label: "Bonide Captain Jack's Deadbug Brew", url: "https://amzn.to/4es694S", kind: "pest-spray" },
    { label: "Fiskars Bypass Pruning Shears", url: "https://amzn.to/4cuMej0", kind: "pruning-tool" },
  ],
  "Stone Fruit": [
    { label: "Espoma Tree-tone 6-3-2", url: "https://amzn.to/41Ecraa", kind: "fertilizer" },
    { label: "Dr. Earth Organic Fruit Tree Fertilizer", url: "https://amzn.to/481tiaw", kind: "fertilizer" },
    { label: "Bonide Captain Jack's Deadbug Brew", url: "https://amzn.to/4es694S", kind: "pest-spray" },
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
    { label: "Bonide Captain Jack's Deadbug Brew", url: "https://amzn.to/4es694S", kind: "pest-spray" },
  ],
};
