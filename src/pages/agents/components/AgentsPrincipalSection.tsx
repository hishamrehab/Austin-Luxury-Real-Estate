import { Award, Globe, Heart, Mail, Medal, Phone } from 'lucide-react'

import { PRINCIPAL_IMAGE } from '@/pages/agents/agentsData'

const credentials = [
  {
    icon: Award,
    title: 'Top 1% Nationwide',
    subtitle: "Real Trends America's Best",
  },
  {
    icon: Medal,
    title: 'Luxury Certified',
    subtitle: 'Institute for Luxury Home Marketing',
  },
  {
    icon: Globe,
    title: 'Global Network',
    subtitle: 'Leading Real Estate Companies',
  },
  {
    icon: Heart,
    title: 'Community Leader',
    subtitle: 'Austin Board of Realtors',
  },
] as const

export function AgentsPrincipalSection() {
  return (
    <section className="bg-white py-20 dark:bg-charcoal-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                alt="Victoria Sterling"
                className="h-[600px] w-full object-cover object-top"
                src={PRINCIPAL_IMAGE}
              />
            </div>
            <div className="absolute -right-6 -bottom-6 rounded-2xl bg-charcoal-950 p-8 text-white shadow-2xl dark:bg-charcoal-900">
              <p className="mb-2 font-serif text-4xl">$500M+</p>
              <p className="text-sm text-charcoal-300">Career Sales Volume</p>
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="mb-4 text-sm font-medium tracking-widest text-sage-600 uppercase dark:text-sage-400">
              Principal Broker
            </p>
            <h2 className="mb-6 font-serif text-4xl text-charcoal-950 md:text-5xl dark:text-zinc-50">
              Victoria Sterling
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-charcoal-600 dark:text-zinc-400">
              With over 20 years of experience in Austin&apos;s luxury real estate market, Victoria
              Sterling has built Austin Luxury Realty into one of the most respected brokerages in
              Texas. Her commitment to excellence and personalized service has earned her the trust
              of Austin&apos;s most discerning clients.
            </p>

            <div className="mb-10 grid grid-cols-2 gap-6">
              {credentials.map(({ icon: Icon, title, subtitle }) => (
                <div key={title} className="rounded-xl bg-charcoal-50 p-5 dark:bg-charcoal-900/80">
                  <Icon className="mb-3 size-8 text-sage-500 dark:text-sage-400" aria-hidden />
                  <p className="mb-1 text-sm font-medium text-charcoal-950 dark:text-zinc-100">
                    {title}
                  </p>
                  <p className="text-xs text-charcoal-500 dark:text-zinc-500">{subtitle}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+15125550101"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-charcoal-950 px-6 py-3 font-medium whitespace-nowrap text-white transition-colors hover:bg-charcoal-800 dark:bg-zinc-100 dark:text-charcoal-950 dark:hover:bg-white"
              >
                <Phone className="size-5 shrink-0" aria-hidden />
                (512) 555-0101
              </a>
              <a
                href="mailto:victoria@austinluxuryrealty.com"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-charcoal-200 px-6 py-3 font-medium whitespace-nowrap text-charcoal-700 transition-colors hover:bg-charcoal-50 dark:border-charcoal-700 dark:text-zinc-200 dark:hover:bg-charcoal-900"
              >
                <Mail className="size-5 shrink-0" aria-hidden />
                Email Victoria
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
