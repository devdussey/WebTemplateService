import React, { useEffect, useState } from 'react';
import { initGA } from './services/analyticsService';
import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ReviewsSection from './components/ReviewsSection';
import Contact from './components/Contact';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Initialize dark mode once on load
  useDarkMode();

  useEffect(() => {
    initGA();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About />
        <Services />
        <ReviewsSection />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
