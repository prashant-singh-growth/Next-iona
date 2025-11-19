import { motion } from "framer-motion";
import { memo } from "react";

const ValueCard = memo(({ title, description, icon, delay, isHovered, onHover, onLeave }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        delay: delay * 0.2,
        ease: "easeOut" 
      } 
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg group"
      variants={cardVariants}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="p-8 bg-gradient-to-br from-white to-gray-50 border-b border-gray-100">
        <motion.div 
          className="flex items-center mb-6"
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          <motion.div 
            className="bg-accent/10 text-accent flex items-center justify-center w-12 h-12 rounded-lg mr-4 text-2xl"
            variants={iconVariants}
          >
            {icon}
          </motion.div>
          <motion.h3 
            className="font-bold text-xl text-primaryText"
            animate={{ 
              color: isHovered ? "#4F46E5" : "#1F2937",
              transition: { duration: 0.3 }
            }}
          >
            {title}
          </motion.h3>
        </motion.div>
        
        <motion.p 
          className="text-secondaryText"
          animate={{
            opacity: isHovered ? 1 : 0.8,
            transition: { duration: 0.3 }
          }}
        >
          {description}
        </motion.p>
      </div>
      
      <motion.div 
        className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 w-0 group-hover:w-full transition-all duration-500"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
});

export default ValueCard; 