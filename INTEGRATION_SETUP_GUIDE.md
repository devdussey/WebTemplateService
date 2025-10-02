# Integration Setup Guide

This guide covers the optional client-side integrations included with the template.

## 1. Google Analytics (GA4)
1. Visit https://analytics.google.com/ and create a GA4 property if you do not have one.
2. Add a web data stream and copy the Measurement ID (format G-XXXXXXXXXX).
3. Create or update the .env file in the project root with the line:
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
4. Restart the dev server. Analytics will now load automatically when the site mounts.

Tip: leave the variable blank during local development if you do not want to send test data to GA.

## 2. Reviews and business info
The reviews section ships with mock data located in src/services/googleMyBusinessService.ts. To display your own content you have two options.

### Option A: Manual content (recommended for Envato items)
1. Open src/services/googleMyBusinessService.ts.
2. Replace the sample reviews array with your own testimonials.
3. Update the rating, reviewCount, and businessInfo values to match your business.
4. Rebuild the project so the changes appear in the preview.

### Option B: Connect to the Google Business Profile API (advanced)
1. Create a Google Cloud project and enable the Business Profile API.
2. Implement a secure server endpoint that handles OAuth 2.0 and proxies requests to Google (the API cannot be called directly from the browser).
3. Update googleMyBusinessService.ts to fetch from your endpoint instead of returning mock data.

Document all backend steps for your buyers if you publish an API-driven version.

## 3. Phone and email click tracking
src/services/analyticsService.ts includes helpers such as trackPhoneClick and trackEmailClick. Wire them to your own analytics events if you extend to other platforms (Segment, Plausible, etc.). Without a GA measurement ID the helpers fail silently.

---

Keep credentials out of the repository. All sensitive keys should be supplied through environment files or a secure server configuration.
