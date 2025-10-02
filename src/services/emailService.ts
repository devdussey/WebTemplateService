import emailjs from '@emailjs/browser';

type EmailContext = 'quote' | 'contact';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID_QUOTE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_QUOTE || '';
const EMAILJS_TEMPLATE_ID_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const QUOTE_RECIPIENT_EMAIL = import.meta.env.VITE_QUOTE_RECIPIENT_EMAIL || 'your_quote_recipient@example.com';
const CONTACT_RECIPIENT_EMAIL = import.meta.env.VITE_CONTACT_RECIPIENT_EMAIL || 'your_contact_recipient@example.com';

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
} else {
  console.warn('[EmailJS] Public key is not set. Emails will not be sent until configured.');
}

const ensureConfigured = (context: EmailContext): boolean => {
  const missingVars: string[] = [];

  if (!EMAILJS_SERVICE_ID) missingVars.push('VITE_EMAILJS_SERVICE_ID');
  if (!EMAILJS_PUBLIC_KEY) missingVars.push('VITE_EMAILJS_PUBLIC_KEY');

  if (context === 'quote' && !EMAILJS_TEMPLATE_ID_QUOTE) {
    missingVars.push('VITE_EMAILJS_TEMPLATE_ID_QUOTE');
  }

  if (context === 'contact' && !EMAILJS_TEMPLATE_ID_CONTACT) {
    missingVars.push('VITE_EMAILJS_TEMPLATE_ID_CONTACT');
  }

  if (missingVars.length > 0) {
    console.warn(`[EmailJS] Missing environment variables: ${missingVars.join(', ')}`);
    return false;
  }

  if (context === 'quote' && QUOTE_RECIPIENT_EMAIL.includes('your_')) {
    console.warn('[EmailJS] Update VITE_QUOTE_RECIPIENT_EMAIL with your destination inbox.');
  }

  if (context === 'contact' && CONTACT_RECIPIENT_EMAIL.includes('your_')) {
    console.warn('[EmailJS] Update VITE_CONTACT_RECIPIENT_EMAIL with your destination inbox.');
  }

  return true;
};

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  propertySize: string;
  services: string[];
  frequency: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendQuoteRequest = async (formData: QuoteFormData): Promise<boolean> => {
  if (!ensureConfigured('quote')) {
    return false;
  }

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      property_size: formData.propertySize,
      services: formData.services.join(', '),
      frequency: formData.frequency,
      message: formData.message,
      to_email: QUOTE_RECIPIENT_EMAIL,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_QUOTE,
      templateParams
    );

    console.log('Quote email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending quote request:', error);
    return false;
  }
};

export const sendContactMessage = async (formData: ContactFormData): Promise<boolean> => {
  if (!ensureConfigured('contact')) {
    return false;
  }

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: CONTACT_RECIPIENT_EMAIL,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    );

    console.log('Contact email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending contact message:', error);
    return false;
  }
};
