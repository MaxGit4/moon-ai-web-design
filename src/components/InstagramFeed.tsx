export interface InstagramImage {
  src: string
  alt: string
  href?: string
}

export interface InstagramFeedProps {
  title?: string
  images: InstagramImage[]
  profileHandle?: string
}

export default function InstagramFeed({
  title = 'Follow Our Journey',
  images,
  profileHandle,
}: InstagramFeedProps) {
  return (
    <section className="bg-goku w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <h2 className="font-bold text-3xl text-bulma font-sans">{title}</h2>
          {profileHandle && (
            <a
              href="#"
              className="text-piccolo text-sm font-semibold flex items-center gap-2 hover:underline underline-offset-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="3" />
                <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
              </svg>
              {profileHandle}
            </a>
          )}
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
          {images.map((img, i) => (
            <a
              key={i}
              href={img.href ?? '#'}
              className="group block aspect-square overflow-hidden rounded-s-md bg-gohan"
              aria-label={img.alt}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
