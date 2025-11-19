import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 sm:pt-28 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:pb-32">
        <div className="col-span-6 flex flex-col items-start">
          <span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs font-medium text-blue-200/80 mb-5">
            Sunridge-AI
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            AI Automation for Asset-Management Teams
          </h1>
          <p className="mt-5 text-lg text-blue-100/90 max-w-2xl">
            We help asset-management firms save time, automate leasing workflows, and eliminate repetitive admin using AI voice agents, intelligent workflows, and automation built for property operations.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold px-5 py-3 shadow-lg shadow-blue-500/20 transition-colors"
            >
              Schedule a Discovery Call
            </a>
            <p className="text-sm text-blue-200/70">ROI-focused, implementation in 7–14 days</p>
          </div>
        </div>
        <div className="col-span-6 mt-14 lg:mt-0">
          <div className="relative aspect-[4/3] w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_50%,rgba(59,130,246,0.15),rgba(147,51,234,0.12)_45%,rgba(251,146,60,0.1)_70%,transparent)]" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25),transparent_70%)]" />
    </section>
  )
}

export default Hero
