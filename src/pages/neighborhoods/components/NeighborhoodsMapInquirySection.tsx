import { useState } from 'react'
import { motion } from 'motion/react'

import { FadeInSection } from '@/components/motion'
import {
  AUSTIN_MAP_EMBED_SRC,
  neighborhoodInquiryOptions,
} from '@/pages/neighborhoods/neighborhoodsData'

const inputClass =
  'h-12 w-full rounded-xl border border-charcoal-200 bg-white px-4 text-sm text-charcoal-900 placeholder:text-charcoal-400 transition-colors focus:border-sage-500 focus:outline-none dark:border-charcoal-600 dark:bg-charcoal-900 dark:text-zinc-100 dark:placeholder:text-charcoal-500 dark:focus:border-sage-400'

const selectClass =
  'h-12 w-full cursor-pointer rounded-xl border border-charcoal-200 bg-white px-4 text-sm text-charcoal-900 transition-colors focus:border-sage-500 focus:outline-none dark:border-charcoal-600 dark:bg-charcoal-900 dark:text-zinc-100 dark:focus:border-sage-400'

const labelClass =
  'mb-1.5 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300'

export function NeighborhoodsMapInquirySection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-[#F5F3EF] px-6 py-24 lg:px-8 dark:bg-charcoal-900/30">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <FadeInSection>
            <h2 className="mb-2 font-serif text-3xl font-semibold text-charcoal-950 dark:text-zinc-50">
              Explore the Map
            </h2>
            <p className="mb-6 text-base text-charcoal-500 dark:text-charcoal-400">
              See where Austin&apos;s premier neighborhoods are located
            </p>
            <div className="h-[480px] w-full overflow-hidden rounded-2xl shadow-lg">
              <iframe
                title="Austin Neighborhoods Map"
                src={AUSTIN_MAP_EMBED_SRC}
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={0.08}>
            <h2 className="mb-2 font-serif text-3xl font-semibold text-charcoal-950 dark:text-zinc-50">
              Find Your Perfect Neighborhood
            </h2>
            <p className="mb-6 text-base text-charcoal-500 dark:text-charcoal-400">
              Tell us about your lifestyle and we&apos;ll match you with the ideal community
            </p>
            <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-charcoal-900 dark:shadow-none">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <p className="font-serif text-xl font-semibold text-charcoal-950 dark:text-zinc-50">
                    Thank you
                  </p>
                  <p className="mt-2 text-sm text-charcoal-600 dark:text-charcoal-300">
                    We&apos;ll send your neighborhood guide and follow up shortly.
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="nh-first" className={labelClass}>
                        First Name
                      </label>
                      <input
                        id="nh-first"
                        name="first_name"
                        type="text"
                        required
                        placeholder="John"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="nh-last" className={labelClass}>
                        Last Name
                      </label>
                      <input
                        id="nh-last"
                        name="last_name"
                        type="text"
                        required
                        placeholder="Smith"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="nh-email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="nh-email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="nh-phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="nh-phone"
                      name="phone"
                      type="tel"
                      placeholder="(512) 555-0100"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="nh-area" className={labelClass}>
                      Interested Neighborhoods
                    </label>
                    <select
                      id="nh-area"
                      name="neighborhood_interest"
                      className={selectClass}
                      defaultValue="Any"
                    >
                      {neighborhoodInquiryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt === 'Any' ? 'Any Neighborhood' : opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="nh-msg" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="nh-msg"
                      name="message"
                      maxLength={500}
                      rows={4}
                      placeholder="Tell us about your ideal neighborhood and lifestyle preferences..."
                      className={`${inputClass} min-h-[104px] resize-none py-3`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-12 w-full cursor-pointer rounded-xl bg-sage-500 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-sage-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Get Neighborhood Guide
                  </button>
                </form>
              )}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
