import { CalendarCheck, Home, LineChart } from 'lucide-react'

import { FadeInSection } from '@/components/motion'
import { sellValuationFeatures } from '@/pages/sell/sellData'
import { ValuationForm } from '@/pages/sell/components/ValuationForm'

const featureIcons = [LineChart, Home, CalendarCheck] as const

export function SellValuationSection() {
  return (
    <section
      id="valuation"
      className="bg-[#F5F3EF] px-6 py-32 lg:px-8 dark:bg-charcoal-900"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <FadeInSection>
            <p className="mb-4 text-sm font-medium tracking-wider text-sage-600 uppercase dark:text-sage-400">
              Complimentary Service
            </p>
            <h2 className="mb-6 font-serif text-4xl leading-tight font-semibold text-charcoal-950 sm:text-5xl dark:text-zinc-50">
              What&apos;s Your Home Worth?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-charcoal-600 dark:text-charcoal-300">
              Receive a comprehensive market analysis within 48 hours. Our expert agents combine
              AI-powered data with local market expertise to provide an accurate valuation of your
              luxury property.
            </p>
            <ul className="space-y-6">
              {sellValuationFeatures.map((item, i) => {
                const Icon = featureIcons[i]
                return (
                  <FadeInSection key={item.title} delay={0.08 + i * 0.06} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-500 dark:bg-sage-600">
                      <Icon className="size-5 text-white" aria-hidden />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-charcoal-950 dark:text-zinc-50">
                        {item.title}
                      </h3>
                      <p className="text-base text-charcoal-600 dark:text-charcoal-400">
                        {item.description}
                      </p>
                    </div>
                  </FadeInSection>
                )
              })}
            </ul>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="rounded-3xl bg-white p-10 shadow-lg dark:bg-charcoal-950 dark:shadow-black/40">
              <h3 className="mb-2 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                Request Your Free Valuation
              </h3>
              <p className="mb-8 text-base text-charcoal-500 dark:text-charcoal-400">
                Fill out the form below and we&apos;ll prepare your personalized market analysis
              </p>
              <ValuationForm />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
