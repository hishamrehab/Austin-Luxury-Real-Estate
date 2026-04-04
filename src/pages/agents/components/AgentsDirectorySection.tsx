import { useEffect, useMemo, useState } from 'react'
import { Loader2, Mail, Phone, Search, Star } from 'lucide-react'

import { cn } from '@/lib/utils'
import { AgentContactDialog } from '@/pages/agents/components/AgentContactDialog'
import {
  directoryAgents,
  specialtyFilters,
  type DirectoryAgent,
  type SpecialtyFilterId,
} from '@/pages/agents/agentsData'

function agentMatchesSearch(agent: DirectoryAgent, q: string) {
  if (!q.trim()) return true
  const needle = q.trim().toLowerCase()
  const hay = [
    agent.name,
    agent.role,
    agent.bio,
    ...agent.specialties,
  ]
    .join(' ')
    .toLowerCase()
  return hay.includes(needle)
}

/** Matches `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` — two full rows. */
function agentPreviewLimitForWidth(width: number) {
  if (width < 768) return 2
  if (width < 1024) return 4
  if (width < 1280) return 6
  return 8
}

function useAgentPreviewLimit() {
  const [limit, setLimit] = useState(() =>
    typeof window !== 'undefined' ? agentPreviewLimitForWidth(window.innerWidth) : 8,
  )

  useEffect(() => {
    const onResize = () => setLimit(agentPreviewLimitForWidth(window.innerWidth))
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return limit
}

function AgentCard({ agent, onContact }: { agent: DirectoryAgent; onContact: () => void }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10">
      <div className="relative h-80 overflow-hidden">
        <img
          alt={agent.name}
          className="h-full w-full scale-100 object-cover object-top transition-transform duration-700 group-hover:scale-105"
          src={agent.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute right-0 bottom-0 left-0 p-6">
            <p className="mb-4 text-sm leading-relaxed text-white/90">{agent.bio}</p>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${agent.phone.replace(/\D/g, '')}`}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label={`Call ${agent.name}`}
              >
                <Phone className="size-5" />
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label={`Email ${agent.name}`}
              >
                <Mail className="size-5" />
              </a>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onContact()
                }}
                className="flex h-10 flex-1 cursor-pointer items-center justify-center rounded-full bg-sage-500 text-sm font-medium text-white transition-colors hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
              >
                Contact Agent
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 backdrop-blur-sm dark:bg-charcoal-900/95">
          <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden />
          <span className="text-sm font-medium text-charcoal-900 dark:text-zinc-100">
            {agent.rating}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-1 font-serif text-xl text-charcoal-950 dark:text-zinc-50">{agent.name}</h3>
        <p className="mb-4 text-sm font-medium text-sage-600 dark:text-sage-400">{agent.role}</p>
        <div className="mb-5 flex flex-wrap gap-2">
          {agent.specialties.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-charcoal-50 px-3 py-1 text-xs font-medium text-charcoal-600 dark:bg-charcoal-800 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-charcoal-100 pt-5 dark:border-charcoal-800">
          <div className="text-center">
            <p className="font-serif text-lg text-charcoal-950 dark:text-zinc-50">
              {agent.activeListings}
            </p>
            <p className="text-xs text-charcoal-500 dark:text-zinc-500">Active Listings</p>
          </div>
          <div className="h-10 w-px bg-charcoal-100 dark:bg-charcoal-800" />
          <div className="text-center">
            <p className="font-serif text-lg text-charcoal-950 dark:text-zinc-50">
              {agent.propertiesSold}
            </p>
            <p className="text-xs text-charcoal-500 dark:text-zinc-500">Properties Sold</p>
          </div>
          <div className="h-10 w-px bg-charcoal-100 dark:bg-charcoal-800" />
          <div className="text-center">
            <p className="font-serif text-lg text-charcoal-950 dark:text-zinc-50">
              {agent.salesVolume}
            </p>
            <p className="text-xs text-charcoal-500 dark:text-zinc-500">Sales Volume</p>
          </div>
        </div>
      </div>
    </div>
  )
}

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

  useEffect(() => {
    setAgentsExpanded(false)
    setShowMoreLoading(false)
  }, [search, filterId])

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
      <div className="sticky top-20 z-40 border-b border-charcoal-100 bg-white dark:border-charcoal-800 dark:bg-charcoal-950">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="relative w-full md:w-80">
              <Search
                className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-charcoal-400"
                aria-hidden
              />
              <input
                type="search"
                placeholder="Search by name or specialty..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-12 w-full rounded-xl border-0 bg-charcoal-50 py-2 pr-4 pl-12 text-sm text-charcoal-900 placeholder-charcoal-400 transition-all focus:ring-2 focus:ring-sage-500/20 focus:outline-none dark:bg-charcoal-900 dark:text-zinc-100 dark:placeholder-zinc-500"
                aria-label="Search agents"
              />
            </div>
            <div className="scrollbar-hide flex w-full items-center gap-2 overflow-x-auto pb-2 md:w-auto md:pb-0">
              {specialtyFilters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilterId(f.id)}
                  className={cn(
                    'cursor-pointer rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all',
                    filterId === f.id
                      ? 'bg-charcoal-950 text-white dark:bg-zinc-100 dark:text-charcoal-950'
                      : 'bg-charcoal-50 text-charcoal-600 hover:bg-charcoal-100 dark:bg-charcoal-900 dark:text-zinc-300 dark:hover:bg-charcoal-800',
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section id="agents" className="bg-[#FAFAF8] py-20 dark:bg-charcoal-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl text-charcoal-950 md:text-4xl dark:text-zinc-50">
              All Agents
            </h2>
            <p className="mx-auto max-w-2xl text-charcoal-600 dark:text-zinc-400">
              {filtered.length} agent{filtered.length === 1 ? '' : 's'} ready to help you find your
              perfect luxury home
            </p>
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-charcoal-600 dark:text-zinc-400">
              No agents match your search. Try another specialty or clear the search.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visibleAgents.map((agent) => (
                  <AgentCard
                    key={agent.id}
                    agent={agent}
                    onContact={() => setContactAgent(agent)}
                  />
                ))}
              </div>

              {hasMoreAgents && !agentsExpanded ? (
                <div className="mt-10 flex justify-center">
                  <button
                    type="button"
                    disabled={showMoreLoading}
                    aria-busy={showMoreLoading}
                    onClick={handleShowMore}
                    className="inline-flex min-w-[11rem] cursor-pointer items-center justify-center gap-2 rounded-full border border-charcoal-200 bg-white px-8 py-3 text-sm font-medium text-charcoal-950 transition-colors hover:bg-charcoal-50 disabled:cursor-not-allowed disabled:opacity-70 dark:border-charcoal-700 dark:bg-charcoal-900 dark:text-zinc-100 dark:hover:bg-charcoal-800"
                  >
                    {showMoreLoading ? (
                      <>
                        <Loader2 className="size-5 shrink-0 animate-spin text-sage-600 dark:text-sage-400" aria-hidden />
                        <span>Loading…</span>
                      </>
                    ) : (
                      'Show more'
                    )}
                  </button>
                </div>
              ) : null}
            </>
          )}
        </div>
      </section>
    </>
  )
}
