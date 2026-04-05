import { Link } from 'react-router-dom'

import { FadeInSection } from '@/components/motion'
import { neighborhoodShowcase } from '@/pages/listings/listingsShowcase'

export function NeighborhoodShowcaseSection() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-semibold text-charcoal-950 dark:text-zinc-50">
            Explore Austin&apos;s Premier Neighborhoods
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-charcoal-600 dark:text-zinc-400">
            Each neighborhood offers its own unique character and lifestyle
          </p>
        </FadeInSection>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {neighborhoodShowcase.map((n, i) => (
            <FadeInSection key={n.name} delay={i * 0.07} y={18}>
              <Link
                to="/neighborhoods"
                className="group relative block h-64 w-full cursor-pointer overflow-hidden rounded-2xl"
              >
                <img
                  alt={n.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  src={n.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-left">
                  <h3 className="mb-1 font-serif text-xl font-semibold text-white">{n.name}</h3>
                  <p className="text-sm text-white/80">{n.propertyCountLabel}</p>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
