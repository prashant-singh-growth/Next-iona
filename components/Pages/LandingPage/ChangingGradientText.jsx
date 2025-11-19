import React, { useState, useEffect } from "react";

const ChangingGradientText = () => {
  const texts = [
    "Onboards 90% Faster",
    "Cuts 50% operational Costs",
    "Works 100% Smarter",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2500); 

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h1 className="text-4xl max-w-[100vw] font-bold md:text-5xl lg:text-[58px] lg:leading-[64px] text-black/80 flex flex-col text-left gap-1 md:gap-3 transition-all duration-500">
         <span>Agentic AI - </span>
      <span
        key={currentIndex} 
        className="bg-clip-text text-transparent transition-opacity duration-700 ease-in-out text-4xl md:text-5xl"
        style={{
          backgroundImage:
            "linear-gradient(50.13deg, #6492EE 20.68%, #637CEB 29.92%, #6276E5 37.98%, #5A5EDA 47.12%, #3D52CA 56.25%, #1820B7 65.38%, #091CAF 68.75%)",
          display: "inline-block",
        }}
      >
        {texts[currentIndex]}
      </span>
    </h1>
  );
};

export default ChangingGradientText;
