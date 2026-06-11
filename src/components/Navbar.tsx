import { useState } from 'react'
import Link from './SmartLink'

const nav = [
  {
    label: 'About', href: '/about',
    items: [
      { label: 'What We Do', href: '/about' },
      { label: 'What is BALI', href: '/about/what-is-bali' },
      { label: 'Board of Directors', href: '/about/board' },
      { label: 'Meet Our Team', href: '/our-team' },
      { label: 'National Landscape Awards', href: '/about/awards' },
      { label: 'BALI-NCF', href: '/about/ncf' },
      { label: 'Landscaping Careers', href: '/about/careers' },
      { label: 'Advertise With Us', href: '/about/advertise' },
      { label: 'Supported Charities', href: '/about/charities' },
      { label: 'RHS Chelsea Flower Show 2025', href: '/about/rhs-chelsea' },
      { label: 'National Conference 2026', href: '/about/conference', highlight: true },
    ],
  },
  {
    label: 'Membership', href: '/membership',
    items: [
      { label: 'Join Our Association', href: '/join' },
      { label: 'Become a Member (start here)', href: '/membership/become-a-member' },
      { label: 'Membership Enquiry', href: '/membership/enquiry' },
      { label: 'Member Login', href: '/login' },
      { label: 'Terms of Membership', href: '/membership/terms' },
      { label: 'Code of Conduct', href: '/membership/code' },
      { label: 'Association Quality Standard', href: '/membership/quality' },
    ],
  },
  {
    label: 'Landscape Directory', href: '/directory',
    items: [
      { label: 'Designer', href: '/directory/designer' },
      { label: 'Contractor', href: '/directory/contractor' },
      { label: 'Supplier', href: '/directory/supplier' },
      { label: 'Training Provider', href: '/directory/training' },
      { label: 'Why Choose a Member?', href: '/directory/why' },
      { label: 'Search All', href: '/directory/search' },
    ],
  },
  {
    label: 'News', href: '/news',
    items: [
      { label: 'Latest News', href: '/news' },
      { label: 'Landscape News Magazine', href: '/news/magazine' },
    ],
  },
  {
    label: 'Events', href: '/events',
    items: [
      { label: 'Upcoming Events', href: '/events' },
      { label: 'Training Courses', href: '/events/training' },
      { label: 'Sponsor National Conference 2026', href: '/events/sponsor', highlight: true },
    ],
  },
  {
    label: 'Help & Advice', href: '/help',
    items: [
      { label: 'Landscape Contract', href: '/help/contract' },
      { label: 'Domestic Landscape Contract', href: '/help/domestic-landscape-contract' },
      { label: 'Health & Safety', href: '/help/health-safety' },
      { label: 'Law & Regulations', href: '/help/law' },
      { label: 'Equipment', href: '/help/equipment' },
      { label: 'Plant Health', href: '/help/plant-health' },
      { label: 'Pests & Diseases', href: '/help/pests' },
      { label: 'Dispute Service', href: '/help/dispute' },
      { label: 'Guides & Downloads', href: '/help/guides' },
      { label: 'Hardship Fund', href: '/help/hardship' },
      { label: 'BALI Podcast: Dig Deep', href: '/help/podcast' },
    ],
  },
  {
    label: 'LISS/CSCS', href: '/liss-cscs',
    items: [
      { label: 'What is LISS/CSCS?', href: '/liss-cscs' },
      { label: 'Apply for a SmartCard', href: '/liss-cscs/apply' },
      { label: 'Check Qualifications', href: '/liss-cscs/check' },
      { label: 'ROLO', href: '/liss-cscs/rolo' },
      { label: 'NHSS18', href: '/liss-cscs/nhss18' },
      { label: 'Industry Accreditation', href: '/liss-cscs/accreditation' },
    ],
  },
]

interface NavbarProps {
  transparent?: boolean
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
            <a href="https://bali-policy.org.uk/news" target="_blank" rel="noopener noreferrer" className="hover:text-bali-grass transition-colors font-medium uppercase tracking-wide text-xs">
              Policy
            </a>
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
                <Link
                  to={item.href}
                  className="px-3 py-2 rounded hover:text-bali-blue transition-colors flex items-center gap-1"
                >
                  {item.label}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="dropdown absolute left-0 top-full bg-white shadow-xl rounded-lg border border-gray-100 w-56 py-2 z-50 before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.href}
                      className={`block px-4 py-2 hover:bg-gray-50 hover:text-bali-blue transition-colors ${
                        sub.highlight ? 'font-semibold text-bali-blue' : ''
                      }`}
                    >
                      {sub.label}
                    </Link>
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
                <Link
                  key={item.label}
                  to={item.href}
                  className="block py-2 px-3 rounded hover:bg-gray-50 hover:text-bali-blue"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block py-2 px-3 rounded hover:bg-gray-50 hover:text-bali-blue"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://bali-policy.org.uk/news"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 rounded hover:bg-gray-50 hover:text-bali-blue"
              >
                Policy ↗
              </a>
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
