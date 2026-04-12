import { supabase } from "@/lib/supabase";
import { taskSchema, type NewTask } from "@/lib/schemas";
import type { Task } from "@/lib/types";

const TASK_COLUMNS =
  "id, tree_id, title, why, done, created_at, trees!inner(name)";

export async function fetchTasks(treeId: string): Promise<Task[]> {
  const { data, error } = await supabase
    .from("tasks")
    .select(TASK_COLUMNS)
    .eq("tree_id", treeId)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => taskSchema.parse(row));
}

export async function fetchTasksByOrchard(orchardId: string): Promise<Task[]> {
  const { data, error } = await supabase
    .from("tasks")
    .select(TASK_COLUMNS)
    .eq("trees.orchard_id", orchardId)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => taskSchema.parse(row));
}

export async function createTask(task: NewTask): Promise<Task> {
  const { data, error } = await supabase
    .from("tasks")
    .insert({
      tree_id: task.treeId,
      title: task.title,
      why: task.why ?? null,
      done: task.done ?? false,
    })
    .select(TASK_COLUMNS)
    .single();
  if (error) throw error;
  return taskSchema.parse(data);
}

export async function updateTask(
  id: string,
  fields: { title?: string; why?: string; done?: boolean },
): Promise<Task> {
  const patch: Record<string, unknown> = {};
  if (fields.title !== undefined) patch.title = fields.title;
  if (fields.why !== undefined) patch.why = fields.why;
  if (fields.done !== undefined) patch.done = fields.done;

  const { data, error } = await supabase
    .from("tasks")
    .update(patch)
    .eq("id", id)
    .select(TASK_COLUMNS)
    .single();
  if (error) throw error;
  return taskSchema.parse(data);
}

export async function deleteTask(id: string): Promise<void> {
  const { error } = await supabase.from("tasks").delete().eq("id", id);
  if (error) throw error;
}
