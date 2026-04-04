import { Mail, Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

type SellAdvisorCardProps = {
  name: string
  role: string
  phone: string
  email: string
  image: string
  index: number
}

export function SellAdvisorCard({ name, role, phone, email, image, index }: SellAdvisorCardProps) {
  const reduceMotion = useReducedMotion()
  const telHref = `tel:${phone.replace(/\s/g, '')}`

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:bg-charcoal-900 dark:shadow-none dark:hover:shadow-black/40"
    >
      <div className="h-72 overflow-hidden">
        <motion.img
          alt={name}
          className="h-full w-full object-cover object-top"
          src={image}
          whileHover={reduceMotion ? undefined : { scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="p-6">
        <h3 className="mb-1 font-serif text-lg font-semibold text-charcoal-950 dark:text-zinc-50">
          {name}
        </h3>
        <p className="mb-3 text-sm text-sage-600 dark:text-sage-400">{role}</p>
        <div className="flex items-center gap-3">
          <a
            href={telHref}
            className="flex size-10 items-center justify-center rounded-full bg-charcoal-100 text-charcoal-600 transition-colors hover:bg-sage-500 hover:text-white dark:bg-charcoal-800 dark:text-zinc-300 dark:hover:bg-sage-500 dark:hover:text-white"
            aria-label={`Call ${name}`}
          >
            <Phone className="size-4" />
          </a>
          <a
            href={`mailto:${email}`}
            className="flex size-10 items-center justify-center rounded-full bg-charcoal-100 text-charcoal-600 transition-colors hover:bg-sage-500 hover:text-white dark:bg-charcoal-800 dark:text-zinc-300 dark:hover:bg-sage-500 dark:hover:text-white"
            aria-label={`Email ${name}`}
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
