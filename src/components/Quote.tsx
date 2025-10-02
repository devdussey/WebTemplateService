import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calculator, CheckCircle, Home, Calendar } from 'lucide-react';
import { sendQuoteRequest, QuoteFormData } from '../services/emailService';
import { trackQuoteRequest } from '../services/analyticsService';


const Quote: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<QuoteFormData>();

  const services = [
    { id: 'lawn-mowing', label: 'Lawn Mowing & Edging', basePrice: 45 },
    { id: 'fertilization', label: 'Fertilization & Weed Control', basePrice: 75 },
    { id: 'tree-care', label: 'Tree & Shrub Care', basePrice: 125 },
    { id: 'irrigation', label: 'Irrigation Services', basePrice: 200 },
    { id: 'landscaping', label: 'Landscape Installation', basePrice: 500 },
    { id: 'cleanup', label: 'Seasonal Cleanup', basePrice: 150 }
  ];

  const propertySizes = [
    { value: 'small', label: 'Small (Under 0.25 acre)', multiplier: 1 },
    { value: 'medium', label: 'Medium (0.25 - 0.5 acre)', multiplier: 1.5 },
    { value: 'large', label: 'Large (0.5 - 1 acre)', multiplier: 2 },
    { value: 'xlarge', label: 'Extra Large (Over 1 acre)', multiplier: 2.5 }
  ];

  const frequencies = [
    { value: 'weekly', label: 'Weekly', multiplier: 1 },
    { value: 'biweekly', label: 'Bi-weekly', multiplier: 0.8 },
    { value: 'monthly', label: 'Monthly', multiplier: 0.6 },
    { value: 'one-time', label: 'One-time Service', multiplier: 1.2 }
  ];

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, serviceId]);
    } else {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    }
  };

  const calculateEstimate = (propertySize: string, frequency: string) => {
    if (selectedServices.length === 0) return 0;

    const sizeMultiplier = propertySizes.find(size => size.value === propertySize)?.multiplier || 1;
    const frequencyMultiplier = frequencies.find(freq => freq.value === frequency)?.multiplier || 1;

    const baseTotal = selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.basePrice || 0);
    }, 0);

    return Math.round(baseTotal * sizeMultiplier * frequencyMultiplier);
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    const formData = {
      ...data,
      services: selectedServices
    };

    // Track quote request
    trackQuoteRequest(selectedServices, data.propertySize);

    const success = await sendQuoteRequest(formData);
    
    if (success) {
      setIsSubmitted(true);
      reset();
      setSelectedServices([]);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } else {
      alert('There was an error sending your quote request. Please try again or call us directly at (555) 123-4567.');
    }
    
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section id="quote" className="py-20 bg-green-50 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Quote Request Received!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Thank you for your interest in our services. We'll review your request and get back to you 
              within 24 hours with a detailed quote.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <p className="text-sm text-green-700 dark:text-green-300">
                <strong>What's next?</strong> Our team will contact you to schedule a free property assessment 
                and provide you with an accurate, personalized quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 bg-green-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Get Your Quote
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Free Online Quote Calculator
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Give prospects a reason to reach out. Customize the services, pricing, and follow-up message to match
            the experience Your Company provides.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Quote Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Property Size */}
              <div>
                <label htmlFor="propertySize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Property Size *
                </label>
                <select
                  id="propertySize"
                  {...register('propertySize', { required: 'Property size is required' })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="">Select property size</option>
                  {propertySizes.map((size) => (
                    <option key={size.value} value={size.value}>{size.label}</option>
                  ))}
                </select>
                {errors.propertySize && <p className="mt-1 text-sm text-red-600">{errors.propertySize.message}</p>}
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Services Needed *
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service) => (
                    <label key={service.id} className="flex items-center p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service.id)}
                        onChange={(e) => handleServiceChange(service.id, e.target.checked)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <div className="ml-3 flex-1">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{service.label}</span>
                        <span className="ml-2 text-sm text-green-600 dark:text-green-400">Starting at ${service.basePrice}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Service Frequency */}
              <div>
                <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Service Frequency *
                </label>
                <select
                  id="frequency"
                  {...register('frequency', { required: 'Frequency is required' })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="">Select frequency</option>
                  {frequencies.map((freq) => (
                    <option key={freq.value} value={freq.value}>{freq.label}</option>
                  ))}
                </select>
                {errors.frequency && <p className="mt-1 text-sm text-red-600">{errors.frequency.message}</p>}
              </div>

              {/* Additional Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Tell us more about your project, specific requirements, or any questions you have..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Calculator className="h-5 w-5" />
                <span>{isSubmitting ? 'Sending...' : 'Get My Free Quote'}</span>
              </button>
            </form>
          </div>

          {/* Quote Summary */}
          <div className="space-y-8">
            {/* Estimate Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Calculator className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                Instant Estimate
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-300">Selected Services:</span>
                  <span className="font-medium">{selectedServices.length} services</span>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                      ${calculateEstimate(
                        document.getElementById('propertySize')?.value || 'medium',
                        document.getElementById('frequency')?.value || 'biweekly'
                      )}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Estimated cost per service</div>
                  </div>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  * This is a rough estimate. Final pricing will be provided after property assessment.
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Your Company?</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Home className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Local Experts</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Update this copy to highlight your service area and experience.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Satisfaction Guaranteed</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Outline the promises and policies that make your services stand out.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Flexible Scheduling</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Explain how clients can book services, recurring plans, or emergency visits.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;