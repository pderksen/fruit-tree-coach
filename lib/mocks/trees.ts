import type { Tree } from "@/lib/types";

export const MOCK_TREES: Tree[] = [
  {
    id: "1",
    name: "Honeycrisp Apple",
    type: "Apple",
    variety: "Honeycrisp",
    plantedYear: 2019,
    zipCode: "97201",
    statusLabel: "Pruning time",
    statusDescription:
      "Now is a good time to prune your apple tree. It helps with light penetration and air flow for the upcoming buds.",
  },
  {
    id: "2",
    name: "Elberta Peach",
    type: "Peach",
    variety: "Elberta",
    plantedYear: 2021,
    zipCode: "97201",
    statusLabel: "Budding soon",
    statusDescription:
      "Your peach tree is showing early signs of waking up. Keep an eye on those delicate buds as the nights stay cool.",
  },
  {
    id: "3",
    name: "Meyer Lemon",
    type: "Lemon",
    variety: "Meyer",
    plantedYear: 2022,
    zipCode: "97201",
    statusLabel: "Feed me",
    statusDescription:
      "Spring is the time for a light feeding. A high-nitrogen organic fertilizer will help these glossy leaves stay deep green.",
  },
  {
    id: "4",
    name: "Brown Turkey Fig",
    type: "Fig",
    variety: "Brown Turkey",
    plantedYear: 2020,
    zipCode: "97201",
    statusLabel: "Stable growth",
    statusDescription:
      "Figs are hardy and require minimal care right now. Ensure the soil remains well-drained as we enter the rainy season.",
  },
];
