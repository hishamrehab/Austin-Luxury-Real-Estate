import { Link } from 'react-router-dom'

import { ABOUT_FINAL_CTA_IMAGE } from '@/pages/about/aboutData'

export function AboutFinalCtaSection() {
  return (
    <section className="relative overflow-hidden px-6 py-32 lg:px-8">
      <div className="absolute inset-0">
        <img
          alt="Infinity pool overlooking Austin Hill Country at twilight"
          className="h-full w-full object-cover object-top"
          src={ABOUT_FINAL_CTA_IMAGE}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2
          className="mb-6 font-serif text-5xl leading-tight font-semibold text-white"
          style={{ textShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 16px' }}
        >
          Ready to Experience Austin&apos;s Finest?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/85">
          Let our team of 20 expert agents guide you to the perfect luxury property in Austin&apos;s
          most coveted neighborhoods.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/listings"
            className="cursor-pointer rounded-full bg-white px-8 py-4 text-base font-medium whitespace-nowrap text-charcoal-950 transition-all hover:bg-white/90"
          >
            Browse Listings
          </Link>
          <Link
            to="/sell"
            className="cursor-pointer rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-medium whitespace-nowrap text-white transition-all hover:bg-white/10"
          >
            Get a Home Valuation
          </Link>
        </div>
      </div>
    </section>
  )
}
