import { useState, useEffect, useRef } from 'react'
import Link from '../components/SmartLink'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import AdBanner from '../components/ads/AdBanner'
import bannerMountbatten from '../assets/bali/large_mountbatten-house-min.jpeg.asset.json'
import bannerWeb from '../assets/bali/large_web-banner.png.asset.json'
import bannerHome3 from '../assets/bali/large_homepage-banner-3.jpeg.asset.json'
import bannerHome1 from '../assets/bali/large_homepage-banner-1.jpeg.asset.json'

// ── Hero slides data ──────────────────────────────────────────────────────────
// Matches the four banners used on bali.org.uk
const slides = [
  {
    bg: 'linear-gradient(135deg, #1D4D59 0%, #21509A 60%, #0E8B61 100%)',
    image: bannerMountbatten.url,
    eyebrow: 'Celebrating over 50 Years',
    eyebrowColor: 'text-bali-grass',
    title: 'The Gold Standard\nin Landscaping',
    body: "The UK's leading trade association and accreditation body for landscape professionals — delivering excellence through standards, innovation and leadership.",
    ctas: [
      { label: 'Join Today', href: '/join', style: 'bg-bali-green hover:bg-green-700 text-white' },
      { label: 'Find a Professional', href: '/directory', style: 'bg-white/10 hover:bg-white/20 border border-white/40 text-white backdrop-blur-sm' },
    ],
  },
  {
    bg: 'linear-gradient(135deg, #0E8B61 0%, #1D4D59 100%)',
    image: bannerWeb.url,
    eyebrow: 'Now Available',
    eyebrowColor: 'text-bali-grass',
    title: 'Landscape News\nSpring Edition',
    body: 'Read the latest issue of Landscape News — packed with industry insights, member spotlights, and professional development features.',
    ctas: [
      { label: 'Read Digital Issue', href: '/news/magazine', style: 'bg-white text-bali-green hover:bg-gray-100' },
    ],
  },
  {
    bg: 'linear-gradient(135deg, #21509A 0%, #6D4276 100%)',
    image: bannerHome3.url,
    eyebrow: 'Free Member Benefit',
    eyebrowColor: 'text-yellow-300',
    title: 'Free HR &\nHealth Checks',
    body: 'Access free HR reviews, employment law advice, and health & safety health checks as a BALI member — saving your business thousands per year.',
    ctas: [
      { label: 'Explore Member Benefits', href: '/join', style: 'bg-bali-grass hover:bg-green-600 text-white' },
    ],
  },
  {
    bg: 'linear-gradient(135deg, #1D4D59 0%, #0E8B61 100%)',
    image: bannerHome1.url,
    eyebrow: 'Find a Professional',
    eyebrowColor: 'text-bali-grass',
    title: "Designers, Contractors\n& Suppliers",
    body: "Know you're hiring the best — search our online directory of accredited BALI members across the UK.",
    ctas: [
      { label: 'Search the Directory', href: '/directory', style: 'bg-white text-bali-blue hover:bg-gray-100' },
    ],
  },
]

// ── Stats ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: '900+', label: 'Accredited Members' },
  { value: '1,800+', label: 'Total Members' },
  { value: '45', label: 'National Landscape Awards' },
  { value: '36k', label: 'Passed ROLO Operatives' },
  { value: '20k', label: 'LISS SmartCards' },
]

// ── Quick actions ─────────────────────────────────────────────────────────────
const actions = [
  {
    href: '/directory',
    border: 'hover:border-bali-blue',
    iconBg: 'bg-bali-blue/10 group-hover:bg-bali-blue',
    iconColor: 'text-bali-blue group-hover:text-white',
    ctaColor: 'text-bali-blue',
    title: 'Find an Expert',
    body: 'Search over 900 accredited garden designers, landscapers, suppliers and training providers.',
    cta: 'Start Search',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  },
  {
    href: '/join',
    border: 'hover:border-bali-green',
    iconBg: 'bg-bali-green/10 group-hover:bg-bali-green',
    iconColor: 'text-bali-green group-hover:text-white',
    ctaColor: 'text-bali-green',
    title: 'Join Our Network',
    body: 'Access the UK\'s leading Trade Association — exclusive benefits, technical support, events and training.',
    cta: 'Make Enquiry',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
  },
  {
    href: 'https://www.baliawards.co.uk',
    border: 'hover:border-yellow-500',
    iconBg: 'bg-yellow-50 group-hover:bg-yellow-500',
    iconColor: 'text-yellow-500 group-hover:text-white',
    ctaColor: 'text-yellow-600',
    title: 'National Awards',
    body: "Industry-leading National Landscape Awards, sponsored by Green-tech. Celebrating excellence since 1976.",
    cta: 'Learn More',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
  },
  {
    href: '/liss-cscs',
    border: 'hover:border-bali-flow',
    iconBg: 'bg-bali-flow/10 group-hover:bg-bali-flow',
    iconColor: 'text-bali-flow group-hover:text-white',
    ctaColor: 'text-bali-flow',
    title: 'LISS SmartCards',
    body: 'Apply online to gain access to live commercial land-based sites across the UK.',
    cta: 'Apply Now',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />,
  },
]

// ── Reveal hook ───────────────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [current, setCurrent] = useState(0)
  const [searchType, setSearchType] = useState('')
  const [searchPostcode, setSearchPostcode] = useState('')
  const [searchProjectType, setSearchProjectType] = useState('')
  const [searchKeyword, setSearchKeyword] = useState('')

  // Auto-play slider
  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5500)
    return () => clearInterval(t)
  }, [])

  const statsRef = useReveal()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: 580 }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, background: slide.bg }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 30, 50, 0.55), rgba(15, 30, 50, 0.55)), url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="relative max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-2xl text-white animate-fade-up">
                <p className={`${slide.eyebrowColor} font-medium uppercase tracking-widest text-sm mb-3`}>
                  {slide.eyebrow}
                </p>
                <h1 className="text-5xl font-bold leading-tight mb-4 whitespace-pre-line">
                  {slide.title}
                </h1>
                <p className="text-blue-100 text-lg mb-8">{slide.body}</p>
                <div className="flex flex-wrap gap-3">
                  {slide.ctas.map((cta) => (
                    <Link
                      key={cta.label}
                      to={cta.href}
                      className={`${cta.style} px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg`}
                    >
                      {cta.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-white/80' : 'bg-white/40 hover:bg-white/60'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-sm z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrent((c) => (c + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-sm z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* ── Directory search bar ───────────────────────────────────── */}
      <section className="bg-bali-blue py-6 shadow-inner">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-3">
            <p className="text-white font-semibold text-lg">Find a Landscape Professional</p>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
              <input
                type="text"
                placeholder="Keyword (name, project…)"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="md:col-span-4 rounded-lg border-0 px-4 py-3 text-sm bg-white/10 text-white placeholder-white/60 backdrop-blur-sm focus:bg-white focus:text-gray-800 transition-all focus:outline-none"
              />
              <input
                type="text"
                placeholder="Postcode (e.g. B91)"
                value={searchPostcode}
                onChange={(e) => setSearchPostcode(e.target.value)}
                className="md:col-span-2 rounded-lg border-0 px-4 py-3 text-sm bg-white/10 text-white placeholder-white/60 backdrop-blur-sm focus:bg-white focus:text-gray-800 transition-all focus:outline-none"
              />
              <select
                value={searchProjectType}
                onChange={(e) => setSearchProjectType(e.target.value)}
                className="md:col-span-3 rounded-lg border-0 px-4 py-3 text-sm bg-white/10 text-white backdrop-blur-sm focus:bg-white focus:text-gray-800 transition-all"
              >
                <option value="">All project types</option>
                <option value="Garden Design">Garden Design</option>
                <option value="Hard Landscaping">Hard Landscaping</option>
                <option value="Soft Landscaping & Planting">Soft Landscaping & Planting</option>
                <option value="Grounds Maintenance">Grounds Maintenance</option>
                <option value="Irrigation">Irrigation</option>
                <option value="Trees & Arboriculture">Trees & Arboriculture</option>
                <option value="Materials & Paving">Materials & Paving</option>
                <option value="Equipment & Tools">Equipment & Tools</option>
                <option value="Public Realm & Community">Public Realm & Community</option>
                <option value="Training & Education">Training & Education</option>
              </select>
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="md:col-span-2 rounded-lg border-0 px-4 py-3 text-sm bg-white/10 text-white backdrop-blur-sm focus:bg-white focus:text-gray-800 transition-all"
              >
                <option value="">All categories</option>
                <option value="designer">Designer</option>
                <option value="contractor">Contractor</option>
                <option value="supplier">Supplier</option>
                <option value="training">Training Provider</option>
              </select>
              <Link
                to={`/search?q=${encodeURIComponent(searchKeyword)}&postcode=${encodeURIComponent(searchPostcode)}&projectType=${encodeURIComponent(searchProjectType)}&category=${encodeURIComponent(searchType)}`}
                className="md:col-span-1 bg-bali-green hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="md:hidden">Search</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={statsRef} className="reveal grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={s.label} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-4xl font-bold text-bali-blue">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advertiser banner (rotates daily) ─────────────────────── */}
      <section className="bg-white pt-10">
        <div className="max-w-7xl mx-auto px-4">
          <AdBanner placement="homepage-mid" />
        </div>
      </section>

      {/* ── Quick action cards ────────────────────────────────────── */}
      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-4">
          <RevealDiv className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What are you looking for?</h2>
            <p className="text-gray-500 mt-2">Everything you need from BALI, in one place.</p>
          </RevealDiv>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {actions.map((a, i) => (
              <RevealDiv key={a.title} delay={i * 0.1}>
                <Link
                  to={a.href}
                  className={`group bg-white border border-gray-200 rounded-2xl p-6 ${a.border} hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full`}
                >
                  <div className={`w-12 h-12 ${a.iconBg} rounded-xl flex items-center justify-center mb-4 transition-colors`}>
                    <svg className={`w-6 h-6 ${a.iconColor} transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {a.icon}
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{a.title}</h3>
                  <p className="text-gray-500 text-sm flex-1">{a.body}</p>
                  <span className={`mt-4 ${a.ctaColor} text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all`}>
                    {a.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── About BALI ────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealDiv>
              <p className="text-bali-green font-semibold uppercase tracking-widest text-sm mb-3">Since 1976</p>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-5">
                We're the UK's leading landscaping Trade Association
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Whatever space you're looking to create, our members deliver breathtaking results — from world-class garden design and landscape build to maintenance and supply. With over 900 professionals delivering exceptionally high standards, your landscaping project is in safe hands.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                As thought leaders in our field, we lobby UK governments to support the £24bn Ornamental Horticulture sector, and provide our members with the highest quality technical, training, marketing and membership support.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/about" className="bg-bali-blue hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                  Our Vision & Values
                </Link>
                <Link to="/directory" className="border-2 border-bali-blue text-bali-blue hover:bg-bali-blue hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  Find Your Local Landscaper
                </Link>
              </div>
            </RevealDiv>
            <RevealDiv delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: bannerHome1.url, caption: 'Award-winning garden design', mt: '' },
                  { src: bannerWeb.url, caption: 'Professional landscaping', mt: 'mt-6' },
                  { src: bannerHome3.url, caption: 'Precision maintenance', mt: '-mt-2' },
                  { src: bannerMountbatten.url, caption: 'Quality materials & supply', mt: 'mt-4' },
                ].map((img) => (
                  <div key={img.src} className={`bg-white rounded-2xl overflow-hidden shadow-md ${img.mt}`}>
                    <img src={img.src} alt={img.caption} className="w-full h-40 object-cover" />
                    <div className="p-3 text-xs text-gray-500">{img.caption}</div>
                  </div>
                ))}
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* ── Report CTA ────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #21509A 0%, #1D4D59 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <RevealDiv className="flex flex-col md:flex-row items-center gap-8 text-white">
            <div className="flex-1">
              <p className="text-bali-grass uppercase tracking-widest text-sm font-semibold mb-3">Industry Report 2025</p>
              <h2 className="text-3xl font-bold mb-4">BALI's Lay of the Land Report 2025</h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                Our comprehensive annual industry report, packed with data, insights and trends shaping the UK landscape sector.
              </p>
              <Link to="/lay-of-the-land-2025" className="bg-white text-bali-blue hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-block">
                Discover More
              </Link>
            </div>
            <div className="flex-shrink-0 w-64 h-64 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-sm">
              <div className="text-center text-white">
                <svg className="w-16 h-16 mx-auto mb-3 text-bali-grass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="font-bold text-xl">Lay of the Land</p>
                <p className="text-blue-200 text-sm">Annual Report 2025</p>
              </div>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <RevealDiv className="text-center mb-12">
            <p className="text-bali-green font-semibold uppercase tracking-widest text-sm mb-3">In our members' words</p>
            <h2 className="text-3xl font-bold text-gray-900">Why BALI matters</h2>
          </RevealDiv>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "The support you get from BALI members is invaluable. People genuinely care about how you're getting on, and the conversations are honest, real and incredibly reassuring.",
                name: 'Will Innes-Taylor',
                role: 'Hillier',
              },
              {
                quote: "BALI is about high standards and trusted referrals. When I recommend someone, it will be a BALI member, because I know the standards they have been assessed against.",
                name: 'Charles Blumlein',
                role: 'Location Landscapes',
              },
              {
                quote: "BALI brings the industry together. Through networking, collaboration and shared learning, we're all better, and we're all stronger.",
                name: 'Nick Coslett',
                role: 'BALI Awards judge and Chalk Fund Chair',
              },
            ].map((t, i) => (
              <RevealDiv key={t.name} delay={i * 0.1}>
                <figure className="bg-gray-50 border border-gray-200 rounded-2xl p-7 h-full flex flex-col">
                  <svg className="w-8 h-8 text-bali-blue/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <blockquote className="text-gray-700 leading-relaxed flex-1">"{t.quote}"</blockquote>
                  <figcaption className="mt-5 pt-5 border-t border-gray-200">
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </figcaption>
                </figure>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advertiser banner (footer, second seed for variety) ───── */}
      <section className="bg-white py-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <AdBanner placement="homepage-footer" seed={2} variant="compact" />
        </div>
      </section>

      {/* ── Membership CTA ────────────────────────────────────────── */}
      <section className="py-16 bg-bali-green">
        <RevealDiv className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Join BALI Today</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Access the accredited logo, technical support, events, training, exclusive discounts and a nationwide network of the finest landscape professionals.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/join" className="bg-white text-bali-green hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-all hover:scale-105 shadow-lg">
              Join Today
            </Link>
            <Link to="/join#categories" className="bg-green-700 hover:bg-green-800 text-white border border-white/20 px-8 py-3 rounded-lg font-bold transition-all">
              View Membership Categories
            </Link>
          </div>
        </RevealDiv>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}

// ── Reveal wrapper component ──────────────────────────────────────────────────
function RevealDiv({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}
