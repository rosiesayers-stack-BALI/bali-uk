import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import * as auth from "./auth";
import type { MockUser } from "./auth";

type AuthContextValue = {
  user: MockUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<MockUser>;
  logout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<{ resetToken: string }>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function MyBaliAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(auth.getCurrentUser());
    setLoading(false);
    return auth.subscribe(setUser);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      login: auth.login,
      logout: auth.logout,
      forgotPassword: auth.forgotPassword,
      resetPassword: auth.resetPassword,
      changePassword: auth.changePassword,
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useMyBaliAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useMyBaliAuth must be used inside <MyBaliAuthProvider>");
  return ctx;
}

// Re-export a stable callback hook to satisfy lint in some consumers.
export function useAuthCallback<T extends (...args: never[]) => unknown>(fn: T): T {
  return useCallback(fn, [fn]) as T;
}
