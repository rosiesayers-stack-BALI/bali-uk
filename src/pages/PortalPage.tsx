import { useState } from 'react'
import Link from '../components/SmartLink'
import {
  MemberBenefits,
  MemberTypeSwitcher,
  filterQuickActions,
  useMemberType,
} from '../components/portal/MemberBenefits'


type Section =
  | 'dashboard' | 'profile' | 'membership' | 'directory'
  | 'events' | 'documents' | 'liss' | 'invoices' | 'support' | 'settings'

const sectionTitles: Record<Section, string> = {
  dashboard: 'Dashboard',
  profile: 'My Profile',
  membership: 'Membership & Renewal',
  directory: 'Directory Listing',
  events: 'Events & Training',
  documents: 'Documents & Guides',
  liss: 'LISS Cards',
  invoices: 'Invoices & Payments',
  support: 'HR & H&S Support',
  settings: 'Settings',
}

// ── Nav items ─────────────────────────────────────────────────────────────────
const navGroups = [
  {
    label: null,
    items: [{ id: 'dashboard' as Section, label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' }],
  },
  {
    label: 'Membership',
    items: [
      { id: 'profile' as Section, label: 'My Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
      { id: 'membership' as Section, label: 'Membership & Renewal', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
      { id: 'directory' as Section, label: 'Directory Listing', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { id: 'events' as Section, label: 'Events & Training', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
      { id: 'documents' as Section, label: 'Documents & Guides', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
      { id: 'liss' as Section, label: 'LISS Cards', icon: 'M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0' },
      { id: 'invoices' as Section, label: 'Invoices & Payments', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
      { id: 'support' as Section, label: 'HR & H&S Support', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' },
    ],
  },
]

export default function PortalPage() {
  const [section, setSection] = useState<Section>('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [alertVisible, setAlertVisible] = useState(true)
  const [memberType, setMemberType] = useMemberType()

  const memberTypeLabel = memberType ?? 'Unclassified'

  const go = (s: Section) => { setSection(s); setSidebarOpen(false) }


  return (
    <div className="font-sans bg-gray-100 min-h-screen flex h-screen overflow-hidden">

      {/* ── Sidebar ──────────────────────────────────────────────── */}
      <aside
        className={`bg-bali-slate text-white w-64 flex-shrink-0 flex flex-col fixed inset-y-0 left-0 z-40 transition-transform duration-300 lg:relative lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Logo */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <Link to="/">
            <img src="https://www.bali.org.uk/themes/bali/gfx/logo-white.png" alt="BALI" className="h-8" />
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white/60 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Member info */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-bali-green flex items-center justify-center font-bold text-sm flex-shrink-0">JD</div>
            <div className="min-w-0">
              <p className="font-semibold text-sm truncate">John's Landscaping Ltd</p>
              <span className="text-xs bg-bali-grass/30 text-bali-grass px-2 py-0.5 rounded-full">{memberTypeLabel}</span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          {navGroups.map((group) => (
            <div key={group.label ?? 'main'}>
              {group.label && (
                <div className="pt-3 pb-1 px-3">
                  <p className="text-white/40 text-xs uppercase tracking-widest font-medium">{group.label}</p>
                </div>
              )}
              {group.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-left text-sm mb-0.5 ${section === item.id ? 'bg-white/15' : ''}`}
                >
                  <svg className="w-5 h-5 flex-shrink-0 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t border-white/10 space-y-1">
          <button
            onClick={() => go('settings')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-left text-sm ${section === 'settings' ? 'bg-white/15' : ''}`}
          >
            <svg className="w-5 h-5 flex-shrink-0 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Settings</span>
          </button>
          <Link to="/login" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-500/20 transition-colors text-sm text-red-300 hover:text-red-200">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Main ─────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 className="font-bold text-gray-900 text-lg">{sectionTitles[section]}</h1>
              <p className="text-xs text-gray-400">{section === 'dashboard' ? 'Welcome back, John' : 'My BALI Portal'}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors">
              <div className="w-8 h-8 rounded-full bg-bali-blue flex items-center justify-center text-white text-xs font-bold">JD</div>
              <span className="text-sm font-medium text-gray-700 hidden sm:block">John's Landscaping</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">

          {/* ── DASHBOARD ──────────────────────────────────────────── */}
          {section === 'dashboard' && (
            <div>
              {alertVisible && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-center gap-3 mb-6">
                  <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-sm text-amber-800 flex-1">
                    Your membership renews on <strong>31 March 2026</strong> —{' '}
                    <button onClick={() => go('membership')} className="underline font-semibold hover:text-amber-900">renew now</button> to avoid interruption.
                  </p>
                  <button onClick={() => setAlertVisible(false)} className="text-amber-400 hover:text-amber-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Stat cards */}
              <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
                {[
                  { icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z', bg: 'bg-bali-blue/10', color: 'text-bali-blue', value: 'Accredited', sub: 'Contractor · Member since 2019', badge: { text: 'Active', cls: 'bg-green-100 text-green-700' } },
                  { icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z', bg: 'bg-bali-green/10', color: 'text-bali-green', value: '47', sub: 'Directory profile views', badge: { text: 'This month', cls: 'text-gray-400 text-xs' } },
                  { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', bg: 'bg-bali-flow/10', color: 'text-bali-flow', value: '2', sub: 'Events booked', badge: { text: 'Upcoming', cls: 'text-gray-400 text-xs' } },
                  { icon: 'M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0', bg: 'bg-bali-warm/10', color: 'text-bali-warm', value: '5', sub: 'LISS SmartCards', badge: { text: 'Valid cards', cls: 'text-gray-400 text-xs' } },
                ].map((card) => (
                  <div key={card.value} className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 ${card.bg} rounded-lg flex items-center justify-center`}>
                        <svg className={`w-5 h-5 ${card.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                        </svg>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${card.badge.cls}`}>{card.badge.text}</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{card.sub}</p>
                  </div>
                ))}
              </div>

              {/* Quick actions + events + news */}
              <div className="grid lg:grid-cols-3 gap-4">
                {/* Quick actions */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    {[
                      { label: 'Renew Membership', color: 'hover:border-bali-blue', textColor: 'group-hover:text-bali-blue', action: 'membership' as Section },
                      { label: 'Update Directory Listing', color: 'hover:border-bali-green', textColor: 'group-hover:text-bali-green', action: 'directory' as Section },
                      { label: 'Apply for SmartCard', color: 'hover:border-bali-flow', textColor: 'group-hover:text-bali-flow', action: 'liss' as Section },
                      { label: 'Book HR Health Check', color: 'hover:border-bali-warm', textColor: 'group-hover:text-bali-warm', action: 'support' as Section },
                      { label: 'Download Accredited Logo', color: 'hover:border-gray-300', textColor: '', action: 'documents' as Section },
                    ].map((qa) => (
                      <button
                        key={qa.label}
                        onClick={() => go(qa.action)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left border border-gray-100 ${qa.color} group`}
                      >
                        <span className={`text-sm font-medium text-gray-700 flex-1 ${qa.textColor}`}>{qa.label}</span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upcoming events */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900">Upcoming Events</h3>
                    <button onClick={() => go('events')} className="text-xs text-bali-blue hover:underline">View all</button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { day: '14', month: 'Jul', title: 'National Conference 2026', loc: 'Stoneleigh Park', bg: 'bg-bali-blue', status: 'Booked', statusCls: 'bg-bali-blue/10 text-bali-blue' },
                      { day: '22', month: 'Jul', title: 'ROLO Training Course', loc: 'Online — Webinar', bg: 'bg-bali-green', status: 'Booked', statusCls: 'bg-bali-green/10 text-bali-green' },
                    ].map((ev) => (
                      <div key={ev.title} className="flex gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer" onClick={() => go('events')}>
                        <div className={`w-10 h-10 ${ev.bg} rounded-lg flex flex-col items-center justify-center text-white flex-shrink-0`}>
                          <span className="text-xs font-bold">{ev.day}</span>
                          <span className="text-xs opacity-70">{ev.month}</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{ev.title}</p>
                          <p className="text-xs text-gray-500">{ev.loc}</p>
                          <span className={`text-xs ${ev.statusCls} px-2 py-0.5 rounded-full mt-1 inline-block`}>{ev.status}</span>
                        </div>
                      </div>
                    ))}
                    <button onClick={() => go('events')} className="w-full flex gap-3 p-3 border-2 border-dashed border-gray-200 rounded-lg items-center hover:border-bali-blue transition-colors">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <span className="text-sm text-bali-blue hover:underline">Browse more events</span>
                    </button>
                  </div>
                </div>

                {/* Latest news */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-4">Latest News</h3>
                  <div className="space-y-3">
                    {[
                      { title: 'Landscape News Spring 2026 — Now Available', date: '3 June 2026' },
                      { title: 'National Conference 2026: Early Bird Tickets on Sale', date: '28 May 2026' },
                      { title: 'New H&S Templates Available — Free for Members', date: '20 May 2026' },
                      { title: "Lay of the Land 2025 Report: Key Findings", date: '12 May 2026' },
                    ].map((n, i) => (
                      <div key={n.title}>
                        {i > 0 && <hr className="border-gray-100" />}
                        <a href="#" className="block group pt-2">
                          <p className="text-sm font-medium text-gray-800 group-hover:text-bali-blue transition-colors leading-snug">{n.title}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{n.date}</p>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── PROFILE ──────────────────────────────────────────── */}
          {section === 'profile' && (
            <div className="max-w-3xl space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-bali-blue flex items-center justify-center text-white text-xl font-bold">JD</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">John's Landscaping Ltd</h3>
                    <p className="text-gray-500 text-sm">{memberTypeLabel} · Member #BALI-2019-4827</p>
                    <button className="mt-1 text-xs text-bali-blue hover:underline">Change photo</button>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Company Name', value: "John's Landscaping Ltd" },
                    { label: 'Contact Name', value: 'John Davies' },
                    { label: 'Email', value: 'john@johnslandscaping.co.uk', type: 'email' },
                    { label: 'Phone', value: '01234 567890', type: 'tel' },
                    { label: 'Website', value: 'https://johnslandscaping.co.uk', type: 'url' },
                    { label: 'Postcode', value: 'CV8 2LG' },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">{f.label}</label>
                      <input
                        type={f.type ?? 'text'}
                        defaultValue={f.value}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue transition-all"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Company Address</label>
                  <textarea defaultValue="123 Garden Lane, Kenilworth, Warwickshire, CV8 1AB" rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue transition-all resize-none" />
                </div>
                <div className="flex gap-3 mt-5">
                  <button className="bg-bali-blue hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all">Save Changes</button>
                  <button className="border border-gray-300 text-gray-600 hover:bg-gray-50 px-5 py-2.5 rounded-lg text-sm transition-all">Cancel</button>
                </div>
              </div>
            </div>
          )}

          {/* ── MEMBERSHIP ───────────────────────────────────────── */}
          {section === 'membership' && (
            <div className="max-w-3xl space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{memberTypeLabel}</h3>
                    <p className="text-gray-500 text-sm">Member since January 2019</p>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Active</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 mb-5">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-500 mb-1">Member Number</p>
                    <p className="font-bold text-gray-900">BALI-2019-4827</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-500 mb-1">Renewal Date</p>
                    <p className="font-bold text-amber-600">31 March 2026</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-500 mb-1">Annual Fee</p>
                    <p className="font-bold text-gray-900">{/* API: membership fee */}—</p>
                  </div>
                </div>
                <button className="bg-bali-green hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  Renew Membership Now
                </button>
              </div>
            </div>
          )}

          {/* ── DIRECTORY ────────────────────────────────────────── */}
          {section === 'directory' && (
            <div className="max-w-3xl">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold text-gray-900 text-lg">Your Directory Listing</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Live</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Business Description</label>
                    <textarea rows={4} defaultValue="Award-winning landscape contractor based in Warwickshire, specialising in high-end residential gardens and commercial grounds maintenance." className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue transition-all resize-none" />
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-bali-blue hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all">Save & Publish</button>
                    <button className="border border-gray-300 text-gray-600 hover:bg-gray-50 px-5 py-2.5 rounded-lg text-sm transition-all">Preview</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── EVENTS ───────────────────────────────────────────── */}
          {section === 'events' && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-5">Events & Training</h3>
              <div className="space-y-3">
                {[
                  { day: '14', month: 'Jul', title: 'National Landscape Conference 2026', loc: 'Stoneleigh Park, Warwickshire · 9am–5pm', price: '', booked: true, bg: 'bg-bali-blue', wrapCls: 'bg-blue-50 border-bali-blue/20', badgeCls: 'bg-bali-blue text-white' },
                  { day: '22', month: 'Jul', title: 'ROLO Training Course — Online', loc: 'Webinar · 10am–1pm', price: '', booked: true, bg: 'bg-bali-green', wrapCls: 'bg-green-50 border-bali-green/20', badgeCls: 'bg-bali-green text-white' },
                  { day: '5', month: 'Aug', title: 'Health & Safety in Landscaping', loc: 'Birmingham NEC · Full day', price: 'Members: £95 · Non-members: £145', booked: false, bg: 'bg-gray-100', wrapCls: 'bg-white border-gray-200', badgeCls: '' },
                  { day: '18', month: 'Sep', title: 'Business Development for Landscapers', loc: 'Online Webinar · 2 hours', price: 'Free for members', booked: false, bg: 'bg-gray-100', wrapCls: 'bg-white border-gray-200', badgeCls: '' },
                ].map((ev) => (
                  <div key={ev.title} className={`flex gap-4 p-4 border rounded-xl ${ev.wrapCls}`}>
                    <div className={`w-14 h-14 ${ev.bg} rounded-xl flex flex-col items-center justify-center ${ev.booked ? 'text-white' : ''} flex-shrink-0`}>
                      <span className="text-lg font-bold">{ev.day}</span>
                      <span className="text-xs opacity-70">{ev.month}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">{ev.title}</p>
                          <p className="text-sm text-gray-500">{ev.loc}</p>
                          {ev.price && <p className="text-xs text-bali-blue font-medium mt-0.5">{ev.price}</p>}
                        </div>
                        {ev.booked && <span className={`text-xs px-2 py-1 rounded-full ml-3 flex-shrink-0 ${ev.badgeCls}`}>Booked</span>}
                      </div>
                      {!ev.booked && (
                        <button className="mt-2 bg-bali-blue hover:bg-blue-800 text-white text-xs px-4 py-1.5 rounded-lg font-semibold transition-all">Book Now</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── DOCUMENTS ────────────────────────────────────────── */}
          {section === 'documents' && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-5">Documents & Guides</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: 'BALI Accredited Logo Pack', meta: 'ZIP · 2.4MB · Updated Jan 2026', color: 'text-bali-blue' },
                  { name: 'Domestic Landscape Contract', meta: 'PDF · 450KB · Updated Mar 2025', color: 'text-red-500' },
                  { name: 'H&S Policy Template', meta: 'PDF · 320KB · Updated Nov 2025', color: 'text-red-500' },
                  { name: 'Lay of the Land Report 2025', meta: 'PDF · 8.2MB · Published 2025', color: 'text-red-500' },
                  { name: 'Risk Assessment Templates', meta: 'XLSX · 215KB · Updated Feb 2026', color: 'text-green-500' },
                  { name: 'Landscape News — All Issues', meta: 'PDF · Archive · Members only', color: 'text-bali-flow' },
                ].map((doc) => (
                  <button key={doc.name} className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-bali-blue hover:bg-blue-50 transition-all text-left group">
                    <svg className={`w-8 h-8 ${doc.color} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-gray-900 truncate">{doc.name}</p>
                      <p className="text-xs text-gray-400">{doc.meta}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-bali-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── LISS ─────────────────────────────────────────────── */}
          {section === 'liss' && (
            <div className="max-w-3xl">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-5">LISS SmartCards</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        {['Name', 'Card Type', 'Expiry', 'Status', ''].map((h) => (
                          <th key={h} className="text-left py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { name: 'John Davies', type: 'Operative — Gold', expiry: 'Sep 2027', status: 'Valid', cls: 'bg-green-100 text-green-700' },
                        { name: 'Sarah Jones', type: 'Operative — Blue', expiry: 'Mar 2026', status: 'Renew Soon', cls: 'bg-amber-100 text-amber-700' },
                        { name: 'Mike Wilson', type: 'Supervisor — Gold', expiry: 'Dec 2027', status: 'Valid', cls: 'bg-green-100 text-green-700' },
                      ].map((row) => (
                        <tr key={row.name} className="hover:bg-gray-50">
                          <td className="py-3 px-3 font-medium">{row.name}</td>
                          <td className="py-3 px-3 text-gray-600">{row.type}</td>
                          <td className="py-3 px-3 text-gray-600">{row.expiry}</td>
                          <td className="py-3 px-3"><span className={`${row.cls} px-2 py-0.5 rounded-full text-xs font-medium`}>{row.status}</span></td>
                          <td className="py-3 px-3 text-right"><button className="text-xs text-bali-blue hover:underline">{row.status === 'Renew Soon' ? 'Renew' : 'View'}</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-5 flex gap-3">
                  <button className="bg-bali-flow hover:bg-cyan-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all">Apply for New Card</button>
                  <button className="border border-gray-300 text-gray-600 hover:bg-gray-50 px-5 py-2.5 rounded-lg text-sm transition-all">Check Qualification</button>
                </div>
              </div>
            </div>
          )}

          {/* ── INVOICES ─────────────────────────────────────────── */}
          {section === 'invoices' && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-5">Invoices & Payments</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      {['Invoice', 'Description', 'Date', 'Amount', 'Status', ''].map((h) => (
                        <th key={h} className="text-left py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { ref: '#INV-2025-0142', desc: 'Annual Membership 2025/26', date: '1 Apr 2025', amount: '— (API)', paid: true },
                      { ref: '#INV-2025-0089', desc: 'National Conference 2026 Ticket', date: '15 May 2025', amount: '£195.00', paid: true },
                      { ref: '#INV-2024-0318', desc: 'Annual Membership 2024/25', date: '1 Apr 2024', amount: '— (API)', paid: true },
                    ].map((inv) => (
                      <tr key={inv.ref} className="hover:bg-gray-50">
                        <td className="py-3 px-3 font-medium text-bali-blue">{inv.ref}</td>
                        <td className="py-3 px-3 text-gray-600">{inv.desc}</td>
                        <td className="py-3 px-3 text-gray-600">{inv.date}</td>
                        <td className="py-3 px-3 font-semibold">{inv.amount}</td>
                        <td className="py-3 px-3"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">Paid</span></td>
                        <td className="py-3 px-3 text-right"><button className="text-xs text-bali-blue hover:underline">Download PDF</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── SUPPORT ──────────────────────────────────────────── */}
          {section === 'support' && (
            <div className="max-w-3xl grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Free HR Health Check', body: 'Book a one-to-one review with our HR partner Quest — covering employment law, contracts, and HR best practice.', cta: 'Book HR Review', bg: 'bg-bali-warm', icon: 'bg-bali-warm/10', iconColor: 'text-bali-warm', iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
                { title: 'H&S Health Check', body: 'Assess your health and safety compliance and get tailored recommendations and downloadable policy templates.', cta: 'Start H&S Check', bg: 'bg-bali-green', icon: 'bg-bali-green/10', iconColor: 'text-bali-green', iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                { title: 'Dispute Resolution', body: "Access BALI's dispute resolution service for professional guidance on client or contractor disputes.", cta: 'Request Support', bg: 'bg-bali-blue', icon: 'bg-bali-blue/10', iconColor: 'text-bali-blue', iconPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
                { title: 'Contact the Team', body: 'Get in touch with the BALI team directly. We aim to respond to all enquiries within 48 hours.', cta: 'Contact BALI', bg: 'bg-bali-flow', icon: 'bg-bali-flow/10', iconColor: 'text-bali-flow', iconPath: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
                  <div className={`w-12 h-12 ${card.icon} rounded-xl flex items-center justify-center mb-4`}>
                    <svg className={`w-6 h-6 ${card.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{card.title}</h4>
                  <p className="text-sm text-gray-500 mb-4">{card.body}</p>
                  <button className={`${card.bg} hover:opacity-90 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all w-full`}>{card.cta}</button>
                </div>
              ))}
            </div>
          )}

          {/* ── SETTINGS ─────────────────────────────────────────── */}
          {section === 'settings' && (
            <div className="max-w-2xl bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-5">Account Settings</h3>
              <div className="space-y-5">
                {[
                  { label: 'Email Notifications', sub: 'News, events, and membership alerts', checked: true },
                  { label: 'Renewal Reminders', sub: '60, 30 and 7 days before expiry', checked: true },
                  { label: 'Directory Profile Public', sub: 'Show your listing in search results', checked: true },
                  { label: 'Two-Factor Authentication', sub: 'Extra security for your account', checked: false },
                ].map((setting, i, arr) => (
                  <div key={setting.label} className={`flex items-center justify-between py-3 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{setting.label}</p>
                      <p className="text-xs text-gray-500">{setting.sub}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={setting.checked} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-bali-blue" />
                    </label>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-sm font-semibold text-red-600 mb-2">Danger Zone</p>
                <button className="border border-red-200 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg text-sm transition-all">Close Account</button>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  )
}
