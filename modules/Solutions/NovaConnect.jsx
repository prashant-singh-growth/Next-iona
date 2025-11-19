"use client"

import { motion } from "framer-motion";
import Link from 'next/link';
import MobileFeatureCard from "../../components/MobileFeatureCard";
import SeoHeader from "../../components/utils/SeoHeader";

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

const NovaConnect = () => {
  const preloadScheduleDemo = () => {
    return import("../ScheduleDemo");
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
       <SeoHeader
      title={"NovaConnect | AI-Powered Hiring by Iona AI"}
      description={"Discover NovaConnect by Iona.ai — an AI-driven solution that simplifies, humanizes, and accelerates your talent engagement journey."}
     
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
              Experience Support at the Speed of Thought, Personalized for Every Touchpoint.
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Your always-on partner for faster resolutions, smoother onboarding, and human-first assistance, powered by intelligent automation and real expertise.
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
              Why Nova Connect Is More Than Just Support
            </h2>
            <p className="text-secondaryText max-w-3xl mx-auto">
              When every second counts, your team deserves more than a ticketing system.
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
                  "Deliver real-time support with human warmth and AI-powered precision",
                  "Seamlessly integrate with your existing Nova Suite ecosystem for unified support",
                  "Guide new hires personally with proactive touchpoints before their first day",
                  "Provide multi-channel support via email, WhatsApp, or voice based on preference",
                  "Reduce time-to-resolution with instant responses to common questions and concerns"
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
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unmatched Features for Seamless Talent Acquisition Support</h2>
            <p className="text-secondaryText max-w-3xl mx-auto">
              Comprehensive tools to connect your systems and unify your HR data ecosystem
            </p>
          </motion.div>

          <div className="flex flex-col items-center">
            {/* Mobile View */}
            <div className="w-full md:hidden">
              <MobileFeatureCard 
                emoji="🤝"
                title="Smart Candidate Matching"
                description="AI-powered matching that connects candidates with the right opportunities based on skills, experience, and preferences"
                delay={0.1}
              />
              <MobileFeatureCard 
                emoji="💬"
                title="Automated Engagement"
                description="Personalized communication workflows that keep candidates engaged throughout the hiring process"
                delay={0.2}
              />
              <MobileFeatureCard 
                emoji="📱"
                title="Mobile-First Experience"
                description="Seamless mobile interface that allows candidates to apply, track status, and communicate on the go"
                delay={0.3}
              />
              <MobileFeatureCard 
                emoji="📊"
                title="Real-Time Analytics"
                description="Comprehensive dashboards and insights to track candidate engagement and optimize your hiring process"
                delay={0.4}
              />
              <MobileFeatureCard 
                emoji="🔄"
                title="Seamless Integration"
                description="Easy integration with your existing ATS and HR systems for a unified hiring experience"
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
                    <div className="text-4xl mb-1 bg-accent/10 p-3 rounded-full">🤝</div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-1">Smart Candidate Matching</h3>
                  <p className="text-secondaryText text-sm">AI-powered matching that connects candidates with the right opportunities based on skills, experience, and preferences</p>
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
                  emoji="💬" 
                  title="Automated Engagement" 
                  description="Personalized communication workflows that keep candidates engaged throughout the hiring process"
                  delay={0.25}
                />

                <FeatureCard 
                  emoji="📱" 
                  title="Mobile-First Experience" 
                  description="Seamless mobile interface that allows candidates to apply, track status, and communicate on the go"
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
                  title="Real-Time Analytics" 
                  description="Comprehensive dashboards and insights to track candidate engagement and optimize your hiring process"
                  delay={0.45}
                />

                <FeatureCard 
                  emoji="🔄" 
                  title="Seamless Integration" 
                  description="Easy integration with your existing ATS and HR systems for a unified hiring experience"
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
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support You Can Feel.</h2>
            <p className="max-w-3xl mx-auto">
              Try Nova Connect and experience the most human support system ever built into a hiring suite.
            </p>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/schedule-demo">
              <motion.button
                className="bg-white text-accent hover:bg-gray-100 px-10 py-4 rounded-lg font-medium text-lg shadow-lg transition-colors relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span 
                  className="absolute inset-0 bg-black opacity-0 hover:opacity-5 transition-opacity"
                  whileHover={{ opacity: 0.05 }}
                />
                Request a Personalized Demo
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How does it Work</h2>
            <p className="text-secondaryText max-w-3xl mx-auto">
              Ways Nova Connect makes your life easier:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Seamless Onboarding Integration",
                description: "With a single click, your team gains access to Nova Connect, which instantly integrates with your workflow, offering hassle-free support at every step. From the first interaction to ongoing assistance, it's designed to be as smooth as possible."
              },
              {
                title: "Instant AI-Powered Help",
                description: "Our intelligent AI system, available 24/7, provides quick answers to common queries, reducing delays in the onboarding process. It handles basic questions while ensuring that your new hires always have the support they need."
              },
              {
                title: "Human Expertise When Needed",
                description: "For more complex issues, our dedicated support team steps in to provide personalized, expert help. Whether it's resolving technical concerns or addressing emotional support for new hires, our team is here to ensure everything runs smoothly."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-secondaryText mb-4">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-purple-gradient text-white">
        <motion.div 
          className="max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform your talent onboarding journey with Nova Connect.</h2>
          <motion.p 
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience instant, personalized support that empowers your new hires and your team.
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
              Book a Demo
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default NovaConnect; 