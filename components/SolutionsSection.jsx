import { motion, useAnimation } from "framer-motion";
import { memo, useEffect } from "react";
import ServiceCard from "./ServiceCard";

const SolutionsSection = memo(() => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.5 }
    });
  }, [controls]);
  
  // Typewriter effect variants
  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.15,
      }
    }
  };
  
  // Text for typewriter animation
  const titleText = "Our Solutions";

  // Services data
  const services = [
    {
      icon: "1",
      title: "NovaCount",
      description: "Stop letting spreadsheets and guesswork slow you down. Break free from manual processes and uncertainty.Empower teams with data-driven headcount planning.",
      image: `/assets/NovaCount.png`,
    },
    {
      icon: "2",
      title: "NovaAssist",
      description: "Your always-on partner for faster resolutions, smoother onboarding, and human-first assistance—powered by intelligent automation and real expertise.",
      image: `/assets/NovaAssist.png`,
    },
    {
      icon: "3",
      title: "NovaTrack",
      description: "Track candidates across every stage, channel, and touchpoint with complete visibility and control across your entire candidate pipeline.",
      image: `/assets/NovaTrack.png`,
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 overflow-hidden"
            variants={typewriterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {titleText.split('').map((char, index) => (
              <motion.span 
                key={index} 
                variants={letterVariants}
                className="inline-block"
                style={{
                  textShadow: "0 0 5px rgba(79, 70, 229, 0.3)"
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p 
            className="text-secondaryText text-base sm:text-lg max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            viewport={{ once: true }}
          >
            The Complete High-Volume Hiring Automation: iona.ai NovaSuite, Driven by Agentic AI & Guided by Human Expertise
          </motion.p>
        </div>
        <motion.div 
          className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3" 
          data-aos="fade-up" 
          data-aos-delay="200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default SolutionsSection; 