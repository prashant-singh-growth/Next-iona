import { motion } from "framer-motion";
import { memo } from "react";
import FeatureCard from "./FeatureCard";

const DifferenceSection = memo(() => {
  const features = [
    {
      icon: 'rapid',
      title: "Rapid Integration",
      description: "Deployed and working in days, not weeks. Start seeing value immediately without disrupting your existing systems."
    },
    {
      icon: 'ai',
      title: "AI-Powered Efficiency",
      description: "Automate workflows and enhance hiring speed. Make smarter decisions faster with intelligence built into every step."
    },
    {
      icon: 'onboarding',
      title: "Seamless Onboarding",
      description: "Automated processes for smooth employee transitions. Ensure every new hire feels prepared, welcomed, and ready to contribute from day one."
    }
  ];

  return (
    <section className="py-16 px-6 bg-lightGray">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The iona.ai Difference</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default DifferenceSection; 