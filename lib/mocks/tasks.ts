import type { Task } from "@/lib/types";

export const MOCK_TASKS: Task[] = [
  {
    id: "t1",
    treeId: "1",
    treeName: "Honeycrisp Apple",
    title: "Prune crossing branches",
    why: "Removing crossing branches improves air circulation and reduces disease risk.",
    done: false,
  },
  {
    id: "t2",
    treeId: "2",
    treeName: "Elberta Peach",
    title: "Check for pests",
    why: "A quick look now can catch problems before they spread to new growth.",
    done: false,
  },
  {
    id: "t3",
    treeId: "3",
    treeName: "Meyer Lemon",
    title: "Apply fertilizer",
    why: "A spring feeding supports healthy leaf growth and future fruit production.",
    done: false,
  },
];
