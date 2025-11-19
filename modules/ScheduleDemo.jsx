"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  sanitizeInput, 
  isValidEmail, 
  isValidPhone, 
  formSubmitLimiter 
} from "../lib/security";
import SeoHeader from "../components/utils/SeoHeader";

const ScheduleDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    interests: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

  // Mark the page as loaded after component mounts
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }
    
    // Phone validation (optional field)
    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
    
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ""
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear any previous form errors
    setFormError("");
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Rate limiting check
    const submitKey = `form_submit_${formData.email}`;
    if (!formSubmitLimiter.checkLimit(submitKey)) {
      setFormError("Too many attempts. Please try again later.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Sanitize user inputs before using them
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      company: sanitizeInput(formData.company),
      jobTitle: sanitizeInput(formData.jobTitle),
      phone: sanitizeInput(formData.phone),
      interests: sanitizeInput(formData.interests)
    };
    
    // Open Cal.com using their direct link approach instead of the React component
    const calLink = `https://cal.com/amitsrivastava/test?name=${encodeURIComponent(sanitizedData.name)}&email=${encodeURIComponent(sanitizedData.email)}&notes=${encodeURIComponent(`Company: ${sanitizedData.company}\nJob Title: ${sanitizedData.jobTitle}\nPhone: ${sanitizedData.phone}\nInterests: ${sanitizedData.interests}`)}`;
    
    // Add a slight delay to show loading state
    setTimeout(() => {
      try {
        window.open(calLink, "_blank", "noopener,noreferrer");
      } catch (error) {
        console.error("Error opening calendar link:", error);
        setFormError("Failed to open scheduling. Please try again.");
      }
      setIsSubmitting(false);
    }, 500);
  };

  // Animation variants for page elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="bg-background min-h-screen">
        <SeoHeader
      title={"Schedule a Demo | Experience the Power of IONA AI"}
      description={"Book a personalized demo to see how IONA AI simplifies hiring, automates workflows, and empowers teams to find purpose-driven talent faster."}
     
      />
      {/* Hero Section - Added proper padding to prevent navbar overlap */}
      <div className="bg-lightGray py-20">
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
            Schedule a Demo
          </motion.h1>
          <motion.p 
            className="text-secondaryText text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            See how our AI-driven hiring solution can transform your recruitment process
          </motion.p>
        </div>
      </div>

      {/* Demo Form Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isPageLoaded ? "visible" : "hidden"}
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form with Cal.com Integration */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-custom" data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-6">Book Your Personalized Demo</h2>
            
            {/* Form Error Alert */}
            {formError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
                <p>{formError}</p>
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-primaryText">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  required
                  className={`w-full bg-lightGray border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-primaryText`}
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={100}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
  
              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-primaryText">
                  Work Email*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  className={`w-full bg-lightGray border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-primaryText`}
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={100}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block mb-2 font-medium text-primaryText">
                  Company Name*
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Your company"
                  required
                  className={`w-full bg-lightGray border ${errors.company ? 'border-red-500' : 'border-gray-200'} rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-primaryText`}
                  value={formData.company}
                  onChange={handleChange}
                  maxLength={100}
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Title */}
                <div>
                  <label htmlFor="jobTitle" className="block mb-2 font-medium text-primaryText">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    placeholder="Your position"
                    className="w-full bg-lightGray border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-primaryText"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    maxLength={100}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium text-primaryText">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your phone number"
                    className={`w-full bg-lightGray border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-primaryText`}
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={20}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Interests */}
              <div>
                <label htmlFor="interests" className="block mb-2 font-medium text-primaryText">
                  What are you most interested in?
                </label>
                <select
                  id="interests"
                  className="w-full bg-lightGray border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-primaryText"
                  value={formData.interests}
                  onChange={handleChange}
                >
                  <option value="">Please select</option>
                  <option value="novacount">NovaCount: Headcount Planning and Monitoring</option>
                  <option value="novaassist">NovaAssist: Recruiter Co-Pilot</option>
                  <option value="novatrack">NovaTrack: NextGen Application Tracking System</option>
                  <option value="novastart">NovaStart: Pre-Boarding of New Hires</option>
                  <option value="novadoc">NovaDoc: Documentation of New Hires</option>
                  <option value="novaengage">NovaEngage: Engagement of New Hires</option>
                  <option value="novatrain">NovaTrain: Mandatory Trainings and Induction of New Hires</option>
                  <option value="novaverify">NovaVerify: Background Verifications of New Hires</option>
                  <option value="novaconnect">NovaConnect: Premium WhatsApp based support</option>
                </select>
              </div>
  
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="btn-primary w-full py-3 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Schedule My Demo"
                  )}
                </button>
                <p className="text-secondaryText text-sm mt-2 text-center">
                  You'll be able to select a time slot in the next step
                </p>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  By submitting this form, you agree to our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>
                </p>
              </div>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div variants={itemVariants} data-aos="fade-left">
            <div className="bg-white p-8 rounded-lg shadow-custom mb-8">
              <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
              <ul className="space-y-4">
                {[
                  "A personalized walkthrough of our AI-driven hiring solution",
                  "Q&A session with our product experts",
                  "Custom demonstration tailored to your industry",
                  "Discussion of your specific recruitment challenges",
                  "No pressure, consultative approach"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-accent mt-1">✓</div>
                    <p className="text-secondaryText">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-gradient p-8 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">Why choose iona.ai?</h3>
              <p className="mb-4">
                The choice is clear: Maximize your hiring potential with iona.ai.
                Achieve remarkable results: 80% reduction in time-to-hire, 90% lower costs, and guaranteed 100% data accuracy.
                Join the ranks of proactive HR teams. Choose iona.ai.  
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">90%</div>
                  <p className="text-sm text-blue-100">Reduction in cost</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <p className="text-sm text-blue-100">Accuracy in data</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScheduleDemo; 