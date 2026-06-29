import { useState } from 'react'
import Link from './SmartLink'

type NavSubItem = {
  label: string
  href: string
  highlight?: boolean
  external?: boolean
  divider?: boolean
}

type NavItem = {
  label: string
  href: string
  external?: boolean
  items: NavSubItem[]
}

const nav: NavItem[] = [
  {
    label: 'About', href: '/about',
    items: [
      { label: 'What We Do', href: '/about' },
      { label: 'How We Represent the Industry', href: '/policy' },
      { label: 'Board of Directors', href: '/about/board' },
      { label: 'Meet Our Team', href: '/our-team' },
      { label: 'BALI-NCF', href: '/about/ncf' },
      { label: 'Supported Charities', href: '/about/charities' },
      { label: 'Advertise With Us', href: '/about/advertise' },
    ],
  },
  {
    label: 'Membership', href: '/membership',
    items: [
      { label: 'Why Join BALI', href: '/membership' },
      { label: 'Categories & how to apply', href: '/join', highlight: true },
      { label: 'Fees', href: '/membership/fees' },
      { label: 'Not sure? Make an enquiry', href: '/membership/enquiry' },
      { label: 'Code of Conduct', href: '/membership/code' },
      { label: 'Quality Standard', href: '/membership/quality' },
      { label: 'Terms of Membership', href: '/membership/terms' },
      { label: 'Renew / Member Login', href: '/login' },
    ],
  },
  {
    label: 'Find a Professional', href: '/directory',
    items: [
      { label: 'Find a Designer', href: '/directory/designer' },
      { label: 'Find a Contractor', href: '/directory/contractor' },
      { label: 'Find a Supplier', href: '/directory/supplier' },
      { label: 'Find a Training Provider', href: '/directory/training' },
      { label: 'Search the Full Directory', href: '/directory/search' },
      { label: 'Why Choose a BALI Member?', href: '/directory/why' },
    ],
  },
  {
    label: 'Standards & Training', href: '/liss-cscs',
    items: [
      { label: 'LISS SmartCard', href: '/liss-cscs' },
      { label: 'Apply for a SmartCard', href: '/liss-cscs/apply' },
      { label: 'Check a SmartCard', href: '/liss-cscs/check', highlight: true },
      { label: 'ROLO', href: '/liss-cscs/rolo' },
      { label: 'NHSS18', href: '/liss-cscs/nhss18' },
      { label: 'Industry Accreditation', href: '/liss-cscs/accreditation' },
      { label: 'Training Courses', href: '/events/training' },
      { label: 'Landscaping Careers', href: '/about/careers' },
    ],
  },
  {
    label: 'Knowledge & Insight', href: '/help',
    items: [
      { label: 'Latest News', href: '/news' },
      { label: 'Landscape News Magazine', href: '/news/magazine' },
      { label: 'Dig Deep Podcast', href: '/help/podcast' },
      { label: 'Media (video)', href: '/help/media' },
      { label: 'Guides & Reports', href: '/help/guides' },
      { label: 'Plant Health', href: '/help/plant-health' },
      { label: 'Pests & Diseases', href: '/help/pests' },
      { label: 'Health & Safety', href: '/help/health-safety' },
      { label: 'Machinery & Driving', href: '/help/equipment' },
      { label: 'Law & Compliance', href: '/help/law' },
      { label: 'Contracts & Templates (members)', href: '/help/contracts' },
      { label: 'Dispute Service (members)', href: '/help/dispute' },
      { label: 'Hardship Fund (members)', href: '/membership/hardship-fund' },
    ],
  },
  {
    label: 'Events & Awards', href: '/events',
    items: [
      { label: 'Upcoming Events', href: '/events' },
      { label: 'National Conference 2026', href: '/about/conference', highlight: true },
      { label: 'National Landscape Awards', href: '/about/awards', highlight: true },
      { label: 'Sponsor the Conference', href: '/events/sponsor' },
    ],
  },
  {
    label: 'Policy & Campaigns', href: '/policy',
    items: [
      { label: 'All Policy Updates', href: '/policy' },
      { label: 'Budget & Tax', href: '/policy' },
      { label: 'Consultations', href: '/policy' },
      { label: 'Environment', href: '/policy' },
      { label: 'Business & Trade', href: '/policy' },
    ],
  },
]



interface NavbarProps {
  transparent?: boolean
}

function NavLink({ item, className, onClick }: { item: { href: string; label: string; external?: boolean; highlight?: boolean }, className?: string, onClick?: () => void }) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {item.label}
      </a>
    )
  }
  return (
    <Link to={item.href} className={className} onClick={onClick}>
      {item.label}
    </Link>
  )
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      {/* Utility bar */}
      <div className="bg-bali-blue text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-blue-200 text-xs hidden sm:block">
            The UK's leading landscaping trade association
          </span>
          <div className="flex gap-4 ml-auto items-center">
            <Link to="/contact" className="hover:text-bali-grass transition-colors font-medium uppercase tracking-wide text-xs">
              Contact
            </Link>
            <span className="text-blue-300">|</span>
            <Link to="/join" className="hover:text-bali-grass transition-colors font-medium uppercase tracking-wide text-xs">
              Join
            </Link>
            <span className="text-blue-300">|</span>
            <Link to="/login" className="hover:text-bali-grass transition-colors font-medium uppercase tracking-wide text-xs">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`${transparent ? 'bg-white/90 backdrop-blur-sm' : 'bg-white'} shadow-sm sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://www.bali.org.uk/themes/bali/gfx/logo.png"
              alt="British Association of Landscape Industries"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {nav.map((item) => (
              <div key={item.label} className="nav-item relative group">
                <NavLink
                  item={item}
                  className="px-3 py-2 rounded hover:text-bali-blue transition-colors flex items-center gap-1"
                />
                <div className="dropdown absolute left-0 top-full bg-white shadow-xl rounded-lg border border-gray-100 w-64 py-2 z-50 before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2">
                  {item.items.map((sub) => (
                    <NavLink
                      key={sub.label}
                      item={sub}
                      className={`block px-4 py-2 hover:bg-gray-50 hover:text-bali-blue transition-colors ${
                        sub.highlight ? 'font-semibold text-bali-blue' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Search + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
            <div className="max-w-2xl mx-auto flex gap-2">
              <input
                type="text"
                placeholder="Search the BALI website…"
                autoFocus
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
              />
              <button className="bg-bali-blue text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition-colors">
                Search
              </button>
            </div>
          </div>
        )}

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-4 py-3 space-y-1 text-sm">
              {nav.map((item) => (
                <NavLink
                  key={item.label}
                  item={item}
                  className="block py-2 px-3 rounded hover:bg-gray-50 hover:text-bali-blue"
                  onClick={() => setMobileOpen(false)}
                />
              ))}
              <Link
                to="/contact"
                className="block py-2 px-3 rounded hover:bg-gray-50 hover:text-bali-blue"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/join"
                className="block mt-2 bg-bali-green text-white text-center py-2 px-3 rounded font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Join BALI
              </Link>
              <Link
                to="/login"
                className="block bg-bali-blue text-white text-center py-2 px-3 rounded font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Member Login
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
