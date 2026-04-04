import { aboutStoryImages } from '@/pages/about/aboutData'

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

export function AboutStorySection() {
  return (
    <section id="our-story" className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-72 w-full overflow-hidden rounded-2xl">
                  <img
                    alt="Luxury Austin home exterior"
                    className="h-full w-full object-cover object-top"
                    src={aboutStoryImages.luxuryHome}
                  />
                </div>
                <div className="h-48 w-full overflow-hidden rounded-2xl">
                  <img
                    alt="Team meeting in modern office"
                    className="h-full w-full object-cover object-top"
                    src={aboutStoryImages.teamMeeting}
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-48 w-full overflow-hidden rounded-2xl">
                  <img
                    alt="Happy clients receiving keys"
                    className="h-full w-full object-cover object-top"
                    src={aboutStoryImages.happyClients}
                  />
                </div>
                <div className="h-72 w-full overflow-hidden rounded-2xl">
                  <img
                    alt="Austin skyline at sunset"
                    className="h-full w-full object-cover object-top"
                    src={aboutStoryImages.skyline}
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-2xl bg-sage-100 dark:bg-sage-900/40" />
          </div>

          <div>
            <SectionEyebrow>Our Story</SectionEyebrow>
            <h2 className="mb-8 font-serif text-5xl leading-tight font-semibold text-charcoal-950 dark:text-zinc-50">
              Where Heritage Meets Innovation
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-charcoal-600 dark:text-charcoal-300">
              <p>
                Founded in 2004 by <strong className="text-charcoal-950 dark:text-zinc-100">Victoria Sterling</strong>
                , Austin Luxury Realty was born from a simple belief: that buying or selling a luxury
                home should be an extraordinary experience, not just a transaction.
              </p>
              <p>
                What began as a boutique brokerage in Westlake Hills has grown into Austin&apos;s most
                trusted luxury real estate firm, with 20 expert agents who collectively bring over 150
                years of market expertise.
              </p>
              <p>
                We have guided over 1,200 families into their dream homes, facilitated more than $2.8
                billion in sales, and built a reputation that extends far beyond Austin&apos;s city
                limits. Our clients include Fortune 500 executives, international investors, and
                families seeking the finest properties in Central Texas.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-sage-400 pl-6 dark:border-sage-500">
              <p className="font-serif text-xl leading-relaxed text-charcoal-700 italic dark:text-charcoal-200">
                &ldquo;We don&apos;t just sell homes. We help people write the next chapter of their
                lives.&rdquo;
              </p>
              <cite className="mt-3 block text-sm font-medium not-italic text-sage-600 dark:text-sage-400">
                — Victoria Sterling, Founder &amp; Principal Broker
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
