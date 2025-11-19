"use client"
import { motion } from "framer-motion";
import Link from 'next/link';
import MobileFeatureCard from "../../components/MobileFeatureCard";
import SeoHeader from "../../components/utils/SeoHeader";


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

const NovaAssist = () => {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
        <SeoHeader
      title={"NovaAssist | AI-Powered Recruitment Assistant by IONA AI"}
      description={"Simplify hiring with NovaAssist—your intelligent virtual recruiter. Automate tasks, enhance candidate engagement, and focus on meaningful human connections."}
      canonical={"/solutions/novaassist"}
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
              Never Fly Solo Again! Your Intelligent Hiring Co-Pilot is Here!
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Imagine having an always-on, exceptionally trained partner woven directly into your daily workflow: that's Nova Assist.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Link href="/schedule-demo">
                <motion.button 
                  className="bg-white text-accent px-8 py-3 rounded-lg font-medium transition-colors hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a Demo
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button 
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium transition-colors hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Sales
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
              Why Nova Assist Is More Than Just an AI Tool
            </h2>
            <p className="text-secondaryText max-w-3xl mx-auto">
              When hiring moves fast, you need more than just dashboards.
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
                  "Nova Assist isn't just a chatbot. It's your AI-powered, insight-driven teammate, designed to guide you from requisition to onboarding, and every moment in between.",
                  "Nova Assist blends natural language intelligence with deep HR context, delivering real-time support, insights, and decisions, no search bars, no delays.",
                  "Whether you're recruiting, onboarding, or tracking strategy; just ask.",
                  "Nova Assist is woven into your Nova Suite, ready to guide every stakeholder: recruiters, HR teams, new hires, and leaders."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Support at Every Hiring Touchpoint</h2>
            <p className="text-secondaryText max-w-3xl mx-auto">
              Always-On Hiring Intelligence
            </p>
          </motion.div>

          <div className="flex flex-col items-center">
            {/* Mobile View */}
            <div className="w-full md:hidden">
              <MobileFeatureCard
                emoji="🔄"
                title="Around-the-Clock AI Assistance"
                description="Access immediate answers to your questions anytime, ensuring no delays in your recruitment journey."
                delay={0.1}
              />
              <MobileFeatureCard 
                emoji="🧩"
                title="Seamless System Integration"
                description="Nova Assist plugs into your Nova Suite and existing workflows, making it part of your daily rhythm, not a separate app to learn."
                delay={0.2}
              />
              <MobileFeatureCard 
                emoji="⚡"
                title="Strategic Insights, On Demand"
                description="HR leaders can ask questions like 'What's our hiring pipeline vs. target for Q3?' and get instant, actionable dashboards."
                delay={0.3}
              />
              <MobileFeatureCard 
                emoji="📱"
                title="Your Co-Pilot Across the Talent Lifecycle"
                description="From requisition to onboarding, Nova Assist is your silent partner in every HR moment. It anticipates needs, removes friction, and keeps your hiring journey on course."
                delay={0.4}
              />
              <MobileFeatureCard 
                emoji="🌱"
                title="Empowering New Hires from Day One"
                description="Overwhelmed employees can ask: 'Where's the leave policy?' or 'Who's my reporting manager?' and get real-time answers; no waiting, no confusion."
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
                    <div className="text-4xl mb-1 bg-accent/10 p-3 rounded-full">🔄</div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-1">Around-the-Clock AI Assistance</h3>
                  <p className="text-secondaryText text-sm">Access immediate answers to your questions anytime, ensuring no delays in your recruitment journey.</p>
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
                  emoji="🧩" 
                  title="Seamless System Integration" 
                  description="Nova Assist plugs into your Nova Suite and existing workflows, making it part of your daily rhythm, not a separate app to learn."
                  delay={0.25}
                />

                <FeatureCard 
                  emoji="⚡" 
                  title="Strategic Insights, On Demand" 
                  description="HR leaders can ask questions like 'What's our hiring pipeline vs. target for Q3?' and get instant, actionable dashboards."
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
                  emoji="📱" 
                  title="Your Co-Pilot Across the Talent Lifecycle" 
                  description="From requisition to onboarding, Nova Assist is your silent partner in every HR moment. It anticipates needs, removes friction, and keeps your hiring journey on course."
                  delay={0.45}
                />

                <FeatureCard 
                  emoji="🌱" 
                  title="Empowering New Hires from Day One" 
                  description="Overwhelmed employees can ask: 'Where's the leave policy?' or 'Who's my reporting manager?' and get real-time answers; no waiting, no confusion."
                  delay={0.5}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Your Smartest Hire Isn't a Person; It's Nova Assist
            </h2>
            <p className="text-secondaryText max-w-3xl mx-auto">
              Always-on. Insight-rich. Built to guide every step of your hiring journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Instantly Integrated Into Your Workflow",
                description: "Nova Assist plugs directly into your hiring tools and systems. No new logins, no learning curve; just instant support. Start getting intelligent answers the moment you need them."
              },
              {
                title: "24/7 Agentic AI Support",
                description: "Ask anything from requisition insights to candidate status updates. Nova delivers precise, real-time responses in natural language. It's like having a recruitment analyst by your side 24/7."
              },
              {
                title: "Grows with Your Team",
                description: "For nuanced or complex cases, expert help steps in. Our team understands hiring pressures and responds fast. You get the perfect blend of AI speed and human empathy."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-secondaryText">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-purple-gradient text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform the Way You Hire with Nova Assist.</h2>
            <p className="text-xl mb-8">
              Your team's silent strength. Your new hires' warmest welcome. Your co-pilot for everything.
            </p>
            <Link href="/schedule-demo">
              <motion.button 
                className="bg-white text-accent px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={preloadScheduleDemo}
              >
                <span>Book a Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NovaAssist; 