import { useState } from 'react'
import { motion } from 'motion/react'

import { ABOUT_CONTACT_IMAGE } from '@/pages/about/aboutData'

const inputClass =
  'h-12 w-full rounded-lg border border-charcoal-200 bg-[#FAFAF8] px-4 text-sm text-charcoal-950 placeholder:text-charcoal-400 transition-colors focus:border-sage-500 focus:outline-none dark:border-charcoal-600 dark:bg-charcoal-900 dark:text-zinc-100 dark:placeholder:text-charcoal-500 dark:focus:border-sage-400'

const selectClass =
  'h-12 w-full cursor-pointer appearance-none rounded-lg border border-charcoal-200 bg-[#FAFAF8] px-4 text-sm text-charcoal-950 transition-colors focus:border-sage-500 focus:outline-none dark:border-charcoal-600 dark:bg-charcoal-900 dark:text-zinc-100 dark:focus:border-sage-400'

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="size-2 rounded-full bg-sage-500" />
      <p className="text-sm font-medium tracking-wider text-sage-600 uppercase dark:text-sage-400">
        {children}
      </p>
    </div>
  )
}

export function AboutContactSection() {
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const maxLen = 500

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="h-[520px] w-full overflow-hidden rounded-2xl">
              <img
                alt="Luxury Austin living room with hill country views"
                className="h-full w-full object-cover object-top"
                src={ABOUT_CONTACT_IMAGE}
              />
            </div>
            <div className="absolute -right-8 -bottom-8 max-w-xs rounded-2xl bg-sage-500 p-8 text-white shadow-xl">
              <p className="mb-1 font-serif text-3xl font-semibold">98%</p>
              <p className="text-sm text-white/80">
                Client satisfaction rate across 1,200+ transactions
              </p>
            </div>
          </div>

          <div>
            <SectionEyebrow>Get in Touch</SectionEyebrow>
            <h2 className="mb-4 font-serif text-4xl font-semibold text-charcoal-950 dark:text-zinc-50">
              Begin Your Luxury Journey
            </h2>
            <p className="mb-10 text-base leading-relaxed text-charcoal-600 dark:text-charcoal-300">
              Whether you are buying, selling, or simply exploring the Austin luxury market, our team
              is ready to help.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-sage-200 bg-sage-50/80 p-8 text-center dark:border-sage-800 dark:bg-sage-950/30"
              >
                <p className="font-serif text-xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  Thank you
                </p>
                <p className="mt-2 text-sm text-charcoal-600 dark:text-charcoal-300">
                  We&apos;ll be in touch shortly to discuss your goals.
                </p>
              </motion.div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="about-name"
                      className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
                    >
                      Full Name *
                    </label>
                    <input
                      id="about-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="about-email"
                      className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
                    >
                      Email *
                    </label>
                    <input
                      id="about-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="about-phone"
                      className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
                    >
                      Phone
                    </label>
                    <input
                      id="about-phone"
                      name="phone"
                      type="tel"
                      placeholder="(512) 555-0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="about-interest"
                      className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
                    >
                      I&apos;m Interested In
                    </label>
                    <select id="about-interest" name="interest" className={selectClass} defaultValue="Buying">
                      <option value="Buying">Buying</option>
                      <option value="Selling">Selling</option>
                      <option value="Both">Both</option>
                      <option value="Investment">Investment</option>
                      <option value="Relocation">Relocation</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="about-message"
                    className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
                  >
                    Message *
                  </label>
                  <textarea
                    id="about-message"
                    name="message"
                    required
                    maxLength={maxLen}
                    rows={4}
                    placeholder="Tell us about your real estate goals..."
                    className={`${inputClass} min-h-[104px] resize-none py-3`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <p className="mt-1 text-right text-xs text-charcoal-400">
                    {message.length}/{maxLen}
                  </p>
                </div>
                <button
                  type="submit"
                  className="h-12 w-full cursor-pointer rounded-lg bg-sage-500 text-sm font-medium text-white transition-colors hover:bg-sage-600 disabled:opacity-60 dark:bg-sage-600 dark:hover:bg-sage-500"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
