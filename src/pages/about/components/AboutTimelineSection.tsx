import { aboutTimeline } from '@/pages/about/aboutData'

export function AboutTimelineSection() {
  return (
    <section className="overflow-hidden bg-[#F5F3EF] px-6 py-24 dark:bg-charcoal-950 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-14 max-w-2xl text-center lg:mb-20">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="size-2 shrink-0 rounded-full bg-sage-500" aria-hidden />
            <p className="text-sm font-medium tracking-[0.2em] text-sage-600 uppercase dark:text-sage-400">
              Our Journey
            </p>
          </div>
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-charcoal-950 sm:text-5xl dark:text-white">
            Two Decades of Excellence
          </h2>
        </header>

        <div className="relative">
          <div
            className="pointer-events-none absolute top-2 bottom-2 left-[15px] w-px bg-gradient-to-b from-charcoal-200 via-sage-300/40 to-charcoal-200 dark:from-charcoal-700 dark:via-sage-700/30 dark:to-charcoal-700 lg:hidden"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-charcoal-300 to-transparent dark:via-charcoal-600 lg:block"
            aria-hidden
          />

          <ol className="relative m-0 list-none space-y-10 p-0 lg:space-y-0">
            {aboutTimeline.map((item) => {
              const onLeft = item.align === 'left'
              return (
                <li
                  key={item.year}
                  className="relative grid grid-cols-1 gap-0 pl-10 lg:grid-cols-2 lg:items-center lg:gap-x-12 lg:py-12 lg:pl-0"
                >
                  <div
                    className="absolute top-7 left-[15px] z-10 size-3.5 -translate-x-1/2 rounded-full border-[3px] border-[#F5F3EF] bg-sage-500 shadow-sm ring-1 ring-sage-600/20 dark:border-charcoal-950 dark:ring-sage-400/30 lg:top-1/2 lg:left-1/2 lg:size-4 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:border-4"
                    aria-hidden
                  />

                  {onLeft ? (
                    <div className="flex justify-start lg:justify-end lg:pr-6">
                      <article
                        className="w-full max-w-lg rounded-2xl border border-charcoal-200/80 bg-white p-6 shadow-sm ring-1 ring-charcoal-950/[0.04] transition-[box-shadow,border-color] duration-300 hover:border-sage-400/60 hover:shadow-md dark:border-charcoal-800 dark:bg-charcoal-900 dark:ring-white/[0.06] dark:hover:border-sage-600 sm:p-7 lg:border-r-4 lg:border-r-sage-500 lg:pr-8"
                      >
                        <TimelineCardBody item={item} />
                      </article>
                    </div>
                  ) : (
                    <>
                      <div className="hidden min-h-px lg:block" aria-hidden />
                      <div className="flex justify-start lg:pl-6">
                        <article
                          className="w-full max-w-lg rounded-2xl border border-charcoal-200/80 bg-white p-6 shadow-sm ring-1 ring-charcoal-950/[0.04] transition-[box-shadow,border-color] duration-300 hover:border-sage-400/60 hover:shadow-md dark:border-charcoal-800 dark:bg-charcoal-900 dark:ring-white/[0.06] dark:hover:border-sage-600 sm:p-7 lg:border-l-4 lg:border-l-sage-500 lg:pl-8"
                        >
                          <TimelineCardBody item={item} />
                        </article>
                      </div>
                    </>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

function TimelineCardBody({ item }: { item: (typeof aboutTimeline)[number] }) {
  return (
    <div className="text-left">
      <p className="mb-3 inline-flex items-center rounded-full bg-sage-100 px-3 py-1 font-sans text-xs font-semibold tracking-wide text-sage-800 uppercase dark:bg-sage-900/45 dark:text-sage-200">
        {item.year}
      </p>
      <h3 className="mb-3 font-serif text-2xl font-semibold tracking-tight text-charcoal-950 sm:text-[1.65rem] dark:text-white">
        {item.title}
      </h3>
      <p className="text-base leading-relaxed text-charcoal-600 dark:text-charcoal-300">
        {item.body}
      </p>
    </div>
  )
}
