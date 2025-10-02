/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID_QUOTE?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID_CONTACT?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  readonly VITE_QUOTE_RECIPIENT_EMAIL?: string;
  readonly VITE_CONTACT_RECIPIENT_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
