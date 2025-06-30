import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * Main App component that renders the complete Beyond Career landing page
 * Implements all required sections with proper semantic structure
 */
function App() {
  return (
    <div className="App">
      {/* Skip to main content link for accessibility */}
      <a href="#main" className="sr-only">Skip to main content</a>
      
      {/* Header with navigation */}
      <Header />
      
      {/* Main content area */}
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App