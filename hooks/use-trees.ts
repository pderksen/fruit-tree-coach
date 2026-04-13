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
    onMutate: async (tree) => {
      const listKey = treesKey(tree.orchardId);
      await queryClient.cancelQueries({ queryKey: listKey });
      const previous = queryClient.getQueryData<Tree[]>(listKey);
      const tempId = `temp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const optimistic: Tree = {
        id: tempId,
        orchardId: tree.orchardId,
        name: tree.name,
        type: tree.type,
        variety: tree.variety,
        plantedOn: tree.plantedOn,
        ageBracket: tree.ageBracket,
        description: tree.description,
      };
      queryClient.setQueryData<Tree[]>(listKey, [...(previous ?? []), optimistic]);
      return { listKey, previous };
    },
    onError: (_err, _tree, context) => {
      if (!context) return;
      queryClient.setQueryData(context.listKey, context.previous);
    },
    onSettled: () => {
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
    onMutate: async (args) => {
      await queryClient.cancelQueries({ queryKey: ["trees"] });
      const listSnapshots = queryClient.getQueriesData<Tree[]>({
        queryKey: ["trees"],
      });
      for (const [key, data] of listSnapshots) {
        if (!Array.isArray(data)) continue;
        queryClient.setQueryData<Tree[]>(
          key,
          data.map((t) => (t.id === args.id ? { ...t, ...args.fields } : t)),
        );
      }
      const detailKey = treeDetailKey(args.id);
      const detailPrev = queryClient.getQueryData<Tree>(detailKey);
      if (detailPrev) {
        queryClient.setQueryData<Tree>(detailKey, { ...detailPrev, ...args.fields });
      }
      return { listSnapshots, detailKey, detailPrev };
    },
    onError: (_err, _args, context) => {
      if (!context) return;
      for (const [key, data] of context.listSnapshots) {
        queryClient.setQueryData(key, data);
      }
      if (context.detailPrev !== undefined) {
        queryClient.setQueryData(context.detailKey, context.detailPrev);
      }
    },
    onSettled: () => {
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
