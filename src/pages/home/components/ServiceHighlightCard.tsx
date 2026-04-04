import { Link } from 'react-router-dom'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

type ServiceHighlightCardProps = {
  icon: LucideIcon
  title: string
  description: string
  to: string
  linkLabel?: string
}

export function ServiceHighlightCard({
  icon: Icon,
  title,
  description,
  to,
  linkLabel = 'Learn More',
}: ServiceHighlightCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="cursor-pointer rounded-3xl border border-transparent bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-charcoal-800 dark:bg-charcoal-950/80 dark:shadow-black/20 dark:hover:shadow-xl"
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-sage-500 dark:bg-sage-600">
        <Icon className="size-6 text-white" />
      </div>
      <h4 className="mb-4 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
        {title}
      </h4>
      <p className="mb-6 text-base leading-relaxed text-charcoal-600 dark:text-zinc-400">
        {description}
      </p>
      <Link
        to={to}
        className="inline-flex cursor-pointer items-center font-medium text-sage-600 transition-colors hover:text-sage-700 dark:text-sage-400 dark:hover:text-sage-300"
      >
        {linkLabel}
        <ArrowRight className="ml-2 size-5" />
      </Link>
    </motion.div>
  )
}
