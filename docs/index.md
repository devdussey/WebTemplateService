# Documentation

## Overview
Services Template provides a marketing website for a lawn care service built with Vite, React, TypeScript, and Tailwind CSS. Buyers can customize colors, copy, images, and contact details to launch a conversion-focused landing page.

## Project structure
/
|-- docs/                 Additional documentation
|-- public/               Static assets served by Vite
|-- src/
|   |-- components/       Page sections and reusable UI
|   |-- hooks/            Shared hooks (for example dark mode)
|   |-- services/         Client-side integrations
|   |-- index.css         Tailwind directives and globals
|   |-- main.tsx          Application entry point
|   |-- App.tsx           Page composition
|-- EMAILJS_SETUP_GUIDE.md
|-- INTEGRATION_SETUP_GUIDE.md
|-- package.json          Scripts and dependencies
|-- tailwind.config.js    Tailwind configuration

## Installation
1. Install dependencies: npm install
2. Start the development server: npm run dev
3. Visit http://localhost:5173 to preview changes.

## Build and preview
- Generate a production build: npm run build
- Preview the compiled output: npm run preview
The optimized files live in the dist/ folder and can be deployed to any static host (Netlify, Vercel, Cloudflare Pages, etc.).

## Available scripts
- npm run dev     Start Vite in development mode.
- npm run build   Compile for production.
- npm run preview Serve the production build locally.
- npm run lint    Run ESLint.
- npm run typecheck Run TypeScript without emitting files.

## Environment configuration
Create a .env file in the project root to configure integrations. The template reads the variables below at build time.

### EmailJS
Required for the quote and contact forms. Follow EMAILJS_SETUP_GUIDE.md for full instructions, then add these to .env:
VITE_EMAILJS_SERVICE_ID=service_xxxxxx
VITE_EMAILJS_TEMPLATE_ID_QUOTE=template_xxxxxx
VITE_EMAILJS_TEMPLATE_ID_CONTACT=template_xxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_QUOTE_RECIPIENT_EMAIL=quotes@yourdomain.com
VITE_CONTACT_RECIPIENT_EMAIL=hello@yourdomain.com
If any values are missing the forms will log a warning and skip sending.

### Google Analytics (optional)
Set VITE_GA_MEASUREMENT_ID to a GA4 measurement ID to enable page view tracking. Leave blank to disable analytics during local development.

## Customization
### Branding
- Replace /public/logo.svg with your own logo (512 x 512 SVG recommended).
- Update /public/favicon.png if you prefer a custom favicon (180 x 180 PNG).
- Adjust primary colors in tailwind.config.js if you need a bespoke palette.

### Copy and content
Each section is defined in src/components/. Update text directly in Hero.tsx, About.tsx, Services.tsx, ReviewsSection.tsx, Quote.tsx, and Contact.tsx.

### Form handling
The forms pass data to EmailJS using the environment values. Replace placeholder validation messages and contact details with your brand tone. If you prefer a backend integration, modify src/services/emailService.ts accordingly.

### Assets and preview graphics
- The hero and about sections use CSS gradients, so you can supply your own licensed photography without shipping heavy files.
- Replace the placeholder text overlay in About.tsx once you add real imagery.
- Preview files live in /preview/cover.png (1200 x 630) and /preview/thumbnail.png (590 x 300). Update these before submitting to Envato.
- Document the source and license for any third-party assets you include in the final package.

### Styling
Global styles live in src/index.css. Tailwind utility classes appear throughout the components. Use the Tailwind config to adjust fonts, spacing, and breakpoints.

## Deployment checklist
1. Run npm run build and confirm the build completes without warnings.
2. Replace placeholder assets in public/ and preview/ with licensed imagery.
3. Test EmailJS integration in production mode.
4. Bundle this docs/ folder and the setup guides when submitting to Envato.

## Support notes
This template ships without server-side code. Handle private credentials (for example EmailJS private keys) on a secure backend if you extend the functionality. Buyers are responsible for providing their own imagery and ensuring third-party services comply with their regional regulations.
