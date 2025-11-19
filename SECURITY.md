# Security Measures in ionai

This document describes the security measures implemented in the ionai application.

## Environment Variables

The application uses the following environment variables for security configuration:

```
# API Keys
REACT_APP_CLOUDINARY_CLOUD_NAME - Cloudinary cloud name
REACT_APP_CLOUDINARY_VIDEO_ID - Cloudinary video ID
REACT_APP_CLOUDINARY_API_KEY - Cloudinary API key
REACT_APP_CLOUDINARY_API_SECRET - Cloudinary API secret (must be kept secret)

# Security Settings
REACT_APP_API_URL - Base URL for API requests
REACT_APP_SECURE_COOKIES - Whether to use secure cookies
REACT_APP_ENFORCE_HTTPS - Whether to enforce HTTPS
REACT_APP_CSP_ENABLED - Whether Content Security Policy is enabled
REACT_APP_XSS_PROTECTION - Whether XSS protection headers are enabled
REACT_APP_RATE_LIMIT_ENABLED - Whether rate limiting is enabled

# Content Security Policy Configuration
REACT_APP_CSP_DEFAULT_SRC - Default source for CSP
REACT_APP_CSP_SCRIPT_SRC - Script source for CSP
REACT_APP_CSP_CONNECT_SRC - Connect source for CSP
REACT_APP_CSP_IMG_SRC - Image source for CSP
REACT_APP_CSP_STYLE_SRC - Style source for CSP
```

## Security Features Implemented

### 1. Input Validation and Sanitization

- All user input is validated for format and sanitized to prevent XSS attacks
- Email validation with regex
- Phone number validation with regex
- Input length restrictions

### 2. Content Security Policy (CSP)

- Implemented CSP to mitigate XSS vulnerabilities
- Controls which resources can be loaded by the browser

### 3. HTTPS Enforcement

- Redirects HTTP requests to HTTPS in production
- Prevents man-in-the-middle attacks

### 4. Secure Headers

- X-XSS-Protection
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy

### 5. Rate Limiting

- Limits the number of submissions from the same user in a given time period
- Protects against brute force and DDoS attacks

### 6. Secure API Communication

- Timeout for API requests
- Error handling
- Security headers for all API requests
- Same-origin credential policy

### 7. Form Security

- Validation prior to form submission
- Error feedback to users
- CSRF protection via same-origin policy

### 8. UI Security Features

- Clear error messages for validation issues
- Privacy policy link on forms
- Rate limit error messages

## Setting Up Securely

1. Create a `.env` file with all the required variables.
2. Never commit the `.env` file to version control.
3. Set all sensitive API keys and secrets in environment variables.
4. For production, use a secure environment variable management system.

## Security Practices for Development

- Keep dependencies updated
- Run regular security audits (`npm audit`)
- Use linters to catch security issues
- Follow React security best practices
- Practice principle of least privilege

## Reporting Security Issues

If you discover a security vulnerability, please report it by emailing [contact@ionai.ai](mailto:contact@ionai.ai).

## Regular Security Reviews

The security measures in this application should be reviewed regularly, especially when:

- Adding new features
- Integrating third-party services
- Updating major dependencies
- After security incidents in similar applications 