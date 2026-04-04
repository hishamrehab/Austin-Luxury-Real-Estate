/**
 * High-resolution neighborhood imagery (Unsplash, w=2400).
 * Hero and gallery extras use disjoint photo sets so nothing repeats or 404s in a slot.
 */
const q = 'auto=format&fit=crop&w=2400&q=90'

/** Primary hero per grid id — luxury exteriors / estates (large, sharp). */
export const NEIGHBORHOOD_HERO_IMAGES: Record<string, string> = {
  '1': `https://images.unsplash.com/photo-1613490493576-7fde63acd811?${q}`,
  '2': `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?${q}`,
  '3': `https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?${q}`,
  '4': `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?${q}`,
  '5': `https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?${q}`,
  '7': `https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?${q}`,
  '8': `https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?${q}`,
}

/** Interiors / lifestyle — only used as gallery slots 2–4 (not used as heroes above). */
const GALLERY_EXTRAS = [
  `https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?${q}`,
  `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?${q}`,
  `https://images.unsplash.com/photo-1616594039964-ae9021a400a0?${q}`,
  `https://images.unsplash.com/photo-1600566753190-17f0baa2e6a3?${q}`,
] as const

/** If any URL fails in the browser, swap to this (known-good, high res). */
export const NEIGHBORHOOD_IMAGE_FALLBACK = `https://images.unsplash.com/photo-1613490493576-7fde63acd811?${q}`

export function buildNeighborhoodGallery(id: string, fallbackImage: string): string[] {
  const primary = NEIGHBORHOOD_HERO_IMAGES[id] ?? fallbackImage
  const n = Math.max(0, Number.parseInt(id, 10) || 0)
  const offset = n % GALLERY_EXTRAS.length
  const rotated = [...GALLERY_EXTRAS.slice(offset), ...GALLERY_EXTRAS.slice(0, offset)]
  const extras = rotated.filter((url) => url !== primary).slice(0, 3)
  while (extras.length < 3) {
    extras.push(GALLERY_EXTRAS[extras.length % GALLERY_EXTRAS.length])
  }
  return [primary, extras[0], extras[1], extras[2]]
}
