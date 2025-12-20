import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';
import IntroAnimation from './components/IntroAnimation';

const App = () => {
  const [isIntroDone, setIsIntroDone] = useState(false);
  return (
    <>
      {!isIntroDone && <IntroAnimation onFinish={() => setIsIntroDone(true)} />}
      {isIntroDone && (
        <div className='relative gradient text-white'>
          {/* <ParticlesBackground /> */}
          <CustomCursor />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App;