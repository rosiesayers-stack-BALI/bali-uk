// Mock STAFF auth service for /admin — completely separate from member auth.
// Frontend-only, in-memory + localStorage.
// TODO: replace every function in this file with real backend API calls
// once our own backend server is available (POST /admin/auth/login, etc.).

export type StaffRole = "admin" | "editor";

export type StaffUser = {
  id: string;
  email: string;
  name: string;
  role: StaffRole;
};

type StoredStaff = StaffUser & { password: string };

const STORAGE_KEY = "bali_admin_session_v1";
const FAKE_DELAY_MS = 250;

// Seeded demo staff. TODO: remove once real backend is wired.
const staff: StoredStaff[] = [
  {
    id: "s_admin",
    email: "admin@bali.org.uk",
    name: "BALI Admin",
    role: "admin",
    password: "admin123",
  },
];

type Listener = (user: StaffUser | null) => void;
const listeners = new Set<Listener>();

let currentStaff: StaffUser | null = readStored();

function readStored(): StaffUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StaffUser) : null;
  } catch {
    return null;
  }
}

function writeStored(user: StaffUser | null) {
  if (typeof window === "undefined") return;
  try {
    if (user) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

function emit() {
  for (const l of listeners) l(currentStaff);
}

function delay<T>(v: T): Promise<T> {
  return new Promise((r) => setTimeout(() => r(v), FAKE_DELAY_MS));
}

// TODO: replace with real backend API call (POST /admin/auth/login).
export async function adminLogin(email: string, password: string): Promise<StaffUser> {
  await delay(null);
  const found = staff.find(
    (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password,
  );
  if (!found) throw new Error("Invalid staff email or password.");
  const user: StaffUser = { id: found.id, email: found.email, name: found.name, role: found.role };
  currentStaff = user;
  writeStored(user);
  emit();
  return user;
}

// TODO: replace with real backend API call (POST /admin/auth/logout).
export async function adminLogout(): Promise<void> {
  await delay(null);
  currentStaff = null;
  writeStored(null);
  emit();
}

export function getCurrentStaff(): StaffUser | null {
  return currentStaff;
}

export function subscribeStaff(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
