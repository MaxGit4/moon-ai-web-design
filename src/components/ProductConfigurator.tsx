import { useState, useEffect, useRef, type ReactNode } from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────

type Goal = {
  id: string
  label: string
  micro: string
  icon: ReactNode
}

type Profile = {
  title: string
  tagline: string
  collection: string
}

// ─── Icons ───────────────────────────────────────────────────────────────────

function IconBolt() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function IconBalance() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M8 9a4 4 0 0 0 8 0" />
    </svg>
  )
}

function IconTarget() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function IconCompass() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

function IconLeaf() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

function IconMoon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

// ─── Data ────────────────────────────────────────────────────────────────────

const GOALS: Goal[] = [
  { id: 'energised', label: 'Feel energised',  micro: 'High energy, active living',     icon: <IconBolt /> },
  { id: 'balance',   label: 'Find balance',     micro: 'Grounding, calm routines',       icon: <IconBalance /> },
  { id: 'focus',     label: 'Focus & clarity',  micro: 'Mental space, deep work',        icon: <IconTarget /> },
  { id: 'explore',   label: 'Explore more',     micro: 'New experiences, discovery',     icon: <IconCompass /> },
  { id: 'slow',      label: 'Slow down',        micro: 'Rest, presence, simplicity',     icon: <IconLeaf /> },
  { id: 'sleep',     label: 'Sleep better',     micro: 'Recovery, night rituals',        icon: <IconMoon /> },
]

const PROFILES: Record<string, Profile> = {
  focus: {
    title: 'The Achiever',
    tagline: 'Clarity and intention are your superpowers. Less noise, more meaning.',
    collection: 'Shop the Focus Series',
  },
  energised: {
    title: 'The Activator',
    tagline: 'You bring energy to everything you touch. Your space should keep up.',
    collection: 'Explore the Vitality Collection',
  },
  explore: {
    title: 'The Explorer',
    tagline: 'Curiosity leads you to unexpected places. Your objects should tell stories.',
    collection: 'Discover the Earth Collection',
  },
  balance: {
    title: 'The Restorer',
    tagline: 'You create harmony wherever you are. Beauty lives in the everyday.',
    collection: 'Explore the Balance Collection',
  },
  slow: {
    title: 'The Wanderer',
    tagline: 'You find meaning in the quiet moments. Objects that reward stillness.',
    collection: 'Browse the Slow Living Series',
  },
  sleep: {
    title: 'The Dreamer',
    tagline: 'You understand the power of deep rest. Your night rituals deserve intention.',
    collection: 'Discover the Night Collection',
  },
}

const PRIORITY = ['focus', 'energised', 'explore', 'balance', 'slow', 'sleep']

function deriveProfile(selected: string[]): Profile | null {
  if (selected.length === 0) return null
  for (const key of PRIORITY) {
    if (selected.includes(key)) return PROFILES[key]
  }
  return null
}

function useGoalSelector() {
  const [selected, setSelected] = useState<string[]>([])
  const toggle = (id: string) =>
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  return { selected, toggle, profile: deriveProfile(selected) }
}

// ─── Component ───────────────────────────────────────────────────────────────

function ProductConfiguratorInner() {
  const { selected, toggle, profile } = useGoalSelector()
  const [mounted, setMounted] = useState(false)
  const [justSelected, setJustSelected] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    let timer: ReturnType<typeof setTimeout>
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setMounted(true), 200)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => { observer.disconnect(); clearTimeout(timer) }
  }, [])

  const handleToggle = (id: string) => {
    const wasSelected = selected.includes(id)
    toggle(id)
    if (!wasSelected) {
      setJustSelected(prev => new Set([...prev, id]))
      setTimeout(() => {
        setJustSelected(prev => {
          const next = new Set(prev)
          next.delete(id)
          return next
        })
      }, 300)
    }
  }

  return (
    <section ref={sectionRef} className="bg-hit w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-piccolo text-sm font-semibold uppercase tracking-widest mb-4">
            Your personal Moon
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-goku font-sans mb-4 leading-tight">
            What matters to you right now?
          </h2>
          <p className="text-trunks text-2xl">
            Pick what resonates — we'll shape your profile.
          </p>
        </div>

        <div
          className={`mb-3 transition-all duration-200 text-center ${
            selected.length > 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
        >
          <span className="text-xs text-white/50">
            {selected.length} of {GOALS.length} selected
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {GOALS.map((g, i) => {
            const isSelected = selected.includes(g.id)
            const justPicked = justSelected.has(g.id)
            return (
              <div
                key={g.id}
                style={{ transitionDelay: `${i * 75}ms` }}
                className={`transition-[opacity,transform] duration-500 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <button
                  onClick={() => handleToggle(g.id)}
                  aria-pressed={isSelected}
                  className={[
                    'w-full flex items-center gap-4 p-5 rounded-s-lg border transition-[transform,background-color,border-color] duration-300 cursor-pointer text-left',
                    isSelected
                      ? 'bg-piccolo border-piccolo scale-[1.02]'
                      : 'bg-hit border-white/10 hover:bg-piccolo/20 hover:border-piccolo/40 scale-100',
                  ].join(' ')}
                >
                  <span
                    className={`shrink-0 transition-transform duration-150 ${
                      justPicked ? 'scale-125' : 'scale-100'
                    } ${isSelected ? 'text-white' : 'text-trunks'}`}
                  >
                    {g.icon}
                  </span>
                  <div>
                    <p className={`font-semibold text-sm mb-0.5 ${isSelected ? 'text-white' : 'text-white/70'}`}>
                      {g.label}
                    </p>
                    <p className={`text-xs ${isSelected ? 'text-white/70' : 'text-trunks'}`}>
                      {g.micro}
                    </p>
                  </div>
                </button>
              </div>
            )
          })}
        </div>

        <div
          className={`mt-10 transition-all duration-300 ${
            selected.length > 0
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {profile && (
            <div className="p-6 lg:p-8 bg-goku border-l-4 border-piccolo rounded-s-lg">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <p className="text-xs text-piccolo font-semibold uppercase tracking-widest mb-2">
                    Your Moon profile
                  </p>
                  <p className="text-2xl lg:text-3xl font-bold text-bulma mb-2">
                    {profile.title}
                  </p>
                  <p className="text-trunks">{profile.tagline}</p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-piccolo text-white font-semibold px-8 py-3 rounded-i-rounded hover:bg-piccolo/90 transition-colors shrink-0 text-sm"
                >
                  {profile.collection} →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Export ──────────────────────────────────────────────────────────────────

export default function ProductConfigurator() {
  return <ProductConfiguratorInner />
}
