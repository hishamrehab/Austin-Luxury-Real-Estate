import { aboutCommunityInitiatives } from '@/pages/about/aboutData'

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

export function AboutCommunitySection() {
  return (
    <section id="community" className="bg-sage-50 px-6 py-32 dark:bg-sage-950/20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionEyebrow>Giving Back</SectionEyebrow>
            <h2 className="font-serif text-5xl font-semibold text-charcoal-950 dark:text-zinc-50">
              Rooted in Community
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-charcoal-600 dark:text-charcoal-300">
            We believe in building more than homes. Our commitment to Austin extends beyond real
            estate into the heart of the community.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {aboutCommunityInitiatives.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl bg-white transition-shadow duration-300 hover:shadow-lg dark:border dark:border-charcoal-800 dark:bg-charcoal-950"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  alt={item.alt}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  src={item.image}
                />
              </div>
              <div className="p-7">
                <h3 className="mb-3 font-serif text-lg font-semibold text-charcoal-950 dark:text-zinc-50">
                  <a
                    href="#community"
                    className="transition-colors hover:text-sage-600 dark:hover:text-sage-400"
                  >
                    {item.title}
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-charcoal-600 dark:text-charcoal-300">
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
