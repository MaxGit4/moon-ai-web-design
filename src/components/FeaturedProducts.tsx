export interface Product {
  name: string
  price: string
  image: string
  badge?: string
  href?: string
}

export interface FeaturedProductsProps {
  title?: string
  products: Product[]
  cta?: { label: string; href: string }
}

export default function FeaturedProducts({
  title = 'Featured Products',
  products,
  cta,
}: FeaturedProductsProps) {
  return (
    <section className="bg-goku w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-bold text-3xl text-bulma font-sans">{title}</h2>
          {cta && (
            <a href={cta.href} className="text-piccolo text-sm font-semibold hover:underline underline-offset-2">
              {cta.label} →
            </a>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((p, i) => (
            <a key={i} href={p.href ?? '#'} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-s-lg bg-gohan mb-4">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {p.badge && (
                  <span className="absolute top-3 left-3 bg-piccolo text-white text-xs font-semibold px-2.5 py-1 rounded-i-rounded">
                    {p.badge}
                  </span>
                )}
              </div>
              <p className="font-semibold text-bulma text-sm mb-1 group-hover:text-piccolo transition-colors">
                {p.name}
              </p>
              <p className="text-trunks text-sm">{p.price}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
