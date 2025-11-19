import { motion } from "framer-motion";
import { memo } from "react";

const VisionMissionSection = memo(() => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto relative overflow-hidden">
      {/* Animated background GIF */}
      <img 
        src="/assets/iona-unscreen.gif"
        alt="iona.ai"
        className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/3 w-[280px] md:w-[420px] opacity-100 pointer-events-none z-0"
        aria-hidden="true"
      />
      <div className="grid md:grid-cols-2 gap-12 relative z-10">
        {/* Vision */}
        <motion.div 
          className="bg-gradient-to-br from-blue-50 via-white to-purple-50 p-10 rounded-2xl border border-accent/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          animate={{ y: [0, -15] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', type: 'spring', bounce: 0.25 }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-3xl blur-2xl z-0"></div>
          <h3 className="text-3xl font-extrabold mb-4 text-accent relative z-10 drop-shadow-lg">Vision</h3>
          <p className="text-secondaryText text-lg relative z-10">
          Vision
To illuminate the path to purposeful hiring through a powerful fusion of human wisdom and AI brilliance. Inspired by the clarity and resilience of Iona—the historic island that symbolizes knowledge and calm—we bring simplicity and insight to even the most complex talent challenges. With the transformative spark of Nova, we aim to create a future where hiring is seamless, inclusive, and where women are empowered to lead and thrive.
          </p>
        </motion.div>
        
        {/* Mission */}
        <motion.div 
          className="bg-gradient-to-br from-purple-50 via-white to-blue-50 p-10 rounded-2xl border border-accent/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          animate={{ y: [0, 15] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', type: 'spring', bounce: 0.25 }}
        >
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-tr-3xl blur-2xl z-0"></div>
          <h3 className="text-3xl font-extrabold mb-4 text-accent relative z-10 drop-shadow-lg">Mission</h3>
          <p className="text-secondaryText text-lg relative z-10">
          To reimagine the hiring journey from Prospect to Productive by combining First Principles thinking with advanced AI capabilities. Just as Iona served as a guiding light in times of uncertainty, we design solutions that strip away noise and focus on what truly matters, potential, purpose, and performance. Through the Nova Suite, we deliver high-impact, intuitive tools that accelerate outcomes, optimize operations, and champion equitable opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
});

export default VisionMissionSection; 