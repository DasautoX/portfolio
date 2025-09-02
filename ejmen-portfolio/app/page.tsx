import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Awards from '@/components/Awards'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingEJBadge from '@/components/FloatingEJBadge'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
      </main>
      
      <Footer />
      <FloatingEJBadge />
    </>
  )
}