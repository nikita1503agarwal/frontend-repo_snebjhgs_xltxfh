import React from 'react'

export const Section = ({ id, title, children, kicker }) => (
  <section id={id} className="relative py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-300/70 mb-3">{kicker}</p>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">{title}</h2>
      <div className="prose prose-invert max-w-none">
        {children}
      </div>
    </div>
  </section>
)

export const CardGrid = ({ children, cols = 'md:grid-cols-2 lg:grid-cols-3' }) => (
  <div className={`grid gap-6 ${cols}`}>
    {children}
  </div>
)

export const Card = ({ title, children }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <div className="text-blue-100/90 text-sm leading-relaxed">{children}</div>
  </div>
)
