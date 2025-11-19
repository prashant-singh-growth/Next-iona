/**
 * Security utility functions for the ionai application
 */

/**
 * Sanitizes user input to prevent XSS attacks
 * @param {string} input - The user input to sanitize
 * @returns {string} - The sanitized input
 */
export const sanitizeInput = (input) => {
  if (!input) return '';
  
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

/**
 * Validates email format
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

/**
 * Validates phone number format
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - Whether the phone number is valid
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(phone);
};

/**
 * Sets security headers for fetch requests
 * @returns {Object} - Headers object with security headers
 */
export const getSecurityHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  };
};

/**
 * Creates a Content Security Policy meta tag
 * @returns {Object} - CSP meta tag attributes
 */
export const getCSPMeta = () => {
  if (process.env.REACT_APP_CSP_ENABLED !== 'true') {
    return null;
  }

  const csp = [
    `default-src ${process.env.REACT_APP_CSP_DEFAULT_SRC || "'self'"}`,
    `script-src ${process.env.REACT_APP_CSP_SCRIPT_SRC || "'self'"}`,
    `connect-src ${process.env.REACT_APP_CSP_CONNECT_SRC || "'self'"}`,
    `img-src ${process.env.REACT_APP_CSP_IMG_SRC || "'self'"}`,
    `style-src ${process.env.REACT_APP_CSP_STYLE_SRC || "'self'"}`
  ].join('; ');

  return {
    httpEquiv: 'Content-Security-Policy',
    content: csp
  };
};

/**
 * Enforces HTTPS by redirecting HTTP requests
 */
export const enforceHTTPS = () => {
  if (
    process.env.REACT_APP_ENFORCE_HTTPS === 'true' &&
    window.location.protocol === 'http:' &&
    window.location.hostname !== 'localhost'
  ) {
    window.location.href = window.location.href.replace('http:', 'https:');
  }
};

/**
 * Rate limiter for form submissions
 */
export class RateLimiter {
  constructor(maxAttempts = 5, timeWindow = 60000) { // 1 minute by default
    this.attempts = new Map();
    this.maxAttempts = maxAttempts;
    this.timeWindow = timeWindow;
  }

  /**
   * Check if an action should be rate limited
   * @param {string} actionKey - Unique identifier for the action (e.g., 'form_submit_email@example.com')
   * @returns {boolean} - True if the action should be allowed, false if rate limited
   */
  checkLimit(actionKey) {
    const now = Date.now();
    const userAttempts = this.attempts.get(actionKey) || [];
    
    // Filter attempts to only include those within the time window
    const recentAttempts = userAttempts.filter(time => now - time < this.timeWindow);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false; // Rate limited
    }
    
    // Add this attempt and update the map
    recentAttempts.push(now);
    this.attempts.set(actionKey, recentAttempts);
    
    return true; // Not rate limited
  }
}

// Create a global rate limiter instance
export const formSubmitLimiter = new RateLimiter(); 