const q = 'auto=format&fit=crop&w=2400&q=90'

/** Stable listing photography (Unsplash). Avoids readdy.ai search-image URLs that often 404 or return empty. */
export const LISTING_EXTERIOR_IMAGES: Record<string, string> = {
  '1': `https://images.unsplash.com/photo-1613490493576-7fde63acd811?${q}`,
  '2': `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?${q}`,
  '3': `https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?${q}`,
  '4': `https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?${q}`,
  '5': `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?${q}`,
  '6': `https://images.unsplash.com/photo-1564013799919-ab600027ffc6?${q}`,
  '7': `https://images.unsplash.com/photo-1600585154526-990dced4db0d?${q}`,
  '8': `https://images.unsplash.com/photo-1600566753083-00f18fb6b3ea?${q}`,
  '9': `https://images.unsplash.com/photo-1600573472550-8090b5e0745e?${q}`,
  '10': `https://images.unsplash.com/photo-1600047509358-9dc75507daeb?${q}`,
  '11': `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?${q}`,
  '12': `https://images.unsplash.com/photo-1600607687644-c7171b42498f?${q}`,
}

/** Card / gallery fallback when a URL fails to load. */
export const LISTING_IMAGE_FALLBACK = LISTING_EXTERIOR_IMAGES['1']

const INTERIOR_ROTATION = [
  `https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?${q}`,
  `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?${q}`,
  `https://images.unsplash.com/photo-1616594039964-ae9021a400a0?${q}`,
  `https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?${q}`,
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
    LISTING_IMAGE_FALLBACK
  const n = Math.max(0, Number.parseInt(base.id, 10) || 0)
  const offset = n % INTERIOR_ROTATION.length
  const rotated = [...INTERIOR_ROTATION.slice(offset), ...INTERIOR_ROTATION.slice(0, offset)]
  return [primary, rotated[0], rotated[1], rotated[2]]
}
