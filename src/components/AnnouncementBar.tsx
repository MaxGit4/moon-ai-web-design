import { useState } from 'react'

export interface AnnouncementBarProps {
  message: string
  cta?: { label: string; href: string }
  dismissible?: boolean
}

export default function AnnouncementBar({
  message,
  cta,
  dismissible = true,
}: AnnouncementBarProps) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div className="bg-piccolo text-white text-sm font-medium py-2.5 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <span>{message}</span>
        {cta && (
          <a
            href={cta.href}
            className="underline underline-offset-2 hover:no-underline transition-all"
          >
            {cta.label}
          </a>
        )}
      </div>
      {dismissible && (
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-lg leading-none transition-colors"
          aria-label="Dismiss announcement"
        >
          ×
        </button>
      )}
    </div>
  )
}
