import { Building2, ExternalLink } from 'lucide-react'

import { CONTACT_MAP_EMBED_SRC, officeLocations } from '@/pages/contact/contactData'

const hq = officeLocations[0]

export function ContactMapSection() {
  const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(hq.mapsQuery)}`

  return (
    <section className="bg-stone-50 py-16 dark:bg-charcoal-900/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-serif text-3xl font-semibold text-charcoal-950 dark:text-zinc-50">
            Find Us on the Map
          </h2>
          <p className="text-charcoal-600 dark:text-charcoal-300">
            Our headquarters is located in the heart of downtown Austin
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src={CONTACT_MAP_EMBED_SRC}
            width="100%"
            height={480}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Austin Luxury Realty downtown location"
            className="w-full border-0"
          />
          <div className="absolute top-6 left-6 hidden max-w-xs rounded-xl bg-white p-5 shadow-xl md:block dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-500">
                <Building2 className="size-5 text-white" aria-hidden />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-950 dark:text-zinc-50">Headquarters</h4>
                <p className="text-xs text-charcoal-500 dark:text-charcoal-400">Downtown Austin</p>
              </div>
            </div>
            <p className="mb-3 text-sm text-charcoal-700 dark:text-charcoal-300">
              {hq.addressLines[0]}
              <br />
              {hq.addressLines[1]}
            </p>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-sage-500 transition-colors hover:text-sage-600 dark:text-sage-400 dark:hover:text-sage-300"
            >
              Open in Google Maps
              <ExternalLink className="size-4 shrink-0" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
