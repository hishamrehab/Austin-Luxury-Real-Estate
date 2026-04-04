import { FadeInSection } from '@/components/motion'
import { testimonials } from '@/pages/home/data'
import { TestimonialCard } from './TestimonialCard'

export function TestimonialsSection() {
  return (
    <section className="bg-[#F5F3EF] px-6 py-36 dark:bg-charcoal-900/40 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="size-2 rounded-full bg-sage-500 dark:bg-sage-400" />
            <p className="text-sm font-medium tracking-wider text-sage-600 uppercase dark:text-sage-400">
              Client Stories
            </p>
          </div>
          <h3 className="mb-4 font-serif text-4xl font-semibold text-charcoal-950 sm:text-5xl dark:text-zinc-50">
            Trusted by Austin&apos;s Finest
          </h3>
          <p className="text-lg text-charcoal-600 dark:text-zinc-400">
            Over 500 successful transactions in 2024
          </p>
        </FadeInSection>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeInSection key={t.author} delay={i * 0.08}>
              <TestimonialCard testimonial={t} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
