import { supabase } from "@/lib/supabase";
import { taskSchema, type NewTask } from "@/lib/schemas";
import type { Task } from "@/lib/types";

const TASK_COLUMNS =
  "id, tree_id, title, why, created_at, due_date, category, description, template_id, window_start_month, window_start_day, window_end_month, window_end_day, trees!inner(name, type), task_completions(completed_at)";

export async function fetchTasks(treeId: string): Promise<Task[]> {
  const { data, error } = await supabase
    .from("tasks")
    .select(TASK_COLUMNS)
    .eq("tree_id", treeId)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => taskSchema.parse(row));
}

export async function fetchTask(id: string): Promise<Task | null> {
  const { data, error } = await supabase
    .from("tasks")
    .select(TASK_COLUMNS)
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data ? taskSchema.parse(data) : null;
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
      due_date: task.dueDate ?? null,
      category: task.category ?? null,
      description: task.description ?? null,
      template_id: task.templateId ?? null,
      window_start_month: task.windowStart?.month ?? null,
      window_start_day: task.windowStart?.day ?? null,
      window_end_month: task.windowEnd?.month ?? null,
      window_end_day: task.windowEnd?.day ?? null,
    })
    .select(TASK_COLUMNS)
    .single();
  if (error) throw error;
  return taskSchema.parse(data);
}

export interface TaskUpdateFields {
  title?: string;
  why?: string;
  dueDate?: string | null;
  category?: Task["category"] | null;
  description?: string | null;
}

export async function updateTask(
  id: string,
  fields: TaskUpdateFields,
): Promise<Task> {
  const patch: Record<string, unknown> = {};
  if (fields.title !== undefined) patch.title = fields.title;
  if (fields.why !== undefined) patch.why = fields.why;
  if (fields.dueDate !== undefined) patch.due_date = fields.dueDate;
  if (fields.category !== undefined) patch.category = fields.category;
  if (fields.description !== undefined) patch.description = fields.description;

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
