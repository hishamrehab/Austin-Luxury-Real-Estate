import { Search, X } from 'lucide-react'

type AgentsDirectorySearchFieldProps = {
  value: string
  onChange: (value: string) => void
}

export function AgentsDirectorySearchField({ value, onChange }: AgentsDirectorySearchFieldProps) {
  return (
    <div className="w-full lg:max-w-[min(100%,20rem)] lg:shrink-0">
      <label htmlFor="agents-directory-search" className="sr-only">
        Search agents by name or specialty
      </label>
      <div className="flex h-11 items-center gap-2 rounded-full bg-white pr-1 pl-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-charcoal-950/[0.06] transition-[box-shadow,ring-color] focus-within:shadow-[0_2px_8px_rgba(0,0,0,0.06)] focus-within:ring-sage-500/40 dark:bg-charcoal-900 dark:ring-white/[0.08] dark:focus-within:ring-sage-400/35 sm:h-12 sm:pl-4">
        <Search
          className="size-[18px] shrink-0 text-charcoal-400 dark:text-charcoal-500"
          aria-hidden
        />
        <input
          id="agents-directory-search"
          type="search"
          placeholder="Search agents…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
          className="min-h-0 min-w-0 flex-1 border-0 bg-transparent py-2 text-sm text-charcoal-950 placeholder:text-charcoal-400 focus:ring-0 dark:text-zinc-100 dark:placeholder:text-charcoal-500"
        />
        {value ? (
          <button
            type="button"
            onClick={() => onChange('')}
            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-charcoal-400 transition-colors hover:bg-charcoal-100 hover:text-charcoal-700 dark:hover:bg-charcoal-800 dark:hover:text-zinc-200"
            aria-label="Clear search"
          >
            <X className="size-4" strokeWidth={2} />
          </button>
        ) : null}
      </div>
    </div>
  )
}
