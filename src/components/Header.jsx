import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

/**
 * Header component with responsive navigation using Tailwind CSS
 * Features smooth scrolling and mobile hamburger menu
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation items
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Success Stories' },
    { href: '#contact', label: 'Contact' }
  ]

  // Handle smooth scrolling to sections
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Close mobile menu after navigation
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav className="container-custom" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-xl lg:text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors duration-200"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Beyond Career
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8" role="menubar">
            {navItems.map((item) => (
              <li key={item.href} role="none">
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                  onClick={(e) => handleNavClick(e, item.href)}
                  role="menuitem"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-64 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
          id="mobile-menu"
          role="menu"
        >
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
                onClick={(e) => handleNavClick(e, item.href)}
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header