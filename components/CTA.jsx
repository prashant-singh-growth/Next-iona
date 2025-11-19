"use client"
import Link from 'next/link';
import { motion } from "framer-motion";

const CTA = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const buttonVariants = {
    normal: { scale: 1 },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.98 }
  };

    return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-mesh-gradient opacity-40"></div>
        <motion.div 
          className="absolute top-0 left-1/4 w-72 h-72 bg-brandBlue/10 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-brandRed/10 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            delay: 1,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-glass/70 backdrop-blur-lg p-12 rounded-2xl shadow-glass border border-white/20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-purple-gradient"
            variants={itemVariants}
          >
           Reimagine Hiring. Accelerate Growth.
          </motion.h2>
          
          <motion.p
            className="text-secondaryText text-lg mb-8 max-w-xl mx-auto"
            variants={itemVariants}
          >
            Experience the speed, precision, and impact of iona.ai; built for high-volume success.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
          >
            <motion.div
              className="inline-block"
              variants={buttonVariants}
              initial="normal"
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/schedule-demo"
                className="bg-purple-gradient text-white px-8 py-4 rounded-xl text-md font-medium flex items-center gap-2 justify-center mx-auto w-fit"
              >
                <span>Schedule a Demo</span>
                <motion.span 
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-6 flex items-center justify-center gap-3"
            variants={itemVariants}
          >
            {/* Removed testimonial user images and '+42' badge */}
          </motion.div>
        </motion.div>
      </div>
    </section>
    );
  };
  
  export default CTA;
  