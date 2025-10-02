# Services Template

A Vite + React + TypeScript landing page template designed for lawn care and outdoor services businesses. The package includes a dark-mode aware marketing site with lead forms, reviews, and service highlights.

## Highlights
- Responsive hero, services, reviews, quote, and contact sections.
- Accessible, keyboard-friendly navigation with light/dark toggle.
- EmailJS-powered quote and contact forms (configure via environment variables).
- Tailwind CSS utility styling with custom theming.

## Requirements
- Node.js 18+
- npm 9+

## Getting started
`
npm install
npm run dev
`
Open http://localhost:5173 to view the site while developing.

### Production build
`
npm run build
npm run preview
`
The compiled site is output to the dist/ directory.

## Environment variables
Create a .env file in the project root to configure third-party integrations. The minimum configuration is:
`
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID_QUOTE=
VITE_EMAILJS_TEMPLATE_ID_CONTACT=
VITE_EMAILJS_PUBLIC_KEY=
VITE_QUOTE_RECIPIENT_EMAIL=
VITE_CONTACT_RECIPIENT_EMAIL=
VITE_GA_MEASUREMENT_ID=
`
See the documentation bundle for the full setup walk-through.

## Documentation
Detailed guidance lives in the docs/ folder:
- docs/index.md – full installation, structure, customization, and deployment guide.
- EMAILJS_SETUP_GUIDE.md – step-by-step EmailJS configuration.
- INTEGRATION_SETUP_GUIDE.md – instructions for optional analytics and reviews data.

## Scripts
- 
pm run dev – run Vite in development mode.
- 
pm run build – create a production build.
- 
pm run preview – preview the production build locally.
- 
pm run lint – run ESLint.
- 
pm run typecheck – run TypeScript in no-emit mode.

## Support
Customize copy, colors, and imagery to match your brand before publishing. Replace placeholder assets with licensed alternatives and update the documentation with your business details prior to distribution.

