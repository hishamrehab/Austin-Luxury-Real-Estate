import { HeartHandshake, Lightbulb, ShieldCheck, Star } from 'lucide-react'

import { aboutCoreValues } from '@/pages/about/aboutData'

const valueIcons = [ShieldCheck, Star, Lightbulb, HeartHandshake] as const

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

export function AboutValuesSection() {
  return (
    <section className="bg-[#F5F3EF] px-6 py-32 dark:bg-charcoal-900/50 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionEyebrow>What Drives Us</SectionEyebrow>
            <h2 className="font-serif text-5xl font-semibold text-charcoal-950 dark:text-zinc-50">
              Our Core Values
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-charcoal-600 dark:text-charcoal-300">
            These principles guide every decision we make and every relationship we build with our
            clients.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {aboutCoreValues.map((v, i) => {
            const Icon = valueIcons[i]
            return (
              <div
                key={v.title}
                className="group rounded-2xl bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:border dark:border-charcoal-800 dark:bg-charcoal-950"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-sage-50 transition-colors duration-300 group-hover:bg-sage-500 dark:bg-sage-950/50">
                  <Icon
                    className="size-6 text-sage-600 transition-colors duration-300 group-hover:text-white dark:text-sage-400"
                    aria-hidden
                  />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal-600 dark:text-charcoal-300">
                  {v.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
