import { supabase } from "@/lib/supabase";
import { taskCompletionSchema } from "@/lib/schemas";
import type { TaskCompletion } from "@/lib/types";

const COLS = "id, task_id, tree_id, completed_at, notes, outcome";

export async function fetchCompletionsForTask(
  taskId: string,
): Promise<TaskCompletion[]> {
  const { data, error } = await supabase
    .from("task_completions")
    .select(COLS)
    .eq("task_id", taskId)
    .order("completed_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map((row) => taskCompletionSchema.parse(row));
}

export async function fetchCompletionsForTree(
  treeId: string,
): Promise<TaskCompletion[]> {
  const { data, error } = await supabase
    .from("task_completions")
    .select(COLS)
    .eq("tree_id", treeId)
    .order("completed_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map((row) => taskCompletionSchema.parse(row));
}

export async function createCompletion(args: {
  taskId: string;
  treeId: string;
  notes?: string;
  outcome?: "completed" | "missed";
}): Promise<TaskCompletion> {
  const { data, error } = await supabase
    .from("task_completions")
    .insert({
      task_id: args.taskId,
      tree_id: args.treeId,
      notes: args.notes ?? null,
      outcome: args.outcome ?? "completed",
    })
    .select(COLS)
    .single();
  if (error) throw error;
  return taskCompletionSchema.parse(data);
}

export async function deleteCompletion(id: string): Promise<void> {
  const { error } = await supabase
    .from("task_completions")
    .delete()
    .eq("id", id);
  if (error) throw error;
}
