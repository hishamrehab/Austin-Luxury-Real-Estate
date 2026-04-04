import { Link } from 'react-router-dom'
import { CircleDollarSign, Home } from 'lucide-react'

import type { NeighborhoodGridEntry } from '@/pages/neighborhoods/neighborhoodsData'

type NeighborhoodGridCardProps = {
  entry: NeighborhoodGridEntry
  /** When false, render as uniform card (filtered grid) */
  useLayoutVariant?: boolean
  wrapperClassName?: string
}

export function NeighborhoodGridCard({
  entry,
  useLayoutVariant = true,
  wrapperClassName,
}: NeighborhoodGridCardProps) {
  const isFeatured = useLayoutVariant && entry.layout === 'featured'

  const inner = (
    <div
      className={
        isFeatured
          ? 'relative h-full min-h-[520px] w-full overflow-hidden'
          : 'relative h-[260px] w-full overflow-hidden'
      }
    >
      <img
        alt={entry.imageAlt}
        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        src={entry.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/80" />
      <div className="absolute top-5 left-5 flex max-w-[calc(100%-2.5rem)] flex-wrap gap-2">
        {entry.badges.map((b) => (
          <span
            key={b}
            className="rounded-full border border-white/25 bg-charcoal-950/82 px-3 py-1.5 text-xs font-semibold tracking-wide text-white shadow-md backdrop-blur-sm"
          >
            {b}
          </span>
        ))}
      </div>
      <div className="absolute right-0 bottom-0 left-0 p-6">
        <p className="mb-1 font-sans text-sm text-white/70">{entry.subtitle}</p>
        <h3
          className={
            isFeatured
              ? 'mb-3 font-serif text-3xl font-semibold text-white'
              : 'mb-3 font-serif text-2xl font-semibold text-white'
          }
        >
          {entry.name}
        </h3>
        {entry.description && isFeatured ? (
          <p className="mb-4 line-clamp-2 max-w-md text-sm leading-relaxed text-white/80">
            {entry.description}
          </p>
        ) : null}
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
          <span className="flex items-center gap-1.5">
            <CircleDollarSign aria-hidden className="size-4 shrink-0" />
            {entry.fromPrice}
          </span>
          <span className="text-white/40">|</span>
          <span className="flex items-center gap-1.5">
            <Home aria-hidden className="size-4 shrink-0" />
            {entry.listings} Listings
          </span>
        </div>
      </div>
    </div>
  )

  const linkClass = 'group relative block cursor-pointer overflow-hidden rounded-2xl'

  const content = (
    <Link to={`/neighborhoods/${entry.id}`} className={linkClass}>
      {inner}
    </Link>
  )

  if (wrapperClassName) {
    return <div className={wrapperClassName}>{content}</div>
  }

  return content
}
