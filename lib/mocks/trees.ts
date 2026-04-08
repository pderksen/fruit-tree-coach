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
    description:
      "A crown jewel of the autumn harvest, known for its explosive crunch and honey-sweet flavor profile. Developed at the University of Minnesota, Honeycrisp thrives in cooler climates.",
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
    description:
      "The Elberta is a classic freestone peach prized for its juicy golden flesh and reliable harvests. One of the most popular varieties for home orchards across the US.",
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
    description:
      "A compact citrus tree that produces wonderfully fragrant, thin-skinned lemons year-round. Meyer lemons are sweeter than grocery-store varieties and perfect for patios.",
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
    description:
      "Brown Turkey figs are reliable producers that tolerate cooler climates better than most fig varieties. Their sweet, jammy fruit ripens in late summer.",
  },
];
