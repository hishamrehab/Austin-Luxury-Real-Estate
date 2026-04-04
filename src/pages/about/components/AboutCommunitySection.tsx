import { aboutCommunityInitiatives } from '@/pages/about/aboutData'

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 sm:mb-5">
      <div className="size-2 shrink-0 rounded-full bg-sage-600 dark:bg-sage-500" />
      <p className="text-xs font-semibold tracking-[0.2em] text-sage-800 uppercase sm:text-sm dark:text-sage-300">
        {children}
      </p>
    </div>
  )
}

export function AboutCommunitySection() {
  return (
    <section
      id="community"
      className="border-t border-charcoal-200/70 bg-gradient-to-b from-sage-50 to-[#eef3ee] px-5 py-20 dark:border-charcoal-800 dark:from-charcoal-950 dark:to-charcoal-950 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 max-w-3xl lg:mb-16 lg:max-w-none">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_min(100%,26rem)] lg:items-end lg:gap-16 xl:gap-20">
            <div className="min-w-0">
              <SectionEyebrow>Giving Back</SectionEyebrow>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-charcoal-950 sm:text-5xl lg:text-[2.75rem] lg:leading-[1.1] dark:text-zinc-50">
                Rooted in Community
              </h2>
            </div>
            <p className="text-base leading-relaxed text-charcoal-700 dark:text-charcoal-300 lg:pb-1 lg:text-[0.9375rem] lg:leading-relaxed">
              We believe in building more than homes. Our commitment to Austin extends beyond real
              estate into the heart of the community.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8">
          {aboutCommunityInitiatives.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal-200/90 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-sage-400/35 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] dark:border-charcoal-700 dark:bg-charcoal-900 dark:shadow-none dark:hover:border-sage-600/35 dark:hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]"
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden sm:aspect-[16/10]">
                <img
                  alt={item.alt}
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  src={item.image}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80 dark:from-charcoal-950/60" />
              </div>
              <div className="flex flex-1 flex-col border-t border-charcoal-100 p-6 sm:p-7 dark:border-charcoal-700/80">
                <h3 className="font-serif text-lg font-semibold leading-snug sm:text-xl">
                  <a
                    href="#community"
                    className="text-charcoal-950 transition-colors hover:text-sage-700 dark:text-zinc-50 dark:hover:text-sage-300"
                  >
                    {item.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 dark:text-charcoal-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
