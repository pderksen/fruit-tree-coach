/**
 * Is this task done within its current window?
 *
 * Stub implementation returns false. Task 4 wires this to task_completions.
 */
export function useIsTaskDoneThisWindow(_taskId: string | undefined): {
  data: boolean;
  isLoading: boolean;
} {
  return { data: false, isLoading: false };
}
