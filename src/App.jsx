import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="bg-dots"></div>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />      
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
