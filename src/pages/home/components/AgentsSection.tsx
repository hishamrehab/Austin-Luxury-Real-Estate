import { Link } from 'react-router-dom'

import { FadeInSection } from '@/components/motion'
import { agents } from '@/pages/home/data'
import { AgentCard } from './AgentCard'

export function AgentsSection() {
  return (
    <section className="px-6 py-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium tracking-wider text-sage-600 uppercase dark:text-sage-400">
            Meet Our Team
          </p>
          <h3 className="font-serif text-4xl font-semibold text-charcoal-950 sm:text-5xl dark:text-zinc-50">
            20 Expert Agents
          </h3>
        </FadeInSection>
        <div className="relative">
          <div className="scrollbar-hide flex gap-8 overflow-x-auto pb-8">
            {agents.map((a, i) => (
              <FadeInSection key={a.name} delay={i * 0.05} className="shrink-0">
                <AgentCard agent={a} />
              </FadeInSection>
            ))}
          </div>
        </div>
        <FadeInSection className="mt-12 text-center" delay={0.12}>
          <Link
            to="/agents"
            className="inline-block cursor-pointer rounded-full bg-charcoal-950 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-charcoal-900 dark:bg-zinc-100 dark:text-charcoal-950 dark:hover:bg-white"
          >
            View All Agents
          </Link>
        </FadeInSection>
      </div>
    </section>
  )
}
