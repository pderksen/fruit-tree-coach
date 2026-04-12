import { supabase } from "@/lib/supabase";
import { profileSchema, type Profile } from "@/lib/schemas";

export async function fetchProfile(userId: string): Promise<Profile> {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, name, created_at")
    .eq("id", userId)
    .single();
  if (error) throw error;
  return profileSchema.parse(data);
}

export async function updateProfile(
  userId: string,
  fields: { name?: string },
): Promise<Profile> {
  const { data, error } = await supabase
    .from("profiles")
    .update(fields)
    .eq("id", userId)
    .select("id, name, created_at")
    .single();
  if (error) throw error;
  return profileSchema.parse(data);
}
