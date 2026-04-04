import { Home, Key } from 'lucide-react'

import { FadeInSection } from '@/components/motion'
import { ServiceHighlightCard } from './ServiceHighlightCard'

export function BuySellSection() {
  return (
    <section className="bg-sage-100 px-6 py-40 dark:bg-charcoal-900/60 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-5">
          <FadeInSection className="flex items-center lg:col-span-2">
            <h3 className="font-serif text-4xl leading-tight font-semibold text-charcoal-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
              Buy or Sell with Confidence
            </h3>
          </FadeInSection>
          <div className="space-y-10 lg:col-span-3">
            <FadeInSection delay={0.08}>
              <ServiceHighlightCard
                icon={Home}
                title="Buyer Services"
                description="Access exclusive MLS listings, personalized property tours, and expert guidance throughout your home buying journey. Our agents provide comprehensive market analysis and negotiation expertise to secure your dream luxury property."
                to="/listings"
              />
            </FadeInSection>
            <FadeInSection delay={0.14}>
              <ServiceHighlightCard
                icon={Key}
                title="Seller Services"
                description={
                  "Maximize your property's value with professional staging, cinematic photography, targeted marketing campaigns, and strategic pricing. Our proven process attracts qualified buyers and achieves premium results."
                }
                to="/sell"
              />
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  )
}
