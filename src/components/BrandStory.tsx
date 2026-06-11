export interface BrandStoryProps {
  headline: string
  body: string
  image: string
  imageAlt?: string
  cta?: { label: string; href: string }
}

export default function BrandStory({
  headline,
  body,
  image,
  imageAlt = '',
  cta,
}: BrandStoryProps) {
  return (
    <section className="bg-gohan w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-s-lg">
            <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-s-rounded bg-piccolo/10 hidden lg:block" />
        </div>

        <div>
          <p className="text-piccolo text-xs font-semibold uppercase tracking-[0.15em] mb-5">
            Our Story
          </p>
          <h2 className="font-bold text-4xl lg:text-5xl text-bulma font-sans leading-tight mb-6">
            {headline}
          </h2>
          <p className="text-trunks text-lg leading-relaxed mb-8">{body}</p>
          {cta && (
            <a
              href={cta.href}
              className="inline-flex items-center bg-piccolo text-white font-semibold text-sm px-8 py-3.5 rounded-i-md hover:bg-piccolo/90 transition-colors"
            >
              {cta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
