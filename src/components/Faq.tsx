import { useState } from 'react'

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqProps {
  title?: string
  subtitle?: string
  items: FaqItem[]
}

export default function Faq({ title = 'Frequently Asked Questions', subtitle, items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="bg-goku w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-bold text-3xl lg:text-4xl text-bulma font-sans leading-tight mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-trunks text-lg leading-relaxed">{subtitle}</p>}
        </div>

        <div className="max-w-2xl mx-auto divide-y divide-beerus">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i}>
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="font-semibold text-bulma font-sans group-hover:text-piccolo transition-colors">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 w-6 h-6 rounded-i-rounded border border-beerus flex items-center justify-center text-trunks transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <p className="pb-5 text-trunks leading-relaxed">{item.answer}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
