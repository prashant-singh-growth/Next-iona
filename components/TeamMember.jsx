import { motion } from "framer-motion";
import { memo } from "react";

const TeamMember = memo(({ member, index }) => (
  <motion.div 
    className="bg-white p-6 rounded-3xl shadow-[0_4px_10px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12),0_16px_32px_rgba(0,0,0,0.1)] transition-all h-full border border-transparent hover:border-accent/60 group will-change-transform"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10, scale: 1.04, rotateX: 2, rotateY: 2 }}
  >
    <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-6">
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover transition-transform group-hover:scale-110"
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/300x300/darkgray/white?text=${member.name.replace(/\s+/g, '+')}`;
        }}
      />
    </div>
    <div className="text-center">
      <h4 className="font-bold text-primary text-xl mb-1 group-hover:text-accent transition-colors">{member.name}</h4>
      <p className="text-secondaryText">{member.position}</p>
    </div>
  </motion.div>
));

export default TeamMember; 