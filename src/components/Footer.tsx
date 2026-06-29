import Link from './SmartLink'

const quickLinks = [
  { label: 'Join Our Association', href: '/join' },
  { label: 'Member Login', href: '/login' },
  { label: 'Landscape Directory', href: '/directory' },
  { label: 'Latest News', href: '/news' },
  { label: 'Events & Training', href: '/events' },
  { label: 'LISS', href: '/liss-cscs' },
  { label: 'BALI Podcast: Dig Deep', href: '/help/podcast' },
  { label: 'Lay of the Land Report 2025', href: '/lay-of-the-land-2025' },
]

const social = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/BALILandscapeUK',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/BALI_Landscape',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/balilandscapeuk',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/british-association-of-landscape-industries-bali-/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UC4qkunIRZKx4SGeDDA3834Q',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-bali-slate text-white">
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Logo + social */}
          <div>
            <img
              src="https://www.bali.org.uk/themes/bali/gfx/logo-white.png"
              alt="BALI"
              className="h-10 mb-5"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              British Association of Landscape Industries — the UK's leading Trade Association for landscape professionals.
            </p>
            <div className="flex gap-3">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 bg-white/10 hover:bg-bali-blue rounded flex items-center justify-center transition-colors"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wide text-sm">Contact BALI</h4>
            <address className="not-italic text-gray-300 text-sm leading-loose">
              Landscape House,<br />Stoneleigh Park,<br />Nr Kenilworth,<br />Warwickshire, CV8 2LG
            </address>
            <div className="mt-3 space-y-1 text-sm">
              <a href="tel:+442476690333" className="block text-gray-300 hover:text-white transition-colors">
                +44 (0)24 7669 0333
              </a>
              <a href="mailto:contact@bali.org.uk" className="block text-gray-300 hover:text-white transition-colors">
                contact@bali.org.uk
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wide text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-gray-300 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wide text-sm">Get In Touch</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              For all enquiries, including membership, please get in touch. We aim to respond within 48 hours.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-bali-green hover:bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:scale-105"
            >
              Make Enquiry
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row gap-3 justify-between items-center text-sm text-gray-400">
          <p>Registered in England No. 01254410 &bull; VAT Reg. 325 5121 89</p>
          <nav className="flex flex-wrap gap-4 text-xs">
            {[
              ['About', '/about'],
              ['Disclaimer', '/disclaimer'],
              ['Terms & Conditions', '/terms'],
              ['Privacy Policy', '/privacy'],
              ['Cookies', '/cookies'],
              ['Sitemap', '/sitemap'],
            ].map(([label, href]) => (
              <Link key={label} to={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
