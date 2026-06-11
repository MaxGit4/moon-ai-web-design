import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import CategoryGrid from './components/CategoryGrid'
import FeaturedProducts from './components/FeaturedProducts'
import PromoBanner from './components/PromoBanner'
import ValueProposal from './components/ValueProposal'
import CollectionHighlight from './components/CollectionHighlight'
import Testimonials from './components/Testimonials'
import BrandStory from './components/BrandStory'
import Newsletter from './components/Newsletter'
import InstagramFeed from './components/InstagramFeed'
import Footer from './components/Footer'

// ─── Placeholder images — replace with Unsplash spheric-nature photos ──────────
// Recommended search: https://unsplash.com/s/photos/sphere-nature
const img = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

// ─── Static data ────────────────────────────────────────────────────────────────

const navLinks = [
  { label: 'Collections', href: '#' },
  { label: 'Shop', href: '#' },
  { label: 'Stories', href: '#' },
  { label: 'About', href: '#' },
]

const categories = [
  { label: 'Earth Forms', image: img('moon-cat-earth', 600, 600), href: '#' },
  { label: 'Forest Objects', image: img('moon-cat-forest', 600, 600), href: '#' },
  { label: 'Water & Stone', image: img('moon-cat-stone', 600, 600), href: '#' },
  { label: 'Sky Series', image: img('moon-cat-sky', 600, 600), href: '#' },
]

const products = [
  {
    name: 'Sphere Vase No. 01',
    price: '€ 89',
    image: img('moon-p1', 600, 800),
    badge: 'New',
    href: '#',
  },
  {
    name: 'Moss Bowl',
    price: '€ 62',
    image: img('moon-p2', 600, 800),
    href: '#',
  },
  {
    name: 'Terra Candle Holder',
    price: '€ 45',
    image: img('moon-p3', 600, 800),
    badge: 'Bestseller',
    href: '#',
  },
  {
    name: 'Stone Diffuser',
    price: '€ 128',
    image: img('moon-p4', 600, 800),
    href: '#',
  },
]

const values = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    title: 'Sustainably Sourced',
    body: 'Every material is ethically harvested and certified for environmental responsibility.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Carbon Neutral Shipping',
    body: 'We offset 100% of our logistics emissions through verified reforestation projects.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l1.88 5.76a2 2 0 0 0 1.27 1.27L21 12l-5.85 1.97a2 2 0 0 0-1.27 1.27L12 21l-1.88-5.76a2 2 0 0 0-1.27-1.27L3 12l5.85-1.97a2 2 0 0 0 1.27-1.27z" />
      </svg>
    ),
    title: 'Handcrafted Quality',
    body: 'Each object is individually shaped by skilled artisans using traditional techniques.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Made to Last',
    body: 'Designed with longevity in mind — objects that age gracefully and never go out of style.',
  },
]

const testimonials = [
  {
    quote:
      'The sphere vase has become the centrepiece of our living room. The quality is extraordinary — it feels like it was made to last a lifetime.',
    author: 'Maria K.',
    role: 'Interior Designer',
    avatar: img('moon-av1', 80, 80),
  },
  {
    quote:
      'I love how everything is designed to work together. The earthy palette ties all my Moon pieces into a coherent story.',
    author: 'Jonas B.',
    role: 'Photographer',
    avatar: img('moon-av2', 80, 80),
  },
  {
    quote:
      'Fast shipping, beautiful packaging, and the moss bowl exceeded my expectations. This brand really cares about the full experience.',
    author: 'Sophie T.',
    role: 'Architect',
    avatar: img('moon-av3', 80, 80),
  },
]

const instagramImages = [
  { src: img('moon-ig1', 400, 400), alt: 'Sphere vase in morning light', href: '#' },
  { src: img('moon-ig2', 400, 400), alt: 'Forest objects collection', href: '#' },
  { src: img('moon-ig3', 400, 400), alt: 'Stone and earth forms', href: '#' },
  { src: img('moon-ig4', 400, 400), alt: 'Coastal collection detail', href: '#' },
  { src: img('moon-ig5', 400, 400), alt: 'Studio detail shot', href: '#' },
  { src: img('moon-ig6', 400, 400), alt: 'Workspace view', href: '#' },
]

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'New Arrivals', href: '#' },
      { label: 'Collections', href: '#' },
      { label: 'Bestsellers', href: '#' },
      { label: 'Sale', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Shipping & Returns', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Care Guides', href: '#' },
    ],
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <AnnouncementBar
        message="Free shipping on orders over €75 — limited time."
        cta={{ label: 'Shop now', href: '#' }}
      />

      <Header
        logo="Moon"
        navLinks={navLinks}
        ctaLabel="Shop Now"
        ctaHref="#"
      />

      <main>
        <HeroBanner
          headline="Nature Meets Design"
          subline="A curated collection of objects shaped by the natural world. Each piece tells a story of the earth, wind, and sea."
          primaryCta={{ label: 'Explore Collection', href: '#' }}
          secondaryCta={{ label: 'Our Story', href: '#' }}
          image={img('moon-hero', 800, 1000)}
          imageAlt="A spherical ceramic vase with a matte earth tone finish"
        />

        <CategoryGrid
          title="Shop by Category"
          categories={categories}
        />

        <FeaturedProducts
          title="Featured Products"
          products={products}
          cta={{ label: 'View all products', href: '#' }}
        />

        <PromoBanner
          headline="The Earth Collection — Now Available"
          subline="Inspired by volcanic landscapes and mineral deposits. Limited edition pieces crafted in collaboration with our atelier in Portugal."
          cta={{ label: 'Discover the Collection', href: '#' }}
          image={img('moon-promo', 1200, 800)}
          layout="split"
          theme="dark"
        />

        <ValueProposal values={values} />

        <CollectionHighlight
          title="The Forest Series"
          body="Drawn from the textures, hues, and forms of old-growth forests. Each piece in the Forest Series captures a moment of stillness — a mossy stone, a shaft of light through canopy."
          cta={{ label: 'Explore the Series', href: '#' }}
          image={img('moon-col1', 1000, 1200)}
          alignment="left"
        />

        <Testimonials
          title="From our community"
          testimonials={testimonials}
        />

        <CollectionHighlight
          title="The Coastal Edit"
          body="Salt-weathered forms, sea-smoothed surfaces, and the infinite palette of shorelines at dusk. The Coastal Edit brings the edge of the ocean into your home."
          cta={{ label: 'Shop Coastal', href: '#' }}
          image={img('moon-col2', 1000, 1200)}
          alignment="right"
        />

        <BrandStory
          headline="Born from the belief that objects should connect us to nature"
          body="Moon started in a small studio in Copenhagen, surrounded by forests and coastlines. We believe that everyday objects can carry meaning — that a bowl can remind you of the sea, a candle of the forest floor. Everything we make begins with a material and a story."
          image={img('moon-story', 800, 1000)}
          cta={{ label: 'Read Our Story', href: '#' }}
        />

        <Newsletter
          headline="Join the Moon Circle"
          subline="New collections, stories from our makers, and early access to limited releases."
          placeholder="your@email.com"
        />

        <InstagramFeed
          title="Follow Our Journey"
          images={instagramImages}
          profileHandle="@moon.objects"
        />
      </main>

      <Footer
        logo="Moon"
        columns={footerColumns}
      />
    </>
  )
}
