import Link from 'next/link';
import { memo } from "react";

const CTASection = memo(() => {
  return (
    <section className="py-16 bg-blue-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">Ready to see high-volume hiring differently?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Get in touch to explore how NovaSuite's intelligent agentic AI solutions can directly contribute to your success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="zoom-in" data-aos-delay="200">
          <Link 
            href="/contact"
            className="bg-white text-accent px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us
          </Link>
          <Link 
            href="/schedule-demo"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors inline-block"
          >
            Schedule Demo
          </Link>
        </div>
      </div>
    </section>
  );
});

export default CTASection; 