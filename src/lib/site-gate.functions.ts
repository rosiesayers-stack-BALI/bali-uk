import { createServerFn } from "@tanstack/react-start";

/** Validates the submitted password. Returns ok=true if it matches SITE_PASSWORD. */
export const unlockSite = createServerFn({ method: "POST" })
  .inputValidator((input: { password: string }) => {
    if (typeof input?.password !== "string") throw new Error("Password required");
    return { password: input.password };
  })
  .handler(async ({ data }) => {
    const expected = process.env.SITE_PASSWORD;
    if (!expected) return { ok: true, configured: false };
    if (data.password !== expected) return { ok: false, configured: true, error: "Incorrect password" };
    return { ok: true, configured: true };
  });
