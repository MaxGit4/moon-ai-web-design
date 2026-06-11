export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface FooterProps {
  logo?: string
  columns?: FooterColumn[]
  legal?: string
}

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
  </svg>
)

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const PinterestIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.23-5.22 1.23-5.22s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.87 3.51-.25 1.05.52 1.9 1.54 1.9 1.85 0 3.09-2.38 3.09-5.19 0-2.14-1.45-3.64-3.51-3.64-2.39 0-3.79 1.79-3.79 3.64 0 .72.28 1.49.62 1.91.07.08.08.15.06.24l-.23.95c-.04.15-.13.18-.3.11-1.1-.51-1.78-2.12-1.78-3.41 0-2.77 2.01-5.31 5.8-5.31 3.04 0 5.41 2.17 5.41 5.06 0 3.02-1.9 5.45-4.55 5.45-.89 0-1.72-.46-2.01-1l-.54 2.04c-.2.76-.73 1.71-1.09 2.28.82.25 1.69.39 2.59.39 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
)

const socials = [
  { label: 'Instagram', icon: <InstagramIcon /> },
  { label: 'Twitter / X', icon: <TwitterIcon /> },
  { label: 'Pinterest', icon: <PinterestIcon /> },
]

export default function Footer({ logo = 'Moon', columns = [], legal }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-hit text-white/70 w-full">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          <div className="col-span-2 md:col-span-1 lg:col-span-2 pr-0 lg:pr-8">
            <a href="#" className="font-bold text-xl text-white font-sans block mb-4 tracking-tight">
              {logo}
            </a>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Discover the intersection of nature and design. Curated collections for a mindful lifestyle.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="text-white/50 hover:text-white transition-colors"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col, i) => (
            <div key={i}>
              <h3 className="font-semibold text-white text-xs uppercase tracking-[0.12em] mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/35">
          <p>{legal ?? `© ${year} ${logo}. All rights reserved.`}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
