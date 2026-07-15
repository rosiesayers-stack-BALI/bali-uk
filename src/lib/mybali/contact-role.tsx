// Main / nominated contact permission model for /my-bali.
//
// A signed-in member is EITHER the "main contact" for their organisation
// OR a "nominated contact". Only the main contact can edit organisation-
// level details (organisation profile, disciplines, directory listing,
// projects/team/accreditations/testimonials). Nominated contacts can view
// the same screens but the edit controls must be disabled.
//
// Everyone can still edit their own personal profile, change their password,
// and manage their own event bookings.
//
// TODO: this mirrors Workbooks' main/nominated contact model. When the real
// backend is wired, enforce the same rule server-side — the client check
// here is UX only and MUST NOT be treated as security.

import { useMyBaliAuth } from "@/services/auth-context";
import { useCrm, getPersonByEmail, type Person } from "@/lib/admin/mock-crm";

export function useCurrentPerson(): Person | null {
  const { user } = useMyBaliAuth();
  // Subscribe so main/nominated changes made in admin propagate here.
  useCrm();
  return getPersonByEmail(user?.email);
}

export function useCanEditOrganisation(): { canEdit: boolean; reason?: string } {
  const person = useCurrentPerson();
  if (!person) return { canEdit: true }; // Fail open for unmatched demo users.
  if (!person.organisationId) return { canEdit: true }; // Independent member — owns their own record.
  if (person.contactRole === "main") return { canEdit: true };
  return {
    canEdit: false,
    reason: "Only your organisation's main contact can edit these details.",
  };
}

export function ReadOnlyBanner({ reason }: { reason: string }) {
  return (
    <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 px-4 py-3 text-sm" role="note">
      <strong className="font-semibold">Read-only view.</strong> {reason} Ask your main contact to update these details, or contact BALI to request a change.
    </div>
  );
}
