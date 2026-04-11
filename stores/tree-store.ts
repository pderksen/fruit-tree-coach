import { create } from "zustand";

import { MOCK_TREES } from "@/lib/mocks/trees";
import type { Tree } from "@/lib/types";

interface TreeStore {
  trees: Tree[];
  addTree: (tree: Tree) => void;
}

export const useTreeStore = create<TreeStore>((set) => ({
  trees: MOCK_TREES,
  addTree: (tree) => set((state) => ({ trees: [...state.trees, tree] })),
}));
