import { motion } from "framer-motion";
import { memo, useEffect, useState } from "react";

const headline = "Driving High-Volume Hiring with Predictive, Automated Workflows";

const AboutHeroBanner = memo(() => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(headline.slice(0, i + 1));
      i++;
      if (i === headline.length) clearInterval(interval);
    }, 2000 / headline.length); // ~2 seconds total
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-blue-500 to-purple-600 bg-clip-text text-transparent cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {displayed}
          {displayed.length !== headline.length && (
            <span className="inline-block w-2 h-7 align-middle bg-accent animate-pulse ml-1" style={{verticalAlign: '2px'}}></span>
          )}
        </motion.h1>
      </div>
    </section>
  );
});

export default AboutHeroBanner; 