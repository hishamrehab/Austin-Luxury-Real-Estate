import { AgentsDirectorySearchField } from '@/pages/agents/components/AgentsDirectorySearchField'
import { AgentsDirectorySpecialtyFilters } from '@/pages/agents/components/AgentsDirectorySpecialtyFilters'
import type { SpecialtyFilterId } from '@/pages/agents/agentsData'

type AgentsDirectoryToolbarProps = {
  search: string
  onSearchChange: (value: string) => void
  filterId: SpecialtyFilterId
  onFilterChange: (next: SpecialtyFilterId) => void
}

export function AgentsDirectoryToolbar({
  search,
  onSearchChange,
  filterId,
  onFilterChange,
}: AgentsDirectoryToolbarProps) {
  return (
    <div className="border-b border-charcoal-200/50 bg-[#FAFAF8] dark:border-charcoal-800 dark:bg-charcoal-950">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-9 lg:px-8">
        <div className="rounded-2xl bg-white/95 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-sm dark:bg-charcoal-900/70 dark:shadow-[0_8px_40px_rgba(0,0,0,0.35)] sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-0">
            <div className="lg:max-w-[min(100%,24rem)] lg:shrink-0 lg:pr-8">
              <AgentsDirectorySearchField value={search} onChange={onSearchChange} />
            </div>
            <div
              className="hidden w-px shrink-0 self-stretch bg-gradient-to-b from-transparent via-charcoal-200/70 to-transparent lg:block dark:via-charcoal-600/60"
              aria-hidden
            />
            <div className="min-h-0 min-w-0 flex-1 lg:pl-8">
              <AgentsDirectorySpecialtyFilters value={filterId} onChange={onFilterChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
