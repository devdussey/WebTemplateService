import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'quote', label: 'Get Quote' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img
              src="/logo.svg"
              alt="Your Company Logo"
              className="h-12 w-12 rounded-lg"
            />
            <div>
              <span className="text-xl font-bold text-green-500 dark:text-green-400">Your Company</span>
              <p className="text-xs text-gray-600 dark:text-gray-400">Services Template</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-white hover:bg-green-600 dark:hover:bg-green-500 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <span className="text-xl font-bold text-green-600 dark:text-green-400">Your Company</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300 dark:focus-visible:ring-green-500 ${
                    activeSection === item.id
                      ? 'bg-green-700 text-white shadow-md dark:bg-green-400 dark:text-gray-900'
                      : 'bg-green-600 text-white hover:bg-green-500 dark:bg-green-500 dark:text-gray-900 dark:hover:bg-green-400/90'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex-shrink-0">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-green-100/60 dark:border-green-900/40">
            <div className="px-3 pt-3 pb-4 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur rounded-xl shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-base font-semibold rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 dark:focus-visible:ring-green-500 ${
                    activeSection === item.id
                      ? 'bg-green-700 text-white shadow-md dark:bg-green-400 dark:text-gray-900'
                      : 'bg-green-600 text-white hover:bg-green-500 dark:bg-green-500 dark:text-gray-900 dark:hover:bg-green-400/90'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
