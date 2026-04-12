import { supabase } from "@/lib/supabase";
import { taskSchema, type NewTask } from "@/lib/schemas";
import type { Task } from "@/lib/types";

const TASK_COLUMNS =
  "id, tree_id, title, why, done, created_at, due_date, category, priority, season, time_window, description, guide_task_id, trees!inner(name, type)";

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
      done: task.done ?? false,
      due_date: task.dueDate ?? null,
      category: task.category ?? null,
      priority: task.priority ?? false,
      season: task.season ?? null,
      time_window: task.timeWindow ?? null,
      description: task.description ?? null,
      guide_task_id: task.guideTaskId ?? null,
    })
    .select(TASK_COLUMNS)
    .single();
  if (error) throw error;
  return taskSchema.parse(data);
}

export interface TaskUpdateFields {
  title?: string;
  why?: string;
  done?: boolean;
  dueDate?: string | null;
  category?: Task["category"] | null;
  priority?: boolean;
  season?: string | null;
  timeWindow?: string | null;
  description?: string | null;
  guideTaskId?: string | null;
}

export async function updateTask(
  id: string,
  fields: TaskUpdateFields,
): Promise<Task> {
  const patch: Record<string, unknown> = {};
  if (fields.title !== undefined) patch.title = fields.title;
  if (fields.why !== undefined) patch.why = fields.why;
  if (fields.done !== undefined) patch.done = fields.done;
  if (fields.dueDate !== undefined) patch.due_date = fields.dueDate;
  if (fields.category !== undefined) patch.category = fields.category;
  if (fields.priority !== undefined) patch.priority = fields.priority;
  if (fields.season !== undefined) patch.season = fields.season;
  if (fields.timeWindow !== undefined) patch.time_window = fields.timeWindow;
  if (fields.description !== undefined) patch.description = fields.description;
  if (fields.guideTaskId !== undefined)
    patch.guide_task_id = fields.guideTaskId;

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
