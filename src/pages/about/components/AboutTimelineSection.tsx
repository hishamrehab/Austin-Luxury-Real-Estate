import { aboutTimeline } from '@/pages/about/aboutData'

export function AboutTimelineSection() {
  return (
    <section className="overflow-hidden bg-charcoal-950 px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm font-medium tracking-wider text-sage-400 uppercase">Our Journey</p>
          <h2 className="font-serif text-5xl font-semibold text-white">Two Decades of Excellence</h2>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-charcoal-700 lg:block" />

          <div className="space-y-16 lg:space-y-0">
            {aboutTimeline.map((item) => (
              <div
                key={item.year}
                className="relative lg:flex lg:min-h-[160px] lg:items-center"
              >
                <div className="absolute left-1/2 z-10 hidden size-4 -translate-x-1/2 items-center justify-center rounded-full bg-sage-500 ring-4 ring-charcoal-950 lg:flex">
                  <div className="size-2 rounded-full bg-white" />
                </div>

                <div
                  className={
                    item.align === 'left'
                      ? 'lg:w-1/2 lg:pr-16 lg:text-right'
                      : 'lg:ml-auto lg:w-1/2 lg:pl-16'
                  }
                >
                  <div
                    className={
                      item.align === 'left'
                        ? 'rounded-2xl border border-charcoal-800 bg-charcoal-900 p-8 transition-colors duration-300 hover:border-sage-700 lg:ml-auto lg:mr-0'
                        : 'rounded-2xl border border-charcoal-800 bg-charcoal-900 p-8 transition-colors duration-300 hover:border-sage-700'
                    }
                  >
                    <p className="mb-2 font-serif text-3xl font-semibold text-sage-400">{item.year}</p>
                    <h3 className="mb-3 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-charcoal-300">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
