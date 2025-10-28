
# TODO: Add CAPTCHA to All Forms

## Overview
Add Google reCAPTCHA to all forms in the application to prevent spam submissions. Forms identified: ServicesForm, Hero, ContactSection, TeamForm, FaQForm.

## Steps
- [x] Install react-google-recaptcha package
- [x] Add CAPTCHA to src/Services/ServicesForm.jsx
- [x] Add CAPTCHA to src/Home/Hero.jsx
- [x] Add CAPTCHA to src/Contact/ContactSection.jsx
- [x] Add CAPTCHA to src/About/TeamForm.jsx
- [x] Add CAPTCHA to src/faq/FaQForm.jsx
- [ ] Test forms to ensure CAPTCHA integration works (requires reCAPTCHA site key from Google)

## Notes
- Use placeholder site key 'your-recaptcha-site-key' for development. Replace with actual key from Google reCAPTCHA console.
- CAPTCHA verification must pass before form submission.
- Update form state to include CAPTCHA token.
