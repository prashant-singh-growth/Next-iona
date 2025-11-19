import { motion } from "framer-motion";
import { memo } from "react";
import { FaLinkedin } from "react-icons/fa";

const TeamSection = memo(() => {
  const teamMembers = [
    {
      name: "Amit Srivastava",
      position: "Business & Technology",
      image: `/assets/Amit.png`,
      linkedin: "https://www.linkedin.com/in/amitsriva/"
    },
    {
      name: "Ooj Amit Srivastava",
      position: "Engineering & Technology",
      image: `/assets/ooj.png`,
      linkedin: "https://www.linkedin.com/in/ooj/"
    },
    {
      name: "Abhijeet Chakravarty",
      position: "Product & Technology",
      image: `/assets/Abhijeet.png`,
      linkedin: "https://www.linkedin.com/in/abhijeet-chakravarty/"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Minds Behind iona.ai</h2>
          <p className="text-secondaryText max-w-xl mx-auto">
            A team of passionate innovators, dedicated to transforming hiring with purpose and impact.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="relative p-1 rounded-3xl bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50">
              <motion.div 
                className="bg-white rounded-3xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-2 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 } 
                }}
              >
                <div className="w-full aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/800x600/lightgray/white?text=${member.name.replace(/\s+/g, '+')}`;
                    }}
                  />
                </div>
                <div className="text-center p-6">
                  <h3 className="font-bold text-xl text-[#1C203B]">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 mt-1">
                    {member.position}
                  </p>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-[#0077B5] hover:text-[#005582] transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default TeamSection; 