import { Link, useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'

const tabs = [
  { to: '/saved-properties', label: 'Properties' },
  { to: '/saved-neighborhoods', label: 'Neighborhoods' },
] as const

export function SavedCollectionTabs() {
  const { pathname } = useLocation()

  return (
    <div
      className="mt-10 inline-flex w-full max-w-md gap-1 rounded-full border border-charcoal-200/70 bg-white/70 p-1 shadow-sm backdrop-blur-sm dark:border-charcoal-600 dark:bg-charcoal-900/70"
      role="tablist"
      aria-label="Saved collection"
    >
      {tabs.map(({ to, label }) => {
        const active = pathname === to || pathname.startsWith(`${to}/`)
        return (
          <Link
            key={to}
            to={to}
            role="tab"
            aria-selected={active}
            className={cn(
              'flex-1 cursor-pointer rounded-full py-2.5 text-center text-sm font-semibold transition-all duration-200',
              active
                ? 'bg-charcoal-950 text-white shadow-md dark:bg-sage-600 dark:text-white'
                : 'text-charcoal-500 hover:bg-charcoal-100/80 hover:text-charcoal-900 dark:text-zinc-400 dark:hover:bg-charcoal-800 dark:hover:text-zinc-100',
            )}
          >
            {label}
          </Link>
        )
      })}
    </div>
  )
}
