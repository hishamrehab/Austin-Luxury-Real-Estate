import { AgentsSection } from './components/AgentsSection'
import { BuySellSection } from './components/BuySellSection'
import { FeaturedPropertiesSection } from './components/FeaturedPropertiesSection'
import { HeroSection } from './components/HeroSection'
import { TestimonialsSection } from './components/TestimonialsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedPropertiesSection />
      <BuySellSection />
      <AgentsSection />
      <TestimonialsSection />
    </>
  )
}
