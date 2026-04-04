import { FadeInSection } from '@/components/motion'
import { sellServices } from '@/pages/sell/sellData'
import { SellServiceCard } from '@/pages/sell/components/SellServiceCard'

export function SellServicesSection() {
  return (
    <section className="bg-charcoal-950 px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-20 text-center">
          <p className="mb-4 text-sm font-medium tracking-wider text-sage-400 uppercase">
            Comprehensive Services
          </p>
          <h2 className="mb-6 font-serif text-4xl font-semibold text-white sm:text-5xl">
            White-Glove Selling Experience
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-charcoal-300">
            Every detail managed with precision and discretion to achieve premium results
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {sellServices.map((s, i) => (
            <SellServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
              image={s.image}
              imageAlt={s.alt}
              bullets={s.bullets}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
