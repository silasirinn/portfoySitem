import { SparkleCursor, AtmosphereBackground, useScrollReveal } from './components/effects.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import { Education, Experience } from './components/EducationExperience.jsx'
import Projects from './components/Projects.jsx'
import { Contact, Footer } from './components/ContactFooter.jsx'

export default function App() {
  useScrollReveal()

  return (
    <div className="relative">
      <AtmosphereBackground />
      <SparkleCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
