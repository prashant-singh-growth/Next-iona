import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function FAQComponent({FAQList}) {
      const [activeIndex, setActiveIndex] = useState(null);
    
     
    
      const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
  return (
    <>
    {
        FAQList &&  <section className="w-full bg-white grid place-items-center px-5 md:px-10 pt-16 pb-24">
      <div className="w-full max-w-[1096px] flex flex-col gap-10">
        {/* Section title animation */}
        <motion.h2
          className="text-[40px] md:text-[48px] leading-[55px] md:leading-[60px] text-[#0D0D0D] font-lora font-medium"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Frequently asked questions
        </motion.h2>

        {/* FAQ items */}
        <div className="w-full flex flex-col">
          {FAQList.map((faq, index) => (
            <motion.button
              key={index}
              onClick={() => toggleFAQ(index)}
              className="py-5 md:py-[30px] border-[#D6D6D6] border-b text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="w-full flex justify-start gap-3 md:gap-5 items-center">
                <motion.div
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <FaMinus className="text-primary min-w-[20px] max-w-[20px]" />
                  ) : (
                    <FaPlus className="text-primary min-w-[20px] max-w-[20px]" />
                  )}
                </motion.div>

                <h3 className="text-lg md:text-[24px] md:leading-8 font-medium text-[#0D0D0D] font-lora">
                  {faq.question}
                </h3>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    key="answer"
                    initial={{ opacity: 0, height: 0, y: -5 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -5 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="mt-[15px] text-[#808080] text-base font-lora pl-8 md:pl-10 overflow-hidden"
                    dangerouslySetInnerHTML={{__html:faq.answer}}
                 />
                )}
            
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
    }
    </>
 
  )
}

export default FAQComponent