import React, { useEffect, useState } from 'react'
import { ArrowRight, Play, Users, Award, Target } from 'lucide-react'

/**
 * Hero section component with compelling headline and call-to-action
 * Features animated statistics and professional background using Tailwind CSS
 */
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Statistics data
  const stats = [
    { icon: Users, value: '10,000+', label: 'Students Guided' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: Target, value: '500+', label: 'Companies Connected' }
  ]

  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWatchDemo = () => {
    // Placeholder for demo video functionality
    alert('Demo video coming soon!')
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
      role="banner"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-secondary-600/80 to-accent-600/90 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Students collaborating in modern workspace"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      <div className="container-custom relative z-20">
        <div className="text-center text-white max-w-5xl mx-auto">
          {/* Main content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <h1 className="heading-xl mb-6 text-white">
              Empowering Your{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Career Journey
              </span>{' '}
              Beyond Limits
            </h1>
            
            <p className="text-lg lg:text-xl leading-relaxed mb-8 text-white/90 max-w-3xl mx-auto">
              Founded by IIT Kharagpur alumni, Beyond Career bridges the gap between academic excellence 
              and professional success. We provide personalized career guidance, exclusive internship 
              opportunities, and mentorship programs that transform potential into achievement.
            </p>
            
            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                className="btn btn-primary btn-lg group"
                onClick={handleCTAClick}
                aria-label="Start your career journey with Beyond Career"
              >
                Start Your Journey
                <ArrowRight size={20} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              
              <button 
                className="btn btn-secondary btn-lg group bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900"
                onClick={handleWatchDemo}
                aria-label="Watch our demo video"
              >
                <Play size={20} className="mr-2 transition-transform duration-200 group-hover:scale-110" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Statistics */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <stat.icon size={24} className="lg:w-8 lg:h-8 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm lg:text-base text-white/80 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero