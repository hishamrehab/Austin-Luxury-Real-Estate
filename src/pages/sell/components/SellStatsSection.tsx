import { FadeInSection } from '@/components/motion'
import { sellStats } from '@/pages/sell/sellData'

export function SellStatsSection() {
  return (
    <section className="bg-charcoal-950 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {sellStats.map((stat, i) => (
            <FadeInSection key={stat.label} delay={i * 0.07} className="text-center">
              <p className="mb-2 font-serif text-4xl font-semibold text-sage-400 md:text-5xl">
                {stat.value}
              </p>
              <p className="text-sm text-charcoal-300">{stat.label}</p>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
