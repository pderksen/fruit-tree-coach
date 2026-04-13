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
  | "Pome Fruit"
  | "Stone Fruit"
  | "Citrus"
  | "Ficus"
  | "Tropical"
  | "Subtropical"
  | "Berry"
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

/** Number of "popular" types shown before the categorized groups. */
export const POPULAR_TYPE_COUNT = 9;

// ---------------------------------------------------------------------------
// Zone-aware popular types
// Recommendations based on USDA hardiness zones and common backyard plantings.
// Source: University extension service planting guides (various states).
// ---------------------------------------------------------------------------

type ZoneRange = "cold" | "moderate" | "warm";

const POPULAR_BY_ZONE: Record<ZoneRange, FruitTreeType[]> = {
  // Zones 3–5: short seasons, cold-hardy varieties
  cold: ["Apple", "Pear", "Cherry", "Plum", "Peach", "Apricot", "Mulberry", "Pawpaw"],
  // Zones 6–8: widest variety, classic backyard fruit trees
  moderate: ["Apple", "Peach", "Pear", "Cherry", "Plum", "Fig", "Persimmon", "Pomegranate"],
  // Zones 9–13: citrus and subtropical thrive
  warm: ["Orange", "Lemon", "Lime", "Grapefruit", "Fig", "Pomegranate", "Avocado", "Mango"],
};

function zoneToRange(zone: string): ZoneRange {
  // Zone string is like "8b", "5a", "10a" — parse the leading number
  const num = parseInt(zone, 10);
  if (isNaN(num) || num <= 5) return "cold";
  if (num <= 8) return "moderate";
  return "warm";
}

/**
 * Returns the 8 most popular fruit tree types for a given USDA zone.
 * Falls back to the "moderate" list if zone is missing or unparseable.
 */
export function getPopularTypesForZone(zone: string): FruitTreeType[] {
  return POPULAR_BY_ZONE[zoneToRange(zone)];
}

// ---------------------------------------------------------------------------
// Category map
// ---------------------------------------------------------------------------

export const TREE_CATEGORY_MAP: Record<FruitTreeType, TreeCategory> = {
  // Pome
  Apple: "Pome Fruit",
  Pear: "Pome Fruit",
  // Stone
  Peach: "Stone Fruit",
  Cherry: "Stone Fruit",
  Plum: "Stone Fruit",
  Apricot: "Stone Fruit",
  Nectarine: "Stone Fruit",
  // Citrus
  Lemon: "Citrus",
  Orange: "Citrus",
  Lime: "Citrus",
  Grapefruit: "Citrus",
  Mandarin: "Citrus",
  Tangelo: "Citrus",
  Tangerine: "Citrus",
  Kumquat: "Citrus",
  // Ficus
  Fig: "Ficus",
  // Subtropical
  Avocado: "Subtropical",
  Pomegranate: "Subtropical",
  Persimmon: "Subtropical",
  Olive: "Subtropical",
  // Tropical
  Date: "Tropical",
  Mango: "Tropical",
  Guava: "Tropical",
  // Berry / Other
  Mulberry: "Berry",
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
