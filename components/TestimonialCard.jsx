import { motion } from "framer-motion";
import { memo } from "react";

// Performance optimized TestimonialCard component
const TestimonialCard = memo(({ testimonial, author, position, image, animationDirection, delay }) => (
  <motion.div 
    className="bg-blue-gradient text-white p-6 md:p-8 rounded-lg h-full"
    data-aos={`fade-${animationDirection}`}
    data-aos-delay={delay}
    whileHover={{ scale: 1.02 }}
  >
    <p className="mb-6 italic">"{testimonial}"</p>
    <div className="flex items-center gap-4">
      <img 
        src="/assets/Testi_icon.jpg"
        alt={author}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
        loading="lazy"
      />
      <div>
        <h4 className="font-bold">{author}</h4>
        <p className="text-sm text-blue-100">{position}</p>
      </div>
    </div>
  </motion.div>
));

export default TestimonialCard; 