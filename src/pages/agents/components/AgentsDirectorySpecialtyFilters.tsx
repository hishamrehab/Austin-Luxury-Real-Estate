import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { specialtyFilters, type SpecialtyFilterId } from '@/pages/agents/agentsData'

type AgentsDirectorySpecialtyFiltersProps = {
  value: SpecialtyFilterId
  onChange: (next: SpecialtyFilterId) => void
}

export function AgentsDirectorySpecialtyFilters({
  value,
  onChange,
}: AgentsDirectorySpecialtyFiltersProps) {
  return (
    <div className="min-w-0 flex-1">
      <label htmlFor="agents-specialty-mobile" className="sr-only">
        Filter by specialty
      </label>
      <div className="relative md:hidden">
        <select
          id="agents-specialty-mobile"
          value={value}
          onChange={(e) => onChange(e.target.value as SpecialtyFilterId)}
          className="h-11 w-full cursor-pointer appearance-none rounded-full bg-white py-2 pr-11 pl-4 text-sm text-charcoal-950 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-charcoal-950/[0.06] transition-[box-shadow,ring-color] focus:ring-2 focus:ring-sage-500/35 focus:outline-none dark:bg-charcoal-900 dark:text-zinc-100 dark:ring-white/[0.08] dark:focus:ring-sage-400/35"
        >
          {specialtyFilters.map((f) => (
            <option key={f.id} value={f.id}>
              {f.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-charcoal-400 dark:text-charcoal-500"
          aria-hidden
        />
      </div>

      <div
        role="toolbar"
        aria-label="Filter by specialty"
        className="hidden flex-wrap justify-start gap-x-1 gap-y-2 md:flex"
      >
        {specialtyFilters.map((f) => {
          const active = value === f.id
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onChange(f.id)}
              aria-pressed={active}
              className={cn(
                'cursor-pointer rounded-full px-3.5 py-2 text-sm transition-colors sm:px-4',
                active
                  ? 'bg-sage-600 font-medium text-white dark:bg-sage-500'
                  : 'text-charcoal-500 hover:bg-white hover:text-charcoal-900 dark:text-charcoal-400 dark:hover:bg-charcoal-800/80 dark:hover:text-zinc-100',
              )}
            >
              {f.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
