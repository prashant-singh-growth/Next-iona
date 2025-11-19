import Link from 'next/link';
import { memo } from "react";
import CheckItem from "./CheckItem";

const BenefitsSection = memo(() => {
  // Benefits data
  const benefits = [
    {
      title: "Rapid Deployment",
      description: "Go live in days, not the weeks other solutions demand."
    },
    {
      title: "Hasslefree Integration",
      description: "Plug into your existing system in under days —no drawn-out IT projects."
    },
    {
      title: "Automated Hiring Funnel",
      description: "From GenAI CV matching to background checks, complete every step in hours instead of months."
    },
    {
      title: "Proven Expertise",
      description: "Led by HR veterans with 50+ years of combined experience, ISO-certified, and fully compliant for secure, quality service."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          <div className="w-full lg:w-1/2 px-4" data-aos="fade-right">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8" 
              style={{
                background: "linear-gradient(90deg, #4F46E5 0%, #9333EA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 15px rgba(104, 85, 224, 0.4)",
              }}
            >More Than a Tool, Your Dedicated High-Volume Hiring Team (Without Adding to Your Payroll).</h2>
            <p className="text-secondaryText mb-6 sm:mb-8 text-base sm:text-lg">
              The market is saturated with software. We offer something fundamentally different: a guaranteed pathway to flawless, high-volume hiring. Imagine a solution that requires zero human intervention from your team, yet guarantees outcomes. That's the power of iona.ai.
            </p>
            <div className="space-y-4 sm:space-y-6">
              {benefits.map((benefit, index) => (
                <CheckItem 
                  key={index}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
            <Link 
              href="/about" 
              className="mt-6 sm:mt-8 inline-block bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Learn About Us
            </Link>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0" data-aos="fade-left">
            <img 
              src="/assets/confidence.gif"
              alt="Partnership Confidence" 
              className="w-full max-w-md mx-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default BenefitsSection; 