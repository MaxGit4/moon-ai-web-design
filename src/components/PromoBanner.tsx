export interface PromoBannerProps {
  headline: string
  subline?: string
  cta: { label: string; href: string }
  image?: string
  layout?: 'full' | 'split'
  theme?: 'light' | 'dark'
}

export default function PromoBanner({
  headline,
  subline,
  cta,
  image,
  layout = 'split',
  theme = 'dark',
}: PromoBannerProps) {
  const isDark = theme === 'dark'

  if (layout === 'full') {
    return (
      <section className="w-full relative overflow-hidden py-24">
        {image && (
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div
          className={`absolute inset-0 ${isDark ? 'bg-hit/70' : 'bg-goku/80'}`}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2
            className={`font-bold text-4xl lg:text-5xl font-sans mb-5 ${
              isDark ? 'text-white' : 'text-bulma'
            }`}
          >
            {headline}
          </h2>
          {subline && (
            <p
              className={`text-lg mb-10 max-w-xl mx-auto ${
                isDark ? 'text-white/75' : 'text-trunks'
              }`}
            >
              {subline}
            </p>
          )}
          <a
            href={cta.href}
            className="inline-flex items-center bg-piccolo text-white font-semibold text-sm px-8 py-3.5 rounded-i-md hover:bg-piccolo/90 transition-colors"
          >
            {cta.label}
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className={`w-full overflow-hidden ${isDark ? 'bg-hit' : 'bg-gohan'}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
        <div className="flex flex-col justify-center py-16 lg:py-20 lg:pr-16">
          <h2
            className={`font-bold text-4xl lg:text-5xl font-sans leading-tight mb-5 ${
              isDark ? 'text-white' : 'text-bulma'
            }`}
          >
            {headline}
          </h2>
          {subline && (
            <p
              className={`text-lg mb-10 ${isDark ? 'text-white/75' : 'text-trunks'}`}
            >
              {subline}
            </p>
          )}
          <div>
            <a
              href={cta.href}
              className="inline-flex items-center bg-piccolo text-white font-semibold text-sm px-8 py-3.5 rounded-i-md hover:bg-piccolo/90 transition-colors"
            >
              {cta.label}
            </a>
          </div>
        </div>
        {image && (
          <div className="relative min-h-[320px] lg:min-h-0 -mx-6 lg:mx-0">
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  )
}
