import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createCompletion,
  deleteCompletion,
  fetchCompletionsForTask,
  fetchCompletionsForTree,
} from "@/lib/services/completion-service";

export const completionsForTaskKey = (taskId: string | undefined) => [
  "completions",
  "task",
  taskId,
];
export const completionsForTreeKey = (treeId: string | undefined) => [
  "completions",
  "tree",
  treeId,
];

export function useCompletionsForTask(taskId: string | undefined) {
  return useQuery({
    queryKey: completionsForTaskKey(taskId),
    queryFn: () => fetchCompletionsForTask(taskId!),
    enabled: !!taskId,
  });
}

export function useCompletionsForTree(treeId: string | undefined) {
  return useQuery({
    queryKey: completionsForTreeKey(treeId),
    queryFn: () => fetchCompletionsForTree(treeId!),
    enabled: !!treeId,
  });
}

export function useCreateCompletion() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCompletion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["completions"] });
    },
  });
}

export function useDeleteCompletion() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCompletion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["completions"] });
    },
  });
}
