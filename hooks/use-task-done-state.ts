import { useCompletionsForTask } from "@/hooks/use-task-completions";
import { computeTaskStatus } from "@/lib/care/task-windows";
import type { Task } from "@/lib/types";

/**
 * A task is "done this window" if any completion's completed_at falls
 * between the resolved window start and end computed by
 * computeTaskStatus. Prior-year completions don't count.
 */
export function useIsTaskDoneThisWindow(task: Task | undefined): {
  data: boolean;
  isLoading: boolean;
} {
  const { data: completions, isLoading } = useCompletionsForTask(task?.id);
  if (!task || isLoading) return { data: false, isLoading };
  const { resolvedStart, resolvedEnd } = computeTaskStatus(task, new Date());
  if (!resolvedStart || !resolvedEnd) return { data: false, isLoading: false };
  const done = (completions ?? []).some((c) => {
    const ts = new Date(c.completedAt);
    return ts >= resolvedStart && ts <= resolvedEnd;
  });
  return { data: done, isLoading: false };
}
