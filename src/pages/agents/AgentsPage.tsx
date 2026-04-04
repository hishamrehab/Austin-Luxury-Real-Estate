import { AgentsDirectorySection } from '@/pages/agents/components/AgentsDirectorySection'
import { AgentsFinalCtaSection } from '@/pages/agents/components/AgentsFinalCtaSection'
import { AgentsHero } from '@/pages/agents/components/AgentsHero'
import { AgentsPrincipalSection } from '@/pages/agents/components/AgentsPrincipalSection'
import { AgentsTestimonialsSection } from '@/pages/agents/components/AgentsTestimonialsSection'
import { AgentsWhySection } from '@/pages/agents/components/AgentsWhySection'

export function AgentsPage() {
  return (
    <>
      <AgentsHero />
      <AgentsPrincipalSection />
      <AgentsDirectorySection />
      <AgentsWhySection />
      <AgentsTestimonialsSection />
      <AgentsFinalCtaSection />
    </>
  )
}
