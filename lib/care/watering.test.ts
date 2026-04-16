import { describe, expect, it } from "vitest";

import {
  FRUIT_TREE_TYPES,
  type FruitCategory,
} from "@/lib/fruit-tree-data";

import { getWateringGuide, getWateringGuideByCategory } from "./watering";

const ALL_CATEGORIES: FruitCategory[] = [
  "Citrus",
  "Stone Fruit",
  "Pome Fruit",
  "Tropical / Subtropical",
  "Other",
];

describe("getWateringGuide", () => {
  it("returns a complete guide for every fruit tree type", () => {
    for (const type of FRUIT_TREE_TYPES) {
      const guide = getWateringGuide(type);
      expect(guide.frequency, `frequency for ${type}`).toBeTruthy();
      expect(guide.amount, `amount for ${type}`).toBeTruthy();
      expect(guide.bestTime, `bestTime for ${type}`).toBeTruthy();
      expect(guide.tip, `tip for ${type}`).toBeTruthy();
      expect(guide.signs.overWatering.length).toBeGreaterThan(0);
      expect(guide.signs.underWatering.length).toBeGreaterThan(0);
    }
  });

  it("Apple and Pear share the Pome Fruit guide", () => {
    expect(getWateringGuide("Apple")).toBe(getWateringGuide("Pear"));
  });

  it("Peach and Cherry share the Stone Fruit guide", () => {
    expect(getWateringGuide("Peach")).toBe(getWateringGuide("Cherry"));
  });
});

describe("getWateringGuideByCategory", () => {
  it("returns a guide for every FruitCategory", () => {
    for (const category of ALL_CATEGORIES) {
      const guide = getWateringGuideByCategory(category);
      expect(guide.frequency).toBeTruthy();
      expect(guide.signs.overWatering.length).toBeGreaterThan(0);
      expect(guide.signs.underWatering.length).toBeGreaterThan(0);
    }
  });

  it("returns the same object reference as getWateringGuide for matching category", () => {
    // Apple -> Pome Fruit
    expect(getWateringGuide("Apple")).toBe(
      getWateringGuideByCategory("Pome Fruit"),
    );
  });
});
