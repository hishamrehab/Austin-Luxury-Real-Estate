import { useCallback, useState } from 'react'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'

import { agentTestimonials, CLIENT_STORIES_IMAGE } from '@/pages/agents/agentsData'
import { cn } from '@/lib/utils'

export function AgentsTestimonialsSection() {
  const [index, setIndex] = useState(0)

  const go = useCallback((dir: -1 | 1) => {
    setIndex((i) => (i + dir + agentTestimonials.length) % agentTestimonials.length)
  }, [])

  const t = agentTestimonials[index]

  return (
    <section className="bg-[#FAFAF8] py-20 dark:bg-charcoal-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              alt="Luxury home at twilight"
              className="h-[500px] w-full rounded-2xl object-cover"
              src={CLIENT_STORIES_IMAGE}
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10">
              <div className="mb-2 flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-amber-400 text-amber-400"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="font-serif text-2xl text-charcoal-950 dark:text-zinc-50">500+</p>
              <p className="text-sm text-charcoal-500 dark:text-zinc-400">5-Star Reviews</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium tracking-widest text-sage-600 uppercase dark:text-sage-400">
              Client Stories
            </p>
            <h2 className="mb-10 font-serif text-3xl text-charcoal-950 md:text-4xl dark:text-zinc-50">
              What Our Clients Say
            </h2>

            <div className="relative">
              <Quote
                className="absolute -top-4 -left-2 size-16 text-sage-100 dark:text-sage-900/40"
                aria-hidden
              />
              <div className="relative z-10">
                <p className="mb-8 pl-8 text-xl leading-relaxed text-charcoal-700 dark:text-zinc-300">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4 pl-8">
                  <img
                    alt={t.author}
                    className="size-14 rounded-full object-cover"
                    src={t.avatar}
                  />
                  <div>
                    <p className="font-medium text-charcoal-950 dark:text-zinc-100">{t.author}</p>
                    <p className="text-sm text-charcoal-500 dark:text-zinc-500">{t.location}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-xs text-charcoal-400 dark:text-zinc-500">Represented by</p>
                    <p className="text-sm font-medium text-sage-600 dark:text-sage-400">
                      {t.agentName}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4 pl-8">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-charcoal-200 transition-colors hover:bg-charcoal-50 dark:border-charcoal-700 dark:hover:bg-charcoal-900"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="size-5 text-charcoal-600 dark:text-zinc-400" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-charcoal-200 transition-colors hover:bg-charcoal-50 dark:border-charcoal-700 dark:hover:bg-charcoal-900"
                aria-label="Next testimonial"
              >
                <ArrowRight className="size-5 text-charcoal-600 dark:text-zinc-400" />
              </button>
              <div className="ml-auto flex items-center gap-2">
                {agentTestimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={cn(
                      'h-2 cursor-pointer rounded-full transition-all',
                      i === index ? 'w-8 bg-sage-500' : 'w-2 bg-charcoal-200 dark:bg-charcoal-700',
                    )}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
