'use client'

import { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaHeart } from 'react-icons/fa'
import { personalInfo } from '@/lib/data/portfolio-data'

export default function Contact() {
  const [inView, setInView] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('contact')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formPayload = new FormData()
      formPayload.append('name', formData.name)
      formPayload.append('email', formData.email)
      formPayload.append('message', formData.message)
      formPayload.append('_subject', `Portfolio Contact from ${formData.name}`)
      formPayload.append('_captcha', 'false')

      const response = await fetch('https://formsubmit.co/aymanubejdij@gmail.com', {
        method: 'POST',
        body: formPayload,
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* EJ Contact Badge */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-display font-black text-lg tracking-tighter">EJ</span>
              </div>
              <div className="text-white">
                <div className="font-display font-bold text-lg tracking-wide">GET IN TOUCH</div>
                <div className="text-blue-200 text-sm font-medium">Let&apos;s collaborate</div>
              </div>
            </div>
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 ej-section-header">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-blue-600 rounded-full"></div>
            <div className="relative">
              <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
            </div>
            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent via-blue-600 to-blue-600 rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
            Ready to bring your ideas to life? Let&apos;s discuss how{' '}
            <span className="font-medium text-blue-400 relative">
              <span className="absolute -inset-1 bg-blue-900/30 rounded blur opacity-30"></span>
              <span className="relative">EJ can collaborate</span>
            </span>{' '}
            with you to create something{' '}
            <span className="font-medium text-slate-300">extraordinary</span>!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '300ms' }}>
            <div className="premium-card p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 ej-logo">
                  <span className="text-lg tracking-tighter">EJ</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Get In Touch
                </h3>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 p-4 bg-blue-900/20 rounded-2xl hover:bg-blue-900/30 transition-colors group">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 bg-blue-900/20 rounded-2xl hover:bg-blue-900/30 transition-colors group">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-blue-900/20 rounded-2xl hover:bg-blue-900/30 transition-colors group">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-blue-400 font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-blue-800">
                <h4 className="text-lg font-semibold text-white mb-6">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                    aria-label="Email"
                  >
                    <FaEnvelope size={20} />
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/ejmen-al-ubejdij"
                    className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  
                  <a
                    href="https://github.com/ejmen"
                    className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-800 text-white shadow-lg hover:shadow-blue-700/25 transition-all duration-300 transform hover:scale-105"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '500ms' }}>
            <div className="premium-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <FaPaperPlane className="text-blue-600" />
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800 border border-blue-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800 border border-blue-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-slate-800 border border-blue-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-white"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className={`w-full py-4 rounded-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden ${
                    isSubmitting || !formData.name || !formData.email || !formData.message
                      ? 'bg-slate-600 cursor-not-allowed text-slate-400'
                      : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-500/25'
                  }`}
                >
                  <FaPaperPlane className={isSubmitting ? 'animate-pulse' : ''} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && formData.name && formData.email && formData.message && <div className="absolute inset-0 shimmer rounded-xl"></div>}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="text-green-400 text-center py-2 bg-green-400/10 rounded-xl border border-green-400/20">
                    ✓ Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-400 text-center py-2 bg-red-400/10 rounded-xl border border-red-400/20">
                    ✗ Failed to send message. Please try emailing me directly at aymanubejdij@gmail.com
                  </div>
                )}
                
              </form>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
          <div className="glass p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Something Amazing?</h3>
            <p className="text-slate-400 mb-6">
              I&apos;m always excited to work on new projects and collaborate with passionate people.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <FaEnvelope />
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}