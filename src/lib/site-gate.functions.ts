import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie } from "@tanstack/react-start/server";

const COOKIE_NAME = "bali_site_gate";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

/** Returns true when the visitor has already entered the correct site password. */
export const checkSiteGate = createServerFn({ method: "GET" }).handler(async () => {
  const password = process.env.SITE_PASSWORD;
  // If no password is configured, the site is open (fail-open during initial setup).
  if (!password) return { unlocked: true, configured: false };

  const cookie = getCookie(COOKIE_NAME);
  return { unlocked: cookie === password, configured: true };
});

/** Validates the submitted password and sets the unlock cookie if correct. */
export const unlockSite = createServerFn({ method: "POST" })
  .inputValidator((input: { password: string }) => {
    if (typeof input?.password !== "string") throw new Error("Password required");
    return { password: input.password };
  })
  .handler(async ({ data }) => {
    const expected = process.env.SITE_PASSWORD;
    if (!expected) return { ok: true }; // nothing to gate against

    if (data.password !== expected) {
      return { ok: false, error: "Incorrect password" };
    }

    setCookie(COOKIE_NAME, expected, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: MAX_AGE,
      path: "/",
    });
    return { ok: true };
  });
