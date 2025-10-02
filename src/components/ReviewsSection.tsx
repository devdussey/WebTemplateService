import React, { useState, useEffect } from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { getReviews, getBusinessInfo, Review, BusinessInfo } from '../services/googleMyBusinessService';

const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [reviewsData, businessData] = await Promise.all([
          getReviews(),
          getBusinessInfo()
        ]);
        setReviews(reviewsData);
        setBusinessInfo(businessData);
      } catch (error) {
        console.error('Error loading reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Customers Say
          </h2>
          {businessInfo && reviews.length > 0 && (
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {renderStars(Math.floor(businessInfo.rating))}
                <span className="text-lg font-semibold text-gray-900 dark:text-white ml-2">
                  {businessInfo.rating}
                </span>
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                Based on {businessInfo.reviewCount} reviews
              </span>
            </div>
          )}
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        {/* Reviews Grid */}
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reviews.map((review) => (
              <div
                key={review.reviewId}
                className="bg-white/90 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 backdrop-blur"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(review.starRating)}
                </div>

                <div className="relative mb-4">
                  <Quote className="h-8 w-8 text-green-200 dark:text-green-300 absolute -top-2 -left-2" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-6">
                    {review.comment}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  {review.reviewer.profilePhotoUrl && (
                    <img
                      src={review.reviewer.profilePhotoUrl}
                      alt={review.reviewer.displayName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {review.reviewer.displayName}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(review.createTime)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mb-12">
            <div className="bg-white/90 dark:bg-gray-900/70 border border-green-200/50 dark:border-green-800/60 rounded-2xl p-12 max-w-2xl mx-auto shadow-lg backdrop-blur">
              <Quote className="h-16 w-16 text-green-300 dark:text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Your Reviews Matter
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We're building our online presence and would love to hear from our valued customers.
                Your feedback helps us improve and helps others discover our services.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Been a customer? We'd appreciate your honest review!
              </div>
            </div>
          </div>
        )}

        {/* Google Reviews CTA */}
        <div className="text-center">
          <div className="bg-white/90 dark:bg-gray-900/70 border border-green-200/60 dark:border-green-800/60 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg backdrop-blur">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Love Our Service?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Help others discover Your Company by sharing your experience on Google Reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://g.page/r/your-google-business-url/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Leave a Google Review
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-green-600 dark:text-green-400 border border-green-600/80 dark:border-green-500 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Share Your Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;