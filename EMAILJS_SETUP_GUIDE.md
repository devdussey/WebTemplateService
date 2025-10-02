# EmailJS Setup Guide

Follow these steps to connect the contact and quote forms to your EmailJS account.

## 1. Create an EmailJS account
- Visit https://www.emailjs.com/ and sign up (the free tier works for testing).
- Confirm your email address.

## 2. Add an email service
- Open **Email Services** inside the EmailJS dashboard.
- Click **Add New Service**, choose your provider, and finish the connection flow.
- Copy the generated **Service ID** (example: service_xxxxxx).

## 3. Create email templates
Create two templates so each form can send a tailored message.

### Quote Request template
1. Go to **Email Templates** -> **Create New**.
2. Name it "Quote Request".
3. Use the following structure and adjust the copy for your business:

Subject: New Quote Request from {{from_name}}

New Quote Request from {{from_name}}

Customer Information:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}

Service Details:
- Property Size: {{property_size}}
- Services Requested: {{services}}
- Service Frequency: {{frequency}}

Additional Message:
{{message}}

4. Save the template and note the **Template ID** (example: template_xxxxxx).

### Contact Message template
1. Create another template named "Contact Message".
2. Suggested structure:

Subject: {{subject}} - Message from {{from_name}}

New Contact Message from {{from_name}}

Customer Information:
- Name: {{from_name}}
- Email: {{from_email}}
- Subject: {{subject}}

Message:
{{message}}

3. Save and copy the Template ID.

## 4. Grab your public key
- Open **Account** -> **API Keys** in EmailJS.
- Copy the **Public Key** (sometimes called the user ID).

## 5. Configure the project
Create a .env file in the project root (same folder as package.json) and add:

VITE_EMAILJS_SERVICE_ID=service_xxxxxx
VITE_EMAILJS_TEMPLATE_ID_QUOTE=template_xxxxxx
VITE_EMAILJS_TEMPLATE_ID_CONTACT=template_xxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_QUOTE_RECIPIENT_EMAIL=quotes@yourdomain.com
VITE_CONTACT_RECIPIENT_EMAIL=hello@yourdomain.com

Restart the dev server after saving so Vite reloads the variables.

## 6. Test both forms
1. Run npm run dev (or your production build) and submit the quote and contact forms.
2. Check the destination inboxes. EmailJS logs every request under **Email History** for troubleshooting.

## Troubleshooting
- **Nothing sends** - verify each env variable matches the IDs from the EmailJS dashboard.
- **Spam filtering** - mark early messages as "Not Spam" and consider a custom domain or paid EmailJS plan for higher deliverability.
- **Rate limits** - free accounts are capped at 200 emails per month. Upgrade if you expect more volume.

With these variables in place the template ships without hard-coded credentials, and buyers only need to edit their .env file to bring EmailJS live.
