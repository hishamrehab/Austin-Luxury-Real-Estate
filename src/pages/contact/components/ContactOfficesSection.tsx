import { ArrowUpRight, Mail, MapPin, Phone, Clock } from 'lucide-react'

import { officeLocations } from '@/pages/contact/contactData'

export function ContactOfficesSection() {
  return (
    <section className="bg-white py-24 dark:bg-charcoal-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-medium tracking-widest text-sage-500 uppercase">
            Visit Us
          </span>
          <h2 className="mb-4 font-serif text-4xl font-semibold text-charcoal-950 md:text-5xl dark:text-zinc-50">
            Our Office Locations
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-charcoal-600 dark:text-charcoal-300">
            Stop by any of our three convenient locations across the Austin metro area
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {officeLocations.map((office) => (
            <article
              key={office.id}
              className="group overflow-hidden rounded-2xl bg-stone-50 transition-all duration-300 hover:-translate-y-2 dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={office.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  src={office.image}
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-charcoal-950 backdrop-blur-sm dark:bg-charcoal-950/90 dark:text-zinc-50">
                    {office.badge}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-4 font-serif text-xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  {office.name}
                </h3>
                <div className="mb-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-sage-500" aria-hidden />
                    <div>
                      <p className="text-sm text-charcoal-700 dark:text-charcoal-300">
                        {office.addressLines[0]}
                      </p>
                      <p className="text-sm text-charcoal-700 dark:text-charcoal-300">
                        {office.addressLines[1]}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="size-4 shrink-0 text-sage-500" aria-hidden />
                    <a
                      href={`tel:${office.phoneTel}`}
                      className="text-sm text-charcoal-700 transition-colors hover:text-sage-500 dark:text-charcoal-300 dark:hover:text-sage-400"
                    >
                      {office.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="size-4 shrink-0 text-sage-500" aria-hidden />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-sm text-charcoal-700 transition-colors hover:text-sage-500 dark:text-charcoal-300 dark:hover:text-sage-400"
                    >
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-sage-500" aria-hidden />
                    <div>
                      <p className="text-sm text-charcoal-700 dark:text-charcoal-300">
                        {office.hours.line1}
                      </p>
                      <p className="text-sm text-charcoal-500 dark:text-charcoal-400">
                        {office.hours.line2}
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(office.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-sage-500 transition-colors hover:text-sage-600 dark:text-sage-400 dark:hover:text-sage-300"
                >
                  Get Directions
                  <ArrowUpRight className="size-4 shrink-0" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
