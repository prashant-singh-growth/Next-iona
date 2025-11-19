import { motion } from "framer-motion";
import { memo } from "react";

const FeatureCard = memo(({ icon, title, description, delay }) => (
  <motion.div
    className="bg-card p-6 rounded-xl text-left border border-[#1C203B] flex items-center"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay * 0.2 }}
  >
    <div className="text-primary text-3xl bg-primaryLight p-3 rounded-full mr-4">
      {icon === 'rapid' && '⚡'}
      {icon === 'ai' && '🧠'}
      {icon === 'onboarding' && '🔄'}
    </div>
    <div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-secondaryText text-sm">{description}</p>
    </div>
  </motion.div>
));

export default FeatureCard; 