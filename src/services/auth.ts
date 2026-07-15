// Real authentication backed by Supabase Auth.
//
// This module keeps the same public API surface the rest of the app already
// consumes (login/logout/forgotPassword/resetPassword/changePassword/
// getCurrentUser/subscribe), so downstream components don't need to change.
//
// The exported `MockUser` name is preserved for backwards compat — it now
// represents a real authenticated user.

import { supabase } from "@/integrations/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";

export type MockUser = {
  id: string;
  email: string;
  name: string;
};

type Listener = (user: MockUser | null) => void;
const listeners = new Set<Listener>();

let currentUser: MockUser | null = null;
let initialized = false;
let resolveInit: () => void = () => {};
const initPromise = new Promise<void>((resolve) => {
  resolveInit = resolve;
});

function toAppUser(u: SupabaseUser | null | undefined): MockUser | null {
  if (!u) return null;
  const meta = (u.user_metadata ?? {}) as Record<string, unknown>;
  const first = typeof meta.first_name === "string" ? meta.first_name : "";
  const last = typeof meta.last_name === "string" ? meta.last_name : "";
  const full = typeof meta.full_name === "string" ? meta.full_name : "";
  const fromMeta = full || `${first} ${last}`.trim();
  const emailLocal = u.email?.split("@")[0]?.replace(/\./g, " ") ?? "Member";
  const name = fromMeta || emailLocal;
  return { id: u.id, email: u.email ?? "", name };
}

function emit() {
  for (const l of listeners) l(currentUser);
}

function markInitialized() {
  if (!initialized) {
    initialized = true;
    resolveInit();
  }
}

// Bootstrap current session on module load (client-side) and subscribe to
// Supabase auth changes so all consumers stay in sync.
if (typeof window !== "undefined") {
  supabase.auth.getSession().then(({ data }) => {
    currentUser = toAppUser(data.session?.user);
    markInitialized();
    emit();
  });
  supabase.auth.onAuthStateChange((_event, session) => {
    currentUser = toAppUser(session?.user);
    markInitialized();
    emit();
  });
}

export function waitForAuthInit(): Promise<void> {
  return initPromise;
}

export function isAuthInitialized(): boolean {
  return initialized;
}

export async function login(email: string, password: string): Promise<MockUser> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });
  if (error || !data.user) {
    throw new Error(error?.message === "Invalid login credentials"
      ? "Invalid email or password."
      : error?.message ?? "Sign in failed.");
  }
  const user = toAppUser(data.user)!;
  currentUser = user;
  emit();
  return user;
}

export async function logout(): Promise<void> {
  await supabase.auth.signOut();
  currentUser = null;
  emit();
}

export async function forgotPassword(email: string): Promise<{ resetToken: string }> {
  const redirectTo =
    typeof window !== "undefined" ? `${window.location.origin}/reset-password` : undefined;
  const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo });
  if (error) throw new Error(error.message);
  // Supabase handles the reset token via the emailed magic link; no token
  // is surfaced to the client here. Return an empty string for API compat.
  return { resetToken: "" };
}

// The user arrives on /reset-password via a Supabase magic link which
// establishes a temporary session in the URL hash. The `_token` arg is
// ignored — we just call updateUser on the active session.
export async function resetPassword(_token: string, newPassword: string): Promise<void> {
  if (newPassword.length < 8) throw new Error("Password must be at least 8 characters.");
  const { error } = await supabase.auth.updateUser({ password: newPassword });
  if (error) throw new Error(error.message);
}

export async function changePassword(oldPassword: string, newPassword: string): Promise<void> {
  if (!currentUser) throw new Error("You must be signed in.");
  if (newPassword.length < 8) throw new Error("New password must be at least 8 characters.");
  // Re-authenticate with the current password to verify it.
  const { error: verifyErr } = await supabase.auth.signInWithPassword({
    email: currentUser.email,
    password: oldPassword,
  });
  if (verifyErr) throw new Error("Current password is incorrect.");
  const { error } = await supabase.auth.updateUser({ password: newPassword });
  if (error) throw new Error(error.message);
}

export function getCurrentUser(): MockUser | null {
  return currentUser;
}

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
