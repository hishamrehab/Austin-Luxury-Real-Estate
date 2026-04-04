import type { LucideIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

type SellProcessCardProps = {
  step: string
  title: string
  description: string
  icon: LucideIcon
  index: number
}

export function SellProcessCard({ step, title, description, icon: Icon, index }: SellProcessCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="group rounded-2xl bg-white p-8 transition-shadow duration-300 hover:shadow-lg dark:bg-charcoal-900 dark:hover:shadow-black/30"
    >
      <div className="mb-6 flex items-start justify-between">
        <span
          className="font-serif text-6xl font-light text-charcoal-400 transition-colors group-hover:text-sage-600 dark:text-charcoal-500 dark:group-hover:text-sage-400"
          aria-hidden
        >
          {step}
        </span>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 transition-colors group-hover:bg-sage-500 dark:bg-charcoal-800 dark:group-hover:bg-sage-500">
          <Icon className="size-5 text-sage-600 transition-colors group-hover:text-white dark:text-sage-400 dark:group-hover:text-white" />
        </div>
      </div>
      <h3 className="mb-3 font-serif text-xl font-semibold text-charcoal-950 dark:text-zinc-50">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-charcoal-600 dark:text-charcoal-400">
        {description}
      </p>
    </motion.article>
  )
}
