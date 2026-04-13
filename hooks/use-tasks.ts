import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { computeTaskStatus } from "@/lib/care/task-windows";
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

/**
 * Decorate tasks with today-relative status and drop anything hidden.
 * Done tasks stay visible (users want to see what they've checked off)
 * regardless of window — their status is taken from the window if present.
 */
function filterAndDecorate(tasks: Task[], today: Date): Task[] {
  const out: Task[] = [];
  for (const task of tasks) {
    const { status, displayWindow } = computeTaskStatus(task, today);
    if (status === "hidden" && !task.done) continue;
    out.push({
      ...task,
      status: status === "hidden" ? undefined : status,
      displayWindow: displayWindow || undefined,
    });
  }
  return out;
}

export function useTasks(treeId: string | undefined) {
  return useQuery({
    queryKey: tasksByTreeKey(treeId),
    queryFn: () => fetchTasks(treeId!),
    enabled: !!treeId,
    select: (data) => filterAndDecorate(data, new Date()),
  });
}

/** Unfiltered variant — use for calendar views that must show future months. */
export function useAllTasksRaw(treeId: string | undefined) {
  return useQuery({
    queryKey: [...tasksByTreeKey(treeId), "raw"],
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
    select: (data) => filterAndDecorate(data, new Date()),
  });
}

/** Unfiltered orchard-wide tasks. Calendar uses this to show all months. */
export function useAllTasksByOrchardRaw(orchardId: string | undefined) {
  return useQuery({
    queryKey: [...tasksByOrchardKey(orchardId), "raw"],
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
