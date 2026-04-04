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
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <AgentsDirectorySearchField value={search} onChange={onSearchChange} />
          <AgentsDirectorySpecialtyFilters value={filterId} onChange={onFilterChange} />
        </div>
      </div>
    </div>
  )
}
