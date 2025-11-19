"use client"
import { motion } from "framer-motion";
import SeoHeader from "../components/utils/SeoHeader";

const PrivacyPolicy = () => {
  return (
    <div className="bg-background">
       <SeoHeader
      title={"Privacy Policy | Iona AI"}
      description={"Learn how Iona.ai protects your data and ensures transparency, security, and trust in every AI-powered hiring experience."}
     
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
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-secondaryText text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We at ionai.ai respect your privacy and are committed to protecting your personal information.
          </motion.p>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 rounded-lg shadow-custom" data-aos="fade-up">
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">Our Commitment</h2>
              <p className="text-secondaryText">
                We at ionai.ai respect your privacy and are committed to protecting your personal information. 
                This policy details how we collect and use data. Our Data protection system follows the DPDP 
                rules i.e. the Information Technology Rules, 2011 under the Information Technology Act, 2000.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">Information Collection</h2>
              <p className="text-secondaryText">
                We collect names, email addresses, contact details and IP addresses from the forms on our website. 
                We may also monitor browsing behavior.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">Information Usage</h2>
              <ul className="list-disc pl-5 text-secondaryText space-y-2">
                <li>The collected responses and enquiries are reached out to with relevant information or answers.</li>
                <li>Browsing behavior is monitored to improve your experience on our website.</li>
                <li>In case of consent provided, we may also use your personal information for Marketing purposes.</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">Third-Party Connections</h2>
              <p className="text-secondaryText">
                Our website may contain links to other third-party websites. However, we are not responsible for their privacy policies.
                We do not disclose your personal information to third parties except if required by law.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">Data Protection</h2>
              <p className="text-secondaryText">
                We have implemented strict security measures to protect your data from unauthorized access, alteration or destruction.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">Cookies and Tracking</h2>
              <p className="text-secondaryText">
                Our website may use cookies to analyze website traffic. You may alter your cookie preferences through your browser settings.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">Addressing Concerns</h2>
              <p className="text-secondaryText">
                If you have any concerns, you can reach out via email to <a href="mailto:contact@ionai.ai" className="text-accent hover:underline">contact@ionai.ai</a>
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">Updating of Policy</h2>
              <p className="text-secondaryText">
                We may update this Privacy Policy as and when there are changes in our practices or in case of any legal requirements.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">User Agreement</h2>
              <p className="text-secondaryText">
                You have read this privacy policy and understand that by using our website or services, you agree to provide your information and mentioned personal details.
              </p>
            </section>
          </div>
          
          {/* Last updated date */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-sm text-secondaryText">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 