import { Link } from 'react-router-dom'

import { FadeInSection } from '@/components/motion'
import { featuredProperties } from '@/pages/home/data'
import { FeaturedPropertyCard } from './FeaturedPropertyCard'

export function FeaturedPropertiesSection() {
  return (
    <section className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h3 className="font-serif text-4xl font-semibold text-charcoal-950 sm:text-5xl dark:text-zinc-50">
            Featured Properties
          </h3>
          <Link
            to="/listings"
            className="cursor-pointer whitespace-nowrap text-base text-sage-600 transition-colors hover:text-sage-700 dark:text-sage-400 dark:hover:text-sage-300"
          >
            View All Listings →
          </Link>
        </FadeInSection>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((p, i) => (
            <FadeInSection key={p.id} delay={i * 0.06}>
              <FeaturedPropertyCard property={p} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
