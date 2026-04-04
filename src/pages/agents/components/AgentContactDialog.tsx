import { type FormEvent, useId, useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { Dialog } from 'radix-ui'

import { cn } from '@/lib/utils'
import type { DirectoryAgent } from '@/pages/agents/agentsData'

const labelClass =
  'mb-2 block text-xs font-semibold tracking-wide text-charcoal-800 uppercase dark:text-zinc-200'

const fieldClass = cn(
  'w-full rounded-xl border px-4 text-sm transition-[border-color,box-shadow,background-color]',
  /* Light */
  'border-charcoal-200 bg-zinc-50/80 text-charcoal-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]',
  'placeholder:text-charcoal-500',
  'hover:border-charcoal-300 hover:bg-white',
  'focus:border-sage-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(107,127,100,0.2)] focus:outline-none',
  /* Dark */
  'dark:border-white/12 dark:bg-charcoal-800/90 dark:text-zinc-100 dark:shadow-none',
  'dark:placeholder:text-zinc-400',
  'dark:hover:border-white/20 dark:hover:bg-charcoal-800',
  'dark:focus:border-sage-400 dark:focus:bg-charcoal-800 dark:focus:shadow-[0_0_0_3px_rgba(148,163,184,0.12)]',
)

const interestOptions = [
  { value: 'buying', label: 'Buying a Home' },
  { value: 'selling', label: 'Selling a Home' },
  { value: 'both', label: 'Both Buying & Selling' },
  { value: 'investment', label: 'Investment Properties' },
  { value: 'consultation', label: 'General Consultation' },
] as const

type AgentContactDialogProps = {
  agent: DirectoryAgent | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AgentContactDialog({ agent, open, onOpenChange }: AgentContactDialogProps) {
  const titleId = useId()
  const descId = useId()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [interest, setInterest] = useState<(typeof interestOptions)[number]['value']>('buying')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!agent) return
    setSubmitting(true)
    const payload = {
      agent: agent.name,
      agentEmail: agent.email,
      name,
      email,
      phone,
      interest,
      message,
    }
    window.setTimeout(() => {
      console.info('Agent contact submission (demo)', payload)
      setSubmitting(false)
      onOpenChange(false)
    }, 500)
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {agent ? (
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-zinc-950/55 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-black/70 dark:backdrop-blur-sm" />
          <Dialog.Content
            aria-labelledby={titleId}
            aria-describedby={descId}
            className={cn(
              'fixed top-1/2 left-1/2 z-[100] max-h-[90vh] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl p-0 shadow-2xl',
              'border border-charcoal-200/90 bg-white ring-1 ring-black/[0.04]',
              'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
              'dark:border-white/10 dark:bg-charcoal-900 dark:ring-1 dark:ring-white/[0.06]',
            )}
          >
            <Dialog.Close
              type="button"
              className={cn(
                'absolute top-4 right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors',
                'border border-transparent bg-charcoal-100 text-charcoal-600',
                'hover:border-charcoal-200 hover:bg-white hover:text-charcoal-900',
                'focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:focus-visible:ring-offset-charcoal-900',
                'dark:border-white/10 dark:bg-charcoal-800 dark:text-zinc-300',
                'dark:hover:border-white/15 dark:hover:bg-charcoal-700 dark:hover:text-white',
              )}
              aria-label="Close"
            >
              <X className="size-5" strokeWidth={2} />
            </Dialog.Close>

            <div
              className={cn(
                'flex items-center gap-5 border-b p-6 pr-14',
                'border-charcoal-100 bg-gradient-to-br from-sage-50/70 via-white to-zinc-50/90',
                'dark:border-charcoal-800 dark:from-charcoal-900 dark:via-charcoal-900 dark:to-charcoal-950',
              )}
            >
              <div className="relative shrink-0">
                {/* Outer sage frame — reads as intentional “card”, not a floating circle */}
                <div
                  className={cn(
                    'rounded-2xl p-[2px]',
                    'bg-gradient-to-b from-sage-200/90 via-sage-300/70 to-sage-500/80',
                    'shadow-[0_12px_28px_-14px_rgba(74,97,75,0.55)]',
                    'dark:from-sage-500/35 dark:via-sage-600/25 dark:to-charcoal-800',
                    'dark:shadow-[0_16px_36px_-18px_rgba(0,0,0,0.85)]',
                  )}
                >
                  <div
                    className={cn(
                      'overflow-hidden rounded-[14px] bg-white',
                      'ring-1 ring-charcoal-900/[0.04]',
                      'dark:bg-charcoal-900 dark:ring-white/[0.08]',
                    )}
                  >
                    <div className="relative aspect-[4/5] w-[4.75rem] sm:w-[5.25rem]">
                      <img
                        alt={agent.name}
                        className="h-full w-full object-cover object-top"
                        src={agent.image}
                        loading="eager"
                        decoding="async"
                      />
                      {/* Hairline edge definition without tinting the face */}
                      <div
                        className="pointer-events-none absolute inset-0 rounded-[14px] ring-1 ring-inset ring-black/[0.06] dark:ring-white/[0.07]"
                        aria-hidden
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-0 flex-1 border-l border-charcoal-200/80 pl-5 dark:border-charcoal-700/80">
                <p className="text-[11px] font-semibold tracking-wider text-sage-700 uppercase dark:text-sage-400">
                  Contact agent
                </p>
                <Dialog.Title
                  id={titleId}
                  className="mt-1 font-serif text-xl leading-snug font-semibold text-charcoal-950 dark:text-zinc-50"
                >
                  {agent.name}
                </Dialog.Title>
                <Dialog.Description
                  id={descId}
                  className="mt-1 text-sm leading-snug text-charcoal-600 dark:text-zinc-400"
                >
                  {agent.role}
                </Dialog.Description>
              </div>
            </div>

            <div className="bg-zinc-50/40 px-6 pt-6 pb-6 dark:bg-charcoal-950/40">
              <p className="mb-5 text-sm leading-relaxed text-charcoal-600 dark:text-zinc-400">
                Send a note and we&apos;ll follow up shortly. Fields marked with{' '}
                <span className="font-medium text-sage-600 dark:text-sage-400">*</span> are required.
              </p>
              <form id="agent-contact-form" className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="agent-contact-name" className={labelClass}>
                    Your name <span className="text-sage-600 dark:text-sage-400">*</span>
                  </label>
                  <input
                    id="agent-contact-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Smith"
                    className={cn(fieldClass, 'h-12')}
                    autoComplete="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="agent-contact-email" className={labelClass}>
                      Email <span className="text-sage-600 dark:text-sage-400">*</span>
                    </label>
                    <input
                      id="agent-contact-email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@email.com"
                      className={cn(fieldClass, 'h-12')}
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="agent-contact-phone" className={labelClass}>Phone</label>
                    <input
                      id="agent-contact-phone"
                      name="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(512) 555-0000"
                      className={cn(fieldClass, 'h-12')}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="agent-contact-interest" className={labelClass}>
                    I&apos;m interested in
                  </label>
                  <div className="relative">
                    <select
                      id="agent-contact-interest"
                      name="interest"
                      value={interest}
                      onChange={(e) =>
                        setInterest(e.target.value as (typeof interestOptions)[number]['value'])
                      }
                      className={cn(fieldClass, 'h-12 cursor-pointer appearance-none pr-11')}
                    >
                      {interestOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-charcoal-500 dark:text-zinc-400"
                      aria-hidden
                      strokeWidth={2}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="agent-contact-message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="agent-contact-message"
                    name="message"
                    rows={4}
                    maxLength={500}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your real estate goals, timing, and anything else we should know…"
                    className={cn(fieldClass, 'min-h-[7.5rem] resize-none py-3 leading-relaxed')}
                  />
                  <div className="mt-1.5 flex justify-end">
                    <span className="text-xs tabular-nums text-charcoal-500 dark:text-zinc-500">
                      {message.length} / 500
                    </span>
                  </div>
                </div>

                <div
                  className={cn(
                    'border-t pt-5',
                    'border-charcoal-100 dark:border-charcoal-800',
                  )}
                >
                  <button
                    type="submit"
                    disabled={submitting}
                    className={cn(
                      'h-12 w-full cursor-pointer rounded-full font-semibold whitespace-nowrap text-white transition-all',
                      'bg-sage-600 shadow-md shadow-sage-900/15',
                      'hover:bg-sage-700 hover:shadow-lg hover:shadow-sage-900/20',
                      'focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:focus-visible:ring-offset-charcoal-900',
                      'disabled:cursor-not-allowed disabled:opacity-55',
                      'dark:bg-sage-500 dark:shadow-sage-950/40 dark:hover:bg-sage-400',
                    )}
                  >
                    {submitting ? 'Sending…' : 'Send message'}
                  </button>
                </div>
              </form>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      ) : null}
    </Dialog.Root>
  )
}
