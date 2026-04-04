import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Heart, Menu, X } from 'lucide-react'

import { Logo } from '@/components/brand'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme'
import { useLovedListings } from '@/context/LovedListingsContext'
import { useLovedNeighborhoods } from '@/context/LovedNeighborhoodsContext'

const navLinks = [
  { to: '/listings', label: 'Buy' },
  { to: '/sell', label: 'Sell' },
  { to: '/neighborhoods', label: 'Neighborhoods' },
  { to: '/agents', label: 'Agents' },
  { to: '/about', label: 'About' },
] as const

/** Top of page is a light hero — transparent header would use white text and disappear */
const LIGHT_HEADER_PATHS = ['/saved-properties', '/saved-neighborhoods'] as const

export function SiteHeader() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count: lovedListingCount } = useLovedListings()
  const { count: lovedNeighborhoodCount } = useLovedNeighborhoods()

  const forceSolidNav = LIGHT_HEADER_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  )
  const navOnLight = scrolled || forceSolidNav
  const savedTotalCount = lovedListingCount + lovedNeighborhoodCount

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const linkClass = cn(
    'text-sm font-medium transition-colors',
    navOnLight
      ? 'text-charcoal-950 hover:text-sage-600 dark:text-zinc-100 dark:hover:text-sage-400'
      : 'text-white hover:text-sage-500',
  )

  return (
    <nav
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        navOnLight &&
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
            <Logo variant={navOnLight ? 'onLight' : 'onDark'} className="min-w-0" />
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            <div className="flex items-center space-x-8">
              {navLinks.map(({ to, label }) => (
                <Link key={to} to={to} className={linkClass}>
                  {label}
                </Link>
              ))}
            </div>
            <ThemeToggle scrolled={navOnLight} />
            <Link
              to="/saved-properties"
              className={cn(
                'relative flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors',
                navOnLight
                  ? 'border-charcoal-200 bg-white/80 text-charcoal-900 hover:bg-charcoal-100 dark:border-charcoal-600 dark:bg-charcoal-900/60 dark:text-zinc-100 dark:hover:bg-charcoal-800'
                  : 'border-white/40 bg-white/10 text-white hover:bg-white/20',
              )}
              aria-label={
                savedTotalCount > 0
                  ? `Saved — ${lovedListingCount} ${lovedListingCount === 1 ? 'home' : 'homes'}, ${lovedNeighborhoodCount} ${lovedNeighborhoodCount === 1 ? 'neighborhood' : 'neighborhoods'}`
                  : 'Saved — homes and neighborhoods you love'
              }
            >
              <Heart className="size-[1.15rem]" strokeWidth={1.75} />
              {savedTotalCount > 0 ? (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white tabular-nums">
                  {savedTotalCount > 9 ? '9+' : savedTotalCount}
                </span>
              ) : null}
            </Link>
            <Link
              to="/contact"
              className={cn(
                'cursor-pointer rounded-full px-6 py-2.5 text-sm font-medium whitespace-nowrap text-white transition-colors',
                navOnLight
                  ? 'bg-sage-500 hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500'
                  : 'border border-white/35 bg-sage-500/50 backdrop-blur-md hover:bg-sage-500/60',
              )}
            >
              Schedule Consultation
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle scrolled={navOnLight} />
            <Link
              to="/saved-properties"
              className={cn(
                'relative flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors',
                navOnLight
                  ? 'border-charcoal-200 bg-white/80 text-charcoal-900 hover:bg-charcoal-100 dark:border-charcoal-600 dark:bg-charcoal-900/60 dark:text-zinc-100 dark:hover:bg-charcoal-800'
                  : 'border-white/40 bg-white/10 text-white hover:bg-white/20',
              )}
              aria-label={
                savedTotalCount > 0
                  ? `Saved — ${lovedListingCount} ${lovedListingCount === 1 ? 'home' : 'homes'}, ${lovedNeighborhoodCount} ${lovedNeighborhoodCount === 1 ? 'neighborhood' : 'neighborhoods'}`
                  : 'Saved — homes and neighborhoods you love'
              }
            >
              <Heart className="size-[1.15rem]" strokeWidth={1.75} />
              {savedTotalCount > 0 ? (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white tabular-nums">
                  {savedTotalCount > 9 ? '9+' : savedTotalCount}
                </span>
              ) : null}
            </Link>
            <button
              type="button"
              className={cn(
                'flex h-10 w-10 cursor-pointer items-center justify-center',
                navOnLight ? 'text-charcoal-950 dark:text-zinc-100' : 'text-white',
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
              to="/saved-properties"
              className="flex items-center gap-2 text-base font-medium text-charcoal-950 hover:text-sage-600 dark:text-zinc-100 dark:hover:text-sage-400"
              onClick={() => setMobileOpen(false)}
            >
              <Heart className="size-5 shrink-0 text-rose-500" aria-hidden />
              Saved
              {savedTotalCount > 0 ? (
                <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">
                  {savedTotalCount}
                </span>
              ) : null}
            </Link>
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
