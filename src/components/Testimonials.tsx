export interface Testimonial {
  quote: string
  author: string
  role?: string
  avatar?: string
}

export interface TestimonialsProps {
  title?: string
  testimonials: Testimonial[]
}

export default function Testimonials({
  title = 'What our customers say',
  testimonials,
}: TestimonialsProps) {
  return (
    <section className="bg-goku w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-bold text-3xl text-bulma font-sans text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gohan rounded-s-lg p-8 flex flex-col gap-6"
            >
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#aa3bff" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-bulma leading-relaxed flex-1 text-sm">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-s-rounded overflow-hidden bg-beerus shrink-0">
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-piccolo/15 flex items-center justify-center text-piccolo font-bold text-sm">
                      {t.author.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-bulma text-sm">{t.author}</p>
                  {t.role && <p className="text-trunks text-xs">{t.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
