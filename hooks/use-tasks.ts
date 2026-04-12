import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createTask,
  deleteTask,
  fetchTask,
  fetchTasks,
  fetchTasksByOrchard,
  updateTask,
} from "@/lib/services/task-service";
import type { NewTask } from "@/lib/schemas";
import type { Task } from "@/lib/types";

const tasksByTreeKey = (treeId: string | undefined) => ["tasks", "tree", treeId];
const tasksByOrchardKey = (orchardId: string | undefined) => [
  "tasks",
  "orchard",
  orchardId,
];

export function useTasks(treeId: string | undefined) {
  return useQuery({
    queryKey: tasksByTreeKey(treeId),
    queryFn: () => fetchTasks(treeId!),
    enabled: !!treeId,
  });
}

export function useTask(id: string | undefined) {
  return useQuery({
    queryKey: ["tasks", "detail", id],
    queryFn: () => fetchTask(id!),
    enabled: !!id,
  });
}

export function useAllTasks(orchardId: string | undefined) {
  return useQuery({
    queryKey: tasksByOrchardKey(orchardId),
    queryFn: () => fetchTasksByOrchard(orchardId!),
    enabled: !!orchardId,
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (task: NewTask) => createTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}

export function useToggleTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (args: { id: string; done: boolean }) =>
      updateTask(args.id, { done: args.done }),
    onMutate: async (args) => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] });
      const snapshots = queryClient.getQueriesData<Task[]>({
        queryKey: ["tasks"],
      });
      for (const [key, data] of snapshots) {
        if (!data) continue;
        queryClient.setQueryData<Task[]>(
          key,
          data.map((t) => (t.id === args.id ? { ...t, done: args.done } : t)),
        );
      }
      return { snapshots };
    },
    onError: (_err, _args, context) => {
      if (!context) return;
      for (const [key, data] of context.snapshots) {
        queryClient.setQueryData(key, data);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
