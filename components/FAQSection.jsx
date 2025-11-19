import { memo } from "react";
import FAQItem from "./FAQItem";

const FAQSection = memo(() => {
  return (
    <section className="py-16 md:py-24 bg-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-2/5" data-aos="fade-right">
            <img 
              src="/assets/FAQ2.gif"
              alt="FAQ Robot" 
              className="max-w-md w-full mx-auto"
              loading="lazy"
            />
          </div>
          
          <div className="lg:w-3/5" data-aos="fade-left">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8" 
              style={{
                background: "linear-gradient(90deg, #4F46E5 0%, #9333EA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 15px rgba(104, 85, 224, 0.4)",
              }}
            >Frequently Asked Questions (FAQs)</h2>
            
            <div className="space-y-4">
              <FAQItem 
                question="What is NovaSuite of solutions by iona.ai?" 
                answer="NovaSuite by iona.ai is a comprehensive and integrated suite of agentic AI-powered solutions designed to automate and streamline the entire high-volume hiring journey, from the initial prospect to a fully productive employee. It's not just a collection of software tools, but a complete service aimed at significantly improving efficiency, accuracy, speed, and cost-effectiveness in large-scale recruitment."
              />
              <FAQItem 
                question="What does 'Prospect to Productive' mean? " 
                answer="This describes the entire lifecycle of a potential employee within your organization, starting from the moment they become a prospect (e.g., viewing a job ad) all the way to their becoming a fully engaged and productive member of your team. The Nova Suite addresses each critical stage of this journey."
              />
              <FAQItem 
                question="What makes the Nova Suite different from other HR software?" 
                answer="Our unique approach combines the intelligent automation of AI with a foundational understanding of core talent principles (First Principles), all while prioritizing a user-friendly experience. We also offer a level of personalized support and integration that sets us apart"
              />
              <FAQItem 
                question="Is the Nova Suite suitable for high-volume hiring?" 
                answer="Absolutely! The Nova Suite is specifically designed to excel in high-volume hiring environments, offering solutions that automate repetitive tasks, accelerate workflows, and ensure a consistent and positive experience for both your team and candidates.."
              />
              <FAQItem 
                question="What is the pricing model for the Nova Suite?" 
                answer="Our pricing is typically based on a usage based subscription model, tailored to your specific needs and the modules you select. We offer flexible plans to accommodate organizations of different sizes and hiring volumes. Please contact our sales team for a personalized quote."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FAQSection; 