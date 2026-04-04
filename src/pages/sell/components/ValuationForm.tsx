import { useState } from 'react'
import { motion } from 'motion/react'

const inputClass =
  'h-12 w-full rounded-xl border border-charcoal-200 bg-[#FAFAF8] px-4 text-sm text-charcoal-950 placeholder:text-charcoal-400 transition-colors focus:border-sage-500 focus:outline-none dark:border-charcoal-600 dark:bg-charcoal-900 dark:text-zinc-100 dark:placeholder:text-charcoal-500 dark:focus:border-sage-400'

const selectClass =
  'h-12 w-full cursor-pointer rounded-xl border border-charcoal-200 bg-[#FAFAF8] px-4 text-sm text-charcoal-950 transition-colors focus:border-sage-500 focus:outline-none dark:border-charcoal-600 dark:bg-charcoal-900 dark:text-zinc-100 dark:focus:border-sage-400'

export function ValuationForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-sage-200 bg-sage-50/80 p-8 text-center dark:border-sage-800 dark:bg-sage-950/30"
      >
        <p className="font-serif text-xl font-semibold text-charcoal-950 dark:text-zinc-50">
          Thank you
        </p>
        <p className="mt-2 text-sm text-charcoal-600 dark:text-charcoal-300">
          We&apos;ll prepare your personalized market analysis and reach out within 48 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="sell-address"
          className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
        >
          Property Address
        </label>
        <input
          id="sell-address"
          name="address"
          type="text"
          required
          placeholder="123 Main Street"
          className={inputClass}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="sell-city"
            className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
          >
            City
          </label>
          <input
            id="sell-city"
            name="city"
            type="text"
            required
            placeholder="Austin"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="sell-sqft"
            className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
          >
            Square Feet
          </label>
          <input
            id="sell-sqft"
            name="squareFeet"
            type="text"
            required
            placeholder="4,500"
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="sell-beds"
            className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
          >
            Bedrooms
          </label>
          <select id="sell-beds" name="bedrooms" required className={selectClass} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6+">6+</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="sell-baths"
            className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-charcoal-300"
          >
            Bathrooms
          </label>
          <select id="sell-baths" name="bathrooms" required className={selectClass} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6+">6+</option>
          </select>
        </div>
      </div>
      <div className="border-t border-charcoal-100 pt-4 dark:border-charcoal-800">
        <p className="mb-4 text-sm font-medium text-charcoal-700 dark:text-charcoal-300">
          Your Contact Information
        </p>
        <div className="space-y-4">
          <input name="name" type="text" required placeholder="Full Name" className={inputClass} />
          <div className="grid grid-cols-2 gap-4">
            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className={inputClass}
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              className={inputClass}
            />
          </div>
        </div>
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="h-14 w-full cursor-pointer rounded-full bg-sage-500 text-base font-medium whitespace-nowrap text-white transition-colors hover:bg-sage-600 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-sage-600 dark:hover:bg-sage-500"
      >
        Get My Free Valuation
      </motion.button>
    </form>
  )
}
