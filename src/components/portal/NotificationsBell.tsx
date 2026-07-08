import { useEffect, useRef, useState } from "react";
import { Bell, Loader2 } from "lucide-react";
import {
  listMyNotifications,
  markAllNotificationsRead,
  markNotificationRead,
  type Notification,
} from "@/lib/portal/api";

export function NotificationsBell() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const refresh = () => {
    setLoading(true);
    listMyNotifications()
      .then(setItems)
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    refresh();
    const t = setInterval(refresh, 60_000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const unread = items.filter((n) => !n.read_at).length;

  const onClickItem = async (n: Notification) => {
    if (!n.read_at) {
      await markNotificationRead(n.id);
      setItems((prev) => prev.map((x) => (x.id === n.id ? { ...x, read_at: new Date().toISOString() } : x)));
    }
  };

  return (
    <div className="relative" ref={wrapRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Notifications"
      >
        <Bell className="w-5 h-5 text-gray-600" />
        {unread > 0 && (
          <span className="absolute top-1 right-1 min-w-[16px] h-4 px-1 rounded-full text-[10px] font-bold bg-red-500 text-white flex items-center justify-center">
            {unread > 9 ? "9+" : unread}
          </span>
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <p className="font-semibold text-sm text-gray-900">Notifications</p>
            {unread > 0 && (
              <button
                onClick={async () => {
                  await markAllNotificationsRead();
                  refresh();
                }}
                className="text-xs text-bali-blue hover:underline"
              >
                Mark all read
              </button>
            )}
          </div>
          <div className="max-h-96 overflow-y-auto">
            {loading ? (
              <div className="p-4 flex items-center gap-2 text-sm text-gray-500">
                <Loader2 className="w-4 h-4 animate-spin" /> Loading…
              </div>
            ) : items.length === 0 ? (
              <p className="p-4 text-sm text-gray-500">You're all caught up.</p>
            ) : (
              items.map((n) => (
                <button
                  key={n.id}
                  onClick={() => onClickItem(n)}
                  className={`w-full text-left px-4 py-3 border-b border-gray-50 hover:bg-gray-50 ${
                    !n.read_at ? "bg-blue-50/50" : ""
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {!n.read_at && <span className="w-2 h-2 mt-1.5 rounded-full bg-bali-blue flex-shrink-0" />}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{n.title}</p>
                      {n.body && <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">{n.body}</p>}
                      <p className="text-[11px] text-gray-400 mt-1">
                        {new Date(n.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
