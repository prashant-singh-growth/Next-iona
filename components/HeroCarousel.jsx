'use client'

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeroCarousel = () => {
  const router = useRouter();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  
  // Animation variants
  const titleAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } }
  };
  
  const subtitleAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.7, delay: 0.4 } }
  };
  
  const buttonAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.6 } }
  };
  
  // Preload function
  const preloadScheduleDemo = () => {
    return import("@/modules/ScheduleDemo");
  };
  
  // Preload the ScheduleDemo component when HeroCarousel mounts
  useEffect(() => {
    // Preload the component with a slight delay to prioritize rendering the current page
    const timer = setTimeout(() => {
      preloadScheduleDemo();
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleDemoClick = (e) => {
    e.preventDefault();
    preloadScheduleDemo().then(() => {
      router.push("/schedule-demo");
    });
  };

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] overflow-hidden">
      {/* Using a data attribute for video source instead of direct src to prevent inspection exposure */}
       <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
        onError={(e) => {
          console.error('Video loading error:', e);
          setVideoError(true);
        }}
        style={{ display: videoLoaded && !videoError ? 'block' : 'none' }}
      >
         <source src="https://scormsharelms.s3.us-east-1.amazonaws.com/homevideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {(!videoLoaded || videoError) && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 text-white z-10">
          <p className="text-lg font-semibold">
            {videoError
              ? "Error loading video. Please ensure the file exists in public/assets."
              : "Loading video..."}
          </p>
        </div>
      )}

      
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-[90%] md:max-w-[85%] lg:max-w-[80%]">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
            variants={titleAnimation}
            initial="initial"
            animate="animate"
          >
            The Future of High-Volume Hiring is Autonomous. Welcome to iona.ai. 
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl mb-6 md:mb-8"
            variants={subtitleAnimation}
            initial="initial"
            animate="animate"
          >
            The Intelligent Engine for High-Volume Hiring. Agentic AI: From Prospect to Productive, Seamlessly.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={buttonAnimation}
            initial="initial"
            animate="animate"
          >
            <Link 
              href="/schedule-demo" 
              onClick={handleDemoClick}
              onMouseEnter={preloadScheduleDemo} 
              className="z-10 relative w-full sm:w-auto"
            >
              <motion.button 
                className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-medium transition-colors w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Demo
              </motion.button>
            </Link>
            
            <Link href="/solutions/novacount" className="z-10 relative w-full sm:w-auto">
              <motion.button 
                className="bg-white text-accent px-6 py-3 rounded-lg font-medium transition-colors w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Solutions
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;