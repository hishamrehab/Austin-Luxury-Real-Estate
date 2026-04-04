import { SellAdvisorsSection } from '@/pages/sell/components/SellAdvisorsSection'
import { SellFinalCtaSection } from '@/pages/sell/components/SellFinalCtaSection'
import { SellHero } from '@/pages/sell/components/SellHero'
import { SellProcessSection } from '@/pages/sell/components/SellProcessSection'
import { SellServicesSection } from '@/pages/sell/components/SellServicesSection'
import { SellStatsSection } from '@/pages/sell/components/SellStatsSection'
import { SellTestimonialSection } from '@/pages/sell/components/SellTestimonialSection'
import { SellValuationSection } from '@/pages/sell/components/SellValuationSection'

export function SellPage() {
  return (
    <>
      <SellHero />
      <SellStatsSection />
      <SellValuationSection />
      <SellProcessSection />
      <SellServicesSection />
      <SellTestimonialSection />
      <SellAdvisorsSection />
      <SellFinalCtaSection />
    </>
  )
}
