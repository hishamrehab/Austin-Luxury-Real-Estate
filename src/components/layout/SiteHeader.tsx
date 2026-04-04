import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import { Logo } from '@/components/brand'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme'

const navLinks = [
  { to: '/listings', label: 'Buy' },
  { to: '/sell', label: 'Sell' },
  { to: '/neighborhoods', label: 'Neighborhoods' },
  { to: '/agents', label: 'Agents' },
  { to: '/about', label: 'About' },
] as const

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const linkClass = cn(
    'text-sm font-medium transition-colors',
    scrolled
      ? 'text-charcoal-950 hover:text-sage-600 dark:text-zinc-100 dark:hover:text-sage-400'
      : 'text-white hover:text-sage-500',
  )

  return (
    <nav
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        scrolled &&
          'border-b border-charcoal-100/90 bg-[#FAFAF8]/95 shadow-sm backdrop-blur-md dark:border-charcoal-800/90 dark:bg-charcoal-950/90',
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className="flex min-w-0 items-center transition-opacity hover:opacity-90"
            aria-label="Austin Luxury Realty home"
          >
            <Logo variant={scrolled ? 'onLight' : 'onDark'} className="min-w-0" />
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            <div className="flex items-center space-x-8">
              {navLinks.map(({ to, label }) => (
                <Link key={to} to={to} className={linkClass}>
                  {label}
                </Link>
              ))}
            </div>
            <ThemeToggle scrolled={scrolled} />
            <Link
              to="/contact"
              className="cursor-pointer rounded-full bg-sage-500 px-6 py-2.5 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
            >
              Schedule Consultation
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle scrolled={scrolled} />
            <button
              type="button"
              className={cn(
                'flex h-10 w-10 cursor-pointer items-center justify-center',
                scrolled ? 'text-charcoal-950 dark:text-zinc-100' : 'text-white',
              )}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X className="size-7" /> : <Menu className="size-7" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-charcoal-100 bg-[#FAFAF8] px-6 py-6 dark:border-charcoal-800 dark:bg-charcoal-950 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-base font-medium text-charcoal-950 hover:text-sage-600 dark:text-zinc-100 dark:hover:text-sage-400"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-sage-500 px-6 py-3 text-center text-sm font-medium text-white hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
              onClick={() => setMobileOpen(false)}
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
