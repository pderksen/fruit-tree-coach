import type { Tree } from "@/lib/types";

export const MOCK_TREES: Tree[] = [
  {
    id: "1",
    name: "Honeycrisp Apple",
    type: "Apple",
    variety: "Honeycrisp",
    plantedOn: "2019-01-01",
    orchardId: "default",
    description:
      "A crown jewel of the autumn harvest, known for its explosive crunch and honey-sweet flavor profile. Developed at the University of Minnesota, Honeycrisp thrives in cooler climates.",
  },
  {
    id: "2",
    name: "Elberta Peach",
    type: "Peach",
    variety: "Elberta",
    plantedOn: "2021-01-01",
    orchardId: "default",
    description:
      "The Elberta is a classic freestone peach prized for its juicy golden flesh and reliable harvests. One of the most popular varieties for home orchards across the US.",
  },
  {
    id: "3",
    name: "Meyer Lemon",
    type: "Lemon",
    variety: "Meyer",
    plantedOn: "2022-01-01",
    orchardId: "default",
    description:
      "A compact citrus tree that produces wonderfully fragrant, thin-skinned lemons year-round. Meyer lemons are sweeter than grocery-store varieties and perfect for patios.",
  },
  {
    id: "4",
    name: "Brown Turkey Fig",
    type: "Fig",
    variety: "Brown Turkey",
    plantedOn: "2020-01-01",
    orchardId: "default",
    description:
      "Brown Turkey figs are reliable producers that tolerate cooler climates better than most fig varieties. Their sweet, jammy fruit ripens in late summer.",
  },
];
