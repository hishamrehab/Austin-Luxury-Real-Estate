import { FadeInSection } from '@/components/motion'
import { neighborhoodsPageStats } from '@/pages/neighborhoods/neighborhoodsData'

export function NeighborhoodsStatsSection() {
  return (
    <section className="bg-charcoal-950 px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {neighborhoodsPageStats.map((stat, i) => (
            <FadeInSection key={stat.label} delay={i * 0.06}>
              <p className="mb-1 font-serif text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-charcoal-300">{stat.label}</p>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
