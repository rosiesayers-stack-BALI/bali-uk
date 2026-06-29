import { useState, FormEvent } from 'react'
import { useNavigate } from '@tanstack/react-router'
import Link from '../components/SmartLink'
import { supabase } from '@/integrations/supabase/client'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>({})

  const validate = () => {
    const e: typeof errors = {}
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email address.'
    if (!password) e.password = 'Please enter your password.'
    return e
  }

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) {
      setErrors({ form: error.message || 'Sign in failed. Please check your details and try again.' })
      return
    }
    navigate({ to: '/portal' })
  }


  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">

      {/* Utility bar */}
      <div className="bg-bali-blue text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-blue-200 text-xs hover:text-white transition-colors flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to website
          </Link>
          <Link to="/join" className="hover:text-bali-grass transition-colors font-medium uppercase tracking-wide text-xs">
            Not a member? Join today
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <img src="https://www.bali.org.uk/themes/bali/gfx/logo.png" alt="BALI" className="h-12 w-auto" />
          </Link>
          <p className="text-sm text-gray-500 hidden sm:block">Member Portal Access</p>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1">

        {/* Left panel */}
        <div
          className="hidden lg:flex flex-col justify-between w-1/2 p-12 relative overflow-hidden"
          style={{ background: 'linear-gradient(150deg, #21509A 0%, #1D4D59 60%, #0E8B61 100%)' }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=60')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative">
            <img src="https://www.bali.org.uk/themes/bali/gfx/logo-white.png" alt="BALI" className="h-12 mb-8" />
          </div>
          <div className="relative text-white">
            <h1 className="text-4xl font-bold leading-tight mb-4">Welcome back to<br />My BALI</h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Access your member dashboard, renew your membership, manage your directory listing, and connect with the UK's leading landscaping community.
            </p>
            <ul className="space-y-3">
              {[
                'Manage your membership & renewals',
                'Update your directory listing & portfolio',
                'Book events, training & conferences',
                'Access HR, health & safety resources',
                'Apply for & manage LISS SmartCards',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-blue-100">
                  <svg className="w-5 h-5 text-bali-grass flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mt-8">
            <p className="text-blue-200 text-sm">Not yet a member?</p>
            <Link to="/join" className="text-white font-semibold hover:text-bali-grass transition-colors text-sm underline underline-offset-2">
              Join BALI today →
            </Link>
          </div>
        </div>

        {/* Right panel — form */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md animate-slide-up">
            {/* Mobile logo */}
            <div className="lg:hidden text-center mb-8">
              <img src="https://www.bali.org.uk/themes/bali/gfx/logo.png" alt="BALI" className="h-10 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Member Portal</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Sign in</h2>
              <p className="text-gray-500 text-sm mb-7">Enter your credentials to access your member account.</p>

              <form onSubmit={handleSubmit} noValidate>
                {/* Email */}
                <div className="mb-5">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@yourcompany.co.uk"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors((x) => ({ ...x, email: undefined })) }}
                    className={`w-full border rounded-lg px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Password */}
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <Link to="/forgotten-password" className="text-xs text-bali-blue hover:underline">Forgotten password?</Link>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPw ? 'text' : 'password'}
                      autoComplete="current-password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value); setErrors((x) => ({ ...x, password: undefined })) }}
                      className={`w-full border rounded-lg px-4 py-3 text-sm pr-12 transition-all focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue ${errors.password ? 'border-red-400' : 'border-gray-300'}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw(!showPw)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Toggle password visibility"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {showPw ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        ) : (
                          <>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </>
                        )}
                      </svg>
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>

                {/* Remember me */}
                <div className="flex items-center gap-2 mb-6">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-4 h-4 text-bali-blue border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">Keep me signed in</label>
                </div>

                {/* API error */}
                {errors.form && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm mb-5 flex items-start gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.form}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-bali-blue hover:bg-blue-800 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      Signing in…
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    </>
                  ) : 'Sign In'}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500">
                  Not yet a member?{' '}
                  <Link to="/join" className="text-bali-blue font-semibold hover:underline">Join BALI today</Link>
                </p>
              </div>
            </div>

            <p className="text-center text-xs text-gray-400 mt-5">
              Having trouble logging in?{' '}
              <Link to="/contact" className="text-bali-blue hover:underline">Contact us</Link> — we'll help within 48 hours.
            </p>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="bg-bali-slate text-gray-400 text-xs py-4 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-5 gap-y-1">
          <span>© 2025 British Association of Landscape Industries</span>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </footer>
    </div>
  )
}
