import { useState } from 'react'

export interface NavLink {
  label: string
  href: string
}

export interface HeaderProps {
  logo?: string
  navLinks?: NavLink[]
  ctaLabel?: string
  ctaHref?: string
}

export default function Header({
  logo = 'Moon',
  navLinks = [],
  ctaLabel = 'Shop Now',
  ctaHref = '#',
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-goku border-b border-beerus">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        <a href="#" className="font-bold text-xl text-bulma font-sans tracking-tight shrink-0">
          {logo}
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-trunks hover:text-bulma transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button className="text-trunks hover:text-bulma transition-colors p-1" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          <button className="text-trunks hover:text-bulma transition-colors p-1 relative" aria-label="Cart (0 items)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-piccolo text-white text-[9px] font-bold rounded-i-rounded flex items-center justify-center">
              2
            </span>
          </button>

          <a
            href={ctaHref}
            className="hidden sm:inline-flex items-center bg-piccolo text-white text-sm font-semibold px-5 py-2 rounded-i-md hover:bg-piccolo/90 transition-colors"
          >
            {ctaLabel}
          </a>

          <button
            className="md:hidden text-trunks hover:text-bulma transition-colors p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="md:hidden border-t border-beerus bg-goku px-6 py-5 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-trunks hover:text-bulma transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center bg-piccolo text-white text-sm font-semibold px-5 py-2.5 rounded-i-md hover:bg-piccolo/90 transition-colors mt-2"
          >
            {ctaLabel}
          </a>
        </nav>
      )}
    </header>
  )
}
