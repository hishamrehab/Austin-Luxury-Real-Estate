import { useMemo, useState } from 'react'

import { AgentContactDialog } from '@/pages/agents/components/AgentContactDialog'
import { AgentsDirectoryEmptyState } from '@/pages/agents/components/AgentsDirectoryEmptyState'
import { AgentsDirectoryHeader } from '@/pages/agents/components/AgentsDirectoryHeader'
import { AgentsDirectoryShowMoreButton } from '@/pages/agents/components/AgentsDirectoryShowMoreButton'
import { AgentsDirectoryToolbar } from '@/pages/agents/components/AgentsDirectoryToolbar'
import { DirectoryAgentCard } from '@/pages/agents/components/DirectoryAgentCard'
import { agentMatchesSearch } from '@/pages/agents/agentsDirectoryUtils'
import { directoryAgents, type DirectoryAgent, type SpecialtyFilterId } from '@/pages/agents/agentsData'
import { useAgentPreviewLimit } from '@/pages/agents/useAgentPreviewLimit'

export function AgentsDirectorySection() {
  const [search, setSearch] = useState('')
  const [filterId, setFilterId] = useState<SpecialtyFilterId>('all')
  const [contactAgent, setContactAgent] = useState<DirectoryAgent | null>(null)
  const [agentsExpanded, setAgentsExpanded] = useState(false)
  const [showMoreLoading, setShowMoreLoading] = useState(false)
  const previewLimit = useAgentPreviewLimit()

  const filtered = useMemo(() => {
    return directoryAgents.filter((a) => {
      const bySearch = agentMatchesSearch(a, search)
      const bySpec =
        filterId === 'all' || a.filterIds.includes(filterId as Exclude<SpecialtyFilterId, 'all'>)
      return bySearch && bySpec
    })
  }, [search, filterId])

  function resetExpanded() {
    setAgentsExpanded(false)
    setShowMoreLoading(false)
  }

  function handleSearchChange(value: string) {
    setSearch(value)
    resetExpanded()
  }

  function handleFilterChange(next: SpecialtyFilterId) {
    setFilterId(next)
    resetExpanded()
  }

  const visibleAgents = useMemo(() => {
    if (agentsExpanded || filtered.length <= previewLimit) return filtered
    return filtered.slice(0, previewLimit)
  }, [filtered, agentsExpanded, previewLimit])

  const hasMoreAgents = filtered.length > previewLimit

  function handleShowMore() {
    setShowMoreLoading(true)
    window.setTimeout(() => {
      setAgentsExpanded(true)
      setShowMoreLoading(false)
    }, 700)
  }

  return (
    <>
      <AgentContactDialog
        key={contactAgent?.id ?? 'closed'}
        agent={contactAgent}
        open={contactAgent !== null}
        onOpenChange={(next) => {
          if (!next) setContactAgent(null)
        }}
      />

      <AgentsDirectoryToolbar
        search={search}
        onSearchChange={handleSearchChange}
        filterId={filterId}
        onFilterChange={handleFilterChange}
      />

      <section id="agents" className="bg-[#FAFAF8] py-20 dark:bg-charcoal-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AgentsDirectoryHeader resultCount={filtered.length} />

          {filtered.length === 0 ? (
            <AgentsDirectoryEmptyState />
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visibleAgents.map((agent) => (
                  <DirectoryAgentCard
                    key={agent.id}
                    agent={agent}
                    onContact={() => setContactAgent(agent)}
                  />
                ))}
              </div>

              {hasMoreAgents && !agentsExpanded ? (
                <AgentsDirectoryShowMoreButton loading={showMoreLoading} onClick={handleShowMore} />
              ) : null}
            </>
          )}
        </div>
      </section>
    </>
  )
}
