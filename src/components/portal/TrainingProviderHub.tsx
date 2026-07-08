import { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  GraduationCap,
  Loader2,
  Pencil,
  Plus,
  Trash2,
  Video,
  XCircle,
} from "lucide-react";
import Link from "@/components/SmartLink";
import { getMyDirectoryProfile, type DirectoryProfile } from "@/lib/portal/api";
import {
  createCourse,
  deleteCourse,
  listMyCourses,
  updateCourse,
  type CourseStatus,
  type ProviderCourse,
} from "@/lib/portal/courses";
import { CourseForm, type CourseFormValues } from "./CourseForm";

const statusStyles: Record<CourseStatus, { label: string; cls: string; Icon: typeof Clock }> = {
  pending: { label: "Pending review", cls: "bg-amber-100 text-amber-800", Icon: Clock },
  published: { label: "Live", cls: "bg-emerald-100 text-emerald-800", Icon: CheckCircle2 },
  rejected: { label: "Rejected", cls: "bg-red-100 text-red-700", Icon: XCircle },
  changes_requested: { label: "Changes requested", cls: "bg-orange-100 text-orange-800", Icon: AlertTriangle },
};

type Mode = { kind: "list" } | { kind: "new" } | { kind: "edit"; course: ProviderCourse };

const toInput = (v: CourseFormValues) => ({
  title: v.title.trim(),
  description: v.description.trim(),
  category: v.category || null,
  duration: v.duration || null,
  format: v.format || null,
  location: v.location || null,
  venue: v.location || v.format || "",
  cost: v.cost || null,
  booking_url: v.booking_url || null,
  contact_email: v.contact_email || null,
  date_text: v.date_text || "",
  iso_date: v.iso_date || null,
  image_url: v.image_url,
});

export function TrainingProviderHub({ onEditListing }: { onEditListing: () => void }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<DirectoryProfile | null>(null);
  const [courses, setCourses] = useState<ProviderCourse[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>({ kind: "list" });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const p = await getMyDirectoryProfile();
        if (!alive) return;
        setProfile(p);
        if (p) {
          const list = await listMyCourses(p.id);
          if (!alive) return;
          setCourses(list);
        }
      } catch (e) {
        setError((e as Error).message);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const refresh = async () => {
    if (!profile) return;
    setCourses(await listMyCourses(profile.id));
  };

  const flash = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const handleCreate = async (v: CourseFormValues) => {
    if (!profile) return;
    setSubmitting(true);
    setError(null);
    try {
      await createCourse(profile.id, toInput(v));
      await refresh();
      setMode({ kind: "list" });
      flash("Course submitted — it will appear publicly once BALI staff approve it.");
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdate = async (id: string, v: CourseFormValues) => {
    setSubmitting(true);
    setError(null);
    try {
      await updateCourse(id, toInput(v));
      await refresh();
      setMode({ kind: "list" });
      flash("Course updated.");
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this course? This cannot be undone.")) return;
    try {
      await deleteCourse(id);
      await refresh();
      flash("Course deleted.");
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const counts = useMemo(() => {
    return {
      live: courses.filter((c) => c.status === "published").length,
      pending: courses.filter((c) => c.status === "pending").length,
      needs: courses.filter((c) => c.status === "changes_requested" || c.status === "rejected").length,
    };
  }, [courses]);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-gray-500">
        <Loader2 className="w-4 h-4 animate-spin" /> Loading your Training Provider hub…
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="max-w-3xl bg-amber-50 border border-amber-200 rounded-xl p-5">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-900">Your account isn't linked to a Training Provider profile yet</p>
            <p className="text-sm text-amber-800 mt-1">
              Course management is tied to your BALI directory listing. Please contact the BALI team to link your account
              and this hub will unlock automatically.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header + CTA */}
      <section className="bg-gradient-to-br from-bali-blue to-blue-800 text-white rounded-2xl p-6 lg:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3">
              <GraduationCap className="w-3.5 h-3.5" /> Training Provider Hub
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight">Manage your courses in one place</h2>
            <p className="text-sm text-blue-100 mt-1 max-w-xl">
              List new courses, edit existing ones and keep your directory listing up to date — everything Training
              Providers need in one journey.
            </p>
          </div>
          <button
            onClick={() => {
              setMode({ kind: "new" });
              setError(null);
            }}
            className="bg-white text-bali-blue hover:bg-blue-50 font-semibold px-5 py-3 rounded-xl inline-flex items-center gap-2 shadow-md transition-all"
          >
            <Plus className="w-5 h-5" /> Add your course
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-6">
          {[
            { label: "Live courses", value: counts.live, cls: "bg-emerald-500/20" },
            { label: "Awaiting review", value: counts.pending, cls: "bg-amber-500/20" },
            { label: "Needs attention", value: counts.needs, cls: "bg-red-500/20" },
          ].map((s) => (
            <div key={s.label} className={`rounded-xl px-4 py-3 ${s.cls}`}>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-blue-50/90">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {toast && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg px-4 py-2.5 text-sm inline-flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> {toast}
        </div>
      )}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-2.5 text-sm">{error}</div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left / main column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Course form or list */}
          {mode.kind === "new" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-lg">Add a new course</h3>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">
                  New courses require BALI review before going live
                </span>
              </div>
              <CourseForm
                onSubmit={handleCreate}
                onCancel={() => setMode({ kind: "list" })}
                submitting={submitting}
                submitLabel="Submit course for review"
              />
            </div>
          )}

          {mode.kind === "edit" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-lg">Edit course</h3>
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full font-medium">
                  Edits go live immediately
                </span>
              </div>
              <CourseForm
                initial={mode.course}
                onSubmit={(v) => handleUpdate(mode.course.id, v)}
                onCancel={() => setMode({ kind: "list" })}
                submitting={submitting}
                submitLabel="Save changes"
              />
            </div>
          )}

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-lg inline-flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-500" /> Your courses
              </h3>
              {mode.kind === "list" && (
                <button
                  onClick={() => setMode({ kind: "new" })}
                  className="text-sm text-bali-blue hover:underline inline-flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" /> Add course
                </button>
              )}
            </div>

            {courses.length === 0 ? (
              <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
                <GraduationCap className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-600 font-medium">No courses listed yet</p>
                <p className="text-xs text-gray-500 mt-1">Add your first course to get it in front of BALI members.</p>
                <button
                  onClick={() => setMode({ kind: "new" })}
                  className="mt-3 bg-bali-blue hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg inline-flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" /> Add your first course
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {courses.map((c) => {
                  const meta = statusStyles[c.status];
                  const Icon = meta.Icon;
                  return (
                    <div key={c.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-gray-900 text-sm leading-snug">{c.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{c.description}</p>
                        </div>
                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ${meta.cls}`}>
                          <Icon className="w-3 h-3" /> {meta.label}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-xs text-gray-500">
                        {c.category && <span>{c.category}</span>}
                        {c.format && <span>· {c.format}</span>}
                        {c.duration && <span>· {c.duration}</span>}
                        {c.date_text && <span>· {c.date_text}</span>}
                        {c.location && <span>· {c.location}</span>}
                        {c.cost && <span>· {c.cost}</span>}
                      </div>
                      {c.reviewer_notes && (
                        <p className="text-xs text-gray-700 mt-2 bg-orange-50 border border-orange-100 rounded px-2 py-1.5">
                          <span className="font-medium">Reviewer note:</span> {c.reviewer_notes}
                        </p>
                      )}
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={() => setMode({ kind: "edit", course: c })}
                          className="text-xs font-medium text-bali-blue hover:bg-bali-blue/10 px-2.5 py-1.5 rounded-md inline-flex items-center gap-1"
                        >
                          <Pencil className="w-3.5 h-3.5" /> Edit
                        </button>
                        <button
                          onClick={() => handleDelete(c.id)}
                          className="text-xs font-medium text-red-600 hover:bg-red-50 px-2.5 py-1.5 rounded-md inline-flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Profile summary */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-bold text-gray-900 mb-3">Your directory listing</h3>
            <div className="flex items-center gap-3 mb-3">
              {profile.logo_url ? (
                <img
                  src={profile.logo_url}
                  alt=""
                  className="w-14 h-14 rounded-lg object-cover border border-gray-200 bg-white"
                />
              ) : (
                <div className="w-14 h-14 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 text-xs">
                  No logo
                </div>
              )}
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">{profile.slug}</p>
                {profile.website_url && (
                  <a
                    href={profile.website_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-bali-blue hover:underline inline-flex items-center gap-0.5"
                  >
                    Website <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-xs text-gray-500 line-clamp-3">
              {profile.about || "Add a short company description to help members find you."}
            </p>
            <button
              onClick={onEditListing}
              className="mt-3 w-full text-sm font-semibold text-bali-blue border border-bali-blue/30 hover:bg-bali-blue/5 rounded-lg px-3 py-2 inline-flex items-center justify-center gap-1.5"
            >
              <Pencil className="w-4 h-4" /> Quick edit listing
            </button>
          </div>

          {/* Resources */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-bold text-gray-900 mb-3">Training Provider resources</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Technical support & guidance", href: "/help", desc: "Curriculum, standards and H&S resources" },
                { label: "Landscape News content", href: "/news", desc: "Latest sector news and features" },
                { label: "Video library", href: "/help/media", desc: "Recorded webinars and how-tos" },
                { label: "BALI accredited logo pack", href: "/help/guides", desc: "Use in your course marketing" },
              ].map((r) => (
                <li key={r.label}>
                  <Link
                    to={r.href}
                    className="block border border-gray-100 rounded-lg px-3 py-2 hover:border-bali-blue/40 hover:bg-bali-blue/5 transition-colors"
                  >
                    <p className="text-sm font-medium text-gray-800 inline-flex items-center gap-1.5">
                      <Video className="w-3.5 h-3.5 text-gray-400" /> {r.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{r.desc}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* News for training providers */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-bold text-gray-900 mb-3">For Training Providers</h3>
            <ul className="space-y-3 text-sm">
              {[
                { title: "New ROLO curriculum guidance published", date: "12 June 2026" },
                { title: "Landscape News: focus on skills & training", date: "1 June 2026" },
                { title: "Provider webinar — marketing your courses", date: "22 May 2026" },
              ].map((n) => (
                <li key={n.title} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                  <p className="text-sm font-medium text-gray-800 leading-snug">{n.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{n.date}</p>
                </li>
              ))}
            </ul>
            <Link to="/news" className="text-xs text-bali-blue hover:underline mt-3 inline-block">
              All news →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
