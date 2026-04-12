import { supabase } from "@/lib/supabase";
import {
  orchardSchema,
  type NewOrchard,
  type OrchardWithUser,
} from "@/lib/schemas";

const ORCHARD_COLUMNS = "id, user_id, name, zip_code, zone, created_at";

export async function fetchOrchards(userId: string): Promise<OrchardWithUser[]> {
  const { data, error } = await supabase
    .from("orchards")
    .select(ORCHARD_COLUMNS)
    .eq("user_id", userId)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => orchardSchema.parse(row));
}

export async function createOrchard(
  orchard: NewOrchard,
): Promise<OrchardWithUser> {
  const { data, error } = await supabase
    .from("orchards")
    .insert({
      user_id: orchard.userId,
      name: orchard.name,
      zip_code: orchard.zipCode ?? null,
      zone: orchard.zone ?? null,
    })
    .select(ORCHARD_COLUMNS)
    .single();
  if (error) throw error;
  return orchardSchema.parse(data);
}

export async function updateOrchard(
  id: string,
  fields: { name?: string; zipCode?: string; zone?: string },
): Promise<OrchardWithUser> {
  const patch: Record<string, unknown> = {};
  if (fields.name !== undefined) patch.name = fields.name;
  if (fields.zipCode !== undefined) patch.zip_code = fields.zipCode;
  if (fields.zone !== undefined) patch.zone = fields.zone;

  const { data, error } = await supabase
    .from("orchards")
    .update(patch)
    .eq("id", id)
    .select(ORCHARD_COLUMNS)
    .single();
  if (error) throw error;
  return orchardSchema.parse(data);
}

export async function deleteOrchard(id: string): Promise<void> {
  const { error } = await supabase.from("orchards").delete().eq("id", id);
  if (error) throw error;
}
