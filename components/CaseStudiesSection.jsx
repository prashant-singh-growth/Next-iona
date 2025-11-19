import Link from 'next/link';
import { memo } from "react";

const CaseStudiesSection = memo(() => {
  return (
    <section className="py-16 md:py-24 bg-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">Client Case Studies</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-white rounded-lg overflow-hidden shadow-custom hover:shadow-hover transition-all h-full">
            <img 
              src="/assets/cstudy.jpg"
              alt="Insurance Company Case Study"
              className="w-full aspect-video object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-accent font-semibold mb-3">
                <span>FEATURED CASE STUDY</span>
                <span>•</span>
                <span>INSURANCE</span>
              </div>
              <h3 className="font-bold text-xl mb-3">From Prospect to Productive Powerhouse: How a Leading Life Insurance Titan Revolutionized Hiring</h3>
              <p className="text-secondaryText mb-4">
                Faced with scaling their salesforce by 500 professionals monthly, this client achieved a 90% reduction in onboarding time, 95% accuracy in document verification, and 89% lower onboarding costs with our AI-powered solution.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-lightGray text-primaryText text-xs px-3 py-1 rounded-full">90% faster onboarding</span>
                <span className="bg-lightGray text-primaryText text-xs px-3 py-1 rounded-full">95% AI accuracy</span>
                <span className="bg-lightGray text-primaryText text-xs px-3 py-1 rounded-full">89% cost reduction</span>
              </div>
              <Link href="/case-studies" className="text-accent font-bold flex items-center gap-2 hover:underline">
                READ FULL CASE STUDY
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-secondaryText mb-6">
                The client needed to onboard 500 sales professionals monthly across India. Their manual, vendor-dependent process was causing errors, delays, and a poor candidate experience with over 25 documents required per hire.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">The Solution</h3>
              <p className="text-secondaryText mb-6">
                We implemented an end-to-end automated hiring journey with AI-driven document verification, real-time offer generation, and multilingual support, transforming their recruitment process.
              </p>
            </div>
            
            <div className="mt-6 p-6 bg-blue-gradient text-white rounded-lg">
              <p className="italic mb-4">"iona.ai has significantly improved the Onboarding process and has been able to deliver with 0% down time. Considering this success, we are looking forward to implement iona.ai for other entities as well."</p>
              <p className="font-semibold">HR Director, Leading Insurance Provider</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <Link 
            href="/case-studies" 
            className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-medium inline-block transition-colors"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
});

export default CaseStudiesSection; 