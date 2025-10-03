import React from 'react';
import { Scissors, Sprout, TreePine, Snowflake, Truck as TruckIcon, Hammer } from 'lucide-react';

const Services: React.FC = () => {
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Scissors,
      title: 'Seasonal Lawn Care',
      description: 'Complete lawn maintenance including mowing, edging, trimming, and seasonal treatments.',
      price: 'Starting at $40/hour',
      features: ['Professional mowing & edging', 'Hedge trimming', 'Garden & weed tending', 'Power rake & aeration']
    },
    {
      icon: Snowflake,
      title: 'Snow Removal',
      description: 'Reliable winter snow removal services to keep your property safe and accessible.',
      price: 'Contact for quote',
      features: ['Residential driveways', 'Commercial lots', 'Sidewalk clearing', 'Emergency service available']
    },
    {
      icon: TruckIcon,
      title: 'Skidsteer Services',
      description: 'Professional skidsteer operations for grading, material moving, and site preparation.',
      price: '$120/hour',
      features: ['Site grading', 'Material transport', 'Land leveling', 'Excavation work']
    },
    {
      icon: TreePine,
      title: 'Tree Services',
      description: 'Expert tree care including trimming, removal, and stump grinding services.',
      price: 'Contact for quote',
      features: ['Tree trimming & pruning', 'Tree removal', 'Stump grinding', 'Emergency storm cleanup']
    },
    {
      icon: Sprout,
      title: 'Landscape Projects',
      description: 'Custom landscaping design and installation for beautiful outdoor spaces.',
      price: 'Contact for quote',
      features: ['Landscape design', 'Garden installation', 'Rototilling services', 'Hardscape features']
    },
    {
      icon: Hammer,
      title: 'Additional Services',
      description: 'Specialized services including material removal, fertilizing, and power sweeping.',
      price: 'Material removal: $100/hour',
      features: ['Dump truck services', 'Fertilizing programs', 'Weed control', 'Lot power sweeping']
    }
  ];

  const seasonalNote = {
    title: 'Spring Services Starting Soon',
    description: 'Book your seasonal lawn care services early to secure your preferred schedule. Power rake, aeration, and lawn maintenance slots fill up quickly!'
  };

  const snowRemovalNote = {
    title: 'Winter Snow Removal Available',
    description: 'Don\'t let snow and ice slow you down. Contact us for reliable snow removal services throughout the winter months.'
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Comprehensive Yard Care & Landscaping Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From weekly lawn maintenance to major landscape projects, Gawel's Grass provides professional services year-round. Quality work and customer satisfaction are our top priorities.
          </p>
        </div>

        {/* Seasonal Notice */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">{seasonalNote.title}</h3>
            <p className="text-green-700 dark:text-green-300">{seasonalNote.description}</p>
          </div>
        </div>

        {/* Snow Removal Notice */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">{snowRemovalNote.title}</h3>
            <p className="text-green-700 dark:text-green-300">{snowRemovalNote.description}</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-green-200 dark:hover:border-green-700"
            >
              {/* Icon */}
              <div className="bg-green-100 dark:bg-green-900/30 group-hover:bg-green-600 p-3 rounded-lg w-fit mb-6 transition-colors duration-300">
                <service.icon className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{service.description}</p>
              
              {/* Price */}
              <div className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">{service.price}</div>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                onClick={scrollToQuote}
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300"
              >
                Get Quote
              </button>
            </div>
          ))}
        </div>

        {/* Detailed Service Breakdown */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-950/60 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Detailed Service Pricing</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Aeration Services */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/70 p-6 shadow-md">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400"></div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Aeration Services</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Front yard only (small to average)</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">$50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Front & back (small to average)</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">$90</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Large yard</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">$160</span>
                </div>
              </div>
            </div>

            {/* Power Rake Services */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/70 p-6 shadow-md">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400"></div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Power Rake Services</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Front only (small to average)</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">$90</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Front & back (small to average)</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">$170</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Large yard</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">$250</span>
                </div>
              </div>
            </div>

            {/* Hourly Services */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/70 p-6 shadow-md">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime-400 via-green-500 to-emerald-500"></div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Hourly Services</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Skidsteer work</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">$120/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Material removal & dump truck</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">$100/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Hedge trimming</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">$60/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Garden & weed tending</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">$40/hour</span>
                </div>
              </div>
            </div>

            {/* Garden Services */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/70 p-6 shadow-md">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 via-lime-400 to-emerald-500"></div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Garden Services</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Rototilling small to average existing garden</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">$50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Rototilling big garden</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">$80-100</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Every property is unique. Let us know about your project and we'll create a customized plan that fits your needs and budget. From one-time jobs to seasonal packages, we've got you covered.
            </p>
            <button
              onClick={scrollToQuote}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;