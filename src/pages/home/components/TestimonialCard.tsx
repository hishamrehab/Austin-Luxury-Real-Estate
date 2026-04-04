import type { Testimonial } from '@/pages/home/data'

import { StarRating } from './StarRating'

type TestimonialCardProps = {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial: t }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-transparent bg-white p-9 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-charcoal-800 dark:bg-charcoal-950/80 dark:shadow-black/20">
      <StarRating />
      <h4 className="mb-4 font-serif text-xl font-semibold text-charcoal-950 dark:text-zinc-50">
        {t.title}
      </h4>
      <p className="mb-8 text-base leading-relaxed text-charcoal-600 dark:text-zinc-400">{t.body}</p>
      <div className="flex items-center gap-4 border-t border-charcoal-100 pt-6 dark:border-charcoal-800">
        <img alt={t.author} className="size-14 rounded-full object-cover" src={t.avatar} />
        <div>
          <p className="font-semibold text-charcoal-950 dark:text-zinc-50">{t.author}</p>
          <p className="text-sm text-charcoal-500 dark:text-zinc-500">{t.location}</p>
        </div>
      </div>
    </div>
  )
}
