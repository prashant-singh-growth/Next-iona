'use client'

import { motion } from "framer-motion";
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    source: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Email is invalid';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    if (!formData.source) errs.source = 'Please select a source';
    return errs;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://ab-uat-dbmodel.az.iona.ai/dbmodel/organizations/send-email?key=ionheadUiuae238Haeu1DSahuw&source=contact-form',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'origin': 'https://ionauat.iona.ai',
          },
          body: JSON.stringify({
            emailData: {
              email: formData.email,
              name: formData.name,
              jobtitle: formData.source || 'N/A', // example mapping
              phoneno: formData.phone,
              Subject: formData.message,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Server responded with error');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        source: '',
      });
    } catch (err) {
      console.error(err);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="bg-background">
      {/* SEO handled by Next.js metadata */}
      {/* Hero Section */}
      <div className="bg-lightGray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "linear-gradient(90deg, #4F46E5 0%, #9333EA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 15px rgba(104, 85, 224, 0.4)",
            }}
          >
            Get in Touch
          </motion.h1>

          <motion.p
            className="text-secondaryText text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We'd love to hear from you! Fill out the form below and our team will get back to you shortly.
          </motion.p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-custom relative overflow-hidden" >
            {/* Background GIF */}
            <div className="absolute inset-0 z-0 opacity-10">
              <img
                src="/assets/Contact.gif"
                alt="Contact background"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-secondaryText">
                      NW1, London, UK<br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    {
                      platform: "facebook",
                      icon: "M20,3H4C3.4,3,3,3.4,3,4v16c0,0.5,0.4,1,1,1h8.6v-7h-2.3v-2.7h2.3v-2c0-2.3,1.4-3.6,3.5-3.6c1,0,1.8,0.1,2.1,0.1v2.4h-1.4c-1.1,0-1.3,0.5-1.3,1.3v1.7h2.7L17.8,14h-2.3v7H20c0.5,0,1-0.4,1-1V4C21,3.4,20.6,3,20,3z"
                    },
                    {
                      platform: "linkedin",
                      icon: "M5,3c-1.1,0-2,0.9-2,2v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5z M7.5,9h2.5v11H7.5V9z M8.8,7.7c-0.9,0-1.6-0.7-1.6-1.6c0-0.9,0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6C10.3,7,9.6,7.7,8.8,7.7z M14,9h2.4v1.2c0.4-0.7,1.5-1.4,3.1-1.4c3.3,0,3.9,2.1,3.9,4.9V20h-2.5v-5.7c0-1.9-0.3-3-1.9-3c-1.9,0-2.1,1.4-2.1,2.9V20H14V9z"
                    },
                    {
                      platform: "instagram",
                      icon: "M12,3c-2.5,0-2.8,0-3.8,0.1C7.2,3.1,6.5,3.3,5.9,3.6C5.3,3.9,4.7,4.3,4.2,4.8s-0.9,1.1-1.2,1.7c-0.3,0.6-0.5,1.3-0.5,2.3C2.4,9.8,2.4,10.1,2.4,12.6c0,2.5,0,2.8,0.1,3.8c0,1,0.2,1.7,0.5,2.3c0.3,0.6,0.7,1.2,1.2,1.7s1.1,0.9,1.7,1.2c0.6,0.3,1.3,0.5,2.3,0.5c1,0,1.3,0.1,3.8,0.1s2.8,0,3.8-0.1c1,0,1.7-0.2,2.3-0.5c0.6-0.3,1.2-0.7,1.7-1.2s0.9-1.1,1.2-1.7c0.3-0.6,0.5-1.3,0.5-2.3c0-1,0.1-1.3,0.1-3.8s0-2.8-0.1-3.8c0-1-0.2-1.7-0.5-2.3c-0.3-0.6-0.7-1.2-1.2-1.7s-1.1-0.9-1.7-1.2c-0.6-0.3-1.3-0.5-2.3-0.5C14.8,3,14.5,3,12,3z M12,4.6c2.4,0,2.7,0,3.7,0.1c0.9,0,1.4,0.2,1.7,0.3c0.4,0.2,0.7,0.4,1,0.7c0.3,0.3,0.5,0.6,0.7,1c0.1,0.3,0.3,0.8,0.3,1.7c0,0.9,0.1,1.2,0.1,3.7s0,2.7-0.1,3.7c0,0.9-0.2,1.4-0.3,1.7c-0.2,0.4-0.4,0.7-0.7,1c-0.3,0.3-0.6,0.5-1,0.7c-0.3,0.1-0.8,0.3-1.7,0.3c-0.9,0-1.2,0.1-3.7,0.1s-2.7,0-3.7-0.1c-0.9,0-1.4-0.2-1.7-0.3c-0.4-0.2-0.7-0.4-1-0.7c-0.3-0.3-0.5-0.6-0.7-1c-0.1-0.3-0.3-0.8-0.3-1.7c0-0.9-0.1-1.2-0.1-3.7s0-2.7,0.1-3.7c0-0.9,0.2-1.4,0.3-1.7c0.2-0.4,0.4-0.7,0.7-1s0.6-0.5,1-0.7c0.3-0.1,0.8-0.3,1.7-0.3C9.3,4.6,9.6,4.6,12,4.6z M12,7.3c-2.6,0-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7s4.7-2.1,4.7-4.7S14.6,7.3,12,7.3z M12,14.9c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9s2.9,1.3,2.9,2.9S13.6,14.9,12,14.9z M17.9,7.1c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1S17.9,6.5,17.9,7.1z"
                    }
                  ].map((social) => (
                    <a
                      key={social.platform}
                      href={social.platform === "linkedin" ? "https://www.linkedin.com/company/iona-ai/" :
                        social.platform === "facebook" ? "https://www.facebook.com/ionaai/" :
                          `https://www.${social.platform}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-lightGray flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-custom" >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-primaryText">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-lightGray border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-primaryText"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-primaryText">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-lightGray border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-primaryText"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium text-primaryText">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full bg-lightGray border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-primaryText"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-primaryText">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full bg-lightGray border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-primaryText"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Source */}
              <div>
                <label htmlFor="source" className="block mb-2 font-medium text-primaryText">
                  How did you hear about us?
                </label>
                <select
                  id="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full bg-lightGray border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-primaryText"
                >
                  <option value="">Please select</option>
                  <option value="google">Google</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
                {errors.source && <p className="text-red-500 text-sm mt-1">{errors.source}</p>}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3 disabled:opacity-60"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                {isSubmitted && (
                  <p className="text-green-600 text-sm mt-2 text-center">
                    We'll get back to you within 24 hours
                  </p>
                )}

              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        <div className="bg-white p-2 rounded-lg shadow-custom" data-aos="fade-up">
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.1590587233192!2d-0.14278002341711117!3d51.53934971539477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ae3dc8c0037%3A0x87e6f1c08a4c8f1a!2s33A%20Camden%20High%20St%2C%20London%20NW1%207JE%2C%20UK!5e0!3m2!1sen!2sus!4v1686754828183!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ionai Office Location"
              className="w-full h-full min-h-[400px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact;
