import { motion } from "framer-motion";
import SeoHeader from "../components/utils/SeoHeader";

const CookiePolicy = () => {
  return (
    <div className="bg-background">
       <SeoHeader
      title={"Cookie Policy | Iona AI"}
      description={"See how Iona AI uses cookies responsibly to enhance experience, personalize insights, and maintain data clarity."}
     
      />
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
            Cookie Policy
          </motion.h1>
          <motion.p 
            className="text-secondaryText text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            This Cookie Policy explains how we use cookies and similar technologies to enhance your experience.
          </motion.p>
        </div>
      </div>

      {/* Cookie Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 rounded-lg shadow-custom" data-aos="fade-up">
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">What are Cookies?</h2>
              <p className="text-secondaryText">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work, or work more efficiently, as well as to provide information 
                to the owners of the website.
              </p>
              <p className="text-secondaryText">
                Cookies can be "persistent" cookies, which remain on your device for a set period of time or until you 
                delete them, or "session" cookies, which expire when you close your browser.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">How We Use Cookies</h2>
              <p className="text-secondaryText">
                We use cookies for various purposes, including:
              </p>
              <ul className="list-disc pl-5 text-secondaryText space-y-2">
                <li>
                  <span className="font-medium">Essential Cookies:</span> These cookies are necessary for the operation of our Website. 
                  They enable you to navigate the Website and use its essential features.
                </li>
                <li>
                  <span className="font-medium">Performance and Analytics Cookies:</span> These cookies collect information about how visitors 
                  use our Website, such as which pages they visit most often and if they get error messages from web pages. 
                  This information helps us to improve the way our Website works. We may use third-party analytics providers 
                  (e.g., Google Analytics) to assist us with this. These cookies usually don't directly identify you.
                </li>
                <li>
                  <span className="font-medium">Functionality Cookies:</span> These cookies allow our Website to remember choices you make 
                  (such as your language preference or region – as applicable) and provide enhanced, more personal features. 
                  They may also be used to provide services you have asked for, such as watching a video or commenting on a blog. 
                  The information these cookies collect may be anonymized and they cannot track your browsing activity on other websites.
                </li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">Third-Party Cookies</h2>
              <p className="text-secondaryText">
                We may use third-party service providers who may also set cookies on your device when you visit our Website. 
                These third parties include analytics providers, advertising networks, and social media platforms. 
                We do not control these third-party cookies and encourage you to review the privacy policies of these providers 
                to learn more about their use of cookies.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">Your Cookie Choices</h2>
              <p className="text-secondaryText">
                You have the right to control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-5 text-secondaryText space-y-2">
                <li>
                  <span className="font-medium">Browser Settings:</span> Most web browsers allow you to control cookies through their settings. 
                  You can typically block all or some cookies, delete cookies that have already been set, and control how cookies 
                  are handled in the future. Please refer to your browser's help documentation for instructions on how to manage 
                  your cookie preferences.
                </li>
                <li>
                  <span className="font-medium">Our Cookie Consent Tool:</span> When you first visit our Website, we will present you with a 
                  cookie consent banner or pop-up that allows you to manage your preferences for non-essential cookies. 
                  You can adjust your settings at any time through a link on our Website (e.g., in the footer).
                </li>
              </ul>
              <p className="text-secondaryText mt-4">
                Please note that if you disable certain cookies, particularly essential cookies, you may not be able to access 
                all features of our Website or it may not function correctly.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">Updates to this Cookie Policy</h2>
              <p className="text-secondaryText">
                We may update this Cookie Policy from time to time to reflect changes in our use of cookies or applicable laws. 
                Any changes will be posted on this page with an updated revision date. We encourage you to review this policy 
                periodically to stay informed about our use of cookies.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">Contact Us</h2>
              <p className="text-secondaryText">
                If you have any questions about this Cookie Policy, please contact us via our <a href="/contact" className="text-accent hover:underline">Contact Us</a> page.
              </p>
            </section>
          </div>
          
          {/* Last updated date */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-sm text-secondaryText">Last updated: May 13, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 