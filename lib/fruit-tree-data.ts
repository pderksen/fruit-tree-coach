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
  "Crabapple",
  "Quince",
  "Medlar",
  // --- Stone ---
  "Apricot",
  "Nectarine",
  // --- Citrus ---
  "Grapefruit",
  "Tangerine",
  "Kumquat",
  // --- Subtropical ---
  "Avocado",
  "Pomegranate",
  "Persimmon",
  "Olive",
  "Jujube",
  "Loquat",
  // --- Tropical ---
  "Mango",
  "Guava",
  "Papaya",
  "Banana",
  "Passion Fruit",
  "Dragon Fruit",
  "Kiwi",
  "Jackfruit",
  "Starfruit",
  "Coconut",
  "Date Palm",
  // --- Berry / Other ---
  "Mulberry",
  "Pawpaw",
  "Gooseberry",
  "Elderberry",
];

/** Number of "popular" types shown before the categorised groups. */
export const POPULAR_TYPE_COUNT = 9;

// ---------------------------------------------------------------------------
// Category map
// ---------------------------------------------------------------------------

export const TREE_CATEGORY_MAP: Record<FruitTreeType, TreeCategory> = {
  // Pome
  Apple: "Pome Fruit",
  Pear: "Pome Fruit",
  Crabapple: "Pome Fruit",
  Quince: "Pome Fruit",
  Medlar: "Pome Fruit",
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
  Tangerine: "Citrus",
  Kumquat: "Citrus",
  // Ficus
  Fig: "Ficus",
  // Subtropical
  Avocado: "Subtropical",
  Pomegranate: "Subtropical",
  Persimmon: "Subtropical",
  Olive: "Subtropical",
  Jujube: "Subtropical",
  Loquat: "Subtropical",
  // Tropical
  Mango: "Tropical",
  Guava: "Tropical",
  Papaya: "Tropical",
  Banana: "Tropical",
  "Passion Fruit": "Tropical",
  "Dragon Fruit": "Tropical",
  Kiwi: "Tropical",
  Jackfruit: "Tropical",
  Starfruit: "Tropical",
  Coconut: "Tropical",
  "Date Palm": "Tropical",
  // Berry / Other
  Mulberry: "Berry",
  Pawpaw: "Other",
  Gooseberry: "Berry",
  Elderberry: "Berry",
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
  Fig: "\uD83C\uDF33", // 🌳 — no dedicated fig emoji; placeholder until icon image is added
  Lemon: "\uD83C\uDF4B", // 🍋
  Orange: "\uD83C\uDF4A", // 🍊
  Lime: "\uD83C\uDF4B", // 🍋 (closest match)
  Crabapple: "\uD83C\uDF4E", // 🍎
  Quince: "\uD83C\uDF50", // 🍐 (closest match)
  Medlar: "\uD83C\uDF33", // 🌳
  Apricot: "\uD83C\uDF51", // 🍑 (closest match)
  Nectarine: "\uD83C\uDF51", // 🍑 (closest match)
  Grapefruit: "\uD83C\uDF4A", // 🍊 (closest match)
  Tangerine: "\uD83C\uDF4A", // 🍊
  Kumquat: "\uD83C\uDF4A", // 🍊 (closest match)
  Avocado: "\uD83E\uDD51", // 🥑
  Pomegranate: "\uD83C\uDF33", // 🌳
  Persimmon: "\uD83C\uDF33", // 🌳
  Olive: "\uD83E\uDED2", // 🫒
  Jujube: "\uD83C\uDF33", // 🌳
  Loquat: "\uD83C\uDF4A", // 🍊 (closest match)
  Mango: "\uD83E\uDD6D", // 🥭
  Guava: "\uD83C\uDF53", // 🍓 (closest match)
  Papaya: "\uD83C\uDF33", // 🌳
  Banana: "\uD83C\uDF4C", // 🍌
  "Passion Fruit": "\uD83C\uDF33", // 🌳
  "Dragon Fruit": "\uD83C\uDF33", // 🌳
  Kiwi: "\uD83E\uDD5D", // 🥝
  Jackfruit: "\uD83C\uDF33", // 🌳
  Starfruit: "\u2B50", // ⭐ (playful match)
  Coconut: "\uD83E\uDD65", // 🥥
  "Date Palm": "\uD83C\uDF34", // 🌴
  Mulberry: "\uD83C\uDFF4", // 🫐 fallback to 🌳
  Pawpaw: "\uD83C\uDF33", // 🌳
  Gooseberry: "\uD83C\uDF53", // 🍓 (closest match)
  Elderberry: "\uD83C\uDF47", // 🍇 (closest match)
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
  Crabapple: "Malus sylvestris",
  Quince: "Cydonia oblonga",
  Medlar: "Mespilus germanica",
  Apricot: "Prunus armeniaca",
  Nectarine: "Prunus persica var. nucipersica",
  Grapefruit: "Citrus paradisi",
  Tangerine: "Citrus reticulata",
  Kumquat: "Fortunella japonica",
  Avocado: "Persea americana",
  Pomegranate: "Punica granatum",
  Persimmon: "Diospyros kaki",
  Olive: "Olea europaea",
  Jujube: "Ziziphus jujuba",
  Loquat: "Eriobotrya japonica",
  Mango: "Mangifera indica",
  Guava: "Psidium guajava",
  Papaya: "Carica papaya",
  Banana: "Musa acuminata",
  "Passion Fruit": "Passiflora edulis",
  "Dragon Fruit": "Selenicereus undatus",
  Kiwi: "Actinidia deliciosa",
  Jackfruit: "Artocarpus heterophyllus",
  Starfruit: "Averrhoa carambola",
  Coconut: "Cocos nucifera",
  "Date Palm": "Phoenix dactylifera",
  Mulberry: "Morus alba",
  Pawpaw: "Asimina triloba",
  Gooseberry: "Ribes uva-crispa",
  Elderberry: "Sambucus nigra",
};
