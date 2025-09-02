'use client'

import { FaEnvelope, FaUser, FaCode } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* EJ Footer Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-20 h-20 ej-logo cursor-pointer transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                <span className="text-2xl tracking-tighter">EJ</span>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <h3 className="font-display text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Ejmen &quot;EJ&quot; Al-Ubejdij
            </span>
          </h3>
          
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            <span className="font-medium text-blue-400">Computer Engineering Student</span> |{' '}
            <span className="font-medium text-blue-400">Full-Stack Developer</span> |{' '}
            <span className="font-medium text-blue-400">AI Researcher</span>
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent via-blue-400 to-blue-400 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-sm font-black">EJ</span>
              </div>
              Navigation
            </h4>
            <div className="space-y-3">
              {['About', 'Experience', 'Projects', 'Contact'].map((link, index) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-lg bg-slate-800 group-hover:bg-blue-600 flex items-center justify-center transition-all duration-300">
                    <div className="w-1 h-1 bg-current rounded-full"></div>
                  </div>
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center">
                <FaEnvelope className="text-white text-sm" />
              </div>
              Contact EJ
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors duration-300">
                <div className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center">
                  <FaEnvelope className="text-xs" />
                </div>
                <span>aymanubejdij@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors duration-300">
                <div className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center">
                  <span className="text-xs">📞</span>
                </div>
                <span>+974 30783378</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors duration-300">
                <div className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center">
                  <span className="text-xs">📍</span>
                </div>
                <span>Doha, Qatar</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-sm font-black">✨</span>
              </div>
              Connect with EJ
            </h4>
            <div className="flex gap-4">
              <a 
                href="mailto:aymanubejdij@gmail.com"
                className="group w-12 h-12 rounded-2xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25"
                aria-label="Email EJ"
              >
                <FaEnvelope className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="https://linkedin.com/in/ejmen-al-ubejdij"
                className="group w-12 h-12 rounded-2xl bg-blue-700 hover:bg-blue-800 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-blue-600/25"
                aria-label="LinkedIn Profile"
              >
                <FaUser className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="https://github.com/ejmen"
                className="group w-12 h-12 rounded-2xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-slate-700/25"
                aria-label="GitHub Profile"
              >
                <FaCode className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
            <p className="text-sm text-slate-400 mt-6 leading-relaxed">
              Let&apos;s build something incredible together. EJ is always excited to collaborate on innovative projects and explore new opportunities.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-slate-700 rounded-full"></div>
            <div className="w-8 h-8 ej-logo">
              <span className="text-sm tracking-tighter">EJ</span>
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-slate-700 to-slate-700 rounded-full"></div>
          </div>
          <p className="text-slate-400 mb-2">
            © 2025 Ejmen &quot;EJ&quot; Al-Ubejdij. Crafted with passion using Next.js and Tailwind CSS.
          </p>
          <p className="text-sm text-slate-500">
            Designed & developed with ♥️ in Doha, Qatar
          </p>
        </div>
      </div>
    </footer>
  )
}