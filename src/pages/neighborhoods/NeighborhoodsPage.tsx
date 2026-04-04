import { NeighborhoodsComparisonSection } from '@/pages/neighborhoods/components/NeighborhoodsComparisonSection'
import { NeighborhoodsDiscoverSection } from '@/pages/neighborhoods/components/NeighborhoodsDiscoverSection'
import { NeighborhoodsFinalCtaSection } from '@/pages/neighborhoods/components/NeighborhoodsFinalCtaSection'
import { NeighborhoodsHero } from '@/pages/neighborhoods/components/NeighborhoodsHero'
import { NeighborhoodsLifestyleSection } from '@/pages/neighborhoods/components/NeighborhoodsLifestyleSection'
import { NeighborhoodsMapInquirySection } from '@/pages/neighborhoods/components/NeighborhoodsMapInquirySection'
import { NeighborhoodsSpotlightsSection } from '@/pages/neighborhoods/components/NeighborhoodsSpotlightsSection'
import { NeighborhoodsStatsSection } from '@/pages/neighborhoods/components/NeighborhoodsStatsSection'

export function NeighborhoodsPage() {
  return (
    <>
      <NeighborhoodsHero />
      <NeighborhoodsStatsSection />
      <NeighborhoodsDiscoverSection />
      <NeighborhoodsSpotlightsSection />
      <NeighborhoodsLifestyleSection />
      <NeighborhoodsComparisonSection />
      <NeighborhoodsMapInquirySection />
      <NeighborhoodsFinalCtaSection />
    </>
  )
}
