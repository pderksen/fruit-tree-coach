/**
 * Watering guidance per fruit tree category.
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
import { TREE_CATEGORY_MAP, type TreeCategory } from "@/lib/fruit-tree-data";

export interface WateringGuide {
  frequency: string;
  amount: string;
  bestTime: string;
  signs: { overWatering: string[]; underWatering: string[] };
  tip: string;
}

// Guidance grouped by tree category since watering needs
// are broadly similar within categories.
// Source: UC Davis Fruit & Nut Research and Information Center
const WATERING_BY_CATEGORY: Record<TreeCategory, WateringGuide> = {
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
  Ficus: {
    frequency: "Water every 7–10 days; let soil dry slightly between waterings",
    amount: "5–10 gallons depending on tree size",
    bestTime: "Early morning",
    signs: {
      overWatering: [
        "Yellowing and dropping leaves",
        "Soft, spongy trunk base",
        "Sour-smelling soil",
      ],
      underWatering: [
        "Premature fruit drop",
        "Shriveled, dry figs",
        "Wilting leaves that feel papery",
      ],
    },
    tip: "Figs are drought-tolerant once established, but consistent moisture during fruiting produces much better harvests.",
  },
  Tropical: {
    frequency: "Water every 3–5 days; tropicals prefer consistently moist soil",
    amount: "10–15 gallons for mature trees",
    bestTime: "Early morning or late afternoon",
    signs: {
      overWatering: [
        "Brown, mushy roots",
        "Persistently soggy soil",
        "Fungal spots on leaves",
      ],
      underWatering: [
        "Brown, crispy leaf tips and edges",
        "Slow growth and small leaves",
        "Fruit drop before ripening",
      ],
    },
    tip: "Most tropical fruit trees need high humidity too. Misting leaves in dry climates helps, but good soil drainage is essential to prevent root rot.",
  },
  Subtropical: {
    frequency: "Water every 7–14 days depending on species and season",
    amount: "5–15 gallons depending on tree size",
    bestTime: "Early morning",
    signs: {
      overWatering: [
        "Root rot symptoms (wilting despite moist soil)",
        "Yellowing lower leaves",
        "Slow, weak new growth",
      ],
      underWatering: [
        "Wilting, especially in afternoon heat",
        "Leaf scorch on edges",
        "Reduced fruit set",
      ],
    },
    tip: "Subtropical trees vary widely. Pomegranates are drought-tolerant once established; avocados need consistently moist (never soggy) soil.",
  },
  Berry: {
    frequency: "Water every 5–7 days; keep soil consistently moist",
    amount: "3–5 gallons per plant",
    bestTime: "Early morning",
    signs: {
      overWatering: [
        "Root rot and crown rot",
        "Yellowing lower leaves",
        "Stunted growth",
      ],
      underWatering: [
        "Small, dry berries",
        "Wilting leaves",
        "Reduced yield",
      ],
    },
    tip: "Berry plants have shallow roots. A thick layer of mulch helps maintain even soil moisture throughout the growing season.",
  },
  Other: {
    frequency: "Water every 7–10 days during growing season",
    amount: "5–10 gallons depending on tree size",
    bestTime: "Early morning",
    signs: {
      overWatering: [
        "Yellowing leaves",
        "Root rot symptoms",
        "Fungal growth near trunk",
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
  const category = TREE_CATEGORY_MAP[treeType];
  return WATERING_BY_CATEGORY[category];
}

export function getWateringGuideByCategory(
  category: TreeCategory,
): WateringGuide {
  return WATERING_BY_CATEGORY[category];
}
