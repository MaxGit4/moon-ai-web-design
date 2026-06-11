export interface CollectionHighlightProps {
  title: string
  body: string
  cta: { label: string; href: string }
  image: string
  imageAlt?: string
  alignment?: 'left' | 'right'
}

export default function CollectionHighlight({
  title,
  body,
  cta,
  image,
  imageAlt = '',
  alignment = 'left',
}: CollectionHighlightProps) {
  const imageFirst = alignment === 'left'

  return (
    <section className="bg-gohan w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        <div
          className={`relative min-h-[360px] lg:min-h-0 -mx-6 lg:mx-0 ${
            imageFirst ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
        </div>

        <div
          className={`flex flex-col justify-center py-16 lg:py-24 ${
            imageFirst
              ? 'lg:order-2 lg:pl-20'
              : 'lg:order-1 lg:pr-20'
          }`}
        >
          <h2 className="font-bold text-4xl lg:text-5xl text-bulma font-sans leading-tight mb-6">
            {title}
          </h2>
          <p className="text-trunks text-lg leading-relaxed mb-8">{body}</p>
          <a
            href={cta.href}
            className="inline-flex items-center gap-2 text-piccolo font-semibold text-sm group"
          >
            {cta.label}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
