import { motion } from "framer-motion";
import Link from 'next/link';
import { memo } from "react";

// Performance optimized CaseStudyCard component
const CaseStudyCard = memo(({ id, delay }) => (
  <motion.div 
    className="bg-white rounded-lg overflow-hidden shadow-custom hover:shadow-hover transition-all duration-300 h-full"
    data-aos="fade-up" 
    data-aos-delay={delay}
    whileHover={{ y: -5 }}
  >
    <img 
      src={`/assets/case-study-${id}.jpg`}
      alt={`Case Study ${id}`}
      className="w-full aspect-video object-cover"
      loading="lazy"
    />
    <div className="p-6">
      <h3 className="font-bold text-xl mb-3">How We Made Hiring Smarter (Part {id})</h3>
      <p className="text-secondaryText mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magnam, voluptates distinctio.
      </p>
      <Link href="/case-studies" className="text-accent font-bold flex items-center gap-2 hover:underline">
        LEARN MORE
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </motion.div>
));

export default CaseStudyCard; 