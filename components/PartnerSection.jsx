import { motion } from "framer-motion";
import { memo, useCallback, useEffect, useState } from "react";
import InfiniteMarquee from "./InfiniteMarquee";

const PartnerSection = memo(() => {
  // Dynamic speed state
  const [marqueeSpeed, setMarqueeSpeed] = useState(18);

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 768) {
        setMarqueeSpeed(28); // Faster on mobile
      } else {
        setMarqueeSpeed(18); // Slower on desktop
      }
    };
    updateSpeed();
    window.addEventListener('resize', updateSpeed);
    return () => window.removeEventListener('resize', updateSpeed);
  }, []);

  // Memoize rendering partners
  const renderPartners = useCallback(() => {
    // Logo image data with different path formats to try
    const partners = [
      { 
        name: "Aditya Birla Capital", 
        imgSrc: "assets/partners/hdfc.png",
        className: "h-8 md:h-10 object-contain",
      },
      { 
        name: "Birla Capital", 
        imgSrc: "assets/partners/Birla.png",
        className: "h-8 md:h-10 object-contain",
      },
      { 
        name: "TMI NETWORK", 
        imgSrc: "assets/partners/image.png",
        className: "h-8 md:h-10 object-contain",
      },
      {
        name: "Ness", 
        imgSrc: "assets/partners/Ness-f6035e51.png",
        className: "h-7 md:h-9 object-contain",
      },
      {
        name: "Metropolis",
        imgSrc: "assets/partners/metropolis.png",
        className: "h-7 md:h-9 object-contain",
      },
      {
        name: "FAB",
        imgSrc: "assets/partners/fab-logo.png",
        className: "h-7 md:h-9 object-contain",
      },
      
    ];
    
    return partners.map((partner, i) => {
      // Create shortened display name
      const displayName = partner.name.split(' ')[0];
      
      // Create color based on index
      const colors = ["#9c27b0", "#2196f3", "#4caf50", "#ff9800", "#3f51b5", "#e91e63", "#009688", "#673ab7"];
      const color = colors[i % colors.length];
      
      return (
        <div
          key={i}
          className="flex items-center justify-center mx-4 md:mx-6"
        >
          <img 
            src={partner.imgSrc}
            alt={partner.name}
            className={`${partner.className} transition-all duration-300 hover:scale-110`}
            style={{
              filter: "drop-shadow(0px 2px 6px rgba(0,0,0,0.12))",
              maxWidth: "200px"
            }}
            onMouseEnter={(e) => {
              e.target.style.filter = "drop-shadow(0px 6px 12px rgba(0,0,0,0.25))";
              e.target.style.transform = "scale(1.15) translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.filter = "drop-shadow(0px 2px 6px rgba(0,0,0,0.12))";
              e.target.style.transform = "scale(1) translateY(0)";
            }}
            onError={(e) => {
              console.error(`Failed to load image: ${partner.imgSrc}`);
              // Replace with a styled text
              const parent = e.target.parentNode;
              const textElement = document.createElement('span');
              textElement.className = "text-xl md:text-2xl font-bold tracking-wider";
              textElement.style.color = color;
              textElement.innerText = displayName;
              
              // Replace the img with the text
              parent.replaceChild(textElement, e.target);
            }}
          />
        </div>
      );
    });
  }, []);

  return (
    <div 
      className="w-full py-12 overflow-hidden"
      style={{
        backgroundColor: "#ffffff", // Off-white background
        marginTop: "-1px", // Remove any gap between this and the carousel
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 relative flex flex-col md:flex-row items-start">
          <motion.div
            className="md:w-1/5 mb-8 md:mb-0 pr-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 
              className="text-3xl md:text-4xl font-extrabold relative inline-block" 
              style={{
                background: "linear-gradient(90deg, #4F46E5 0%, #9333EA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 15px rgba(104, 85, 224, 0.4)",
              }}
            >
              Our Clients
            </h2>
          </motion.div>
          
          <div className="md:w-4/5 overflow-hidden">
            <div className="relative">
              <InfiniteMarquee speed={marqueeSpeed} pauseOnHover={true} className="py-4">
                {renderPartners()}
              </InfiniteMarquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PartnerSection;