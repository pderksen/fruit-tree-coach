/**
 * Mock auth helpers — placeholder implementations that always succeed.
 * Will be replaced with real Supabase auth calls in a later phase.
 */

interface AuthResult {
  success: boolean;
  error?: string;
}

export async function signIn(
  _email: string,
  _password: string,
): Promise<AuthResult> {
  // TODO: Replace with supabase.auth.signInWithPassword({ email, password })
  return { success: true };
}

export async function signUp(
  _name: string,
  _email: string,
  _password: string,
): Promise<AuthResult> {
  // TODO: Replace with supabase.auth.signUp({ email, password, options: { data: { name } } })
  return { success: true };
}

export async function signOut(): Promise<void> {
  // TODO: Replace with supabase.auth.signOut()
}
