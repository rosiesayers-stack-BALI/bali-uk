// Mock auth service — frontend-only, in-memory + localStorage.
// TODO: replace every function in this file with real backend API calls
// once our own backend server is available.

export type MockUser = {
  id: string;
  email: string;
  name: string;
};

type StoredUser = MockUser & { password: string };

const STORAGE_KEY = "mybali_session_v1";
const FAKE_DELAY_MS = 300;

// Seeded demo users. TODO: remove once real backend is wired.
const users: StoredUser[] = [
  { id: "u_demo", email: "demo@bali.org.uk", name: "Demo Member", password: "password123" },
];

// In-memory reset tokens (email -> token, expires).
const resetTokens = new Map<string, { email: string; expiresAt: number }>();

type Listener = (user: MockUser | null) => void;
const listeners = new Set<Listener>();

let currentUser: MockUser | null = readStoredUser();

function readStoredUser(): MockUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as MockUser) : null;
  } catch {
    return null;
  }
}

function writeStoredUser(user: MockUser | null) {
  if (typeof window === "undefined") return;
  try {
    if (user) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

function emit() {
  for (const l of listeners) l(currentUser);
}

function delay<T>(value: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), FAKE_DELAY_MS));
}

// TODO: replace with real backend API call (POST /auth/login).
export async function login(email: string, password: string): Promise<MockUser> {
  await delay(null);
  const found = users.find(
    (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password,
  );
  if (!found) throw new Error("Invalid email or password.");
  const user: MockUser = { id: found.id, email: found.email, name: found.name };
  currentUser = user;
  writeStoredUser(user);
  emit();
  return user;
}

// TODO: replace with real backend API call (POST /auth/logout).
export async function logout(): Promise<void> {
  await delay(null);
  currentUser = null;
  writeStoredUser(null);
  emit();
}

// TODO: replace with real backend API call (POST /auth/forgot-password).
export async function forgotPassword(email: string): Promise<{ resetToken: string }> {
  await delay(null);
  const token = Math.random().toString(36).slice(2) + Date.now().toString(36);
  resetTokens.set(token, { email: email.trim().toLowerCase(), expiresAt: Date.now() + 1000 * 60 * 30 });
  // Demo aid: surface the reset link in the console.
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.info(`[mock-auth] Reset link: ${window.location.origin}/reset-password?token=${token}`);
  }
  return { resetToken: token };
}

// TODO: replace with real backend API call (POST /auth/reset-password).
export async function resetPassword(token: string, newPassword: string): Promise<void> {
  await delay(null);
  const entry = resetTokens.get(token);
  if (!entry || entry.expiresAt < Date.now()) {
    throw new Error("This reset link is invalid or has expired. Please request a new one.");
  }
  const user = users.find((u) => u.email.toLowerCase() === entry.email);
  if (!user) throw new Error("Account not found.");
  if (newPassword.length < 8) throw new Error("Password must be at least 8 characters.");
  user.password = newPassword;
  resetTokens.delete(token);
}

// TODO: replace with real backend API call (POST /auth/change-password).
export async function changePassword(oldPassword: string, newPassword: string): Promise<void> {
  await delay(null);
  if (!currentUser) throw new Error("You must be signed in.");
  const stored = users.find((u) => u.id === currentUser!.id);
  if (!stored || stored.password !== oldPassword) throw new Error("Current password is incorrect.");
  if (newPassword.length < 8) throw new Error("New password must be at least 8 characters.");
  stored.password = newPassword;
}

export function getCurrentUser(): MockUser | null {
  return currentUser;
}

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
