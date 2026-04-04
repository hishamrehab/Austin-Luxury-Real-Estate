import { Check } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

type SellServiceCardProps = {
  title: string
  description: string
  image: string
  imageAlt: string
  bullets: readonly string[]
  index: number
}

export function SellServiceCard({
  title,
  description,
  image,
  imageAlt,
  bullets,
  index,
}: SellServiceCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-[background-color,box-shadow] hover:shadow-md dark:bg-charcoal-900 dark:shadow-none dark:hover:bg-charcoal-800"
    >
      <div className="h-56 overflow-hidden">
        <motion.img
          alt={imageAlt}
          className="h-full w-full object-cover object-top"
          src={image}
          whileHover={reduceMotion ? undefined : { scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="p-8">
        <h3 className="mb-4 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
          {title}
        </h3>
        <p className="mb-6 text-base leading-relaxed text-charcoal-600 dark:text-charcoal-300">
          {description}
        </p>
        <ul className="space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-sm text-charcoal-600 dark:text-charcoal-400">
              <Check className="size-4 shrink-0 text-sage-600 dark:text-sage-400" aria-hidden />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
