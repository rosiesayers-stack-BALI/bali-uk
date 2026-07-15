// Real STAFF authentication for /admin, backed by Supabase Auth + user_roles.
//
// Preserves the mock API surface (adminLogin/adminLogout/getCurrentStaff/
// subscribeStaff, StaffUser type) so /admin components need no changes.

import { supabase } from "@/integrations/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";

export type StaffRole = "admin" | "editor";

export type StaffUser = {
  id: string;
  email: string;
  name: string;
  role: StaffRole;
};

type Listener = (user: StaffUser | null) => void;
const listeners = new Set<Listener>();

let currentStaff: StaffUser | null = null;
let initialized = false;
let resolveInit: () => void = () => {};
const initPromise = new Promise<void>((resolve) => {
  resolveInit = resolve;
});

function emit() {
  for (const l of listeners) l(currentStaff);
}

function markInitialized() {
  if (!initialized) {
    initialized = true;
    resolveInit();
  }
}

async function loadStaffFromSupabase(u: SupabaseUser | null | undefined): Promise<StaffUser | null> {
  if (!u) return null;
  const { data, error } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", u.id);
  if (error || !data || data.length === 0) return null;
  const isAdmin = data.some((r) => r.role === "admin");
  if (!isAdmin) return null;
  const meta = (u.user_metadata ?? {}) as Record<string, unknown>;
  const name =
    (typeof meta.full_name === "string" && meta.full_name) ||
    u.email?.split("@")[0] ||
    "Staff";
  return { id: u.id, email: u.email ?? "", name, role: "admin" };
}

async function refreshFromSession() {
  const { data } = await supabase.auth.getSession();
  currentStaff = await loadStaffFromSupabase(data.session?.user);
  markInitialized();
  emit();
}

if (typeof window !== "undefined") {
  refreshFromSession();
  supabase.auth.onAuthStateChange(async (_event, session) => {
    currentStaff = await loadStaffFromSupabase(session?.user);
    markInitialized();
    emit();
  });
}

export function waitForAdminAuthInit(): Promise<void> {
  return initPromise;
}

export function isAdminAuthInitialized(): boolean {
  return initialized;
}

export async function adminLogin(email: string, password: string): Promise<StaffUser> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });
  if (error || !data.user) {
    throw new Error(error?.message === "Invalid login credentials"
      ? "Invalid staff email or password."
      : error?.message ?? "Sign in failed.");
  }
  const staff = await loadStaffFromSupabase(data.user);
  if (!staff) {
    // Signed in but no admin role — sign back out so /admin never leaks.
    await supabase.auth.signOut();
    throw new Error("This account does not have staff access.");
  }
  currentStaff = staff;
  emit();
  return staff;
}

export async function adminLogout(): Promise<void> {
  await supabase.auth.signOut();
  currentStaff = null;
  emit();
}

export function getCurrentStaff(): StaffUser | null {
  return currentStaff;
}

export function subscribeStaff(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
