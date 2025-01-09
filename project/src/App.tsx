import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, Download, ExternalLink } from 'lucide-react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    education: <Education />,
    contact: <Contact />
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <NavBar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="pt-16">
        {sections[activeSection as keyof typeof sections]}
      </main>
    </div>
  );
}

export default App;