import { supabase } from "@/lib/supabase";

interface AuthResult {
  success: boolean;
  error?: string;
}

/** Map Supabase error messages to user-friendly strings */
function friendlyError(message: string): string {
  if (message.includes("Invalid login credentials")) {
    return "Incorrect email or password";
  }
  if (message.includes("User already registered")) {
    return "An account with this email already exists";
  }
  if (message.includes("Email not confirmed")) {
    return "Please check your email to confirm your account";
  }
  if (
    message.includes("Failed to fetch") ||
    message.includes("NetworkError") ||
    message.includes("network")
  ) {
    return "Unable to connect. Check your internet connection.";
  }
  return message;
}

export async function signIn(
  email: string,
  password: string,
): Promise<AuthResult> {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    return { success: false, error: friendlyError(error.message) };
  }
  return { success: true };
}

export async function signUp(
  name: string,
  email: string,
  password: string,
): Promise<AuthResult> {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });
  if (error) {
    return { success: false, error: friendlyError(error.message) };
  }
  return { success: true };
}

export async function signOut(): Promise<void> {
  await supabase.auth.signOut();
}

export async function resetPassword(email: string): Promise<AuthResult> {
  const { error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) {
    return { success: false, error: friendlyError(error.message) };
  }
  return { success: true };
}
