import { memo, useState } from "react";

// Performance optimized FAQ item component
const FAQItem = memo(({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <details 
        className="group"
        open={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      >
        <summary className="flex justify-between items-center p-4 cursor-pointer list-none focus:outline-none">
          <h3 className="font-semibold text-lg text-gray-800">{question}</h3>
          <svg
            className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </summary>
        <div className="p-4 pt-0 text-gray-600 bg-white animate-fadeIn">
          <p>{answer}</p>
        </div>
      </details>
    </div>
  );
});

export default FAQItem; 