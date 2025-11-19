import { motion } from "framer-motion";
import Link from 'next/link';
import { memo } from "react";

// ServiceCard component
const ServiceCard = memo(({ icon, title, description, image }) => {
  // Determine the correct route and hash for each solution
  let linkTo = "/";
  if (icon === "1") linkTo = "/solutions/novacount#gen";
  else if (icon === "2") linkTo = "/solutions/novaassist";
  else if (icon === "3") linkTo = "/novatrack";
  else if (icon === "4") linkTo = "/novaengage#engagement";
  else if (icon === "5") linkTo = "/novaverify#verification";
  else if (icon === "6") linkTo = "/novaconnect#integration";

  return (
    <motion.div 
      className="relative bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-[0_4px_10px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12),0_16px_32px_rgba(0,0,0,0.1)] transition-all h-full border border-transparent hover:border-accent/60 group will-change-transform overflow-hidden"
      whileHover={{ y: -10, scale: 1.02, rotateX: 2, rotateY: 2 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
    >
      {/* Glow effect background */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          backgroundImage: `url(/assets/BG3.gif)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(10px)',
          transform: 'scale(1.1)',
        }}
      />
      
      {/* Content with relative positioning to appear above the background */}
      <div className="relative z-10">
        {image ? (
          <div className="mb-4 sm:mb-6 w-full flex items-center justify-center">
            <img 
              src={image} 
              alt={title} 
              className="w-28 h-28 sm:w-36 sm:h-32 md:w-48 md:h-40 object-contain"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="mb-4 sm:mb-6 bg-accent/10 group-hover:bg-accent/20 rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden transition-all">
            <img 
              src={`/assets/service-icon-${icon}.png`} 
              alt={title} 
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 transition-transform group-hover:scale-110"
              loading="lazy"
            />
          </div>
        )}
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-800 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-secondaryText text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{description}</p>
        <Link 
          href={linkTo}
          className="inline-flex items-center text-accent font-semibold hover:underline mt-auto transition-colors"
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
});

export default ServiceCard; 