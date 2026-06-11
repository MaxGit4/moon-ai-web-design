import type { ReactNode } from 'react'

export interface Value {
  icon: ReactNode
  title: string
  body: string
}

export interface ValueProposalProps {
  title?: string
  values: Value[]
}

export default function ValueProposal({ title, values }: ValueProposalProps) {
  return (
    <section className="bg-goku w-full py-16 border-t border-beerus border-b">
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <h2 className="font-bold text-3xl text-bulma font-sans text-center mb-12">{title}</h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col items-start gap-4">
              <div className="w-11 h-11 rounded-s-md bg-piccolo/10 flex items-center justify-center text-piccolo shrink-0">
                {v.icon}
              </div>
              <div>
                <h3 className="font-semibold text-bulma mb-2 font-sans">{v.title}</h3>
                <p className="text-trunks text-sm leading-relaxed">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
