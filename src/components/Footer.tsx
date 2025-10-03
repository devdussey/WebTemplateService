import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { trackPhoneClick, trackEmailClick } from '../services/analyticsService';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Seasonal Lawn Care',
    'Snow Removal',
    'Skidsteer Services',
    'Tree Services',
    'Landscape Projects',
    'Material Removal'
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Get Quote', href: '#quote' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.svg"
                alt="Gawel's Grass Logo"
                className="h-10 w-10 rounded-lg"
              />
              <div>
                <span className="text-xl font-bold">Gawel's Grass</span>
                <p className="text-xs text-gray-400">Lawn Care & Landscaping</p>
              </div>
            </div>
            <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
              Professional lawn care and landscaping services for residential and commercial properties. Quality work, reliable service, and complete customer satisfaction.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300 dark:text-gray-400">
                <MapPin className="h-4 w-4 text-green-500 dark:text-green-400 flex-shrink-0" />
                <span>123 Market Street, Hometown, ST 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300 dark:text-gray-400">
                <Phone className="h-4 w-4 text-green-500 dark:text-green-400 flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="hover:text-white dark:hover:text-gray-200 transition-colors"
                  onClick={trackPhoneClick}
                >
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300 dark:text-gray-400">
                <Mail className="h-4 w-4 text-green-500 dark:text-green-400 flex-shrink-0" />
                <a
                  href="mailto:hello@yourcompany.com"
                  className="hover:text-white dark:hover:text-gray-200 transition-colors"
                  onClick={trackEmailClick}
                >
                  hello@yourcompany.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 dark:bg-gray-900 hover:bg-green-600 dark:hover:bg-green-600 p-2 rounded-lg transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 text-sm transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-6">Business Hours</h3>
              <div className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>7AM - 6PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>8AM - 4PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-300 dark:text-gray-400 text-sm mb-4">
                Subscribe for seasonal tips and special offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-l-lg focus:outline-none focus:border-green-500 text-sm text-white"
                />
                <button className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 px-4 py-2 rounded-r-lg transition-colors duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
          <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-sm text-gray-400 dark:text-gray-500">
                © {currentYear} Gawel's Grass. All rights reserved.
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400 dark:text-gray-500">
                <span>Professional Service You Can Trust</span>
              </div>
            </div>

            <div className="text-center mt-6">
              <div className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <Phone className="h-4 w-4" />
                <a href="tel:+15551234567" onClick={trackPhoneClick}>
                  Emergency Services Available 24/7
                </a>
              </div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




