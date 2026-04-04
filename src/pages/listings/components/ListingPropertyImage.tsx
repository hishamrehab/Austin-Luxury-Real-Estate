import { useEffect, useState } from 'react'

import { LISTING_IMAGE_FALLBACK } from '@/pages/listings/listingImageUrls'

type ListingPropertyImageProps = {
  src: string
  alt: string
  className?: string
}

export function ListingPropertyImage({ src, alt, className }: ListingPropertyImageProps) {
  const [resolved, setResolved] = useState(src)

  useEffect(() => {
    setResolved(src)
  }, [src])

  return (
    <img
      alt={alt}
      src={resolved}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setResolved(LISTING_IMAGE_FALLBACK)}
    />
  )
}
