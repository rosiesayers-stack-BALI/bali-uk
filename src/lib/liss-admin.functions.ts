// Admin LISS actions — mock/local implementation for the prototype.
// Signed URLs come from the mock DB's storage adapter, which just returns
// the stored data URL / path. Status updates and deletes hit the mock DB.
//
// TODO: replace every function in this file with real backend API calls
// once our own backend server is available.

import { supabase } from "@/lib/admin/mock-db";

export async function getLissFileUrl(args: { data: { path: string } }): Promise<{ url: string }> {
  const { data, error } = await supabase.storage
    .from("liss-applications")
    .createSignedUrl(args.data.path, 60 * 10);
  if (error || !data) throw new Error((error as { message?: string } | null)?.message ?? "Could not sign URL");
  return { url: data.signedUrl };
}

export async function updateLissApplicationStatus(args: {
  data: {
    id: string;
    status: "submitted" | "in_review" | "approved" | "rejected" | "info_required";
  };
}): Promise<{ ok: true }> {
  const { error } = await supabase
    .from("liss_applications")
    .update({ status: args.data.status })
    .eq("id", args.data.id);
  if (error) throw new Error(error.message);
  return { ok: true };
}

export async function deleteLissApplication(args: {
  data: { id: string };
}): Promise<{ ok: true }> {
  const { error } = await supabase
    .from("liss_applications")
    .delete()
    .eq("id", args.data.id);
  if (error) throw new Error(error.message);
  return { ok: true };
}
