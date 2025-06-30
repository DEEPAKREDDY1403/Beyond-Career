import React, { useEffect, useRef, useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

/**
 * Contact section component with form and company information
 * Features form validation and social media links using Tailwind CSS
 */
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Contact information
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@beyondcareer.com',
      link: 'mailto:hello@beyondcareer.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 1234567890',
      link: 'tel:+911234567890'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'IIT Kharagpur, West Bengal, India',
      link: 'https://maps.google.com/?q=IIT+Kharagpur'
    }
  ]

  // Social media links
  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/beyondcareer' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/beyondcareer' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/company/beyondcareer' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/beyondcareer' }
  ]

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear form status when user starts typing
    if (formStatus.message) {
      setFormStatus({ type: '', message: '' })
    }
  }

  // Validate form data
  const validateForm = () => {
    const { name, email, message } = formData
    
    if (!name.trim()) {
      return 'Please enter your name'
    }
    
    if (!email.trim()) {
      return 'Please enter your email'
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Please enter a valid email address'
    }
    
    if (!message.trim()) {
      return 'Please enter your message'
    }
    
    if (message.trim().length < 10) {
      return 'Message must be at least 10 characters long'
    }
    
    return null
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setFormStatus({ type: 'error', message: validationError })
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setFormStatus({ 
        type: 'success', 
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.' 
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again later.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="contact" 
      className="section-padding bg-white relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-800 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="heading-lg text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your career journey? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className={`transition-all duration-800 delay-200 ${
            isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Reach out to us through any of the following channels. Our team is ready to assist you.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-primary-300 hover:bg-gray-50 transition-all duration-200 group"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{info.title}</div>
                    <div className="text-gray-600">{info.content}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary-500 hover:text-white transition-all duration-200 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-800 delay-400 ${
            isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Send us a Message</h3>
              
              {/* Form Status */}
              {formStatus.message && (
                <div className={`flex items-center p-4 rounded-lg mb-6 ${
                  formStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {formStatus.type === 'success' ? (
                    <CheckCircle size={20} className="mr-3 flex-shrink-0" />
                  ) : (
                    <AlertCircle size={20} className="mr-3 flex-shrink-0" />
                  )}
                  <span className="text-sm font-medium">{formStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="career-guidance">Career Guidance</option>
                      <option value="internship">Internship Opportunities</option>
                      <option value="mentorship">Mentorship Program</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-vertical"
                    placeholder="Tell us how we can help you..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full btn btn-primary btn-lg group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact