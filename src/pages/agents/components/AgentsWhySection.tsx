import {
  Camera,
  Clock,
  Globe,
  HeartHandshake,
  LineChart,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'

import { whyPillars, type WhyPillar } from '@/pages/agents/agentsData'

const iconMap: Record<WhyPillar['icon'], LucideIcon> = {
  shield: ShieldCheck,
  heart: HeartHandshake,
  globe: Globe,
  chart: LineChart,
  camera: Camera,
  clock: Clock,
}

export function AgentsWhySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-charcoal-100 via-[#E9E7E1] to-charcoal-100 py-24 md:py-28 dark:from-charcoal-950 dark:via-charcoal-950 dark:to-charcoal-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-20"
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgb(109 139 110 / 0.18), transparent 55%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <p className="mb-5 text-xs font-semibold tracking-[0.28em] text-sage-600 uppercase dark:text-sage-400">
            The Austin Luxury Difference
          </p>
          <div
            className="mx-auto mb-8 h-px w-16 bg-gradient-to-r from-transparent via-sage-500/70 to-transparent dark:via-sage-400/50"
            aria-hidden
          />
          <h2 className="mb-6 font-serif text-4xl font-light tracking-tight text-charcoal-950 md:text-5xl dark:text-zinc-50">
            Why Work With Our Team
          </h2>
          <p className="text-lg leading-relaxed text-charcoal-600 dark:text-charcoal-300">
            Experience the difference that dedicated expertise and personalized service can make in
            your luxury real estate journey.
          </p>
        </header>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyPillars.map((pillar) => {
            const Icon = iconMap[pillar.icon]
            return (
              <article
                key={pillar.title}
                className="group relative overflow-hidden rounded-2xl border border-charcoal-200/60 bg-white/90 p-8 shadow-[0_4px_6px_-1px_rgb(23_22_20/0.06),0_20px_40px_-12px_rgb(23_22_20/0.12)] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-sage-400/45 hover:shadow-[0_8px_12px_-2px_rgb(23_22_20/0.08),0_28px_56px_-16px_rgb(90_117_91/0.18)] dark:border-charcoal-700/80 dark:bg-charcoal-900/70 dark:shadow-[0_4px_24px_-4px_rgb(0_0_0/0.4)] dark:hover:border-sage-500/40"
              >
                <div
                  className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-sage-500/90 to-sage-600/70 opacity-90 transition-opacity group-hover:opacity-100 dark:from-sage-400 dark:to-sage-600"
                  aria-hidden
                />
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sage-100 to-sage-50 ring-1 ring-sage-500/15 transition-[transform,ring-color] duration-300 group-hover:scale-[1.03] group-hover:ring-sage-500/30 dark:from-sage-500/20 dark:to-sage-600/10 dark:ring-sage-400/20 dark:group-hover:ring-sage-400/35">
                  <Icon className="size-7 text-sage-700 dark:text-sage-300" aria-hidden />
                </div>
                <h3 className="mb-3 font-serif text-xl font-medium tracking-tight text-charcoal-950 md:text-2xl dark:text-zinc-50">
                  {pillar.title}
                </h3>
                <p className="text-base leading-relaxed text-charcoal-600 dark:text-charcoal-400">
                  {pillar.body}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
