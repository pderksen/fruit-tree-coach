/**
 * Fruit tree lookup tables — type metadata, emoji, categories, and scientific names.
 * Extracted from types.ts to keep files under 200 lines.
 * Scientific names sourced from USDA Plants Database (plants.usda.gov).
 */

import type { FruitTreeType } from "@/lib/types";

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

export type TreeCategory =
  | "Citrus"
  | "Stone Fruit"
  | "Pome Fruit"
  | "Tropical / Subtropical"
  | "Other";

// ---------------------------------------------------------------------------
// Master list (order matters — "Popular" first, then alphabetical by category)
// ---------------------------------------------------------------------------

export const FRUIT_TREE_TYPES: FruitTreeType[] = [
  // --- Popular (shown first in the picker) ---
  "Apple",
  "Lemon",
  "Peach",
  "Fig",
  "Cherry",
  "Orange",
  "Pear",
  "Plum",
  "Lime",
  // --- Pome ---
  // (none beyond Apple/Pear in v1)
  // --- Stone ---
  "Apricot",
  "Nectarine",
  // --- Citrus ---
  "Grapefruit",
  "Mandarin",
  "Tangelo",
  "Tangerine",
  "Kumquat",
  // --- Subtropical ---
  "Avocado",
  "Pomegranate",
  "Persimmon",
  "Olive",
  // --- Tropical ---
  "Date",
  "Mango",
  "Guava",
  // --- Berry / Other ---
  "Mulberry",
  "Pawpaw",
];

// ---------------------------------------------------------------------------
// Popular types — top 10 most common US backyard fruit trees.
// Rough ordering based on USDA NASS noncitrus/citrus production reports and
// extension-service "common backyard fruit" guides. Zone-aware filtering will
// come back post-v1 once we have real planting data.
// ---------------------------------------------------------------------------

export const POPULAR_TYPES: FruitTreeType[] = [
  "Apple",
  "Peach",
  "Pear",
  "Cherry",
  "Plum",
  "Lemon",
  "Orange",
  "Fig",
  "Apricot",
  "Lime",
];

// ---------------------------------------------------------------------------
// Category map
// ---------------------------------------------------------------------------

export const TREE_CATEGORY_MAP: Record<FruitTreeType, TreeCategory> = {
  // Citrus
  Lemon: "Citrus",
  Orange: "Citrus",
  Lime: "Citrus",
  Grapefruit: "Citrus",
  Mandarin: "Citrus",
  Tangelo: "Citrus",
  Tangerine: "Citrus",
  Kumquat: "Citrus",
  // Stone Fruit
  Peach: "Stone Fruit",
  Cherry: "Stone Fruit",
  Plum: "Stone Fruit",
  Apricot: "Stone Fruit",
  Nectarine: "Stone Fruit",
  // Pome Fruit
  Apple: "Pome Fruit",
  Pear: "Pome Fruit",
  // Tropical / Subtropical
  Avocado: "Tropical / Subtropical",
  Pomegranate: "Tropical / Subtropical",
  Persimmon: "Tropical / Subtropical",
  Olive: "Tropical / Subtropical",
  Date: "Tropical / Subtropical",
  Mango: "Tropical / Subtropical",
  Guava: "Tropical / Subtropical",
  // Other
  Fig: "Other",
  Mulberry: "Other",
  Pawpaw: "Other",
};

// ---------------------------------------------------------------------------
// Emoji (closest available Unicode emoji per type)
// ---------------------------------------------------------------------------

export const TREE_EMOJI: Record<FruitTreeType, string> = {
  Apple: "\uD83C\uDF4E", // 🍎
  Pear: "\uD83C\uDF50", // 🍐
  Peach: "\uD83C\uDF51", // 🍑
  Cherry: "\uD83C\uDF52", // 🍒
  Plum: "\uD83C\uDF51", // 🍑 (closest match)
  Fig: "\uD83C\uDF4E", // 🍎 (closest round fruit; PNG icon preferred)
  Lemon: "\uD83C\uDF4B", // 🍋
  Orange: "\uD83C\uDF4A", // 🍊
  Lime: "\uD83C\uDF4B", // 🍋 (closest match)
  Apricot: "\uD83C\uDF51", // 🍑 (closest match)
  Nectarine: "\uD83C\uDF51", // 🍑 (closest match)
  Grapefruit: "\uD83C\uDF4A", // 🍊 (closest match)
  Mandarin: "\uD83C\uDF4A", // 🍊 (closest match)
  Tangelo: "\uD83C\uDF4A", // 🍊 (closest match)
  Tangerine: "\uD83C\uDF4A", // 🍊
  Kumquat: "\uD83C\uDF4A", // 🍊 (closest match)
  Avocado: "\uD83E\uDD51", // 🥑
  Pomegranate: "\uD83C\uDF4E", // 🍎 (closest round fruit; PNG icon preferred)
  Persimmon: "\uD83C\uDF4A", // 🍊 (closest orange-colored fruit)
  Olive: "\uD83E\uDED2", // 🫒
  Date: "\uD83C\uDF34", // 🌴 (date palm)
  Mango: "\uD83E\uDD6D", // 🥭
  Guava: "\uD83C\uDF53", // 🍓 (closest match)
  Mulberry: "\uD83C\uDF47", // 🍇 (closest berry cluster)
  Pawpaw: "\uD83C\uDF4C", // 🍌 (closest tropical fruit)
};

// ---------------------------------------------------------------------------
// Scientific names — source: USDA Plants Database (plants.usda.gov)
// ---------------------------------------------------------------------------

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
  Apricot: "Prunus armeniaca",
  Nectarine: "Prunus persica var. nucipersica",
  Grapefruit: "Citrus paradisi",
  Mandarin: "Citrus reticulata",
  Tangelo: "Citrus × tangelo",
  Tangerine: "Citrus reticulata",
  Kumquat: "Fortunella japonica",
  Avocado: "Persea americana",
  Pomegranate: "Punica granatum",
  Persimmon: "Diospyros kaki",
  Olive: "Olea europaea",
  Date: "Phoenix dactylifera",
  Mango: "Mangifera indica",
  Guava: "Psidium guajava",
  Mulberry: "Morus alba",
  Pawpaw: "Asimina triloba",
};
