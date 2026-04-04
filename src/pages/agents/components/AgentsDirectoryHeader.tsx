type AgentsDirectoryHeaderProps = {
  resultCount: number
}

export function AgentsDirectoryHeader({ resultCount }: AgentsDirectoryHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="mb-4 font-serif text-3xl text-charcoal-950 md:text-4xl dark:text-zinc-50">
        All Agents
      </h2>
      <p className="mx-auto max-w-2xl text-charcoal-600 dark:text-zinc-400">
        {resultCount} agent{resultCount === 1 ? '' : 's'} ready to help you find your perfect luxury
        home
      </p>
    </div>
  )
}
