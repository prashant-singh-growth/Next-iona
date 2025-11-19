"use client"
import { motion } from "framer-motion";
import Link from 'next/link';
import MobileFeatureCard from "../../components/MobileFeatureCard";
import SeoHeader from "../../components/utils/SeoHeader";

const NovaEngage = () => {
  const preloadScheduleDemo = () => {
    return import("../ScheduleDemo");
  };

  const FeatureCard = ({ emoji, title, description, delay }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true, margin: "-20%" }}
        className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-5 text-center border-2 border-accent shadow-md w-[30%] hover:shadow-lg"
        whileHover={{ 
          y: -8, 
          boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { duration: 0.3 }
        }}
      >
        <motion.div 
          className="flex justify-center mb-2"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-3xl mb-1 bg-accent/10 p-3 rounded-full">{emoji}</div>
        </motion.div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-secondaryText text-sm">{description}</p>
      </motion.div>
    );
  };

  const ConnectorLine = ({ delay = 0, vertical = false, length = "100%" }) => {
    return (
      <motion.div
        initial={{ scaleY: vertical ? 0 : 1, scaleX: vertical ? 1 : 0, originY: 0 }}
        whileInView={{ scaleY: 1, scaleX: 1 }}
        transition={{ duration: 0.3, delay }}
        viewport={{ once: true, margin: "-20%" }}
        className={`bg-accent ${vertical ? "w-[3px] h-16" : "h-[3px] w-full"}`}
        style={vertical ? { height: length } : { width: length }}
      />
    );
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
       <SeoHeader
      title={"NovaEngage | Empower Employee Engagement with IONA AI"}
      description={"Enhance culture and retention with NovaEngage. Harness AI insights to strengthen communication, motivation, and inclusion across your organization."}
     
      />
      {/* Hero Section */}
      <section className="w-full bg-purple-gradient text-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Your Silent Partner in Curating Exceptional Candidate Experiences
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              From one-click applications to timely follow-ups, Nova Engage gives high-volume hiring a human touch that top talent can feel.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Link href="/schedule-demo">
              <motion.button 
                className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-medium transition-colors relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={preloadScheduleDemo}
              >
                <motion.span 
                  className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity"
                  whileHover={{ opacity: 0.1 }}
                />
                Book a Demo
              </motion.button>
              </Link>
              <Link href="/#solutions">
              <motion.button 
                className="bg-white text-accent px-6 py-3 rounded-lg font-medium transition-colors relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="absolute inset-0 bg-black opacity-0 hover:opacity-5 transition-opacity"
                  whileHover={{ opacity: 0.05 }}
                />
                Explore Solutions
              </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Engagement That Scales, Customized for Your Hiring Flow
            </h2>
            <p className="text-secondaryText max-w-3xl mx-auto">
              Nova Engage gives every candidate personalized attention—even when you're hiring thousands.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-12">
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <ul className="space-y-3">
                {[
                  "Automate personalized communications at scale with intelligent engagement",
                  "Gather insights with intelligent feedback collection throughout candidate journey",
                  "Decrease time-to-fill with smoother candidate experiences and touch points",
                  "Nurture talent relationships from first click to first day on the job",
                  "Proven to increase conversion rates by up to 35% through meaningful engagement"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-accent mr-2">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Built for scale, powered by AI
            </motion.h2>
            <motion.p 
              className="text-secondaryText max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Comprehensive tools to enhance employee engagement and improve retention
            </motion.p>
          </div>

          <div className="flex flex-col items-center">
            {/* Mobile View */}
            <div className="w-full md:hidden">
              <MobileFeatureCard 
                emoji="💬"
                title="Intelligent Content Delivery"
                description="Send company stories, team intros, and culture videos straight to WhatsApp. Bite-sized and mobile-friendly, made to inform and excite."
                delay={0.1}
              />
              <MobileFeatureCard 
                emoji="🎯"
                title="Personalized Engagement"
                description="Tailor content and communication based on candidate preferences and role requirements"
                delay={0.2}
              />
              <MobileFeatureCard 
                emoji="📱"
                title="WhatsApp Integration"
                description="Seamless communication through the world's most popular messaging platform"
                delay={0.3}
              />
              <MobileFeatureCard 
                emoji="📊"
                title="Engagement Analytics"
                description="Track and measure the effectiveness of your engagement strategies"
                delay={0.4}
              />
              <MobileFeatureCard 
                emoji="🤖"
                title="AI-Powered Responses"
                description="Instant, accurate answers to candidate questions, available 24/7"
                delay={0.5}
              />
            </div>

            {/* Desktop View */}
            <div className="hidden md:block relative w-full max-w-5xl">
              {/* Root Node */}
              <div className="flex justify-center mb-6">
                <motion.div 
                  className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-6 text-center border-2 border-accent shadow-lg w-[40%]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, margin: "-20%" }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    background: "linear-gradient(to bottom right, #ffffff, #f0e6ff)"
                  }}
                >
                  <motion.div 
                    className="flex justify-center mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-4xl mb-1 bg-accent/10 p-3 rounded-full">💬</div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-1">Intelligent Content Delivery</h3>
                  <p className="text-secondaryText text-sm">Send company stories, team intros, and culture videos straight to WhatsApp. Bite-sized and mobile-friendly, made to inform and excite.</p>
                </motion.div>
              </div>

              {/* Branching Connector */}
              <div className="flex justify-center">
                <ConnectorLine vertical delay={0.1} />
              </div>

              {/* First Level Connector Line */}
              <div className="relative h-[3px] mx-auto" style={{ width: "80%" }}>
                <ConnectorLine delay={0.15} />
                
                {/* Vertical connectors to first branch nodes */}
                <div className="absolute left-0 flex justify-center w-[3px] h-16 -top-1" style={{ transform: "translateX(0)" }}>
                  <ConnectorLine vertical delay={0.2} />
                </div>
                
                <div className="absolute right-0 flex justify-center w-[3px] h-16 -top-1" style={{ transform: "translateX(0)" }}>
                  <ConnectorLine vertical delay={0.2} />
                </div>
              </div>

              {/* Second Level Nodes */}
              <div className="flex justify-between mt-4 mb-16">
                <FeatureCard 
                  emoji="🎯" 
                  title="Personalized Engagement" 
                  description="Tailor content and communication based on candidate preferences and role requirements"
                  delay={0.25}
                />

                <FeatureCard 
                  emoji="📱" 
                  title="WhatsApp Integration" 
                  description="Seamless communication through the world's most popular messaging platform"
                  delay={0.3}
                />
              </div>

              {/* Bottom Level Connector Line */}
              <div className="relative h-[3px] mx-auto" style={{ width: "80%" }}>
                <ConnectorLine delay={0.35} />
                
                {/* Vertical connectors to second level nodes */}
                <div className="absolute left-0 flex justify-center w-[3px] h-16 -top-1" style={{ transform: "translateX(0)" }}>
                  <ConnectorLine vertical delay={0.4} />
                </div>
                
                <div className="absolute right-0 flex justify-center w-[3px] h-16 -top-1" style={{ transform: "translateX(0)" }}>
                  <ConnectorLine vertical delay={0.4} />
                </div>
              </div>

              {/* Bottom Level Nodes */}
              <div className="flex justify-between mt-4">
                <FeatureCard 
                  emoji="📊" 
                  title="Engagement Analytics" 
                  description="Track and measure the effectiveness of your engagement strategies"
                  delay={0.45}
                />

                <FeatureCard 
                  emoji="🤖" 
                  title="AI-Powered Responses" 
                  description="Instant, accurate answers to candidate questions, available 24/7"
                  delay={0.5}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="w-full py-16 bg-purple-gradient text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Offer to Onboarded with Zero Drop-offs</h2>
            <p className="max-w-3xl mx-auto">
              Turn new hires into Day-One believers.
            </p>
          </div>

          <div className="flex justify-center">
            <Link href="/schedule-demo">
              <motion.button
                className="bg-white text-accent hover:bg-gray-100 px-10 py-4 rounded-lg font-medium text-lg shadow-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Request a Personalized Demo
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How does it Work?</h2>
            <p className="text-secondaryText max-w-3xl mx-auto">
              See how Nova Engage transforms employee engagement through key touchpoints
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
                <div>
                <h3 className="font-semibold">Accept & Activate</h3>
                <p className="text-secondaryText mb-4">
                  As soon as a candidate accepts the offer, Nova Engage kicks in. They receive a curated stream of cultural, team, and value-based content over familiar channels like WhatsApp or email.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
                <div>
                <h3 className="font-semibold">Score & Signal</h3>
                <p className="text-secondaryText mb-4">
                  AI monitors interaction who's watching, reading, and responding. Engagement scores are updated in real-time to signal warmth or risk.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
                <div>
                <h3 className="font-semibold">Human Touchpoint</h3>
                <p className="text-secondaryText mb-4">
                  Candidates with low engagement are flagged for personal follow-ups. Our team or yours connects, resolves concerns, and re-energizes commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-16 bg-purple-gradient text-white">
        <motion.div 
          className="max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Candidate Experience?</h2>
          <motion.p 
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See how Nova Engage can help you turn applicants into excited new hires.
          </motion.p>
          <Link href="/schedule-demo">
            <motion.button 
              className="bg-white text-accent px-8 py-3 rounded-lg font-medium transition-colors hover:bg-gray-100 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                className="absolute inset-0 bg-black opacity-0 hover:opacity-5 transition-opacity"
                whileHover={{ opacity: 0.05 }}
              />
              Request a Demo
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default NovaEngage; 