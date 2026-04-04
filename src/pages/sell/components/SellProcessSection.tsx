import { Camera, DoorOpen, FileText, HeartHandshake, House, KeyRound } from 'lucide-react'

import { FadeInSection } from '@/components/motion'
import { sellProcessSteps } from '@/pages/sell/sellData'
import { SellProcessCard } from '@/pages/sell/components/SellProcessCard'

const iconMap = {
  'user-heart': HeartHandshake,
  'home-gear': House,
  camera: Camera,
  'door-open': DoorOpen,
  'file-text': FileText,
  key: KeyRound,
} as const

export function SellProcessSection() {
  return (
    <section id="process" className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-20 text-center">
          <p className="mb-4 text-sm font-medium tracking-wider text-sage-600 uppercase dark:text-sage-400">
            Our Proven Process
          </p>
          <h2 className="mb-6 font-serif text-4xl font-semibold text-charcoal-950 sm:text-5xl dark:text-zinc-50">
            Your Selling Journey
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-charcoal-600 dark:text-charcoal-400">
            A seamless, white-glove experience from listing to closing, guided by Austin&apos;s top
            luxury specialists
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sellProcessSteps.map((item, i) => (
            <SellProcessCard
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
              icon={iconMap[item.icon]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
