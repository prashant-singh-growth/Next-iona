import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

/**
 * InfiniteMarquee Component - Creates a smooth, infinitely scrolling marquee
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to display in the marquee
 * @param {number} props.speed - Speed of the marquee (lower is faster)
 * @param {boolean} props.pauseOnHover - Whether to pause the marquee on hover
 */
const InfiniteMarquee = ({ children, speed = 40, pauseOnHover = true }) => {
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Debug log
  console.log("InfiniteMarquee rendering with children:", !!children);

  // Measure the container for responsiveness using useCallback
  const measure = useCallback(() => {
    if (marqueeRef.current) {
      // Measurement logic if needed in the future
      console.log("Marquee measured");
    }
  }, []);

  // Effect to measure initially and on resize
  useEffect(() => {
    measure();
    
    // Add resize event listener
    window.addEventListener('resize', measure);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', measure);
    };
  }, [measure]); // Now safe to include measure as dependency since it's wrapped in useCallback

  return (
    <div className="relative overflow-hidden py-6">
      <motion.div 
        className="flex items-center justify-center"
        animate={{ 
          x: isPaused ? undefined : ["0%", "-50%"] 
        }}
        transition={{ 
          repeat: Infinity,
          ease: "linear",
          duration: speed,
          repeatType: "loop"
        }}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={marqueeRef}
      >
        <div className="flex items-center justify-center">
          {children}
        </div>
        <div className="flex items-center justify-center">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee; 