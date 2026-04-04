import { useId, type ReactElement, type ReactNode } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import { cn } from '@/lib/utils'

type ConfirmPopupProps = {
  trigger: ReactElement
  title?: string
  message: string
  confirmLabel?: string
  cancelLabel?: string
  onConfirm: () => void
}

export function ConfirmPopup({
  trigger,
  title,
  message,
  confirmLabel = 'Remove all',
  cancelLabel = 'Cancel',
  onConfirm,
}: ConfirmPopupProps) {
  const titleId = useId()
  const descId = useId()

  function renderDialog(close: () => void) {
    return (
      <div
        className={cn(
          'overflow-hidden rounded-2xl border border-charcoal-200/70 bg-white',
          'shadow-md shadow-charcoal-950/[0.08] ring-1 ring-charcoal-950/[0.06]',
          'dark:border-charcoal-700/80 dark:bg-charcoal-900 dark:shadow-none dark:ring-1 dark:ring-white/[0.06]',
        )}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={descId}
      >
        <div
          className="h-1 bg-gradient-to-r from-sage-500/0 via-sage-500/70 to-sage-500/0 dark:via-sage-500/50"
          aria-hidden
        />
        <div className="px-6 pt-5 pb-4">
          {title ? (
            <h3
              id={titleId}
              className="font-serif text-xl font-semibold tracking-tight text-charcoal-950 dark:text-zinc-50"
            >
              {title}
            </h3>
          ) : null}
          <p
            id={descId}
            className={cn(
              'text-[15px] leading-relaxed text-charcoal-600 dark:text-zinc-400',
              title ? 'mt-2.5' : undefined,
            )}
          >
            {message}
          </p>
        </div>
        <div className="flex flex-wrap justify-end gap-3 border-t border-charcoal-100 bg-charcoal-50/70 px-6 py-4 dark:border-charcoal-800 dark:bg-charcoal-950/50">
          <button
            type="button"
            onClick={close}
            className={cn(
              'cursor-pointer rounded-full border border-charcoal-200/90 bg-white px-5 py-2.5 text-sm font-semibold',
              'text-charcoal-800 transition-colors hover:border-sage-300 hover:bg-sage-50/90',
              'dark:border-charcoal-600 dark:bg-charcoal-900 dark:text-zinc-100',
              'dark:hover:border-sage-500 dark:hover:bg-charcoal-800',
            )}
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm()
              close()
            }}
            className={cn(
              'cursor-pointer rounded-full bg-charcoal-900 px-5 py-2.5 text-sm font-semibold text-white',
              'shadow-sm transition-colors hover:bg-charcoal-950',
              'dark:bg-charcoal-100 dark:text-charcoal-950 dark:hover:bg-white',
            )}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    )
  }

  const modalChildren = ((close: () => void) => renderDialog(close)) as unknown as ReactNode

  return (
    <Popup
      trigger={trigger}
      modal
      closeOnDocumentClick
      closeOnEscape
      lockScroll
      overlayStyle={{
        background: 'rgb(0 0 0 / 0.62)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        zIndex: 10000,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      contentStyle={{
        width: 'min(90vw, 380px)',
        maxWidth: 'min(90vw, 380px)',
        margin: 0,
        padding: 0,
        border: 'none',
        background: 'transparent',
        boxShadow: 'none',
        alignSelf: 'center',
      }}
    >
      {modalChildren}
    </Popup>
  )
}
