import { type FormEvent, useId, useState } from 'react'
import { X } from 'lucide-react'
import { Dialog } from 'radix-ui'

import { cn } from '@/lib/utils'
import type { DirectoryAgent } from '@/pages/agents/agentsData'

const inputClass =
  'w-full rounded-xl border-0 bg-charcoal-50 px-4 text-sm text-charcoal-900 placeholder-charcoal-400 transition-all focus:ring-2 focus:ring-sage-500/20 focus:outline-none dark:bg-charcoal-900 dark:text-zinc-100 dark:placeholder-zinc-500'

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
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
        <Dialog.Content
          aria-labelledby={titleId}
          aria-describedby={descId}
          className={cn(
            'fixed top-1/2 left-1/2 z-[100] max-h-[90vh] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-white p-0 shadow-2xl dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10',
          )}
        >
          <Dialog.Close
            type="button"
            className="absolute top-4 right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-charcoal-100 text-charcoal-600 transition-colors hover:bg-charcoal-200 dark:bg-charcoal-800 dark:text-zinc-300 dark:hover:bg-charcoal-700"
            aria-label="Close"
          >
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex items-center gap-4 border-b border-charcoal-100 p-6 dark:border-charcoal-800">
            <img
              alt={agent.name}
              className="size-16 rounded-full object-cover object-top"
              src={agent.image}
            />
            <div>
              <Dialog.Title
                id={titleId}
                className="font-serif text-xl text-charcoal-950 dark:text-zinc-50"
              >
                {agent.name}
              </Dialog.Title>
              <Dialog.Description
                id={descId}
                className="text-sm text-sage-600 dark:text-sage-400"
              >
                {agent.role}
              </Dialog.Description>
            </div>
          </div>

          <div className="p-6">
            <form id="agent-contact-form" className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="agent-contact-name" className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-zinc-300">
                  Your Name
                </label>
                <input
                  id="agent-contact-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Smith"
                  className={cn(inputClass, 'h-12')}
                  autoComplete="name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="agent-contact-email" className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-zinc-300">
                    Email
                  </label>
                  <input
                    id="agent-contact-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@email.com"
                    className={cn(inputClass, 'h-12')}
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="agent-contact-phone" className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-zinc-300">
                    Phone
                  </label>
                  <input
                    id="agent-contact-phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(512) 555-0000"
                    className={cn(inputClass, 'h-12')}
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="agent-contact-interest" className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-zinc-300">
                  I&apos;m Interested In
                </label>
                <select
                  id="agent-contact-interest"
                  name="interest"
                  value={interest}
                  onChange={(e) =>
                    setInterest(e.target.value as (typeof interestOptions)[number]['value'])
                  }
                  className={cn(inputClass, 'h-12 cursor-pointer')}
                >
                  {interestOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="agent-contact-message" className="mb-2 block text-sm font-medium text-charcoal-700 dark:text-zinc-300">
                  Message
                </label>
                <textarea
                  id="agent-contact-message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your real estate goals..."
                  className={cn(inputClass, 'resize-none px-4 py-3')}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="h-12 w-full cursor-pointer rounded-full bg-sage-500 font-medium whitespace-nowrap text-white transition-colors hover:bg-sage-600 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-sage-600 dark:hover:bg-sage-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
      ) : null}
    </Dialog.Root>
  )
}
