export interface HeroBannerProps {
  headline: string
  subline: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  image: string
  imageAlt?: string
}

export default function HeroBanner({
  headline,
  subline,
  primaryCta,
  secondaryCta,
  image,
}: HeroBannerProps) {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Full-bleed background image */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay — hit token ensures WCAG AA contrast on white text */}
      <div className="absolute inset-0 bg-hit/65" />

      {/* Centered content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="font-bold text-5xl lg:text-6xl text-goku leading-[1.08] tracking-tight mb-6 font-sans">
          {headline}
        </h1>
        <p className="text-goku/75 text-lg leading-relaxed mb-10 max-w-xl mx-auto">{subline}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={primaryCta.href}
            className="inline-flex items-center bg-piccolo text-white font-semibold text-sm px-8 py-3.5 rounded-i-md hover:bg-piccolo/90 transition-colors"
          >
            {primaryCta.label}
          </a>
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className="inline-flex items-center border border-goku/40 text-goku font-semibold text-sm px-8 py-3.5 rounded-i-md hover:bg-goku/10 transition-colors"
            >
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
