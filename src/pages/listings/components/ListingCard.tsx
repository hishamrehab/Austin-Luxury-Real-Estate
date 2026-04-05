import { Link } from 'react-router-dom'
import { Bath, Bed, Heart, LayoutGrid } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

import { cn } from '@/lib/utils'
import { useLovedListings } from '@/context/LovedListingsContext'
import type { FeaturedProperty } from '@/pages/home/data'
import { ListingPropertyImage } from '@/pages/listings/components/ListingPropertyImage'
import { formatSqftDisplay } from '@/pages/listings/listingsFilterUtils'

const cardSpring = { type: 'spring' as const, stiffness: 380, damping: 32, mass: 0.85 }

const cardVariants = {
  rest: { y: 0 },
  hover: {
    y: -8,
    transition: cardSpring,
  },
}

export function ListingCard({
  property: p,
  layout,
}: {
  property: FeaturedProperty
  layout: 'grid' | 'list'
}) {
  const { isLoved, toggleLoved } = useLovedListings()
  const loved = isLoved(p.id)
  const reduceMotion = useReducedMotion()

  const inner = (
    <>
      <div
        className={cn(
          'relative h-64 w-full overflow-hidden',
          layout === 'list' && 'md:h-full md:min-h-[220px] md:w-80 md:shrink-0',
        )}
      >
        <ListingPropertyImage
          alt={p.address}
          src={p.image}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-charcoal-700 backdrop-blur-sm dark:bg-charcoal-950/90 dark:text-zinc-100">
            {p.neighborhood}
          </span>
        </div>
        <button
          type="button"
          className={cn(
            'absolute top-4 right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors dark:bg-charcoal-950/90',
            loved
              ? 'text-rose-500 ring-2 ring-rose-400/60 dark:text-rose-400 dark:ring-rose-500/45'
              : 'text-charcoal-400 hover:text-rose-500 dark:text-zinc-400 dark:hover:text-rose-400',
          )}
          aria-label={loved ? 'Remove from loved properties' : 'Add to loved properties'}
          aria-pressed={loved}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            toggleLoved(p.id)
          }}
        >
          <Heart className={cn('size-5', loved && 'fill-current')} />
        </button>
      </div>
      <div className={cn('p-6', layout === 'list' && 'md:flex md:flex-1 md:flex-col md:justify-center')}>
        <p className="mb-2 font-serif text-2xl font-bold text-sage-600 dark:text-sage-400">{p.price}</p>
        <h3 className="mb-3 text-lg font-semibold text-charcoal-950 transition-colors group-hover:text-sage-600 dark:text-zinc-50 dark:group-hover:text-sage-400">
          {p.address}
        </h3>
        <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal-500 dark:text-zinc-400">
          <span className="flex items-center gap-1">
            <Bed className="size-4 shrink-0" />
            {p.beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath className="size-4 shrink-0" />
            {p.baths} Baths
          </span>
          <span className="flex items-center gap-1">
            <LayoutGrid className="size-4 shrink-0" />
            {formatSqftDisplay(p.sqft)}
          </span>
        </div>
      </div>
    </>
  )

  return (
    <Link
      to={`/listings/${p.id}`}
      className={cn(
        'group block cursor-pointer rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-sage-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-charcoal-950',
        layout === 'list' && 'md:max-w-none',
      )}
    >
      <motion.div
        variants={cardVariants}
        initial="rest"
        animate="rest"
        whileHover={reduceMotion ? undefined : 'hover'}
        className={cn(
          'overflow-hidden rounded-2xl bg-white shadow-sm transition-[box-shadow] duration-300 hover:shadow-xl dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10',
          layout === 'list' && 'md:flex md:max-w-none',
        )}
      >
        {inner}
      </motion.div>
    </Link>
  )
}
