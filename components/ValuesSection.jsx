import { motion } from "framer-motion";
import { memo, useState } from "react";
import ValueCard from "./ValueCard";

const ValuesSection = memo(() => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const values = [
    {
      title: "Women Empowerment",
      description: "Provide unlimited opportunities for women to grow, lead, and thrive. We believe true progress begins when every woman is empowered to reach her fullest potential.",
      icon: "👑"
    },
    {
      title: "Extraordinary Achievement",
      description: "Enable every individual to turn ordinary potential into remarkable results. We nurture ambition and reward bold thinking that drives meaningful outcomes.",
      icon: "🚀"
    },
    {
      title: "Accountable Innovation",
      description: "Embrace personal responsibility to drive innovations that genuinely matter. Our breakthroughs are built on integrity, purpose, and a relentless pursuit of better.",
      icon: "💡"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      } 
    }
  };
  
  return (
    <section className="py-16 px-6 bg-lightGray relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6" 
              style={{
                background: "linear-gradient(90deg, #4F46E5 0%, #9333EA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 15px rgba(104, 85, 224, 0.4)",
              }}
            >
              Our Values
            </h2>
          </motion.div>
          <motion.p 
            className="text-secondaryText max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Core principles that guide everything we do
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
              delay={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default ValuesSection; 