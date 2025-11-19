import React from 'react'

export const Navbar = () => (
  <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/10">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500" />
        <span className="text-white font-semibold">Sunridge-AI</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/80">
        <a href="#who-we-help" className="hover:text-white">Who we help</a>
        <a href="#benefits" className="hover:text-white">Benefits</a>
        <a href="#how-it-works" className="hover:text-white">How it works</a>
        <a href="#case-studies" className="hover:text-white">Case studies</a>
        <a href="#faq" className="hover:text-white">FAQ</a>
      </nav>
      <a
        href="https://calendly.com/"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold px-4 py-2 shadow-lg shadow-blue-500/20 transition-colors"
      >
        Schedule a Call
      </a>
    </div>
  </header>
)

export const Footer = () => (
  <footer className="border-t border-white/10 py-10">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500" />
        <span className="text-blue-200/80 text-sm">Sunridge-AI</span>
      </div>
      <p className="text-blue-300/60 text-xs">© {new Date().getFullYear()} Sunridge-AI. All rights reserved.</p>
    </div>
  </footer>
)
