import { useEffect, useState } from 'react'

import { agentPreviewLimitForWidth } from '@/pages/agents/agentsDirectoryUtils'

export function useAgentPreviewLimit() {
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
