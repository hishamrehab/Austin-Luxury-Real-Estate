import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import { neighborhoodGridEntries } from '@/pages/neighborhoods/neighborhoodsData'

const STORAGE_KEY = 'austin-luxury-loved-neighborhood-ids'
const VALID_NEIGHBORHOOD_IDS = new Set(neighborhoodGridEntries.map((e) => e.id))

type LovedNeighborhoodsContextValue = {
  lovedIds: readonly string[]
  count: number
  isLoved: (id: string) => boolean
  toggleLoved: (id: string) => void
  removeLoved: (id: string) => void
  clearLoved: () => void
}

const LovedNeighborhoodsContext = createContext<LovedNeighborhoodsContextValue | null>(null)

function readStoredIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((x): x is string => typeof x === 'string')
  } catch {
    return []
  }
}

export function LovedNeighborhoodsProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>(() => readStoredIds().filter((id) => VALID_NEIGHBORHOOD_IDS.has(id)))

  useEffect(() => {
    setIds((prev) => {
      const next = prev.filter((id) => VALID_NEIGHBORHOOD_IDS.has(id))
      return next.length === prev.length ? prev : next
    })
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  }, [ids])

  const toggleLoved = useCallback((id: string) => {
    setIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [id, ...prev.filter((x) => x !== id)],
    )
  }, [])

  const removeLoved = useCallback((id: string) => {
    setIds((prev) => prev.filter((x) => x !== id))
  }, [])

  const clearLoved = useCallback(() => {
    setIds([])
  }, [])

  const isLoved = useCallback((id: string) => ids.includes(id), [ids])

  const value = useMemo(
    () => ({
      lovedIds: ids,
      count: ids.length,
      isLoved,
      toggleLoved,
      removeLoved,
      clearLoved,
    }),
    [ids, isLoved, toggleLoved, removeLoved, clearLoved],
  )

  return (
    <LovedNeighborhoodsContext.Provider value={value}>{children}</LovedNeighborhoodsContext.Provider>
  )
}

export function useLovedNeighborhoods() {
  const ctx = useContext(LovedNeighborhoodsContext)
  if (!ctx) {
    throw new Error('useLovedNeighborhoods must be used within LovedNeighborhoodsProvider')
  }
  return ctx
}
