import { Link } from 'react-router-dom'
import { CircleDollarSign, Heart, Home } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useLovedNeighborhoods } from '@/context/LovedNeighborhoodsContext'
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
  const { isLoved, toggleLoved } = useLovedNeighborhoods()
  const loved = isLoved(entry.id)
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
      <div className="absolute top-5 left-5 z-10 flex max-w-[calc(100%-5rem)] flex-wrap gap-2 pr-2">
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
          <p className="mb-4 line-clamp-2 max-w-md text-sm leading-relaxed text-white/80">{entry.description}</p>
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

  const shell = (
    <div className="group relative cursor-pointer overflow-hidden rounded-2xl">
      <Link to={`/neighborhoods/${entry.id}`} className="block">
        {inner}
      </Link>
      <button
        type="button"
        className={cn(
          'absolute top-5 right-5 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm transition-[transform,colors,box-shadow]',
          'bg-white/92 text-charcoal-600 shadow-md hover:scale-105 hover:bg-white active:scale-95',
          'dark:bg-charcoal-950/90 dark:text-zinc-200 dark:hover:bg-charcoal-900',
          loved && 'ring-2 ring-rose-400/80 dark:ring-rose-500/55',
        )}
        aria-label={loved ? `Remove ${entry.name} from loved neighborhoods` : `Save ${entry.name} to loved neighborhoods`}
        aria-pressed={loved}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          toggleLoved(entry.id)
        }}
      >
        <Heart
          className={cn(
            'size-5 transition-[color,fill,transform]',
            loved ? 'fill-rose-500 text-rose-500' : 'fill-transparent text-charcoal-700 dark:text-zinc-100',
          )}
          strokeWidth={1.75}
        />
      </button>
    </div>
  )

  if (wrapperClassName) {
    return <div className={wrapperClassName}>{shell}</div>
  }

  return shell
}
