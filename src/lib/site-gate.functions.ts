import { createServerFn } from "@tanstack/react-start";
import { createHash, timingSafeEqual } from "node:crypto";

function normalizePassword(value: string) {
  const trimmed = value
    .normalize("NFKC")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .trim();

  const quotePairs: Array<[string, string]> = [["'", "'"], ['"', '"'], ["“", "”"], ["‘", "’"]];
  const pair = quotePairs.find(([open, close]) => trimmed.startsWith(open) && trimmed.endsWith(close));
  return pair ? trimmed.slice(pair[0].length, -pair[1].length).trim() : trimmed;
}

function passwordMatches(input: string, expected: string) {
  const submitted = createHash("sha256").update(normalizePassword(input), "utf8").digest();
  const target = createHash("sha256").update(normalizePassword(expected), "utf8").digest();
  return timingSafeEqual(submitted, target);
}

/** Validates the submitted password. Returns ok=true if it matches SITE_PASSWORD. */
export const unlockSite = createServerFn({ method: "POST" })
  .inputValidator((input: { password: string }) => {
    if (typeof input?.password !== "string") throw new Error("Password required");
    return { password: input.password };
  })
  .handler(async ({ data }) => {
    const expected = process.env.SITE_PASSWORD;
    if (!expected) return { ok: true, configured: false };
    if (!passwordMatches(data.password ?? "", expected)) return { ok: false, configured: true, error: "Incorrect password" };
    return { ok: true, configured: true };
  });
