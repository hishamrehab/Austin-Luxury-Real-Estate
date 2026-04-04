import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import { featuredProperties } from '@/pages/home/data'

const STORAGE_KEY = 'austin-luxury-loved-listing-ids'
const VALID_LISTING_IDS = new Set(featuredProperties.map((p) => p.id))

type LovedListingsContextValue = {
  lovedIds: readonly string[]
  count: number
  isLoved: (id: string) => boolean
  toggleLoved: (id: string) => void
  removeLoved: (id: string) => void
  clearLoved: () => void
}

const LovedListingsContext = createContext<LovedListingsContextValue | null>(null)

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

export function LovedListingsProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>(() => readStoredIds().filter((id) => VALID_LISTING_IDS.has(id)))

  useEffect(() => {
    setIds((prev) => {
      const next = prev.filter((id) => VALID_LISTING_IDS.has(id))
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

  return <LovedListingsContext.Provider value={value}>{children}</LovedListingsContext.Provider>
}

export function useLovedListings() {
  const ctx = useContext(LovedListingsContext)
  if (!ctx) {
    throw new Error('useLovedListings must be used within LovedListingsProvider')
  }
  return ctx
}
