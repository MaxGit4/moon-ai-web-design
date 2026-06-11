export interface Category {
  label: string
  image: string
  href?: string
}

export interface CategoryGridProps {
  title?: string
  categories: Category[]
}

export default function CategoryGrid({
  title = 'Shop by Category',
  categories,
}: CategoryGridProps) {
  return (
    <section className="bg-gohan w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <h2 className="font-bold text-3xl text-bulma font-sans mb-10">{title}</h2>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <a key={i} href={cat.href ?? '#'} className="group block">
              <div className="aspect-square overflow-hidden rounded-s-lg bg-beerus mb-3">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="font-semibold text-bulma text-sm group-hover:text-piccolo transition-colors">
                {cat.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
