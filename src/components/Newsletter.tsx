import { useState, type FormEvent } from 'react'

export interface NewsletterProps {
  headline: string
  subline?: string
  placeholder?: string
}

export default function Newsletter({
  headline,
  subline,
  placeholder = 'Enter your email address',
}: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section className="bg-piccolo/5 w-full py-20 border-t border-beerus">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-bold text-3xl lg:text-4xl text-bulma font-sans mb-4">{headline}</h2>
        {subline && (
          <p className="text-trunks text-lg mb-10">{subline}</p>
        )}

        {submitted ? (
          <div className="inline-flex items-center gap-2 text-piccolo font-semibold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            You're in! Thank you for subscribing.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              required
              className="flex-1 border border-beerus rounded-i-md px-4 py-3 text-sm text-bulma bg-goku placeholder:text-trunks/60 focus:outline-none focus:border-piccolo focus:ring-1 focus:ring-piccolo transition-colors"
            />
            <button
              type="submit"
              className="bg-piccolo text-white font-semibold text-sm px-6 py-3 rounded-i-md hover:bg-piccolo/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
