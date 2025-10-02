// Google My Business API integration
// Note: This requires server-side implementation for security

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  website: string;
  rating: number;
  reviewCount: number;
  hours: BusinessHours[];
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface Review {
  reviewId: string;
  reviewer: {
    displayName: string;
    profilePhotoUrl?: string;
  };
  starRating: number;
  comment: string;
  createTime: string;
  updateTime: string;
}

// Mock data for development - replace with actual API calls
export const getBusinessInfo = async (): Promise<BusinessInfo> => {
  // In production, this would make an API call to your backend
  // which would then call the Google My Business API
  return {
    name: 'Your Company',
    address: '123 Market Street, Hometown, ST 12345',
    phone: '(555) 123-4567',
    website: 'https://yourcompany.com',
    rating: 4.8,
    reviewCount: 127,
    hours: [
      { day: 'Monday', open: '9:00 AM', close: '4:00 PM' },
      { day: 'Tuesday', open: '9:00 AM', close: '4:00 PM' },
      { day: 'Wednesday', open: '9:00 AM', close: '4:00 PM' },
      { day: 'Thursday', open: '9:00 AM', close: '4:00 PM' },
      { day: 'Friday', open: '9:00 AM', close: '4:00 PM' },
      { day: 'Saturday', open: '9:00 AM', close: '12:00 PM' },
      { day: 'Sunday', closed: true }
    ]
  };
};

export const getReviews = async (): Promise<Review[]> => {
  // Return empty array - no fake reviews
  return [];
};