import { Building2, GraduationCap, MapPin, Trophy, Waves } from 'lucide-react'

import { FadeInSection } from '@/components/motion'
import { lifestyleHighlights } from '@/pages/neighborhoods/neighborhoodsData'

const lifestyleIcons = {
  water: Waves,
  golf: Trophy,
  graduation: GraduationCap,
  building: Building2,
} as const

export function NeighborhoodsLifestyleSection() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium tracking-wider text-sage-600 uppercase dark:text-sage-400">
            Find Your Lifestyle
          </p>
          <h2 className="mb-4 font-serif text-4xl font-semibold text-charcoal-950 dark:text-zinc-50">
            What Matters Most to You?
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {lifestyleHighlights.map((item, i) => {
            const Icon = lifestyleIcons[item.icon]
            return (
              <FadeInSection key={item.title} delay={i * 0.06}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:bg-charcoal-900 dark:shadow-none dark:hover:shadow-md">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      alt={item.alt}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      src={item.image}
                    />
                    <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm dark:bg-charcoal-900/90">
                      <Icon className="size-5 text-sage-600 dark:text-sage-400" aria-hidden />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 font-serif text-lg font-semibold text-charcoal-950 dark:text-zinc-50">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-charcoal-500 dark:text-charcoal-400">
                      {item.description}
                    </p>
                    <p className="text-xs font-medium text-sage-600 dark:text-sage-400">
                      <MapPin aria-hidden className="mr-1 inline size-3.5 align-text-bottom" />
                      {item.locations}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
