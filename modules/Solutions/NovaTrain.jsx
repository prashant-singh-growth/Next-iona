"use client"
import { motion } from "framer-motion";
import Link from 'next/link';
import MobileFeatureCard from "../../components/MobileFeatureCard";


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

const NovaTrain = () => {
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
              Train Before They Clock In
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Nova Train delivers mandatory training before Day One—fast, audit-ready, and 100% compliant.
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
                  Request a Personalized Demo
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
              Why Nova Train is a Game-Changer for High-Volume Onboarding
            </h2>
            <p className="text-secondaryText max-w-3xl mx-auto">
              In high-volume hiring, speed is leverage. What if your new hires showed up fully trained on their very first day?
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
                  "Nova Train turns mandatory learning into a competitive advantage.",
                  "It reimagines how you deliver training—smart, simple, and scalable.",
                  "Built from First Principles and powered by Nova's AI-driven automation.",
                  "Eliminates manual coordination, enhances engagement, and guarantees compliance.",
                  "All this happens before your new hire even walks through the door."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unmatched Features That Make Nova Train</h2>
            <p className="text-secondaryText max-w-3xl mx-auto">
              From compliance to confidence, Nova Train makes every training session count—at any hiring scale.
            </p>
          </motion.div>

          <div className="flex flex-col items-center">
            {/* Mobile View */}
            <div className="w-full md:hidden">
              <MobileFeatureCard 
                emoji="🎓"
                title="Day Zero Productivity"
                description="New hires complete mandatory training in the pre-joining phase"
                delay={0.1}
              />
              <MobileFeatureCard 
                emoji="💬"
                title="Chatbot-Guided Learning"
                description="Our intelligent chatbot delivers SCORM-compliant training modules and answers queries in real time"
                delay={0.2}
              />
              <MobileFeatureCard 
                emoji="🛡️"
                title="Audit-Ready Compliance"
                description="Every module, assessment, and certification is tracked, timestamped, and securely stored"
                delay={0.3}
              />
              <MobileFeatureCard 
                emoji="📚"
                title="Bite-Sized Learning"
                description="Engaging microlearning modules with built-in assessments and automated certification"
                delay={0.4}
              />
              <MobileFeatureCard 
                emoji="📊"
                title="Engagement Insights"
                description="Real-time analytics on module completion and attention spans to spot red flags"
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
                    <div className="text-4xl mb-1 bg-accent/10 p-3 rounded-full">🎓</div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-1">Day Zero Productivity</h3>
                  <p className="text-secondaryText text-sm">New hires complete mandatory training in the pre-joining phase</p>
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
                  title="Chatbot-Guided Learning" 
                  description="Our intelligent chatbot delivers SCORM-compliant training modules and answers queries in real time"
                  delay={0.25}
                />

                <FeatureCard 
                  emoji="🛡️" 
                  title="Audit-Ready Compliance" 
                  description="Every module, assessment, and certification is tracked, timestamped, and securely stored"
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
                  emoji="📚" 
                  title="Bite-Sized Learning" 
                  description="Engaging microlearning modules with built-in assessments and automated certification"
                  delay={0.45}
                />

                <FeatureCard 
                  emoji="📊" 
                  title="Engagement Insights" 
                  description="Real-time analytics on module completion and attention spans to spot red flags"
                  delay={0.5}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Middle Section */}
      <section className="w-full py-16 bg-purple-gradient text-white">
        <motion.div 
          className="max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Meets Scale</h2>
          <motion.p 
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From compliance to confidence, Nova Train makes every training session count—at any hiring scale.
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
              Request Your Personalized Demo
            </motion.button>
          </Link>
        </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works – 3 Ways Nova Train Transforms Training</h2>
            <p className="text-secondaryText max-w-3xl mx-auto">
              A seamless process to deliver, track, and perfect pre-joining training.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pre-Day One Learning",
                items: [
                  "Assign mandatory modules right after offer acceptance—cutting idle time between offer and start date.",
                  "Provide clear, structured learning paths customized to each role and department.",
                  "Enable completion of compliance requirements before the employee's first day on the job."
                ]
              },
              {
                title: "AI-Led, Human-Centered",
                items: [
                  "Chatbot assistance creates a frictionless learning experience that feels natural and engaging.",
                  "Intelligent system answers questions and provides guidance throughout the training process.",
                  "Balance automation with personal touch to ensure high engagement and completion rates."
                ]
              },
              {
                title: "Complete Visibility, Zero Admin",
                items: [
                  "Training scores, certifications, and audit trails are auto-recorded—freeing up your HR team.",
                  "Real-time dashboards show completion rates and identify potential issues before day one.",
                  "Automated reminders and notifications ensure timely completion without manual follow-up."
                ]
              }
            ].map((section, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + itemIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-accent mr-2">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nova Train: Make Every Minute Before Day One Count</h2>
          <motion.p 
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Reimagine compliance, boost productivity, and never chase a training certificate again.
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
              Request a Personalized Demo
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default NovaTrain; 