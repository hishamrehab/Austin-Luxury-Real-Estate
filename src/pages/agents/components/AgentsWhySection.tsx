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
    <section className="bg-charcoal-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-sage-400 uppercase">
            The Austin Luxury Difference
          </p>
          <h2 className="mb-4 font-serif text-3xl text-white md:text-4xl">Why Work With Our Team</h2>
          <p className="mx-auto max-w-2xl text-charcoal-300">
            Experience the difference that dedicated expertise and personalized service can make in
            your luxury real estate journey
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyPillars.map((pillar) => {
            const Icon = iconMap[pillar.icon]
            return (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-charcoal-800 bg-charcoal-900/50 p-8 transition-all duration-300 hover:border-sage-500/50"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-sage-500/10 transition-colors group-hover:bg-sage-500/20">
                  <Icon className="size-6 text-sage-400" aria-hidden />
                </div>
                <h3 className="mb-3 font-serif text-xl text-white">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal-400">{pillar.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
