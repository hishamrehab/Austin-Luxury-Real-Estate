/** Stable listing photography (Unsplash). Avoids readdy.ai search-image URLs that often 404 or return empty. */
export const LISTING_EXTERIOR_IMAGES: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
  '2': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
  '3': 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85',
  '4': 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1600&q=85',
  '5': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
  '6': 'https://images.unsplash.com/photo-1600566753190-17f0baa2e6a3?auto=format&fit=crop&w=1600&q=85',
}

const INTERIOR_ROTATION = [
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85',
] as const

export const LISTING_AGENT_HEADSHOTS = {
  sarah:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&h=256&q=85',
  marcus:
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&h=256&q=85',
  victoria:
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&h=256&q=85',
  isabella:
    'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=256&h=256&q=85',
  james:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&h=256&q=85',
  sophia:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&h=256&q=85',
} as const

export function buildListingGallery(base: { id: string; image?: string }): string[] {
  const primary =
    LISTING_EXTERIOR_IMAGES[base.id] ??
    base.image ??
    LISTING_EXTERIOR_IMAGES['1']
  const n = Math.max(0, Number.parseInt(base.id, 10) || 0)
  const offset = n % INTERIOR_ROTATION.length
  const rotated = [...INTERIOR_ROTATION.slice(offset), ...INTERIOR_ROTATION.slice(0, offset)]
  return [primary, rotated[0], rotated[1], rotated[2]]
}
