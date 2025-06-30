import React, { useEffect, useRef, useState } from 'react'
import { GraduationCap, Heart, Users, Lightbulb, Target, Award } from 'lucide-react'

/**
 * About section component showcasing company mission, vision, and founding story
 * Features intersection observer for scroll animations using Tailwind CSS
 */
const About = () => {
  const [isVisible, setIsVisible] = useState(false)
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

  // Core values data
  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We are driven by an unwavering commitment to helping students achieve their highest potential.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a supportive ecosystem where students, mentors, and industry professionals collaborate.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Growth',
      description: 'Continuously evolving our methods to meet the changing demands of the modern workplace.'
    },
    {
      icon: Target,
      title: 'Results-Oriented',
      description: 'Focused on delivering measurable outcomes that transform careers and lives.'
    }
  ]

  return (
    <section 
      id="about" 
      className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-800 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="heading-lg text-gray-900 mb-6">About Beyond Career</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between academic excellence and professional success
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-20">
          {/* Mission & Vision */}
          <div className={`space-y-8 transition-all duration-800 delay-200 ${
            isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower students with the knowledge, skills, and connections they need to build 
                successful careers in today's competitive landscape. We believe every student deserves 
                access to quality career guidance and mentorship.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mr-4">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the leading platform that transforms how students transition from academia 
                to professional success, creating a world where talent meets opportunity seamlessly.
              </p>
            </div>
          </div>

          {/* Founding Story */}
          <div className={`transition-all duration-800 delay-400 ${
            isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Story</h3>
              <div className="space-y-6">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="IIT Kharagpur campus representing our founding roots"
                    className="w-full h-48 object-cover rounded-xl mb-6 hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2020 by a group of passionate IIT Kharagpur alumni, Beyond Career was born 
                    from a simple observation: despite having world-class education, many talented students 
                    struggled to navigate the complex transition from college to career.
                  </p>
                  <p>
                    Having experienced the challenges firsthand and witnessed the transformative power of 
                    proper guidance and mentorship, our founders decided to create a platform that would 
                    democratize access to career development resources.
                  </p>
                  <p>
                    Today, we're proud to have guided over 10,000 students across India, helping them 
                    secure positions at top companies and build fulfilling careers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className={`transition-all duration-800 delay-600 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-3xl font-semibold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <value.icon size={28} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About