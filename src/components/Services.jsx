import React, { useEffect, useRef, useState } from 'react'
import { 
  Compass, 
  Briefcase, 
  Users, 
  MessageCircle, 
  BookOpen, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

/**
 * Services section component showcasing all offered services
 * Features interactive service cards with detailed information using Tailwind CSS
 */
const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)
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

  // Services data
  const services = [
    {
      icon: Compass,
      title: 'Career Guidance',
      subtitle: 'Personalized Career Roadmaps',
      description: 'Get expert guidance tailored to your unique strengths, interests, and career aspirations.',
      features: [
        'One-on-one career counseling sessions',
        'Personality and aptitude assessments',
        'Industry trend analysis and insights',
        'Skill gap identification and development plans',
        'Career transition support'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Briefcase,
      title: 'Internship Opportunities',
      subtitle: 'Exclusive Industry Partnerships',
      description: 'Access premium internship opportunities with top companies across various industries.',
      features: [
        'Curated internship positions',
        'Direct company partnerships',
        'Application support and guidance',
        'Interview preparation sessions',
        'Performance tracking and feedback'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Mentorship Programs',
      subtitle: 'Learn from Industry Leaders',
      description: 'Connect with experienced professionals who provide ongoing support and guidance.',
      features: [
        'Matched mentor-mentee pairing',
        'Regular mentoring sessions',
        'Industry-specific expertise',
        'Goal setting and progress tracking',
        'Networking opportunities'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MessageCircle,
      title: 'Community Engagement',
      subtitle: 'Collaborative Learning Environment',
      description: 'Join a vibrant community of like-minded individuals focused on career growth.',
      features: [
        'Peer-to-peer learning groups',
        'Industry networking events',
        'Skill-sharing workshops',
        'Career success celebrations',
        'Alumni network access'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  // Additional features
  const additionalFeatures = [
    {
      icon: BookOpen,
      title: 'Skill Development',
      description: 'Comprehensive courses and workshops to enhance your professional skills'
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Stay updated with latest industry trends and job market dynamics'
    }
  ]

  return (
    <section 
      id="services" 
      className="section-padding bg-white relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-800 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="heading-lg text-gray-900 mb-6">Our Services</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive career development solutions designed to accelerate your professional journey
          </p>
        </div>

        {/* Main Services Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-20 transition-all duration-800 delay-200 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${
                activeService === index 
                  ? 'border-primary-500 shadow-xl' 
                  : 'border-gray-100 hover:border-primary-300'
              }`}
              onMouseEnter={() => setActiveService(index)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm font-medium text-gray-500">{service.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <div className="mb-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle size={16} className="text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 group">
                Learn More
                <ArrowRight size={16} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className={`mb-16 lg:mb-20 transition-all duration-800 delay-400 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-3xl font-semibold text-gray-900 text-center mb-12">Plus More Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-center text-white transition-all duration-800 delay-600 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Ready to Transform Your Career?</h3>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of students who have successfully launched their careers with Beyond Career
            </p>
            <button className="btn btn-lg bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700 group">
              Get Started Today
              <ArrowRight size={20} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services