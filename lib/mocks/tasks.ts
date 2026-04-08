import type { Task } from "@/lib/types";

export const MOCK_TASKS: Task[] = [
  {
    id: "t1",
    treeId: "1",
    treeName: "Backyard Fuji",
    title: "Thin fruit clusters",
    why: "Removing extra fruit helps the remaining ones grow bigger.",
    done: false,
  },
  {
    id: "t2",
    treeId: "3",
    treeName: "Side Yard Peach",
    title: "Check for pests",
    why: "A quick look now can catch problems before they spread.",
    done: false,
  },
  {
    id: "t3",
    treeId: "2",
    treeName: "Front Porch Fig",
    title: "Water deeply",
    why: "Deep watering encourages strong root growth.",
    done: false,
  },
  {
    id: "t4",
    treeId: "1",
    treeName: "Backyard Fuji",
    title: "Inspect for damaged branches",
    why: "Removing damaged wood helps prevent disease.",
    done: false,
  },
];
