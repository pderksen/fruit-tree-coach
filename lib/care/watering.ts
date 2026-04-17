/**
 * Watering guidance per fruit category.
 *
 * Sources:
 * - UC Davis Fruit & Nut Research and Information Center
 *   (https://fruitsandnuts.ucdavis.edu)
 * - Oregon State University Extension Service
 *   (https://extension.oregonstate.edu)
 * - University of Florida IFAS Extension
 *   (https://edis.ifas.ufl.edu)
 */

import type { FruitTreeType } from "@/lib/types";
import { FRUIT_CATEGORY_MAP, type FruitCategory } from "@/lib/fruit-tree-data";

export interface WateringGuide {
  frequency: string;
  amount: string;
  bestTime: string;
  signs: { overWatering: string[]; underWatering: string[] };
  tip: string;
}

// Guidance grouped by fruit category since watering needs
// are broadly similar within categories.
// Source: UC Davis Fruit & Nut Research and Information Center
const WATERING_BY_CATEGORY: Record<FruitCategory, WateringGuide> = {
  Citrus: {
    frequency: "Water every 5–7 days in summer, every 2–3 weeks in winter",
    amount: "5–10 gallons depending on tree size",
    bestTime: "Early morning",
    signs: {
      overWatering: [
        "Yellowing leaves throughout the canopy",
        "Leaf drop even with green leaves",
        "Root rot (sour smell at soil line)",
      ],
      underWatering: [
        "Leaf curling and wilting",
        "Dry, hard fruit with thick peel",
        "Leaf drop starting from the interior",
      ],
    },
    tip: "Citrus trees are evergreen and need water year-round. Mulch 3–4 inches around the base (keep mulch away from the trunk) to retain moisture.",
  },
  "Stone Fruit": {
    frequency: "Deep water every 7–14 days during growing season",
    amount: "10–15 gallons per inch of trunk diameter",
    bestTime: "Early morning",
    signs: {
      overWatering: [
        "Splitting fruit near harvest",
        "Yellowing leaves with green veins",
        "Root rot or gummosis at trunk base",
      ],
      underWatering: [
        "Pit burn (darkened flesh around the pit)",
        "Curling, crispy leaf edges",
        "Undersized fruit that drops early",
      ],
    },
    tip: "Reduce watering 2 weeks before harvest to prevent fruit splitting. Resume after picking.",
  },
  "Pome Fruit": {
    frequency: "Deep water every 7–10 days during growing season",
    amount: "10–15 gallons per inch of trunk diameter",
    bestTime: "Early morning",
    signs: {
      overWatering: [
        "Yellowing leaves that drop easily",
        "Soft, mushy root crown",
        "Fungal growth at soil surface",
      ],
      underWatering: [
        "Wilting leaves that curl inward",
        "Small, shriveled fruit",
        "Premature leaf drop",
      ],
    },
    tip: "Water at the drip line, not the trunk. Apples and pears have shallow feeder roots that extend to the canopy edge.",
  },
  "Tropical / Subtropical": {
    frequency: "Water every 5–14 days depending on species; tropicals prefer consistently moist soil, drought-tolerant subtropicals (pomegranate, olive) can go longer",
    amount: "5–15 gallons depending on tree size",
    bestTime: "Early morning",
    signs: {
      overWatering: [
        "Root rot symptoms (wilting despite moist soil)",
        "Persistently soggy soil",
        "Fungal spots on leaves",
      ],
      underWatering: [
        "Brown, crispy leaf tips and edges",
        "Wilting in afternoon heat",
        "Fruit drop before ripening",
      ],
    },
    tip: "Avocados need consistently moist (never soggy) soil; pomegranates and olives are drought-tolerant once established. Check soil 4–6 inches deep before watering.",
  },
  Other: {
    frequency: "Water every 7–10 days during growing season; figs can go longer once established",
    amount: "5–10 gallons depending on tree size",
    bestTime: "Early morning",
    signs: {
      overWatering: [
        "Yellowing leaves that drop easily",
        "Root rot symptoms",
        "Fungal growth near trunk base",
      ],
      underWatering: [
        "Wilting and leaf curl",
        "Premature fruit drop",
        "Stunted growth",
      ],
    },
    tip: "When in doubt, check soil moisture 4–6 inches deep before watering. If it feels moist, wait another day or two.",
  },
};

export function getWateringGuide(treeType: FruitTreeType): WateringGuide {
  const category = FRUIT_CATEGORY_MAP[treeType];
  return WATERING_BY_CATEGORY[category];
}

export function getWateringGuideByCategory(
  category: FruitCategory,
): WateringGuide {
  return WATERING_BY_CATEGORY[category];
}
