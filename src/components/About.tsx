import React from 'react';
import { Users, Award, Shield, Clock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our skilled crew brings years of lawn care and landscaping expertise to every project.'
    },
    {
      icon: Award,
      title: 'Quality Work',
      description: 'We use professional-grade equipment and proven techniques for superior results.'
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Licensed and insured for your peace of mind and property protection.'
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'Punctual, professional, and committed to completing every job right.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              About Gawel's Grass
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Your Trusted Partner in Lawn Care & Landscaping
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              At Gawel's Grass, we take pride in transforming outdoor spaces into beautiful, well-maintained landscapes. Our team is dedicated to providing reliable, professional service that exceeds expectations.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              From routine lawn maintenance to complex landscape projects, we bring expertise, quality equipment, and attention to detail to every job. We're committed to making your property look its best year-round.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/60 backdrop-blur shadow-sm hover:shadow-lg transition-shadow duration-300 p-6"
                >
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg w-fit mb-4">
                    <feature.icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="h-96 w-full bg-gradient-to-br from-emerald-200 via-emerald-500 to-emerald-700" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_50%)]" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white px-6 py-5">
                <p className="text-sm uppercase tracking-wide text-green-200">Image Placeholder</p>
                <p className="text-base">Swap this block with a licensed photo that represents your team or recent projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
