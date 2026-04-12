import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createTree,
  deleteTree,
  fetchTree,
  fetchTrees,
  updateTree,
} from "@/lib/services/tree-service";
import type { NewTree } from "@/lib/schemas";
import type { Tree } from "@/lib/types";

const treesKey = (orchardId: string | undefined) => ["trees", orchardId];
const treeDetailKey = (treeId: string) => ["trees", "detail", treeId];

export function useTrees(orchardId: string | undefined) {
  return useQuery({
    queryKey: treesKey(orchardId),
    queryFn: () => fetchTrees(orchardId!),
    enabled: !!orchardId,
  });
}

export function useTree(treeId: string | undefined) {
  return useQuery({
    queryKey: treeId ? treeDetailKey(treeId) : ["trees", "detail", "none"],
    queryFn: () => fetchTree(treeId!),
    enabled: !!treeId,
  });
}

export function useCreateTree() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (tree: NewTree) => createTree(tree),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trees"] });
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}

export function useUpdateTree() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (args: {
      id: string;
      fields: Partial<Omit<Tree, "id" | "orchardId">>;
    }) => updateTree(args.id, args.fields),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trees"] });
    },
  });
}

export function useDeleteTree() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteTree(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trees"] });
    },
  });
}
