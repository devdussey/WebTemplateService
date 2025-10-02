// Google Analytics 4 integration

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 Measurement ID

// Initialize Google Analytics
export const initGA = () => {
  // Load gtag script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `;
  document.head.appendChild(script2);
};

// Track page views
export const trackPageView = (page_title: string, page_location: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_title,
      page_location
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Business-specific tracking events
export const trackQuoteRequest = (services: string[], propertySize: string) => {
  trackEvent('quote_request', 'lead_generation', `${services.join(', ')} - ${propertySize}`);
};

export const trackContactForm = (subject: string) => {
  trackEvent('contact_form', 'lead_generation', subject);
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', 'contact', 'header_phone');
};

export const trackEmailClick = () => {
  trackEvent('email_click', 'contact', 'header_email');
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', 'engagement', serviceName);
};