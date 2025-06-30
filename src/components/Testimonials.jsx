import React, { useEffect, useRef, useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Award, TrendingUp } from 'lucide-react'

/**
 * Testimonials section component with success stories and statistics
 * Features carousel functionality and animated statistics using Tailwind CSS
 */
const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Software Engineer',
      company: 'Google',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Beyond Career transformed my approach to job hunting. The personalized mentorship and interview preparation helped me land my dream job at Google. The guidance was invaluable!',
      rating: 5,
      achievement: 'Secured position at Google with 40% salary increase'
    },
    {
      id: 2,
      name: 'Rahul Patel',
      role: 'Product Manager',
      company: 'Microsoft',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The career guidance program helped me transition from engineering to product management. The mentors provided industry insights that I couldn\'t find anywhere else.',
      rating: 5,
      achievement: 'Successfully transitioned to Product Management role'
    },
    {
      id: 3,
      name: 'Ananya Gupta',
      role: 'Data Scientist',
      company: 'Amazon',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The internship program at Beyond Career gave me hands-on experience and direct access to industry professionals. It was the stepping stone to my current role at Amazon.',
      rating: 5,
      achievement: 'Landed Data Scientist role at Amazon after internship'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Consultant',
      company: 'McKinsey & Company',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Beyond Career\'s comprehensive approach to career development is unmatched. From skill assessment to interview preparation, they covered everything I needed to succeed.',
      rating: 5,
      achievement: 'Joined McKinsey & Company as Management Consultant'
    }
  ]

  // Statistics data
  const statistics = [
    {
      icon: Award,
      value: '95%',
      label: 'Success Rate',
      description: 'Students who secure their desired positions'
    },
    {
      icon: TrendingUp,
      value: '60%',
      label: 'Salary Increase',
      description: 'Average salary improvement after our program'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Student Rating',
      description: 'Average satisfaction score from our students'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
  }

  return (
    <section 
      id="testimonials" 
      className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-800 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="heading-lg text-gray-900 mb-6">Success Stories</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from students who have transformed their careers with Beyond Career
          </p>
        </div>

        {/* Statistics */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:mb-20 transition-all duration-800 delay-200 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          {statistics.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={28} className="text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className={`transition-all duration-800 delay-400 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation buttons */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary-600 hover:border-primary-300 transition-all duration-200 z-10"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary-600 hover:border-primary-300 transition-all duration-200 z-10"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>

            {/* Testimonial content */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-6 right-6 text-primary-200">
                <Quote size={48} />
              </div>
              
              <div className="relative">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center text-accent-600 mb-8">
                  <Award size={20} className="mr-3 flex-shrink-0" />
                  <span className="font-medium">{testimonials[currentTestimonial].achievement}</span>
                </div>

                <div className="flex items-center">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={`${testimonials[currentTestimonial].name} - ${testimonials[currentTestimonial].role} at ${testimonials[currentTestimonial].company}`}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary-500 mr-4"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-lg text-gray-900">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                    <div className="text-primary-600 font-medium">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-primary-600 scale-125' 
                      : 'bg-gray-300 hover:bg-primary-300'
                  }`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials