import React from 'react'
import Hero from './components/Hero'
import ContentSections from './components/ContentSections'
import { Navbar, Footer } from './components/NavFooter'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(56,189,248,0.15),transparent_60%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <ContentSections />
      </main>
      <Footer />
    </div>
  )
}

export default App
