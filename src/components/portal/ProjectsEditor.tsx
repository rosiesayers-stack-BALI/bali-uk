import { useEffect, useState } from "react";
import { Loader2, Plus, Trash2, Pencil, X, CheckCircle2 } from "lucide-react";
import { deleteProject, listMyProjects, upsertProject, type Project } from "@/lib/portal/api";
import { uploadContentImage } from "@/lib/admin/storage";

type Draft = {
  id?: string;
  title: string;
  description: string;
  images: string[];
};

const emptyDraft: Draft = { title: "", description: "", images: [] };

export function ProjectsEditor({ profileId }: { profileId: string }) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [editing, setEditing] = useState<Draft | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const refresh = () =>
    listMyProjects(profileId)
      .then(setProjects)
      .catch((e) => setError((e as Error).message))
      .finally(() => setLoading(false));

  useEffect(() => {
    void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileId]);

  const startNew = () => setEditing({ ...emptyDraft });
  const startEdit = (p: Project) =>
    setEditing({ id: p.id, title: p.title, description: p.description ?? "", images: p.images });

  const save = async () => {
    if (!editing || !editing.title.trim()) return;
    setSaving(true);
    setError(null);
    try {
      await upsertProject(profileId, editing);
      setEditing(null);
      setMessage(editing.id ? "Project updated." : "Project added.");
      setTimeout(() => setMessage(null), 2500);
      await refresh();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this project?")) return;
    try {
      await deleteProject(id);
      await refresh();
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const uploadImage = async (file: File) => {
    if (!editing) return;
    setUploadingImg(true);
    try {
      const url = await uploadContentImage(file);
      setEditing({ ...editing, images: [...editing.images, url] });
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setUploadingImg(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Projects</h3>
          <p className="text-xs text-gray-500 mt-0.5">Showcase your work on your directory profile.</p>
        </div>
        {!editing && (
          <button
            onClick={startNew}
            className="bg-bali-blue hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add project
          </button>
        )}
      </div>

      {message && (
        <p className="text-sm text-green-700 inline-flex items-center gap-1 mb-3">
          <CheckCircle2 className="w-4 h-4" /> {message}
        </p>
      )}
      {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

      {editing ? (
        <div className="border border-gray-200 rounded-lg p-4 space-y-3 bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-gray-800 text-sm">{editing.id ? "Edit project" : "New project"}</p>
            <button onClick={() => setEditing(null)} className="text-gray-500 hover:text-gray-800">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Title</label>
            <input
              value={editing.title}
              onChange={(e) => setEditing({ ...editing, title: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              placeholder="e.g. Cotswold private residence"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
            <textarea
              rows={3}
              value={editing.description}
              onChange={(e) => setEditing({ ...editing, description: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Images</label>
            <div className="flex flex-wrap gap-2">
              {editing.images.map((url, i) => (
                <div key={url + i} className="relative">
                  <img src={url} alt="" className="w-20 h-20 object-cover rounded-md border border-gray-200" />
                  <button
                    type="button"
                    onClick={() =>
                      setEditing({ ...editing, images: editing.images.filter((_, idx) => idx !== i) })
                    }
                    className="absolute -top-2 -right-2 bg-white border border-gray-300 rounded-full p-0.5 shadow"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              <label className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-xs text-gray-500 cursor-pointer hover:border-bali-blue">
                {uploadingImg ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  disabled={uploadingImg}
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) void uploadImage(f);
                  }}
                />
              </label>
            </div>
          </div>
          <div className="flex gap-2 pt-1">
            <button
              onClick={save}
              disabled={saving || !editing.title.trim()}
              className="bg-bali-blue hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-60"
            >
              {saving ? "Saving…" : editing.id ? "Save changes" : "Add project"}
            </button>
            <button
              onClick={() => setEditing(null)}
              className="border border-gray-300 text-gray-600 hover:bg-white px-4 py-2 rounded-lg text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : loading ? (
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Loader2 className="w-4 h-4 animate-spin" /> Loading…
        </div>
      ) : projects.length === 0 ? (
        <p className="text-sm text-gray-500">No projects yet. Add your first to help clients see your work.</p>
      ) : (
        <div className="space-y-2">
          {projects.map((p) => (
            <div key={p.id} className="flex gap-3 border border-gray-200 rounded-lg p-3">
              {p.images[0] ? (
                <img src={p.images[0]} alt="" className="w-16 h-16 object-cover rounded-md" />
              ) : (
                <div className="w-16 h-16 bg-gray-100 rounded-md" />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm truncate">{p.title}</p>
                <p className="text-xs text-gray-500 line-clamp-2">{p.description}</p>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => startEdit(p)}
                  className="p-2 text-gray-500 hover:text-bali-blue hover:bg-gray-50 rounded-md"
                  title="Edit"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => remove(p.id)}
                  className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
