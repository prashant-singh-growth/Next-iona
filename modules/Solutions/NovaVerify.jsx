"use client"
import { motion } from "framer-motion";
import Link from 'next/link';
import MobileFeatureCard from "../../components/MobileFeatureCard";


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

const NovaVerify = () => {
  const preloadScheduleDemo = () => {
    return import("../ScheduleDemo");
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      
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
              Effortless Trust, Unrivaled Speed in High-Volume Background Checks
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Powered by the clarity of Iona and the automation brilliance of Nova, this is background verification as it should be: fast, seamless, cost-effective and fully managed.
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
              Say Goodbye to BGV Headaches, Forever
            </h2>
            <p className="text-secondaryText max-w-3xl mx-auto">
              Manual processes, scattered vendors, and SLA firefighting don't scale but your hiring needs do.
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
                  "Eliminate vendor management, system integrations, and manual tracking completely",
                  "Reduce background verification turnaround times and costs across the board",
                  "Deliver a superior candidate experience that keeps top talent engaged throughout",
                  "Free your team to focus on strategic hiring instead of administrative tasks",
                  "Maintain compliance and security standards with automated verification protocols"
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
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Built for High-Volume. Designed for Peace of Mind.
            </motion.h2>
            <motion.p 
              className="text-secondaryText max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Comprehensive tools to streamline your entire verification and compliance process
            </motion.p>
          </motion.div>

          <div className="flex flex-col items-center">
            {/* Mobile View */}
            <div className="w-full md:hidden">
              <MobileFeatureCard 
                emoji="🔍"
                title="Automated Background Checks"
                description="Streamlined verification process that handles criminal records, employment history, and education verification"
                delay={0.1}
              />
              <MobileFeatureCard 
                emoji="📝"
                title="Document Verification"
                description="AI-powered document analysis to verify identity documents, certifications, and professional licenses"
                delay={0.2}
              />
              <MobileFeatureCard 
                emoji="🌐"
                title="Global Compliance"
                description="Automated compliance checks across different jurisdictions and regulatory requirements"
                delay={0.3}
              />
              <MobileFeatureCard 
                emoji="📊"
                title="Real-Time Status Tracking"
                description="Monitor verification progress and receive instant notifications when checks are complete"
                delay={0.4}
              />
              <MobileFeatureCard 
                emoji="🔒"
                title="Secure Data Handling"
                description="Enterprise-grade security with end-to-end encryption and strict data privacy controls"
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
                    <div className="text-4xl mb-1 bg-accent/10 p-3 rounded-full">🔍</div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-1">Automated Background Checks</h3>
                  <p className="text-secondaryText text-sm">Streamlined verification process that handles criminal records, employment history, and education verification</p>
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
                  emoji="📝" 
                  title="Document Verification" 
                  description="AI-powered document analysis to verify identity documents, certifications, and professional licenses"
                  delay={0.25}
                />

                <FeatureCard 
                  emoji="🌐" 
                  title="Global Compliance" 
                  description="Automated compliance checks across different jurisdictions and regulatory requirements"
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
                  title="Real-Time Status Tracking" 
                  description="Monitor verification progress and receive instant notifications when checks are complete"
                  delay={0.45}
                />

                <FeatureCard 
                  emoji="🔒" 
                  title="Secure Data Handling" 
                  description="Enterprise-grade security with end-to-end encryption and strict data privacy controls"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">High-Volume Hiring Deserves High-Velocity Trust.</h2>
            <p className="max-w-3xl mx-auto">
              We make background verification invisible, so your best hires show up, not slow down.
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

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How does it work?</h2>
            <p className="text-secondaryText max-w-3xl mx-auto">
              Nova Verify simplifies and streamlines your background verification process, ensuring you get trustworthy results with minimal effort.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Seamless Setup and Integration",
                description: "Get started quickly by integrating Nova Verify into your existing hiring systems. With minimal setup, you can start verifying candidates without disruptions to your workflow."
              },
              {
                title: "AI-Driven Automation and Real-Time Tracking",
                description: "Once integrated, Nova Verify automates the entire BGV process, from submission to completion. Enjoy real-time updates, keeping your team informed and on track."
              },
              {
                title: "Tailored Solutions with Provider Flexibility",
                description: "Choose the right background check providers for each candidate, role, or location. Nova Verify lets you easily switch providers as needed, ensuring maximum efficiency and cost savings."
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Say Goodbye to BGV Chaos</h2>
          <motion.p 
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience faster, frictionless background verification with Nova Verify.
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
              Request a Demo Now
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default NovaVerify; 