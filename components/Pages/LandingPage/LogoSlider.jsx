import React from "react";

export default function LogoSlider() {
  const logos = [
    "/assets/pages/landingpage/metropolis.png",
    "/assets/pages/landingpage/fab.png",
    "/assets/pages/landingpage/ness.png",
    "/assets/pages/landingpage/hdfc.png",
    "/assets/pages/landingpage/birla.png",
    "/assets/pages/landingpage/aditya.png",
  ];

  return (
    <div className="w-full flex flex-col mt-[60px] overflow-hidden">
      <p className="text-sm font-normal font-sora text-center font-lora">
        Trusted by leading brands and customers
      </p>

      <div className="relative w-full mt-7 overflow-hidden">
        {/* Left fade */}
        <div className="absolute top-0 left-0 h-full w-[15%] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Right fade */}
        <div className="absolute top-0 right-0 h-full w-[15%] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Logo strip */}
        <div className="flex animate-scroll-logo gap-10 whitespace-nowrap max-w-[80vw] md:max-w-full">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`logo-${i}`}
              className="h-8 md:h-10  transition-all flex-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
