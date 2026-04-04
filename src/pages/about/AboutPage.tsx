import { AboutCommunitySection } from '@/pages/about/components/AboutCommunitySection'
import { AboutContactSection } from '@/pages/about/components/AboutContactSection'
import { AboutFinalCtaSection } from '@/pages/about/components/AboutFinalCtaSection'
import { AboutHero } from '@/pages/about/components/AboutHero'
import { AboutLeadershipSection } from '@/pages/about/components/AboutLeadershipSection'
import { AboutStorySection } from '@/pages/about/components/AboutStorySection'
import { AboutTimelineSection } from '@/pages/about/components/AboutTimelineSection'
import { AboutValuesSection } from '@/pages/about/components/AboutValuesSection'

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStorySection />
      <AboutValuesSection />
      <AboutTimelineSection />
      <AboutLeadershipSection />
      <AboutCommunitySection />
      <AboutContactSection />
      <AboutFinalCtaSection />
    </>
  )
}
