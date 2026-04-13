import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { computeTaskStatus, type TaskStatusResult } from "@/lib/care/task-windows";
import {
  createCompletion,
  deleteCompletion,
  fetchCompletionsForTask,
} from "@/lib/services/completion-service";
import {
  createTask,
  deleteTask,
  fetchTask,
  fetchTasks,
  fetchTasksByOrchard,
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
 */
function filterAndDecorate(tasks: Task[], today: Date): Task[] {
  const out: Task[] = [];
  for (const task of tasks) {
    const result: TaskStatusResult = computeTaskStatus(task, today);
    const { status, displayWindow } = result;
    if (status === "hidden") continue;
    out.push({
      ...task,
      status,
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

/**
 * Toggle task done-ness for the current window:
 * - done=true  → insert a completion row
 * - done=false → delete the most recent completion that falls within the
 *   current window (no-op if none)
 */
export function useToggleTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (args: { task: Task; done: boolean }) => {
      if (args.done) {
        await createCompletion({
          taskId: args.task.id,
          treeId: args.task.treeId,
        });
        return;
      }
      const { resolvedStart, resolvedEnd } = computeTaskStatus(
        args.task,
        new Date(),
      );
      const completions = await fetchCompletionsForTask(args.task.id);
      const inWindow =
        resolvedStart && resolvedEnd
          ? completions.find((c) => {
              const ts = new Date(c.completedAt);
              return ts >= resolvedStart && ts <= resolvedEnd;
            })
          : completions[0];
      if (inWindow) await deleteCompletion(inWindow.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["completions"] });
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
