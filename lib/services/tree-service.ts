import { supabase } from "@/lib/supabase";
import { treeSchema, type NewTree } from "@/lib/schemas";
import type { Tree } from "@/lib/types";

// Generic starter tasks inserted when a new tree is created.
// These are placeholders until a real care-plan generator lands.
const STARTER_TASKS: {
  title: string;
  why: string;
  description: string;
  category: "pruning" | "feeding" | "monitoring";
  season: string;
  priority: boolean;
}[] = [
  {
    title: "Check tree health",
    why: "Regular inspection catches pests and disease early.",
    description:
      "Walk around your tree. Look at leaves, bark, and branch tips for anything unusual.",
    category: "monitoring",
    season: "Spring",
    priority: true,
  },
  {
    title: "Apply spring compost",
    why: "A compost ring feeds the roots as the tree breaks dormancy.",
    description:
      "Spread 2–3 inches of compost around the drip line, keeping it clear of the trunk.",
    category: "feeding",
    season: "Spring",
    priority: false,
  },
  {
    title: "Light shape pruning",
    why: "Removing dead and crossing branches improves airflow and reduces disease risk.",
    category: "pruning",
    description:
      "Snip out dead, damaged, or crossing branches with clean, sharp secateurs.",
    season: "Late Winter",
    priority: false,
  },
];

const TREE_COLUMNS =
  "id, orchard_id, name, type, variety, planted_year, planted_date, age_bracket, description, status_label, status_description, created_at";

export async function fetchTrees(orchardId: string): Promise<Tree[]> {
  const { data, error } = await supabase
    .from("trees")
    .select(TREE_COLUMNS)
    .eq("orchard_id", orchardId)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => treeSchema.parse(row));
}

export async function fetchTree(id: string): Promise<Tree | null> {
  const { data, error } = await supabase
    .from("trees")
    .select(TREE_COLUMNS)
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data ? treeSchema.parse(data) : null;
}

export async function createTree(tree: NewTree): Promise<Tree> {
  const { data, error } = await supabase
    .from("trees")
    .insert({
      orchard_id: tree.orchardId,
      name: tree.name,
      type: tree.type,
      variety: tree.variety ?? null,
      planted_year: tree.plantedYear ?? null,
      planted_date: tree.plantedDate ?? null,
      age_bracket: tree.ageBracket ?? null,
      description: tree.description ?? null,
      status_label: tree.statusLabel ?? null,
      status_description: tree.statusDescription ?? null,
    })
    .select(TREE_COLUMNS)
    .single();
  if (error) throw error;
  const created = treeSchema.parse(data);
  await seedStarterTasks(created.id);
  return created;
}

async function seedStarterTasks(treeId: string): Promise<void> {
  const rows = STARTER_TASKS.map((t) => ({
    tree_id: treeId,
    title: t.title,
    why: t.why,
    description: t.description,
    category: t.category,
    season: t.season,
    priority: t.priority,
    done: false,
  }));
  const { error } = await supabase.from("tasks").insert(rows);
  if (error) throw error;
}

export async function updateTree(
  id: string,
  fields: Partial<Omit<Tree, "id" | "orchardId">>,
): Promise<Tree> {
  const patch: Record<string, unknown> = {};
  if (fields.name !== undefined) patch.name = fields.name;
  if (fields.type !== undefined) patch.type = fields.type;
  if (fields.variety !== undefined) patch.variety = fields.variety ?? null;
  if (fields.plantedYear !== undefined)
    patch.planted_year = fields.plantedYear ?? null;
  if (fields.plantedDate !== undefined)
    patch.planted_date = fields.plantedDate ?? null;
  if (fields.ageBracket !== undefined)
    patch.age_bracket = fields.ageBracket ?? null;
  if (fields.description !== undefined)
    patch.description = fields.description ?? null;
  if (fields.statusLabel !== undefined)
    patch.status_label = fields.statusLabel ?? null;
  if (fields.statusDescription !== undefined)
    patch.status_description = fields.statusDescription ?? null;

  const { data, error } = await supabase
    .from("trees")
    .update(patch)
    .eq("id", id)
    .select(TREE_COLUMNS)
    .single();
  if (error) throw error;
  return treeSchema.parse(data);
}

export async function deleteTree(id: string): Promise<void> {
  const { error } = await supabase.from("trees").delete().eq("id", id);
  if (error) throw error;
}
