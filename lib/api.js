/**
 * API utility functions for secure data fetching
 */
import { getSecurityHeaders } from './security';

/**
 * Base URL for API requests from environment variable
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

/**
 * Default request timeout in milliseconds
 */
const DEFAULT_TIMEOUT = 30000; // 30 seconds

/**
 * Creates a timeout promise that rejects after specified milliseconds
 * @param {number} ms - Milliseconds to wait before timeout
 * @returns {Promise} - Promise that rejects after timeout
 */
const timeout = (ms) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request timed out after ${ms}ms`));
    }, ms);
  });
};

/**
 * Makes a secure API request with timeout and security headers
 * 
 * @param {string} endpoint - API endpoint path
 * @param {Object} options - Fetch options
 * @param {number} [timeoutMs=DEFAULT_TIMEOUT] - Request timeout in milliseconds
 * @returns {Promise<any>} - Promise resolving to response data or rejecting with error
 */
export const apiRequest = async (endpoint, options = {}, timeoutMs = DEFAULT_TIMEOUT) => {
  try {
    const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
    
    // Set default headers with security headers
    const headers = {
      ...getSecurityHeaders(),
      ...options.headers
    };
    
    // Create the fetch request with timeout
    const fetchPromise = fetch(url, {
      ...options,
      headers,
      credentials: 'same-origin' // Use cookies only for same origin
    });
    
    // Race between fetch and timeout
    const response = await Promise.race([
      fetchPromise,
      timeout(timeoutMs)
    ]);
    
    // Check if response is ok (status in 200-299 range)
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Request failed with status ${response.status}`);
    }
    
    // Check for content type to determine how to parse the response
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return await response.text();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

/**
 * Performs a GET request
 * 
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Additional fetch options
 * @returns {Promise<any>} - Promise resolving to response data
 */
export const get = (endpoint, options = {}) => {
  return apiRequest(endpoint, {
    method: 'GET',
    ...options
  });
};

/**
 * Performs a POST request with JSON body
 * 
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request body data
 * @param {Object} options - Additional fetch options
 * @returns {Promise<any>} - Promise resolving to response data
 */
export const post = (endpoint, data, options = {}) => {
  return apiRequest(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    body: JSON.stringify(data),
    ...options
  });
};

/**
 * Performs a PUT request with JSON body
 * 
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request body data
 * @param {Object} options - Additional fetch options
 * @returns {Promise<any>} - Promise resolving to response data
 */
export const put = (endpoint, data, options = {}) => {
  return apiRequest(endpoint, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    body: JSON.stringify(data),
    ...options
  });
};

/**
 * Performs a DELETE request
 * 
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Additional fetch options
 * @returns {Promise<any>} - Promise resolving to response data
 */
export const del = (endpoint, options = {}) => {
  return apiRequest(endpoint, {
    method: 'DELETE',
    ...options
  });
}; 