import { useState } from 'react'
import { ArrowRight, ChevronDown, Clock, Mail, Phone } from 'lucide-react'
import { motion } from 'motion/react'

import {
  CONTACT_CONSULTATION_IMAGE,
  CONTACT_MAIN_EMAIL,
  CONTACT_MAIN_PHONE_DISPLAY,
  CONTACT_MAIN_PHONE_TEL,
} from '@/pages/contact/contactData'

const inputClass =
  'h-12 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 text-charcoal-950 placeholder:text-charcoal-400 transition-all focus:border-sage-500 focus:ring-1 focus:ring-sage-500 focus:outline-none dark:border-charcoal-600 dark:bg-charcoal-900 dark:text-zinc-100 dark:placeholder:text-charcoal-500 dark:focus:border-sage-400 dark:focus:ring-sage-400'

const selectTriggerClass =
  'h-12 w-full cursor-pointer appearance-none rounded-xl border border-stone-200 bg-stone-50 pr-10 pl-4 text-charcoal-950 transition-all focus:border-sage-500 focus:ring-1 focus:ring-sage-500 focus:outline-none dark:border-charcoal-600 dark:bg-charcoal-900 dark:text-zinc-100 dark:focus:border-sage-400 dark:focus:ring-sage-400'

function SelectField({
  id,
  name,
  required,
  defaultValue = '',
  children,
}: {
  id: string
  name: string
  required?: boolean
  defaultValue?: string
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className={selectTriggerClass}
      >
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-charcoal-400"
        aria-hidden
      />
    </div>
  )
}

export function ContactConsultationSection() {
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const maxLen = 500

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact-consultation" className="bg-stone-50 py-24 dark:bg-charcoal-900/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-4 block text-sm font-medium tracking-widest text-sage-500 uppercase">
              Contact Us
            </span>
            <h2 className="mb-6 font-serif text-4xl font-semibold text-charcoal-950 md:text-5xl dark:text-zinc-50">
              How Can We Help You?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-charcoal-600 dark:text-charcoal-300">
              Our dedicated team of luxury real estate experts is ready to assist you with
              personalized service tailored to your unique needs. Fill out the form and we&apos;ll be
              in touch within 2 hours.
            </p>

            <div className="mb-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage-100 dark:bg-sage-900/40">
                  <Phone className="size-5 text-sage-600 dark:text-sage-400" aria-hidden />
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-charcoal-950 dark:text-zinc-50">
                    Call Us Directly
                  </h4>
                  <a
                    href={`tel:${CONTACT_MAIN_PHONE_TEL}`}
                    className="text-charcoal-600 transition-colors hover:text-sage-500 dark:text-charcoal-300 dark:hover:text-sage-400"
                  >
                    {CONTACT_MAIN_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage-100 dark:bg-sage-900/40">
                  <Mail className="size-5 text-sage-600 dark:text-sage-400" aria-hidden />
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-charcoal-950 dark:text-zinc-50">Email Us</h4>
                  <a
                    href={`mailto:${CONTACT_MAIN_EMAIL}`}
                    className="text-charcoal-600 transition-colors hover:text-sage-500 dark:text-charcoal-300 dark:hover:text-sage-400"
                  >
                    {CONTACT_MAIN_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage-100 dark:bg-sage-900/40">
                  <Clock className="size-5 text-sage-600 dark:text-sage-400" aria-hidden />
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-charcoal-950 dark:text-zinc-50">
                    Office Hours
                  </h4>
                  <p className="text-charcoal-600 dark:text-charcoal-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-charcoal-600 dark:text-charcoal-300">Sat - Sun: By Appointment</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <img
                alt="Real estate consultation meeting in a modern office"
                className="h-72 w-full object-cover object-top"
                src={CONTACT_CONSULTATION_IMAGE}
              />
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-charcoal-950/5 md:p-10 dark:bg-charcoal-900 dark:shadow-black/20 dark:ring-1 dark:ring-white/10">
            <h3 className="mb-2 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
              Schedule a Consultation
            </h3>
            <p className="mb-8 text-charcoal-500 dark:text-charcoal-400">
              Tell us about your real estate goals
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
                  We&apos;ll respond within two hours during business hours.
                </p>
              </motion.div>
            ) : (
              <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-firstName"
                      className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
                    >
                      First Name *
                    </label>
                    <input
                      id="contact-firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="John"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-lastName"
                      className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
                    >
                      Last Name *
                    </label>
                    <input
                      id="contact-lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Smith"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="(512) 555-0000"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-interest"
                    className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
                  >
                    I&apos;m Interested In *
                  </label>
                  <SelectField id="contact-interest" name="interest" required>
                    <option value="">Select an option</option>
                    <option value="buying">Buying a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="both">Buying &amp; Selling</option>
                    <option value="valuation">Home Valuation</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="relocation">Relocation Services</option>
                    <option value="other">Other Inquiry</option>
                  </SelectField>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
                    >
                      Budget Range
                    </label>
                    <SelectField id="contact-budget" name="budget">
                      <option value="">Select budget</option>
                      <option value="1m-2m">$1M - $2M</option>
                      <option value="2m-3m">$2M - $3M</option>
                      <option value="3m-5m">$3M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="10m+">$10M+</option>
                    </SelectField>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-timeline"
                      className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
                    >
                      Timeline
                    </label>
                    <SelectField id="contact-timeline" name="timeline">
                      <option value="">Select timeline</option>
                      <option value="immediately">Immediately</option>
                      <option value="1-3months">1-3 Months</option>
                      <option value="3-6months">3-6 Months</option>
                      <option value="6-12months">6-12 Months</option>
                      <option value="exploring">Just Exploring</option>
                    </SelectField>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    maxLength={maxLen}
                    rows={4}
                    placeholder={"Tell us more about what you're looking for..."}
                    className={`${inputClass} min-h-[104px] resize-none py-3`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <p className="mt-1 text-right text-xs text-charcoal-400">
                    {message.length}/{maxLen} characters
                  </p>
                </div>
                <button
                  type="submit"
                  className="flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-sage-500 font-medium text-white transition-all hover:bg-sage-600 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-sage-600 dark:hover:bg-sage-500"
                >
                  Schedule Consultation
                  <ArrowRight className="size-5 shrink-0" aria-hidden />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
