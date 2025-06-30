import React from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp,
  Heart
} from 'lucide-react'

/**
 * Footer component with company information and links
 * Features back-to-top functionality and comprehensive site navigation using Tailwind CSS
 */
const Footer = () => {
  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Navigation links
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Success Stories' },
    { href: '#contact', label: 'Contact' }
  ]

  const serviceLinks = [
    { href: '#services', label: 'Career Guidance' },
    { href: '#services', label: 'Internship Programs' },
    { href: '#services', label: 'Mentorship' },
    { href: '#services', label: 'Community Engagement' },
    { href: '#services', label: 'Skill Development' }
  ]

  const legalLinks = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Cookie Policy' },
    { href: '#', label: 'Disclaimer' }
  ]

  // Social media links
  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/beyondcareer' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/beyondcareer' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/company/beyondcareer' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/beyondcareer' }
  ]

  // Handle navigation clicks
  const handleNavClick = (e, href) => {
    e.preventDefault()
    if (href.startsWith('#')) {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden" role="contentinfo">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      {/* Back to top button */}
      <button 
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-xl z-50"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container-custom relative">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-16 lg:py-20">
          {/* Company information */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Beyond Career
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Empowering students with personalized career guidance, exclusive internship 
              opportunities, and mentorship programs. Founded by IIT Kharagpur alumni.
            </p>
            
            {/* Contact information */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-3 flex-shrink-0" />
                <a href="mailto:hello@beyondcareer.com" className="hover:text-primary-400 transition-colors duration-200">
                  hello@beyondcareer.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary-400 transition-colors duration-200">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-3 flex-shrink-0" />
                <span>IIT Kharagpur, West Bengal, India</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary-500"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary-500"></span>
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter and social */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for career tips and opportunities.
              </p>
              
              {/* Newsletter signup */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  aria-label="Email address for newsletter"
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social media links */}
            <div className="lg:text-right">
              <span className="text-gray-300 block mb-4">Follow Us:</span>
              <div className="flex lg:justify-end space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-200 hover:-translate-y-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-center lg:text-left">
              <p className="flex items-center justify-center lg:justify-start">
                © {new Date().getFullYear()} Beyond Career. All rights reserved. 
                Made with <Heart size={14} className="text-red-500 mx-1 animate-pulse-slow" /> for students.
              </p>
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 text-sm">
              {legalLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    {link.label}
                  </a>
                  {index < legalLinks.length - 1 && <span className="text-gray-600">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer