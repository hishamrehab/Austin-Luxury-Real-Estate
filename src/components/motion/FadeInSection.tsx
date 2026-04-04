import { useRef, type ReactNode } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

import { cn } from '@/lib/utils'

type FadeInSectionProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

export function FadeInSection({
  children,
  className,
  delay = 0,
  y = 20,
  once = true,
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-12% 0px -8% 0px' })
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
