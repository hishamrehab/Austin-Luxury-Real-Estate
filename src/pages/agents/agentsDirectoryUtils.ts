import type { DirectoryAgent } from '@/pages/agents/agentsData'

export function agentMatchesSearch(agent: DirectoryAgent, q: string) {
  if (!q.trim()) return true
  const needle = q.trim().toLowerCase()
  const hay = [agent.name, agent.role, agent.bio, ...agent.specialties].join(' ').toLowerCase()
  return hay.includes(needle)
}

/** Matches `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` — two full rows. */
export function agentPreviewLimitForWidth(width: number) {
  if (width < 768) return 2
  if (width < 1024) return 4
  if (width < 1280) return 6
  return 8
}
